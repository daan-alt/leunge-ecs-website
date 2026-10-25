import Link from "next/link";
import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

// Plain-language reasons to get in touch, one ruled row each, linking straight
// to the matching request form. No claims about past work.
export function Situations() {
  const { situations } = content;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <Reveal>
          <span className="t-eyebrow text-accent-ink">{situations.label}</span>
        </Reveal>
        <Reveal as="h2" className="font-display t-h2 mt-6 max-w-[12em] text-ink-dark">
          {situations.title}
        </Reveal>

        <ul className="mt-12 border-b border-line lg:mt-16">
          {situations.items.map((item) => (
            <Reveal as="li" key={item.title}>
              <Link prefetch={false}
                href={item.href}
                className="group grid gap-x-10 gap-y-3 border-t border-line px-1 py-7 transition-colors duration-300 hover:bg-mist/70 lg:grid-cols-[3rem_1.1fr_1fr_11rem] lg:items-center lg:px-4 lg:py-9"
              >
                <Icon name={item.icon} className="h-7 w-7 text-accent-ink" />
                <span className="font-display t-h3 text-ink-dark transition-colors duration-300 group-hover:text-navy">
                  {item.title}
                </span>
                <span className="max-w-md font-body leading-relaxed text-ink">{item.body}</span>
                <span className="t-mono mt-1 inline-flex items-center gap-3 lg:justify-self-end text-[0.72rem] uppercase tracking-[0.16em] text-navy transition-colors duration-300 group-hover:text-accent-ink lg:mt-0">
                  {item.cta}
                  <span aria-hidden className="link-arrow text-base">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
