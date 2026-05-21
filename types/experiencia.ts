export interface Experiencia {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  duracion: string;
  precioDesde: number;
  moneda: "COP";
  imagen: string;
  imagenAlt: string;
  /** true = el precio es por persona; false/undefined = precio total */
  incluyePorPersona?: boolean;
}
