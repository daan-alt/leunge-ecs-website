import { cn } from "@/lib/utils";

/** Original line-art schematic — an exploded parts/assembly diagram. Not a photograph. */
export function PartsDiagram({ className }: { className?: string }) {
  const parts = [
    { cx: 320, cy: 140, w: 90, h: 40 },
    { cx: 320, cy: 240, w: 130, h: 34 },
    { cx: 320, cy: 330, w: 70, h: 50 },
    { cx: 320, cy: 430, w: 150, h: 28 },
    { cx: 320, cy: 510, w: 60, h: 60 },
  ];

  return (
    <svg
      viewBox="0 0 640 640"
      fill="none"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <line x1="320" y1="90" x2="320" y2="560" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 8" />

      {parts.map((p, i) => (
        <g key={i}>
          <rect
            x={p.cx - p.w / 2}
            y={p.cy - p.h / 2}
            width={p.w}
            height={p.h}
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="1.25"
          />
          <line
            x1={p.cx + p.w / 2}
            y1={p.cy}
            x2={p.cx + p.w / 2 + 70}
            y2={p.cy}
            stroke="currentColor"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
          <circle cx={p.cx + p.w / 2 + 70} cy={p.cy} r="3" fill="currentColor" fillOpacity="0.5" />
          <text
            x={p.cx + p.w / 2 + 82}
            y={p.cy + 4}
            fill="currentColor"
            fillOpacity="0.55"
            fontSize="16"
            fontFamily="monospace"
          >
            {`0${i + 1}`}
          </text>
        </g>
      ))}

      <rect x="230" y="70" width="180" height="500" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 10" />
    </svg>
  );
}
