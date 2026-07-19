export interface GaleriaImagen {
  id: string;
  src: string;
  alt: string;
  tamaño: "grande" | "pequeña";
  destacada: boolean;
}
