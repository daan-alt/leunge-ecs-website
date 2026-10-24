"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Eased wheel scrolling for mouse users. It scrolls the real document (so the
// CSS scroll-driven reveals keep working) and is off for touch devices and
// under reduced motion, where native scrolling is better.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const lenis = new Lenis({ lerp: 0.11, anchors: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
