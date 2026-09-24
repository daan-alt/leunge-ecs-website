import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

export function TechnicalDepth() {
  const { techSpec } = content;

  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
        <Reveal>
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent-bright">
            {techSpec.label}
          </span>
        </Reveal>

        <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal delay={100} as="h2" className="text-balance font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {techSpec.title}
          </Reveal>
          <Reveal delay={180} as="p" className="max-w-md self-end font-body leading-relaxed text-mist/80">
            {techSpec.intro}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techSpec.groups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={90 * i}
              className="border border-white/15 bg-white/5 p-7 transition-colors duration-300 hover:border-accent-bright hover:bg-white/10"
            >
              <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent-bright">
                {group.label}
              </span>
              <ul className="mt-5 space-y-2.5 border-t border-white/15 pt-5">
                {group.items.map((item) => (
                  <li key={item} className="font-body text-sm text-mist/90">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
