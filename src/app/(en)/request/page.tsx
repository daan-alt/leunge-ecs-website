import type { Metadata } from "next";
import { content } from "@/content";
import { alternatesFor } from "@/lib/locale";
import { WizardPage } from "@/components/pages/WizardPage";

export const metadata: Metadata = {
  title: content.wizard.title,
  description: content.wizard.intro,
  alternates: alternatesFor("request", "en"),
};

export default function Page() {
  return <WizardPage locale="en" />;
}
