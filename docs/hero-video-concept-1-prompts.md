# Hero-video concept 1: "Walk through the engine room"

Eén doorlopende, rustige camerabeweging vooruit door een machinekamer (±12 s). De video scrubt mee met scrollen; drie hotspots leiden naar Service, Alpha Lubrication en Parts. Prompts zijn Engels (beste resultaat), uitleg Nederlands.

## 0. Werkwijze (belangrijk voor een realistisch resultaat)
1. Genereer eerst **5 keyframe-stills (K1–K5)** met de beeldtool, met je bestaande foto's als referentie (`2`, `4`, `5A`, `5B`, `5C`) zodat motor, kleuren en licht overeenkomen.
2. Animeer daarna **per paar (K1→K2, K2→K3, …)** met een image-to-video tool die *first frame + last frame* ondersteunt. Zonder last-frame: animeer elke still apart en laat de clips in de montage in elkaar overvloeien (0,3 s crossfade).
3. Hou clips kort (3–4 s) en beweging klein. Eén richting: **altijd vooruit**, nooit terug of zijwaarts. Dat is nodig voor scroll-scrubben.
4. Voeg alles samen in een editor, graad naar de foto's (zelfde kleurgrade en korrel), exporteer volgens sectie 5.

## 1. World-lock (plak vóór elke prompt, stilt en video)
```
Machinery space of a large ocean-going cargo ship, documentary photorealism, shot on a full-frame camera with a 28mm lens at eye height. Large two-stroke low-speed marine diesel engine painted dark blue-grey, stainless steel tubing, grey steel catwalks with galvanised handrails, green anti-slip deck plating, insulated pipework with worn aluminium cladding, white-grey bulkheads. Lighting: cool overhead fluorescent tubes plus warm amber work lights, deep navy shadows, faint oil film and dust, fine film grain, restrained desaturated colour grade (navy, steel blue, neutral grey) with a single small safety-orange accent per frame. No readable text, no logos, no brand names, no watermarks.
```
**Negatief:** `cartoon, 3D render look, CGI, oversaturated, lens flare, bloom, fisheye, warped pipes, melting or morphing metal, floating objects, distorted hands, extra fingers, readable text, garbled labels, stock-photo smile, camera shake, jump cuts, fast motion`

**Compositie-regel hero:** het linkerderde van het beeld blijft donker en rustig (daar staat de kop). Visueel gewicht rechts. Hotspot-onderwerpen staan op de hieronder genoemde plek in het beeld.

## 2. Storyboard (±12 s, 4 beats, camera loopt rechtdoor)
| Beat | Tijd | Wat zie je | Hotspot (desktop, % van beeld) |
|---|---|---|---|
| A | 0–3 s | Wide establishing: cilinderrij rechts, loopbrug, dof licht, links donker | geen (kop zichtbaar) |
| B | 3–6 s | Naderend: monteur in navy overall + witte helm, **van achter/zijkant**, inspecteert leidingwerk met zaklamp | **Service** ≈ 62% x / 48% y |
| C | 6–9 s | Cilinder-smeereenheid op de motorzijde, roestvrij staal tubing, amber oliedruppel, rack focus | **Alpha Lubrication** ≈ 58% x / 52% y |
| D | 9–12 s | Verder vooruit naar een stalen onderdelenkast/rek met verzegelde dozen en een turbo-rotor op pallet; eindframe rustig en donker | **Parts** ≈ 66% x / 60% y |

## 3. Keyframes (beeldtool)
Plak elke keer de world-lock ervoor. Aspect 16:9, hoogste resolutie.

- **K1 (start, beat A):** `[world-lock] Wide establishing view along a steel catwalk, row of huge cylinder covers of the engine on the right, steel handrail leading the eye forward, soft steam haze, distant glow of a control-room window, left third of the frame in deep dark navy shadow, no people, calm and spacious.`
- **K2 (begin beat B):** `[world-lock] Same catwalk, camera a few metres further, a marine service engineer in dark navy coveralls with reflective strips and a white hard hat with ear defenders stands in the right-centre mid-distance, seen from the side and slightly behind, face not visible, leaning on the handrail holding a small torch, engine and pipework on the right, left third dark.`
- **K3 (begin beat C):** `[world-lock] Close three-quarter view of the side of the engine: a cylinder lubrication unit with small stainless steel tubing runs to the cylinder liner, a single amber oil droplet forming at a fitting, shallow depth of field, handrail slightly out of focus in the foreground, no readable text, small orange accent from a hose clamp.`
- **K4 (begin beat D):** `[world-lock] Further along the machinery space, a grey steel spares locker and shelving with sealed original-parts boxes with blank labels and a turbocharger rotor wrapped in brown paper on a wooden pallet, cool light from above, wet-looking steel floor reflecting amber lamp, depth and calm.`
- **K5 (eindframe):** `[world-lock] Final calm frame deeper in the machinery space, converging steel structure and pipes leading to a soft dark vanishing point, mostly dark navy, a single small warm orange work lamp in the far right, very quiet, space on the left for a headline.`

