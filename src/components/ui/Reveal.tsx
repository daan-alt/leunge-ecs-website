"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Use the line-draw animation instead of fade-up. */
  line?: boolean;
}

type Phase = "hidden" | "visible" | "settled";

export function Reveal({ children, as: Tag = "div", className, delay = 0, line = false }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [phase, setPhase] = useState<Phase>("hidden");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPhase("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (phase !== "visible") return;
    // Once the transition has had time to settle, drop the transition/transform
    // classes so the element rests in plain, static styles rather than staying
    // in a lingering (even fully-resolved) transitioned state — some renderers
    // fail to repaint elements left that way.
    const timer = window.setTimeout(() => setPhase("settled"), 900 + delay);
    return () => window.clearTimeout(timer);
  }, [phase, delay]);

  const base = line ? "reveal-line" : "reveal";

  return (
    <Tag
      ref={ref}
      className={cn(phase === "settled" ? undefined : base, phase === "visible" ? "is-visible" : undefined, className)}
      style={phase === "visible" && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
