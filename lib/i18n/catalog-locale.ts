/**
 * Helpers de localización para el contenido de catálogo (lib/data/*.ts).
 * Los datos "fuente" viven en español; el inglés se aplica como overlay
 * desde lib/data/translations/*.en.ts, indexado por `slug`. Campos
 * estructurales (precios, coordenadas, imágenes) nunca se traducen.
 */
import type { Caracteristica } from "@/types";

export type Locale = "es" | "en";

// Valores repetidos en casi todos los registros de flota — se traducen una
// sola vez aquí en vez de pedirle a cada archivo de traducción que los repita.
const PLACE_NAMES_EN: Record<string, string> = {
  "Islas del Rosario": "Rosario Islands",
  "Barú": "Barú",
  "Bahía de Cartagena": "Cartagena Bay",
};

const DURATIONS_EN: Record<string, string> = {
  "8 horas": "8 hours",
};

export function translatePlace(value: string, locale: Locale): string {
  if (locale !== "en") return value;
  return PLACE_NAMES_EN[value] ?? value;
}

export function translatePlaces(values: string[], locale: Locale): string[] {
  return values.map((v) => translatePlace(v, locale));
}

export function translateDuration(value: string, locale: Locale): string {
  if (locale !== "en") return value;
  return DURATIONS_EN[value] ?? value;
}

export function mergeCaracteristicas(
  base: Caracteristica[],
  labels: string[] | undefined,
): Caracteristica[] {
  if (!labels) return base;
  return base.map((c, i) => (labels[i] ? { ...c, label: labels[i] } : c));
}
