import { cn } from "@/lib/utils";

/** Original line-art schematic — abstract engine/control cross-section. Not a photograph. */
export function EngineSchematic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 640"
      fill="none"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <rect x="120" y="90" width="400" height="460" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={i}
          x1="120"
          y1={150 + i * 70}
          x2="520"
          y2={150 + i * 70}
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
      ))}
      <circle cx="320" cy="320" r="140" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="320" cy="320" r="90" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="320" cy="320" r="4" fill="currentColor" fillOpacity="0.6" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x1 = 320 + Math.cos(angle) * 90;
        const y1 = 320 + Math.sin(angle) * 90;
        const x2 = 320 + Math.cos(angle) * 140;
        const y2 = 320 + Math.sin(angle) * 140;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
        );
      })}
      <rect x="160" y="130" width="60" height="30" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <rect x="420" y="470" width="80" height="40" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <path d="M120 500 L160 500 L160 460" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      <path d="M520 180 L480 180 L480 220" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      <circle cx="320" cy="320" r="200" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 6" />
    </svg>
  );
}
