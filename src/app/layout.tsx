import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { content } from "@/content";
import { SITE_URL } from "@/lib/utils";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

// Display: Archivo's width axis lets headlines run slightly expanded (see .font-display).
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
    locale: "en_GB",
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
    <html lang="en" className={`${archivo.variable} ${geist.variable} ${geistMono.variable} h-full`}>
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