## 4. Videoprompts (image-to-video)
Gemeenschappelijke instellingen: 16:9, 24 fps, 1080p, **geen audio**, lage motion-sterkte, vaste seed per clip, camera "slow forward dolly, ease-in-out".

- **V1 (K1→K2, 3–4 s):** `Slow steady forward dolly along the catwalk, constant speed, no shake. Steam haze drifts gently. Amber work lights flicker very slightly. The engineer comes into view and holds a calm pose. Realistic physics, nothing morphs, no sudden motion, no cuts.`
- **V2 (K2→K3, 3–4 s):** `Continue the same forward dolly while the camera drifts slightly right and focus pulls from the foreground handrail to the lubrication unit. The engineer's torch beam sweeps slowly across a pipe flange. An oil droplet swells and slowly falls from the fitting. Realistic fluid motion, no morphing metal.`
- **V3 (K3→K4, 3–4 s):** `Same forward dolly, smooth and slow, the engine slides past on the right, light reflections move across oily steel plates. Parcel boxes and the wrapped turbine rotor become visible ahead. No people, no sudden motion.`
- **V4 (K4→K5, 3–4 s):** `Gentle deceleration of the forward dolly, depth increases, steam haze thickens slightly, lights dim a little toward a dark vanishing point. Ends on a very still frame. No cuts, no zoom changes.`

**Controlelijst per clip (afkeuren en opnieuw als):** pijpen vervormen of smelten · handen/vingers fout · leesbare of vreemde tekst verschijnt · camera schudt · licht flitst fel · beweging gaat terug of zijwaarts · de monteur "zweeft" of draait zijn gezicht naar de camera.

## 5. Export (voor scroll-scrub en snelle laadtijd)
Scrubben werkt alleen goed als bijna elk frame een keyframe is. Doelen: desktop ≤ ~4 MB, mobiel ≤ ~2 MB (testen).
```bash
# Desktop (1280x720), keyframe elke 2 frames, zonder audio
ffmpeg -i hero-master.mp4 -an -vf scale=1280:-2 -c:v libx264 -preset slow -crf 28 -g 2 -keyint_min 2 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart hero-1280.mp4
# Poster (eerste frame) en eindframe
ffmpeg -i hero-master.mp4 -frames:v 1 -q:v 3 hero-poster.jpg
```
Mobiel: apart **9:16-exemplaar** (720×1280) van dezelfde keyframes/prompts, met het interessante deel in de bovenste ~40% van het beeld (de tekst staat daaronder). Geen scroll-scrub op mobiel (iOS is onbetrouwbaar): autoplay-loop van beat A–B, of alleen de poster. `prefers-reduced-motion`: alleen poster.

## 6. Interactie (voor de bouw)
- Hero wordt `sticky` binnen een sectie van ±300vh; scrollvoortgang `p` (0–1) → `video.currentTime = p × duur`, vloeiend via `requestAnimationFrame` + lerp.
- Kop/tekst en badge faden uit rond `p ≈ 0,15`; een subtiele "scroll"-aanwijzing onderaan.
- Hotspots verschijnen in een venster rond hun beat (Service `p 0,28–0,50`, Alpha `p 0,52–0,72`, Parts `p 0,76–0,95`), pulserend oranje ring; klik/tap/Enter opent een kaartje met bestaande tekst uit `en.ts` en een knop:
  - **Service** — "Technical service & support: Onboard service · Troubleshooting · Support during the voyage." → `/service-request`
  - **Alpha Lubrication Systems** — "Main engines · Commissioning · Optimization." → `/service-request`
  - **Genuine Spare Parts** — "OEM parts · Sourcing & purchasing · Complete packages." → `/parts-request`
- Toegankelijk: hotspots zijn echte `<button>`s met `aria-label`, tab-volgorde klopt, ook zonder scroll bereikbaar via een lijst onder de video; video heeft geen audio en `aria-hidden`.
- Optioneel later: kleine keuzebalk "What do you need?" onderaan (concept 3).

## 7. Wat ik van Harm nodig heb voor extra realisme
Motormerk/type (voor de vorm en kleur van de cilinders) · hoe de Alpha-smeereenheid er in het echt uitziet (referentiefoto) · kleur van overalls/helmen · 3–5 echte machinekamerfoto's als referentie · of AI-video als "illustratief" gelabeld moet worden.
