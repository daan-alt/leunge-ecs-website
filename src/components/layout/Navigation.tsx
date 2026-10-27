"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Routes, SiteContent } from "@/content/types";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

type Section = "top" | "expertise" | "contact";
// id of the closing request block (FinalCta)
const CTA_ID = "get-in-touch";

export function Navigation({ nav, routes, switcher }: { nav: SiteContent["nav"]; routes: Routes; switcher?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = (usePathname() ?? "/").replace(/\/$/, "") || "/";
  const onHome = pathname === routes.home;

  // Scroll-spy for the homepage: which part of the page is under the "reading line".
  // Home = everything above the services, Expertise = the services section,
  // Contact = the closing request block. Between those nothing is highlighted.
  const [section, setSection] = useState<Section | null>("top");
  useEffect(() => {
    if (!onHome) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      const box = (id: string) => document.getElementById(id)?.getBoundingClientRect();
      const expertise = box("expertise");
      const cta = box(CTA_ID);
      if (cta && cta.top <= line && cta.bottom > line) setSection("contact");
      else if (expertise && expertise.top <= line && expertise.bottom > line) setSection("expertise");
      else if (!expertise || expertise.top > line) setSection("top");
      else setSection(null);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [onHome]);

  // On the homepage the anchor links follow the scroll position; on other pages the link of the current page is active.
  const sectionOf = (href: string): Section | null =>
    href.endsWith("#top") ? "top" : href.endsWith("#expertise") ? "expertise" : href === routes.contact ? "contact" : null;
  const isActive = (href: string) =>
    onHome ? sectionOf(href) !== null && sectionOf(href) === section : !href.includes("#") && pathname === href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "sticky inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-white/10 bg-navy-ink/95 backdrop-blur-xl"
          : "border-white/5 bg-navy-ink"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-[height] duration-300 lg:px-10",
          scrolled ? "h-16" : "h-16 lg:h-20"
        )}
      >
        <Logo light priority href={nav.links[0].href} imgClassName={scrolled ? "h-11 lg:h-12" : "h-12 lg:h-14"} />

        <ul className="hidden items-center gap-10 lg:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link prefetch={false}
                href={link.href}
                aria-current={isActive(link.href) ? (onHome ? "location" : "page") : undefined}
                className={cn(
                  "nav-link t-mono text-[0.78rem] uppercase tracking-[0.14em] transition-colors hover:text-white",
                  isActive(link.href) ? "is-active text-white" : "text-mist/80"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          {switcher}
          <Link prefetch={false}
            href={routes.service}
            className="btn-premium-dark inline-flex items-center gap-2 border border-white/25 px-5 py-2.5 font-body text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-white hover:bg-white/5"
          >
            {nav.ctaService}
          </Link>
          <Link prefetch={false}
            href={routes.parts}
            className="btn-premium-dark inline-flex items-center gap-2 bg-accent-bright px-5 py-2.5 font-body text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-navy-ink transition-colors hover:bg-white"
          >
            {nav.ctaParts}
            <span aria-hidden className="link-arrow">→</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-white/20 transition-colors hover:border-accent-bright lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-3 w-4">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-4 bg-white transition-all",
                open && "top-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-px w-4 bg-white transition-all",
                open && "bottom-1.5 -rotate-45"
              )}
            />
          </span>
        </button>
      </nav>

      <span aria-hidden className="scroll-progress absolute inset-x-0 -bottom-px h-px bg-accent-bright" />
    </header>

    {/* Sibling of the header on purpose: the header's backdrop-filter would otherwise become the containing block of this fixed panel. */}
      <div
        data-lenis-prevent
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-[45] overflow-y-auto bg-navy-ink transition-[opacity,visibility] duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex min-h-full flex-col px-6 pb-10 pt-8">
          <ul className="flex flex-col">
            {nav.links.map((link, i) => (
              <li key={link.href} className="border-b border-white/10">
                <Link prefetch={false}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "font-display flex items-baseline justify-between py-5 text-3xl transition-colors hover:text-accent-bright",
                    isActive(link.href) ? "text-accent-bright" : "text-white"
                  )}
                >
                  {link.label}
                  <span className="t-mono text-xs text-mist/60">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            {switcher && <div className="mb-3">{switcher}</div>}
            <Link prefetch={false}
              href={routes.service}
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center border border-white/30 px-5 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] text-white"
            >
              {nav.ctaService}
            </Link>
            <Link prefetch={false}
              href={routes.parts}
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center bg-accent-bright px-5 py-4 font-body text-sm font-semibold uppercase tracking-[0.08em] text-navy-ink"
            >
              {nav.ctaParts}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
