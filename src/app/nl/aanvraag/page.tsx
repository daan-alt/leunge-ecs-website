import type { Metadata } from "next";
import { nl } from "@/content/nl";
import { features } from "@/lib/features";
import { alternatesFor } from "@/lib/locale";
import { WizardPage } from "@/components/pages/WizardPage";

export const metadata: Metadata = {
  title: nl.wizard.title,
  description: nl.wizard.intro,
  alternates: alternatesFor("request", "nl"),
  ...(features.wizard ? {} : { robots: { index: false, follow: false } }),
};

export default function Page() {
  return <WizardPage locale="nl" />;
}
