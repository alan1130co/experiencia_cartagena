import path from "path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Los redirects de /botes, /yates, /catamaranes viven ahora como páginas reales
  // en app/[locale]/{botes,yates,catamaranes}/page.tsx — un redirect a nivel de
  // next.config.ts no puede ver el prefijo de locale (/es/botes, /en/botes) y
  // dejaba de coincidir tras la migración a next-intl.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com"   },
      { protocol: "https", hostname: "placehold.co"        }, 
    ],
  },
};

export default withNextIntl(nextConfig);