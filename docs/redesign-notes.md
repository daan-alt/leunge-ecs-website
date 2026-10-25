# Redesign notes (branch `redesign`)

Uitgevoerd volgens `docs/redesign-plan.md`, zonder input van de klant. Geen verzonnen feiten: alle tekst en "cijfers" komen uit bestaande content (sinds 1993, onafhankelijk sinds 2012, wereldwijd, de zes diensten, de technische systemen).

## Gemaakte keuzes

- **Fonts**: Archivo (display, iets uitgerekt via width-as, 112%), Geist (body), Geist Mono (labels/data). Inter is vervangen: dat is de meest herkenbare AI-standaard.
- **Palet**: navy + oranje blijven (merk/logo). Lichte vlakken zijn neutraal-koel (`paper` #f7f8fa, `mist` #e8edf3) i.p.v. het cyaan-achtige `#ebf9ff`. Nieuw donkerste tint `navy-ink` #08111f.
- **Header**: donker (navy-ink) met het lichte logo, compact bij scrollen, leesvoortgangslijn (CSS scroll-timeline). Mobiel: fullscreen menu + vaste CTA-balk onderin (niet op formulierpagina's).
- **Hero**: nieuwe kop ("Marine technical service, wherever your vessel calls."), bedrijfsnaam naar de footer/eyebrow, ControlPanel veel zichtbaarder (opacities verhoogd, niet meer afgesneden), stat-strip met alleen bestaande feiten, gespreide entree-animatie.
- **Secties**: BrandStatement, ServicesIntro, Credibility en Approach zijn vervangen door Intro (statement + 30+), Process (nieuw, generiek) en Principles (de vier bestaande principes). Diensten zijn een editorial lijst met sticky foto in plaats van 6 gelijke kaarten. Technical depth is een datasheet-lijst.
- **Foto's**: bestaande AI-foto's blijven (geen nieuwe beelden), maar krijgen overal dezelfde behandeling (`TechnicalFrame`: marineblauwe multiply-tint, korrel, hoekmarkeringen, lichte desaturatie) en op de homepage een zachte parallax. In de Principles-sectie staat een foto bewust bijna onzichtbaar als textuur.
- **Over-pagina**: de "Portrait to follow"-placeholder is vervangen door een loopbaan-tijdlijn die alleen de bestaande alinea's gebruikt.
- **Formulieren**: donkere PageHero + zijbalk met specs-noot; formulier in een kaart. `noValidate` is verwijderd, zodat `required` nu echt afgedwongen wordt (browser-validatie) en ongeldige velden rood worden (`user-invalid`). Het label "System / engine type (e.g. …)" is ingekort omdat het op mobiel over het volgende veld liep. Verzendlogica (Web3Forms/Supabase) is niet aangeraakt.
- **Techniek**: eigen 404, OG-image per pagina (`src/lib/og.tsx`), per-pagina canonical (stond op alle pagina's op `/`), `og:locale` van `nl_NL` naar `en_GB`, `OfferCatalog` in de JSON-LD (alleen bestaande diensten), hardcoded footer/UI-teksten naar `en.ts`.
- **Niet gedaan**: View Transitions tussen pagina's (niet robuust met statische export zonder JS-observer); `foundingDate` in JSON-LD (jaar van oprichting B.V. onbekend).
- De commits van fase 2, 3 en 4 zijn samengevoegd, omdat de content-types in alle drie tegelijk wijzigden.

## Nog nodig van de klant (grootste kwaliteitswinst)

1. **Echte foto's** van machinekamer, Alpha-systemen, onderdelen en werkzaamheden (vervangen alle AI-beelden).
2. **Klantlogo's / referenties** (indien toegestaan) en 2-3 korte cases (probleem, aanpak, resultaat).
3. **Erkenningen/certificaten** met details (bijv. Alpha service-partner), alleen als ze bestaan.
4. **Concrete cijfers** (schepen, havens, reactietijd) alleen als ze kloppen.
5. Eventueel een **portret** voor de Over-pagina en een **zakelijk e-mailadres/telefoon** voor een zichtbaar direct contact.
6. Daarna kan de hero-video uit `docs/hero-video-concept-*.md` gemaakt worden.

# Ronde 2 (branch `polish`)

Uitgevoerd volgens `docs/redesign-plan-2.md`. Opnieuw geen verzonnen feiten, geen nieuwe foto's of AI-beelden.

## Gemaakte keuzes

- **A, request console op mobiel:** rijen zijn gestapeld (nummer + pijl bovenin, daaronder kop en tekst, volle breedte) via `.console-row`; de urgente rij heeft een oranje linkerlijn en lichte oranje achtergrond met het label naast het nummer; de achtergrond achter de rijen is op mobiel vrijwel dicht en de kaart heeft daar minder lijnen. Desktop is ongewijzigd.
- **B, datasheet:** `TechnicalDepth` is nu vier omkaderde blokken (2x2, mobiel 1 kolom) met genummerde items 01-10 op een stippellijn. Inhoud is exact die van `en.ts`. De losse regel "10 / TECHNICAL DEPTH" is weggelaten (zei niets).
- **C, blauwdrukken:** zes zelf getekende SVG's in `public/blueprints/` vervangen de AI-foto's in de dienstenlijst (`ExpertiseArea.image` is nu `blueprint`). Alleen generieke labels (A/B/C, 1-6, L/H/D/t); geen merken, onderdeelnummers of cijfers. Het paneel is vierkant (desktop én mobiel). De foto's in Intro, Highlight en Principles blijven. De nu ongebruikte `public/images/expertise-*.webp` zijn niet verwijderd.
- **D, details:** doorlopende tekstband met de zes dienstnamen (CSS, pauze bij hover, uit bij reduced motion); sectie "When to get in touch" met vier uitnodigingen die doorlinken naar het juiste formulier (alleen formuleringen die al in de diensten staan); muis-parallax op de hero-achtergrond (alleen fijne aanwijzer, niet bij reduced motion); smooth scroll met `lenis` (alleen muis, niet bij reduced motion; werkt met `/#anchor`-links, de scroll-gedreven reveals en de formulierpagina's, getest met een headless browser); actieve pagina in het menu (`aria-current`); kolomgeleiders in Hero, Principles en FinalCta; "Skip to content"-link; nieuw favicon en apple-icon (druppel in getand tandwiel) via `lib/brand-mark.tsx`.
- **Contrast:** kleine, gedempte teksten (`text-mist/35-55`, `text-ink/60-70`) zijn opgehoogd naar `mist/60` en `ink/85` (richting WCAG AA). Decoratieve nummers zijn bewust lichter gelaten.
- **Een bug onderweg:** de globale `* { border-color }` stond buiten een CSS-laag en overschreef `border-white/10`; nu in `@layer base`.

## Niet gedaan / beperkingen

- **Lighthouse** is niet gedraaid (geen betrouwbare headless-run in deze omgeving); contrast en toetsenbord (skip-link, focus) zijn handmatig gecontroleerd.
- De blauwdrukken zijn bewust schematisch; echte foto's of tekeningen van de klant blijven beter.
- Het mobiele "tekstband" en de "When to get in touch"-lijst zijn nieuw en niet door de klant beoordeeld.

# Ronde 3 (branch `round3`)

Uitgevoerd volgens `docs/redesign-plan-3.md`. Geen verzonnen feiten, geen nieuwe foto's of AI-beelden. Terugdraaien: zie `docs/rollback-round3.md` (tag `pre-round3`, vlaggen in `src/lib/features.ts`, merge-commits per onderdeel).

## Gemaakte keuzes

- **Techniek (`r3-tech`)** — Lighthouse (headless, gebouwde export): **desktop 99-100 / 97-100 / 100 / 100**, **mobiel (gesimuleerd trage 4G, 4x CPU) performance 83-90, accessibility 100, best practices 100, SEO 100**. Gedaan: definitielijst-markup in de hero, contrast van kleine tekst (nieuwe token `accent-ink`, `ink/85`), kopvolgorde in de footer, `Link prefetch={false}` (Next 16 vraagt in een statische export prefetch-bestanden onder een pad dat niet bestaat: elke pagina gaf 404-consolefouten), korrel als klein PNG-tegeltje in plaats van een SVG-filter (die maakte de LCP zeer laat), `content-visibility: auto` onder de eerste sectie, animaties van het bedieningspaneel starten 1,8 s na laden, `lenis` wordt pas geladen als nodig, entree-animatie van de hero alleen met `transform`. Nieuw: JSON-LD graph (WebSite + ProfessionalService + BreadcrumbList), `manifest.webmanifest`, `theme-color`, stabiele sitemap-datum (`LAST_UPDATED` in `utils.ts`), cookievrije Plausible (alleen aan met `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`; de klant moet een account aanmaken en de repository-variabele `PLAUSIBLE_DOMAIN` zetten). **Performance op mobiel blijft onder 95**: de LCP is (gesimuleerd) 3-3,5 s door hydration + de rijke hero; echte apparaten zitten daar doorgaans ruim onder. Verder verbeteren kan met minder animaties in de hero of een kleiner `ControlPanel`.
- **Merksysteem (`r3-brand`)** — `docs/brand-guide.md`, motion-tokens (`--ease-precision`, `--duration-*`), 8 lijn-iconen (`ui/Icon.tsx`) in Process en Situations. De titel van Situations was "Reasons to pick up the phone" (er staat geen telefoonnummer op de site); nu "Reasons to reach out".
- **Scrollytelling (`r3-scrolly`)** — sectie "Anatomy of a part" na Highlight: de zuigerassemblage trekt uit elkaar tijdens het scrollen (pure CSS, `animation-timeline`), balloons verschijnen een voor een en de lijst met onderdelen schuift mee; zonder ondersteuning of met reduced motion zie je de eindtoestand. Mobiel: kortere track, de lijst staat onder de tekening. De toelichtingen zijn algemene technische beschrijvingen van de onderdelen (zuigerkroon, veren, pen, drijfstang, pakking, ringen), geen beweringen over het bedrijf. Deze sectie staat buiten `content-visibility` (de hoogte klopte anders niet tijdens scrollen).
- **Wizard (`r3-wizard`)** — `/request` (en `/nl/aanvraag`): type, urgentie (alleen service), systeem, samenvatting, dan een gewone link naar het juiste formulier met `?urgency=` en `?system=` (geen persoonsgegevens in de URL). `RequestForm` vult die velden voor, in elke taal (via `data-key`). Ingang: een regel onder de aanvraagknoppen. De directe formulierlinks blijven werken.
- **Nederlands (`r3-nl`)** — Engels blijft op de bestaande URL's; Nederlands onder `/nl`, `/nl/over-ons`, `/nl/service-aanvragen`, `/nl/onderdelen-aanvragen`, `/nl/contact`, `/nl/aanvraag`. Twee root-layouts via route groups (`(en)` en `nl`) zodat `<html lang>` klopt in de HTML-bron; daarvoor is `experimental.globalNotFound` + `app/global-not-found.tsx` nodig voor de 404. `getContent(locale)`, `content/nl.ts`, `routes` in de content, taalwissel (header, mobiel menu, footer), hreflang + canonical per pagina, sitemap met beide talen. Het e-mailonderwerp van Nederlandse aanvragen bevat `[NL]`. OG-afbeeldingen voor `/nl` zijn de Engelse standaard.
- **Vlaggen** (`src/lib/features.ts`) en uit-stand-test: zie `docs/rollback-round3.md`.

## Nog nodig / aandachtspunten

1. **De Nederlandse vertaling moet door de klant worden nagekeken** (vaktermen, toon, "u"-vorm). Zet het eventueel met `dutch: false` uit tot dat gebeurd is.
2. Analytics: account bij Plausible (of vergelijkbaar) en repository-variabele `PLAUSIBLE_DOMAIN`.
3. Mobiel performance (zie boven) en de ongebruikte `public/images/expertise-*.webp` (nog niet verwijderd).
4. De decoratieve technische labels in het bedieningspaneel van de hero zijn Engels (bewust, het is een schema).
