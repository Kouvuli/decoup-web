import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@decoup/api-client", "@decoup/contracts", "@decoup/ui"],
};

export default nextConfig;
