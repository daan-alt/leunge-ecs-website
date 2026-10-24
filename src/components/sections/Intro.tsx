import Link from "next/link";
import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { Photo } from "@/components/ui/Photo";

export function Intro() {
  const { intro } = content;

  return (
    <section className="section-y bg-paper">
      <div className="wrap">
        <Reveal>
          <span className="t-eyebrow text-accent">{intro.label}</span>
        </Reveal>

        <Reveal
          as="p"
          className="font-display t-h2 mt-8 max-w-[18em] text-ink-dark"
        >
          {intro.statement}
        </Reveal>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative lg:col-span-6">
            <TechnicalFrame className="aspect-[4/3] w-full">
              <Photo
                image={intro.image}
                sizes="(min-width: 1400px) 640px, (min-width: 1024px) 45vw, 92vw"
              />
            </TechnicalFrame>
            <div className="absolute -bottom-6 right-4 bg-navy-ink px-7 py-6 text-white shadow-[0_24px_50px_-20px_rgba(8,17,31,0.6)] sm:right-8 lg:-right-8">
              <span className="font-display block text-6xl leading-none tracking-tight text-accent-bright lg:text-7xl">
                {intro.stat}
              </span>
              <span className="t-mono mt-3 block max-w-[11rem] text-[0.7rem] uppercase leading-snug tracking-[0.14em] text-mist/70">
                {intro.statLabel}
              </span>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-6">
            <div className="space-y-6">
              {intro.body.map((p, i) => (
                <p key={i} className={i === 0 ? "t-lead text-ink-dark" : "t-lead text-ink"}>
                  {p}
                </p>
              ))}
            </div>
            <p className="t-mono mt-8 border-l border-accent pl-4 text-xs leading-relaxed text-ink">
              {intro.statDetail}
            </p>
            <Link href="/contact" className="link-line mt-10 text-navy hover:text-accent">
              {intro.cta}
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
