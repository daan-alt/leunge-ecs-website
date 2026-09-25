import type { Metadata } from "next";
import { content } from "@/content";
import { RequestForm } from "@/components/forms/RequestForm";

export const metadata: Metadata = {
  title: content.partsRequest.title,
  description: content.partsRequest.intro,
};

export default function PartsRequestPage() {
  return <RequestForm content={content.partsRequest} kind="parts" />;
}
