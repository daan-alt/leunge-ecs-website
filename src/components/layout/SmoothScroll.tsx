"use client";

import { useEffect } from "react";

// Eased wheel scrolling for mouse users. It scrolls the real document (so the
// CSS scroll-driven reveals keep working) and is off for touch devices and
// under reduced motion, where native scrolling is better. The library is
// loaded on demand so it never competes with the first render.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let cancelled = false;
    let frame = 0;
    let destroy: (() => void) | undefined;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({ lerp: 0.11, anchors: true });
      destroy = () => lenis.destroy();
      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      destroy?.();
    };
  }, []);

  return null;
}
