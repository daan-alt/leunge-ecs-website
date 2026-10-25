import type { Metadata } from "next";
import { alternatesFor } from "@/lib/locale";
import { RequestFormPage, formMetadata } from "@/components/pages/RequestFormPage";

export const metadata: Metadata = {
  ...formMetadata("contact", "en"),
  alternates: alternatesFor("contact", "en"),
};

export default function Page() {
  return <RequestFormPage page="contact" locale="en" />;
}
