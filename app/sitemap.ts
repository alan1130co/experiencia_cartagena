import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import { destinos } from "@/lib/data/destinos";
import { paquetes } from "@/lib/data/paquetes";
import { toursData } from "@/lib/data/tours";
import { flotaCompleta } from "@/lib/data/flota";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

const { locales, defaultLocale } = routing;

/**
 * Genera una entrada por locale para `path`, cada una apuntando a su
 * prefijo (`/es`, `/en`) y con `alternates.languages` hacia las demás
 * variantes — necesario porque `localePrefix` es "always", así que la URL
 * sin prefijo nunca es la que sirve el sitio (redirige).
 */
function localizedEntries(
  path: string,
  changeFrequency: ChangeFrequency,
  priority: number,
  lastModified: Date
): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const languages = Object.fromEntries([
    ...locales.map((locale) => [locale, `${base}/${locale}${path}`]),
    ["x-default", `${base}/${defaultLocale}${path}`],
  ]);

  return locales.map((locale) => ({
    url: `${base}/${locale}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = (
    [
      ["", "weekly", 1],
      ["/flota", "weekly", 0.95],
      ["/destinos", "weekly", 0.9],
      ["/tours", "weekly", 0.9],
      ["/paquetes", "weekly", 0.9],
      ["/nosotros", "monthly", 0.7],
      ["/blog", "weekly", 0.7],
      ["/contacto", "monthly", 0.6],
    ] as const
  ).flatMap(([path, changeFrequency, priority]) =>
    localizedEntries(path, changeFrequency, priority, now)
  );

  const destinoEntries = destinos.flatMap((d) =>
    localizedEntries(`/destinos/${d.slug}`, "monthly", 0.85, now)
  );

  const tourEntries = toursData.flatMap((t) =>
    localizedEntries(`/tours/${t.slug}`, "monthly", 0.85, now)
  );

  const paqueteEntries = paquetes.flatMap((p) =>
    localizedEntries(`/paquetes/${p.slug}`, "monthly", 0.85, now)
  );

  // Las 18 fichas reales de embarcaciones viven en /flota/{slug}, no en
  // /botes/{slug} (esa ruta dinámica no existe y da 404).
  const flotaEntries = flotaCompleta.flatMap((e) =>
    localizedEntries(`/flota/${e.slug}`, "monthly", 0.85, now)
  );

  return [
    ...staticEntries,
    ...destinoEntries,
    ...tourEntries,
    ...paqueteEntries,
    ...flotaEntries,
  ];
}
