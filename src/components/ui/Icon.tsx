import type { IconName } from "@/content/types";
import { cn } from "@/lib/utils";

// The icon set: 24px grid, 1.5 stroke, round caps and joins, no fills — the same
// line language as the blueprints. Paths are tiny, so they live inline.
const PATHS: Record<IconName, string> = {
  wrench:
    "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4Z",
  drop: "M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z",
  gear: "M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z",
  chip: "M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM9.5 9.5h5v5h-5ZM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3",
  ruler: "M3 17 17 3l4 4L7 21ZM7 13l2 2M10 10l2 2M13 7l2 2",
  check: "M4 12.5 9.5 18 20 6",
  ship: "M3 14h18l-3 6H6ZM7 14V9.5h10V14M10 9.5V5h4v4.5",
  arrow: "M5 12h14M13 6l6 6-6 6",
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-6 w-6 shrink-0", className)}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
