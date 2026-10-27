import type { MetadataRoute } from "next";
import { features } from "@/lib/features";
import { PAGES, locales, type PageKey } from "@/lib/locale";
import { LAST_UPDATED, SITE_URL } from "@/lib/utils";

export const dynamic = "force-static";

const PRIORITY: Record<PageKey, number> = { home: 1, about: 0.6, service: 0.8, parts: 0.8, contact: 0.5, request: 0.6 };
const FREQUENCY: Record<PageKey, "monthly" | "yearly"> = { home: "monthly", about: "yearly", service: "yearly", parts: "yearly", contact: "yearly", request: "yearly" };

const url = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(LAST_UPDATED);
  const keys = (Object.keys(PAGES) as PageKey[]).filter((k) => k !== "about" && (k !== "request" || features.wizard));
  const active = features.dutch ? locales : (["en"] as const);

  return keys.flatMap((key) =>
    active.map((locale) => ({
      url: url(PAGES[key][locale]),
      lastModified,
      changeFrequency: FREQUENCY[key],
      priority: PRIORITY[key],
      ...(features.dutch
        ? { alternates: { languages: { en: url(PAGES[key].en), nl: url(PAGES[key].nl) } } }
        : {}),
    }))
  );
}
