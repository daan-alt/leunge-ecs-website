import { cn } from "@/lib/utils";

/** Original line-art schematic — abstract instrumentation / gauge cluster. Not a photograph. */
export function InstrumentCluster({ className }: { className?: string }) {
  const dials = [
    { cx: 160, cy: 220, r: 90, value: 0.65 },
    { cx: 420, cy: 180, r: 60, value: 0.3 },
    { cx: 480, cy: 380, r: 100, value: 0.8 },
    { cx: 200, cy: 420, r: 50, value: 0.45 },
  ];

  return (
    <svg
      viewBox="0 0 640 640"
      fill="none"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <rect x="60" y="60" width="520" height="520" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
      {dials.map((d, i) => (
        <g key={i}>
          <circle cx={d.cx} cy={d.cy} r={d.r} stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
          <circle cx={d.cx} cy={d.cy} r={d.r - 14} stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
          <path
            d={`M ${d.cx} ${d.cy} L ${d.cx + Math.cos(Math.PI * (1 + d.value)) * (d.r - 14)} ${
              d.cy + Math.sin(Math.PI * (1 + d.value)) * (d.r - 14)
            }`}
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="1.5"
          />
          <circle cx={d.cx} cy={d.cy} r="3" fill="currentColor" fillOpacity="0.6" />
        </g>
      ))}
      <line x1="60" y1="320" x2="580" y2="320" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
      <line x1="320" y1="60" x2="320" y2="580" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
    </svg>
  );
}
