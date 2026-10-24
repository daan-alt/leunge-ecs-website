import Link from "next/link";
import { content } from "@/content";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  const { footer } = content;

  return (
    <footer className="border-t border-white/10 bg-navy-ink">
      <div className="wrap py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo light imgClassName="h-16" />
            <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-mist/65">{footer.tagline}</p>
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-2">
            <h3 className="t-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent-bright">
              {footer.navigationLabel}
            </h3>
            <ul className="mt-6 space-y-3.5">
              {content.nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link font-body text-sm text-mist/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer expertise" className="lg:col-span-3">
            <h3 className="t-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent-bright">
              {footer.expertiseLabel}
            </h3>
            <ul className="mt-6 space-y-3.5">
              {content.expertise.areas.map((area) => (
                <li key={area.index}>
                  <Link
                    href="/#expertise"
                    className="nav-link font-body text-sm text-mist/75 transition-colors hover:text-white"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="t-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent-bright">
              {footer.contactLabel}
            </h3>
            <p className="font-display mt-6 text-lg text-white">LEUNGE-ECS B.V.</p>
            <p className="mt-1 font-body text-sm text-mist/70">{footer.location}</p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/service-request"
                className="btn-premium-dark inline-flex items-center justify-center bg-accent-bright px-5 py-3 font-body text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-navy-ink transition-colors hover:bg-white"
              >
                {content.nav.ctaService}
              </Link>
              <Link
                href="/parts-request"
                className="inline-flex items-center justify-center border border-white/25 px-5 py-3 font-body text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-white hover:bg-white/5"
              >
                {content.nav.ctaParts}
              </Link>
              <Link href="/contact" className="link-line mt-2 w-fit text-mist/70 hover:text-white">
                {footer.contactCta}
              </Link>
            </div>
          </div>
        </div>

        <div className="t-mono mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.7rem] uppercase tracking-[0.14em] text-mist/45 md:flex-row md:items-center md:justify-between">
          <span>{footer.rightsLine(year)}</span>
          <span>{footer.location}</span>
        </div>
      </div>
    </footer>
  );
}
