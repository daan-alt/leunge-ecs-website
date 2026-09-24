import { cn } from "@/lib/utils";

interface Gauge {
  cx: number;
  cy: number;
  r: number;
  value: number;
  ticks?: boolean;
  radar?: boolean;
}

const gauges: Gauge[] = [
  { cx: 1560, cy: 190, r: 130, value: 0.62, ticks: true, radar: true },
  { cx: 1790, cy: 410, r: 68, value: 0.28 },
  { cx: 1340, cy: 130, r: 52, value: 0.8 },
  { cx: 1660, cy: 640, r: 150, value: 0.44, ticks: true },
  { cx: 1850, cy: 760, r: 86, value: 0.7 },
  { cx: 1060, cy: 160, r: 46, value: 0.65 },
  { cx: 1790, cy: 940, r: 32, value: 0.25 },
  { cx: 900, cy: 90, r: 36, value: 0.5 },
];

const propeller = { cx: 1440, cy: 470, r: 92 };
const hull = { x: 1120, y: 700 };
const switchboard = { x: 1700, y: 480, cols: 5, rows: 4, cell: 22, gap: 10 };
// Which switchboard cells (row*cols + col) carry a pulsing status light.
const activeCells = [2, 6, 9, 13, 17];

const connectors: [number, number][] = [
  [0, 1],
  [0, 3],
  [3, 4],
  [1, 6],
  [5, 2],
];

const grid = [0, 260, 560, 900, 1250, 1600, 1920];
const gridRows = [0, 240, 500, 760, 1000];

/**
 * Original line-art composition for the hero backdrop — a spread of
 * distinct marine/technical-engineering motifs (instrument cluster,
 * propeller, hull cross-section, control-panel indicators) rather than one
 * repeated shape, so the industry reads at a glance. Deterministic (no
 * Math.random) so server- and client-rendered markup match exactly; motion
 * is applied only via CSS classes (defined in globals.css) so this stays a
 * server component.
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
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="1000" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
      ))}
      {gridRows.slice(1, -1).map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="1920" y2={y} stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
      ))}

      {connectors.map(([a, b], i) => {
        const ga = gauges[a];
        const gb = gauges[b];
        return (
          <line
            key={i}
            x1={ga.cx}
            y1={ga.cy}
            x2={gb.cx}
            y2={gb.cy}
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        );
      })}
      <line x1={gauges[3].cx} y1={gauges[3].cy} x2={propeller.cx} y2={propeller.cy} stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <line x1={switchboard.x} y1={switchboard.y + 40} x2={gauges[1].cx} y2={gauges[1].cy} stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />

      {/* Instrument gauges — needles drift a few degrees, as if reading a live system. */}
      {gauges.map((g, i) => {
        const needleAngle = Math.PI * (1 + g.value);
        const nx = Math.cos(needleAngle) * (g.r - g.r * 0.18);
        const ny = Math.sin(needleAngle) * (g.r - g.r * 0.18);
        return (
          <g key={i} transform={`translate(${g.cx} ${g.cy})`}>
            <circle r={g.r} stroke="currentColor" strokeOpacity="0.32" strokeWidth="1" />
            <circle r={g.r * 0.82} stroke="currentColor" strokeOpacity="0.16" strokeWidth="1" />
            {g.ticks &&
              Array.from({ length: 16 }).map((_, t) => {
                const a = (t / 16) * Math.PI * 2;
                const x1 = Math.cos(a) * g.r;
                const y1 = Math.sin(a) * g.r;
                const x2 = Math.cos(a) * (g.r + 10);
                const y2 = Math.sin(a) * (g.r + 10);
                return (
                  <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
                );
              })}
            <line
              className="hero-needle"
              x1="0"
              y1="0"
              x2={nx}
              y2={ny}
              stroke="currentColor"
              strokeOpacity="0.65"
              strokeWidth="1.5"
              style={{ animationDelay: `${i * 0.6}s`, animationDuration: `${5 + (i % 3)}s` }}
            />
            {g.radar && (
              <line
                className="hero-radar"
                x1="0"
                y1="0"
                x2="0"
                y2={-(g.r - 6)}
                stroke="currentColor"
                strokeOpacity="0.4"
                strokeWidth="1"
              />
            )}
            <circle r={Math.max(2, g.r * 0.035)} fill="currentColor" fillOpacity="0.7" />
          </g>
        );
      })}

      {/* Propeller — a distinct marine-engineering motif, turning slowly and continuously. */}
      <g transform={`translate(${propeller.cx} ${propeller.cy})`}>
        <circle r={propeller.r + 22} stroke="currentColor" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="2 8" />
        <g className="hero-propeller">
          {[0, 90, 180, 270].map((angle) => (
            <path
              key={angle}
              d={`M0,0 C18,-20 60,-16 ${propeller.r},0 C60,16 18,20 0,0 Z`}
              transform={`rotate(${angle})`}
              stroke="currentColor"
              strokeOpacity="0.45"
              strokeWidth="1.25"
            />
          ))}
          <circle r="12" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.25" />
        </g>
      </g>

      {/* Hull cross-section — a technical side-profile, not a scenic illustration. */}
      <g transform={`translate(${hull.x} ${hull.y})`} stroke="currentColor" strokeOpacity="0.32" strokeWidth="1.25">
        <path d="M0,40 C20,10 60,0 120,0 L340,0 C380,0 400,20 400,40 L380,70 C300,85 100,85 20,70 Z" />
        <line x1="-30" y1="40" x2="430" y2="40" strokeOpacity="0.18" strokeDasharray="6 6" />
        <line x1="100" y1="4" x2="100" y2="76" strokeOpacity="0.16" />
        <line x1="200" y1="0" x2="200" y2="82" strokeOpacity="0.16" />
        <line x1="300" y1="0" x2="300" y2="80" strokeOpacity="0.16" />
      </g>

      {/* Control-panel indicators — a handful pulse gently, like live status lights. */}
      <g transform={`translate(${switchboard.x} ${switchboard.y})`}>
        <rect
          width={switchboard.cols * (switchboard.cell + switchboard.gap) - switchboard.gap}
          height={switchboard.rows * (switchboard.cell + switchboard.gap) - switchboard.gap}
          stroke="currentColor"
          strokeOpacity="0.16"
          strokeWidth="1"
        />
        {Array.from({ length: switchboard.rows * switchboard.cols }).map((_, i) => {
          const row = Math.floor(i / switchboard.cols);
          const col = i % switchboard.cols;
          const x = col * (switchboard.cell + switchboard.gap);
          const y = row * (switchboard.cell + switchboard.gap);
          const active = activeCells.includes(i);
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={switchboard.cell}
              height={switchboard.cell}
              stroke="currentColor"
              strokeOpacity={active ? 0.5 : 0.16}
              strokeWidth="1"
              className={active ? "hero-status-light" : undefined}
              style={active ? { animationDelay: `${col * 0.4}s` } : undefined}
              fill={active ? "currentColor" : "none"}
              fillOpacity={active ? 0.35 : 0}
            />
          );
        })}
      </g>
    </svg>
  );
}
