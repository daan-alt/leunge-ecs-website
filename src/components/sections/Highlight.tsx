import Link from "next/link";
import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { PartsDiagram } from "@/components/visuals/PartsDiagram";

export function Highlight() {
  const { highlight } = content;

  return (
    <section id="onderdelen" className="bg-navy py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1300px] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <Reveal>
          <TechnicalFrame className="aspect-[4/3] w-full">
            <div className="h-2/3 w-2/3 text-mist/50">
              <PartsDiagram />
            </div>
          </TechnicalFrame>
        </Reveal>

        <Reveal delay={150}>
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent-bright">
            {highlight.label}
          </span>
          <h2 className="text-balance mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {highlight.title}
          </h2>
          <p className="mt-5 max-w-lg font-body leading-relaxed text-mist/80">{highlight.body}</p>
          <Link
            href="/parts-request"
            className="btn-premium-dark mt-8 inline-flex items-center gap-2 bg-white px-7 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-accent-bright hover:text-white"
          >
            {highlight.cta}
            <span aria-hidden className="link-arrow">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
