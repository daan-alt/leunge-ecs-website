"use client";

import { useEffect, useState } from "react";

// Small live details for the footer status bar. The clock renders nothing
// until mounted, so server HTML and hydration always match.
export function LocalTime({ label }: { label: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Amsterdam",
    });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <span>
      {label}
      <span className="ml-3 inline-block min-w-[3.2rem] text-white/80">{time}</span>
    </span>
  );
}

export function BackToTop({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group inline-flex items-center gap-3 uppercase tracking-[0.18em] text-mist/70 transition-colors hover:text-white"
    >
      {label}
      <span
        aria-hidden
        className="flex h-8 w-8 items-center justify-center border border-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent-bright group-hover:text-accent-bright"
      >
        ↑
      </span>
    </button>
  );
}
