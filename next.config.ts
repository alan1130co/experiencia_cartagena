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
  //
  // /images/:path* cubre los assets estáticos servidos directo desde
  // public/images (ej. hero-poster.webp) — sin esta regla también caían en
  // el default `max-age=0` de Next para archivos de public/. No se usa
  // `immutable`/max-age de 1 año como en los chunks hasheados de
  // _next/static porque estos archivos se reemplazan por nombre fijo
  // (ver public/images/hero/README.md) — 7 días + stale-while-revalidate
  // de 30 evita servir contenido desactualizado por mucho tiempo tras un
  // reemplazo, misma política que ya existía para /videos/.
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
      {
        source: "/images/:path*",
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