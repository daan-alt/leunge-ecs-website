import type { Metadata } from "next";
import { content } from "@/content";
import { features } from "@/lib/features";
import { alternatesFor } from "@/lib/locale";
import { WizardPage } from "@/components/pages/WizardPage";

export const metadata: Metadata = {
  title: content.wizard.title,
  description: content.wizard.intro,
  alternates: alternatesFor("request", "en"),
  ...(features.wizard ? {} : { robots: { index: false, follow: false } }),
};

export default function Page() {
  return <WizardPage locale="en" />;
}
