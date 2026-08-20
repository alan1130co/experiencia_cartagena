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
    formats: ["image/avif", "image/webp"],
  },
  // El Hero remonta el <video> en cada cambio de idioma (navegación /es <->
  // /en — inevitable, ver components/sections/Hero/Hero.tsx). Sin esta
  // cabecera el archivo se servía con `Cache-Control: public, max-age=0`,
  // forzando una revalidación/descarga completa por red en cada remount —
  // invisible en desktop pero lento (o bloqueante) en redes móviles.
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);

// Habilita bindings de Cloudflare (env vars, R2, etc.) dentro de `next dev`.
// Debe llamarse en el archivo de config de Next.js — no requiere `await`.
// https://opennext.js.org/cloudflare/get-started
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();