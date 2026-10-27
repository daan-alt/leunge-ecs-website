import type { Metadata } from "next";
import { nl } from "@/content/nl";
import { RedirectToHome } from "@/components/pages/RedirectToHome";

// Kept so old links keep working: forwards to the "Over ons" section of the Dutch homepage.
export const metadata: Metadata = {
  title: nl.about.title,
  robots: { index: false, follow: true },
  alternates: { canonical: "/nl" },
};

export default function Page() {
  return <RedirectToHome target="/nl#about" label={nl.about.label} title={nl.about.title} linkLabel={nl.nav.links[3].label} />;
}
