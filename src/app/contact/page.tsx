import type { Metadata } from "next";
import { content } from "@/content";
import { JsonLd, breadcrumb } from "@/components/seo/JsonLd";
import { RequestForm } from "@/components/forms/RequestForm";

export const metadata: Metadata = {
  title: content.contactGeneral.title,
  alternates: { canonical: "/contact" },
  description: content.contactGeneral.intro,
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumb("Home", content.contactGeneral.title, "/contact")} />
      <RequestForm content={content.contactGeneral} kind="general" />
    </>
  );
}
