import { getContent, type Locale } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

// The career timeline from the former About page, as a homepage section
// inside the "About" group (id="about" wraps Intro, Career, Principles and TechnicalDepth).
export function Career({ locale = "en" }: { locale?: Locale }) {
  const content = getContent(locale);
  const { about } = content;

  return (
    <section className="cv-auto bg-white py-20 lg:py-28">
      <div className="wrap">
        <Reveal>
          <span className="t-eyebrow text-accent-ink">{about.label}</span>
        </Reveal>
        <Reveal as="h2" className="font-display t-h2 mt-6 max-w-[12em] text-ink-dark">
          {about.title}
        </Reveal>
        <Reveal as="p" className="t-lead mt-8 max-w-2xl text-ink">
          {about.lead}
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <span className="t-eyebrow text-accent-ink">{about.pathLabel}</span>
            <div className="mt-8 border-t border-ink-dark/20 pt-5">
              <p className="font-display t-h3 text-ink-dark">{about.name}</p>
              <p className="t-mono mt-3 text-xs leading-relaxed text-ink">{about.role}</p>
            </div>
          </Reveal>

          <ol className="lg:col-span-8">
            {about.path.map((step) => (
              <Reveal
                as="li"
                key={step.marker}
                className="grid gap-3 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-10 lg:py-10"
              >
                <span className="t-mono text-sm text-accent-ink">{step.marker}</span>
                <div>
                  <h3 className="font-display t-h3 text-ink-dark">{step.title}</h3>
                  <p className="mt-3 max-w-xl font-body leading-relaxed text-ink">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
