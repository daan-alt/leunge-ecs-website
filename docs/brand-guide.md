# Brand- en stijlgids LEUNGE-ECS website

Beschrijft wat er al staat (geen nieuwe huisstijl). De bron van waarheid blijft de code: tokens in `src/app/globals.css`, copy in `src/content/`, componenten in `src/components/`.

## 1. Karakter

Technisch, rustig, precies. Een ingenieursbureau, geen reclamebureau. Het ontwerp "laat zien" in plaats van te beloven: tekeningen, nummers, schema's, specificaties. Donker (machinekamer, zeekaart) wisselt af met licht (rapport, datasheet).

## 2. Kleur

| Token | Waarde | Gebruik |
| --- | --- | --- |
| `navy-ink` | `#08111f` | donkerste vlak (header, hero, footer, mobiele CTA-balk) |
| `navy-deep` | `#0d1b30` | donkere secties, blauwdruk-achtergrond |
| `navy` | `#13294b` | merk-navy, knoppen op licht, koppen-accenten |
| `paper` / `white` | `#f7f8fa` / `#ffffff` | lichte secties (afwisselend) |
| `mist` | `#e8edf3` | licht tekstkleur op donker, zachte hover op licht |
| `ink` / `ink-dark` | `#4b5363` / `#0f1828` | lopende tekst / koppen op licht |
| `accent-bright` | `#f5921e` | het oranje van het logo: knoppen, eyebrows en accenten **op donker** |
| `accent-ink` | `#965708` | oranje voor **kleine tekst op licht** (contrast ≥ 4,5:1) |
| `accent` | `#c4750f` | alleen vlakken en randen, nooit kleine tekst |
| `line` | `#d6dde6` | haarlijnen op licht; op donker `white/10`–`white/20` |

Regels: één accentkleur (oranje). Nooit paars/blauw-gradient. Kleine tekst op donker minimaal `mist/60`; op licht minimaal `ink/85`.

## 3. Typografie

- **Display:** Archivo (breedte-as, `.font-display`, 700, uitgerekt tot 112%), strakke letterafstand.
- **Body:** Geist. **Labels en data:** Geist Mono (`.t-mono`), kleine kapitalen met ruime letterafstand.
- **Schaal** (fluïde, in `globals.css`): `.t-display` (hero, 2,5–5,25 rem), `.t-h2` (sectiekop, 2,1–4,25 rem), `.t-h3` (rijtitel, 1,35–1,85 rem), `.t-lead` (inleiding, 1,05–1,3 rem), `.t-eyebrow` (label met streepje).
- Eén H1 per pagina; koppen in volgorde (geen niveaus overslaan).

## 4. Ruimte en raster

- Container `.wrap` (max 1400 px, 24 px marge mobiel, 40 px vanaf `lg`), 12 kolommen. Sectie-ritme `.section-y` (80–160 px).
- Afwisseling: donker (hero) → licht → licht → donker → band → licht → licht → donker → licht → donker. Nooit twee zware donkere blokken direct na elkaar zonder reden.
- Subtiele kolomgeleiders (`.col-guides`) op donkere secties, nooit op lichte.

## 5. Componenten

- **Knoppen:** primair = oranje vlak met navy-ink tekst (op donker); secundair = witte omlijning; op licht navy vlak met oranje hover. Hoofdletters, mono-achtige letterafstand. Hoogte ≥ 44 px (mobiel ≥ 64 px voor rijen).
- **Link-lijn** (`.link-line`): tekst met onderstreping en pijl die opschuift.
- **Rijen** (dienstenlijst, situaties, console): haarlijn bovenaan, nummer of icoon links, titel, beschrijving, actie rechts; hele rij klikbaar; hover vult of kleurt de rij.
- **Foto's:** altijd in `TechnicalFrame` (marine-tint, korrel, hoekmarkeringen). Nooit losse "stockblokken".
- **Formulieren:** onderstreepte velden met zwevend label, fout = rode lijn (`user-invalid`), `role="alert"` bij fouten, `role="status"` bij succes.
- **Staten:** hover (kleur/pijl), `:focus-visible` (oranje outline, 2 px), disabled (60% opaciteit, geen hover-effect).

## 6. Illustratiestijl (blauwdruk)

Bestanden in `public/blueprints/`. Achtergrond `#0d1b30` met raster van 20 px (7%) en 100 px (15%). Lijnen `#cfe0f5`, 1,6 px, ronde uiteinden; maatlijnen `#9fb4d0`, 1 px, met pijlpunten; accenten en aanwijslijnen `#f5921e`. Labels uitsluitend generiek (A/B/C, 1–6, L/H/D/t), nooit merken, onderdeelnummers of cijfers. Titelblok rechtsonder (`FIG. 0N · SCALE N.T.S.` en de naam van het onderwerp). Ruimte rondom voor leesbaarheid; één onderwerp per tekening.

## 7. Iconen

`src/components/ui/Icon.tsx`: 8 iconen (moersleutel, druppel, tandwiel, chip, liniaal, vinkje, schip, pijl) op een 24 px-raster, lijndikte 1,5, ronde uiteinden, geen vulling. Kleur via `currentColor` (op licht `accent-ink`). Nooit emoji of kleurrijke iconen.

## 8. Beweging

- Eén curve en drie duur-tokens in `@theme`: `--ease-precision`, `--duration-fast` (0,2 s), `--duration-base` (0,3 s), `--duration-slow` (0,5 s).
- Alleen `transform` en `opacity` (en `stroke-dashoffset` in SVG). Geen layout-animaties.
- Scroll-effecten zijn pure CSS (`animation-timeline`), content is standaard zichtbaar. Tekst die het grootste paint-element is (LCP) niet op opacity 0 laten starten.
- Alles bevriest bij `prefers-reduced-motion`; de scrollytelling toont dan de eindtoestand.
- Beweging verklaart of stuurt (hover, voortgang, uit elkaar halen), versiert niet.

## 9. Toon van de tekst

- Kort, concreet, actief. Zinnen die alleen op dit bedrijf slaan. Geen "world-class", "innovative", "passionate".
- Alleen beweringen die de klant heeft aangeleverd (sinds 1993, onafhankelijk sinds 2012, wereldwijd, de zes diensten). Geen cijfers, klanten of certificaten verzinnen.
- Knoppen zijn werkwoorden: "Request service", "Request parts", "Get in touch".

## 10. Do's en don'ts

| Do | Don't |
| --- | --- |
| Tekeningen, nummering, mono-labels | Stockfoto's, emoji, kleurrijke illustraties |
| Eén oranje accent | Extra accentkleuren of gradients |
| Haarlijnen en veel ruimte | Schaduwen op alles, afgeronde kaarten met glans |
| Specifieke, korte koppen | Marketingtaal en lege superlatieven |
| Contrast ≥ 4,5:1 voor kleine tekst | Grijs-op-grijs "subtiele" labels |
