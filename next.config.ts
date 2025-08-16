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
  // Ensure proper output for Vercel
  output: "standalone",
};

// Only apply bundle analyzer when explicitly enabled and not in Vercel
const isVercel = process.env.VERCEL === "1";
const finalConfig = isVercel
  ? withMDX(config)
  : bundleAnalyzer({
      enabled: process.env.ANALYZE === "true",
    })(withMDX(config));

export default finalConfig;
