# Original color palette (before orange/logo rebrand)

Saved on 2026-09-25, right before switching the accent colors from blue/teal
to the orange from the official LEUNGE-ECS logo (`Leunge-ECS Logo.pdf`).

Navy and all neutral tokens (paper, mist, ink, line) were **not** changed —
only `--color-accent` and `--color-accent-bright` changed. If you ever want
to go back to the original blue palette, replace the `@theme` block in
`src/app/globals.css` with this one:

```css
@theme {
  --color-navy: #13294b;
  --color-navy-deep: #0f1d33;
  --color-paper: #fcfeff;
  --color-mist: #ebf9ff;
  --color-mist-2: #e5f8ff;
  --color-ink: #545659;
  --color-ink-dark: #222222;
  --color-accent: #007aa6;
  --color-accent-bright: #009fda;
  --color-line: #d7e4ec;
  --color-cream: #f9f3ef;
  --color-white: #ffffff;
}
```

That covers every component. Three spots can't use CSS variables (inline
styles in generated images/icons) and had the old blue hardcoded — revert
these too if you roll back:

- `src/app/icon.tsx` — `borderRight: "2px solid #009fda"`
- `src/app/opengraph-image.tsx` — gradient stop `#007aa6` and the `-` character color `#009fda`
- `src/app/globals.css` — `.btn-premium-dark:hover`/`:active` box-shadow used `rgba(0, 159, 218, ...)` (the accent-bright color as RGB, for the glow)
