import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { ControlPanel } from "@/components/visuals/ControlPanel";

export function Hero() {
  const { hero } = content;

  return (
    <section id="top" className="relative flex min-h-[calc(100dvh-5rem)] items-end overflow-hidden bg-navy-deep">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy" />
        <div className="absolute inset-0 text-white">
          <ControlPanel />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1300px] px-6 pb-16 pt-40 lg:px-10">
        <Reveal className="inline-flex items-center gap-2 border border-accent-bright/40 bg-white/5 px-3.5 py-1.5">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent-bright">
            {hero.badge}
          </span>
        </Reveal>

        <Reveal delay={60} as="h1" className="text-balance mt-5 max-w-3xl font-display font-bold leading-tight text-white">
          <span className="block text-4xl sm:text-5xl lg:text-[55px] lg:leading-[1.3]">
            {hero.titleLine1}
          </span>
          <span className="mt-2 block text-3xl sm:text-4xl lg:text-[42px] lg:leading-[1.25]">
            {hero.titleLine2}
          </span>
        </Reveal>

        <Reveal delay={120} as="p" className="text-balance mt-5 max-w-xl font-body text-lg leading-relaxed text-mist">
          {hero.subtitle}
        </Reveal>

        <Reveal delay={220} as="p" className="mt-3 max-w-xl font-body text-sm leading-relaxed text-mist/70">
          {hero.tagline}
        </Reveal>
      </div>
    </section>
  );
}
