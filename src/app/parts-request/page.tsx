import type { Metadata } from "next";
import { content } from "@/content";
import { JsonLd, breadcrumb } from "@/components/seo/JsonLd";
import { RequestForm } from "@/components/forms/RequestForm";

export const metadata: Metadata = {
  title: content.partsRequest.title,
  alternates: { canonical: "/parts-request" },
  description: content.partsRequest.intro,
};

export default function PartsRequestPage() {
  return (
    <>
      <JsonLd data={breadcrumb("Home", content.partsRequest.title, "/parts-request")} />
      <RequestForm content={content.partsRequest} kind="parts" />
    </>
  );
}
