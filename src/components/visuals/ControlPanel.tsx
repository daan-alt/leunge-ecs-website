"use client";

// Client component on purpose: the SVG is generated from a few formulas, so
// shipping this code is far smaller than serializing ~50 KB of markup into the
// RSC payload. Output is deterministic, so SSR and hydration match.
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

type Panel = { x: number; y: number; w: number; h: number };

// Two compositions of the same dashboard: "wide" spans the full viewBox (used on
// mobile, sits behind the text), "right" keeps everything in the right half
// (desktop, next to the text). Every position below derives from these configs.
const LAYOUTS = {
  wide: {
    align: "xMidYMid",
    panels: {
      trend: { x: 60, y: 60, w: 1800, h: 220 },
      lube: { x: 60, y: 310, w: 1800, h: 400 },
      gauges: { x: 60, y: 740, w: 840, h: 210 },
      temps: { x: 930, y: 740, w: 930, h: 210 },
    },
    // TREND.w must be a whole number of periods so the scrolling trace loops seamlessly.
    trendPeriod: 444,
    trend: { x: 90, y: 110, w: 444 * 4, h: 150, cols: 16 },
    manifoldY: 450,
    cylTop: 540,
    cylinders: Array.from({ length: 8 }, (_, i) => 560 + i * 180),
    // Firing order 1-8-2-6-4-5-3-7 → each cylinder's slot in the cycle.
    firingOrder: [0, 2, 6, 4, 5, 3, 7, 1],
    pump: { cx: 330, cy: 450, r: 38 },
    tank: { x: 110, y: 540, w: 110, h: 130 },
    gauges: [
      { cx: 190, cy: 865, r: 58, sway: 7.5, d: 0 },
      { cx: 390, cy: 865, r: 58, sway: 9.5, d: -3 },
      { cx: 590, cy: 865, r: 58, sway: 6.5, d: -1.5 },
      { cx: 790, cy: 865, r: 58, sway: 11, d: -5 },
    ],
    bars: { values: [96, 74, 108, 88, 70, 100, 84, 92], offset: 60, step: 105, width: 34, base: 925 },
  },
  right: {
    align: "xMaxYMid",
    panels: {
      trend: { x: 1080, y: 90, w: 800, h: 220 },
      lube: { x: 1080, y: 340, w: 800, h: 400 },
      gauges: { x: 1080, y: 750, w: 390, h: 200 },
      temps: { x: 1490, y: 750, w: 390, h: 200 },
    },
    trendPeriod: 370,
    trend: { x: 1110, y: 140, w: 370 * 2, h: 150, cols: 8 },
    manifoldY: 470,
    cylTop: 560,
    cylinders: Array.from({ length: 6 }, (_, i) => 1400 + i * 84),
    // Six-cylinder firing order 1-5-3-6-2-4.
    firingOrder: [0, 4, 2, 5, 1, 3],
    pump: { cx: 1260, cy: 470, r: 34 },
    tank: { x: 1110, y: 560, w: 90, h: 120 },
    gauges: [
      { cx: 1190, cy: 870, r: 58, sway: 7.5, d: 0 },
      { cx: 1360, cy: 870, r: 58, sway: 9.5, d: -3 },
    ],
    bars: { values: [96, 74, 108, 88, 70, 100], offset: 46, step: 52, width: 26, base: 920 },
  },
} satisfies Record<string, unknown>;

type LayoutName = keyof typeof LAYOUTS;
type GaugeSpec = (typeof LAYOUTS)["wide"]["gauges"][number];

const CYCLE = 3.6; // seconds per full lubrication cycle (matches .cp-inject / .cp-piston)

