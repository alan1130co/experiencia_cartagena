import type { Moneda, Caracteristica } from "./common";

/**
 * Bote o lancha disponible para alquiler por día.
 * Embarcaciones rápidas sin cabinas para pernoctar.
 * Aparece en /botes (listado) y /botes/[slug] (detalle).
 */
export interface Bote {
  /** Identificador único interno (ej: "bote-firpol-42"). */
  id: string;
  /** Segmento de URL: /botes/[slug]. */
  slug: string;
  /** Nombre comercial del bote (ej: "FIRPOL 42FT"). */
  nombre: string;
  /** Tipo de embarcación. */
  tipo: "lancha" | "lancha-lujo" | "bote";

  // ── Descripción ──────────────────────────────────────────────────────────

  /** Máximo 120 caracteres — se muestra en cards del catálogo. */
  descripcionCorta: string;
  /** Descripción completa para la página de detalle. */
  descripcionLarga: string;

  // ── Capacidad y dimensiones ───────────────────────────────────────────────

  /** Número máximo de pasajeros permitidos. */
  capacidadPersonas: number;
  /** Longitud de la embarcación (ej: "42 ft"). */
  eslora: string;
  /** Número de tripulantes incluidos (capitán + marineros). */
  tripulacion: number;

  // ── Precio ────────────────────────────────────────────────────────────────

  /** Precio de alquiler por día completo. */
  precioPorDia: number;
  /** Precio por hora, si se ofrece alquiler por horas. */
  precioPorHora?: number;
  moneda: Moneda;

  // ── Incluye / no incluye ──────────────────────────────────────────────────

  /** Lista de elementos incluidos en el precio. */
  incluye: string[];
  /** Lista de elementos NO incluidos. */
  noIncluye: string[];

  // ── Características visuales ──────────────────────────────────────────────

  /** Chips de características mostrados en la card y el detalle. */
  caracteristicas: Caracteristica[];

  // ── Imágenes ──────────────────────────────────────────────────────────────

  /** Path de la imagen principal (card + hero del detalle). */
  imagenPrincipal: string;
  /** Array de paths para el slider de galería en el detalle. */
  imagenes: string[];
  /** Alt text descriptivo para SEO y accesibilidad. */
  imagenAlt: string;

  // ── Destinos y logística ──────────────────────────────────────────────────

  /** Destinos a los que opera este bote (ej: ["Islas del Rosario", "Barú"]). */
  destinosPosibles: string[];
  /** Duración típica del recorrido (ej: "8 horas", "Día completo"). */
  duracionTipica: string;

  // ── Flags ─────────────────────────────────────────────────────────────────

  /** true = aparece en la sección "Botes Destacados" de la home. */
  destacado?: boolean;
  /** true = badge "MÁS POPULAR" en card y catálogo. Idealmente uno solo. */
  masPopular?: boolean;
  /** false = se oculta del catálogo. */
  disponible: boolean;
  /** Nota adicional sobre capacidad especial o restricciones. */
  capacidadAdicional?: string;
}
