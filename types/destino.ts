export interface Destino {
  slug: string;
  nombre: string;
  descripcionCorta: string;
  descripcion: string;
  imagen: string;
  imagenAlt: string;
  destacado: boolean;
  tags: string[];
  coordenadas?: { lat: number; lng: number };
}
