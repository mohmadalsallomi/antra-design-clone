import type { NextConfig } from "next";
import path from "node:path";

// Fix for Vercel path resolution
const LOADER = path.resolve(process.cwd(), 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Fix for Vercel deployment paths
  outputFileTracingRoot: path.resolve(process.cwd()),
  // Only add turbopack rules if loader exists (avoid Vercel build issues)
  ...(process.env.NODE_ENV === 'development' && {
    turbopack: {
      rules: {
        "*.{jsx,tsx}": {
          loaders: [LOADER]
        }
      }
    }
  })
};

export default nextConfig;
// Orchids restart: 1758743580042
