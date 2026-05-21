import type { Moneda, Caracteristica } from "./common";

/**
 * Yate con cabinas para dormir y cocinar a bordo.
 * Embarcaciones para estadías nocturnas o chárter de varios días.
 * Aparece en /yates (listado) y /yates/[slug] (detalle).
 */
export interface Yate {
  /** Identificador único interno (ej: "yate-wellcraft-33"). */
  id: string;
  /** Segmento de URL: /yates/[slug]. */
  slug: string;
  /** Nombre comercial del yate (ej: "Wellcraft 33ft"). */
  nombre: string;
  /** Tipo de embarcación. */
  tipo: "yate-deportivo" | "yate-lujo" | "yate-crucero";

  // ── Descripción ──────────────────────────────────────────────────────────

  /** Máximo 120 caracteres — se muestra en cards del catálogo. */
  descripcionCorta: string;
  /** Descripción completa para la página de detalle. */
  descripcionLarga: string;

  // ── Capacidad y dimensiones ───────────────────────────────────────────────

  /** Número máximo de pasajeros. */
  capacidadPersonas: number;
  /** Longitud de la embarcación (ej: "33 ft"). */
  eslora: string;
  /** Número de cabinas para dormir (obligatorio en yates). */
  cabinas: number;
  /** Número de baños a bordo. */
  banos?: number;
  /** true = tiene cocina equipada a bordo. */
  tieneCocina?: boolean;
  /** true = tiene aire acondicionado en cabinas. */
  tieneAire?: boolean;
  /** Número de tripulantes incluidos. */
  tripulacion: number;

  // ── Precio ────────────────────────────────────────────────────────────────

  /** Precio de alquiler por día completo. */
  precioPorDia: number;
  /** Precio por hora, si se ofrece alquiler por horas. */
  precioPorHora?: number;
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
