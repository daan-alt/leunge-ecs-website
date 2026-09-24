import { cn } from "@/lib/utils";

interface Gauge {
  cx: number;
  cy: number;
  r: number;
  value: number;
  ticks?: boolean;
}

// Structure = outer rings, propeller blades, hull outline. Detail = tick marks,
// inner rings, grid/connector lines. Accent = the one moving element, drawn a
// touch brighter as a deliberate highlight. All three are relative strokeOpacity
// values against the same `currentColor`, set once by the wrapper in Hero.tsx —
// there is no second, independent brightness system for any element.
const STRUCTURE = 0.55;
const DETAIL = 0.18;
const ACCENT = 0.75;

// The large lead instrument — visible on every breakpoint. Kept inside the
// top ~380 viewBox units so it never reaches into the headline text, which
// (on the narrowest supported width) starts around y:380.
const heroGauge: Gauge = { cx: 1650, cy: 170, r: 110, value: 0.6, ticks: true };
// Smaller supporting instruments — desktop only, so mobile stays a quiet
// two-element composition instead of a cropped fragment of the full cluster.
const supportGauges: Gauge[] = [
  { cx: 1850, cy: 700, r: 65, value: 0.3 },
  { cx: 1250, cy: 180, r: 42, value: 0.75 },
];
// The propeller — the only motif that moves (see .hero-propeller in globals.css).
const propeller = { cx: 1460, cy: 330, r: 50 };
// Hull cross-section — desktop only, sits low and wide.
const hull = { x: 1120, y: 740 };

const grid = [0, 260, 560, 900, 1250, 1600, 1920];
const gridRows = [0, 240, 500, 760, 1000];

function GaugeMark({ gauge, opacity = STRUCTURE }: { gauge: Gauge; opacity?: number }) {
  const needleAngle = Math.PI * (1 + gauge.value);
  const nx = Math.cos(needleAngle) * (gauge.r - gauge.r * 0.18);
  const ny = Math.sin(needleAngle) * (gauge.r - gauge.r * 0.18);
  return (
    <g transform={`translate(${gauge.cx} ${gauge.cy})`}>
      <circle r={gauge.r} stroke="currentColor" strokeOpacity={opacity} strokeWidth="1" />
      <circle r={gauge.r * 0.82} stroke="currentColor" strokeOpacity={DETAIL} strokeWidth="1" />
      {gauge.ticks &&
        Array.from({ length: 16 }).map((_, t) => {
          const a = (t / 16) * Math.PI * 2;
          const x1 = Math.cos(a) * gauge.r;
          const y1 = Math.sin(a) * gauge.r;
          const x2 = Math.cos(a) * (gauge.r + 10);
          const y2 = Math.sin(a) * (gauge.r + 10);
          return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeOpacity={DETAIL} strokeWidth="1" />;
        })}
      <line x1="0" y1="0" x2={nx} y2={ny} stroke="currentColor" strokeOpacity={opacity} strokeWidth="1.5" />
      <circle r={Math.max(2, gauge.r * 0.035)} fill="currentColor" fillOpacity={opacity} />
    </g>
  );
}

/**
 * Static line-art composition for the hero backdrop: one lead instrument, a
 * propeller (the single moving element), and — desktop only — two smaller
 * supporting instruments plus a hull cross-section. Deterministic (no
 * Math.random) so server- and client-rendered markup match exactly.
 *
 * There is no clip-path cropping trick for mobile: the hero section's own
 * `overflow-hidden` already crops cleanly at a straight edge, and which
 * elements appear at which breakpoint is controlled explicitly below with
 * `hidden lg:block`, so nothing can end up sliced in half by accident.
 */
export function InstrumentPanel({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1920 1000"
      fill="none"
      preserveAspectRatio="xMaxYMid slice"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      {grid.slice(1, -1).map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="1000" stroke="currentColor" strokeOpacity={DETAIL * 0.4} strokeWidth="1" />
      ))}
      {gridRows.slice(1, -1).map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="1920" y2={y} stroke="currentColor" strokeOpacity={DETAIL * 0.4} strokeWidth="1" />
      ))}

      {/* Lead instrument. */}
      <GaugeMark gauge={heroGauge} />

      {/* Propeller — the one moving element. Blade control points scale with r
          so the shape stays proportional at any size. */}
      <g transform={`translate(${propeller.cx} ${propeller.cy})`}>
        <circle r={propeller.r * 1.22} stroke="currentColor" strokeOpacity={DETAIL} strokeWidth="1" strokeDasharray="2 8" />
        <g className="hero-propeller">
          {[0, 90, 180, 270].map((angle) => {
            const r = propeller.r;
            return (
              <path
                key={angle}
                d={`M0,0 C${r * 0.2},${-r * 0.22} ${r * 0.65},${-r * 0.17} ${r},0 C${r * 0.65},${r * 0.17} ${r * 0.2},${r * 0.22} 0,0 Z`}
                transform={`rotate(${angle})`}
                stroke="currentColor"
                strokeOpacity={ACCENT}
                strokeWidth="1.25"
              />
            );
          })}
          <circle r={propeller.r * 0.13} stroke="currentColor" strokeOpacity={ACCENT} strokeWidth="1.25" />
        </g>
      </g>

      {/* Supporting instruments and hull — desktop only, so mobile stays a quiet two-element composition. */}
      <g className="hidden lg:block">
        <line x1={heroGauge.cx} y1={heroGauge.cy} x2={propeller.cx} y2={propeller.cy} stroke="currentColor" strokeOpacity={DETAIL} strokeWidth="1" />
        <line x1={propeller.cx} y1={propeller.cy} x2={supportGauges[0].cx} y2={supportGauges[0].cy} stroke="currentColor" strokeOpacity={DETAIL} strokeWidth="1" />
        <line x1={heroGauge.cx} y1={heroGauge.cy} x2={supportGauges[1].cx} y2={supportGauges[1].cy} stroke="currentColor" strokeOpacity={DETAIL} strokeWidth="1" />

        {supportGauges.map((g, i) => (
          <GaugeMark key={i} gauge={g} />
        ))}

        <g transform={`translate(${hull.x} ${hull.y})`} stroke="currentColor" strokeOpacity={STRUCTURE} strokeWidth="1.25">
          <path d="M0,40 C20,10 60,0 120,0 L340,0 C380,0 400,20 400,40 L380,70 C300,85 100,85 20,70 Z" />
          <line x1="-30" y1="40" x2="430" y2="40" strokeOpacity={DETAIL} strokeDasharray="6 6" />
          <line x1="100" y1="4" x2="100" y2="76" strokeOpacity={DETAIL} />
          <line x1="200" y1="0" x2="200" y2="82" strokeOpacity={DETAIL} />
          <line x1="300" y1="0" x2="300" y2="80" strokeOpacity={DETAIL} />
        </g>
      </g>
    </svg>
  );
}
