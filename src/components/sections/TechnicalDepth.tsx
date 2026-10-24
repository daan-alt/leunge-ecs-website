import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

// Laid out like a datasheet: a label column and the disciplines as a ruled list.
export function TechnicalDepth() {
  const { techSpec } = content;

  return (
    <section className="section-y bg-white">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="t-eyebrow text-accent">{techSpec.label}</span>
            </Reveal>
            <Reveal as="h2" className="font-display t-h2 mt-8 max-w-[11em] text-ink-dark">
              {techSpec.title}
            </Reveal>
          </div>
          <Reveal as="p" className="t-lead max-w-md self-end text-ink lg:col-span-5">
            {techSpec.intro}
          </Reveal>
        </div>

        <dl className="mt-16 border-b border-line lg:mt-24">
          {techSpec.groups.map((group) => (
            <Reveal
              key={group.label}
              className="grid gap-4 border-t border-line py-8 lg:grid-cols-12 lg:gap-16 lg:py-10"
            >
              <dt className="t-mono text-xs uppercase tracking-[0.18em] text-accent lg:col-span-4">
                {group.label}
              </dt>
              <dd className="flex flex-wrap gap-x-10 gap-y-3 lg:col-span-8">
                {group.items.map((item) => (
                  <span key={item} className="font-display t-h3 text-ink-dark">
                    {item}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
