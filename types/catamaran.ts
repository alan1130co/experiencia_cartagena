import type { Moneda, Caracteristica } from "./common";

/**
 * Catamarán Powercat (Leopard, Lagoon) disponible para alquiler.
 * Aparece en /catamaranes (listado) y /catamaranes/[slug] (detalle).
 */
export interface Catamaran {
  /** Identificador único interno (ej: "catamaran-valhalla"). */
  id: string;
  /** Segmento de URL: /catamaranes/[slug]. */
  slug: string;
  /** Nombre comercial (ej: "Valhalla"). */
  nombre: string;
  /** Marca del catamarán. */
  marca: "Leopard" | "Lagoon" | "otra";
  /** Modelo específico (ej: "Leopard 51", "Lagoon 440"). */
  modelo: string;

  // ── Descripción ──────────────────────────────────────────────────────────

  /** Máximo 120 caracteres — se muestra en cards del catálogo. */
  descripcionCorta: string;
  /** Descripción completa para la página de detalle. */
  descripcionLarga: string;

  // ── Capacidad y dimensiones ───────────────────────────────────────────────

  /** Capacidad máxima en temporada alta (mayo–diciembre). */
  capacidadVerano: number;
  /** Capacidad máxima en temporada baja (enero–abril). */
  capacidadInvierno: number;
  /** Longitud de la embarcación (ej: "51 ft"). */
  eslora: string;
  /** Número de cabinas para dormir. */
  cabinas: number;
  /** Número de baños a bordo. */
  banos?: number;
  /** Número de tripulantes incluidos. */
  tripulacion: number;

  // ── Precio ────────────────────────────────────────────────────────────────

  /** Precio de alquiler por día completo (grupo completo). */
  precioPorDia: number;
  /** Precio por persona adicional sobre la capacidad base. */
  precioPersonaAdicional?: number;
  moneda: Moneda;

  // ── Incluye / no incluye ──────────────────────────────────────────────────

  incluye: string[];
  noIncluye: string[];

  // ── Características visuales ──────────────────────────────────────────────

  caracteristicas: Caracteristica[];

  // ── Imágenes ──────────────────────────────────────────────────────────────

  imagenPrincipal: string;
  imagenes: string[];
  imagenAlt: string;

  // ── Destinos y logística ──────────────────────────────────────────────────

  destinosPosibles: string[];
  duracionTipica: string;

  // ── Flags ─────────────────────────────────────────────────────────────────

  destacado?: boolean;
  masPopular?: boolean;
  disponible: boolean;
  capacidadAdicional?: string;
}
