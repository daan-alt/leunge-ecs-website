import Link from "next/link";
import { cn } from "@/lib/utils";
import { LOGO_VIEWBOX, logoPaths } from "./logoPaths";

// Brand colors are part of the logo artwork itself, so they're fixed here rather
// than taken from the theme tokens. `light` swaps the black/grey parts to white/mist
// for dark backgrounds (the footer).
const BRAND_BLACK = "#1b1b1b";
const BRAND_ORANGE = "#fb981e";
const BRAND_GREY = "#353939";

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  const dark = light ? "#ffffff" : BRAND_BLACK;
  return (
    <Link
      href="/#top"
      className={cn("inline-flex shrink-0", className)}
      aria-label="LEUNGE-ECS B.V., home"
    >
      <svg
        viewBox={LOGO_VIEWBOX}
        className={light ? "h-20 w-auto" : "h-16 w-auto"}
        aria-hidden="true"
      >
        <g stroke={light ? "none" : "#ffffff"} strokeWidth={16} strokeLinejoin="round" paintOrder="stroke">
          <path fill={dark} d={logoPaths.gear} />
          <path fill={BRAND_ORANGE} d={logoPaths.drop} />
        </g>
        <path fill="#ffffff" d={logoPaths.highlight} />
        <g strokeWidth={5} strokeLinejoin="miter">
          <path fill={dark} stroke={dark} d={logoPaths.leunge} />
          <path fill={BRAND_ORANGE} stroke={BRAND_ORANGE} d={logoPaths.ecs} />
        </g>
        <path className={light ? "fill-mist" : undefined} fill={BRAND_GREY} d={logoPaths.subtitle} />
        <path fill={BRAND_ORANGE} d={logoPaths.tagline} />
      </svg>
    </Link>
  );
}
