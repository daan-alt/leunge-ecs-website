import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TechnicalFrameProps {
  children?: ReactNode;
  caption?: string;
  className?: string;
}

/**
 * Elegant placeholder surface for imagery not yet supplied by the client.
 * Renders a navy technical panel (gradient + schematic + corner marks)
 * instead of a stock photo. Swap the children for a <Image /> once real
 * photography is available.
 */
export function TechnicalFrame({ children, caption, className }: TechnicalFrameProps) {
  return (
    <div className={cn("relative overflow-hidden bg-navy-deep", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-deep to-navy-deep" />
      <div className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-white/30" />
      <div className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-white/30" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-white/30" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-white/30" />
      <div className="relative flex h-full w-full items-center justify-center">{children}</div>
      {caption && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-[10px] uppercase tracking-[0.25em] text-mist/70">
          {caption}
        </div>
      )}
    </div>
  );
}
