import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { PrecisionMark } from "@/components/visuals/PrecisionMark";

export function Approach() {
  const { approach } = content;

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10">
        <Reveal>
          <TechnicalFrame className="aspect-[16/10] w-full">
            <div className="h-2/3 w-2/3 text-mist/60">
              <PrecisionMark />
            </div>
          </TechnicalFrame>
        </Reveal>

        <Reveal delay={120}>
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {approach.label}
          </span>
          <h2 className="text-balance mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
            {approach.title}
          </h2>
          <p className="mt-5 max-w-lg font-body leading-relaxed text-ink">{approach.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
