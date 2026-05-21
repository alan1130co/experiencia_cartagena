import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      { source: "/botes",      destination: "/flota?categoria=botes",      permanent: false },
      { source: "/yates",      destination: "/flota?categoria=yates",      permanent: false },
      { source: "/catamaranes",destination: "/flota?categoria=catamaranes",permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com"   },
      { protocol: "https", hostname: "placehold.co"        }, 
    ],
  },
};

export default nextConfig;