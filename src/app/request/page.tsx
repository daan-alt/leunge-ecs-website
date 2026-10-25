import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content } from "@/content";
import { features } from "@/lib/features";
import { JsonLd, breadcrumb } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { RequestWizard } from "@/components/forms/RequestWizard";

export const metadata: Metadata = {
  title: content.wizard.title,
  description: content.wizard.intro,
  alternates: { canonical: "/request" },
};

export default function RequestPage() {
  if (!features.wizard) notFound();
  const { wizard } = content;

  return (
    <>
      <JsonLd data={breadcrumb("Home", wizard.title, "/request")} />
      <PageHero label={wizard.label} title={wizard.title} lead={wizard.intro} h1 />
      <section className="section-y bg-paper">
        <div className="wrap max-w-3xl">
          <RequestWizard />
        </div>
      </section>
    </>
  );
}
