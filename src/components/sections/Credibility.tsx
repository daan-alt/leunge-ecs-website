import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

export function Credibility() {
  const { credibility } = content;

  return (
    <section id="ervaring" className="bg-mist pt-20 pb-12 lg:pt-28 lg:pb-16">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
        <Reveal>
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {credibility.label}
          </span>
        </Reveal>

        <div className="mt-6 grid items-end gap-10 lg:grid-cols-[auto_1fr]">
          <Reveal delay={100}>
            <span className="block font-display text-[22vw] font-extrabold leading-none tracking-tighter text-navy sm:text-[13vw] lg:text-[9rem]">
              {credibility.stat}
            </span>
          </Reveal>

          <Reveal delay={200} className="max-w-lg pb-4">
            <p className="font-display text-2xl font-bold text-navy">{credibility.statLabel}</p>
            <p className="mt-4 font-body leading-relaxed text-ink">{credibility.statDetail}</p>
          </Reveal>
        </div>

        <Reveal delay={300} className="mt-14 grid gap-6 sm:grid-cols-2">
          {credibility.secondary.map((item) => (
            <div key={item.label} className="card-lift border border-line bg-white p-7">
              <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {item.label}
              </span>
              <p className="mt-3 font-display text-xl font-bold text-navy">{item.value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
