import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove standalone output for Vercel deployment
  // Vercel handles the output automatically
  reactStrictMode: true,
  
  // Image optimization settings
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Experimental features if needed
  experimental: {
    // Enable if using server actions extensively
    // serverActions: true,
  },
};

export default nextConfig;
