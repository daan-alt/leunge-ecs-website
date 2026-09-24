import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { InstrumentCluster } from "@/components/visuals/InstrumentCluster";

export function About() {
  const { about } = content;

  return (
    <section id="over" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
        <Reveal>
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {about.label}
          </span>
        </Reveal>

        <div className="mt-10 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal delay={100}>
            <TechnicalFrame className="aspect-[4/5] w-full max-w-md" caption={about.imageCaption}>
              <div className="h-3/4 w-3/4 text-mist/50">
                <InstrumentCluster />
              </div>
            </TechnicalFrame>

            <div className="mt-6 max-w-md border-t border-line pt-5">
              <p className="font-display text-lg font-bold text-navy">{about.name}</p>
              <p className="mt-1 font-body text-sm text-ink">{about.role}</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              {about.title}
            </h2>

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="max-w-2xl font-body leading-relaxed text-ink">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
