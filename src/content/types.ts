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

export interface WhyPrinciple {
  title: string;
  description: string;
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
  submit: string;
  submitting: string;
  success: string;
  successDetail: string;
  error: string;
  optional: string;
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
    cta: string;
  };
  hero: {
    eyebrow: string;
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
    cta: string;
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
  why: {
    label: string;
    title: string;
    principles: WhyPrinciple[];
  };
  finalCta: {
    titleLine1: string;
    titleLine2: string;
    body: string;
    cta: string;
  };
  contact: {
    label: string;
    title: string;
    intro: string;
    form: ContactFormLabels;
    directLabel: string;
    location: string;
    scope: string;
  };
  footer: {
    tagline: string;
    rightsLine: (year: number) => string;
    location: string;
  };
}
