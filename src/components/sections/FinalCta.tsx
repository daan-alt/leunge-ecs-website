import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { InstrumentCluster } from "@/components/visuals/InstrumentCluster";

export function FinalCta() {
  const { finalCta } = content;

  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 lg:py-32">
      <div className="absolute -bottom-1/3 -right-1/4 h-[60vmin] w-[60vmin] text-white/10">
        <InstrumentCluster />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1300px] px-6 text-center lg:px-10">
        <Reveal line className="mx-auto h-px w-16 bg-accent-bright" />

        <Reveal delay={80} as="h2" className="text-balance mx-auto mt-8 max-w-3xl font-display text-4xl font-bold leading-[1.15] text-white sm:text-5xl">
          {finalCta.titleLine1}
          <br />
          <span className="text-mist">{finalCta.titleLine2}</span>
        </Reveal>

        <Reveal delay={180} as="p" className="text-balance mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-mist/80">
          {finalCta.body}
        </Reveal>

        <Reveal delay={280} className="mt-10">
          <a
            href="#contact"
            className="btn-premium-dark inline-flex items-center gap-3 bg-accent-bright px-9 py-4 font-body text-sm font-bold uppercase tracking-wide text-navy-deep transition-colors hover:bg-white"
          >
            {finalCta.cta}
            <span aria-hidden className="link-arrow">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
