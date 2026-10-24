import { content } from "@/content";
import { ogImage } from "@/lib/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return ogImage(content.hero.badge, `${content.hero.titleLine1} ${content.hero.titleLine2}`);
}
