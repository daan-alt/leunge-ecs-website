import Link from "next/link";
import { content } from "@/content";
import { ControlPanel } from "@/components/visuals/ControlPanel";
import { HeroParallax } from "@/components/ui/HeroParallax";

export function Hero() {
  const { hero } = content;

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-navy-ink lg:min-h-[calc(100svh-5rem)]"
    >
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-ink via-navy-deep to-navy" />
        <HeroParallax className="absolute inset-x-0 top-0 bottom-36 text-white will-change-transform lg:bottom-24">
          <ControlPanel layout="wide" className="lg:hidden" />
          <ControlPanel layout="right" className="hidden lg:block" />
        </HeroParallax>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-ink/90 via-navy-ink/60 to-navy-ink/20 lg:from-navy-ink lg:via-navy-ink/85 lg:via-45% lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-ink to-transparent" />
        <div className="hero-grain absolute inset-0" />
        <div className="wrap col-guides absolute inset-y-0 left-0 right-0" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 pb-12 pt-12 lg:px-10 lg:pb-10 lg:pt-10">
        <span className="t-eyebrow hero-in text-accent-bright">{hero.badge}</span>

        <h1 className="font-display t-display mt-7 max-w-[10em] text-white">
          <span className="hero-in block" style={{ animationDelay: "120ms" }}>{hero.titleLine1}</span>
          <span className="hero-in block text-white/55" style={{ animationDelay: "240ms" }}>{hero.titleLine2}</span>
        </h1>

        <p className="t-lead hero-in mt-7 max-w-xl text-mist/85" style={{ animationDelay: "380ms" }}>{hero.subtitle}</p>

        <div className="hero-in mt-8 hidden gap-4 lg:flex lg:items-center" style={{ animationDelay: "500ms" }}>
          <Link prefetch={false}
            href="/service-request"
            className="btn-premium-dark inline-flex items-center justify-center gap-3 bg-accent-bright px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] text-navy-ink transition-colors hover:bg-white"
          >
            {hero.ctaService}
            <span aria-hidden className="link-arrow">→</span>
          </Link>
          <Link prefetch={false}
            href="/parts-request"
            className="btn-premium-dark inline-flex items-center justify-center gap-3 border border-white/30 px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-white hover:bg-white/5"
          >
            {hero.ctaParts}
            <span aria-hidden className="link-arrow">→</span>
          </Link>
        </div>

        <p className="t-mono mt-6 max-w-xl text-xs leading-relaxed text-mist/60">{hero.tagline}</p>
      </div>

      <div className="relative border-t border-white/10 bg-navy-ink/80">
        <dl className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">
          {hero.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-5 lg:px-10 lg:py-7 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}
            >
              <dt className="t-mono text-[0.68rem] uppercase tracking-[0.18em] text-mist/60">{stat.label}</dt>
              <dd className="font-display mt-2 text-base text-white lg:text-xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
