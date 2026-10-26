import type { CSSProperties } from "react";
import Link from "next/link";
import { getContent, type Locale } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { AnatomyFigure } from "@/components/visuals/AnatomyFigure";

// Scrollytelling without pinning: the block holding the figure is a view
// timeline (pure CSS, see `.anatomy-track` in globals.css). While it scrolls
// from just below the fold to the middle of the screen the piston pulls apart,
// the balloons appear and the parts list slides in. The balloon timing below
// must match the `s` values in AnatomyFigure.
const BALLOON_START = [0.66, 0.72, 0.78, 0.84, 0.9, 0.94];

export function Anatomy({ locale = "en" }: { locale?: Locale }) {
  const content = getContent(locale);
  const { anatomy } = content;

  return (
    <section id="anatomy" className="relative bg-navy-ink text-white">
      <div aria-hidden className="hero-grain absolute inset-0" />
      <div className="wrap relative pt-2 lg:pt-6">
        <Reveal>
          <span className="t-eyebrow text-accent-bright">{anatomy.label}</span>
        </Reveal>
        <Reveal as="h2" className="font-display t-h2 mt-8 max-w-[12em] text-white">
          {anatomy.title}
        </Reveal>
        <Reveal as="p" className="t-lead mt-8 max-w-xl text-mist/75">
          {anatomy.intro}
        </Reveal>
      </div>

      <div className="anatomy-track relative">
        <div className="anatomy-stage">
          <div className="wrap grid h-full items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="anatomy-figure mx-auto aspect-square w-full max-w-[34rem] overflow-hidden border border-white/10 lg:col-span-7 lg:max-w-none">
              <AnatomyFigure label={anatomy.figureLabel} />
            </div>

            <PartsList parts={anatomy.parts} className="anatomy-list lg:col-span-5" animated />
          </div>
        </div>
      </div>

      <div className="wrap relative pb-16 lg:pb-20">
        <PartsList parts={anatomy.parts} className="mb-12 lg:hidden" />
        <Link
          prefetch={false}
          href={content.routes.parts}
          className="btn-premium-dark inline-flex items-center gap-3 bg-accent-bright px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] text-navy-ink transition-colors hover:bg-white"
        >
          {anatomy.cta}
          <span aria-hidden className="link-arrow">→</span>
        </Link>
      </div>
    </section>
  );
}

function PartsList({ parts, className, animated }: { parts: { title: string; body: string }[]; className?: string; animated?: boolean }) {
  return (
    <ol className={className}>
      {parts.map((part, i) => (
        <li
          key={part.title}
          className={`${animated ? "an-note " : ""}flex gap-5 border-t border-white/15 py-4 lg:py-5`}
          style={animated ? ({ "--s": BALLOON_START[i], "--e": BALLOON_START[i] + 0.06 } as CSSProperties) : undefined}
        >
          <span className="t-mono mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent-bright text-[0.7rem] text-accent-bright">
            {i + 1}
          </span>
          <span>
            <span className="font-display text-lg text-white">{part.title}</span>
            <span className="mt-1 block font-body text-sm leading-relaxed text-mist/70">{part.body}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}
