import type { SiteContent } from "./types";

// Nederlandse tekst. LET OP: deze vertaling is door Claude geschreven en moet
// door de klant worden nagekeken voordat de Nederlandse versie live gaat.
// Feitelijk is er niets toegevoegd aan en.ts: dezelfde beweringen, andere taal.

const requestFormLabels = (fileHint: string) => ({
  name: "Naam",
  company: "Bedrijf",
  email: "E-mail",
  phone: "Telefoon",
  subject: "Onderwerp",
  subjectPlaceholder: "Waar gaat het over?",
  message: "Bericht",
  messagePlaceholder: "Beschrijf de situatie of aanvraag.",
  file: "Bijlagen",
  fileHint,
  submit: "Bericht versturen",
  submitting: "Versturen…",
  success: "Bericht verzonden.",
  successDetail: "Bedankt voor uw bericht. U krijgt persoonlijk antwoord.",
  error: "Er ging iets mis. Probeer het opnieuw.",
  optional: "optioneel",
  uploading: "Bestanden uploaden…",
  fileTooMany: "Voeg maximaal 5 bestanden toe.",
  fileTooLarge: "Elk bestand mag maximaal 10 MB zijn.",
  fileType: "Alleen afbeeldingen, pdf-, Word- en Excel-bestanden kunnen worden toegevoegd.",
  fileUploadError:
    "Uw bestanden konden niet worden geüpload. Probeer het opnieuw of verstuur de aanvraag zonder bijlagen.",
  fileUnavailable:
    "Bestanden uploaden is tijdelijk niet beschikbaar. Verstuur uw aanvraag en antwoord op onze e-mail met de bestanden.",
});

const FILE_TYPES = "Afbeeldingen, pdf, Word of Excel — max. 5 bestanden, 10 MB per stuk.";

