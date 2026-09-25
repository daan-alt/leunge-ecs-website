import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  /** Kept for call-site compatibility; scroll-driven reveals have no time delay. */
  delay?: number;
  /** Use the line-draw animation instead of fade-up. */
  line?: boolean;
}

/**
 * Plain server-rendered markup, no client JS. The fade-in is a CSS
 * scroll-driven animation on `.reveal` / `.reveal-line` (see globals.css).
 */
export function Reveal({ children, as: Tag = "div", className, line = false }: RevealProps) {
  return (
    <Tag className={cn(line ? "reveal-line" : "reveal", className)}>
      {children}
    </Tag>
  );
}
