import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

// Pin the workspace root to this app. Without it, Next infers the root from
// the nearest lockfile and walks up to the department folder (which has its
// own package-lock for the screenshot tool), breaking file tracing on deploy.
const root = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: { root },
  outputFileTracingRoot: root,
};

export default nextConfig;
