import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
