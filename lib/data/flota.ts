import type { Bote, Yate, Catamaran } from "@/types";
import { botes } from "./botes";
import { yates } from "./yates";
import { catamaranes } from "./catamaranes";

export type EmbarcacionConCategoria =
  | (Bote & { _categoria: "bote" })
  | (Yate & { _categoria: "yate" })
  | (Catamaran & { _categoria: "catamaran" });

export const flotaCompleta: EmbarcacionConCategoria[] = [
  ...botes.map((b) => ({ ...b, _categoria: "bote" as const })),
  ...yates.map((y) => ({ ...y, _categoria: "yate" as const })),
  ...catamaranes.map((c) => ({ ...c, _categoria: "catamaran" as const })),
];

export function getEmbarcacionBySlug(slug: string): EmbarcacionConCategoria | undefined {
  return flotaCompleta.find((e) => e.slug === slug);
}

export function getRelacionadas(
  actual: EmbarcacionConCategoria,
  limite: number = 3
): EmbarcacionConCategoria[] {
  return flotaCompleta
    .filter((e) => e._categoria === actual._categoria && e.slug !== actual.slug)
    .slice(0, limite);
}
