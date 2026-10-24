import Link from "next/link";
import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { Photo } from "@/components/ui/Photo";

export function ServicesIntro() {
  const { servicesIntro } = content;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1300px] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
            {servicesIntro.title}
          </h2>
          <div className="mt-6 space-y-4">
            {servicesIntro.body.map((p, i) => (
              <p key={i} className="max-w-xl font-body leading-relaxed text-ink">
                {p}
              </p>
            ))}
          </div>
          <Link
            href="/service-request"
            className="btn-premium mt-8 inline-flex items-center gap-2 bg-navy px-7 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent"
          >
            {servicesIntro.cta}
            <span aria-hidden className="link-arrow">→</span>
          </Link>
        </Reveal>

        <Reveal delay={150}>
          <TechnicalFrame className="aspect-[4/3] w-full">
            <Photo
              image={servicesIntro.image}
              sizes="(min-width: 1280px) 580px, (min-width: 1024px) 45vw, 92vw"
            />
          </TechnicalFrame>
        </Reveal>
      </div>
    </section>
  );
}
