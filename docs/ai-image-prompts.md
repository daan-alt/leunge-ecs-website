# AI-beeldmateriaal voor de LEUNGE-ECS website: concepten + prompts

## Context
De site gebruikt nu overal getekende SVG-placeholders (`TechnicalFrame` + visuals) en een geanimeerd dashboard als hero. Doel: alle beelden vervangen door realistische AI-beelden (jij genereert ze met een externe tool, niet PromptWise) en de hero-header een video-achtergrond geven. Hieronder per beeld: waar het staat, welke tekst ernaast staat, het concept en een basisprompt die we daarna samen verrijken met echte details van Harm. Na akkoord sla ik dit op als `docs/ai-image-prompts.md`; het inbouwen in de site is een aparte vervolgstap.

## Gedeelde stijlgids (zet vóór elke prompt, zodat de set één geheel wordt)
**Basis:** `Photorealistic documentary photograph, full-frame camera, 35mm lens, natural industrial lighting, shallow depth of field, fine film grain, realistic wear, oil film and dust, restrained colour grade of deep navy and steel blue with neutral greys and small warm orange accents (safety orange, oil amber). No text, no logos, no watermarks, no readable labels.`
**Negatief:** `cartoon, 3D render look, illustration, oversaturated, plastic skin, perfectly symmetrical, garbled text, warped gauges, extra fingers, floating parts, lens flare, stock-photo smiles, fake brand names`
**Merkkleuren om naar te graderen:** navy `#13294b`, oranje `#f5921e` (uit het logo). Oranje spaarzaam: één lamp, een olieglans, een veiligheidshelm — nooit het hele beeld.
**Realisme-regels:** geen leesbare tekst op beeld (AI verknoeit die; labels later zelf toevoegen of blanco laten); geen herkenbare merknamen; geen gezichten tenzij echt; gebruik echte referentiefoto's (img2img/reference) van motoren die Harm kent; upscale en geef alle beelden dezelfde korrel + kleurgrade in één nabewerkingsstap.

## Beeldlijst

### 1. Hero — video (desktop rechterhelft, mobiel full-width achter tekst)
- **Tekst:** "Independent technical expertise" · "Technical service, genuine spare parts and engineering for seagoing vessels, including Alpha Lubrication Systems, automation and commissioning." · badge "Worldwide service and shipping". Tekst staat links, donkere gradient eroverheen.
- **Concept:** langzame, filmische camerabeweging door een machinekamer van een groot koopvaardijschip: de cilinderrij van een tweetakt-langzaamlopende dieselmotor, loopbruggen, leidingwerk, in de verte het gloeien van een controlekamer. Nauwelijks beweging: stoomwaas, een lichtflikkering, olieglans, traag dolly-in. Visueel zwaartepunt rechts; linker derde donker/rustig voor de kop.
- **Werkwijze:** eerst één hero-still genereren (prompt hieronder), die goedkeuren, dán image-to-video (betrouwbaarder dan text-to-video voor realisme en consistentie).
- **Still-prompt:** `[stijlgids] Wide shot inside the engine room of a large ocean-going cargo ship, rows of huge cylinder covers of a two-stroke low-speed marine diesel engine on the right, steel catwalks and railings, insulated pipework, faint steam haze, wet oily steel floor plates reflecting amber work lights, deep navy shadows, a distant glowing control-room window, left third of the frame dark and quiet, 16:9, cinematic, sense of scale`
- **Video-prompt (image-to-video):** `Very slow dolly-in, subtle drift of steam haze, soft flicker of amber work lights, faint reflections moving on oily steel plates, no people, no sudden motion, realistic physics, 8 seconds, seamless loop, 24fps`
- **Specs:** 16:9 1920×1080 (+ 9:16 of 4:5 crop voor mobiel), 6–8 s loop, geen audio, mp4 (H.264) + webm, ≤ 2–3 MB, aparte poster-jpg, valt terug op poster bij `prefers-reduced-motion`.
- **Verrijken:** motor-merk/type, schiptype (bulk/tanker/container), echte machinekamer-referenties van Harm.

