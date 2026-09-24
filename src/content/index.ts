import { nl } from "./nl";
import type { SiteContent } from "./types";

// Single locale for v1. To add English: create ./en.ts implementing
// SiteContent, then branch here on a locale param / route segment.
export const content: SiteContent = nl;

export type { SiteContent } from "./types";
