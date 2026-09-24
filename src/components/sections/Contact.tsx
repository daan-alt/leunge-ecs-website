"use client";

import { useState, type FormEvent } from "react";
import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "peer w-full border-0 border-b border-line bg-transparent py-3 font-body text-navy placeholder:text-transparent focus:border-accent focus:outline-none";
const labelClass =
  "pointer-events-none absolute left-0 top-3 font-body text-ink transition-all peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-ink";

export function Contact() {
  const { contact } = content;
  const [status, setStatus] = useState<Status>("idle");

  // NOTE: front-end prototype only — wire this up to an API route / email
  // provider (e.g. Resend) before launch. No message is sent yet.
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
  }

  return (
    <section id="contact" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
        <Reveal>
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {contact.label}
          </span>
        </Reveal>

        <div className="mt-6 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal delay={100}>
            <h2 className="text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-5 max-w-sm font-body leading-relaxed text-ink">{contact.intro}</p>

            <dl className="mt-10 space-y-5 border-t border-line pt-7">
              <div>
                <dt className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {contact.directLabel}
                </dt>
                <dd className="mt-2 font-display text-lg font-bold text-navy">
                  {contact.location}
                </dd>
              </div>
              <div>
                <dt className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Inzetbaarheid
                </dt>
                <dd className="mt-2 font-display text-lg font-bold text-navy">{contact.scope}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={200}>
            {status === "success" ? (
              <div className="border border-line bg-mist p-10">
                <p className="font-display text-2xl font-bold text-navy">{contact.form.success}</p>
                <p className="mt-3 font-body text-ink">{contact.form.successDetail}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="relative field-underline">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder=" "
                      className={fieldClass}
                    />
                    <label htmlFor="name" className={labelClass}>
                      {contact.form.name}
                    </label>
                  </div>
                  <div className="relative field-underline">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder=" "
                      className={fieldClass}
                    />
                    <label htmlFor="company" className={labelClass}>
                      {contact.form.company} <span className="text-ink/60">({contact.form.optional})</span>
                    </label>
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="relative field-underline">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder=" "
                      className={fieldClass}
                    />
                    <label htmlFor="email" className={labelClass}>
                      {contact.form.email}
                    </label>
                  </div>
                  <div className="relative field-underline">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder=" "
                      className={fieldClass}
                    />
                    <label htmlFor="phone" className={labelClass}>
                      {contact.form.phone} <span className="text-ink/60">({contact.form.optional})</span>
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder=" "
                    className={fieldClass}
                  />
                  <label htmlFor="subject" className={labelClass}>
                    {contact.form.subject} <span className="text-ink/60">({contact.form.optional})</span>
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder=" "
                    className={`${fieldClass} resize-none`}
                  />
                  <label htmlFor="message" className={labelClass}>
                    {contact.form.message}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-premium inline-flex items-center gap-2 bg-navy px-8 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {status === "submitting" ? contact.form.submitting : contact.form.submit}
                  {status !== "submitting" && (
                    <span aria-hidden className="link-arrow">
                      →
                    </span>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
