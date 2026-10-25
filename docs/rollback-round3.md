# Terugdraaien van ronde 3

Ronde 3 (techniek, merksysteem, scrollytelling, aanvraag-wizard, Nederlandse versie) staat op de branch `round3`. **Er is niets van gepusht of live gezet.** De live site is nog `main` = tag `pre-round3` (`5b3b317`).

## 0. Nog niet live? Dan is terugdraaien niets doen

```bash
git checkout main            # de oude, live versie
git branch -D round3         # alleen als je ronde 3 helemaal weg wilt (de tag pre-round3 blijft)
```

Wil je ronde 3 later alsnog proberen, laat de branch dan staan.

## 1. Eén onderdeel uitzetten zonder code te verwijderen (aanbevolen, snelst)

Zet in `src/lib/features.ts` de betreffende vlag op `false`, commit en push naar `main` (de deploy-workflow draait vanzelf).

| Vlag | Wat verdwijnt |
| --- | --- |
| `scrolly: false` | de sectie "Anatomy of a part" op de homepage |
| `wizard: false` | de link "Not sure where to start?" onder de aanvraagknoppen, de sitemap-regel en de pagina's `/request` en `/nl/aanvraag` (tonen dan een nette "not found" met `noindex`) |
| `dutch: false` | de taalwissel (header, menu, footer), alle `/nl`-pagina's (tonen de "not found") en de hreflang-/sitemap-regels voor Nederlands |
| analytics | staat standaard uit; alleen aan als `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (repository-variabele `PLAUSIBLE_DOMAIN`) gezet is |

De uit-stand is getest: met alle drie op `false` slaagt `npm run build`, en de site is weer de homepage van ronde 2 (zonder Anatomy, wizard-link of taalwissel; sitemap met 5 URL's).

## 2. Eén onderdeel terugdraaien via git

Elk onderdeel is met `--no-ff` als aparte merge in `round3` gezet. Draai terug in **omgekeerde volgorde** (nieuwste eerst), anders raken latere wijzigingen dezelfde bestanden en krijg je conflicten:

| Onderdeel | Merge-commit | Opmerking |
| --- | --- | --- |
| Nederlands (`r3-nl`) | `e574678` | zet eerst de vervolgfixes terug (zie onder) |
| Wizard (`r3-wizard`) | `dcc8f4b` | |
| Scrollytelling (`r3-scrolly`) | `c610567` | |
| Merksysteem (`r3-brand`) | `7fe3dc7` | iconen en motion-tokens; raakt Process/Situations |
| Techniek (`r3-tech`) | `21b89cf` | fundament (contrast, grain, JSON-LD); liever via de vlaggen of een volledige terugdraai |

Vervolgfixes direct op `round3` (na de merges): `656978f` (uitgezette functies tonen een nette not-found), `7e489a4` (Anatomy buiten `content-visibility`), `b47c7e5` (stijl van de globale 404).

Voorbeeld, alleen de wizard weghalen:

```bash
git checkout main
git revert -m 1 dcc8f4b
```

## 3. Alles van ronde 3 terugdraaien nadat het live is

Is `round3` in `main` gemerged (met `--no-ff`), maak dan één revert-commit van die merge:

```bash
git checkout main
git revert -m 1 <hash-van-de-merge-van-round3>
git push origin main        # de workflow zet de oude versie weer live
```

Is het met een fast-forward gemerged (geen merge-commit), revert dan de reeks:

```bash
git revert --no-edit pre-round3..HEAD
git push origin main
```

**Nooit force-pushen.** Een revert-commit is veilig, laat de geschiedenis intact en triggert de deploy automatisch.

Gerepeteerd: op een wegwerpbranch zijn de drie vervolgfixes en daarna alle vijf merges in deze volgorde (`b47c7e5`, `7e489a4`, `656978f`, dan `e574678`, `dcc8f4b`, `c610567`, `7fe3dc7`, `21b89cf`) zonder conflict teruggedraaid. Het resultaat bouwt (16 pagina's) en verschilt van `pre-round3` alleen door het ongebruikte bestand `src/lib/features.ts`.

## 4. Wat je moet weten bij terugdraaien

- `package.json` en `package-lock.json` veranderen **niet** in ronde 3 (geen nieuwe dependencies; `lenis` stamt uit ronde 2).
- `.github/workflows/deploy.yml` kreeg één inerte regel (`NEXT_PUBLIC_PLAUSIBLE_DOMAIN`, leeg tenzij je de repository-variabele zet). Terugdraaien van `r3-tech` haalt die weer weg.
- `next.config.ts` kreeg `experimental.globalNotFound: true` (nodig voor de twee taal-layouts). Dat zit in `r3-nl`.
- Nederlandse URL's die al door Google zijn opgepikt, geven na terugdraaien een 404; dat is verwacht.
