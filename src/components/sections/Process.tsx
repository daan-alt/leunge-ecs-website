import { getContent, type Locale } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Process({ locale = "en" }: { locale?: Locale }) {
  const content = getContent(locale);
  const { process } = content;

  return (
    <section className="cv-auto section-y bg-paper">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="t-eyebrow text-accent-ink">{process.label}</span>
            </Reveal>
            <Reveal as="h2" className="font-display t-h2 mt-8 max-w-[11em] text-ink-dark">
              {process.title}
            </Reveal>
          </div>
          <Reveal as="p" className="t-lead max-w-md self-end text-ink lg:col-span-5">
            {process.intro}
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {process.steps.map((step) => (
            <Reveal as="li" key={step.index} className="relative border-t border-ink-dark/20 pt-8">
              <span aria-hidden className="absolute -top-[5px] left-0 h-[9px] w-[9px] bg-accent-bright" />
              <div className="flex items-center justify-between text-accent-ink">
                <span className="t-mono text-xs text-accent-ink">{step.index}</span>
                <Icon name={step.icon} />
              </div>
              <h3 className="font-display t-h3 mt-5 text-ink-dark">{step.title}</h3>
              <p className="mt-4 font-body text-[0.95rem] leading-relaxed text-ink">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
