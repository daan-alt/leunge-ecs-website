import { content } from "@/content";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto max-w-[1300px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_1fr_0.9fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-mist/70">
              {content.footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigatie">
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-accent-bright">
              Navigatie
            </h3>
            <ul className="mt-4 space-y-3">
              {content.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link font-body text-sm text-mist/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer expertise">
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-accent-bright">
              Expertise
            </h3>
            <ul className="mt-4 space-y-3">
              {content.expertise.areas.slice(0, 5).map((area) => (
                <li key={area.index}>
                  <a
                    href="#expertise"
                    className="nav-link font-body text-sm text-mist/80 transition-colors hover:text-white"
                  >
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="bg-white/5 p-6">
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-accent-bright">
              Contact
            </h3>
            <p className="mt-4 font-display text-lg font-semibold text-white">LEUNGE-ECS B.V.</p>
            <p className="mt-1 font-body text-sm text-mist/80">{content.footer.location}</p>
            <a
              href="#contact"
              className="btn-premium-dark mt-5 inline-flex items-center gap-2 bg-accent-bright px-5 py-2.5 font-body text-sm font-bold uppercase tracking-wide text-navy-deep transition-colors hover:bg-white"
            >
              {content.nav.cta}
              <span aria-hidden className="link-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 font-body text-xs uppercase tracking-[0.1em] text-mist/50 md:flex-row md:items-center md:justify-between">
          <span>{content.footer.rightsLine(year)}</span>
          <span>{content.footer.location}</span>
        </div>
      </div>
    </footer>
  );
}
