import Link from "next/link";
import { cn, BASE_PATH } from "@/lib/utils";

// Loaded as external SVG files (public/logo.svg, logo-light.svg) rather than
// inline paths: the browser caches them across pages and they stay out of the
// HTML/RSC payload. `light` = variant for dark backgrounds (the footer).
export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <Link href="/#top" className={cn("inline-flex shrink-0", className)} aria-label="LEUNGE-ECS B.V., home">
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer */}
      <img
        src={`${BASE_PATH}/${light ? "logo-light.svg" : "logo.svg"}`}
        alt=""
        width={light ? 168 : 135}
        height={light ? 80 : 64}
        className={light ? "h-20 w-auto" : "h-16 w-auto"}
        loading={light ? "lazy" : "eager"}
        fetchPriority={light ? "auto" : "high"}
      />
    </Link>
  );
}
