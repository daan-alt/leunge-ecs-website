"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One shared IntersectionObserver for the whole page, instead of one per
 * <Reveal> instance (this site has ~50 of them). Mounted once in the root
 * layout; renders nothing. Re-scans on every route change — the layout stays
 * mounted during client-side navigation, so without this, elements on the
 * newly rendered page would never be observed and stay invisible.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll(".reveal:not(.is-visible), .reveal-line:not(.is-visible)");
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
