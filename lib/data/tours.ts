import type { Tour } from "@/types";

export const tours: Tour[] = [
  // ── TOUR 1: Centro Histórico ──────────────────────────────────────────────
  {
    id: "tour-centro-historico",
    slug: "centro-historico",
    nombre: "Tour Centro Histórico",
    categoria: "cultural",
    descripcionCorta:
      "Recorre las calles empedradas, plazas y monumentos de la Ciudad Amurallada con un guía experto local.",
    descripcionLarga:
      "/** TODO: Reemplazar por descripción real del cliente */ Sumérgete en 500 años de historia recorriendo el casco antiguo de Cartagena, declarado Patrimonio de la Humanidad por la UNESCO. Visitarás la Torre del Reloj, Plaza Santo Domingo, Plaza San Pedro Claver, Plaza de los Coches y las majestuosas murallas. Tu guía local te narrará las historias de piratas, conquistadores y libertadores que dieron forma a esta joya colonial del Caribe.",
    duracion: "4 horas",
    duracionHoras: 4,
    capacidadMinima: 1,
    capacidadMaxima: 15,
    horarios: ["9:00 AM", "2:00 PM"],
    puntoEncuentro: "Muelle de los Pegasos o Centro Histórico",
    precioPorPersona: 80000,
    moneda: "COP",
    incluye: [
      "Guía bilingüe profesional",
      "Recorrido a pie por 8 puntos icónicos",
      "Botella de agua",
      "Mapa del Centro Histórico",
    ],
    noIncluye: ["Alimentación adicional", "Propinas (sugeridas)", "Souvenirs"],
    queLlevar: [
      "Ropa cómoda",
      "Bloqueador solar",
      "Gorra/sombrero",
      "Cámara",
      "Dinero efectivo",
    ],
    itinerario: [
      { hora: "9:00 AM", actividad: "Encuentro en Torre del Reloj" },
      { hora: "9:30 AM", actividad: "Plaza de los Coches e historia colonial" },
      { hora: "10:30 AM", actividad: "Plaza Santo Domingo y la estatua de Botero" },
      { hora: "11:30 AM", actividad: "Murallas con vista al Caribe" },
      { hora: "12:30 PM", actividad: "Plaza San Pedro Claver — fin del tour" },
    ],
    imagenPrincipal:
      "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1568833635569-eaedf90a47fe?w=1200&q=80",
      "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=80",
    ],
    imagenAlt: "Recorrido por el Centro Histórico de Cartagena de Indias",
    destacado: true,
    popular: true,
    disponible: true,
  },

  // ── TOUR 2: Islas del Rosario ─────────────────────────────────────────────
  {
    id: "tour-islas-rosario",
    slug: "islas-rosario",
    nombre: "Tour Islas del Rosario",
    categoria: "playa",
    descripcionCorta:
      "Día completo en las aguas turquesa de las islas paradisíacas a 45 minutos de Cartagena.",
    descripcionLarga:
      "/** TODO: Reemplazar por descripción real del cliente */ Disfruta de un día inolvidable navegando hacia el archipiélago de las Islas del Rosario, declarado Parque Nacional Natural. Aguas cristalinas turquesa, snorkel, playas blancas y la oportunidad de descansar en algunas de las islas más hermosas del Caribe colombiano. Almuerzo típico incluido con vista al mar.",
    duracion: "8 horas",
    duracionHoras: 8,
    capacidadMinima: 1,
    capacidadMaxima: 20,
    horarios: ["8:00 AM", "2:00 PM"],
    puntoEncuentro: "Muelle de los Pegasos o Centro Histórico",
    precioPorPersona: 180000,
    moneda: "COP",
    incluye: [
      "Transporte marítimo ida y vuelta",
      "Almuerzo típico (pescado o pollo + arroz + plátano)",
      "Equipo de snorkel",
      "Guía a bordo",
      "Visita a 2-3 islas",
      "Seguro de navegación",
    ],
    noIncluye: ["Alimentación adicional", "Propinas (sugeridas)", "Souvenirs"],
    queLlevar: [
      "Ropa cómoda",
      "Bloqueador solar",
      "Gorra/sombrero",
      "Cámara",
      "Dinero efectivo",
    ],
    itinerario: [
      { hora: "8:00 AM", actividad: "Encuentro en Muelle de los Pegasos" },
      { hora: "8:30 AM", actividad: "Navegación hacia las islas" },
      { hora: "10:00 AM", actividad: "Snorkel en piscina natural" },
      { hora: "12:30 PM", actividad: "Almuerzo en isla principal" },
      { hora: "2:30 PM", actividad: "Tiempo libre en playa" },
      { hora: "4:00 PM", actividad: "Regreso a Cartagena" },
    ],
    imagenPrincipal:
      "https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?w=1200&q=80",
    ],
    imagenAlt: "Aguas turquesa de las Islas del Rosario en el Caribe colombiano",
    destacado: true,
    popular: true,
    disponible: true,
  },

  // ── TOUR 3: Playa Blanca ──────────────────────────────────────────────────
  {
    id: "tour-playa-blanca",
    slug: "playa-blanca",
    nombre: "Tour Playa Blanca",
    categoria: "playa",
    descripcionCorta:
      "Relájate en las arenas blancas y aguas cristalinas de la playa más famosa de Barú.",
    descripcionLarga:
      "/** TODO: Reemplazar */ Conoce Playa Blanca en Barú, una de las playas más espectaculares de Colombia. Arena blanca, palmeras, aguas tranquilas perfectas para nadar. Disfruta de la gastronomía local, masajes en la playa y la posibilidad de practicar deportes acuáticos. Una experiencia completa de día de playa en el Caribe.",
    duracion: "8 horas",
    duracionHoras: 8,
    capacidadMinima: 1,
    capacidadMaxima: 25,
    horarios: ["8:00 AM", "2:00 PM"],
    puntoEncuentro: "Muelle de los Pegasos o Centro Histórico",
    precioPorPersona: 150000,
    moneda: "COP",
    incluye: [
      "Transporte marítimo o terrestre",
      "Almuerzo típico",
      "Estadía en playa con silla y sombrilla",
      "Tiempo libre para nadar",
      "Guía coordinador",
    ],
    noIncluye: ["Alimentación adicional", "Propinas (sugeridas)", "Souvenirs"],
    queLlevar: [
      "Ropa cómoda",
      "Bloqueador solar",
      "Gorra/sombrero",
      "Cámara",
      "Dinero efectivo",
    ],
    itinerario: [
      { hora: "8:00 AM", actividad: "Salida desde Muelle de los Pegasos" },
      { hora: "9:30 AM", actividad: "Llegada a Playa Blanca" },
      { hora: "10:00 AM", actividad: "Tiempo libre - playa y mar" },
      { hora: "1:00 PM", actividad: "Almuerzo típico" },
      { hora: "3:00 PM", actividad: "Tiempo libre opcional" },
      { hora: "4:00 PM", actividad: "Regreso a Cartagena" },
    ],
    imagenPrincipal:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
      "https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
    ],
    imagenAlt: "Arena blanca y palmeras de Playa Blanca en Barú, Cartagena",
    destacado: true,
    popular: true,
    disponible: true,
  },

  // ── TOUR 4: Castillo San Felipe ───────────────────────────────────────────
  {
    id: "tour-castillo-san-felipe",
    slug: "castillo-san-felipe",
    nombre: "Tour Castillo San Felipe",
    categoria: "cultural",
    descripcionCorta:
      "Visita la fortaleza más imponente del Caribe colombiano, símbolo de la historia colonial.",
    descripcionLarga:
      "/** TODO: Reemplazar */ Explora el Castillo San Felipe de Barajas, una de las fortalezas más grandes construidas por los españoles en América. Recorre sus túneles, escucha las historias de batallas y disfruta de las vistas panorámicas de Cartagena. Una experiencia obligada para los amantes de la historia.",
    duracion: "3 horas",
    duracionHoras: 3,
    capacidadMinima: 1,
    capacidadMaxima: 15,
    horarios: ["9:00 AM", "2:00 PM"],
    puntoEncuentro: "Muelle de los Pegasos o Centro Histórico",
    precioPorPersona: 70000,
    moneda: "COP",
    incluye: [
      "Guía bilingüe",
      "Entrada al castillo",
      "Recorrido completo por túneles",
      "Botella de agua",
    ],
    noIncluye: ["Alimentación adicional", "Propinas (sugeridas)", "Souvenirs"],
    queLlevar: [
      "Ropa cómoda",
      "Bloqueador solar",
      "Gorra/sombrero",
      "Cámara",
      "Dinero efectivo",
    ],
    itinerario: [
      { hora: "9:00 AM", actividad: "Encuentro en entrada del Castillo" },
      { hora: "9:30 AM", actividad: "Recorrido histórico exterior" },
      { hora: "10:30 AM", actividad: "Exploración de túneles" },
      { hora: "11:30 AM", actividad: "Mirador con vistas a Cartagena" },
      { hora: "12:00 PM", actividad: "Fin del tour" },
    ],
    imagenPrincipal:
      "https://images.unsplash.com/photo-1568833635569-eaedf90a47fe?w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=80",
      "https://images.unsplash.com/photo-1568833635569-eaedf90a47fe?w=1200&q=80",
      "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=1200&q=80",
    ],
    imagenAlt: "Castillo San Felipe de Barajas, fortaleza colonial de Cartagena",
    destacado: false,
    popular: false,
    disponible: true,
  },

  // ── TOUR 5: Gastronómico ──────────────────────────────────────────────────
  {
    id: "tour-gastronomico",
    slug: "tour-gastronomico",
    nombre: "Tour Gastronómico",
    categoria: "gastronomico",
    descripcionCorta:
      "Descubre los sabores del Caribe colombiano en un recorrido por los mejores restaurantes locales.",
    descripcionLarga:
      "/** TODO: Reemplazar */ Saborea Cartagena en una experiencia gastronómica única. Visita los mejores restaurantes y puestos callejeros donde degustarás ceviche, arepas de huevo, posta cartagenera, cocadas y otros manjares típicos. Tu guía local te llevará a lugares que solo los locales conocen.",
    duracion: "4 horas",
    duracionHoras: 4,
    capacidadMinima: 2,
    capacidadMaxima: 10,
    horarios: ["5:00 PM"],
    puntoEncuentro: "Muelle de los Pegasos o Centro Histórico",
    precioPorPersona: 250000,
    moneda: "COP",
    incluye: [
      "Guía gastronómico bilingüe",
      "Degustación en 5 restaurantes/puestos",
      "Bebida de bienvenida en cada parada",
      "Postre típico final",
    ],
    noIncluye: ["Alimentación adicional", "Propinas (sugeridas)", "Souvenirs"],
    queLlevar: [
      "Ropa cómoda",
      "Bloqueador solar",
      "Gorra/sombrero",
      "Cámara",
      "Dinero efectivo",
    ],
    itinerario: [
      { hora: "5:00 PM", actividad: "Encuentro en Plaza Trinidad - Getsemaní" },
      { hora: "5:30 PM", actividad: "Arepas de huevo + carimañola" },
      { hora: "6:30 PM", actividad: "Ceviche cartagenero" },
      { hora: "7:30 PM", actividad: "Posta cartagenera con coco" },
      { hora: "8:30 PM", actividad: "Cocadas y postres tradicionales" },
      { hora: "9:00 PM", actividad: "Fin del tour" },
    ],
    imagenPrincipal:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=80",
    ],
    imagenAlt: "Tour gastronómico por restaurantes típicos de Cartagena",
    destacado: true,
    popular: false,
    disponible: true,
  },

  // ── TOUR 6: Manglares Caño Loro ───────────────────────────────────────────
  {
    id: "tour-manglares-cano-loro",
    slug: "manglares-cano-loro",
    nombre: "Tour Manglares Caño Loro",
    categoria: "naturaleza",
    descripcionCorta:
      "Navega entre manglares y descubre la rica fauna del ecosistema costero de Cartagena.",
    descripcionLarga:
      "/** TODO: Reemplazar */ Adéntrate en el corazón de los manglares de Caño Loro, un ecosistema único del Caribe colombiano. Navegarás en canoas tradicionales por túneles naturales de manglar, avistarás aves migratorias, iguanas y otras especies endémicas. Una experiencia ecoturística que conecta con la naturaleza.",
    duracion: "5 horas",
    duracionHoras: 5,
    capacidadMinima: 2,
    capacidadMaxima: 12,
    horarios: ["8:00 AM", "2:00 PM"],
    puntoEncuentro: "Muelle de los Pegasos o Centro Histórico",
    precioPorPersona: 200000,
    moneda: "COP",
    incluye: [
      "Transporte ida y vuelta",
      "Guía naturalista bilingüe",
      "Recorrido en canoa por manglares",
      "Refrigerio típico",
      "Botella de agua",
    ],
    noIncluye: ["Alimentación adicional", "Propinas (sugeridas)", "Souvenirs"],
    queLlevar: [
      "Ropa cómoda",
      "Bloqueador solar",
      "Gorra/sombrero",
      "Cámara",
      "Dinero efectivo",
    ],
    itinerario: [
      { hora: "8:00 AM", actividad: "Salida desde Cartagena" },
      { hora: "9:00 AM", actividad: "Llegada a Caño Loro" },
      { hora: "9:30 AM", actividad: "Recorrido en canoa por manglares" },
      { hora: "11:30 AM", actividad: "Avistamiento de aves" },
      { hora: "12:30 PM", actividad: "Refrigerio en la comunidad" },
      { hora: "1:00 PM", actividad: "Regreso a Cartagena" },
    ],
    imagenPrincipal:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    ],
    imagenAlt: "Navegación en canoa por manglares de Caño Loro en Cartagena",
    destacado: false,
    popular: false,
    disponible: true,
  },

  // ── TOUR 7: City Tour Nocturno ────────────────────────────────────────────
  {
    id: "tour-city-tour-nocturno",
    slug: "city-tour-nocturno",
    nombre: "City Tour Nocturno",
    categoria: "cultural",
    descripcionCorta:
      "Vive la magia de Cartagena iluminada con un recorrido nocturno por sus rincones más emblemáticos.",
    descripcionLarga:
      "/** TODO: Reemplazar */ Cartagena de noche es otra ciudad. Recorre la Ciudad Amurallada cuando se ilumina con luces cálidas que resaltan la arquitectura colonial. Visita las plazas más bohemias, las murallas con vista al atardecer y disfruta de la música en vivo de Getsemaní. Una experiencia mágica para parejas y grupos.",
    duracion: "3 horas",
    duracionHoras: 3,
    capacidadMinima: 2,
    capacidadMaxima: 15,
    horarios: ["7:00 PM"],
    puntoEncuentro: "Muelle de los Pegasos o Centro Histórico",
    precioPorPersona: 95000,
    moneda: "COP",
    incluye: [
      "Guía nocturno bilingüe",
      "Recorrido por 5 puntos iluminados",
      "Copa de bienvenida",
      "Visita a 2 plazas bohemias",
    ],
    noIncluye: ["Alimentación adicional", "Propinas (sugeridas)", "Souvenirs"],
    queLlevar: [
      "Ropa cómoda",
      "Bloqueador solar",
      "Gorra/sombrero",
      "Cámara",
      "Dinero efectivo",
    ],
    itinerario: [
      { hora: "7:00 PM", actividad: "Encuentro Plaza Santo Domingo" },
      { hora: "7:30 PM", actividad: "Recorrido por murallas iluminadas" },
      { hora: "8:30 PM", actividad: "Plaza Trinidad - Getsemaní" },
      { hora: "9:30 PM", actividad: "Café Havana o lugar similar" },
      { hora: "10:00 PM", actividad: "Fin del tour" },
    ],
    imagenPrincipal:
      "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=80",
      "https://images.unsplash.com/photo-1568833635569-eaedf90a47fe?w=1200&q=80",
      "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1596367407372-96cb88503db6?w=1200&q=80",
    ],
    imagenAlt: "Cartagena de noche iluminada, City Tour Nocturno",
    destacado: false,
    popular: true,
    disponible: true,
  },

  // ── TOUR 8: Cholón Premium ────────────────────────────────────────────────
  {
    id: "tour-cholon-premium",
    slug: "cholon-premium",
    nombre: "Tour Cholón Premium",
    categoria: "playa",
    descripcionCorta:
      "Vive un día único en Cholón, la zona VIP de Barú con yates, fiesta y aguas turquesa.",
    descripcionLarga:
      "/** TODO: Reemplazar */ Cholón es el destino preferido de los famosos en Cartagena. Aguas cristalinas color esmeralda, ambiente de fiesta con DJs en bote, restaurantes flotantes y la mejor energía del Caribe. Una experiencia exclusiva donde combinarás relax con diversión en uno de los lugares más espectaculares de Colombia.",
    duracion: "8 horas",
    duracionHoras: 8,
    capacidadMinima: 4,
    capacidadMaxima: 20,
    horarios: ["8:00 AM", "2:00 PM"],
    puntoEncuentro: "Muelle de los Pegasos o Centro Histórico",
    precioPorPersona: 220000,
    moneda: "COP",
    incluye: [
      "Transporte marítimo en embarcación premium",
      "Almuerzo con mariscos",
      "Equipo de snorkel",
      "Bebidas no alcohólicas",
      "Acceso a zona VIP",
    ],
    noIncluye: ["Alimentación adicional", "Propinas (sugeridas)", "Souvenirs"],
    queLlevar: [
      "Ropa cómoda",
      "Bloqueador solar",
      "Gorra/sombrero",
      "Cámara",
      "Dinero efectivo",
    ],
    itinerario: [
      { hora: "8:30 AM", actividad: "Encuentro Muelle de los Pegasos" },
      { hora: "9:00 AM", actividad: "Navegación hacia Cholón" },
      { hora: "10:30 AM", actividad: "Snorkel en piscina natural" },
      { hora: "12:30 PM", actividad: "Almuerzo en restaurante flotante" },
      { hora: "2:00 PM", actividad: "Tiempo libre - playa y fiesta" },
      { hora: "4:30 PM", actividad: "Regreso a Cartagena" },
    ],
    imagenPrincipal:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
      "https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?w=1200&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    ],
    imagenAlt: "Cholón Premium en Barú, zona VIP del Caribe colombiano",
    destacado: true,
    popular: true,
    disponible: true,
  },

  // ── TOUR 9: Volcán Totumo ─────────────────────────────────────────────────
  {
    id: "tour-volcan-totumo",
    slug: "volcan-totumo",
    nombre: "Tour Volcán Totumo",
    categoria: "aventura",
    descripcionCorta:
      "Sumérgete en un volcán de barro natural con propiedades terapéuticas, una experiencia única.",
    descripcionLarga:
      "/** TODO: Reemplazar */ A 1 hora de Cartagena se encuentra el Volcán del Totumo, un volcán de barro de 15 metros de altura. Sumérgete en su cráter con barro terapéutico, considerado uno de los mejores tratamientos naturales para la piel. Una experiencia única y divertida que combina aventura, relajación y bienestar.",
    duracion: "6 horas",
    duracionHoras: 6,
    capacidadMinima: 2,
    capacidadMaxima: 15,
    horarios: ["9:00 AM"],
    puntoEncuentro: "Muelle de los Pegasos o Centro Histórico",
    precioPorPersona: 130000,
    moneda: "COP",
    incluye: [
      "Transporte ida y vuelta en bus",
      "Entrada al volcán",
      "Almuerzo típico",
      "Guía coordinador",
      "Lavado de barro en ciénaga",
    ],
    noIncluye: ["Alimentación adicional", "Propinas (sugeridas)", "Souvenirs"],
    queLlevar: [
      "Ropa cómoda",
      "Bloqueador solar",
      "Gorra/sombrero",
      "Cámara",
      "Dinero efectivo",
    ],
    itinerario: [
      { hora: "9:00 AM", actividad: "Salida desde Cartagena" },
      { hora: "10:30 AM", actividad: "Llegada al Volcán Totumo" },
      { hora: "11:00 AM", actividad: "Baño de barro terapéutico" },
      { hora: "12:30 PM", actividad: "Lavado en la ciénaga" },
      { hora: "1:30 PM", actividad: "Almuerzo típico" },
      { hora: "3:00 PM", actividad: "Regreso a Cartagena" },
    ],
    imagenPrincipal:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
      "https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    ],
    imagenAlt: "Volcán de barro Totumo cerca de Cartagena",
    destacado: false,
    popular: false,
    disponible: true,
  },

  // ── TOUR 10: Getsemaní y Murales ──────────────────────────────────────────
  {
    id: "tour-getsemani-murales",
    slug: "getsemani-murales",
    nombre: "Tour Getsemaní y Murales",
    categoria: "cultural",
    descripcionCorta:
      "Descubre el barrio más bohemio de Cartagena con sus coloridos murales y arte urbano.",
    descripcionLarga:
      "/** TODO: Reemplazar */ Getsemaní es el barrio bohemio de Cartagena, lleno de arte urbano, murales coloridos y una vida cultural vibrante. Recorre sus calles empedradas, plazas con música en vivo, talleres de artistas locales y bares emblemáticos. Una experiencia auténtica para los amantes del arte y la cultura popular.",
    duracion: "3 horas",
    duracionHoras: 3,
    capacidadMinima: 1,
    capacidadMaxima: 12,
    horarios: ["4:00 PM"],
    puntoEncuentro: "Muelle de los Pegasos o Centro Histórico",
    precioPorPersona: 85000,
    moneda: "COP",
    incluye: [
      "Guía local bilingüe",
      "Recorrido por murales emblemáticos",
      "Visita a 2 plazas culturales",
      "Botella de agua",
      "Bebida típica final",
    ],
    noIncluye: ["Alimentación adicional", "Propinas (sugeridas)", "Souvenirs"],
    queLlevar: [
      "Ropa cómoda",
      "Bloqueador solar",
      "Gorra/sombrero",
      "Cámara",
      "Dinero efectivo",
    ],
    itinerario: [
      { hora: "4:00 PM", actividad: "Encuentro Plaza Trinidad" },
      { hora: "4:30 PM", actividad: "Recorrido por murales históricos" },
      { hora: "5:30 PM", actividad: "Talleres de artistas locales" },
      { hora: "6:30 PM", actividad: "Plaza de la Trinidad - sabores locales" },
      { hora: "7:00 PM", actividad: "Fin del tour" },
    ],
    imagenPrincipal:
      "https://images.unsplash.com/photo-1596367407372-96cb88503db6?w=1200&q=80",
    imagenes: [
      "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=80",
      "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1596367407372-96cb88503db6?w=1200&q=80",
      "https://images.unsplash.com/photo-1568833635569-eaedf90a47fe?w=1200&q=80",
    ],
    imagenAlt: "Murales coloridos del barrio Getsemaní en Cartagena",
    destacado: true,
    popular: true,
    disponible: true,
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────
export const toursDestacados = tours.filter((t) => t.destacado);
export const toursPopulares = tours.filter((t) => t.popular);
export const toursDisponibles = tours.filter((t) => t.disponible);
export const getTourBySlug = (slug: string) => tours.find((t) => t.slug === slug);
export const getToursPorCategoria = (cat: string) =>
  tours.filter((t) => t.categoria === cat);
