import { content } from "@/content";

// A slow, endless band of the six service names between two sections. Pure
// CSS (see `.marquee-track`), paused on hover, still under reduced motion.
// Decorative: the same names are readable in the services list above.
export function ServiceMarquee() {
  const titles = content.expertise.areas.map((a) => a.title);
  const row = (
    <ul className="flex shrink-0 items-center">
      {titles.map((title, i) => (
        <li key={title} className="flex items-center">
          <span className={`font-display marquee-word ${i % 2 === 0 ? "marquee-word-solid" : ""}`}>{title}</span>
          <span aria-hidden className="mx-8 h-2 w-2 shrink-0 bg-accent-bright lg:mx-12" />
        </li>
      ))}
    </ul>
  );

  return (
    <div aria-hidden className="marquee overflow-hidden border-y border-line bg-paper py-8 lg:py-12">
      <div className="marquee-track flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
