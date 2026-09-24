"use client";

import { useEffect, useState } from "react";
import { content } from "@/content";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky inset-x-0 top-0 z-50 border-b border-line bg-white transition-shadow duration-300",
        scrolled && "header-elevated"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-[1300px] items-center justify-between px-6 lg:px-10">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {content.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link font-body text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-premium group hidden items-center gap-2 bg-navy px-6 py-3 font-body text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent md:inline-flex"
        >
          {content.nav.cta}
          <span aria-hidden className="link-arrow">→</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-line transition-colors hover:border-accent md:hidden"
          aria-label={open ? "Sluit menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-3 w-4">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-4 bg-navy transition-all",
                open && "top-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-px w-4 bg-navy transition-all",
                open && "bottom-1.5 -rotate-45"
              )}
            />
          </span>
        </button>
      </nav>

      <div
        className={cn(
          "absolute inset-x-0 top-full overflow-hidden bg-white shadow-lg transition-[max-height] duration-300 ease-in-out md:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="overflow-hidden border-t border-line px-6 py-6">
          <ul className="flex flex-col gap-5">
            {content.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-xl font-bold text-navy transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-premium mt-8 inline-flex w-full items-center justify-center gap-2 bg-navy px-5 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-white"
          >
            {content.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
