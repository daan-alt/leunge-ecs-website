import Link from "next/link";
import { getContent, type Locale } from "@/content";
import { features } from "@/lib/features";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "@/components/ui/Logo";
import { BackToTop, LocalTime } from "./FooterStatus";

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const content = getContent(locale);
  const year = new Date().getFullYear();
  const { footer } = content;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-ink">
      <div aria-hidden className="hero-grain absolute inset-0" />

      {/* Status bar */}
      <div className="border-b border-white/10">
        <div className="wrap t-mono flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4 text-[0.7rem] uppercase tracking-[0.18em] text-mist/60">
          <span className="inline-flex items-center gap-3">
            <span aria-hidden className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-bright opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-bright" />
            </span>
            {footer.availability}
          </span>
          <LocalTime label={footer.timeLabel} />
          <BackToTop label={footer.backToTop} />
        </div>
      </div>

      <div className="wrap relative pb-6 pt-16 lg:pt-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo light href={content.nav.links[0].href} imgClassName="h-16" />
            <p className="mt-8 max-w-xs font-body text-sm leading-relaxed text-mist/60">{footer.tagline}</p>
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-3">
            <h2 className="t-eyebrow text-accent-bright">{footer.navigationLabel}</h2>
            <ul className="mt-8 space-y-3">
              {content.nav.links.map((link) => (
                <li key={link.href}>
                  <Link prefetch={false}
                    href={link.href}
                    className="group font-display inline-flex items-center gap-3 text-3xl text-white transition-colors hover:text-accent-bright"
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className="-translate-x-2 text-xl opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer expertise" className="lg:col-span-3">
            <h2 className="t-eyebrow text-accent-bright">{footer.expertiseLabel}</h2>
            <ul className="mt-8 space-y-3.5">
              {content.expertise.areas.map((area) => (
                <li key={area.index} className="flex items-baseline gap-3">
                  <span className="t-mono text-[0.65rem] text-mist/60">{area.index}</span>
                  <Link prefetch={false}
                    href={content.routes.expertise}
                    className="nav-link font-body text-sm text-mist/75 transition-colors hover:text-white"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="t-eyebrow text-accent-bright">{footer.contactLabel}</h2>
            <p className="font-display mt-8 text-lg text-white">LEUNGE-ECS B.V.</p>
            <p className="mt-1 font-body text-sm text-mist/65">{footer.location}</p>
            <ul className="mt-6 space-y-3">
              <li>
                <Link prefetch={false} href={content.routes.service} className="nav-link font-body text-sm text-mist/80 hover:text-white">
                  {content.nav.ctaService}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={content.routes.parts} className="nav-link font-body text-sm text-mist/80 hover:text-white">
                  {content.nav.ctaParts}
                </Link>
              </li>
              <li>
                <Link prefetch={false} href={content.routes.contact} className="nav-link font-body text-sm text-mist/80 hover:text-white">
                  {footer.contactCta}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Oversized wordmark, deliberately cropped by the bottom edge. */}
        <div aria-hidden className="footer-wordmark-crop mt-20 select-none lg:mt-28">
          <div className="footer-wordmark font-display">LEUNGE-ECS</div>
        </div>

        <div className="t-mono relative flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.7rem] uppercase tracking-[0.14em] text-mist/60 md:flex-row md:items-center md:justify-between">
          <span>{footer.rightsLine(year)}</span>
          {features.dutch ? (
            <LanguageSwitch labels={content.languageSwitch} locale={locale} className="text-mist/60" />
          ) : (
            <span>{footer.location}</span>
          )}
        </div>
      </div>
    </footer>
  );
}