### 2. Services intro — "Technical expertise" (4:3, witte sectie)
- **Tekst:** technical service & maintenance, Alpha Lubrication, automation, engineering, OEM-parts; "a service engineer can join on board"; transparantie, kosteneffectiviteit, flexibiliteit.
- **Concept:** een service engineer in overall en helm, van schuin achter/zijkant (gezicht niet herkenbaar), die met een tablet/meetapparaat een motorsectie inspecteert; geen poseren, echt werkmoment.
- **Prompt:** `[stijlgids] Marine service engineer in dark navy coveralls and white hard hat, seen from the side and slightly behind, face not clearly visible, inspecting a large marine engine section with a handheld tablet and torch, engine room background softly blurred, one small orange detail on the hard-hat strap, 4:3, candid documentary moment`
- **Verrijken:** type werk (inspectie/overhaul), welke motor, PBM-stijl (kleur overall).

### 3. Genuine Spare Parts (4:3, op navy achtergrond)
- **Tekst:** sourcing, purchasing and delivery of genuine OEM parts, "from a single part to a complete package for a vessel or project", juiste specificatie, strakke levering.
- **Concept:** werkbank/pakketstation: nette set originele onderdelen (zuigerveren, injector, kleine pomp) naast een open houten/kartonnen kist met schuim, bagagelabel blanco; koel licht, op navy-ish ondergrond zodat het in de navy sectie opgaat.
- **Prompt:** `[stijlgids] Neatly arranged genuine marine engine spare parts on a clean steel workbench: piston ring set, fuel injector, small pump unit, bolts in a labelled-blank tray, an open shipping crate with foam inserts, cool top light, dark navy background falling off to black, tiny warm orange accent from a tag, 4:3, product-documentary look, crisp detail`
- **Verrijken:** welke onderdelen Harm echt levert, verpakkingsstijl, evt. verzendkisten voor wereldwijde verzending.

### 4. Approach — "Precision over promises" (16:10, witte sectie)
- **Tekst:** vier principes: ervaring, onafhankelijkheid, pragmatisme, precisie; geen overbodige lagen, "technical clarity".
- **Concept:** extreme close-up van precisie: een hand met een micrometer/meetklok op een gepolijste as of cilinderbus; ondiepe scherptediepte, rust, controle.
- **Prompt:** `[stijlgids] Extreme close-up of a gloved hand measuring a polished steel engine shaft with a precision micrometer, razor-thin depth of field, clean specular highlights, neutral grey and navy tones, faint orange reflection in the metal, 16:10, calm and exact mood`
- **Verrijken:** welke meting Harm echt doet (liner-slijtage, lagerspeling).

