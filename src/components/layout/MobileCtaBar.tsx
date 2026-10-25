"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "@/content";

// Pages that already are a request form don't need the bar.
const HIDDEN_ON = ["/service-request", "/parts-request", "/contact"];

export function MobileCtaBar() {
  const pathname = usePathname() ?? "";
  if (HIDDEN_ON.some((p) => pathname.includes(p))) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-navy-ink/90 backdrop-blur-xl lg:hidden">
      <Link prefetch={false}
        href="/service-request"
        className="flex items-center justify-center border-r border-white/10 px-4 py-4 font-body text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-white"
      >
        {content.nav.ctaService}
      </Link>
      <Link prefetch={false}
        href="/parts-request"
        className="flex items-center justify-center bg-accent-bright px-4 py-4 font-body text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-navy-ink"
      >
        {content.nav.ctaParts}
      </Link>
    </div>
  );
}
