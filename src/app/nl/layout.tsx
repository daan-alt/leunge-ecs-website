import "../globals.css";
import { NotFoundBlock } from "@/components/pages/NotFoundBlock";
import { SiteShell } from "@/components/layout/SiteShell";
import { features } from "@/lib/features";
import { fontVariables } from "@/lib/fonts";
import { siteMetadata, viewport as siteViewport } from "@/lib/site-metadata";

export const viewport = siteViewport;
export const metadata = { ...siteMetadata("nl"), ...(features.dutch ? {} : { robots: { index: false, follow: false } }) };

export default function NlRootLayout({ children }: { children: React.ReactNode }) {
  // Dutch switched off (src/lib/features.ts): every /nl URL shows the (English) not-found page.
  if (!features.dutch) {
    return (
      <html lang="en" className={`${fontVariables} h-full`}>
        <body className="flex min-h-full flex-col bg-paper font-body text-ink antialiased pb-[3.25rem] lg:pb-0">
          <SiteShell locale="en">
            <NotFoundBlock />
          </SiteShell>
        </body>
      </html>
    );
  }
  return (
    <html lang="nl" className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-body text-ink antialiased pb-[3.25rem] lg:pb-0">
        <SiteShell locale="nl">{children}</SiteShell>
      </body>
    </html>
  );
}
