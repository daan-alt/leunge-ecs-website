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

export interface SiteContent {
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
  process: {
    label: string;
    title: string;
    intro: string;
    steps: { index: string; title: string; body: string }[];
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
    ctaGeneral: string;
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
