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
    badge: "Independent technical expertise",
    titleLine1: "Marine technical service,",
    titleLine2: "wherever your vessel calls.",
    subtitle:
      "Technical service, genuine spare parts and engineering for seagoing vessels, including Alpha Lubrication Systems, automation and commissioning.",
    tagline:
      "LEUNGE-ECS B.V. — technical specialist with Dutch roots, available worldwide on board and on location.",
    ctaService: "Request Service",
    ctaParts: "Request Parts",
    stats: [
      { label: "In the field", value: "Since 1993" },
      { label: "Independent", value: "Since 2012" },
      { label: "Availability", value: "Worldwide" },
      { label: "Where", value: "On board & on location" },
    ],
  },
  intro: {
    label: "Who we are",
    statement: "A failure at sea doesn't wait for a report. We work from the engine room, not from a remote office.",
    body: [
      "LEUNGE-ECS supports seagoing vessels with technical service and maintenance, Alpha Lubrication Systems service, automation and control engineering, engineering and genuine OEM spare parts. A service engineer can join on board when continuous technical support is needed.",
      "We work with you to determine the most suitable form of technical support, with attention to transparency, cost-effectiveness and flexibility.",
    ],
    cta: "Contact us",
    stat: "30+",
    statLabel: "years of technical experience",
    statDetail:
      "Built up in field service, engineering, troubleshooting and technical supervision since 1993.",
    image: { src: "/images/services-technical-expertise", alt: "Marine service engineer in a white hard hat inspecting a large engine section with a handheld tablet and torch in a ship's engine room.", width: 1200, height: 896, variants: [640, 1200] },
  },
  highlight: {
    label: "Genuine Spare Parts",
    title: "Genuine spare parts",
    body: "Sourcing, purchasing and delivery of genuine OEM spare parts, fast and correctly delivered: from a single part to a complete package for a vessel or project. With the technical background to determine the right specification and coordinate delivery tightly.",
    cta: "Request parts",
    image: { src: "/images/spare-parts-workbench", alt: "Genuine marine engine spare parts on a steel workbench: a piston with connecting rod, a gear, copper washers, seals and a gasket, next to an open shipping box.", width: 1200, height: 896, variants: [640, 1200] },
  },
  process: {
    label: "How it works",
    title: "From first message to work on board.",
    intro:
      "Every request is different. This is how it generally runs, from the first description to the finished job.",
    steps: [
      {
        index: "01",
        title: "Request",
        body: "Describe the vessel, the system and the situation through the request form. Photos and nameplate details speed up the diagnosis.",
      },
      {
        index: "02",
        title: "Assessment",
        body: "A personal response follows. The technical situation is clarified, and it is determined whether an engineer should join on board or parts need to be sourced.",
      },
      {
        index: "03",
        title: "Scope & offer",
        body: "Scope, approach and delivery are agreed per request, with attention to transparency, cost-effectiveness and flexibility.",
      },
      {
        index: "04",
        title: "Execution",
        body: "Work on board or on location, or delivery of the parts, with documentation such as test reports where applicable.",
      },
    ],
  },
  principles: {
    label: "Our approach",
    title: "Four principles. No empty marketing language.",
    items: [
      {
        title: "Experience",
        body: "Hands-on work in engine rooms and on location, and in failures that don't wait for a report.",
      },
      {
        title: "Independence",
        body: "An independent technical specialist since 2012, working directly with you.",
      },
      {
        title: "Pragmatism",
        body: "No unnecessary layers. The most suitable form of support is determined together, case by case.",
      },
      {
        title: "Precision",
        body: "Technical clarity about what a situation requires and what it takes to move forward.",
      },
    ],
    image: { src: "/images/approach-precision-inspection", alt: "Engineer in a hard hat and ear defenders examining pipe flanges by torchlight in a dimly lit engine room.", width: 1200, height: 670, variants: [640, 1200] },
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
        blueprint: { src: "/blueprints/technical-service.svg", alt: "Blueprint-style line drawing of a four-cylinder marine engine in side view, with three marked inspection points." },
      },
      {
        index: "02",
        title: "Alpha Lubrication Systems",
        description:
          "Inspection, maintenance and overhaul of Alpha lubrication systems on main engines, including troubleshooting, adjustment, commissioning and optimization.",
        detail: "Main engines · Commissioning · Optimization.",
        blueprint: { src: "/blueprints/alpha-lubrication.svg", alt: "Blueprint-style cross-section of a cylinder liner with piston rings and oil injection points fed from a lubricator unit." },
      },
      {
        index: "03",
        title: "Genuine Spare Parts",
        description:
          "Delivery of genuine OEM spare parts: sourcing, purchasing and complete parts packages for vessels and projects.",
        detail: "OEM parts · Sourcing & purchasing · Complete packages.",
        blueprint: { src: "/blueprints/spare-parts.svg", alt: "Blueprint-style exploded view of a piston with rings, pin, connecting rod, a gasket and washers, each marked with a numbered balloon." },
      },
      {
        index: "04",
        title: "Automation & control engineering",
        description:
          "Automation systems, control panels and PLC/HMI solutions, including troubleshooting and modifications.",
        detail: "PLC & HMI · Control panels · Modifications.",
        blueprint: { src: "/blueprints/automation.svg", alt: "Blueprint-style front view of an open control cabinet with a PLC rack, operator panel, relays, a terminal strip and cable duct." },
      },
      {
        index: "05",
        title: "Engineering & design",
        description:
          "Mechanical and electrical engineering, system design and modifications, with technical documentation and drawings.",
        detail: "Mechanical engineering · Electrical engineering · Technical documentation.",
        blueprint: { src: "/blueprints/engineering.svg", alt: "Blueprint-style engineering drawing of a flange in front view and section, with centre lines, a bolt circle and dimension lines." },
      },
      {
        index: "06",
        title: "Inspection, testing & commissioning",
        description:
          "Electrical inspections, testing of equipment and systems, commissioning, and measurements with accompanying test reports.",
        detail: "Measurements · Test reports · Documentation.",
        blueprint: { src: "/blueprints/inspection-commissioning.svg", alt: "Blueprint-style drawing of a test setup: a measurement screen with a waveform and cursors, probes, a checklist of test points and an approval stamp." },
      },
    ],
    note: "These core services are delivered worldwide, on board or on location. The exact scope is agreed per request.",
    cta: "Get in touch",
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
    label: "About",
    title: "Experience, built in the field.",
    lead: "Technical experience isn't built behind a desk. It's built in engine rooms, during start-up procedures, in failures that call for an immediate decision, and on locations where systems simply have to work.",
    pathLabel: "Career path",
    path: [
      {
        marker: "1993",
        title: "Start-up, service and troubleshooting",
        body: "On gas production installations in the Dutch offshore sector.",
      },
      {
        marker: "Field service",
        title: "Superintendent Engineer",
        body: "Focused on control systems for marine engines, and passing on that knowledge as a trainer.",
      },
      {
        marker: "Electronics",
        title: "Superintendent Electronic Engineer",
        body: "Electronic systems and technical supervision.",
      },
      {
        marker: "2012",
        title: "Independent as LEUNGE-ECS",
        body: "Working as an independent Technical Superintendent, with three decades of experience as the starting point for every technical question.",
      },
    ],
    name: "Technical Superintendent",
    role: "Active since 1993 · Independent since 2012",
  },
  finalCta: {
    titleLine1: "A technical challenge?",
    titleLine2: "Let's talk.",
    body: "Whether it's technical supervision, engineering expertise or hands-on technical support: it starts with a conversation.",
    label: "Request",
    options: [
      {
        index: "01",
        title: "Request service",
        description: "Technical service, troubleshooting and support on board.",
        href: "/service-request",
      },
      {
        index: "02",
        title: "Request parts",
        description: "Genuine OEM spare parts: from a single part to a complete package.",
        href: "/parts-request",
      },
      {
        index: "03",
        title: "Vessel out of service?",
        description: "Mark your service request as an emergency.",
        href: "/service-request?urgency=emergency",
        tag: "Urgent",
      },
    ],
    responseNote: "A personal response follows, usually within a few working days.",
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
      { name: "System / engine type", label: "System / engine make & type", type: "text", wide: true },
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
  notFound: {
    label: "Error 404",
    title: "This page is off course.",
    body: "The page you are looking for doesn't exist or has moved. Return to the start, or get in touch directly.",
    cta: "Back to home",
  },
  footer: {
    navigationLabel: "Navigation",
    expertiseLabel: "Expertise",
    contactLabel: "Contact",
    contactCta: "Or get in touch",
    availability: "Available worldwide",
    timeLabel: "Netherlands",
    backToTop: "Back to top",
    tagline:
      "Technical service, genuine spare parts and engineering for seagoing vessels — available worldwide.",
    rightsLine: (year: number) => `© ${year} LEUNGE-ECS B.V. All rights reserved.`,
    location: "Netherlands, worldwide availability",
  },
};
