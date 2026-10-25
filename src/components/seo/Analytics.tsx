import { features } from "@/lib/features";

// Cookie-free Plausible analytics (no consent banner needed). Renders nothing
// unless NEXT_PUBLIC_PLAUSIBLE_DOMAIN was set at build time.
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!features.analytics || !domain) return null;
  return <script defer data-domain={domain} src="https://plausible.io/js/script.js" />;
}
