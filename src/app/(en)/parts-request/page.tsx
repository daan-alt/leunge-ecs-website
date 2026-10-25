import type { Metadata } from "next";
import { alternatesFor } from "@/lib/locale";
import { RequestFormPage, formMetadata } from "@/components/pages/RequestFormPage";

export const metadata: Metadata = {
  ...formMetadata("parts", "en"),
  alternates: alternatesFor("parts", "en"),
};

export default function Page() {
  return <RequestFormPage page="parts" locale="en" />;
}
