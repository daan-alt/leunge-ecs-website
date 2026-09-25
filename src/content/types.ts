export interface NavLink {
  label: string;
  href: string;
}

export interface ExpertiseArea {
  index: string;
  title: string;
  description: string;
  detail: string;
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
  };
  brandStatement: {
    label: string;
    lineOne: string;
    lineTwo: string;
    body: string;
  };
  servicesIntro: {
    label: string;
    title: string;
    body: string[];
    cta: string;
  };
  highlight: {
    label: string;
    title: string;
    body: string;
    cta: string;
  };
  approach: {
    label: string;
    title: string;
    body: string;
  };
  credibility: {
    label: string;
    stat: string;
    statLabel: string;
    statDetail: string;
    secondary: { label: string; value: string }[];
  };
  expertise: {
    label: string;
    title: string;
    intro: string;
    areas: ExpertiseArea[];
    note: string;
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
    paragraphs: string[];
    name: string;
    role: string;
    imageCaption: string;
  };
  finalCta: {
    titleLine1: string;
    titleLine2: string;
    body: string;
    ctaService: string;
    ctaParts: string;
    ctaGeneral: string;
  };
  serviceRequest: RequestFormContent;
  partsRequest: RequestFormContent;
  contactGeneral: RequestFormContent;
  footer: {
    tagline: string;
    rightsLine: (year: number) => string;
    location: string;
  };
}
