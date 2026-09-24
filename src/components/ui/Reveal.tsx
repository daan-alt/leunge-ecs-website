import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Use the line-draw animation instead of fade-up. */
  line?: boolean;
}

/**
 * Plain server-rendered markup — no client JS per instance. The actual
 * scroll-triggered reveal is handled by one shared observer (see
 * RevealObserver) that watches every ".reveal"/".reveal-line" element on
 * the page at once, instead of each Reveal instance running its own.
 */
export function Reveal({ children, as: Tag = "div", className, delay = 0, line = false }: RevealProps) {
  return (
    <Tag
      className={cn(line ? "reveal-line" : "reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
