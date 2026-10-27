import { getContent, type Locale } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";

export function Principles({ locale = "en" }: { locale?: Locale }) {
  const content = getContent(locale);
  const { principles } = content;

  return (
    <section className="cv-auto section-y relative overflow-hidden bg-navy-ink text-white">
      <div aria-hidden className="absolute inset-0">
        <div className="technical-frame absolute inset-0">
          <Photo image={principles.image} sizes="100vw" className="opacity-60" />
          <div className="frame-tone absolute inset-0" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-ink via-navy-ink/80 to-navy-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-ink/90 to-transparent" />
      </div>

      <div className="wrap col-guides relative">
        <Reveal>
          <span className="t-eyebrow text-accent-bright">{principles.label}</span>
        </Reveal>
        <Reveal as="h2" className="font-display t-h2 mt-8 max-w-[13em] text-white">
          {principles.title}
        </Reveal>

        <div className="mt-20 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-32 lg:grid-cols-4">
          {principles.items.map((item, i) => (
            <Reveal key={item.title} className="border-t border-white/20 pt-6">
              <span className="t-mono text-xs text-accent-bright">0{i + 1}</span>
              <h3 className="font-display t-h3 mt-5 text-white">{item.title}</h3>
              <p className="mt-4 font-body text-[0.95rem] leading-relaxed text-mist/70">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
