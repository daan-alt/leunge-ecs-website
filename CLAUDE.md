# CLAUDE.md

Next.js 16 (App Router, Turbopack) + Tailwind v4 marketing site for LEUNGE-ECS B.V. (marine technical
service/parts). English-only site; the user talks to you in Dutch — reply in Dutch.

## Working efficiently (keep token use low)
- Answer briefly. No option surveys when a recommendation will do; no recap of unchanged code.
- Read only what you need: Grep first, then Read with offset/limit. Don't re-read files you just edited.
- Prefer one batched Bash call over several small ones. Don't dump long command output — pipe through `tail`/`grep`.
- Verify visually only when the change is visual. For screenshots prefer headless Chrome
  (`"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless --screenshot=... --window-size=W,H URL`)
  over many browser-pane round trips; use `read_page`/JS checks for non-visual facts.
- Don't spawn subagents unless asked.

## Commands
`npm run dev` · `npm run build` (= static export to `out/`) · `npm run lint` · `npx tsc --noEmit`. No tests.
Preview server config: `.claude/launch.json` uses `NEXT_DIST_DIR=.next-preview` so it can run next to
another `next dev` in this folder (Next locks its dist dir).

## Architecture — rules that matter
- **Static export, no backend** (`output: "export"`, deployed to GitHub Pages by
  `.github/workflows/deploy.yml` on every push to `main`). Anything server-like must be a client-side call
  to a third-party API.
- **basePath** is `/leunge-ecs-website` in CI only. Always use `next/link` `Link` for internal links (never
  raw `<a href="/...">`); cross-page anchors as `"/#section-id"`.
- Keep `src/app/sitemap.ts` and `robots.ts` in sync by hand when routes change.
- **Copy lives in `src/content/en.ts`** (typed by `src/content/types.ts`, exported as `content` from
  `@/content`). Never hardcode UI text in components.
- `src/app/icon.tsx` / `opengraph-image.tsx` use inline styles — colors/text there are duplicated by hand.
- **Tailwind v4, CSS-first**: tokens in the `@theme` block of `src/app/globals.css` (`navy`, `accent`,
  `accent-bright`, `mist`, `ink`, `line`, …). Custom classes there: `.btn-premium(-dark)`, `.field-underline`,
  `.card-lift`, `.reveal`/`.reveal-line`, and the hero `.cp-*` animations.
- **Reveal**: `Reveal` adds `.reveal`/`.reveal-line`; the fade-in is a pure-CSS scroll-driven animation
  (`animation-timeline: view()`) in `globals.css`. Content is visible by default — don't reintroduce a JS
  observer that hides content until it runs (it broke pages opened via client-side navigation).
- **Visuals** (`src/components/visuals/`) are hand-authored SVGs using `currentColor` + Tailwind text
  classes. Hero backdrop = `ControlPanel.tsx` (client component, layouts `wide` mobile / `right` desktop;
  CSS-animated, frozen under `prefers-reduced-motion`). Round trig output there to avoid hydration mismatches.
- **Logo**: `Logo.tsx` loads `public/logo.svg` / `logo-light.svg` (footer) as `<img>` — prefix asset URLs
  with `BASE_PATH` from `@/lib/utils` (Link can't do it for `<img src>`). Keep heavy static SVG out of
  server components: their markup is duplicated in the RSC payload.
- Path alias `@/*` → `src/*`.

## Forms
`src/components/forms/RequestForm.tsx` serves `/service-request`, `/parts-request`, `/contact` (`kind` prop
sets subject + upload folder). Request-specific inputs come from `extraFields` in the page's content.
- Submission: browser `fetch` to Web3Forms with `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (secret
  `WEB3FORMS_ACCESS_KEY`). Missing key → form shows its error state (expected locally).
- Attachments: `src/lib/uploads.ts` uploads to Supabase Storage bucket `request-attachments` and adds the
  public links to the email (Web3Forms free has no attachments). Needs `NEXT_PUBLIC_SUPABASE_URL` +
  `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (secrets `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`) and a one-time
  run of `docs/supabase-setup.sql`. Without them the file input is disabled with a notice.
  Limits: 5 files, 10 MB each, images/PDF/Word/Excel.
