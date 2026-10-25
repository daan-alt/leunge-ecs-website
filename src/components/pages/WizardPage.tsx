import { getContent, type Locale } from "@/content";
import { features } from "@/lib/features";
import { JsonLd, breadcrumb } from "@/components/seo/JsonLd";
import { NotFoundBlock } from "@/components/pages/NotFoundBlock";
import { PageHero } from "@/components/ui/PageHero";
import { RequestWizard } from "@/components/forms/RequestWizard";

export function WizardPage({ locale }: { locale: Locale }) {
  if (!features.wizard) return <NotFoundBlock />;
  const content = getContent(locale);
  const { wizard } = content;

  return (
    <>
      <JsonLd data={breadcrumb("Home", wizard.title, content.routes.request)} />
      <PageHero label={wizard.label} title={wizard.title} lead={wizard.intro} h1 />
      <section className="section-y bg-paper">
        <div className="wrap max-w-3xl">
          <RequestWizard wizard={wizard} areas={content.expertise.areas} routes={content.routes} />
        </div>
      </section>
    </>
  );
}
