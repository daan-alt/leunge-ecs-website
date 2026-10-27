export type IconName = "wrench" | "drop" | "gear" | "chip" | "ruler" | "check" | "ship" | "arrow";

export interface WizardOption {
  value: string;
  title: string;
  description?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

// `src` is the path without size suffix; files live at `${src}-${width}.webp`
// in /public for every width in `variants`. `width`/`height` = intrinsic size
// of the largest variant (used for the aspect ratio hint only).
export interface ContentImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  variants: number[];
}

export interface ExpertiseArea {
  index: string;
  /** Which request form the "get in touch" link opens. */
  kind: "service" | "parts";
  title: string;
  description: string;
  detail: string;
  /** Hand-drawn SVG in public/blueprints (fixed colours, made for the dark panel). */
  blueprint: { src: string; alt: string };
}

export interface TechSpecGroup {
  label: string;
  items: string[];
}

export interface ContactFormLabels {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  subjectPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  file: string;
  fileHint: string;
  submit: string;
  submitting: string;
  success: string;
  successDetail: string;
  error: string;
  optional: string;
  uploading: string;
  fileTooMany: string;
  fileTooLarge: string;
  fileType: string;
  fileUploadError: string;
  fileUnavailable: string;
}

/** Request-specific field rendered above the subject/message fields. */
export interface ExtraField {
  /** Also the key shown in the notification email, so keep it human-readable. */
  name: string;
  /** Stable id for deep-link prefill (?urgency=, ?system=), independent of the language. */
  key?: "urgency" | "system";
  label: string;
  type: "text" | "date" | "select";
  options?: string[];
  required?: boolean;
  /** Span both grid columns. */
  wide?: boolean;
  inputMode?: "numeric" | "text";
}

export interface RequestFormContent {
  label: string;
  /** Email subject, e.g. "New service request — LEUNGE-ECS website". */
  subjectPrefix: string;
  title: string;
  intro: string;
  specsNote?: string;
  specsLabel: string;
  extraFields?: ExtraField[];
  form: ContactFormLabels;
  directLabel: string;
  location: string;
  scopeLabel: string;
  scope: string;
}

/** Internal paths of this language (used by every link in the components). */
export interface Routes {
  home: string;
  about: string;
  service: string;
  parts: string;
  contact: string;
  request: string;
  /** Home with a section anchor, e.g. "/#expertise". */
  expertise: string;
}

export interface SiteContent {
  locale: "en" | "nl";
  routes: Routes;
  /** Short labels of the language switch. */
  languageSwitch: { label: string; en: string; nl: string };
  meta: {
    title: string;
    description: string;
    ogDescription: string;
    keywords: string[];
  };
  nav: {
    links: NavLink[];
    ctaService: string;
    ctaParts: string;
    skipLabel: string;
    /** The logo's link: top of the homepage. */
    homeHref: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    tagline: string;
    ctaService: string;
    ctaParts: string;
    stats: { label: string; value: string }[];
  };
  intro: {
    label: string;
    statement: string;
    body: string[];
    cta: string;
    stat: string;
    statLabel: string;
    statDetail: string;
    image: ContentImage;
  };
  highlight: {
    label: string;
    title: string;
    body: string;
    cta: string;
    image: ContentImage;
  };
  anatomy: {
    label: string;
    title: string;
    intro: string;
    /** Describes the drawing for assistive technology. */
    figureLabel: string;
    parts: { title: string; body: string }[];
    cta: string;
  };
  process: {
    label: string;
    title: string;
    intro: string;
    steps: { index: string; icon: IconName; title: string; body: string }[];
  };
  situations: {
    label: string;
    title: string;
    items: { icon: IconName; title: string; body: string; cta: string; href: string }[];
  };
  principles: {
    label: string;
    title: string;
    items: { title: string; body: string }[];
    image: ContentImage;
  };
  expertise: {
    label: string;
    title: string;
    intro: string;
    areas: ExpertiseArea[];
    note: string;
    cta: string;
  };
  techSpec: {
    label: string;
    title: string;
    intro: string;
    groups: TechSpecGroup[];
  };
  about: {
    label: string;
    title: string;
    lead: string;
    pathLabel: string;
    path: { marker: string; title: string; body: string }[];
    name: string;
    role: string;
  };
  finalCta: {
    titleLine1: string;
    titleLine2: string;
    body: string;
    label: string;
    options: { index: string; title: string; description: string; href: string; tag?: string }[];
    responseNote: string;
    guideLabel: string;
  };
  wizard: {
    label: string;
    title: string;
    intro: string;
    /** Uses {step} and {total} placeholders. */
    stepLabel: string;
    back: string;
    next: string;
    typeQuestion: string;
    typeOptions: WizardOption[];
    urgencyQuestion: string;
    urgencyOptions: WizardOption[];
    systemQuestion: string;
    systemOther: string;
    summaryTitle: string;
    summaryLabels: { type: string; urgency: string; system: string };
    summaryNote: string;
    continue: string;
  };
  serviceRequest: RequestFormContent;
  partsRequest: RequestFormContent;
  contactGeneral: RequestFormContent;
  notFound: {
    label: string;
    title: string;
    body: string;
    cta: string;
  };
  footer: {
    navigationLabel: string;
    expertiseLabel: string;
    contactLabel: string;
    contactCta: string;
    availability: string;
    timeLabel: string;
    backToTop: string;
    tagline: string;
    rightsLine: (year: number) => string;
    location: string;
  };
}
