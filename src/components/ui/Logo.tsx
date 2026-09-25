import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <Link
      href="/#top"
      className={cn("font-display inline-flex flex-col leading-none", className)}
      aria-label="LEUNGE-ECS B.V., home"
    >
      <span
        className={cn(
          "text-xl font-extrabold tracking-tight",
          light ? "text-white" : "text-navy"
        )}
      >
        LEUNGE<span className="text-accent-bright">-</span>ECS
      </span>
      <span
        className={cn(
          "-mt-0.5 font-body text-[10px] font-semibold uppercase tracking-[0.18em]",
          light ? "text-mist" : "text-ink"
        )}
      >
        Technical Superintendent
      </span>
    </Link>
  );
}
