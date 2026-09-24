import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { content } from "@/content";
import { SITE_URL } from "@/lib/utils";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: content.meta.title,
    template: "%s | LEUNGE-ECS B.V.",
  },
  description: content.meta.description,
  keywords: content.meta.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: content.meta.title,
    description: content.meta.ogDescription,
    url: SITE_URL,
    siteName: "LEUNGE-ECS B.V.",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.ogDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LEUNGE-ECS B.V.",
  description: content.meta.description,
  url: SITE_URL,
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
  },
  knowsAbout: content.expertise.areas.map((a) => a.title),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-body text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
