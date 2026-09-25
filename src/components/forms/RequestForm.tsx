"use client";

import { useState, type FormEvent } from "react";
import type { ExtraField, RequestFormContent } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { ACCEPT, uploadFiles, uploadsEnabled, validateFiles, type FileError } from "@/lib/uploads";

type Status = "idle" | "uploading" | "submitting" | "success" | "error";
type Kind = "service" | "parts" | "general";

const SUBJECT_PREFIX: Record<Kind, string> = {
  service: "New service request — LEUNGE-ECS website",
  parts: "New parts request — LEUNGE-ECS website",
  general: "New contact message — LEUNGE-ECS website",
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const fieldClass =
  "peer w-full border-0 border-b border-line bg-transparent py-3 font-body text-navy placeholder:text-transparent focus:border-accent focus:outline-none";
// Date/select inputs always show a value, so their label sits in the raised position.
const staticLabelClass = "pointer-events-none absolute left-0 -top-3.5 font-body text-xs text-ink";
const labelClass =
  "pointer-events-none absolute left-0 top-3 font-body text-ink transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-ink";

function ExtraFieldInput({ field, optional }: { field: ExtraField; optional: string }) {
  const id = `f-${field.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const label = (
    <>
      {field.label}
      {!field.required && <span className="text-ink/60"> ({optional})</span>}
    </>
  );
  return (
    <div className={`relative field-underline ${field.wide ? "sm:col-span-2" : ""}`}>
      {field.type === "select" ? (
        <select id={id} name={field.name} required={field.required} defaultValue={field.options?.[0]} className={fieldClass}>
          {field.options?.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type}
          required={field.required}
          inputMode={field.inputMode}
          placeholder=" "
          className={fieldClass}
        />
      )}
      <label htmlFor={id} className={field.type === "text" ? labelClass : staticLabelClass}>
        {label}
      </label>
    </div>
  );
}

export function RequestForm({ content, kind }: { content: RequestFormContent; kind: Kind }) {
  const [status, setStatus] = useState<Status>("idle");
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [fileError, setFileError] = useState<FileError | "fileUploadError" | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (fileError && fileError !== "fileUploadError") return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      // No access key configured at build time — see deploy.yml / README for setup.
      setStatus("error");
      return;
    }

    const formData = new FormData(e.currentTarget);
    // Files never go to Web3Forms (attachments need a paid plan) — they're uploaded
    // to Supabase Storage first and only their links are included in the email.
    const files = formData.getAll("attachment").filter((f): f is File => f instanceof File && f.size > 0);
    formData.delete("attachment");
    if (files.length > 0) {
      setStatus("uploading");
      try {
        const urls = await uploadFiles(files, kind);
        formData.set("Attachments", urls.join("\n"));
      } catch {
        setFileError("fileUploadError");
        setStatus("idle");
        return;
      }
    }
    setFileError(null);
    setStatus("submitting");
    formData.set("access_key", accessKey);
    formData.set("subject", SUBJECT_PREFIX[kind]);
    formData.set("from_name", "LEUNGE-ECS website");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
      const result = await response.json();
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
        <Reveal>
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {content.label}
          </span>
        </Reveal>

        <div className="mt-6 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal delay={100}>
            <h1 className="text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-sm font-body leading-relaxed text-ink">{content.intro}</p>

            <dl className="mt-10 space-y-5 border-t border-line pt-7">
              <div>
                <dt className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {content.directLabel}
                </dt>
                <dd className="mt-2 font-display text-lg font-bold text-navy">{content.location}</dd>
              </div>
              <div>
                <dt className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {content.scopeLabel}
                </dt>
                <dd className="mt-2 font-display text-lg font-bold text-navy">{content.scope}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={200}>
            {status === "success" ? (
              <div className="border border-line bg-mist p-10">
                <p className="font-display text-2xl font-bold text-navy">{content.form.success}</p>
                <p className="mt-3 font-body text-ink">{content.form.successDetail}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {content.specsNote && (
                  <div className="border-l-2 border-accent bg-mist px-5 py-4">
                    <p className="font-body text-xs font-bold uppercase tracking-[0.15em] text-accent">
                      {content.specsLabel}
                    </p>
                    <p className="mt-1.5 font-body text-sm leading-relaxed text-ink">
                      {content.specsNote}
                    </p>
                  </div>
                )}

                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="relative field-underline">
                    <input id="name" name="name" type="text" required placeholder=" " className={fieldClass} />
                    <label htmlFor="name" className={labelClass}>
                      {content.form.name}
                    </label>
                  </div>
                  <div className="relative field-underline">
                    <input id="company" name="company" type="text" placeholder=" " className={fieldClass} />
                    <label htmlFor="company" className={labelClass}>
                      {content.form.company} <span className="text-ink/60">({content.form.optional})</span>
                    </label>
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="relative field-underline">
                    <input id="email" name="email" type="email" required placeholder=" " className={fieldClass} />
                    <label htmlFor="email" className={labelClass}>
                      {content.form.email}
                    </label>
                  </div>
                  <div className="relative field-underline">
                    <input id="phone" name="phone" type="tel" placeholder=" " className={fieldClass} />
                    <label htmlFor="phone" className={labelClass}>
                      {content.form.phone} <span className="text-ink/60">({content.form.optional})</span>
                    </label>
                  </div>
                </div>

                {content.extraFields && (
                  <div className="grid gap-8 sm:grid-cols-2">
                    {content.extraFields.map((field) => (
                      <ExtraFieldInput key={field.name} field={field} optional={content.form.optional} />
                    ))}
                  </div>
                )}

                <div className="relative field-underline">
                  <input id="subject" name="subject_detail" type="text" placeholder=" " className={fieldClass} />
                  <label htmlFor="subject" className={labelClass}>
                    {content.form.subject} <span className="text-ink/60">({content.form.optional})</span>
                  </label>
                </div>

                <div className="relative field-underline">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder=" "
                    className={`${fieldClass} resize-none`}
                  />
                  <label htmlFor="message" className={labelClass}>
                    {content.form.message}
                  </label>
                </div>

                <div>
                  <label htmlFor="attachment" className="block font-body text-sm font-semibold text-navy">
                    {content.form.file} <span className="text-ink/60 font-normal">({content.form.optional})</span>
                  </label>
                  <p className="mt-1 font-body text-xs text-ink/70">
                    {uploadsEnabled ? content.form.fileHint : content.form.fileUnavailable}
                  </p>
                  <input
                    id="attachment"
                    name="attachment"
                    type="file"
                    multiple
                    accept={ACCEPT}
                    disabled={!uploadsEnabled}
                    onChange={(e) => {
                      const files = Array.from(e.currentTarget.files ?? []);
                      setFileNames(files.map((f) => f.name));
                      setFileError(validateFiles(files));
                    }}
                    className="disabled:cursor-not-allowed disabled:opacity-50 mt-3 block w-full border border-dashed border-line px-4 py-3 font-body text-sm text-ink file:mr-4 file:border-0 file:bg-navy file:px-4 file:py-2 file:font-body file:text-xs file:font-bold file:uppercase file:tracking-wide file:text-white hover:file:bg-accent"
                  />
                  {fileNames.length > 0 && (
                    <p className="mt-2 font-body text-xs text-ink/70">{fileNames.join(", ")}</p>
                  )}
                  {fileError && <p className="mt-2 font-body text-sm text-red-600">{content.form[fileError]}</p>}
                </div>

                {status === "error" && (
                  <p className="font-body text-sm text-red-600">{content.form.error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting" || status === "uploading"}
                  className="btn-premium inline-flex items-center gap-2 bg-navy px-8 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {status === "uploading"
                    ? content.form.uploading
                    : status === "submitting"
                      ? content.form.submitting
                      : content.form.submit}
                  {status === "idle" || status === "error" ? (
                    <span aria-hidden className="link-arrow">
                      →
                    </span>
                  ) : null}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
