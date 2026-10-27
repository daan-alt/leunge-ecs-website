import Link from "next/link";
import { getContent, type Locale } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { Photo } from "@/components/ui/Photo";

export function Highlight({ locale = "en" }: { locale?: Locale }) {
  const content = getContent(locale);
  const { highlight } = content;

  return (
    <section className="cv-auto relative overflow-hidden bg-navy-ink py-20 text-white lg:py-28">
      <div aria-hidden className="hero-grain absolute inset-0" />
      <div className="wrap relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="lg:col-span-5">
          <span className="t-eyebrow text-accent-bright">{highlight.label}</span>
          <h2 className="font-display t-h2 mt-8 text-white">{highlight.title}</h2>
          <p className="t-lead mt-8 max-w-lg text-mist/75">{highlight.body}</p>
          <Link prefetch={false}
            href={content.routes.parts}
            className="btn-premium-dark mt-10 inline-flex items-center gap-3 bg-accent-bright px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] text-navy-ink transition-colors hover:bg-white"
          >
            {highlight.cta}
            <span aria-hidden className="link-arrow">→</span>
          </Link>
        </Reveal>

        <Reveal className="lg:col-span-7">
          <TechnicalFrame parallax className="aspect-[4/3] w-full">
            <Photo
              image={highlight.image}
              sizes="(min-width: 1400px) 780px, (min-width: 1024px) 55vw, 92vw"
            />
          </TechnicalFrame>
        </Reveal>
      </div>
    </section>
  );
}
