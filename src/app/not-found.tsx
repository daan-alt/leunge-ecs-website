import Link from "next/link";
import { content } from "@/content";
import { PageHero } from "@/components/ui/PageHero";

export default function NotFound() {
  const { notFound } = content;

  return (
    <PageHero label={notFound.label} title={notFound.title} lead={notFound.body} h1>
      <Link
        href="/"
        className="btn-premium-dark mt-12 inline-flex items-center gap-3 bg-accent-bright px-9 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] text-navy-ink transition-colors hover:bg-white"
      >
        {notFound.cta}
        <span aria-hidden className="link-arrow">→</span>
      </Link>
    </PageHero>
  );
}
