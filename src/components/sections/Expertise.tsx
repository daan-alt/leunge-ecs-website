import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconOnboardService,
  IconLubrication,
  IconSpareParts,
  IconAutomation,
  IconEngineering,
  IconTesting,
} from "@/components/visuals/ServiceIcons";

const icons = [
  IconOnboardService,
  IconLubrication,
  IconSpareParts,
  IconAutomation,
  IconEngineering,
  IconTesting,
];

export function Expertise() {
  const { expertise } = content;

  return (
    <section id="expertise" className="bg-mist pt-12 pb-20 lg:pt-16 lg:pb-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
        <Reveal as="h2" className="text-balance max-w-2xl font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
          {expertise.title}
        </Reveal>
        <Reveal delay={100} as="p" className="mt-5 max-w-xl font-body leading-relaxed text-ink">
          {expertise.intro}
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.areas.map((area, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={area.index} delay={80 * i}>
                <article className="card-lift flex h-full flex-col border border-line bg-white shadow-sm">
                  <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-navy-deep">
                    <span className="absolute left-4 top-4 font-body text-xs font-bold tracking-wide text-white/40">
                      {area.index}
                    </span>
                    <Icon className="card-lift-icon h-16 w-16 text-mist/85" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-navy">{area.title}</h3>
                    <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink">
                      {area.description}
                    </p>
                    <p className="mt-2 font-body text-xs leading-relaxed text-ink/70">
                      {area.detail}
                    </p>
                    <a
                      href="#contact"
                      className="btn-premium mt-5 inline-flex w-fit items-center gap-2 bg-navy px-5 py-2.5 font-body text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent"
                    >
                      Meer info
                      <span aria-hidden className="link-arrow">→</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} as="p" className="mt-10 max-w-xl font-body text-sm leading-relaxed text-ink/70">
          {expertise.note}
        </Reveal>
      </div>
    </section>
  );
}
