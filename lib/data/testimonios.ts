import type { Testimonio } from "@/types";

export const testimonios: Testimonio[] = [
  {
    id: "t1",
    nombre: "María Fernández",
    ubicacion: "Bogotá, Colombia",
    /** TODO: Reemplazar por foto real del cliente. Placeholder: mujer sonriente */
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    fotoAlt: "María Fernández, cliente de Experiencias Tour Cartagena",
    rating: 5,
    testimonio:
      "Una experiencia increíble en familia. El yate FIRPOL fue perfecto para los niños y el capitán muy profesional. Definitivamente volveremos.",
    fecha: "Marzo 2026",
    paqueteSlug: "aventura-caribena",
    paquete: "Aventura Caribeña",
    destacado: true,
  },
  {
    id: "t2",
    nombre: "Carlos Rodríguez",
    ubicacion: "Medellín, Colombia",
    /** TODO: Reemplazar por foto real del cliente. Placeholder: hombre profesional */
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    fotoAlt: "Carlos Rodríguez, cliente satisfecho",
    rating: 5,
    testimonio:
      "Organizamos mi despedida de soltero y fue épico. El LUXURY 42FT con la mini cocina y el sonido JL hizo que el día fuera inolvidable. 100% recomendado.",
    fecha: "Febrero 2026",
    paqueteSlug: "escapada-fin-semana",
    paquete: "Escapada Fin de Semana",
    destacado: true,
  },
  {
    id: "t3",
    nombre: "Sofía Martínez",
    ubicacion: "Cali, Colombia",
    /** TODO: Reemplazar por foto real del cliente. Placeholder: mujer joven viajera */
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    fotoAlt: "Sofía Martínez, viajera",
    rating: 5,
    testimonio:
      "Mi luna de miel fue mágica. La atención al detalle, el yate de lujo, la cena en la muralla... todo superó nuestras expectativas. Gracias Experiencias Tour Cartagena.",
    fecha: "Enero 2026",
    paqueteSlug: "luna-miel-premium",
    paquete: "Luna de Miel Premium",
    destacado: true,
  },
];

export const testimoniosDestacados = testimonios.filter((t) => t.destacado);
