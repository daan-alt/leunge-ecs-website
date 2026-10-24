# Redesign-plan 2: van "netjes" naar "10K-bureau"

Vervolg op `docs/redesign-plan.md` / `docs/redesign-notes.md`. Startpunt: `main` (alles van ronde 1 staat live).

## Harde randvoorwaarden (zelfde als ronde 1)

- **Geen verzonnen feiten.** Geen klantnamen, logo's, cijfers, certificaten, cases, testimonials, havens, tijden. Alleen wat al in `src/content/en.ts` staat. Scenario's ("When to get in touch") zijn uitnodigingen om contact op te nemen, géén beweringen over uitgevoerd werk.
- **Geen nieuwe foto's of video's en geen AI-beelden.** Illustraties zijn zelf getekende SVG's.
- Houd je aan `CLAUDE.md` (statische export, `Link`, copy in `src/content/en.ts` + `types.ts`, tokens in `globals.css`, reveal blijft pure CSS, `prefers-reduced-motion` respecteren, `BASE_PATH` voor `<img src>`).
- Werk op een nieuwe branch `polish` vanaf `main`. Commit per fase. **Niet pushen, niet op `main` werken.**
- Stel geen vragen: kies de verstandigste default en noteer keuzes in `docs/redesign-notes.md` (nieuwe sectie "Ronde 2").

## Fase A: Request console op mobiel opschonen (`FinalCta.tsx`)

Probleem (zie screenshot van de gebruiker, 390 px): nummer links, tekst ingesprongen en smal (3 regels), het "Urgent"-label stapelt tussen kop en tekst, de pijl zweeft rechts, en de kaartlijnen lopen dwars door de rijen. Het oogt rommelig.

- Mobiel (`< lg`): per rij een rustige gestapelde layout: bovenregel = mono-nummer links, pijl rechts; daaronder kop (volle breedte), dan beschrijving. Geen kolom-indent. Minimaal 64 px tikhoogte, volle rij klikbaar.
- Urgent-rij: visueel anders (oranje rand/accent-lijn links of subtiele oranje achtergrond), label staat op de bovenregel naast het nummer, niet tussen kop en tekst.
- Console-achtergrond op mobiel bijna dicht (`bg-navy-deep/90`, geen blur nodig), zodat raster/contourlijnen er niet doorheen lopen; de kaart blijft zichtbaar boven en onder de console.
- `ChartBackdrop` op mobiel: minder lijnen (bv. alleen elke 300 het raster), route en kompas in het zichtbare gebied boven de console.
- Desktop-layout blijft gelijk (die is goed); controleer alleen dat niets verschuift.

## Fase B: Technical depth als compact datasheet (`TechnicalDepth.tsx`)

Het conceptueel ontwerp staat al in het werkbestand (ongecommit, mogelijk onbevestigd): vier omkaderde blokken in een 2x2 grid (1 kolom mobiel), mono-label + teller per groep, items genummerd 01–10 op een stippellijn, kleine hover-markering, regel "10 / TECHNICAL DEPTH" onderaan.

- Controleer/finaliseer: type-check, lint, screenshots 1440 en 390. Compacte sectiehoogte (`py-20 lg:py-28`), geen grote koppen voor de items.
- Inhoud blijft exact zoals in `en.ts` (geen nieuwe termen).

## Fase C: Blauwdruk-illustraties in de dienstenlijst

Doel: AI-foto's vervangen waar ze het meest opvallen (de `ExpertiseList`), zonder nieuw beeldmateriaal.

- Zes zelf getekende SVG-bestanden in `public/blueprints/` (extern bestand + `<img>` met `BASE_PATH`, niet inline, wegens RSC-payload). Eén per dienst, vaste donkerblauwe achtergrond, lijnen wit (60–80%), accenten `#f5921e`, dunne maatlijnen (streep), kleine generieke labels (A, B, 01, 02; geen echte onderdeelnummers of merken):
  1. Technical service & support: motorblok, zijaanzicht, met aanwijslijnen.
  2. Alpha Lubrication Systems: cilinderbus in doorsnede met injectiepunten en oliestroom.
  3. Genuine Spare Parts: exploded view van zuiger + drijfstang + ringen + pakking.
  4. Automation & control: schakelkast met PLC-modules, klemmenstrook, HMI-scherm.
  5. Engineering & design: gedimensioneerde tekening (flens/as) met titelblok (alleen labels, geen verzonnen data).
  6. Inspection, testing & commissioning: meetopstelling/testrapport-lijst met meetpunten.
