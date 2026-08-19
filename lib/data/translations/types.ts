/**
 * Formas de los overlays de traducción al inglés. Cada archivo
 * `translations/*.en.ts` exporta un `Record<slug, XTranslation>` — solo los
 * campos de texto libre, nunca precios/ids/imágenes/coordenadas.
 */

export interface EmbarcacionTranslation {
  /** Omitir si el nombre es un nombre propio/marca que no se traduce (ej: "FIRPOL 42FT", "Valhalla"). */
  nombre?: string;
  descripcionCorta: string;
  descripcionLarga: string;
  incluye: string[];
  noIncluye: string[];
  /** Alineado por índice con `caracteristicas` del registro fuente — mismo largo y orden. */
  caracteristicas: string[];
  imagenAlt: string;
  capacidadAdicional?: string;
}

export interface TourTranslation {
  titulo?: string;
  descripcionBreve: string;
  precioDesde: string;
  horarios: string;
  ubicacionSalida: string;
  incluye: string[];
  noIncluye: string[];
}

export interface DestinoTranslation {
  nombre?: string;
  descripcionCorta: string;
  descripcion: string;
  imagenAlt: string;
  tags: string[];
}

export interface TestimonioTranslation {
  testimonio: string;
  fecha?: string;
}
