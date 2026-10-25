import { en } from "./en";
import { nl } from "./nl";
import type { SiteContent } from "./types";
import type { Locale } from "@/lib/locale";

/** English copy (the default site). Components that know their language use getContent(locale). */
export const content: SiteContent = en;

export function getContent(locale: Locale): SiteContent {
  return locale === "nl" ? nl : en;
}

export type { SiteContent } from "./types";
export type { Locale } from "@/lib/locale";
