import type { Metadata, Viewport } from "next";
import { getContent, type Locale } from "@/content";
import { SITE_URL } from "@/lib/utils";

export const viewport: Viewport = {
  themeColor: "#08111f",
};

/** Site-wide metadata for one language (the two root layouts call this). */
export function siteMetadata(locale: Locale): Metadata {
  const content = getContent(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: content.meta.title,
      template: "%s | LEUNGE-ECS B.V.",
    },
    description: content.meta.description,
    keywords: content.meta.keywords,
    alternates: {
      canonical: content.routes.home,
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.ogDescription,
      url: `${SITE_URL}${content.routes.home === "/" ? "" : content.routes.home}`,
      siteName: "LEUNGE-ECS B.V.",
      locale: locale === "nl" ? "nl_NL" : "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
