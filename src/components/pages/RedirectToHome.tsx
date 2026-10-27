"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { BASE_PATH } from "@/lib/utils";

// A static export can't send a 301, so the former /about page forwards to the
// homepage section in the browser and shows a plain link as a fallback.
export function RedirectToHome({ target, label, title, linkLabel }: { target: string; label: string; title: string; linkLabel: string }) {
  useEffect(() => {
    window.location.replace(`${BASE_PATH}${target}`);
  }, [target]);

  return (
    <PageHero label={label} title={title} h1>
      <Link prefetch={false} href={target} className="link-line mt-10 text-mist/80 hover:text-white">
        {linkLabel}
        <span aria-hidden>→</span>
      </Link>
    </PageHero>
  );
}
