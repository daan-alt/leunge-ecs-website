import type { Metadata } from "next";
import { content } from "@/content";
import { JsonLd, breadcrumb } from "@/components/seo/JsonLd";
import { RequestForm } from "@/components/forms/RequestForm";

export const metadata: Metadata = {
  title: content.serviceRequest.title,
  alternates: { canonical: "/service-request" },
  description: content.serviceRequest.intro,
};

export default function ServiceRequestPage() {
  return (
    <>
      <JsonLd data={breadcrumb("Home", content.serviceRequest.title, "/service-request")} />
      <RequestForm content={content.serviceRequest} kind="service" />
    </>
  );
}
