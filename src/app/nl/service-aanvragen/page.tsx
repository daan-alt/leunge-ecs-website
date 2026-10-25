import type { Metadata } from "next";
import { alternatesFor } from "@/lib/locale";
import { RequestFormPage, formMetadata } from "@/components/pages/RequestFormPage";

export const metadata: Metadata = {
  ...formMetadata("service", "nl"),
  alternates: alternatesFor("service", "nl"),
};

export default function Page() {
  return <RequestFormPage page="service" locale="nl" />;
}
