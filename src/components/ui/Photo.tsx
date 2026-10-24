import type { ContentImage } from "@/content/types";
import { cn, BASE_PATH } from "@/lib/utils";

// Plain <img> (static export has no image optimizer) with pre-generated WebP
// variants. The parent owns the aspect ratio; the photo just fills it.
export function Photo({
  image,
  sizes,
  className,
  priority,
}: {
  image: ContentImage;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  const file = (w: number) => `${BASE_PATH}${image.src}-${w}.webp`;
  const widths = [...image.variants].sort((a, b) => a - b);
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer
    <img
      src={file(widths[widths.length - 1])}
      srcSet={widths.map((w) => `${file(w)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
