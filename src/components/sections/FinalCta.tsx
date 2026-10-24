import Link from "next/link";
import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { ChartBackdrop } from "@/components/visuals/ChartBackdrop";

// Closing block: instead of two buttons, a request "console" — one row per
// way in, each a full-width link that fills orange on hover — over a faint
// nautical chart. Row layout lives in `.console-row` (globals.css): stacked
// on phones, three columns from lg.
export function FinalCta() {
  const { finalCta } = content;

  return (
    <section className="section-y relative overflow-hidden bg-navy-deep">
      <div aria-hidden className="absolute inset-0 text-white">
        <ChartBackdrop />
      </div>
      <div aria-hidden className="hero-grain absolute inset-0" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/45 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-deep to-transparent" />

      <div className="wrap col-guides relative grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-12">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="t-eyebrow text-accent-bright">{finalCta.label}</span>
          </Reveal>
          <Reveal as="h2" className="font-display t-display mt-8 text-white">
            {finalCta.titleLine1}
            <br />
            <span className="text-accent-bright">{finalCta.titleLine2}</span>
          </Reveal>
          <Reveal as="p" className="t-lead mt-10 max-w-md text-mist/75">
            {finalCta.body}
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6">
          <ul className="border-b border-white/15 bg-navy-deep/95 lg:bg-navy-deep/60 lg:backdrop-blur-[3px]">
            {finalCta.options.map((option) => (
              <li key={option.index}>
                <Link
                  href={option.href}
                  className={`console-row group border-t border-white/15 transition-colors duration-300 hover:border-accent-bright hover:bg-accent-bright ${
                    option.tag ? "border-l-2 border-l-accent-bright bg-accent-bright/[0.07]" : ""
                  }`}
                >
                  <span className="console-index t-mono flex items-center gap-3 text-xs text-accent-bright transition-colors duration-300 group-hover:text-navy-ink">
                    {option.index}
                    {option.tag && <UrgentTag tag={option.tag} className="lg:hidden" />}
                  </span>
                  <span className="console-title font-display t-h3 flex flex-wrap items-center gap-x-4 gap-y-2 text-white transition-colors duration-300 group-hover:text-navy-ink">
                    {option.title}
                    {option.tag && <UrgentTag tag={option.tag} className="max-lg:hidden" />}
                  </span>
                  <span className="console-desc font-body text-sm leading-relaxed text-mist/65 transition-colors duration-300 group-hover:text-navy-ink/80">
                    {option.description}
                  </span>
                  <span
                    aria-hidden
                    className="console-arrow text-2xl text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-navy-ink"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="t-mono mt-6 max-w-md text-xs leading-relaxed text-mist/55">{finalCta.responseNote}</p>
          <Link href="/contact" className="link-line mt-8 text-mist/80 hover:text-white">
            {finalCta.ctaGeneral}
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function UrgentTag({ tag, className }: { tag: string; className?: string }) {
  return (
    <span
      className={`t-mono inline-flex items-center gap-2 border border-accent-bright px-2 py-0.5 text-[0.65rem] font-normal uppercase tracking-[0.18em] text-accent-bright transition-colors duration-300 group-hover:border-navy-ink group-hover:text-navy-ink ${className ?? ""}`}
    >
      <span aria-hidden className="cp-led h-1.5 w-1.5 rounded-full bg-current" />
      {tag}
    </span>
  );
}
