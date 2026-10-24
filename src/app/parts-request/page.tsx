import type { Metadata } from "next";
import { content } from "@/content";
import { RequestForm } from "@/components/forms/RequestForm";

export const metadata: Metadata = {
  title: content.partsRequest.title,
  alternates: { canonical: "/parts-request" },
  description: content.partsRequest.intro,
};

export default function PartsRequestPage() {
  return <RequestForm content={content.partsRequest} kind="parts" />;
}
