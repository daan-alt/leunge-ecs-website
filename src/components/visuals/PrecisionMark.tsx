import { cn } from "@/lib/utils";

/** Original line-art mark — a measurement crosshair, for the precision/approach section. */
export function PrecisionMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 640" fill="none" className={cn("h-full w-full", className)} aria-hidden="true">
      <circle cx="320" cy="320" r="180" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 8" />
      <circle cx="320" cy="320" r="120" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      <circle cx="320" cy="320" r="60" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1" />
      <line x1="320" y1="100" x2="320" y2="220" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <line x1="320" y1="420" x2="320" y2="540" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <line x1="100" y1="320" x2="220" y2="320" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <line x1="420" y1="320" x2="540" y2="320" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      {Array.from({ length: 36 }).map((_, i) => {
        const a = (i / 36) * Math.PI * 2;
        const long = i % 9 === 0;
        const r1 = 180;
        const r2 = long ? 196 : 188;
        return (
          <line
            key={i}
            x1={320 + Math.cos(a) * r1}
            y1={320 + Math.sin(a) * r1}
            x2={320 + Math.cos(a) * r2}
            y2={320 + Math.sin(a) * r2}
            stroke="currentColor"
            strokeOpacity={long ? 0.35 : 0.15}
            strokeWidth="1"
          />
        );
      })}
      <circle cx="320" cy="320" r="3" fill="currentColor" fillOpacity="0.7" />
    </svg>
  );
}
