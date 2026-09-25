import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

// Line weights as strokeOpacity against `currentColor` (set by the wrapper in
// Hero.tsx). Oil pulses and injection points use the accent via a nested
// `text-accent-bright` group, so both colors still come from theme tokens.
const FRAME = 0.14;
const STRUCTURE = 0.3;
const DETAIL = 0.1;
const LABEL = 0.32;

// Delay helper — every moving part gets its own offset so nothing pulses in unison.
const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

// ---------------------------------------------------------------- trend chart
// Pressure/temperature traces, periodic over TREND_PERIOD so the scrolling
// path (see .cp-trend) loops seamlessly. Deterministic, so SSR markup is stable.
const TREND_PERIOD = 370;
const TREND = { x: 1110, y: 140, w: 740, h: 150 };
function trendPath(f: (t: number) => number) {
  const pts: string[] = [];
  for (let x = 0; x <= TREND.w * 2; x += 6) {
    const t = (x / TREND_PERIOD) * Math.PI * 2;
    pts.push(`${x === 0 ? "M" : "L"}${x},${f(t).toFixed(1)}`);
  }
  return pts.join(" ");
}
const pressureTrace = trendPath((t) => 70 + 28 * Math.sin(t) + 10 * Math.sin(3 * t) + 5 * Math.sin(5 * t + 1));
const tempTrace = trendPath((t) => 95 + 14 * Math.sin(2 * t + 0.6) + 6 * Math.sin(4 * t));

// ------------------------------------------------------- lubrication schematic
const MANIFOLD_Y = 470;
const CYL_TOP = 560;
const cylinders = Array.from({ length: 6 }, (_, i) => 1400 + i * 84);
// Two-stroke firing order for six cylinders — drives the injection/piston offsets.
const firingOrder = [0, 4, 2, 5, 1, 3];
const CYCLE = 3.6; // seconds per full lubrication cycle (matches .cp-inject / .cp-piston)
const pump = { cx: 1260, cy: MANIFOLD_Y, r: 34 };
const tank = { x: 1110, y: 560, w: 90, h: 120 };
const supplyLine = `M${tank.x + tank.w / 2},${tank.y} V${MANIFOLD_Y} H${pump.cx - pump.r}`;
const manifoldLine = `M${pump.cx + pump.r},${MANIFOLD_Y} H${cylinders[5] + 20}`;

// ------------------------------------------------------------- gauges & bars
const gauges = [
  { cx: 1190, cy: 870, r: 58, sway: 7.5, d: 0 },
  { cx: 1360, cy: 870, r: 58, sway: 9.5, d: -3 },
];
const bars = [96, 74, 108, 88, 70, 100];

function Gauge({ cx, cy, r, sway, d }: (typeof gauges)[number]) {
  // 270° dial opening at the bottom.
  const start = (135 * Math.PI) / 180;
  const ticks = Array.from({ length: 19 }, (_, i) => start + (i / 18) * ((270 * Math.PI) / 180));
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <path
        d={`M${Math.cos(start) * r},${Math.sin(start) * r} A${r},${r} 0 1 1 ${Math.cos(start + 1.5 * Math.PI) * r},${Math.sin(start + 1.5 * Math.PI) * r}`}
        stroke="currentColor"
        strokeOpacity={STRUCTURE}
      />
      {ticks.map((a, i) => (
        <line
          key={i}
          x1={Math.cos(a) * (r - (i % 3 === 0 ? 12 : 6))}
          y1={Math.sin(a) * (r - (i % 3 === 0 ? 12 : 6))}
          x2={Math.cos(a) * r}
          y2={Math.sin(a) * r}
          stroke="currentColor"
          strokeOpacity={i % 3 === 0 ? STRUCTURE : DETAIL}
        />
      ))}
      {/* Red-line zone in the accent color. */}
      <path
        className="text-accent-bright"
        d={`M${Math.cos(start + 1.25 * Math.PI) * (r - 3)},${Math.sin(start + 1.25 * Math.PI) * (r - 3)} A${r - 3},${r - 3} 0 0 1 ${Math.cos(start + 1.5 * Math.PI) * (r - 3)},${Math.sin(start + 1.5 * Math.PI) * (r - 3)}`}
        stroke="currentColor"
        strokeOpacity={0.55}
        strokeWidth="3"
      />
      <g className="cp-needle" style={{ animationDuration: `${sway}s`, ...delay(d) }}>
        <line x1="0" y1="0" x2={-r * 0.72} y2="0" stroke="currentColor" strokeOpacity={0.6} strokeWidth="1.75" transform="rotate(20)" />
      </g>
      <circle r="4" fill="currentColor" fillOpacity={0.6} />
    </g>
  );
}

