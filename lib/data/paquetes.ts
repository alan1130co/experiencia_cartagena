import type { Paquete } from "@/types";

export const paquetes: Paquete[] = [
  // ── PAQUETE 1: Escapada de Fin de Semana ───────────────────────────────────
  {
    id: "paquete-escapada-fin-semana",
    slug: "escapada-fin-semana",
    nombre: "Escapada de Fin de Semana",
    tipo: "escapada",
    descripcionCorta:
      "Lo esencial de Cartagena en 2 días: ciudad colonial, playa caribeña, hotel 3-4 estrellas y traslados incluidos.",
    descripcionLarga:
      "La forma perfecta de conocer Cartagena sin perder ni un detalle. En solo 2 días y 1 noche, esta escapada combina el mejor tour cultural del Centro Histórico con una jornada completa en Playa Blanca en Isla Barú, todo con hospedaje en hotel 3-4 estrellas y traslados desde y hacia el aeropuerto incluidos. Diseñado para quienes tienen poco tiempo pero quieren vivir Cartagena de verdad, sin improvisar.",
    duracionDias: 2,
    duracionNoches: 1,
    precioPorPersona: 1200000,
    precioBase: 1350000,
    descuento: 11,
    moneda: "COP",
    incluye: [
      "Tour Centro Histórico (4 horas)",
      "Día completo Islas del Rosario en bote",
      "Cena gastronómica en muralla",
      "Transporte entre actividades",
    ],
    incluyeToursIds: ["tour-centro-historico", "tour-playa-blanca"],
    incluyeHospedaje: true,
    tipoHospedaje: "Hotel 3-4 estrellas en el Centro Histórico o Bocagrande",
    incluyeTransporte: true,
    incluyeAlimentacion: true,
    tipoAlimentacion: "Desayunos incluidos los 2 días",
    itinerarioDias: [
      {
        dia: 1,
        titulo: "Llegada y Ciudad Amurallada",
        actividades: [
          "Recepción en el aeropuerto o terminal con traslado privado al hotel",
          "Check-in y tiempo libre para instalarse y refrescarse",
          "Tour Centro Histórico de 4 horas con guía bilingüe (incluido)",
          "Tarde libre para explorar plazas, cafés y restaurantes locales",
          "Cena libre en restaurante recomendado por el guía",
        ],
        hospedaje: "Hotel 3-4★ en zona amurallada o Bocagrande",
      },
      {
        dia: 2,
        titulo: "Playa Blanca y Regreso",
        actividades: [
          "Desayuno incluido en el hotel",
          "Tour día completo a Playa Blanca en Isla Barú — lancha incluida",
          "Almuerzo libre en los restaurantes de la playa (efectivo recomendado)",
          "Regreso a Cartagena al atardecer con vista sobre la bahía",
          "Traslado desde el muelle al aeropuerto o terminal",
        ],
      },
    ],
    capacidadMin: 2,
    capacidadMax: 15,
    /** TODO: Reemplazar por foto real del cliente. Placeholder: pareja atardecer yate Cartagena */
    imagenPrincipal:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=80",
      "https://placehold.co/1200x800/005371/ffffff?text=Hotel+Colonial+Cartagena", // TODO: reemplazar con foto real
    ],
    imagenAlt:
      "Pareja disfrutando atardecer en yate en Cartagena",
    noIncluye: [
      "Vuelos y tiquetes aéreos",
      "Seguro de viaje (recomendado)",
      "Gastos personales y compras",
      "Actividades no descritas en el itinerario",
      "Propinas",
    ],
    queLlevar: [
      "Ropa cómoda y fresca para el calor del Caribe",
      "Bloqueador solar (preferiblemente biodegradable)",
      "Gorra/sombrero y gafas de sol",
      "Cámara o celular con batería cargada",
      "Efectivo para gastos personales",
      "Ropa de baño y toalla",
    ],
    destacado: true,
    disponible: true,
  },

  // ── PAQUETE 2: Aventura Caribeña (MÁS POPULAR) ────────────────────────────
  {
    id: "paquete-aventura-caribena",
    slug: "aventura-caribena",
    nombre: "Aventura Caribeña",
    tipo: "aventura",
    descripcionCorta:
      "4 días al máximo: ciudad colonial, Islas del Rosario, catamarán privado y gastronomía caribeña — con 15% de descuento por temporada.",
    descripcionLarga:
      "Nuestro paquete más completo y el favorito absoluto de quienes quieren vivir Cartagena de principio a fin. En 4 días y 3 noches combinas lo mejor de la Ciudad Amurallada, un día privado en el Catamarán Celeste hacia las Islas del Rosario con snorkel incluido, el tour de mariscos en isla y el recorrido gastronómico más auténtico de Getsemaní. Todo con hospedaje en hotel 4 estrellas, traslados y desayunos incluidos. Actualmente con 15% de descuento por temporada baja.",
    duracionDias: 4,
    duracionNoches: 3,
    precioPorPersona: 2950000,
    precioBase: 3500000,
    descuento: 16,
    moneda: "COP",
    incluye: [
      "Tour Centro Histórico",
      "2 días de yate privado (FIRPOL 42FT)",
      "Tour Playa Blanca",
      "3 noches de hotel en Centro Histórico",
      "Desayunos incluidos",
    ],
    incluyeToursIds: [
      "tour-centro-historico",
      "tour-islas-rosario",
      "tour-gastronomico",
    ],
    incluyeHospedaje: true,
    tipoHospedaje: "Hotel 4 estrellas — Bocagrande o Centro Histórico",
    incluyeTransporte: true,
    incluyeAlimentacion: true,
    tipoAlimentacion:
      "Desayunos diarios + almuerzo de mariscos incluido en el tour de Islas del Rosario",
    itinerarioDias: [
      {
        dia: 1,
        titulo: "Llegada y bienvenida a Cartagena",
        actividades: [
          "Recepción en el aeropuerto con traslado privado al hotel",
          "Check-in y orientación del paquete con el coordinador de la agencia",
          "Tour Centro Histórico de 4 horas con guía bilingüe (incluido)",
          "Tarde libre para explorar Getsemaní",
          "Cena libre en restaurante del centro — el guía recomienda los mejores",
        ],
        hospedaje: "Hotel 4★ — Bocagrande o Centro Histórico",
      },
      {
        dia: 2,
        titulo: "Islas del Rosario — Snorkel y Mariscos",
        actividades: [
          "Desayuno en el hotel",
          "Tour día completo Islas del Rosario: snorkel en arrecife + playa + almuerzo de mariscos (todo incluido)",
          "Regreso a Cartagena al atardecer",
          "Tarde libre para descansar y cenar",
        ],
        hospedaje: "Hotel 4★",
      },
      {
        dia: 3,
        titulo: "Día en Catamarán Celeste — Privado",
        actividades: [
          "Desayuno en el hotel",
          "Día completo en Catamarán Celeste — uso exclusivo del grupo",
          "Snorkel en puntos secretos, música a bordo, frutas y bebidas incluidas",
          "Parada en Playa Blanca o Isla Rosario según condiciones del mar",
          "Atardecer en el Caribe desde la cubierta",
          "Regreso al muelle y traslado al hotel",
        ],
        hospedaje: "Hotel 4★",
      },
      {
        dia: 4,
        titulo: "Gastronomía y Despedida",
        actividades: [
          "Desayuno en el hotel",
          "Tour Gastronómico Cartagenero por Getsemaní (incluido)",
          "Tiempo libre para compras en Las Bóvedas y el centro",
          "Check-out del hotel",
          "Traslado al aeropuerto o terminal",
        ],
      },
    ],
    capacidadMin: 2,
    capacidadMax: 15,
    /** TODO: Reemplazar por foto real del cliente. Placeholder: yate navegando atardecer Caribe colombiano */
    imagenPrincipal:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
      "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
      "https://placehold.co/1200x800/2a6b8a/ffffff?text=Bote+Privado+Islas+Rosario", // TODO: reemplazar con foto real
    ],
    imagenAlt:
      "Yate navegando hacia el atardecer en el Caribe colombiano",
    noIncluye: [
      "Vuelos y tiquetes aéreos",
      "Seguro de viaje (recomendado)",
      "Gastos personales y souvenirs",
      "Bebidas alcohólicas fuera del paquete",
      "Propinas al guía y al personal",
    ],
    queLlevar: [
      "Ropa cómoda y fresca para el calor del Caribe",
      "Bloqueador solar biodegradable",
      "Gorra/sombrero y gafas de sol",
      "Cámara o celular con batería cargada",
      "Efectivo para gastos personales",
      "Ropa de baño y toalla para días de playa",
    ],
    destacado: true,
    masPopular: true,
    disponible: true,
  },

  // ── PAQUETE 3: Luna de Miel Premium ───────────────────────────────────────
  {
    id: "paquete-luna-de-miel",
    slug: "luna-de-miel-premium",
    nombre: "Luna de Miel Premium",
    tipo: "luna-de-miel",
    descripcionCorta:
      "5 días en el Caribe para dos: yate de lujo privado, hotel boutique 5 estrellas, cena romántica de autor y el tour fotográfico al amanecer.",
    descripcionLarga:
      "El paquete más romántico y exclusivo de nuestra colección. Diseñado para parejas que quieren celebrar su amor en el rincón más bello del Caribe colombiano. Cinco días y cuatro noches en un hotel boutique de lujo con suite y vista al mar, un día completamente privado en el Yate Imperial con chef y tripulación completa, el tour fotográfico al amanecer para immortalizar el viaje, una cena romántica de autor y un recorrido gastronómico por Getsemaní. Cada detalle ha sido elegido para que su luna de miel en Cartagena sea absolutamente perfecta.",
    duracionDias: 5,
    duracionNoches: 4,
    precioPorPersona: 5500000,
    precioBase: 6500000,
    descuento: 15,
    moneda: "COP",
    incluye: [
      "Hotel boutique en Ciudad Amurallada (4 noches)",
      "2 días yate de lujo privado",
      "Cena romántica en muralla",
      "Spa para parejas",
      "Atardecer en yate con champagne",
    ],
    incluyeToursIds: [
      "tour-centro-historico",
      "tour-fotografico",
      "tour-gastronomico",
    ],
    incluyeHospedaje: true,
    tipoHospedaje: "Hotel boutique 5 estrellas — Suite con vista al mar o patio colonial",
    incluyeTransporte: true,
    incluyeAlimentacion: true,
    tipoAlimentacion:
      "Desayunos diarios + cena romántica de autor incluida la primera noche",
    itinerarioDias: [
      {
        dia: 1,
        titulo: "Llegada romántica a Cartagena",
        actividades: [
          "Recepción VIP en el aeropuerto con señalización personalizada",
          "Traslado en vehículo privado climatizado al hotel",
          "Check-in en suite con decoración de bienvenida: flores, champagne y fresas",
          "Cena romántica de autor incluida en el restaurante del hotel o terraza privada",
        ],
        hospedaje: "Hotel boutique 5★ — Suite con vista al mar",
      },
      {
        dia: 2,
        titulo: "Tour Fotográfico al Amanecer",
        actividades: [
          "Tour fotográfico al amanecer (5:30 AM) con fotógrafo profesional — todo incluido",
          "Desayuno típico incluido al finalizar el tour",
          "Tarde de relax en el hotel — spa disponible (no incluido, precio especial)",
          "Tiempo libre para explorar el centro histórico como pareja",
        ],
        hospedaje: "Hotel boutique 5★",
      },
      {
        dia: 3,
        titulo: "Día Privado en el Yate Imperial",
        actividades: [
          "Desayuno en la habitación o terraza del hotel",
          "Día completo exclusivo en el Yate Imperial — solo la pareja + tripulación de 5",
          "Desayuno continental y almuerzo gourmet preparados por el chef a bordo",
          "Snorkel en las Islas del Rosario",
          "Brindis al atardecer en el mar con coctel de bienvenida",
          "Regreso al hotel al anochecer",
        ],
        hospedaje: "Hotel boutique 5★",
      },
      {
        dia: 4,
        titulo: "Ciudad Colonial y Gastronomía",
        actividades: [
          "Desayuno en el hotel",
          "Tour privado por el Centro Histórico con guía bilingüe (incluido)",
          "Tour Gastronómico por Getsemaní con degustaciones (incluido)",
          "Tarde libre para compras de artesanías y emeraldas colombianas",
          "Cena libre en restaurante de autor seleccionado por la agencia",
        ],
        hospedaje: "Hotel boutique 5★",
      },
      {
        dia: 5,
        titulo: "Despedida al Caribe",
        actividades: [
          "Desayuno especial en la habitación o terraza con vista al mar",
          "Tiempo libre hasta hora de check-out",
          "Sesión de fotos de recuerdo en las murallas (guía fotográfico disponible — precio especial)",
          "Traslado VIP al aeropuerto con asistencia del coordinador",
        ],
      },
    ],
    capacidadMin: 2,
    capacidadMax: 2,
    /** TODO: Reemplazar por foto real del cliente. Placeholder: yate de lujo aguas turquesa Caribe */
    imagenPrincipal:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
      "https://placehold.co/1200x800/6f4309/ffffff?text=Suite+Vista+Mar+Cartagena", // TODO: reemplazar con foto real
      "https://placehold.co/1200x800/6f4309/ffffff?text=Yate+Lujo+Pareja+Atardecer", // TODO: reemplazar con foto real
      "https://placehold.co/1200x800/6f4309/ffffff?text=Cena+Romantica+Muralla", // TODO: reemplazar con foto real
      "https://placehold.co/1200x800/6f4309/ffffff?text=Spa+Parejas+Cartagena", // TODO: reemplazar con foto real
    ],
    imagenAlt:
      "Yate de lujo navegando en aguas turquesa del Caribe",
    noIncluye: [
      "Vuelos y tiquetes aéreos",
      "Seguro de viaje (recomendado)",
      "Gastos personales y compras de recuerdos",
      "Tratamientos spa adicionales (precio especial disponible)",
      "Actividades no incluidas en el itinerario",
    ],
    queLlevar: [
      "Ropa elegante para la cena romántica incluida",
      "Ropa de baño y ropa cómoda para el día",
      "Bloqueador solar biodegradable",
      "Cámara o celular con batería cargada",
      "Efectivo para gastos personales",
      "Documentos de identidad vigentes",
    ],
    destacado: true,
    disponible: true,
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────
export const paquetesDestacados = paquetes.filter((p) => p.destacado);
export const paquetesDisponibles = paquetes.filter((p) => p.disponible);
export const getPaqueteBySlug = (slug: string) =>
  paquetes.find((p) => p.slug === slug);
