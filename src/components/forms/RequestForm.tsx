"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { ExtraField, RequestFormContent } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
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
  "peer w-full rounded-none border-0 border-b border-line bg-transparent py-3 font-body text-base text-ink-dark placeholder:text-transparent focus:border-accent focus:outline-none user-invalid:border-red-600";
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

  // Deep link from the homepage ("Vessel out of service?"): /service-request?urgency=emergency
  useEffect(() => {
    const urgency = new URLSearchParams(window.location.search).get("urgency");
    const select = document.getElementById("f-urgency");
    if (!urgency || !(select instanceof HTMLSelectElement)) return;
    const match = Array.from(select.options).find((o) => o.value.toLowerCase().startsWith(urgency.toLowerCase()));
    if (match) select.value = match.value;
  }, []);

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
    <>
      <PageHero label={content.label} title={content.title} lead={content.intro} h1 />

      <section className="section-y relative bg-paper">
        <div className="wrap">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <dl className="space-y-8">
                <div className="border-t border-ink-dark/20 pt-5">
                  <dt className="t-eyebrow text-accent">{content.directLabel}</dt>
                  <dd className="font-display t-h3 mt-4 text-ink-dark">{content.location}</dd>
                </div>
                <div className="border-t border-ink-dark/20 pt-5">
                  <dt className="t-eyebrow text-accent">{content.scopeLabel}</dt>
                  <dd className="font-display t-h3 mt-4 text-ink-dark">{content.scope}</dd>
                </div>
              </dl>
              {content.specsNote && (
                <div className="mt-10 border-l-2 border-accent bg-white px-5 py-4">
                  <p className="t-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                    {content.specsLabel}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink">{content.specsNote}</p>
                </div>
              )}
            </aside>

            <Reveal>
            {status === "success" ? (
              <div role="status" className="border border-line bg-white p-8 sm:p-12">
                <p className="font-display t-h3 text-ink-dark">{content.form.success}</p>
                <p className="mt-3 font-body text-ink">{content.form.successDetail}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-9 border border-line bg-white p-6 sm:p-10">
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
                  <p role="alert" className="font-body text-sm text-red-600">{content.form.error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting" || status === "uploading"}
                  className="btn-premium inline-flex items-center gap-3 bg-navy-ink px-9 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-accent disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
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
    </>
  );
}
