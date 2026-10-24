import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

// A compact datasheet: four ruled blocks, every item numbered and set on a
// dotted leader, instead of large headings. Numbering runs across the groups.
export function TechnicalDepth() {
  const { techSpec } = content;
  let counter = 0;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="t-eyebrow text-accent">{techSpec.label}</span>
            </Reveal>
            <Reveal as="h2" className="font-display t-h2 mt-6 max-w-[11em] text-ink-dark">
              {techSpec.title}
            </Reveal>
          </div>
          <Reveal as="p" className="max-w-md font-body leading-relaxed text-ink lg:col-span-5">
            {techSpec.intro}
          </Reveal>
        </div>

        <Reveal className="mt-12 grid border-l border-t border-line md:grid-cols-2 lg:mt-16">
          {techSpec.groups.map((group, gi) => (
            <div key={group.label} className="border-b border-r border-line p-6 lg:p-9">
              <div className="t-mono flex items-baseline justify-between gap-4 text-[0.7rem] uppercase tracking-[0.18em]">
                <span className="text-accent">
                  <span className="mr-3 text-ink/40">{String(gi + 1).padStart(2, "0")}</span>
                  {group.label}
                </span>
                <span className="text-ink/40">{String(group.items.length).padStart(2, "0")}</span>
              </div>

              <ul className="mt-6">
                {group.items.map((item) => {
                  counter += 1;
                  return (
                    <li
                      key={item}
                      className="group flex items-baseline gap-4 border-t border-line py-3.5 transition-colors duration-200 hover:bg-mist/60"
                    >
                      <span className="t-mono w-6 shrink-0 text-[0.7rem] text-ink/40">
                        {String(counter).padStart(2, "0")}
                      </span>
                      <span className="font-body text-[1.05rem] font-medium text-ink-dark transition-colors duration-200 group-hover:text-navy">
                        {item}
                      </span>
                      <span
                        aria-hidden
                        className="mb-1 min-w-4 flex-1 self-end border-b border-dotted border-ink/25 transition-colors duration-200 group-hover:border-accent"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
