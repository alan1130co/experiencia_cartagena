import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Nombre de archivo intencionalmente "middleware.ts" (convención deprecada
// desde Next.js 16) en vez de "proxy.ts": el runtime de `proxy` está fijo a
// `nodejs` y no se puede configurar, y @opennextjs/cloudflare (el adaptador
// para desplegar en Cloudflare Workers) todavía no soporta ese modo — solo
// Edge Runtime, que "middleware.ts" sigue permitiendo. Ver el aviso oficial
// en la guía de migración a Next 16: "The edge runtime is NOT supported in
// `proxy`... If you want to continue using the edge runtime, keep using
// `middleware`."
export const middleware = createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
