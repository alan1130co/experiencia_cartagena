import type { Bote, Yate, Catamaran } from "@/types";
import type { Locale } from "@/lib/i18n/catalog-locale";
import { botes, getBotes } from "./botes";
import { yates, getYates } from "./yates";
import { catamaranes, getCatamaranes } from "./catamaranes";

export type EmbarcacionConCategoria =
  | (Bote & { _categoria: "bote" })
  | (Yate & { _categoria: "yate" })
  | (Catamaran & { _categoria: "catamaran" });

// Spanish-only, slug/id shape — usado por sitemap.ts y generateStaticParams,
// que no necesitan texto localizado, solo la lista de slugs.
export const flotaCompleta: EmbarcacionConCategoria[] = [
  ...botes.map((b) => ({ ...b, _categoria: "bote" as const })),
  ...yates.map((y) => ({ ...y, _categoria: "yate" as const })),
  ...catamaranes.map((c) => ({ ...c, _categoria: "catamaran" as const })),
];

export function getFlotaCompleta(locale: Locale): EmbarcacionConCategoria[] {
  return [
    ...getBotes(locale).map((b) => ({ ...b, _categoria: "bote" as const })),
    ...getYates(locale).map((y) => ({ ...y, _categoria: "yate" as const })),
    ...getCatamaranes(locale).map((c) => ({ ...c, _categoria: "catamaran" as const })),
  ];
}

export function getEmbarcacionBySlug(
  slug: string,
  locale: Locale,
): EmbarcacionConCategoria | undefined {
  return getFlotaCompleta(locale).find((e) => e.slug === slug);
}

export function getRelacionadas(
  actual: EmbarcacionConCategoria,
  locale: Locale,
  limite: number = 3,
): EmbarcacionConCategoria[] {
  return getFlotaCompleta(locale)
    .filter((e) => e._categoria === actual._categoria && e.slug !== actual.slug)
    .slice(0, limite);
}