// Pressure/temperature traces, periodic over `period`. Deterministic, so SSR markup is stable.
function trendPath(period: number, w: number, f: (t: number) => number) {
  const pts: string[] = [];
  for (let x = 0; x <= w * 2; x += 9) {
    const t = (x / period) * Math.PI * 2;
    pts.push(`${x === 0 ? "M" : "L"}${x},${f(t).toFixed(1)}`);
  }
  return pts.join(" ");
}
const pressure = (t: number) => 70 + 28 * Math.sin(t) + 10 * Math.sin(3 * t) + 5 * Math.sin(5 * t + 1);
const temperature = (t: number) => 95 + 14 * Math.sin(2 * t + 0.6) + 6 * Math.sin(4 * t);

// Trig results can differ in the last digit between the server's and a browser's
// JS engine; rounding keeps SSR and hydration markup identical.
const cos = (a: number) => Math.round(Math.cos(a) * 1e4) / 1e4;
const sin = (a: number) => Math.round(Math.sin(a) * 1e4) / 1e4;

function Gauge({ cx, cy, r, sway, d }: GaugeSpec) {
  // 270° dial opening at the bottom.
  const start = (135 * Math.PI) / 180;
  const ticks = Array.from({ length: 19 }, (_, i) => start + (i / 18) * ((270 * Math.PI) / 180));
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <path
        d={`M${cos(start) * r},${sin(start) * r} A${r},${r} 0 1 1 ${cos(start + 1.5 * Math.PI) * r},${sin(start + 1.5 * Math.PI) * r}`}
        stroke="currentColor"
        strokeOpacity={STRUCTURE}
      />
      {ticks.map((a, i) => (
        <line
          key={i}
          x1={cos(a) * (r - (i % 3 === 0 ? 12 : 6))}
          y1={sin(a) * (r - (i % 3 === 0 ? 12 : 6))}
          x2={cos(a) * r}
          y2={sin(a) * r}
          stroke="currentColor"
          strokeOpacity={i % 3 === 0 ? STRUCTURE : DETAIL}
        />
      ))}
      {/* Red-line zone in the accent color. */}
      <path
        className="text-accent-bright"
        d={`M${cos(start + 1.25 * Math.PI) * (r - 3)},${sin(start + 1.25 * Math.PI) * (r - 3)} A${r - 3},${r - 3} 0 0 1 ${cos(start + 1.5 * Math.PI) * (r - 3)},${sin(start + 1.5 * Math.PI) * (r - 3)}`}
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
 * Hero backdrop: a dimmed engine-room HMI across the full hero width. A
 * scrolling pressure trend, the cylinder lubrication loop (oil pulses travel
 * tank → pump → manifold → eight injection points, timed to a firing order),
 * swaying gauges, liner-temp bars and status LEDs. All motion is CSS (`.cp-*`
 * in globals.css) on transform, opacity or stroke-dashoffset;
 * `prefers-reduced-motion` freezes it entirely.
 */
export function ControlPanel({ layout = "wide", className }: { layout?: LayoutName; className?: string }) {
  const L = LAYOUTS[layout];
  const PANELS: Record<"trend" | "lube" | "gauges" | "temps", Panel> = L.panels;
  const { trend: TREND, manifoldY: MANIFOLD_Y, cylTop: CYL_TOP, cylinders, firingOrder, pump, tank, gauges, bars } = L;
  const pressureTrace = trendPath(L.trendPeriod, TREND.w, pressure);
  const tempTrace = trendPath(L.trendPeriod, TREND.w, temperature);
  const supplyLine = `M${tank.x + tank.w / 2},${tank.y} V${MANIFOLD_Y} H${pump.cx - pump.r}`;
  const manifoldLine = `M${pump.cx + pump.r},${MANIFOLD_Y} H${cylinders[cylinders.length - 1] + 20}`;
  const clipId = `cp-trend-clip-${layout}`;
  const BAR_BASE = bars.base;

  return (
    <svg
      viewBox="0 0 1920 1000"
      fill="none"
      preserveAspectRatio={`${L.align} slice`}
      className={cn("control-panel h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x={TREND.x} y={TREND.y} width={TREND.w} height={TREND.h} />
        </clipPath>
      </defs>

      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="13" letterSpacing="2" fill="currentColor" fillOpacity={LABEL}>
        <text x={PANELS.trend.x + 16} y={PANELS.trend.y + 28}>LUBE OIL PRESSURE · BAR</text>
        <text x={PANELS.lube.x + 16} y={PANELS.lube.y + 28}>CYLINDER LUBRICATION · CYL 1–{cylinders.length}</text>
        <text x={PANELS.gauges.x + 16} y={PANELS.gauges.y + 28}>SYSTEM</text>
        <text x={PANELS.temps.x + 16} y={PANELS.temps.y + 28}>LINER TEMP · °C</text>
        {cylinders.map((x, i) => (
          <text key={x} x={x} y={CYL_TOP + 158} textAnchor="middle" letterSpacing="1">
            {i + 1}
          </text>
        ))}
      </g>

      {/* Panel frames. */}
      <g stroke="currentColor" strokeOpacity={FRAME}>
        {Object.values(PANELS).map((p) => (
          <rect key={`${p.x}-${p.y}`} x={p.x} y={p.y} width={p.w} height={p.h} rx="4" />
        ))}
      </g>

      {/* ---- Trend chart ---- */}
      <g stroke="currentColor" strokeOpacity={DETAIL}>
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1={TREND.x} x2={TREND.x + TREND.w} y1={TREND.y + TREND.h * f} y2={TREND.y + TREND.h * f} />
        ))}
        {Array.from({ length: TREND.cols + 1 }, (_, i) => (
          <line key={i} y1={TREND.y} y2={TREND.y + TREND.h} x1={TREND.x + (TREND.w / TREND.cols) * i} x2={TREND.x + (TREND.w / TREND.cols) * i} strokeDasharray="2 6" />
        ))}
      </g>
      <g clipPath={`url(#${clipId})`}>
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
          <g className="cp-piston" style={delay(-(firingOrder[i] / cylinders.length) * CYCLE)}>
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
            <circle r="5" fill="currentColor" stroke="none" className="cp-inject" style={delay((firingOrder[i] / cylinders.length) * CYCLE)} />
            <circle r="12" strokeWidth="1" className="cp-inject-ring" style={delay((firingOrder[i] / cylinders.length) * CYCLE)} />
          </g>
        ))}
      </g>

      {/* ---- Gauges ---- */}
      {gauges.map((g) => (
        <Gauge key={g.cx} {...g} />
      ))}

      {/* ---- Liner temperature bars + status LEDs ---- */}
      <g stroke="currentColor" strokeOpacity={DETAIL}>
        <line x1={PANELS.temps.x + 30} x2={PANELS.temps.x + PANELS.temps.w - 30} y1={BAR_BASE} y2={BAR_BASE} strokeOpacity={STRUCTURE} />
        <line x1={PANELS.temps.x + 30} x2={PANELS.temps.x + PANELS.temps.w - 30} y1={BAR_BASE - 90} y2={BAR_BASE - 90} strokeDasharray="4 6" />
      </g>
      {bars.values.map((h, i) => (
        <rect
          key={i}
          x={PANELS.temps.x + bars.offset + i * bars.step}
          y={BAR_BASE - h}
          width={bars.width}
          height={h}
          fill="currentColor"
          fillOpacity={0.16}
          stroke="currentColor"
          strokeOpacity={0.3}
          className="cp-bar"
          style={{ animationDuration: `${4 + (i % 3) * 1.3}s`, ...delay(-i * 0.9) }}
        />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle
          key={i}
          cx={PANELS.temps.x + PANELS.temps.w - 150 + i * 28}
          cy={PANELS.temps.y + 24}
          r="4.5"
          fill="currentColor"
          fillOpacity={0.5}
          className="cp-led"
          style={{ animationDuration: `${2.2 + i * 0.9}s`, ...delay(-i * 0.7) }}
        />
      ))}
      <circle cx={PANELS.temps.x + PANELS.temps.w - 180} cy={PANELS.temps.y + 24} r="4.5" className="cp-led text-accent-bright" fill="currentColor" style={{ animationDuration: "1.4s" }} />
    </svg>
  );
}
