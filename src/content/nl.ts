import type { SiteContent } from "./types";

// Dutch copy — the first live version of the site.
// All facts here trace back to the confirmed career timeline (1993–present).
// Nothing about clients, vessels, certifications or specific contracted
// services is stated as fact, per brief. Add src/content/en.ts and switch
// it in via src/content/index.ts when an English version is needed.

export const nl: SiteContent = {
  meta: {
    title: "LEUNGE-ECS B.V.: Technische Service, Onderdelen & Engineering",
    description:
      "LEUNGE-ECS B.V. levert technische service aan zeevarende schepen, originele OEM-onderdelen, Alpha Lubrication Systems service, automatisering, engineering en commissioning. Meer dan 30 jaar technische ervaring, sinds 1993.",
    ogDescription:
      "Technische service, originele onderdelen en engineering voor zeevarende schepen, wereldwijd inzetbaar.",
    keywords: [
      "Genuine spare parts distributor",
      "Scheepsonderdelen leverancier",
      "OEM onderdelen schepen",
      "Alpha Lubrication Systems service",
      "Technical Superintendent",
      "Technical service seagoing vessels",
      "Marine automation control systems",
      "Marine engineering consultancy",
      "Testing en commissioning schepen",
      "Technische troubleshooting scheepsmotoren",
    ],
  },
  nav: {
    links: [
      { label: "Home", href: "#top" },
      { label: "Onderdelen", href: "#onderdelen" },
      { label: "Expertise", href: "#expertise" },
      { label: "Ervaring", href: "#ervaring" },
      { label: "Over", href: "#over" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Neem contact op",
  },
  hero: {
    eyebrow: "LEUNGE-ECS B.V.",
    titleLine1: "LEUNGE-ECS B.V.",
    titleLine2: "Onafhankelijke technische expertise",
    subtitle:
      "Technische service, originele onderdelen en engineering voor zeevarende schepen, inclusief Alpha Lubrication Systems, automatisering en commissioning.",
    tagline:
      "Technisch specialist met Nederlandse wortels, wereldwijd inzetbaar aan boord en op locatie. Actief in de techniek sinds 1993, zelfstandig als LEUNGE-ECS sinds 2012.",
  },
  brandStatement: {
    label: "PRINCIPE",
    lineOne: "Complexe technische systemen vragen om meer dan vakkennis.",
    lineTwo: "Ze vragen om ervaring.",
    body: "LEUNGE-ECS combineert praktijkervaring, engineering-kennis en technische supervisie. Niet vanuit een kantoor op afstand, maar vanuit decennia werk in machinekamers, op locatie en bij storingen die niet wachten op een rapport.",
  },
  servicesIntro: {
    label: "Technische Expertise",
    title: "Technische expertise",
    body: [
      "LEUNGE-ECS ondersteunt zeevarende schepen met technische service en onderhoud, Alpha Lubrication Systems service, automatisering en regeltechniek, engineering en originele OEM-onderdelen. Waar nodig vaart een service engineer mee voor continue technische ondersteuning.",
      "Wij werken met u mee om de meest passende vorm van technische ondersteuning te bepalen, met aandacht voor transparantie, kosteneffectiviteit en flexibiliteit.",
    ],
    cta: "Neem contact op",
  },
  highlight: {
    label: "Genuine Spare Parts",
    title: "Originele onderdelen",
    body: "Sourcing, inkoop en levering van originele OEM-onderdelen, snel en correct geleverd: van een enkel onderdeel tot een compleet pakket voor schip of project. Met de technische achtergrond om de juiste specificatie te bepalen en levering strak te coördineren.",
    cta: "Vraag onderdelen aan",
  },
  approach: {
    label: "Onze Aanpak",
    title: "Precisie boven beloftes",
    body: "LEUNGE-ECS werkt vanuit vier uitgangspunten: ervaring, onafhankelijkheid, pragmatisme en precisie. Geen overbodige lagen, geen loze marketingtaal. Alleen technische duidelijkheid over wat een situatie vraagt en wat er nodig is om verder te komen.",
    cta: "Bekijk uitgangspunten",
  },
  credibility: {
    label: "ERVARING",
    stat: "30+",
    statLabel: "jaar technische ervaring",
    statDetail:
      "Opgebouwd in field service, engineering, troubleshooting en technische supervisie sinds 1993.",
    secondary: [
      { label: "ONAFHANKELIJK", value: "Technisch specialist" },
      { label: "INTERNATIONAAL", value: "Wereldwijd inzetbaar" },
    ],
  },
  expertise: {
    label: "EXPERTISE",
    title: "Wat LEUNGE-ECS levert.",
    intro:
      "Van dagelijkse technische service aan boord tot originele onderdelen en complete engineering-trajecten: dit zijn de kerngebieden van LEUNGE-ECS.",
    areas: [
      {
        index: "01",
        title: "Technische service & support",
        description:
          "Technische service, troubleshooting en onderhoud aan boord van zeevarende schepen. Indien gewenst vaart een service engineer mee voor continue technische ondersteuning.",
        detail: "Onboard service · Troubleshooting · Ondersteuning tijdens de reis.",
      },
      {
        index: "02",
        title: "Alpha Lubrication Systems",
        description:
          "Inspectie, onderhoud en overhaul van Alpha smeersystemen op hoofdmotoren, inclusief troubleshooting, afstelling, commissioning en optimalisatie.",
        detail: "Hoofdmotoren · Commissioning · Optimalisatie.",
      },
      {
        index: "03",
        title: "Genuine Spare Parts",
        description:
          "Levering van originele OEM-onderdelen: sourcing, inkoop en complete onderdelenpakketten voor schepen en projecten.",
        detail: "OEM-onderdelen · Sourcing & inkoop · Complete pakketten.",
      },
      {
        index: "04",
        title: "Automatisering & regeltechniek",
        description:
          "Automatiseringssystemen, regelpanelen en PLC/HMI-oplossingen, inclusief troubleshooting en modificaties.",
        detail: "PLC & HMI · Regelpanelen · Modificaties.",
      },
      {
        index: "05",
        title: "Engineering & ontwerp",
        description:
          "Werktuigbouwkundige en elektrotechnische engineering, systeemontwerp en modificaties, met technische documentatie en tekeningen.",
        detail: "Werktuigbouw · Elektrotechniek · Technische documentatie.",
      },
      {
        index: "06",
        title: "Inspectie, testen & commissioning",
        description:
          "Elektrische inspecties, het testen van apparatuur en systemen, commissioning, en metingen met bijbehorende testrapporten.",
        detail: "Metingen · Testrapporten · Documentatie.",
      },
    ],
    note: "Deze kerndiensten worden wereldwijd geleverd, aan boord of op locatie. De exacte invulling wordt per aanvraag afgestemd.",
  },
  techSpec: {
    label: "TECHNISCHE DIEPGANG",
    title: "Systemen en werkterreinen.",
    intro:
      "Een selectie van de technische systemen en disciplines uit de loopbaan van LEUNGE-ECS.",
    groups: [
      { label: "CONTROLESYSTEMEN", items: ["Motormanagementsystemen", "Local & main control systems"] },
      { label: "ENGINEERING", items: ["Elektronische besturingsplatformen", "Ontwerp & modificaties"] },
      { label: "FIELD EXPERIENCE", items: ["Commissioning", "Service", "Troubleshooting"] },
      { label: "INDUSTRIËLE ERVARING", items: ["Gasproductie", "Onderhoud", "Turnarounds"] },
    ],
  },
  about: {
    label: "OVER",
    title: "Ervaring, opgebouwd in het veld.",
    paragraphs: [
      "Technische ervaring ontstaat niet achter een bureau. Ze ontstaat in machinekamers, tijdens opstartprocedures, bij storingen die om een directe beslissing vragen en op locaties waar systemen simpelweg moeten functioneren.",
      "Die ervaring begon in 1993, met opstart, service en troubleshooting op gasproductie-installaties in de Nederlandse offshore. Daarna volgde een periode als Superintendent Engineer in field service, met een focus op regel- en besturingssystemen voor scheepsmotoren, en het overdragen van die kennis als trainer.",
      "Vervolgens lag de nadruk op elektronische systemen en technische supervisie, als Superintendent Electronic Engineer. Sinds 2012 werkt hij zelfstandig als onafhankelijk Technical Superintendent, via LEUNGE-ECS, met de ervaring van drie decennia als uitgangspunt voor ieder technisch vraagstuk.",
    ],
    name: "Technical Superintendent",
    role: "Actief sinds 1993 · Onafhankelijk sinds 2012",
    imageCaption: "Portret nog aan te leveren",
  },
  why: {
    label: "WAAROM LEUNGE-ECS",
    title: "Vier uitgangspunten.",
    principles: [
      {
        title: "Ervaring",
        description:
          "Decennia technische betrokkenheid in engineering, field service en supervisie.",
      },
      {
        title: "Onafhankelijkheid",
        description: "Directe technische expertise, zonder onnodige lagen.",
      },
      {
        title: "Pragmatisme",
        description: "Oplossingen die zijn gegrond in de technische praktijk.",
      },
      {
        title: "Precisie",
        description: "Een gestructureerde aanpak van complexe technische vraagstukken.",
      },
    ],
  },
  finalCta: {
    titleLine1: "Een technische uitdaging?",
    titleLine2: "Laten we praten.",
    body: "Of het nu gaat om technische supervisie, engineering-expertise of praktische technische ondersteuning: het begint met een gesprek.",
    cta: "Neem contact op",
  },
  contact: {
    label: "CONTACT",
    title: "Start het gesprek.",
    intro:
      "Beschrijf de situatie kort. Reactie volgt persoonlijk, doorgaans binnen enkele werkdagen.",
    form: {
      name: "Naam",
      company: "Bedrijf",
      email: "E-mail",
      phone: "Telefoon",
      subject: "Onderwerp",
      subjectPlaceholder: "Waar gaat het om?",
      message: "Bericht",
      messagePlaceholder: "Beschrijf de technische situatie of vraag.",
      submit: "Verstuur bericht",
      submitting: "Versturen…",
      success: "Bericht verzonden.",
      successDetail: "Dank voor het bericht. Er volgt persoonlijk contact.",
      error: "Er ging iets mis. Probeer het opnieuw.",
      optional: "optioneel",
    },
    directLabel: "Direct contact",
    location: "Nederland",
    scope: "Internationaal inzetbaar",
  },
  footer: {
    tagline:
      "Technische service, originele onderdelen en engineering voor zeevarende schepen, wereldwijd inzetbaar.",
    rightsLine: (year: number) => `© ${year} LEUNGE-ECS B.V. Alle rechten voorbehouden.`,
    location: "Nederland, internationaal inzetbaar",
  },
};
