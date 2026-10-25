"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { counterpart, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

// EN | NL switch: links to the same page in the other language.
export function LanguageSwitch({
  labels,
  locale,
  className,
}: {
  labels: { label: string; en: string; nl: string };
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname() ?? "/";
  return (
    <nav aria-label={labels.label} className={cn("t-mono flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.14em]", className)}>
      {(["en", "nl"] as const).map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden className="text-white/25">
              /
            </span>
          )}
          {l === locale ? (
            <span aria-current="true" className="text-white">
              {labels[l]}
            </span>
          ) : (
            <Link prefetch={false} href={counterpart(pathname, l)} hrefLang={l} lang={l} className="text-mist/70 transition-colors hover:text-white">
              {labels[l]}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
