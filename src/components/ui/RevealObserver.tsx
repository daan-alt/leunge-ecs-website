"use client";

import { useEffect } from "react";

/**
 * One shared IntersectionObserver for the whole page, instead of one per
 * <Reveal> instance (this site has ~50 of them). Mounted once in the root
 * layout; renders nothing.
 */
export function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal, .reveal-line");
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
  }, []);

  return null;
}
