"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { SiteContent, WizardOption } from "@/content/types";
import { cn } from "@/lib/utils";

type Answers = { type?: string; urgency?: string; system?: string };

// Guided request: type -> (urgency, service only) -> system -> summary, then a
// plain link to the matching form. Only the type, urgency and system travel in
// the URL (never names or contact details); the form reads them on load.
export function RequestWizard({ wizard, areas, routes }: { wizard: SiteContent["wizard"]; areas: SiteContent["expertise"]["areas"]; routes: SiteContent["routes"] }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const headingRef = useRef<HTMLHeadingElement>(null);
  const mounted = useRef(false);

  const isService = answers.type !== "parts";
  // Steps: 0 type, 1 urgency (service only), 2 system, 3 summary. Parts skips urgency.
  const order = isService ? [0, 1, 2, 3] : [0, 2, 3];
  const position = order.indexOf(step);
  const total = order.length;

  const systemOptions: WizardOption[] = [
    ...areas
      .filter((a) => a.kind !== "parts")
      .map((a) => ({ value: a.title, title: a.title })),
    { value: wizard.systemOther, title: wizard.systemOther },
  ];

  // Move focus to the question whenever the step changes (keyboard and screen reader users).
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true; // don't steal focus on first load
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  const go = (delta: 1 | -1) => setStep(order[Math.min(Math.max(position + delta, 0), total - 1)]);
  const choose = (key: keyof Answers, value: string) => setAnswers((a) => ({ ...a, [key]: value }));

  const query = new URLSearchParams();
  if (isService && answers.urgency) query.set("urgency", answers.urgency);
  if (answers.system && answers.system !== wizard.systemOther) query.set("system", answers.system);
  const target = `${isService ? routes.service : routes.parts}${query.size ? `?${query}` : ""}`;

  const typeTitle = wizard.typeOptions.find((o) => o.value === answers.type)?.title;
  const urgencyTitle = wizard.urgencyOptions.find((o) => o.value === answers.urgency)?.title;

  const question =
    step === 0 ? wizard.typeQuestion : step === 1 ? wizard.urgencyQuestion : step === 2 ? wizard.systemQuestion : wizard.summaryTitle;
  const current: { key: keyof Answers; options: WizardOption[] } | null =
    step === 0
      ? { key: "type", options: wizard.typeOptions }
      : step === 1
        ? { key: "urgency", options: wizard.urgencyOptions }
        : step === 2
          ? { key: "system", options: systemOptions }
          : null;
  const canContinue = current ? Boolean(answers[current.key]) : true;

  return (
    <div className="border border-line bg-white p-6 sm:p-10">
      <div className="flex items-center justify-between gap-6">
        <p className="t-mono text-xs uppercase tracking-[0.18em] text-accent-ink" aria-live="polite">
          {wizard.stepLabel.replace("{step}", String(position + 1)).replace("{total}", String(total))}
        </p>
        <div aria-hidden className="flex flex-1 gap-1.5 sm:max-w-xs">
          {order.map((s, i) => (
            <span key={s} className={cn("h-1 flex-1 transition-colors duration-300", i <= position ? "bg-accent-bright" : "bg-line")} />
          ))}
        </div>
      </div>

      <h2 ref={headingRef} tabIndex={-1} className="font-display t-h3 mt-8 text-ink-dark outline-none">
        {question}
      </h2>

      {current ? (
        <fieldset className="mt-8">
          <legend className="sr-only">{question}</legend>
          <div className="grid gap-3">
            {current.options.map((option) => {
              const checked = answers[current.key] === option.value;
              return (
                <label
                  key={option.value}
                  className={cn(
                    "group flex cursor-pointer items-start gap-4 border px-5 py-4 transition-colors duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent-bright",
                    checked ? "border-navy bg-mist/70" : "border-line hover:border-navy/50 hover:bg-mist/40"
                  )}
                >
                  <input
                    type="radio"
                    name={current.key}
                    value={option.value}
                    checked={checked}
                    onChange={() => choose(current.key, option.value)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden
                    className={cn(
                      "mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                      checked ? "border-accent-ink" : "border-ink/40"
                    )}
                  >
                    {checked && <span className="h-2 w-2 rounded-full bg-accent-ink" />}
                  </span>
                  <span>
                    <span className="font-display text-lg text-ink-dark">{option.title}</span>
                    {option.description && (
                      <span className="mt-1 block font-body text-sm leading-relaxed text-ink">{option.description}</span>
                    )}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      ) : (
        <div className="mt-8">
          <dl className="divide-y divide-line border-y border-line">
            <SummaryRow label={wizard.summaryLabels.type} value={typeTitle} />
            {isService && <SummaryRow label={wizard.summaryLabels.urgency} value={urgencyTitle} />}
            <SummaryRow label={wizard.summaryLabels.system} value={answers.system} />
          </dl>
          <p className="mt-5 font-body text-sm leading-relaxed text-ink">{wizard.summaryNote}</p>
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center gap-4">
        {position > 0 && (
          <button
            type="button"
            onClick={() => go(-1)}
            className="link-line text-navy hover:text-accent-ink"
          >
            <span aria-hidden>←</span>
            {wizard.back}
          </button>
        )}
        {current ? (
          <button
            type="button"
            disabled={!canContinue}
            onClick={() => go(1)}
            className="btn-premium inline-flex items-center gap-3 bg-navy-ink px-9 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-accent disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-navy-ink disabled:hover:shadow-none"
          >
            {wizard.next}
            <span aria-hidden className="link-arrow">→</span>
          </button>
        ) : (
          <Link
            prefetch={false}
            href={target}
            className="btn-premium inline-flex items-center gap-3 bg-accent-bright px-9 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] text-navy-ink transition-colors hover:bg-navy-ink hover:text-white"
          >
            {wizard.continue}
            <span aria-hidden className="link-arrow">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr]">
      <dt className="t-mono text-xs uppercase tracking-[0.18em] text-ink/85">{label}</dt>
      <dd className="font-display text-lg text-ink-dark">{value ?? "—"}</dd>
    </div>
  );
}
