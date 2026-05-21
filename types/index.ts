// Tipos compartidos
export type { Moneda, Caracteristica, ItemItinerario, DiaItinerario } from "./common";

// Flota
export type { Bote } from "./bote";
export type { Yate } from "./yate";
export type { Catamaran } from "./catamaran";

// Catálogo principal
export type { Tour, CategoriaTour } from "./tour";
export type { Paquete } from "./paquete";

// Contenido
export type { Destino } from "./destino";
export type { Experiencia } from "./experiencia";
export type { GaleriaImagen } from "./galeria";
export type { Testimonio } from "./testimonio";
export type { FAQ } from "./faq";

export interface BlogPost {
  slug: string;
  titulo: string;
  extracto: string;
  imagen: string;
  imagenAlt: string;
  /** Fecha en formato ISO 8601 (ej: "2025-06-15"). */
  fechaPublicacion: string;
  autor: string;
  tags: string[];
  /** Tiempo estimado de lectura en minutos. */
  tiempoLectura: number;
}
