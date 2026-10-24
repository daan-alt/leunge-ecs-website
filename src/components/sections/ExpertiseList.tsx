"use client";

import { useState } from "react";
import Link from "next/link";
import type { ExpertiseArea } from "@/content/types";
import { Photo } from "@/components/ui/Photo";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { cn } from "@/lib/utils";

// Editorial service index: one row per area, the active row opens to show its
// text; on desktop a sticky photo to the right follows the active row.
export function ExpertiseList({ areas, cta }: { areas: ExpertiseArea[]; cta: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <ul className="lg:col-span-7">
        {areas.map((area, i) => {
          const isActive = i === active;
          const requestHref = area.title.includes("Spare Parts") ? "/parts-request" : "/service-request";
          return (
            <li key={area.index} className="border-t border-line last:border-b" onMouseEnter={() => setActive(i)}>
              <button
                type="button"
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-expanded={isActive}
                aria-controls={`expertise-panel-${area.index}`}
                className="group flex w-full items-baseline gap-5 py-6 text-left lg:gap-8 lg:py-8"
              >
                <span
                  className={cn(
                    "t-mono w-8 shrink-0 text-xs transition-colors duration-300",
                    isActive ? "text-accent" : "text-ink/50"
                  )}
                >
                  {area.index}
                </span>
                <span
                  className={cn(
                    "font-display t-h3 flex-1 transition-colors duration-300",
                    isActive ? "text-navy" : "text-ink-dark/70 group-hover:text-navy"
                  )}
                >
                  {area.title}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "text-xl transition-all duration-300",
                    isActive ? "rotate-90 text-accent" : "text-ink/40"
                  )}
                >
                  →
                </span>
              </button>

              <div
                id={`expertise-panel-${area.index}`}
                className={cn(
                  "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <div className="pb-8 pl-13 lg:pl-16">
                    <TechnicalFrame className="mb-6 aspect-[16/9] w-full lg:hidden">
                      <Photo image={area.image} sizes="92vw" />
                    </TechnicalFrame>
                    <p className="max-w-xl font-body leading-relaxed text-ink">{area.description}</p>
                    <p className="t-mono mt-4 max-w-xl text-xs leading-relaxed text-ink/70">{area.detail}</p>
                    <Link href={requestHref} className="link-line mt-6 text-navy hover:text-accent">
                      {cta}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28">
          <TechnicalFrame className="aspect-[4/5] w-full">
            {areas.map((area, i) => (
              <div
                key={area.index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-out",
                  i === active ? "opacity-100" : "opacity-0"
                )}
                aria-hidden={i !== active}
              >
                <Photo image={area.image} sizes="(min-width: 1400px) 520px, 38vw" />
              </div>
            ))}
          </TechnicalFrame>
          <div className="t-mono mt-4 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.18em] text-ink/60">
            <span>{areas[active].index} / {String(areas.length).padStart(2, "0")}</span>
            <span>{areas[active].title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
