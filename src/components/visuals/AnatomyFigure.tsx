"use client";

import type { CSSProperties } from "react";

// A piston assembly that pulls apart while the page scrolls. The markup is the
// *finished* state (exploded, balloons visible); the animations in globals.css
// (`.an-*`, scroll-driven) only play the way there, so browsers without
// scroll-driven animations and reduced-motion users simply see this state.
// Drawn in the blueprint style (public/blueprints/spare-parts.svg); client
// component so the markup is not duplicated in the RSC payload.

const LINE = "#cfe0f5";
const DIM = "#9fb4d0";
const ACC = "#f5921e";
const BG = "#0d1b30";

type Var = CSSProperties & Record<`--${string}`, string | number>;
// s/e = start/end as a fraction of the scroll window; `collapse` = offset that puts the part back in the assembly.
const t = (s: number, e: number, extra?: Var): Var => ({ "--s": s, "--e": e, ...extra });

function Balloon({ n, x, y, tx, ty, s }: { n: number; x: number; y: number; tx: number; ty: number; s: number }) {
  return (
    <g className="an-pop" style={t(s, s + 0.06)}>
      <path d={`M${x} ${y}L${tx} ${ty}`} stroke={ACC} strokeWidth="1.2" />
      <circle cx={x} cy={y} r="3" fill={ACC} stroke="none" />
      <circle cx={tx} cy={ty} r="18" fill={BG} stroke={ACC} strokeWidth="1.6" />
      <text x={tx} y={ty + 6} textAnchor="middle" fontFamily="ui-monospace,Menlo,Consolas,monospace" fontSize="18" fill={ACC} stroke="none">
        {n}
      </text>
    </g>
  );
}

export function AnatomyFigure({ label }: { label: string }) {
  const cx = 400;
  return (
    <svg viewBox="0 0 800 800" role="img" aria-label={label} className="h-full w-full">
      <defs>
        <pattern id="an-g1" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke={DIM} strokeOpacity=".07" />
        </pattern>
        <pattern id="an-g2" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M100 0H0V100" fill="none" stroke={DIM} strokeOpacity=".15" />
        </pattern>
      </defs>
      <rect width="800" height="800" fill={BG} />
      <rect width="800" height="800" fill="url(#an-g1)" />
      <rect width="800" height="800" fill="url(#an-g2)" />
      <rect x="24" y="24" width="752" height="752" fill="none" stroke={DIM} strokeOpacity=".4" />
      <path d="M24 74H44M24 726H44M776 74H756M776 726H756M74 24V44M726 24V44M74 776V756M726 776V756" stroke={DIM} strokeOpacity=".7" />

      <g fill="none" stroke={LINE} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
        {/* centre line + alignment guides: drawn first */}
        <path className="an-draw" pathLength={1} style={t(0, 0.3)} d={`M${cx} 80L${cx} 700`} stroke={DIM} strokeWidth="1" strokeDasharray="14 4 3 4" />
        <g className="an-fade" style={t(0.5, 0.62)} stroke={DIM} strokeDasharray="3 4" strokeWidth="1">
          <path d="M330 236L330 390M470 236L470 390" />
        </g>

        {/* piston crown: the anchor, it never moves */}
        <g>
          <path d="M330 170Q330 118 372 110H428Q470 118 470 170V236H330Z" />
          <path d="M330 146H470M330 158H470M330 170H470" />
          <circle cx={cx} cy="206" r="14" strokeDasharray="4 3" />
        </g>

        {/* rings */}
        {[282, 312, 342].map((y, i) => (
          <g key={y} className="an-part" style={t(0.3, 0.6, { "--collapse": `${[-136, -154, -172][i]}px` })}>
            <ellipse cx={cx} cy={y} rx="82" ry="15" />
            <ellipse cx={cx} cy={y} rx="70" ry="11" strokeOpacity=".5" />
          </g>
        ))}

        {/* piston pin */}
        <g className="an-part" style={t(0.3, 0.6, { "--collapse": "-195px" })}>
          <rect x="344" y="388" width="112" height="26" />
          <ellipse cx="344" cy="401" rx="8" ry="13" />
          <ellipse cx="456" cy="401" rx="8" ry="13" />
        </g>

        {/* connecting rod */}
        <g className="an-part" style={t(0.3, 0.6, { "--collapse": "-274px" })}>
          <circle cx={cx} cy="480" r="30" />
          <circle cx={cx} cy="480" r="15" />
          <path d="M386 508L376 604M414 508L424 604" />
          <circle cx={cx} cy="650" r="50" />
          <circle cx={cx} cy="650" r="30" />
          <path d="M376 604Q376 614 360 624M424 604Q424 614 440 624" />
        </g>

        {/* loose parts slide in from the sides */}
        <g className="an-side" style={t(0.45, 0.7, { "--from-x": "-80px" })}>
          <rect x="110" y="300" width="130" height="130" rx="14" />
          <circle cx="175" cy="365" r="38" />
          {[
            [128, 318],
            [222, 318],
            [128, 412],
            [222, 412],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="6" />
          ))}
        </g>
        <g className="an-side" style={t(0.45, 0.7, { "--from-x": "80px" })}>
          {[
            [590, 290],
            [630, 330],
            [590, 370],
          ].map(([x, y]) => (
            <g key={`${x}-${y}`}>
              <circle cx={x} cy={y} r="22" />
              <circle cx={x} cy={y} r="10" />
            </g>
          ))}
        </g>

        <Balloon n={1} x={470} y={140} tx={560} ty={140} s={0.62} />
        <Balloon n={2} x={482} y={297} tx={560} ty={227} s={0.68} />
        <Balloon n={3} x={456} y={401} tx={690} ty={440} s={0.74} />
        <Balloon n={4} x={430} y={590} tx={560} ty={560} s={0.8} />
        <Balloon n={5} x={175} y={300} tx={175} ty={230} s={0.86} />
        <Balloon n={6} x={612} y={290} tx={690} ty={220} s={0.92} />
      </g>

      <g stroke={DIM} strokeOpacity=".6" fill="none">
        <rect x="504" y="716" width="256" height="44" />
        <path d="M594 716V760M504 738H760" />
      </g>
      <g fontFamily="ui-monospace,Menlo,Consolas,monospace" fontSize="11" fill={DIM} letterSpacing="1.2">
        <text x="514" y="731">FIG.</text>
        <text x="548" y="731" fill={ACC}>03</text>
        <text x="604" y="731">SCALE</text>
        <text x="660" y="731">N.T.S.</text>
        <text x="514" y="753">SPARE PARTS</text>
      </g>
    </svg>
  );
}
