/**
 * Round-3 switches. Flip a flag to `false` to remove that feature from the
 * site without deleting any code (sections are not rendered, links are hidden,
 * the extra routes return a 404). See docs/rollback-round3.md.
 */
export const features = {
  /** Scroll-driven "Anatomy" section on the homepage. */
  scrolly: true,
  /** Guided request wizard at /request. */
  wizard: true,
  /** Dutch version under /nl and the language switch. */
  dutch: true,
  /** Cookie-free analytics: only on when NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set at build time. */
  analytics: Boolean(process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN),
} as const;
