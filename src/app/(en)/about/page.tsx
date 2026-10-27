import type { Metadata } from "next";
import { content } from "@/content";
import { RedirectToHome } from "@/components/pages/RedirectToHome";

// Kept so old links keep working: forwards to the About section of the homepage.
export const metadata: Metadata = {
  title: content.about.title,
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function About() {
  return <RedirectToHome target="/#about" label={content.about.label} title={content.about.title} linkLabel={content.nav.links[3].label} />;
}
