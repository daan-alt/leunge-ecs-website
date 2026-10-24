import type { ReactNode } from "react";

/**
 * Dark title block shared by the inner pages (about, 404, request forms), so
 * every page opens with the same typographic language as the homepage hero.
 */
export function PageHero({
  label,
  title,
  lead,
  h1,
  children,
}: {
  label: string;
  title: string;
  lead?: string;
  /** Render the title as the page's <h1> (otherwise a <p>, for pages that bring their own h1). */
  h1?: boolean;
  children?: ReactNode;
}) {
  const Title = h1 ? "h1" : "p";
  return (
    <section className="relative overflow-hidden bg-navy-ink text-white">
      <div aria-hidden className="hero-grain absolute inset-0" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-navy-ink via-navy-deep to-navy" />
      <div className="wrap relative py-24 lg:py-36">
        <span className="t-eyebrow text-accent-bright">{label}</span>
        <Title className="font-display t-display mt-8 max-w-[11em] text-white">{title}</Title>
        {lead && <p className="t-lead mt-10 max-w-2xl text-mist/75">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
