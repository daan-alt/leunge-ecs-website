import type { SiteContent } from "./types";

// English copy — the site's sole language. All facts here trace back to the
// confirmed career timeline (1993–present). Nothing about clients, vessels,
// certifications or specific contracted services is stated as fact, per brief.

const requestFormLabels = (fileHint: string) => ({
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone",
  subject: "Subject",
  subjectPlaceholder: "What is this about?",
  message: "Message",
  messagePlaceholder: "Describe the situation or request.",
  file: "Attachments",
  fileHint,
  submit: "Send message",
  submitting: "Sending…",
  success: "Message sent.",
  successDetail: "Thank you for reaching out. You will hear back personally.",
  error: "Something went wrong. Please try again.",
  optional: "optional",
  uploading: "Uploading files…",
  fileTooMany: "Please attach at most 5 files.",
  fileTooLarge: "Each file can be at most 10 MB.",
  fileType: "Only images, PDF, Word and Excel files can be attached.",
  fileUploadError: "Your files could not be uploaded. Please try again, or send the request without attachments.",
  fileUnavailable: "File upload is temporarily unavailable. Send your request and reply to our email with the files.",
});

const FILE_TYPES = "Images, PDF, Word or Excel — max. 5 files, 10 MB each.";

export const en: SiteContent = {
  meta: {
    title: "LEUNGE-ECS B.V.: Technical Service, Parts & Engineering",
    description:
      "LEUNGE-ECS B.V. delivers technical service to seagoing vessels, genuine OEM spare parts, Alpha Lubrication Systems service, automation, engineering and commissioning. Worldwide service and shipping, with 30+ years of technical experience since 1993.",
    ogDescription:
      "Technical service, genuine spare parts and engineering for seagoing vessels — available worldwide.",
    keywords: [
      "Genuine spare parts distributor",
      "Marine spare parts supplier",
      "OEM parts for ships",
      "Alpha Lubrication Systems service",
      "Technical Superintendent",
      "Technical service seagoing vessels",
      "Marine automation control systems",
      "Marine engineering consultancy",
      "Testing and commissioning vessels",
      "Marine engine troubleshooting",
    ],
  },
  nav: {
    links: [
      { label: "Home", href: "/#top" },
      { label: "Expertise", href: "/#expertise" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaService: "Request Service",
    ctaParts: "Request Parts",
  },
  hero: {
    badge: "Worldwide service and shipping",
    titleLine1: "LEUNGE-ECS B.V.",
    titleLine2: "Independent technical expertise",
    subtitle:
      "Technical service, genuine spare parts and engineering for seagoing vessels, including Alpha Lubrication Systems, automation and commissioning.",
    tagline:
      "Technical specialist with Dutch roots, available worldwide on board and on location. Active in the field since 1993, independent as LEUNGE-ECS since 2012.",
  },
  brandStatement: {
    label: "PRINCIPLE",
    lineOne: "Complex technical systems demand more than expertise.",
    lineTwo: "They demand experience.",
    body: "LEUNGE-ECS combines hands-on experience, engineering knowledge and technical supervision. Not from a remote office, but from decades of work in engine rooms, on location, and during failures that don't wait for a report.",
  },
  servicesIntro: {
    label: "Technical Expertise",
    title: "Technical expertise",
    body: [
      "LEUNGE-ECS supports seagoing vessels with technical service and maintenance, Alpha Lubrication Systems service, automation and control engineering, engineering and genuine OEM spare parts. A service engineer can join on board when continuous technical support is needed.",
      "We work with you to determine the most suitable form of technical support, with attention to transparency, cost-effectiveness and flexibility.",
    ],
    cta: "Contact us",
  },
  highlight: {
    label: "Genuine Spare Parts",
    title: "Genuine spare parts",
    body: "Sourcing, purchasing and delivery of genuine OEM spare parts, fast and correctly delivered: from a single part to a complete package for a vessel or project. With the technical background to determine the right specification and coordinate delivery tightly.",
    cta: "Request parts",
  },
  approach: {
    label: "Our Approach",
    title: "Precision over promises",
    body: "LEUNGE-ECS works from four principles: experience, independence, pragmatism and precision. No unnecessary layers, no empty marketing language. Just technical clarity about what a situation requires and what it takes to move forward.",
  },
  credibility: {
    label: "EXPERIENCE",
    stat: "30+",
    statLabel: "years of technical experience",
    statDetail:
      "Built up in field service, engineering, troubleshooting and technical supervision since 1993.",
    secondary: [
      { label: "INDEPENDENT", value: "Technical specialist" },
      { label: "INTERNATIONAL", value: "Worldwide availability" },
    ],
  },
  expertise: {
    label: "EXPERTISE",
    title: "What LEUNGE-ECS delivers.",
    intro:
      "From day-to-day technical service on board to genuine spare parts and complete engineering projects: these are the core areas of LEUNGE-ECS.",
    areas: [
      {
        index: "01",
        title: "Technical service & support",
        description:
          "Technical service, troubleshooting and maintenance on board seagoing vessels. A service engineer can join on board when continuous technical support is needed.",
        detail: "Onboard service · Troubleshooting · Support during the voyage.",
      },
      {
        index: "02",
        title: "Alpha Lubrication Systems",
        description:
          "Inspection, maintenance and overhaul of Alpha lubrication systems on main engines, including troubleshooting, adjustment, commissioning and optimization.",
        detail: "Main engines · Commissioning · Optimization.",
      },
      {
        index: "03",
        title: "Genuine Spare Parts",
        description:
          "Delivery of genuine OEM spare parts: sourcing, purchasing and complete parts packages for vessels and projects.",
        detail: "OEM parts · Sourcing & purchasing · Complete packages.",
      },
      {
        index: "04",
        title: "Automation & control engineering",
        description:
          "Automation systems, control panels and PLC/HMI solutions, including troubleshooting and modifications.",
        detail: "PLC & HMI · Control panels · Modifications.",
      },
      {
        index: "05",
        title: "Engineering & design",
        description:
          "Mechanical and electrical engineering, system design and modifications, with technical documentation and drawings.",
        detail: "Mechanical engineering · Electrical engineering · Technical documentation.",
      },
      {
        index: "06",
        title: "Inspection, testing & commissioning",
        description:
          "Electrical inspections, testing of equipment and systems, commissioning, and measurements with accompanying test reports.",
        detail: "Measurements · Test reports · Documentation.",
      },
    ],
    note: "These core services are delivered worldwide, on board or on location. The exact scope is agreed per request.",
  },
  techSpec: {
    label: "TECHNICAL DEPTH",
    title: "Systems and areas of work.",
    intro:
      "A selection of the technical systems and disciplines from LEUNGE-ECS's career.",
    groups: [
      { label: "CONTROL SYSTEMS", items: ["Engine management systems", "Local & main control systems"] },
      { label: "ENGINEERING", items: ["Electronic control platforms", "Design & modifications"] },
      { label: "FIELD EXPERIENCE", items: ["Commissioning", "Service", "Troubleshooting"] },
      { label: "INDUSTRIAL EXPERIENCE", items: ["Gas production", "Maintenance", "Turnarounds"] },
    ],
  },
  about: {
    label: "ABOUT",
    title: "Experience, built in the field.",
    paragraphs: [
      "Technical experience isn't built behind a desk. It's built in engine rooms, during start-up procedures, in failures that call for an immediate decision, and on locations where systems simply have to work.",
      "That experience began in 1993, with start-up, service and troubleshooting on gas production installations in the Dutch offshore sector. A period followed as Superintendent Engineer in field service, focused on control systems for marine engines, and passing on that knowledge as a trainer.",
      "The focus then shifted to electronic systems and technical supervision, as Superintendent Electronic Engineer. Since 2012 he has worked independently as an independent Technical Superintendent, through LEUNGE-ECS, with three decades of experience as the starting point for every technical question.",
    ],
    name: "Technical Superintendent",
    role: "Active since 1993 · Independent since 2012",
    imageCaption: "Portrait to follow",
  },
  finalCta: {
    titleLine1: "A technical challenge?",
    titleLine2: "Let's talk.",
    body: "Whether it's technical supervision, engineering expertise or hands-on technical support: it starts with a conversation.",
    ctaService: "Request Service",
    ctaParts: "Request Parts",
    ctaGeneral: "Or get in touch for anything else",
  },
  serviceRequest: {
    label: "SERVICE REQUEST",
    title: "Request technical service.",
    intro:
      "Describe the situation or system briefly. A personal response follows, usually within a few working days.",
    specsNote:
      "Please include where possible: make & model, serial number, and photos of the issue. This speeds up diagnosis and response time.",
    specsLabel: "Specs",
    extraFields: [
      { name: "Vessel name", label: "Vessel name", type: "text", required: true },
      { name: "IMO number", label: "IMO number", type: "text", inputMode: "numeric" },
      { name: "Port / location", label: "Port / location", type: "text" },
      { name: "ETA", label: "ETA (arrival date)", type: "date" },
      { name: "System / engine type", label: "System / engine type (e.g. Alpha Lubricator, engine make & model)", type: "text", wide: true },
      {
        name: "Urgency",
        label: "Urgency",
        type: "select",
        options: ["Normal", "Urgent", "Emergency — vessel out of service"],
        required: true,
        wide: true,
      },
    ],
    form: requestFormLabels(`Photos or documents of the system or issue. ${FILE_TYPES}`),
    directLabel: "Direct contact",
    location: "Netherlands",
    scopeLabel: "Availability",
    scope: "Worldwide service and shipping",
  },
  partsRequest: {
    label: "PARTS REQUEST",
    title: "Request genuine spare parts.",
    intro:
      "Describe which part(s) you need. A personal response follows, usually within a few working days.",
    specsNote:
      "Please include where possible: make & model, part/serial number, and photos of the part or nameplate. This speeds up sourcing and quoting.",
    specsLabel: "Specs",
    extraFields: [
      { name: "System make / type", label: "System make / type", type: "text", required: true, wide: true },
      { name: "Delivery address / port", label: "Delivery address / port", type: "text" },
      { name: "Requested delivery date", label: "Requested delivery date", type: "date" },
    ],
    form: requestFormLabels(`Photos of the part, nameplate or drawing. ${FILE_TYPES}`),
    directLabel: "Direct contact",
    location: "Netherlands",
    scopeLabel: "Availability",
    scope: "Worldwide service and shipping",
  },
  contactGeneral: {
    label: "CONTACT",
    title: "Start the conversation.",
    intro:
      "Not a service or parts request? Describe the situation briefly. A personal response follows, usually within a few working days.",
    specsLabel: "Specs",
    form: requestFormLabels(`Attach any relevant files. ${FILE_TYPES}`),
    directLabel: "Direct contact",
    location: "Netherlands",
    scopeLabel: "Availability",
    scope: "Worldwide service and shipping",
  },
  footer: {
    tagline:
      "Technical service, genuine spare parts and engineering for seagoing vessels — available worldwide.",
    rightsLine: (year: number) => `© ${year} LEUNGE-ECS B.V. All rights reserved.`,
    location: "Netherlands, worldwide availability",
  },
};
