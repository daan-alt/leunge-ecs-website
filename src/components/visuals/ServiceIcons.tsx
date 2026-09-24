import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

const base = "h-full w-full";

/** 01 — Technical service & support: a service wrench, open jaw and box end. */
export function IconOnboardService({ className }: IconProps) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={cn(base, className)} aria-hidden="true">
      <circle cx="80" cy="80" r="58" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 8" />
      <rect
        x="74"
        y="40"
        width="12"
        height="80"
        rx="4"
        transform="rotate(45 80 80)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <circle cx="42" cy="42" r="17" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.65" />
      <circle cx="42" cy="42" r="8" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35" />
      <path
        d="M118,118 L108,132 M118,118 L132,108"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 02 — Alpha Lubrication Systems: a pump/reservoir circuit into an engine block. */
export function IconLubrication({ className }: IconProps) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={cn(base, className)} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.5">
        <rect x="16" y="56" width="30" height="40" strokeOpacity="0.55" />
        <line x1="24" y1="66" x2="38" y2="66" strokeOpacity="0.3" />
        <line x1="24" y1="76" x2="38" y2="76" strokeOpacity="0.3" />
        <circle cx="76" cy="76" r="16" strokeOpacity="0.6" />
        <path d="M76,60 L76,50 M76,92 L76,102 M60,76 L50,76" strokeOpacity="0.35" />
        <rect x="104" y="50" width="42" height="52" strokeOpacity="0.55" />
        <line x1="112" y1="60" x2="138" y2="60" strokeOpacity="0.25" />
        <line x1="112" y1="72" x2="138" y2="72" strokeOpacity="0.25" />
        <line x1="112" y1="84" x2="138" y2="84" strokeOpacity="0.25" />
      </g>
      <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7">
        <path d="M46,76 L60,76" />
        <path d="M92,76 L104,76" />
      </g>
      <circle cx="66" cy="76" r="2" fill="currentColor" fillOpacity="0.7" />
      <circle cx="98" cy="76" r="2" fill="currentColor" fillOpacity="0.7" />
    </svg>
  );
}

/** 03 — Genuine spare parts: a compact exploded-parts callout. */
export function IconSpareParts({ className }: IconProps) {
  const parts = [
    { y: 36, w: 60 },
    { y: 70, w: 84 },
    { y: 104, w: 44 },
  ];
  return (
    <svg viewBox="0 0 160 160" fill="none" className={cn(base, className)} aria-hidden="true">
      <line x1="80" y1="16" x2="80" y2="140" stroke="currentColor" strokeOpacity="0.18" strokeDasharray="2 6" />
      {parts.map((p, i) => (
        <g key={i} stroke="currentColor">
          <rect x={80 - p.w / 2} y={p.y - 9} width={p.w} height="18" strokeOpacity="0.55" strokeWidth="1.5" />
          <line x1={80 + p.w / 2} y1={p.y} x2={80 + p.w / 2 + 18} y2={p.y} strokeOpacity="0.3" strokeWidth="1" />
          <circle cx={80 + p.w / 2 + 18} cy={p.y} r="2" fill="currentColor" fillOpacity="0.6" stroke="none" />
        </g>
      ))}
    </svg>
  );
}

/** 04 — Automation & control: a PLC-style indicator grid with a switch. */
export function IconAutomation({ className }: IconProps) {
  const cells = Array.from({ length: 9 });
  return (
    <svg viewBox="0 0 160 160" fill="none" className={cn(base, className)} aria-hidden="true">
      <rect x="24" y="30" width="72" height="72" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
      {cells.map((_, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 34 + col * 22;
        const y = 40 + row * 22;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width="12"
            height="12"
            stroke="currentColor"
            strokeOpacity={i === 4 ? 0.8 : 0.3}
            strokeWidth="1.25"
            fill={i === 4 ? "currentColor" : "none"}
            fillOpacity={i === 4 ? 0.4 : 0}
          />
        );
      })}
      <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.55">
        <line x1="112" y1="40" x2="112" y2="120" />
        <circle cx="112" cy="52" r="5" />
        <line x1="112" y1="57" x2="112" y2="90" />
        <rect x="102" y="90" width="20" height="14" />
      </g>
    </svg>
  );
}

/** 05 — Engineering & design: a drafting compass over dimensioned lines. */
export function IconEngineering({ className }: IconProps) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={cn(base, className)} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35">
        <rect x="24" y="24" width="112" height="112" strokeDasharray="3 6" />
      </g>
      <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.65" strokeLinecap="round">
        <path d="M80,38 L52,120" />
        <path d="M80,38 L112,120" />
        <path d="M80,38 L80,26" />
        <circle cx="80" cy="38" r="4" />
      </g>
      <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.3">
        <line x1="52" y1="128" x2="112" y2="128" />
        <line x1="52" y1="124" x2="52" y2="132" />
        <line x1="112" y1="124" x2="112" y2="132" />
      </g>
    </svg>
  );
}

/** 06 — Inspection, testing & commissioning: a test probe reading against a checked report. */
export function IconTesting({ className }: IconProps) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={cn(base, className)} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.5">
        <rect x="26" y="28" width="60" height="80" strokeOpacity="0.5" />
        <line x1="36" y1="44" x2="76" y2="44" strokeOpacity="0.3" />
        <line x1="36" y1="56" x2="76" y2="56" strokeOpacity="0.3" />
        <line x1="36" y1="68" x2="64" y2="68" strokeOpacity="0.3" />
        <path d="M36,84 L44,92 L58,76" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6">
        <circle cx="112" cy="96" r="22" />
        <path d="M112,96 L122,84" />
        <circle cx="112" cy="96" r="2.5" fill="currentColor" stroke="none" />
        <path d="M100,66 L112,74 L124,66" strokeOpacity="0.4" />
      </g>
    </svg>
  );
}
