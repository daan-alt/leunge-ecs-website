import type { ReactNode } from "react";
import { getContent, type Locale } from "@/content";
import { features } from "@/lib/features";
import { siteJsonLd } from "@/lib/site-jsonld";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Analytics } from "@/components/seo/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";

// Everything inside <body> that both language layouts share.
export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const content = getContent(locale);
  const switcher = features.dutch ? <LanguageSwitch labels={content.languageSwitch} locale={locale} /> : null;

  return (
    <>
      <JsonLd data={siteJsonLd(locale)} />
      <a href="#main" className="skip-link">
        {content.nav.skipLabel}
      </a>
      <Navigation nav={content.nav} routes={content.routes} switcher={switcher} />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer locale={locale} />
      <MobileCtaBar labels={{ service: content.nav.ctaService, parts: content.nav.ctaParts }} routes={content.routes} />
      <SmoothScroll />
      <Analytics />
    </>
  );
}
