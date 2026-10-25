import type { MetadataRoute } from "next";
import { content } from "@/content";
import { BASE_PATH } from "@/lib/utils";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LEUNGE-ECS B.V.",
    short_name: "LEUNGE-ECS",
    description: content.meta.ogDescription,
    start_url: `${BASE_PATH}/`,
    scope: `${BASE_PATH}/`,
    display: "browser",
    background_color: "#08111f",
    theme_color: "#08111f",
    icons: [{ src: `${BASE_PATH}/icon`, sizes: "64x64", type: "image/png" }],
  };
}
