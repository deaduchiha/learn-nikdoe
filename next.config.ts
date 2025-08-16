import { createMDX } from "fumadocs-mdx/next";
import { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {};

export default withMDX(config);
