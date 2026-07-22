import type { Destino } from "@/types";

export const destinos: Destino[] = [
  {
    slug: "ciudad-amurallada",
    nombre: "Ciudad Amurallada",
    descripcionCorta:
      "El corazón histórico de Cartagena, Patrimonio de la Humanidad UNESCO.",
    descripcion:
      "Camina entre murallas coloniales de cuatro siglos de historia, plazas coloridas y calles de piedra. La Ciudad Amurallada es el alma de Cartagena de Indias, declarada Patrimonio de la Humanidad por la UNESCO en 1984.",
    imagen: "/images/destinos/ciudad-amurallada.jpg",
    imagenAlt:
      "Balcones coloniales de la Ciudad Amurallada de Cartagena",
    destacado: true,
    tags: ["Historia", "Cultura", "UNESCO", "Arquitectura"],
    coordenadas: { lat: 10.4236, lng: -75.5479 },
  },
  {
    slug: "islas-del-rosario",
    nombre: "Islas del Rosario",
    descripcionCorta:
      "Aguas cristalinas y arrecifes de coral a 45 minutos de Cartagena.",
    descripcion:
      "El Parque Nacional Natural Corales del Rosario y de San Bernardo alberga 27 islas rodeadas de aguas turquesa. Buceo, snorkel y descanso absoluto en el Caribe colombiano.",
    imagen: "/images/destinos/islas-del-rosario.jpg",
    imagenAlt:
      "Aguas turquesa de las Islas del Rosario en el Caribe colombiano",
    destacado: true,
    tags: ["Playa", "Naturaleza", "Buceo", "Snorkel"],
    coordenadas: { lat: 10.1667, lng: -75.7667 },
  },
  {
    slug: "bocagrande",
    nombre: "Bocagrande",
    descripcionCorta: "La zona hotelera moderna frente al Mar Caribe.",
    descripcion:
      "El barrio más cosmopolita de Cartagena combina playas urbanas, restaurantes de autor y una vida nocturna vibrante con el Caribe como telón de fondo.",
    imagen:
      "https://images.unsplash.com/photo-1596367407372-96cb88503db6?w=1200&q=80",
    imagenAlt: "Playa de Bocagrande con el horizonte de Cartagena al fondo",
    destacado: false,
    tags: ["Playa", "Gastronomía", "Vida nocturna"],
    coordenadas: { lat: 10.3924, lng: -75.5344 },
  },
  {
    slug: "getsemani",
    nombre: "Getsemaní",
    descripcionCorta:
      "El barrio más auténtico y colorido, cuna del arte urbano cartagenero.",
    descripcion:
      "Antes considerado peligroso, hoy Getsemaní es el barrio más vibrante de Cartagena. Murales imponentes, plazas llenas de vida y la gastronomía más auténtica de la ciudad.",
    imagen: "/images/destinos/getsemani.jpg",
    imagenAlt: "Murales coloridos del barrio Getsemaní en Cartagena",
    destacado: true,
    tags: ["Arte", "Cultura", "Gastronomía", "Auténtico"],
    coordenadas: { lat: 10.4189, lng: -75.5512 },
  },
  {
    slug: "playa-blanca",
    nombre: "Playa Blanca",
    descripcionCorta:
      "Una de las playas más hermosas del Caribe colombiano en la Isla Barú.",
    descripcion:
      "Arena blanca, agua cálida de color esmeralda y palmeras. Playa Blanca en la Isla Barú es el destino de playa por excelencia de la región de Cartagena.",
    imagen: "/images/destinos/playa-blanca.jpg",
    imagenAlt: "Arena blanca y palmeras de Playa Blanca en Barú",
    destacado: true,
    tags: ["Playa", "Relax", "Naturaleza"],
    coordenadas: { lat: 10.2089, lng: -75.6578 },
  },
];

export function getDestino(slug: string): Destino | undefined {
  return destinos.find((d) => d.slug === slug);
}

export function getDestinosDestacados(): Destino[] {
  return destinos.filter((d) => d.destacado);
}
