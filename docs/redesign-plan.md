# Redesign-plan: van "AI-template" naar agency-niveau

Doel: de site laten ogen als een maatwerk-site van een designbureau (€10.000+), **zonder nieuwe input van de klant**.

## Harde randvoorwaarden

- **Geen verzonnen feiten.** Geen klantnamen, logo's, cijfers, certificaten, case studies, testimonials, aantallen schepen/havens of responstijden. Alleen wat al in `src/content/en.ts` staat (sinds 1993, onafhankelijk sinds 2012, Nederlandse roots, wereldwijd, de 6 diensten, de technische systemen).
- **Geen nieuwe foto's/video's.** Bestaande WebP-foto's blijven; behandel ze zo dat ze minder "stock/AI" ogen (zie 3.5). Geen nieuwe AI-beelden genereren.
- Houd je aan `CLAUDE.md`: statische export, `Link` voor interne links, copy alleen in `src/content/en.ts` (+ `types.ts`), Tailwind v4 tokens in `globals.css`, `Reveal` blijft pure CSS, `prefers-reduced-motion` respecteren, basePath-veilig.
- Site blijft Engelstalig. Formulieren/Web3Forms/Supabase-logica niet breken.
- Sync `sitemap.ts` / `robots.ts` als routes veranderen.

## Fase 1: Typografie en design-tokens (grootste effect per uur)

