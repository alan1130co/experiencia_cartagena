export interface Testimonio {
  id: string;
  nombre: string;
  ubicacion: string;
  /** URL de la foto del cliente. */
  foto?: string;
  /** Alt text accesible para la foto. */
  fotoAlt?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  testimonio: string;
  fecha: string;
  destacado?: boolean;
}
