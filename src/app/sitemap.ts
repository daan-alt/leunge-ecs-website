import type { MetadataRoute } from "next";
import { features } from "@/lib/features";
import { LAST_UPDATED, SITE_URL } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(LAST_UPDATED);
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/service-request`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/parts-request`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    ...(features.wizard ? [{ url: `${SITE_URL}/request`, lastModified, changeFrequency: "yearly" as const, priority: 0.6 }] : []),
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];
}
