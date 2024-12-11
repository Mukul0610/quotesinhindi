import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  
  // If you have dynamic routes, configure them
  trailingSlash: true,
  
  // Handle images if using next/image
  images: {
    unoptimized: true
  },
};

export default nextConfig;
