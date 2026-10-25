import type { Metadata } from "next";
import { content } from "@/content";
import { alternatesFor } from "@/lib/locale";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: content.about.title,
  description: content.about.lead,
  alternates: alternatesFor("about", "en"),
};

export default function About() {
  return <AboutPage locale="en" />;
}
