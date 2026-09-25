import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/service-request`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/parts-request`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];
}