1. Vervang Inter-voor-alles door twee fonts via `next/font/google` in `layout.tsx`:
   - Display: een karaktervolle grotesk of serif (kies één: *Space Grotesk*, *Sora*, *Fraunces*, *Instrument Serif*). Kies na een snelle test in de browser wat bij navy + oranje past; zet in `--font-display`.
   - Body: rustige sans (*Inter* mag, of *Geist*/*DM Sans*).
   - Kleine monospace voor technische labels (*JetBrains Mono* / *IBM Plex Mono*) als `--font-mono`.
2. Typografische schaal: koppen `clamp(2.75rem, 7vw, 6.5rem)`, negatieve letterafstand (−0.02 tot −0.04em), `leading` 0.95–1.05; eyebrow-labels klein, uppercase, mono, brede tracking; body 17–18px met line-height 1.6.
3. Tokens in `@theme` uitbreiden: meer tinten navy (surface-1/2/3), een warme neutrale tint, hairline-kleuren voor donkere vlakken, consistente radius (scherp/klein, technisch) en schaduwsysteem. Geen paarse/blauwe default-gradients.

## Fase 2: Hero (nu bijna leeg en vaag)

1. Nieuwe, specifiekere kop (in `en.ts`), bv. "Marine technical service. Anywhere your vessel calls." met subkop op basis van bestaande feiten. Bedrijfsnaam naar een eyebrow/label.
2. `ControlPanel.tsx` veel zichtbaarder en levend maken: duidelijk leesbare instrument-waarden (oliedruk, liner-temp, cilinder 1–6 smering), subtiele animatie, bovenaan in beeld op desktop én mobiel; geen gigantische lege ruimte (hero ≈ 100svh met inhoud verticaal gecentreerd).
3. Feitelijke "stat-strip" onder de hero met alleen bestaande feiten: *Since 1993* · *Independent since 2012* · *Worldwide* · *On board & on location* (in mono-stijl). Geen verzonnen cijfers.
4. Sticky header die bij scrollen compact wordt (blur + hairline) met de twee CTA's altijd bereikbaar; op mobiel een vaste onderbalk "Request service / Request parts".

## Fase 3: Secties en layout-ritme

1. **Diensten (Expertise)**: niet 6 gelijke kaarten. Kies een editorial layout: genummerde lijst met grote typografie en hover-preview (foto + tekst verschijnt), of 1 uitgelichte dienst (Alpha Lubrication) groot + 5 compacte rijen. Genummerd (01–06) met mono-nummers.
2. **Ritme**: wissel licht/donker/foto-vlakken af, gebruik asymmetrische grids (7/5, 5/7), laat elementen uit het raster steken, grote witruimte (`py-32/40`). Verwijder dubbele/zwakke secties (bv. `Highlight`/`BrandStatement`/`Credibility` samenvoegen of schrappen waar ze elkaar herhalen).
3. **Proces-sectie** ("How a request works"): 4 stappen — Request → Assessment → Offer/Plan → On board / Delivery. Generiek formuleren, geen verzonnen doorlooptijden.
4. **Technical depth**: omzetten naar een strakke spec-tabel/lijst in mono-stijl (zoals een datasheet) i.p.v. kaarten.
5. **Foto's**: bestaande foto's consistent behandelen: vaste crop, subtiele navy duotone/overlay of grain, hairline-kader met technische hoekmarkeringen (`TechnicalFrame`), nooit als losse "stock-blok". Foto's kleiner/secundair; typografie en SVG-visuals dragen het ontwerp.
6. **Final CTA**: groot, typografisch, donker; beide CTA's plus contact.
7. **Footer**: rijker (navigatie, contact, diensten, kleine mono-regel met bedrijfsgegevens uit bestaande content).

## Fase 4: Copy-herschrijving (alleen op basis van bestaande feiten)

1. Verwijder generieke slogans ("Precision over promises", "Complex technical systems demand more than expertise…") of herschrijf ze naar concrete uitspraken over wat LEUNGE-ECS doet (storing op zee, service aan boord, Alpha-systemen, OEM-onderdelen).
2. Korte zinnen, actieve vorm, werkwoorden, geen buzzwords. Elke kop moet alleen voor dit bedrijf kloppen.
3. Meta titles/descriptions per pagina aanscherpen.
4. Alles via `en.ts` + `types.ts`; typecheck moet slagen.

## Fase 5: Interactie en motion

1. Hover-states: onderstreep-animaties, pijl-translate op CTA's, kaart/rij-highlights; `.btn-premium` verfijnen.
2. Scroll-motion blijft **pure CSS** (scroll-driven animations, geen JS-observer): per-regel koppen-reveal, subtiele parallax op foto's, voortgangslijn in de header.
3. Paginaovergangen alleen als het robuust en zonder JS-observer kan (View Transitions API met fallback), anders overslaan.
4. Alles achter `prefers-reduced-motion`.

## Fase 6: Overige pagina's en techniek

1. `about`, `contact`, `service-request`, `parts-request`: zelfde design-taal (typografie, hero-blok, ritme). Formulieren: duidelijkere labels, focus-states, betere succes-/foutstaten, inline validatie zonder logica te breken.
2. Eigen `not-found.tsx` (404) in stijl.
3. Per-pagina OG-images (`opengraph-image.tsx`) in nieuwe typografie; `icon.tsx` kleuren/tekst synchroon houden.
4. SEO: JSON-LD (`Organization`, `Service`) alleen met bestaande feiten; canonical's; `sitemap.ts`/`robots.ts` in sync.
5. Performance/a11y: Lighthouse streven ≥95 (perf/a11y/SEO/best practices), contrast WCAG AA, toetsenbordnavigatie, `alt`-teksten, geen layout shift, fonts met `display: swap` en subsets.

## Verificatie (verplicht aan het eind)

- `npx tsc --noEmit`, `npm run lint`, `npm run build` slagen.
- Headless Chrome screenshots (desktop 1440 en mobiel 390) van alle pagina's; visueel nalopen op leegte, overflow, contrast, afgesneden tekst.
- Controleer dat er geen nieuwe verzonnen feiten in `en.ts` staan (diff nalopen).
- Check `prefers-reduced-motion` en dat content zichtbaar is zonder JS-observer.

## Werkwijze voor autonome uitvoering

- Werk fase voor fase; **commit na elke fase** op een aparte branch `redesign` (niet op `main`, niet pushen).
- Na elke fase kort typecheck + build; bij falen eerst fixen.
- Open vragen niet stellen: kies de verstandigste default en noteer de keuze in `docs/redesign-notes.md` (gekozen fonts, afgevallen secties, wat de klant later kan aanleveren).
- Eindrapport in `docs/redesign-notes.md`: wat is gedaan, wat niet, en een lijst "nog nodig van klant" (echte foto's, klantlogo's, certificaten, cijfers, case studies).