### 5. Expertise-kaarten (6×, 16:10, nu icoon op navy-verloop) — dezelfde stijl, zes onderwerpen
Tekst per kaart = titel + beschrijving + detailregel (zie `src/content/en.ts`).
1. **Technical service & support** — *"Onboard service · Troubleshooting · Support during the voyage."* → `[stijlgids] Engineer with torch checking pipework on the side of a running marine engine at sea, steel stairs, vibration haze, 16:10`
2. **Alpha Lubrication Systems** — *"Main engines · Commissioning · Optimization."* → `[stijlgids] Close-up of a cylinder lubrication unit mounted on the side of a large two-stroke marine engine, small stainless tubing runs to the cylinder liner, glistening amber oil droplets at a fitting, no readable text, 16:10, macro detail` (⚠ houd het generiek; AI kent het echte Alpha-systeem niet — gebruik referentiefoto's van Harm)
3. **Genuine Spare Parts** — *"OEM parts · Sourcing & purchasing · Complete packages."* → `[stijlgids] Stack of sealed original-parts boxes with blank labels and a turbocharger rotor on a pallet in a tidy warehouse, cool light, 16:10` (anders dan beeld 3: magazijn/logistiek, niet werkbank)
4. **Automation & control engineering** — *"PLC & HMI · Control panels · Modifications."* → `[stijlgids] Open marine control cabinet with neat colour-coded wiring, PLC modules with small status LEDs, a laptop connected for programming, 16:10, tidy craftsmanship`
5. **Engineering & design** — *"Mechanical engineering · Electrical engineering · Technical documentation."* → `[stijlgids] Desk with printed engineering drawings of an engine room layout, calipers, a laptop showing an unreadable CAD model, warm desk lamp, window with port cranes blurred behind, 16:10`
6. **Inspection, testing & commissioning** — *"Measurements · Test reports · Documentation."* → `[stijlgids] Technician holding a clipboard with a blank test report next to a switchboard while a multimeter probes terminals, sea trial atmosphere, 16:10`
- **Verrijken:** per kaart één echte referentiefoto + wat Harm er concreet doet.

### 6. About — portret (4:5), tekst "Experience, built in the field."
- **Advies:** hier géén verzonnen AI-persoon. Dit is een persoonlijk merk en de tekst gaat over Harm; een nep-gezicht tast juist het vertrouwen aan dat deze site moet winnen. Beter: een echte foto van Harm in een machinekamer (korte shoot: 4:5, natuurlijk licht, overall/helm) en eventueel die foto later AI-verbeteren (ruis, licht, achtergrond).
- **Fallback-prompt (zonder herkenbaar gezicht):** `[stijlgids] Silhouetted marine superintendent seen from behind in a vast engine room, hands resting on a railing, looking along the engine, backlit by amber work lights, 4:5, contemplative mood`
- **Verrijken:** echte foto's van Harm; zijn werkomgevingen (offshore gasproductie 1993, schepen).

### 7. Final CTA — "A technical challenge? Let's talk." (full-bleed achtergrond, donker)
- **Tekst:** "Whether it's technical supervision, engineering expertise or hands-on technical support: it starts with a conversation."
- **Concept:** rustige, donkere avondfoto: een zeeschip op de rede / bij een haven bij schemering, met werkverlichting; ruimte voor tekst in het midden, sterk overgradeerd naar navy.
- **Prompt:** `[stijlgids] Ocean-going cargo ship at anchor at dusk, deck work lights glowing amber, calm dark navy sea and sky, port cranes silhouetted far away, wide empty space in the centre for text, 21:9, quiet and confident mood`
- **Verrijken:** schiptype, havens waar Harm vaak komt (wereldwijd-gevoel).

### 8. OG-/deelafbeelding (1200×630) en favicon
- Hergebruik de hero-still (beeld 1) donker overgegradeerd; het logo zet ik er in code overheen (geen AI voor het logo).

### Niet via AI
Logo (`public/logo*.svg`), cijfers "30+", tekstblokken zonder beeld (BrandStatement, TechnicalDepth).

## Wat ik nog van Harm nodig heb om te verrijken
Motor-/systeemtypes waar hij mee werkt · schiptypes · 5–10 echte foto's/referenties (machinekamer, Alpha-lubricator, onderdelen, zijn eigen portret) · kleur/stijl van overalls en helmen · welke onderdelen hij vooral levert · havens/regio's · of hij AI-beelden als "illustratief" wil labelen.

## Vervolgstap na akkoord (inbouwen)
- Beelden in `public/images/` (webp/avif, ~1600 px breed, ≤ 150 KB; static export heeft geen image-optimizer, dus vooraf optimaliseren) en hero-video in `public/video/` met poster.
- `TechnicalFrame` behouden (hoekmarkeringen = merkdetail) maar `<img>` i.p.v. SVG; `BASE_PATH` voor URLs (zoals bij het logo); `Hero.tsx`: `<video muted loop playsInline autoPlay poster>`, ControlPanel als fallback weghalen of alleen bij reduced-motion.
- Verificatie: `npm run build`, `npx tsc --noEmit`, Lighthouse/payload-check (hero ≤ ~3 MB), headless Chrome-screenshots mobiel + desktop.
