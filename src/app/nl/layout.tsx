import "../globals.css";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { features } from "@/lib/features";
import { fontVariables } from "@/lib/fonts";
import { siteMetadata, viewport as siteViewport } from "@/lib/site-metadata";

export const viewport = siteViewport;
export const metadata = siteMetadata("nl");

export default function NlRootLayout({ children }: { children: React.ReactNode }) {
  // Dutch switched off (src/lib/features.ts): every /nl URL is a 404.
  if (!features.dutch) notFound();
  return (
    <html lang="nl" className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-body text-ink antialiased pb-[3.25rem] lg:pb-0">
        <SiteShell locale="nl">{children}</SiteShell>
      </body>
    </html>
  );
}
