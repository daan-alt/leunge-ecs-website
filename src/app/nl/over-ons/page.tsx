import type { Metadata } from "next";
import { nl } from "@/content/nl";
import { alternatesFor } from "@/lib/locale";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: nl.about.title,
  description: nl.about.lead,
  alternates: alternatesFor("about", "nl"),
};

export default function Page() {
  return <AboutPage locale="nl" />;
}
