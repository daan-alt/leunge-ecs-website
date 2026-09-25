import type { Metadata } from "next";
import { content } from "@/content";
import { RequestForm } from "@/components/forms/RequestForm";

export const metadata: Metadata = {
  title: content.serviceRequest.title,
  description: content.serviceRequest.intro,
};

export default function ServiceRequestPage() {
  return <RequestForm content={content.serviceRequest} kind="service" />;
}
