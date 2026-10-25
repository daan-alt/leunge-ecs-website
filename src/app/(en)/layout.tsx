import "../globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { fontVariables } from "@/lib/fonts";
import { siteMetadata, viewport as siteViewport } from "@/lib/site-metadata";

export const viewport = siteViewport;
export const metadata = siteMetadata("en");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-body text-ink antialiased pb-[3.25rem] lg:pb-0">
        <SiteShell locale="en">{children}</SiteShell>
      </body>
    </html>
  );
}
