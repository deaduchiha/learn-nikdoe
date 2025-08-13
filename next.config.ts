import { createMDX } from "fumadocs-mdx/next";
import { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  poweredByHeader: false,
};

export default bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(withMDX(config));

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
