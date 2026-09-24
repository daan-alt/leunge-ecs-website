import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

export function Why() {
  const { why } = content;

  return (
    <section id="waarom" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
        <Reveal>
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {why.label}
          </span>
        </Reveal>

        <Reveal delay={100} as="h2" className="text-balance mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
          {why.title}
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.principles.map((principle, i) => (
            <Reveal
              key={principle.title}
              delay={90 * i}
              className="card-lift group flex flex-col gap-5 border border-line bg-white p-7"
            >
              <span className="font-display text-sm font-bold text-accent transition-colors duration-300 group-hover:text-accent-bright">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-navy">{principle.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
