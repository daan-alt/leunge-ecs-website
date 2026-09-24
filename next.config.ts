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
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
