import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { content } from "@/content";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = { title: "Page not found | LEUNGE-ECS B.V." };

// Used for every URL that matches no page (the static export's 404.html). It
// has to bring its own <html> because the site has two root layouts (en, nl).
export default function GlobalNotFound() {
  const { notFound } = content;
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <body className="font-body antialiased">
        {/* The dark background lives on a wrapper: the global `body` rule would beat a utility class on <body>. */}
        <div className="flex min-h-screen flex-col items-start justify-center gap-6 bg-navy-ink px-6 py-24 text-white lg:px-24">
          <span className="t-eyebrow text-accent-bright">{notFound.label}</span>
          <h1 className="font-display t-display max-w-[11em]">{notFound.title}</h1>
          <p className="t-lead max-w-xl text-mist/75">{notFound.body}</p>
          <Link
            prefetch={false}
            href="/"
            className="inline-flex items-center gap-3 bg-accent-bright px-9 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] text-navy-ink"
          >
            {notFound.cta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </body>
    </html>
  );
}
