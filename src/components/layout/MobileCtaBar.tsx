"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Routes } from "@/content/types";

// Pages that already are a request form don't need the bar.
export function MobileCtaBar({ labels, routes }: { labels: { service: string; parts: string }; routes: Routes }) {
  const pathname = (usePathname() ?? "").replace(/\/$/, "");
  const hiddenOn = [routes.service, routes.parts, routes.contact, routes.request];
  if (hiddenOn.some((p) => pathname === p)) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-navy-ink/90 backdrop-blur-xl lg:hidden">
      <Link
        prefetch={false}
        href={routes.service}
        className="flex items-center justify-center border-r border-white/10 px-4 py-4 font-body text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-white"
      >
        {labels.service}
      </Link>
      <Link
        prefetch={false}
        href={routes.parts}
        className="flex items-center justify-center bg-accent-bright px-4 py-4 font-body text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-navy-ink"
      >
        {labels.parts}
      </Link>
    </div>
  );
}