- Eén consistente stijl (lijndikte, kleur, schaal, ruimte). Check leesbaarheid op 390 px en 1440 px.
- Types: `ExpertiseArea.image` vervangen door `blueprint: { src, alt }` (alt beschrijft de tekening). `ExpertiseList` toont de tekening in dezelfde sticky `TechnicalFrame` (met `frame-tone` desactiveren of lichter voor tekeningen) en inline op mobiel.
- De foto's in Intro, Highlight en Principles blijven. De ongebruikte `expertise-*` WebP's mogen blijven staan (noteer dat in de notes).

## Fase D: 10K-details

1. **Tekstband (marquee)** tussen Highlight en Process: de zes dienstnamen (uit `expertise.areas`) als rustige, doorlopende CSS-animatie, in outline-/mono-stijl, `aria-hidden` dubbele rij, pauze bij hover, uit bij reduced motion. Geen JS.
2. **"When to get in touch"-sectie** na Process: 4 scenario's, elk met link naar het juiste formulier. Voorbeelden van teksten (geen beweringen over het verleden): "A fault you can't solve on board", "An Alpha lubrication system that needs inspection, adjustment or overhaul", "A genuine part to source and ship", "A control system to modify, commission or test". Compact (rijen met hairlines, geen kaarten). Als de homepage daardoor te lang wordt, mag de sectie kort en klein blijven; noteer de keuze.
3. **Hero-parallax op de muis:** het ControlPanel beweegt ±12 px mee met de aanwijzer (client wrapper, `requestAnimationFrame`, alleen `(pointer: fine)` en niet bij reduced motion).
4. **Zachte smooth scroll** (pakket `lenis`): alleen als het robuust werkt met `/#anchor`-links, scroll-driven CSS-animaties en de formulierpagina's; anders weglaten en noteren. Uit bij reduced motion.
5. **Actieve navigatie:** actieve pagina/sectie in de header markeren (mono, oranje streep), via `usePathname`.
6. **Kolomgeleiders:** subtiele verticale 12-koloms lijnen in de donkere secties (Hero, Principles, FinalCta) als `.col-guides` (CSS-only, `pointer-events: none`).
7. **Favicon en app-icoon:** `src/app/icon.tsx` is nu een generiek vierkantje. Vervang door een eenvoudig merkteken (oranje druppel/tandwiel op navy) en voeg `apple-icon.tsx` (180 px) toe. Houd kleuren in sync met `globals.css`.
8. **A11y-details:** "Skip to content"-link, zichtbare `:focus-visible` overal, contrastcheck (WCAG AA) op de nieuwe donkere secties.

## Fase E: Verificatie en afronding

- `npx tsc --noEmit`, `npm run lint`, `npm run build` moeten slagen.
- Screenshots 1440x900 en 390x844 van alle pagina's (`/`, `/about`, `/service-request`, `/parts-request`, `/contact`, een 404); geen horizontale overflow, geen console-errors. Schermafdruktips: `npm i puppeteer-core` in een tijdelijke map buiten het project, Chrome op `C:/Program Files/Google/Chrome/Application/chrome.exe`, `.reveal` uitzetten via `addStyleTag` voor full-page shots, in Git Bash `MSYS_NO_PATHCONV=1` gebruiken, na laden ±2 s wachten voor entree-animaties.
- Test: de Urgent-deeplink (`/service-request?urgency=emergency`) selecteert nog "Emergency"; het mobiele menu opent; `prefers-reduced-motion` bevriest de nieuwe animaties.
- Controleer dat geen nieuwe feiten/cijfers in `en.ts` zijn gekomen (diff nalopen).
- Werk `CLAUDE.md` bij (nieuwe componenten, `public/blueprints/`, tekstband) en `docs/redesign-notes.md` ("Ronde 2": keuzes, wat niet is gedaan, en wat de klant nog moet aanleveren).
- Eindrapport in het Nederlands, kort.
