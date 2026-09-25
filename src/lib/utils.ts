export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.leunge-ecs.nl";

/** GitHub Pages subpath ("" locally) — for asset URLs that `Link`/next can't prefix, e.g. <img src>. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
