import { getContent, type Locale } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { ExpertiseList } from "./ExpertiseList";

export function Expertise({ locale = "en" }: { locale?: Locale }) {
  const content = getContent(locale);
  const { expertise } = content;

  return (
    <section id="expertise" className="cv-auto section-y scroll-mt-16 bg-white">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="t-eyebrow text-accent-ink">{expertise.label}</span>
            </Reveal>
            <Reveal as="h2" className="font-display t-h2 mt-8 max-w-[11em] text-ink-dark">
              {expertise.title}
            </Reveal>
          </div>
          <Reveal as="p" className="t-lead max-w-md self-end text-ink lg:col-span-5">
            {expertise.intro}
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-24">
          <ExpertiseList areas={expertise.areas} cta={expertise.cta} routes={content.routes} />
        </div>

        <Reveal as="p" className="t-mono mt-12 max-w-xl text-xs leading-relaxed text-ink/85">
          {expertise.note}
        </Reveal>
      </div>
    </section>
  );
}
