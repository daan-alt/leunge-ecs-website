import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TechnicalFrameProps {
  children?: ReactNode;
  caption?: string;
  className?: string;
  /** Slow scroll-driven drift of the photo inside the frame. */
  parallax?: boolean;
}

/**
 * Consistent treatment for every photo: a navy tone laid over the image
 * (multiply + film grain, see `.frame-tone` in globals.css) and thin corner
 * marks, so differently lit photos read as one set instead of loose stock
 * blocks.
 */
export function TechnicalFrame({ children, caption, className, parallax }: TechnicalFrameProps) {
  return (
    <div className={cn("technical-frame relative overflow-hidden bg-navy-deep", parallax && "frame-parallax", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-deep to-navy-ink" />
      <div className="relative flex h-full w-full items-center justify-center">{children}</div>
      <div aria-hidden className="frame-tone pointer-events-none absolute inset-0 z-[5]" />
      <div aria-hidden className="pointer-events-none absolute z-10 left-4 top-4 h-3 w-3 border-l border-t border-white/40" />
      <div aria-hidden className="pointer-events-none absolute z-10 right-4 top-4 h-3 w-3 border-r border-t border-white/40" />
      <div aria-hidden className="pointer-events-none absolute z-10 bottom-4 left-4 h-3 w-3 border-b border-l border-white/40" />
      <div aria-hidden className="pointer-events-none absolute z-10 bottom-4 right-4 h-3 w-3 border-b border-r border-white/40" />
      {caption && (
        <div className="t-mono absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-mist/70">
          {caption}
        </div>
      )}
    </div>
  );
}
