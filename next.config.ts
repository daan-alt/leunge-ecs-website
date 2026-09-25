import type { NextConfig } from "next";
import path from "path";

// Static export for GitHub Pages. Pages serves this repo at
// https://<user>.github.io/leunge-ecs-website/, so assets need that
// subpath prefix — but only in CI, so local `npm run dev`/`build` still
// serve from the root.
const repoBasePath = process.env.GITHUB_ACTIONS ? "/leunge-ecs-website" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  env: { NEXT_PUBLIC_BASE_PATH: repoBasePath },
  // Lets a second local dev server run from this folder (Next.js locks the
  // dist dir, so two `next dev` processes can't share `.next`).
  distDir: process.env.NEXT_DIST_DIR || ".next",
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