/**
 * Hero backdrop: a dimmed engine-room HMI. A scrolling pressure trend, the
 * cylinder lubrication loop (oil pulses travel tank → pump → manifold → six
 * injection points, timed to a firing order), swaying gauges, cylinder-temp bars
 * and status LEDs. All motion is CSS (`.cp-*` in globals.css) on transform,
 * opacity or stroke-dashoffset; `prefers-reduced-motion` freezes it entirely.
 */
export function ControlPanel({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1920 1000"
      fill="none"
      preserveAspectRatio="xMaxYMid slice"
      className={cn("control-panel h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="cp-trend-clip">
          <rect x={TREND.x} y={TREND.y} width={TREND.w} height={TREND.h} />
        </clipPath>
      </defs>

      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="13" letterSpacing="2" fill="currentColor" fillOpacity={LABEL}>
        <text x="1096" y="118">LUBE OIL PRESSURE · BAR</text>
        <text x="1096" y="368">CYLINDER LUBRICATION · CYL 1–6</text>
        <text x="1096" y="778">SYSTEM</text>
        <text x="1506" y="778">LINER TEMP · °C</text>
        {cylinders.map((x, i) => (
          <text key={x} x={x} y={CYL_TOP + 158} textAnchor="middle" letterSpacing="1">
            {i + 1}
          </text>
        ))}
      </g>

      {/* Panel frames. */}
      <g stroke="currentColor" strokeOpacity={FRAME}>
        <rect x="1080" y="90" width="800" height="220" rx="4" />
        <rect x="1080" y="340" width="800" height="400" rx="4" />
        <rect x="1080" y="750" width="390" height="200" rx="4" />
        <rect x="1490" y="750" width="390" height="200" rx="4" />
      </g>

      {/* ---- Trend chart ---- */}
      <g stroke="currentColor" strokeOpacity={DETAIL}>
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1={TREND.x} x2={TREND.x + TREND.w} y1={TREND.y + TREND.h * f} y2={TREND.y + TREND.h * f} />
        ))}
        {Array.from({ length: 9 }, (_, i) => (
          <line key={i} y1={TREND.y} y2={TREND.y + TREND.h} x1={TREND.x + (TREND.w / 8) * i} x2={TREND.x + (TREND.w / 8) * i} strokeDasharray="2 6" />
        ))}
      </g>
      <g clipPath="url(#cp-trend-clip)">
        <g transform={`translate(${TREND.x} ${TREND.y})`}>
          <g className="cp-trend" style={{ "--cp-trend-shift": `-${TREND.w}px` } as CSSProperties}>
            <path d={tempTrace} stroke="currentColor" strokeOpacity={STRUCTURE * 0.8} strokeWidth="1.25" />
            <path d={pressureTrace} className="text-accent-bright" stroke="currentColor" strokeOpacity={0.75} strokeWidth="1.75" />
          </g>
        </g>
      </g>
      <line x1={TREND.x} x2={TREND.x + TREND.w} y1={TREND.y + 22} y2={TREND.y + 22} stroke="currentColor" strokeOpacity={STRUCTURE * 0.7} strokeDasharray="10 8" />

      {/* ---- Lubrication schematic ---- */}
      {/* Tank with oil level. */}
      <g stroke="currentColor" strokeOpacity={STRUCTURE}>
        <rect x={tank.x} y={tank.y} width={tank.w} height={tank.h} rx="3" />
        <line x1={tank.x + 8} x2={tank.x + tank.w - 8} y1={tank.y + 40} y2={tank.y + 40} strokeOpacity={DETAIL * 2} strokeDasharray="4 4" />
      </g>
      {/* Pipework (static base). */}
      <g stroke="currentColor" strokeOpacity={STRUCTURE} strokeWidth="2">
        <path d={supplyLine} />
        <path d={manifoldLine} />
        {cylinders.map((x) => (
          <line key={x} x1={x} x2={x} y1={MANIFOLD_Y} y2={CYL_TOP} />
        ))}
      </g>
      {/* Pump with spinning impeller. */}
      <g transform={`translate(${pump.cx} ${pump.cy})`}>
        <circle r={pump.r} stroke="currentColor" strokeOpacity={STRUCTURE} strokeWidth="1.5" fill="var(--color-navy-deep)" fillOpacity="0.6" />
        <g className="cp-spin" stroke="currentColor" strokeOpacity={0.55} strokeWidth="1.5">
          {[0, 120, 240].map((a) => (
            <path key={a} d={`M0,0 Q${pump.r * 0.4},${-pump.r * 0.35} ${pump.r * 0.72},${-pump.r * 0.2}`} transform={`rotate(${a})`} />
          ))}
        </g>
        <circle r="4" fill="currentColor" fillOpacity={0.55} />
      </g>
      {/* Cylinders with pistons. */}
      {cylinders.map((x, i) => (
        <g key={x} transform={`translate(${x} ${CYL_TOP})`}>
          <rect x="-28" y="0" width="56" height="130" rx="3" stroke="currentColor" strokeOpacity={STRUCTURE} />
          <g className="cp-piston" style={delay(-(firingOrder[i] / 6) * CYCLE)}>
            <rect x="-22" y="14" width="44" height="20" rx="2" stroke="currentColor" strokeOpacity={0.4} />
            <line x1="0" x2="0" y1="34" y2="118" stroke="currentColor" strokeOpacity={DETAIL * 2} />
          </g>
        </g>
      ))}
      {/* Oil flow + injection points in the accent color. */}
      <g className="text-accent-bright" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d={supplyLine} className="cp-flow" strokeOpacity={0.85} />
        <path d={manifoldLine} className="cp-flow" strokeOpacity={0.85} style={delay(-0.8)} />
        {cylinders.map((x, i) => (
          <line key={x} x1={x} x2={x} y1={MANIFOLD_Y} y2={CYL_TOP} className="cp-flow cp-flow-short" strokeOpacity={0.85} style={delay(-(i * 0.3))} />
        ))}
        {cylinders.map((x, i) => (
          <g key={`inj-${x}`} transform={`translate(${x} ${CYL_TOP})`}>
            <circle r="5" fill="currentColor" stroke="none" className="cp-inject" style={delay((firingOrder[i] / 6) * CYCLE)} />
            <circle r="12" strokeWidth="1" className="cp-inject-ring" style={delay((firingOrder[i] / 6) * CYCLE)} />
          </g>
        ))}
      </g>

      {/* ---- Gauges ---- */}
      {gauges.map((g) => (
        <Gauge key={g.cx} {...g} />
      ))}

      {/* ---- Liner temperature bars + status LEDs ---- */}
      <g stroke="currentColor" strokeOpacity={DETAIL}>
        <line x1="1520" x2="1850" y1="920" y2="920" strokeOpacity={STRUCTURE} />
        <line x1="1520" x2="1850" y1="830" y2="830" strokeDasharray="4 6" />
      </g>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={1536 + i * 52}
          y={920 - h}
          width="26"
          height={h}
          fill="currentColor"
          fillOpacity={0.16}
          stroke="currentColor"
          strokeOpacity={0.3}
          className="cp-bar"
          style={{ animationDuration: `${4 + (i % 3) * 1.3}s`, ...delay(-i * 0.9) }}
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <circle
          key={i}
          cx={1745 + i * 30}
          cy="774"
          r="4.5"
          fill="currentColor"
          fillOpacity={0.5}
          className="cp-led"
          style={{ animationDuration: `${2.2 + i * 0.9}s`, ...delay(-i * 0.7) }}
        />
      ))}
      <circle cx="1715" cy="774" r="4.5" className="cp-led text-accent-bright" fill="currentColor" style={{ animationDuration: "1.4s" }} />
    </svg>
  );
}
