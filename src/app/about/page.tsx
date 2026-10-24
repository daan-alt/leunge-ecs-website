import type { Metadata } from "next";
import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: content.about.title,
  description: content.about.lead,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { about } = content;

  return (
    <>
      <PageHero label={about.label} title={about.title} lead={about.lead} h1 />

      <section className="section-y bg-paper">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <span className="t-eyebrow text-accent">{about.pathLabel}</span>
            <div className="mt-10 border-t border-ink-dark/20 pt-5">
              <p className="font-display t-h3 text-ink-dark">{about.name}</p>
              <p className="t-mono mt-3 text-xs leading-relaxed text-ink">{about.role}</p>
            </div>
          </Reveal>

          <ol className="lg:col-span-8">
            {about.path.map((step) => (
              <Reveal
                as="li"
                key={step.marker}
                className="grid gap-3 border-t border-line py-9 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-10 lg:py-12"
              >
                <span className="t-mono text-sm text-accent">{step.marker}</span>
                <div>
                  <h2 className="font-display t-h3 text-ink-dark">{step.title}</h2>
                  <p className="t-lead mt-4 max-w-xl text-ink">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
