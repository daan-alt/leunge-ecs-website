# Plan ronde 3: van "10K" naar "20K"

Vervolg op `docs/redesign-plan-2.md` en `docs/redesign-notes.md`. Startpunt: `main` (alles van ronde 1 en 2 staat live).
Vijf onderdelen: (1) scrollytelling met de blauwdruk, (2) aanvraag-wizard, (3) Nederlandse versie, (4) eigen merksysteem, (5) techniek op topniveau.

## Harde randvoorwaarden

- **Geen verzonnen feiten.** Geen klantnamen, logo's, cijfers, certificaten, cases, havens, tijden. Alleen wat in `src/content/en.ts` staat. Technische termen in de scrollytelling zijn algemeen vakjargon (zuigerkroon, zuigerveren, zuigerpen, drijfstang, lagerschaal), geen beweringen over het bedrijf.
- **Geen nieuwe foto's, video's of AI-beelden.** Alles wat getekend is, is zelf getekend (SVG).
- Houd je aan `CLAUDE.md`: statische export, `Link`, copy in content-bestanden + `types.ts`, tokens in `globals.css`, reveal blijft pure CSS, `prefers-reduced-motion` respecteren, `BASE_PATH` voor `<img src>`.
- **Geen persoonsgegevens in URL's** (de wizard zet alleen type, urgentie en systeem in de query, nooit namen of e-mail).
- **Niet pushen, niet op `main` werken.** Stel geen vragen: kies de verstandigste default en noteer keuzes in `docs/redesign-notes.md` (sectie "Ronde 3").
- Geen nieuwe npm-dependencies, tenzij echt nodig (Lighthouse draai je met `npx` zonder het toe te voegen).

## Terugdraaien moet eenvoudig zijn (belangrijkste eis)

1. **Beginpunt vastleggen:** maak lokaal de tag `pre-round3` op de huidige `main` (niet pushen).
2. **Integratiebranch `round3`** vanaf `main`. Elk onderdeel krijgt een eigen featurebranch (`r3-tech`, `r3-brand`, `r3-scrolly`, `r3-wizard`, `r3-nl`), gemaakt vanaf de actuele `round3`, en wordt na verificatie met `git merge --no-ff` in `round3` gezet. Zo is elk onderdeel later met één commando terug te draaien: `git revert -m 1 <merge-commit>`.
3. **Feature flags:** `src/lib/features.ts` met `scrolly`, `wizard`, `dutch` (booleans, standaard `true`) en `analytics` (alleen aan als de env-variabele gezet is). Staat een flag uit, dan verdwijnt het onderdeel volledig uit de site (sectie niet gerenderd, links verborgen; `/nl` en `/request` geven een 404). Eén regel wijzigen is dus genoeg om iets uit te zetten zonder code te verwijderen.
4. **Test uit-stand:** zet aan het eind alle flags op `false`, draai `npm run build` en controleer dat de site er weer uitziet als ronde 2 (geen scrollytelling, geen wizard, geen taalwissel). Zet de flags daarna terug op `true`.
5. **Schrijf `docs/rollback-round3.md`:** de tag, de merge-commits (met hash), per onderdeel het `git revert -m 1 ...`-commando, de flag-schakelaars, en hoe je een live fout herstelt (nooit force-pushen: maak een revert-commit op `main`, de deploy-workflow zet die automatisch live).

## Volgorde

`r3-tech` → `r3-brand` → `r3-scrolly` → `r3-wizard` → `r3-nl` (Nederlands als laatste, want dat raakt alle componenten en zo blijven de andere onderdelen los terug te draaien).

## 1. r3-tech: techniek op topniveau (punt 5)

