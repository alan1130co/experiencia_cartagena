import type { Experiencia } from "@/types/experiencia";

export const experiencias: Experiencia[] = [
  {
    id: "exp-atardecer-yate",
    slug: "atardecer-yate",
    nombre: "Atardecer en Yate Privado",
    descripcion:
      "Despide el día navegando con copa de champagne mientras el sol se sumerge en el Caribe.",
    duracion: "3 horas",
    precioDesde: 1500000,
    moneda: "COP",
    incluyePorPersona: false,
    /** TODO: Reemplazar por foto real del cliente. Placeholder: atardecer dorado en yate privado en el Caribe */
    imagen: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
    imagenAlt: "Atardecer dorado en yate privado por el Caribe colombiano",
  },
  {
    id: "exp-tour-fotografico",
    slug: "tour-fotografico",
    nombre: "Tour Fotográfico Colonial",
    descripcion:
      "Recorre los rincones más fotogénicos de la Ciudad Amurallada con un fotógrafo profesional.",
    duracion: "3 horas",
    precioDesde: 180000,
    moneda: "COP",
    incluyePorPersona: true,
    /** TODO: Reemplazar por foto real del cliente. Placeholder: calles coloniales de Cartagena */
    imagen: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=80",
    imagenAlt: "Tour fotográfico por calles coloniales de Cartagena",
  },
  {
    id: "exp-cena-muralla",
    slug: "cena-muralla",
    nombre: "Cena Gastronómica en Muralla",
    descripcion:
      "Experiencia gourmet con vista al mar Caribe sobre las murallas de Cartagena.",
    duracion: "3 horas",
    precioDesde: 250000,
    moneda: "COP",
    incluyePorPersona: true,
    /** TODO: Reemplazar por foto real del cliente. Placeholder: cena romántica con vista al Caribe */
    imagen: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    imagenAlt: "Cena romántica sobre las murallas de Cartagena con vista al Caribe",
  },
];

export function getExperiencia(slug: string): Experiencia | undefined {
  return experiencias.find((e) => e.slug === slug);
}
