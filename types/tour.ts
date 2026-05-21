import type { Moneda, ItemItinerario } from "./common";

export type CategoriaTour = "cultural" | "playa" | "gastronomico" | "naturaleza" | "aventura";

export interface Tour {
  id: string;
  slug: string;
  nombre: string;
  categoria: CategoriaTour;
  descripcionCorta: string;
  descripcionLarga: string;

  // Logística
  duracion: string;
  duracionHoras: number;
  capacidadMinima: number;
  capacidadMaxima: number;
  horarios: string[];
  puntoEncuentro: string;

  // Precio
  precioPorPersona: number;
  moneda: Moneda;

  // Contenido
  incluye: string[];
  noIncluye: string[];
  queLlevar: string[];
  itinerario: ItemItinerario[];

  // Visual
  imagenPrincipal: string;
  imagenes: string[];
  imagenAlt: string;

  // Flags
  destacado?: boolean;
  popular?: boolean;
  disponible: boolean;
}
