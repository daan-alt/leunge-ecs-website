"use client";

// Client component on purpose (same reason as ControlPanel): everything is
// generated from a few formulas, which is far smaller than serializing the
// path data into the RSC payload. All numbers are rounded so SSR and
// hydration match. Reads as a nautical chart: graticule, depth contours,
// compass rose and a plotted route. Purely decorative; it names no real place.

const r1 = (n: number) => Math.round(n * 10) / 10;

const W = 1200;
const H = 800;

// Catmull-Rom through the points, converted to cubic Béziers.
function smooth(pts: [number, number][]) {
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${r1(c1[0])},${r1(c1[1])} ${r1(c2[0])},${r1(c2[1])} ${p2[0]},${p2[1]}`;
  }
  return d;
}

// Closed, slightly irregular loop — a depth contour.
function contour(cx: number, cy: number, R: number, phase: number) {
  const n = 96;
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    const r = R * (1 + 0.14 * Math.sin(3 * a + phase) + 0.08 * Math.sin(5 * a + phase * 2));
    return `${r1(cx + Math.cos(a) * r * 1.35)},${r1(cy + Math.sin(a) * r * 0.85)}`;
  });
  return `M${pts.join(" L")}Z`;
}

const ROUTE: [number, number][] = [
  [40, 700],
  [240, 640],
  [430, 700],
  [620, 560],
  [800, 520],
  [980, 380],
  [1160, 330],
];
const PORTS = [0, 2, 4, 6];

const COMPASS = { cx: 520, cy: 170, r: 74 };

export function ChartBackdrop({ className }: { className?: string }) {
  const verticals = Array.from({ length: 13 }, (_, i) => i * 100);
  const horizontals = Array.from({ length: 9 }, (_, i) => i * 100);
  const ticks = Array.from({ length: 32 }, (_, i) => (i / 32) * Math.PI * 2);
  const route = smooth(ROUTE);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
      className={`control-panel h-full w-full ${className ?? ""}`}
    >
      {/* Graticule */}
      <g>
        {verticals.map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2={H} strokeOpacity={x % 300 === 0 ? 0.24 : 0.1} className={x % 300 === 0 ? "" : "max-lg:hidden"} />
        ))}
        {horizontals.map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2={W} y2={y} strokeOpacity={y % 300 === 0 ? 0.24 : 0.1} className={y % 300 === 0 ? "" : "max-lg:hidden"} />
        ))}
      </g>

      {/* Depth contours */}
      <g strokeOpacity="0.2" className="max-lg:hidden">
        {[70, 130, 190, 250, 310].map((R, i) => (
          <path key={R} d={contour(420, 520, R, i * 0.6)} />
        ))}
        {[50, 100, 150].map((R, i) => (
          <path key={R} d={contour(1030, 640, R, 1.3 + i * 0.5)} />
        ))}
      </g>

      {/* Compass rose */}
      <g transform={`translate(${COMPASS.cx} ${COMPASS.cy})`} strokeOpacity="0.45">
        <circle r={COMPASS.r} />
        <circle r={COMPASS.r - 20} strokeDasharray="2 5" strokeOpacity="0.5" />
        <g className="chart-rotate">
          {ticks.map((a, i) => {
            const long = i % 4 === 0;
            const inner = COMPASS.r - (long ? 14 : 7);
            return (
              <line
                key={i}
                x1={r1(Math.cos(a) * inner)}
                y1={r1(Math.sin(a) * inner)}
                x2={r1(Math.cos(a) * COMPASS.r)}
                y2={r1(Math.sin(a) * COMPASS.r)}
              />
            );
          })}
        </g>
        <path d={`M0,${-COMPASS.r - 12} L6,0 L0,${COMPASS.r + 12} L-6,0 Z`} strokeOpacity="0.4" />
        <path d={`M${-COMPASS.r - 12},0 L0,6 L${COMPASS.r + 12},0 L0,-6 Z`} strokeOpacity="0.4" />
        <path
          d={`M0,${-COMPASS.r - 18} L5,${-COMPASS.r - 6} L-5,${-COMPASS.r - 6} Z`}
          className="text-accent-bright"
          fill="currentColor"
          stroke="none"
        />
      </g>

      {/* Plotted route: solid underlay, flowing dashes, port markers */}
      <g className="text-accent-bright">
        <path d={route} strokeOpacity="0.35" strokeWidth="1.5" />
        <path d={route} className="chart-route" strokeOpacity="0.9" strokeWidth="1.75" strokeLinecap="round" />
        {PORTS.map((i, k) => (
          <g key={i} transform={`translate(${ROUTE[i][0]} ${ROUTE[i][1]})`}>
            <circle r="4.5" fill="currentColor" stroke="none" />
            <circle r="14" className="cp-inject-ring" style={{ animationDelay: `${k * 0.9}s` }} strokeOpacity="0.7" />
          </g>
        ))}
      </g>
    </svg>
  );
}