export const nl: SiteContent = {
  locale: "nl",
  routes: {
    home: "/nl",
    about: "/nl/over-ons",
    service: "/nl/service-aanvragen",
    parts: "/nl/onderdelen-aanvragen",
    contact: "/nl/contact",
    request: "/nl/aanvraag",
    expertise: "/nl#expertise",
  },
  languageSwitch: { label: "Taal", en: "EN", nl: "NL" },
  meta: {
    title: "LEUNGE-ECS B.V.: Technische service, onderdelen & engineering",
    description:
      "LEUNGE-ECS B.V. levert technische service aan zeegaande schepen, originele OEM-onderdelen, service aan Alpha-smeersystemen, automatisering, engineering en inbedrijfstelling. Wereldwijd beschikbaar voor service en levering, met meer dan 30 jaar technische ervaring sinds 1993.",
    ogDescription:
      "Technische service, originele onderdelen en engineering voor zeegaande schepen — wereldwijd beschikbaar.",
    keywords: [
      "Leverancier originele onderdelen",
      "Leverancier scheepsonderdelen",
      "OEM-onderdelen voor schepen",
      "Service Alpha-smeersystemen",
      "Technisch superintendent",
      "Technische service zeeschepen",
      "Scheepsautomatisering en besturingssystemen",
      "Maritiem engineeringadvies",
      "Testen en inbedrijfstelling schepen",
      "Storingzoeken scheepsmotoren",
    ],
  },
  nav: {
    links: [
      { label: "Expertise", href: "/nl#expertise" },
      { label: "Onderdelen", href: "/nl#parts" },
      { label: "Werkwijze", href: "/nl#process" },
      { label: "Over ons", href: "/nl#about" },
      { label: "Contact", href: "/nl#contact" },
    ],
    ctaService: "Service aanvragen",
    ctaParts: "Onderdelen aanvragen",
    skipLabel: "Naar de inhoud",
    homeHref: "/nl#top",
  },
  hero: {
    badge: "Onafhankelijke technische expertise",
    titleLine1: "Technische scheepsservice,",
    titleLine2: "waar uw schip ook aanloopt.",
    subtitle:
      "Technische service, originele onderdelen en engineering voor zeegaande schepen, waaronder Alpha-smeersystemen, automatisering en inbedrijfstelling.",
    tagline:
      "LEUNGE-ECS B.V. — technisch specialist met Nederlandse wortels, wereldwijd beschikbaar aan boord en op locatie.",
    ctaService: "Service aanvragen",
    ctaParts: "Onderdelen aanvragen",
    stats: [
      { label: "In het vak", value: "Sinds 1993" },
      { label: "Zelfstandig", value: "Sinds 2012" },
      { label: "Beschikbaarheid", value: "Wereldwijd" },
      { label: "Waar", value: "Aan boord & op locatie" },
    ],
  },
  intro: {
    label: "Wie we zijn",
    statement: "Een storing op zee wacht niet op een rapport. Wij werken vanuit de machinekamer, niet vanachter een bureau.",
    body: [
      "LEUNGE-ECS ondersteunt zeegaande schepen met technische service en onderhoud, service aan Alpha-smeersystemen, automatiserings- en besturingstechniek, engineering en originele OEM-onderdelen. Wanneer doorlopende technische ondersteuning nodig is, kan een service-engineer aan boord meegaan.",
      "Samen bepalen we de meest passende vorm van technische ondersteuning, met aandacht voor transparantie, kostenefficiëntie en flexibiliteit.",
    ],
    cta: "Neem contact op",
    stat: "30+",
    statLabel: "jaar technische ervaring",
    statDetail:
      "Opgebouwd in field service, engineering, storingzoeken en technisch toezicht sinds 1993.",
    image: { src: "/images/services-technical-expertise", alt: "Service-engineer met witte helm inspecteert een groot motordeel met een tablet en zaklamp in de machinekamer van een schip.", width: 1200, height: 896, variants: [640, 1200] },
  },
  highlight: {
    label: "Originele onderdelen",
    title: "Originele onderdelen",
    body: "Inkoop, aanschaf en levering van originele OEM-onderdelen, snel en correct geleverd: van één enkel onderdeel tot een compleet pakket voor een schip of project. Met de technische achtergrond om de juiste specificatie te bepalen en de levering strak te coördineren.",
    cta: "Onderdelen aanvragen",
    image: { src: "/images/spare-parts-workbench", alt: "Originele onderdelen voor een scheepsmotor op een stalen werkbank: een zuiger met drijfstang, een tandwiel, koperen ringen, afdichtingen en een pakking, naast een geopende verzenddoos.", width: 1200, height: 896, variants: [640, 1200] },
  },
  anatomy: {
    label: "Anatomie van een onderdeel",
    title: "Elk onderdeel moet passen.",
    intro:
      "Een zuigerassemblage is een goed voorbeeld: de juiste specificatie voor elk onderdeel, en alles werkt samen.",
    figureLabel:
      "Tekening in blauwdrukstijl van een zuigerassemblage die uit elkaar valt in zijn onderdelen: zuigerkroon, ringen, pen, drijfstang, een pakking en sluitringen, elk gemarkeerd met een genummerd label.",
    parts: [
      { title: "Zuigerkroon", body: "Neemt de verbrandingsbelasting op en draagt de veergroeven." },
      { title: "Zuigerveren", body: "Dichten de verbrandingsruimte af en regelen de oliefilm op de cilinderbus." },
      { title: "Zuigerpen", body: "Verbindt de zuiger met de drijfstang." },
      { title: "Drijfstang", body: "Brengt de belasting over op de krukas." },
      { title: "Pakking", body: "Dicht de verbinding tussen twee bewerkte vlakken af." },
      { title: "Ringen en afdichtingen", body: "Kleine onderdelen met dezelfde eisen aan de specificatie." },
    ],
    cta: "Onderdelen aanvragen",
  },
  process: {
    label: "Hoe het werkt",
    title: "Van eerste bericht tot werk aan boord.",
    intro:
      "Elke aanvraag is anders. Zo verloopt het in grote lijnen, van de eerste omschrijving tot de afgeronde klus.",
    steps: [
      {
        index: "01",
        icon: "ship",
        title: "Aanvraag",
        body: "Beschrijf het schip, het systeem en de situatie via het aanvraagformulier. Foto's en gegevens van het typeplaatje versnellen de diagnose.",
      },
      {
        index: "02",
        icon: "ruler",
        title: "Beoordeling",
        body: "U krijgt een persoonlijke reactie. De technische situatie wordt verduidelijkt en er wordt bepaald of een engineer aan boord moet komen of dat onderdelen ingekocht moeten worden.",
      },
      {
        index: "03",
        icon: "check",
        title: "Omvang & offerte",
        body: "Omvang, aanpak en levering worden per aanvraag afgesproken, met aandacht voor transparantie, kostenefficiëntie en flexibiliteit.",
      },
      {
        index: "04",
        icon: "wrench",
        title: "Uitvoering",
        body: "Werkzaamheden aan boord of op locatie, of levering van de onderdelen, met waar van toepassing documentatie zoals testrapporten.",
      },
    ],
  },
  situations: {
    label: "Wanneer contact opnemen",
    title: "Redenen om contact op te nemen.",
    items: [
      {
        icon: "wrench",
        title: "Een storing die u aan boord niet kunt oplossen",
        body: "Technische service, storingzoeken en ondersteuning, aan boord of op locatie.",
        cta: "Service aanvragen",
        href: "/nl/service-aanvragen",
      },
      {
        icon: "drop",
        title: "Een Alpha-smeersysteem dat aandacht nodig heeft",
        body: "Inspectie, onderhoud, revisie, afstelling of optimalisatie op hoofdmotoren.",
        cta: "Service aanvragen",
        href: "/nl/service-aanvragen",
      },
      {
        icon: "gear",
        title: "Een origineel onderdeel om in te kopen en te verzenden",
        body: "Van één OEM-onderdeel tot een compleet pakket voor een schip of project.",
        cta: "Onderdelen aanvragen",
        href: "/nl/onderdelen-aanvragen",
      },
      {
        icon: "chip",
        title: "Een besturingssysteem om aan te passen, in bedrijf te stellen of te testen",
        body: "Automatisering, PLC/HMI-oplossingen, metingen en testrapporten.",
        cta: "Service aanvragen",
        href: "/nl/service-aanvragen",
      },
    ],
  },
  principles: {
    label: "Onze aanpak",
    title: "Vier principes. Geen lege marketingtaal.",
    items: [
      {
        title: "Ervaring",
        body: "Praktisch werk in machinekamers en op locatie, ook bij storingen die niet op een rapport wachten.",
      },
      {
        title: "Onafhankelijkheid",
        body: "Sinds 2012 een onafhankelijk technisch specialist, die rechtstreeks met u samenwerkt.",
      },
      {
        title: "Pragmatisme",
        body: "Geen onnodige lagen. De meest passende vorm van ondersteuning bepalen we samen, per situatie.",
      },
      {
        title: "Precisie",
        body: "Technische duidelijkheid over wat een situatie vraagt en wat nodig is om verder te komen.",
      },
    ],
    image: { src: "/images/approach-precision-inspection", alt: "Engineer met helm en gehoorbescherming onderzoekt bij het licht van een zaklamp pijpflenzen in een schemerige machinekamer.", width: 1200, height: 670, variants: [640, 1200] },
  },
  expertise: {
    label: "EXPERTISE",
    title: "Wat LEUNGE-ECS levert.",
    intro:
      "Van dagelijkse technische service aan boord tot originele onderdelen en complete engineeringprojecten: dit zijn de kerngebieden van LEUNGE-ECS.",
    areas: [
      {
        index: "01",
        kind: "service",
        title: "Technische service & ondersteuning",
        description:
          "Technische service, storingzoeken en onderhoud aan boord van zeegaande schepen. Wanneer doorlopende technische ondersteuning nodig is, kan een service-engineer aan boord meegaan.",
        detail: "Service aan boord · Storingzoeken · Ondersteuning tijdens de reis.",
        blueprint: { src: "/blueprints/technical-service.svg", alt: "Tekening in blauwdrukstijl van een scheepsmotor met vier cilinders in zijaanzicht, met drie gemarkeerde inspectiepunten." },
      },
      {
        index: "02",
        kind: "service",
        title: "Alpha Lubrication Systems",
        description:
          "Inspectie, onderhoud en revisie van Alpha-smeersystemen op hoofdmotoren, inclusief storingzoeken, afstelling, inbedrijfstelling en optimalisatie.",
        detail: "Hoofdmotoren · Inbedrijfstelling · Optimalisatie.",
        blueprint: { src: "/blueprints/alpha-lubrication.svg", alt: "Tekening in blauwdrukstijl van een doorsnede van een cilinderbus met zuigerveren en olie-injectiepunten, gevoed door een smeerunit." },
      },
      {
        index: "03",
        kind: "parts",
        title: "Originele onderdelen",
        description:
          "Levering van originele OEM-onderdelen: inkoop, aanschaf en complete onderdelenpakketten voor schepen en projecten.",
        detail: "OEM-onderdelen · Inkoop & aanschaf · Complete pakketten.",
        blueprint: { src: "/blueprints/spare-parts.svg", alt: "Tekening in blauwdrukstijl van een uiteengetrokken zuiger met ringen, pen, drijfstang, een pakking en sluitringen, elk gemarkeerd met een genummerd label." },
      },
      {
        index: "04",
        kind: "service",
        title: "Automatisering & besturingstechniek",
        description:
          "Automatiseringssystemen, schakelkasten en PLC/HMI-oplossingen, inclusief storingzoeken en aanpassingen.",
        detail: "PLC & HMI · Schakelkasten · Aanpassingen.",
        blueprint: { src: "/blueprints/automation.svg", alt: "Tekening in blauwdrukstijl van de voorkant van een geopende schakelkast met een PLC-rek, bedieningspaneel, relais, een klemmenstrook en een kabelgoot." },
      },
      {
        index: "05",
        kind: "service",
        title: "Engineering & ontwerp",
        description:
          "Werktuigbouwkundige en elektrotechnische engineering, systeemontwerp en aanpassingen, met technische documentatie en tekeningen.",
        detail: "Werktuigbouw · Elektrotechniek · Technische documentatie.",
        blueprint: { src: "/blueprints/engineering.svg", alt: "Technische tekening in blauwdrukstijl van een flens in vooraanzicht en doorsnede, met hartlijnen, een steekcirkel en maatlijnen." },
      },
      {
        index: "06",
        kind: "service",
        title: "Inspectie, testen & inbedrijfstelling",
        description:
          "Elektrische inspecties, testen van apparatuur en systemen, inbedrijfstelling en metingen met bijbehorende testrapporten.",
        detail: "Metingen · Testrapporten · Documentatie.",
        blueprint: { src: "/blueprints/inspection-commissioning.svg", alt: "Tekening in blauwdrukstijl van een testopstelling: een meetscherm met een golfvorm en cursors, meetsnoeren, een checklist met meetpunten en een goedkeuringsstempel." },
      },
    ],
    note: "Deze kerndiensten leveren we wereldwijd, aan boord of op locatie. De exacte omvang spreken we per aanvraag af.",
    cta: "Neem contact op",
  },
  techSpec: {
    label: "TECHNISCHE DIEPGANG",
    title: "Systemen en werkgebieden.",
    intro:
      "Een selectie van de technische systemen en disciplines uit de loopbaan van LEUNGE-ECS.",
    groups: [
      { label: "BESTURINGSSYSTEMEN", items: ["Motormanagementsystemen", "Lokale & centrale besturingssystemen"] },
      { label: "ENGINEERING", items: ["Elektronische besturingsplatforms", "Ontwerp & aanpassingen"] },
      { label: "PRAKTIJKERVARING", items: ["Inbedrijfstelling", "Service", "Storingzoeken"] },
      { label: "INDUSTRIËLE ERVARING", items: ["Gasproductie", "Onderhoud", "Turnarounds"] },
    ],
  },
  about: {
    label: "Over ons",
    title: "Ervaring, opgebouwd in het veld.",
    lead: "Technische ervaring bouw je niet op achter een bureau. Je bouwt haar op in machinekamers, tijdens opstartprocedures, bij storingen die om een directe beslissing vragen en op locaties waar systemen gewoon moeten werken.",
    pathLabel: "Loopbaan",
    path: [
      {
        marker: "1993",
        title: "Opstart, service en storingzoeken",
        body: "Op gasproductie-installaties in de Nederlandse offshoresector.",
      },
      {
        marker: "Field service",
        title: "Superintendent Engineer",
        body: "Gericht op besturingssystemen voor scheepsmotoren, en het overdragen van die kennis als trainer.",
      },
      {
        marker: "Elektronica",
        title: "Superintendent Electronic Engineer",
        body: "Elektronische systemen en technisch toezicht.",
      },
      {
        marker: "2012",
        title: "Zelfstandig als LEUNGE-ECS",
        body: "Werkzaam als zelfstandig technisch superintendent, met drie decennia ervaring als uitgangspunt voor elke technische vraag.",
      },
    ],
    name: "Technisch superintendent",
    role: "Actief sinds 1993 · Zelfstandig sinds 2012",
  },
  finalCta: {
    titleLine1: "Een technische uitdaging?",
    titleLine2: "Laten we praten.",
    body: "Of het nu gaat om technisch toezicht, engineeringexpertise of praktische technische ondersteuning: het begint met een gesprek.",
    label: "Aanvraag",
    options: [
      {
        index: "01",
        title: "Service aanvragen",
        description: "Technische service, storingzoeken en ondersteuning aan boord.",
        href: "/nl/service-aanvragen",
      },
      {
        index: "02",
        title: "Onderdelen aanvragen",
        description: "Originele OEM-onderdelen: van één onderdeel tot een compleet pakket.",
        href: "/nl/onderdelen-aanvragen",
      },
      {
        index: "03",
        title: "Schip buiten gebruik?",
        description: "Markeer uw serviceaanvraag als noodgeval.",
        href: "/nl/service-aanvragen?urgency=emergency",
        tag: "Spoed",
      },
    ],
    responseNote: "U krijgt een persoonlijke reactie, meestal binnen enkele werkdagen.",
    guideLabel: "Weet u niet waar te beginnen? Wij helpen u op weg",
  },
  wizard: {
    label: "Begeleide aanvraag",
    title: "Weet u niet waar te beginnen?",
    intro: "Beantwoord een paar korte vragen en u gaat naar het juiste formulier, zo ver mogelijk al ingevuld. Er wordt niets verzonden voordat u het formulier verstuurt.",
    stepLabel: "Stap {step} van {total}",
    back: "Terug",
    next: "Verder",
    typeQuestion: "Wat hebt u nodig?",
    typeOptions: [
      { value: "service", title: "Technische service", description: "Storingzoeken, onderhoud, inbedrijfstelling of ondersteuning, aan boord of op locatie." },
      { value: "parts", title: "Originele onderdelen", description: "Inkoop, aanschaf en levering van originele OEM-onderdelen." },
    ],
    urgencyQuestion: "Hoe urgent is het?",
    urgencyOptions: [
      { value: "normal", title: "Normaal", description: "Geplande werkzaamheden of een vraag zonder directe gevolgen." },
      { value: "urgent", title: "Urgent", description: "Heeft binnenkort aandacht nodig." },
      { value: "emergency", title: "Noodgeval", description: "Het schip is buiten gebruik." },
    ],
    systemQuestion: "Om welk systeem gaat het?",
    systemOther: "Anders of weet ik niet",
    summaryTitle: "Klaar om verder te gaan",
    summaryLabels: { type: "Behoefte", urgency: "Urgentie", system: "Systeem" },
    summaryNote: "Het formulier opent met deze antwoorden al ingevuld. U kunt ze daar nog aanpassen.",
    continue: "Verder naar het formulier",
  },
  serviceRequest: {
    label: "SERVICEAANVRAAG",
    title: "Technische service aanvragen.",
    intro:
      "Beschrijf de situatie of het systeem kort. U krijgt een persoonlijke reactie, meestal binnen enkele werkdagen.",
    specsNote:
      "Vermeld waar mogelijk: merk & model, serienummer en foto's van het probleem. Dat versnelt de diagnose en de reactietijd.",
    specsLabel: "Specificaties",
    subjectPrefix: "Nieuwe serviceaanvraag [NL] — LEUNGE-ECS website",
    extraFields: [
      { name: "Scheepsnaam", label: "Scheepsnaam", type: "text", required: true },
      { name: "IMO-nummer", label: "IMO-nummer", type: "text", inputMode: "numeric" },
      { name: "Haven / locatie", label: "Haven / locatie", type: "text" },
      { name: "ETA", label: "ETA (aankomstdatum)", type: "date" },
      { name: "Systeem / motortype", key: "system", label: "Systeem / motortype", type: "text", wide: true },
      {
        name: "Urgentie",
        key: "urgency",
        label: "Urgentie",
        type: "select",
        options: ["Normaal", "Urgent", "Noodgeval — schip buiten gebruik"],
        required: true,
        wide: true,
      },
    ],
    form: requestFormLabels(`Foto's of documenten van het systeem of het probleem. ${FILE_TYPES}`),
    directLabel: "Direct contact",
    location: "Nederland",
    scopeLabel: "Beschikbaarheid",
    scope: "Wereldwijde service en levering",
  },
  partsRequest: {
    label: "ONDERDELENAANVRAAG",
    title: "Originele onderdelen aanvragen.",
    intro:
      "Beschrijf welke onderdelen u nodig hebt. U krijgt een persoonlijke reactie, meestal binnen enkele werkdagen.",
    specsNote:
      "Vermeld waar mogelijk: merk & model, onderdeel- of serienummer en foto's van het onderdeel of typeplaatje. Dat versnelt het inkopen en de offerte.",
    specsLabel: "Specificaties",
    subjectPrefix: "Nieuwe onderdelenaanvraag [NL] — LEUNGE-ECS website",
    extraFields: [
      { name: "Merk / type systeem", key: "system", label: "Merk / type systeem", type: "text", required: true, wide: true },
      { name: "Afleveradres / haven", label: "Afleveradres / haven", type: "text" },
      { name: "Gewenste leverdatum", label: "Gewenste leverdatum", type: "date" },
    ],
    form: requestFormLabels(`Foto's van het onderdeel, het typeplaatje of een tekening. ${FILE_TYPES}`),
    directLabel: "Direct contact",
    location: "Nederland",
    scopeLabel: "Beschikbaarheid",
    scope: "Wereldwijde service en levering",
  },
  contactGeneral: {
    label: "CONTACT",
    title: "Begin het gesprek.",
    intro:
      "Geen service- of onderdelenaanvraag? Beschrijf de situatie kort. U krijgt een persoonlijke reactie, meestal binnen enkele werkdagen.",
    specsLabel: "Specificaties",
    subjectPrefix: "Nieuw contactbericht [NL] — LEUNGE-ECS website",
    form: requestFormLabels(`Voeg relevante bestanden toe. ${FILE_TYPES}`),
    directLabel: "Direct contact",
    location: "Nederland",
    scopeLabel: "Beschikbaarheid",
    scope: "Wereldwijde service en levering",
  },
  notFound: {
    label: "Fout 404",
    title: "Deze pagina is uit koers.",
    body: "De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar het begin of neem rechtstreeks contact op.",
    cta: "Terug naar home",
  },
  footer: {
    navigationLabel: "Navigatie",
    expertiseLabel: "Expertise",
    contactLabel: "Contact",
    contactCta: "Of neem contact op",
    availability: "Wereldwijd beschikbaar",
    timeLabel: "Nederland",
    backToTop: "Naar boven",
    tagline:
      "Technische service, originele onderdelen en engineering voor zeegaande schepen — wereldwijd beschikbaar.",
    rightsLine: (year: number) => `© ${year} LEUNGE-ECS B.V. Alle rechten voorbehouden.`,
    location: "Nederland, wereldwijd beschikbaar",
  },
};
