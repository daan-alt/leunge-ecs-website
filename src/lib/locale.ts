import { features } from "@/lib/features";

export type Locale = "en" | "nl";
export const locales: Locale[] = ["en", "nl"];

// One row per page: its path in each language. English keeps the original
// URLs (no prefix); Dutch lives under /nl.
export const PAGES = {
  home: { en: "/", nl: "/nl" },
  about: { en: "/about", nl: "/nl/over-ons" },
  service: { en: "/service-request", nl: "/nl/service-aanvragen" },
  parts: { en: "/parts-request", nl: "/nl/onderdelen-aanvragen" },
  contact: { en: "/contact", nl: "/nl/contact" },
  request: { en: "/request", nl: "/nl/aanvraag" },
} as const;

export type PageKey = keyof typeof PAGES;

const normalize = (pathname: string) => (pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname);

/** Which page (and language) a pathname belongs to; null for anything else. */
export function resolvePath(pathname: string): { key: PageKey; locale: Locale } | null {
  const path = normalize(pathname);
  for (const key of Object.keys(PAGES) as PageKey[]) {
    for (const locale of locales) {
      if (PAGES[key][locale] === path) return { key, locale };
    }
  }
  return null;
}

/** Path of the same page in another language (falls back to that language's home). */
export function counterpart(pathname: string, to: Locale): string {
  const hit = resolvePath(pathname);
  if (hit) return PAGES[hit.key][to];
  return to === "nl" ? PAGES.home.nl : PAGES.home.en;
}

/** Metadata `alternates` for a page: canonical plus hreflang links when Dutch is on. */
export function alternatesFor(key: PageKey, locale: Locale) {
  return {
    canonical: PAGES[key][locale],
    ...(features.dutch ? { languages: { en: PAGES[key].en, nl: PAGES[key].nl, "x-default": PAGES[key].en } } : {}),
  };
}
