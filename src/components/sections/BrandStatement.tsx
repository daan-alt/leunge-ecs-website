import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

export function BrandStatement() {
  const { brandStatement } = content;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
        <Reveal>
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {brandStatement.label}
          </span>
        </Reveal>

        <Reveal delay={100} as="p" className="text-balance mt-6 max-w-4xl font-display text-3xl font-bold leading-[1.2] text-ink-dark sm:text-4xl lg:text-5xl">
          {brandStatement.lineOne}
          <br />
          <span className="text-navy">{brandStatement.lineTwo}</span>
        </Reveal>

        <Reveal delay={200} className="mt-10 grid gap-6 border-t border-line pt-8 lg:grid-cols-[1fr_2fr]">
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent">
            In practice
          </span>
          <p className="text-balance max-w-2xl font-body text-lg leading-relaxed text-ink">
            {brandStatement.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
