import Link from "next/link";
import { cn, BASE_PATH } from "@/lib/utils";

// Loaded as external SVG files (public/logo.svg, logo-light.svg) rather than
// inline paths: the browser caches them across pages and they stay out of the
// HTML/RSC payload. `light` = variant for dark backgrounds (header, footer).
export function Logo({
  className,
  imgClassName,
  light,
  priority,
}: {
  className?: string;
  imgClassName?: string;
  light?: boolean;
  priority?: boolean;
}) {
  const eager = priority ?? !light;
  return (
    <Link prefetch={false} href="/#top" className={cn("inline-flex shrink-0", className)} aria-label="LEUNGE-ECS B.V., home">
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer */}
      <img
        src={`${BASE_PATH}/${light ? "logo-light.svg" : "logo.svg"}`}
        alt=""
        width={light ? 168 : 135}
        height={light ? 80 : 64}
        // cn() doesn't resolve conflicting utilities, so imgClassName replaces the default height instead of adding to it.
        className={cn("w-auto", imgClassName ?? (light ? "h-20" : "h-16"))}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
      />
    </Link>
  );
}
