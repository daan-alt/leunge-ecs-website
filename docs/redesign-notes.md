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
