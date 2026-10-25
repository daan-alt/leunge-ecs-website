import type { Metadata } from "next";
import { alternatesFor } from "@/lib/locale";
import { RequestFormPage, formMetadata } from "@/components/pages/RequestFormPage";

export const metadata: Metadata = {
  ...formMetadata("contact", "nl"),
  alternates: alternatesFor("contact", "nl"),
};

export default function Page() {
  return <RequestFormPage page="contact" locale="nl" />;
}
