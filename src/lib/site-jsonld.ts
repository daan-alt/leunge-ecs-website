import { getContent, type Locale } from "@/content";
import { SITE_URL } from "@/lib/utils";

/** Organization + WebSite structured data for one language. Only facts already on the site. */
export function siteJsonLd(locale: Locale) {
  const content = getContent(locale);
  const homeUrl = `${SITE_URL}${content.routes.home === "/" ? "" : content.routes.home}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${homeUrl}/#website`,
        url: homeUrl,
        name: "LEUNGE-ECS B.V.",
        inLanguage: locale,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: "LEUNGE-ECS B.V.",
        description: content.meta.description,
        url: SITE_URL,
        areaServed: "Worldwide",
        address: { "@type": "PostalAddress", addressCountry: "NL" },
        knowsAbout: content.expertise.areas.map((a) => a.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: content.expertise.title,
          itemListElement: content.expertise.areas.map((a) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: a.title, description: a.description },
          })),
        },
      },
    ],
  };
}
