import type { Metadata } from "next";
import { content } from "@/content";
import { RequestForm } from "@/components/forms/RequestForm";

export const metadata: Metadata = {
  title: content.contactGeneral.title,
  description: content.contactGeneral.intro,
};

export default function ContactPage() {
  return <RequestForm content={content.contactGeneral} kind="general" />;
}
