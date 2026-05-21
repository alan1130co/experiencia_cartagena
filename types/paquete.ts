import type { Moneda, DiaItinerario } from "./common";

/**
 * Paquete turístico multi-actividad.
 * Combina tours, yate, hospedaje y traslados en una oferta unificada.
 * Aparece en /paquetes (listado) y /paquetes/[slug] (detalle).
 */
export interface Paquete {
  /** Identificador único interno (ej: "paquete-luna-de-miel"). */
  id: string;
  /** Segmento de URL: /paquetes/[slug]. */
  slug: string;
  /** Nombre comercial del paquete. */
  nombre: string;
  /** Segmento de mercado al que apunta el paquete. */
  tipo:
    | "escapada"
    | "aventura"
    | "luna-de-miel"
    | "familiar"
    | "corporativo";

  // ── Descripción ──────────────────────────────────────────────────────────

  /** Máximo 120 caracteres — para cards del catálogo. */
  descripcionCorta: string;
  /** Descripción completa para la página de detalle. */
  descripcionLarga: string;

  // ── Duración ──────────────────────────────────────────────────────────────

  /** Número de días del paquete. */
  duracionDias: number;
  /** Número de noches (generalmente duracionDias - 1). */
  duracionNoches: number;

  // ── Precio ────────────────────────────────────────────────────────────────

  /** Precio por persona con todo incluido según el paquete. */
  precioPorPersona: number;
  moneda: Moneda;
  /** Precio sin descuento — mostrar tachado si hay oferta activa. */
  precioBase?: number;
  /** Porcentaje de descuento activo (ej: 15 significa 15%). */
  descuento?: number;

  // ── Contenido del paquete ─────────────────────────────────────────────────

  /** IDs de los tours incluidos (referencia a Tour.id). */
  incluyeToursIds: string[];
  /** ID del yate incluido, si aplica (referencia a Yate.id). */
  incluyeYateId?: string;
  /** true = el paquete incluye noches de hospedaje. */
  incluyeHospedaje: boolean;
  /** Descripción del alojamiento (ej: "Hotel boutique 4 estrellas en el centro"). */
  tipoHospedaje?: string;
  /** true = el paquete incluye traslados aeropuerto/hotel. */
  incluyeTransporte: boolean;
  /** true = el paquete incluye comidas según tipoAlimentacion. */
  incluyeAlimentacion: boolean;
  /** Régimen de alimentación (ej: "Desayuno y cena", "Todo incluido"). */
  tipoAlimentacion?: string;

  // ── Itinerario día a día ──────────────────────────────────────────────────

  /** Programa detallado por día, incluido el hospedaje de cada noche. */
  itinerarioDias: DiaItinerario[];

  // ── Capacidad ─────────────────────────────────────────────────────────────

  /** Número mínimo de personas para contratar el paquete. */
  capacidadMin: number;
  /** Número máximo de personas por grupo. */
  capacidadMax: number;

  // ── Imágenes ──────────────────────────────────────────────────────────────

  /** Path o URL de la imagen principal (card + hero). */
  imagenPrincipal: string;
  /** Galería de imágenes adicionales para el detalle. */
  imagenes: string[];
  /** Alt text para SEO y accesibilidad. */
  imagenAlt: string;
  /** Lista breve de ítems incluidos — para mostrar en la card de home. */
  incluye?: string[];
  /** Lista de ítems NO incluidos en el paquete. */
  noIncluye?: string[];
  /** Qué llevar / recomendaciones para el viajero. */
  queLlevar?: string[];

  // ── Flags ─────────────────────────────────────────────────────────────────

  /** true = aparece en la sección "Paquetes destacados" de la home. */
  destacado?: boolean;
  /** true = muestra badge "Más popular" en la card. */
  masPopular?: boolean;
  /** false = se oculta del catálogo. */
  disponible: boolean;
  /** Fecha límite de validez de la oferta en formato ISO 8601 (ej: "2025-12-31"). */
  validoHasta?: string;
}
