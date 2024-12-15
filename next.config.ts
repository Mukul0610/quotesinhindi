import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Enable static export
  
  // If you have dynamic routes, configure them
  trailingSlash: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["*"]
    },
  },
  
  // Handle images if using next/image
  images: {
    unoptimized: true
  },
};

export default nextConfig;
