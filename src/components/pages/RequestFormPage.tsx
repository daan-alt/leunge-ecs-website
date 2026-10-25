import { getContent, type Locale } from "@/content";
import { JsonLd, breadcrumb } from "@/components/seo/JsonLd";
import { RequestForm } from "@/components/forms/RequestForm";

const FORMS = {
  service: { content: "serviceRequest", kind: "service" },
  parts: { content: "partsRequest", kind: "parts" },
  contact: { content: "contactGeneral", kind: "general" },
} as const;

export type FormPageKey = keyof typeof FORMS;

export function RequestFormPage({ page, locale }: { page: FormPageKey; locale: Locale }) {
  const content = getContent(locale);
  const form = content[FORMS[page].content];

  return (
    <>
      <JsonLd data={breadcrumb("Home", form.title, content.routes[page])} />
      <RequestForm content={form} kind={FORMS[page].kind} />
    </>
  );
}

/** Title + description for the page's <head>. */
export function formMetadata(page: FormPageKey, locale: Locale) {
  const form = getContent(locale)[FORMS[page].content];
  return { title: form.title, description: form.intro };
}