- **Lighthouse:** draai `npx --yes lighthouse` tegen de gebouwde site (`npm run build`, dan `npx serve out` in de achtergrond) voor `/` en `/service-request`, mobiel en desktop. Doel: Performance, Accessibility, Best Practices en SEO elk ≥ 95. Los gevonden problemen op (afbeeldingsafmetingen, LCP, CLS, ongebruikte JS, fonts). Lukt Lighthouse niet in deze omgeving, noteer dat en doe minimaal een handmatige controle van LCP/CLS/contrast. Bewaar de scores in de notes.
- **Privacyvriendelijke analytics:** component `Analytics` die het Plausible-script alleen laadt als `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` gezet is (zonder cookies, dus geen banner). Standaard inactief; noteer in de notes dat de klant een account moet aanmaken en het secret in de workflow moet zetten.
- **Gestructureerde data:** breid de JSON-LD uit (`Organization` + `WebSite`; `BreadcrumbList` op binnenpagina's; bestaande `OfferCatalog` houden). Alleen bestaande feiten.
- **SEO/PWA-basis:** `manifest.webmanifest` (naam, kleuren, icoon uit `brand-mark`), `theme-color` meta, stabiele `lastModified` in `sitemap.ts`, controle van canonicals en robots.
- Commit per afgeronde stap; merge `--no-ff` naar `round3`.

## 2. r3-brand: eigen merksysteem (punt 4)

- **`docs/brand-guide.md`:** kleuren (tokens), typografie (schaal en gebruik), spacing/raster, illustratiestijl (blauwdruk: lijndikte, kleuren, labels), motion-regels, toon van de tekst, do's en don'ts. Gebaseerd op wat er al staat, niet nieuw bedacht.
- **Motion-tokens** in `@theme` (`--ease-precision`, `--duration-fast/base/slow`) en gebruik ze in `globals.css` in plaats van losse waarden. Gedrag blijft gelijk.
- **Icon-set:** `src/components/ui/Icon.tsx` met 8 kleine, consistente lijn-icoontjes (bijv. moersleutel, druppel, tandwiel, chip/PLC, liniaal, vinkje, schip-romp, pijl), alle met dezelfde lijndikte; inline paden zijn klein. Gebruik ze subtiel in Process (naast het nummer) en Situations. Geen nieuwe feiten, geen emoji.
- **Staten en details:** controleer hover/focus/disabled/foutstaten van knoppen en formulieren, de 404 en OG-afbeeldingen op één lijn met het systeem; herstel afwijkingen.
- Commit per stap; merge `--no-ff`.

## 3. r3-scrolly: scrollytelling met de blauwdruk (punt 1)

- **Nieuwe sectie "Anatomy"** na `Highlight` (onderdelen), achter `features.scrolly`. Tall wrapper (ca. 300vh) met een `sticky` podium; **pure CSS** scroll-gedreven animatie (`animation-timeline: scroll()` / `view()`), geen JS-observer.
- **Inhoud:** de zuiger-exploded-view (zelfde tekenstijl als `public/blueprints/spare-parts.svg`) bouwt zich op: lijnen worden getekend (`stroke-dashoffset`), onderdelen schuiven uit elkaar langs de hartlijn, en numbered balloons verschijnen één voor één, met een korte tekst per onderdeel (zuigerkroon, zuigerveren, zuigerpen, drijfstang, lagerschaal; algemeen vakjargon, één zin per onderdeel in `en.ts`).
- Als inline SVG in een **client component** (niet in een server component, wegens RSC-payload); houd het klein.
- **Fallback:** browsers zonder `animation-timeline` en `prefers-reduced-motion` tonen de eindtoestand (volledig uit elkaar getekend, alle balloons zichtbaar) zonder animatie. Content is nooit verborgen (zelfde principe als `.reveal`).
- **Mobiel:** zelfde idee, kortere wrapper (ca. 220vh), tekst onder de tekening.
- Controleer: geen layout shift, geen horizontale overflow, leesbaar op 390 px, toetsenbord en screenreader (`aria-label` op de tekening, de lijst met onderdelen als echte `<ol>` voor assistieve technologie).
- Commit per stap; merge `--no-ff`.

## 4. r3-wizard: aanvraag-wizard (punt 2)

- **Nieuwe route `/request`** (client component `RequestWizard`), achter `features.wizard`. Drie stappen met voortgangsbalk en toetsenbordbediening:
  1. Wat heb je nodig? **Service** of **Parts**.
  2. (Alleen service) **Urgentie:** Normal / Urgent / Emergency (de bestaande opties uit `serviceRequest.extraFields`).
  3. **Systeem:** keuzelijst afgeleid van de bestaande diensten (Alpha Lubrication Systems, Automation & control, Engineering, Inspection/commissioning, Anders). Bij Parts een korte tekst "Which system is it for?" met dezelfde lijst.
  Daarna een samenvatting en de knop "Continue to the form".
- **Doorgeven:** navigeer naar `/service-request?urgency=...&system=...` of `/parts-request?system=...`. Breid `RequestForm` uit (naast de bestaande `urgency`-prefill) zodat `system` het veld "System / engine make & type" voorinvult. **Geen persoonsgegevens in de URL.**
- **Ingangen:** de bestaande drie console-rijen blijven direct naar de formulieren linken; voeg onder de console een extra regel toe "Not sure where to start? Let us guide you" (tekst in `en.ts`) die naar `/request` gaat, en zet `/request` in de sitemap. Header en footer blijven ongewijzigd.
- Statische export: geen server nodig; werkt zonder JS-fallback niet nodig, maar de directe formulierlinks blijven altijd werken.
- Test: de doorverwijzing vult urgentie en systeem voor in; terugknop werkt; `prefers-reduced-motion`; focusbeheer per stap.
- Commit per stap; merge `--no-ff`.

## 5. r3-nl: Nederlandse versie (punt 3)

Doe dit als laatste; het raakt veel bestanden.

- **URL's:** Engels blijft op `/`, `/about`, `/service-request`, `/parts-request`, `/contact` (ongewijzigd). Nederlands komt onder `/nl`, `/nl/over-ons`, `/nl/service-aanvragen`, `/nl/onderdelen-aanvragen`, `/nl/contact` (en `/nl/aanvraag` voor de wizard). Alle `/nl`-pagina's geven 404 als `features.dutch` uit staat.
- **Content:** `src/content/nl.ts` (typed als `SiteContent`), een volledige, natuurlijke vertaling. Houd vaktermen correct (smeersystemen, reserveonderdelen/OEM-onderdelen, inbedrijfstelling, technisch superintendent). `content/index.ts` levert `getContent(locale)`. Zet bovenaan `nl.ts` een opmerking dat de vertaling door de klant nagekeken moet worden en noteer dat in de notes.
- **Componenten:** laat alle secties, formulieren en layout-componenten de content via een `locale`-prop of `content`-prop krijgen (standaard `en`, zodat bestaande aanroepen blijven werken). Voeg `lib/locale.ts` toe (types, padkaart tussen EN en NL).
- **`<html lang>`:** probeer eerst twee root-layouts via route groups (`(en)` en `nl`) en controleer dat `npm run build` slaagt en de 404 nog werkt. Lukt dat niet schoon, val dan terug op één root-layout met een klein client component dat `document.documentElement.lang` zet, en noteer het nadeel (HTML-bron zegt `en` op NL-pagina's).
- **SEO:** `hreflang`-alternates tussen EN en NL per pagina (via `metadata.alternates.languages`), `og:locale` per taal, NL-pagina's in `sitemap.ts`, canonical per taal. OG-afbeeldingen mogen Engels blijven; noteer dat.
- **Taalwissel:** kleine "EN | NL"-schakelaar in de header (desktop en mobiel menu) en in de footer, die naar de equivalente pagina in de andere taal gaat (alleen zichtbaar als `features.dutch`).
- **Formulieren:** labels, foutmeldingen en succesmeldingen in het Nederlands; de e-mailonderwerpregel blijft herkenbaar (voeg `[NL]` toe); upload-limieten onveranderd.
- Commit per stap; merge `--no-ff`.

## Verificatie en afronding

- `npx tsc --noEmit`, `npm run lint`, `npm run build` slagen.
- Screenshots 1440x900 en 390x844 van alle pagina's, in beide talen (`/`, `/about`, `/service-request`, `/parts-request`, `/contact`, `/request`, `/nl`, `/nl/over-ons`, `/nl/service-aanvragen`, `/nl/onderdelen-aanvragen`, `/nl/contact`, `/nl/aanvraag`, een 404). Tips: `npm i puppeteer-core` in een tijdelijke map buiten het project, Chrome op `C:/Program Files/Google/Chrome/Application/chrome.exe`, in Git Bash `MSYS_NO_PATHCONV=1`, `.reveal` uitzetten voor full-page shots via `addStyleTag`, na laden ±2 s wachten.
- Controleer: geen horizontale overflow, geen console-errors, `prefers-reduced-motion` bevriest de nieuwe animaties, de urgentie-deeplink werkt nog, het mobiele menu werkt, de wizard vult het formulier voor.
- **Uit-stand-test** (zie "Terugdraaien", punt 4) en de rollback-documentatie.
- Diff nalopen: geen nieuwe feiten of cijfers in `en.ts` of `nl.ts`.
- Werk `CLAUDE.md` bij (nieuwe componenten, features-flags, locale-structuur, wizard, scrollytelling) en `docs/redesign-notes.md` ("Ronde 3": keuzes, Lighthouse-scores, wat niet is gedaan, wat de klant moet nakijken/aanleveren).
- Zet de `main`-branch niet vooruit; eindig op `round3`. Eindrapport in het Nederlands, kort, met de commit-hashes van de merge-commits.
