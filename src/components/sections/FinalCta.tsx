import Link from "next/link";
import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { InstrumentCluster } from "@/components/visuals/InstrumentCluster";

export function FinalCta() {
  const { finalCta } = content;

  return (
    <section className="relative overflow-hidden bg-navy-deep py-28 lg:py-44">
      <div aria-hidden className="absolute -bottom-1/3 -right-1/6 h-[80vmin] w-[80vmin] text-white/[0.09]">
        <InstrumentCluster />
      </div>
      <div aria-hidden className="hero-grain absolute inset-0" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/60 to-transparent" />

      <div className="wrap relative">
        <Reveal as="h2" className="font-display t-display max-w-[12em] text-white">
          {finalCta.titleLine1}
          <br />
          <span className="text-accent-bright">{finalCta.titleLine2}</span>
        </Reveal>

        <Reveal as="p" className="t-lead mt-10 max-w-xl text-mist/75">
          {finalCta.body}
        </Reveal>

        <Reveal className="mt-12 flex flex-col items-start gap-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/service-request"
              className="btn-premium-dark inline-flex items-center justify-center gap-3 bg-accent-bright px-9 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] text-navy-ink transition-colors hover:bg-white"
            >
              {finalCta.ctaService}
              <span aria-hidden className="link-arrow">→</span>
            </Link>
            <Link
              href="/parts-request"
              className="btn-premium-dark inline-flex items-center justify-center gap-3 border border-white/30 px-9 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-white hover:bg-white/5"
            >
              {finalCta.ctaParts}
              <span aria-hidden className="link-arrow">→</span>
            </Link>
          </div>
          <Link href="/contact" className="link-line text-mist/80 hover:text-white">
            {finalCta.ctaGeneral}
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
