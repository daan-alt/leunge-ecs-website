# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start the dev server (Turbopack) at http://localhost:3000
npm run build    # production build — also the static export (see below)
npm run start    # serve the build output with `next start` (not used for deployment)
npm run lint     # eslint (eslint-config-next core-web-vitals + typescript)
npx tsc --noEmit # type-check without emitting
```

There is no test suite / test runner in this repo.

## Architecture

### Static export to GitHub Pages — no server at runtime
`next.config.ts` sets `output: "export"`. The site is deployed as static HTML/CSS/JS via
`.github/workflows/deploy.yml` (build → `actions/deploy-pages`), triggered on every push to `main`.
There is **no API route, no server component data-fetching, no backend of any kind** — anything that
looks like it needs a server (form submissions, etc.) has to be solved client-side against a third-party
API instead (see "Forms" below).

Two consequences that matter when editing code:
- **`basePath`**: in CI (`GITHUB_ACTIONS` env var set) the app is served from `/leunge-ecs-website`, not
  `/` (GitHub Pages project-site path). Locally (`npm run dev`/`npm run build` without that env var) it's
  served from `/`. Because of this, **all internal navigation must use `next/link`'s `Link`**, never a
  plain `<a href="/...">` — `Link` rewrites the href with `basePath` at build time, a raw `<a>` won't and
  will silently 404 in production. Cross-page anchors (e.g. linking to a homepage section from another
  page) use the full form `"/#section-id"`, not just `"#section-id"`.
- `src/app/sitemap.ts` and `src/app/robots.ts` must be kept in sync by hand when routes are added or
  removed (no automatic route discovery).

### Content is centralized and typed (`src/content/`)
All copy lives in `src/content/en.ts`, typed against `SiteContent` in `src/content/types.ts`, and
re-exported as the single `content` object from `src/content/index.ts`. Components import `{ content }`
from `@/content` and destructure the section they need — never hardcode copy in a component. The site is
English-only; if a component has hardcoded text it's almost always a leftover that should move into
`en.ts` (this has happened before — UI labels like a footer heading or a card's CTA button text quietly
stayed hardcoded and out of sync with the rest of the copy).

A few things render outside React entirely and therefore can't read `content` or CSS variables:
`src/app/icon.tsx` and `src/app/opengraph-image.tsx` use `next/og`'s `ImageResponse` with inline styles —
colors and text there are hand-duplicated and won't update automatically when `content` or the theme
colors change.

### Styling: Tailwind v4, CSS-first config
There is no `tailwind.config.*`. Design tokens (`--color-navy`, `--color-accent`, `--color-accent-bright`,
`--color-mist`, `--color-ink`, `--color-line`, etc.) are declared in an `@theme` block at the top of
`src/app/globals.css` and consumed via Tailwind utilities (`bg-navy`, `text-accent`, ...). Change a color
there once and every component picks it up — except the two files mentioned above and the hardcoded
`rgba(...)` glow values a couple of hover states use instead of a token.

`globals.css` also defines the small set of custom interaction classes used throughout:
`.btn-premium` / `.btn-premium-dark` (button lift/shadow/glow on hover), `.field-underline` (form field
focus underline), `.card-lift`, and `.reveal` / `.reveal-line` (see below).

### Scroll-reveal animation: one shared observer, not one per element
`src/components/ui/Reveal.tsx` is a plain server-rendered wrapper (`<div class="reveal">`, no client JS).
A single `RevealObserver` (mounted once in `src/app/layout.tsx`) runs one `IntersectionObserver` for every
`.reveal`/`.reveal-line` element on the page and adds `.is-visible` when it scrolls into view. Don't add
per-`Reveal` `useEffect`/`IntersectionObserver` logic — extend `RevealObserver` instead if the animation
needs to change.

### Forms: client-only submission via Web3Forms
`src/components/forms/RequestForm.tsx` is the one form component, reused by the three request pages
(`/service-request`, `/parts-request`, `/contact`) with different `content` + a `kind` prop that sets the
email subject prefix. Since there's no backend, it `fetch()`s directly from the browser to
`https://api.web3forms.com/submit`, using `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (a build-time env var, wired
into the GitHub Actions workflow from the `WEB3FORMS_ACCESS_KEY` repo secret — see
`.github/workflows/deploy.yml`). Without that key set, submissions fail gracefully into the component's
own error state rather than crashing — this is expected in local dev unless you set the env var yourself.

### Component layout
- `src/components/sections/` — one component per homepage section, in the order `page.tsx` renders them.
- `src/components/layout/` — `Navigation` (sticky header incl. mobile menu) and `Footer`, both shared via
  `src/app/layout.tsx`.
- `src/components/ui/` — small generic primitives (`Reveal`, `RevealObserver`, `TechnicalFrame`, `Logo`).
- `src/components/visuals/` — hand-authored decorative SVGs (gauges, schematics, icons). These take
  `currentColor`/Tailwind text-color classes rather than hardcoded fill/stroke colors, so they inherit
  theme colors correctly — keep new ones consistent with that.
- `src/components/forms/` — the shared `RequestForm`.

### Path alias
`@/*` maps to `src/*` (see `tsconfig.json`).
