import type { CategoriaTour } from "@/types/tour";

export interface CategoriaInfo {
  id: CategoriaTour;
  label: string;
  icono: string;
  color: string;
  descripcion: string;
}

export const categoriasTours: CategoriaInfo[] = [
  {
    id: "cultural",
    label: "Cultural",
    icono: "Landmark",
    color: "bg-blue-500",
    descripcion: "Historia, arquitectura y patrimonio",
  },
  {
    id: "playa",
    label: "Playa",
    icono: "Waves",
    color: "bg-cyan-500",
    descripcion: "Islas paradisíacas y playas de ensueño",
  },
  {
    id: "gastronomico",
    label: "Gastronómico",
    icono: "UtensilsCrossed",
    color: "bg-amber-500",
    descripcion: "Sabores típicos del Caribe colombiano",
  },
  {
    id: "naturaleza",
    label: "Naturaleza",
    icono: "TreePine",
    color: "bg-green-500",
    descripcion: "Manglares, fauna y flora caribeña",
  },
  {
    id: "aventura",
    label: "Aventura",
    icono: "Mountain",
    color: "bg-red-500",
    descripcion: "Experiencias únicas para los más atrevidos",
  },
];

export function getCategoriaInfo(id: CategoriaTour): CategoriaInfo | undefined {
  return categoriasTours.find((c) => c.id === id);
}
