import type { Bote } from "@/types";

export const botes: Bote[] = [
  // ── BOTE 1: FIRPOL 42FT ───────────────────────────────────────────────────
  {
    id: "bote-firpol-42",
    slug: "firpol-42",
    nombre: "FIRPOL 42FT",
    tipo: "lancha-lujo",
    descripcionCorta:
      "Lancha de lujo de 42 pies con 2 motores Suzuki 300, piso antideslizante y full sonido. Capacidad de hasta 20 personas en bahía.",
    descripcionLarga:
      "Disfruta de una experiencia náutica premium en la FIRPOL 42FT, una embarcación de 42 pies equipada con 2 motores Suzuki 300 que garantizan potencia y eficiencia. Cuenta con piso de lujo antideslizante, asoleadora central con portavasos, cojinería de alta gama, baño completo con ducha dulce y lavamanos, neveras, bodega maletero y luces de navegación submarinas nocturnas. El sistema de sonido full incluye 6 balas, 4 bajos y 6 parlantes con conectividad FM/AM, Bluetooth y USB. Ideal para grupos grandes que buscan lujo y diversión en las aguas del Caribe.",
    capacidadPersonas: 20,
    eslora: "42 ft",
    tripulacion: 2,
    precioPorDia: 3600000,
    moneda: "COP",
    incluye: [
      "Capitán y marinero",
      "Combustible",
      "Piso antideslizante",
      "Asoleadora central con portavasos",
      "Baño completo con ducha y lavamanos",
      "Neveras y bodega",
      "Full sonido (6 balas, 4 bajos, 6 parlantes)",
      "Bluetooth, USB, FM/AM",
      "Luces de navegación submarinas",
      "Escalera para descenso al mar",
      "Mesa de luxe con portavasos removible",
    ],
    noIncluye: [
      "Alimentación y bebidas",
      "Propinas (sugeridas)",
      "Equipo de snorkel",
      "Tickets de impuestos en islas",
    ],
    caracteristicas: [
      { icono: "Users", label: "Hasta 20 personas" },
      { icono: "Ruler", label: "42 pies de eslora" },
      { icono: "Zap", label: "2 motores Suzuki 300" },
      { icono: "Volume2", label: "Full sonido premium" },
      { icono: "Bath", label: "Baño con ducha dulce" },
    ],
    imagenPrincipal: "/images/flota/botes-y-lanchas/firpol-42/firpol-42-principal.jpg",
    imagenes: [
      "/images/flota/botes-y-lanchas/firpol-42/firpol-42-01.jpg",
      "/images/flota/botes-y-lanchas/firpol-42/firpol-42-02.jpg",
      "/images/flota/botes-y-lanchas/firpol-42/firpol-42-03.jpg",
      "/images/flota/botes-y-lanchas/firpol-42/firpol-42-04.jpg",
    ],
    imagenAlt:
      "Lancha FIRPOL 42 pies de lujo navegando en aguas turquesa del Caribe - Cartagena de Indias",
    destinosPosibles: ["Islas del Rosario", "Barú", "Bahía de Cartagena"],
    duracionTipica: "8 horas",
    destacado: true,
    disponible: true,
    capacidadAdicional:
      "18 personas para viajes a islas, 20 personas para recorridos en bahía.",
  },

  // ── BOTE 2: LUXURY 42FT ───────────────────────────────────────────────────
  {
    id: "bote-luxury-42",
    slug: "luxury-42",
    nombre: "LUXURY 42FT",
    tipo: "lancha-lujo",
    descripcionCorta:
      "Lancha luxury de 42 pies con sonido JL, cojinería premium y mini cocina a bordo. Capacidad para 18 personas con todo incluido.",
    descripcionLarga:
      "La LUXURY 42FT redefine el lujo en el mar con 42 pies de pura elegancia. Equipada con 2 motores Suzuki 300, sistema de sonido JL de Lujo y cojinería luxury, ofrece una experiencia premium para hasta 18 pasajeros. Incluye baño amplio, mini cocina, póliza de seguro y un equipamiento total preparado para conectar consola de DJ vía Bluetooth (con costo adicional). El capitán y marinero, junto con el combustible y hielo (13 kg) ya vienen incluidos en el precio, listo para que solo te ocupes de disfrutar.",
    capacidadPersonas: 18,
    eslora: "42 ft",
    tripulacion: 2,
    precioPorDia: 3600000,
    moneda: "COP",
    incluye: [
      "Capitán y marinero",
      "Combustible",
      "Hielo (13 kg)",
      "Baño amplio",
      "Full sonido JL de Lujo",
      "Cojinería luxury",
      "Mini cocina",
      "Póliza de seguro",
      "Bluetooth para conectar dispositivos",
    ],
    noIncluye: [
      "Alimentación y bebidas",
      "Consola de DJ (costo adicional)",
      "Propinas (sugeridas)",
      "Equipo de snorkel",
      "Tickets de impuestos en islas",
    ],
    caracteristicas: [
      { icono: "Users", label: "Hasta 18 personas" },
      { icono: "Ruler", label: "42 pies de eslora" },
      { icono: "Zap", label: "2 motores Suzuki 300" },
      { icono: "Volume2", label: "Sonido JL de Lujo" },
      { icono: "ChefHat", label: "Mini cocina" },
      { icono: "Shield", label: "Póliza de seguro" },
    ],
    imagenPrincipal: "/images/flota/botes-y-lanchas/luxury-42/luxury-42-principal.jpg",
    imagenes: [
      "/images/flota/botes-y-lanchas/luxury-42/luxury-42-01.jpg",
      "/images/flota/botes-y-lanchas/luxury-42/luxury-42-02.jpg",
      "/images/flota/botes-y-lanchas/luxury-42/luxury-42-03.jpg",
      "/images/flota/botes-y-lanchas/luxury-42/luxury-42-04.jpg",
    ],
    imagenAlt:
      "Lancha LUXURY 42FT con cojinería premium en Cartagena - bote de lujo para 18 personas",
    destinosPosibles: ["Islas del Rosario", "Barú", "Bahía de Cartagena"],
    duracionTipica: "8 horas",
    destacado: true,
    masPopular: true,
    disponible: true,
  },

  // ── BOTE 3: LANCHA 28FT ───────────────────────────────────────────────────
  {
    id: "bote-lancha-28",
    slug: "lancha-28",
    nombre: "Lancha 28FT",
    tipo: "lancha",
    descripcionCorta:
      "Lancha versátil de 28 pies, perfecta para grupos pequeños. Ideal para tours a islas con snorkel, ducha dulce y nevera incluida.",
    descripcionLarga:
      "Tu mejor plan en Cartagena está aquí. Esta lancha de 28 pies con 2 motores Mercury 115 HP es la opción perfecta para grupos pequeños que buscan calidad sin sacrificar comodidad. Cuenta con sonido JL profesional inalámbrico, baño, ducha de agua dulce, caretas para snorkel, flotadores recreacionales, neveras con hielo, escalera para entrar y salir al mar fácilmente. El zarpe se realiza desde el Muelle de los Pegasos o Muelle de la Bodeguita. Una experiencia íntima y auténtica en el Caribe colombiano.",
    capacidadPersonas: 11,
    eslora: "28 ft",
    tripulacion: 2,
    precioPorDia: 1750000,
    moneda: "COP",
    incluye: [
      "Capitán y marinero",
      "Combustible",
      "Sonido JL profesional inalámbrico",
      "Baño",
      "Ducha de agua dulce",
      "Caretas para snorkel",
      "Flotadores recreacionales",
      "Nevera con hielo",
      "Nevera portátil con hielo",
      "Escalera para entrar y salir al mar",
    ],
    noIncluye: [
      "Alimentación y bebidas",
      "Propinas (sugeridas)",
      "Tickets de impuestos en islas",
    ],
    caracteristicas: [
      { icono: "Users", label: "Hasta 11 personas" },
      { icono: "Ruler", label: "28 pies de eslora" },
      { icono: "Zap", label: "2 motores Mercury 115 HP" },
      { icono: "Waves", label: "Snorkel incluido" },
      { icono: "Bath", label: "Ducha dulce" },
    ],
    imagenPrincipal: "/images/flota/botes-y-lanchas/lancha-28/lancha-28-principal.jpg",
    imagenes: [
      "/images/flota/botes-y-lanchas/lancha-28/lancha-28-01.jpg",
      "/images/flota/botes-y-lanchas/lancha-28/lancha-28-02.jpg",
      "/images/flota/botes-y-lanchas/lancha-28/lancha-28-03.jpg",
      "/images/flota/botes-y-lanchas/lancha-28/lancha-28-04.jpg",
    ],
    imagenAlt:
      "Lancha 28 pies en Cartagena con snorkel incluido - tours a Islas del Rosario",
    destinosPosibles: ["Islas del Rosario", "Barú", "Bahía de Cartagena"],
    duracionTipica: "8 horas",
    disponible: true,
    capacidadAdicional:
      "8 a 10 personas para viajes a islas, 11 personas máximo para recorridos en bahía. Zarpe desde Muelle de los Pegasos o Muelle de la Bodeguita.",
  },

  // ── BOTE 4: MOTOMARLIN 40FT ───────────────────────────────────────────────
  {
    id: "bote-motomarlin-40",
    slug: "motomarlin-40",
    nombre: "MOTOMARLIN 40FT",
    tipo: "lancha-lujo",
    descripcionCorta:
      "Bote de lujo de 40 pies con 3 motores Suzuki 325 HP y casco MotoMarlin. Asoleadoras, sonido inalámbrico y gama luxury para hasta 20 personas.",
    descripcionLarga:
      "La MOTOMARLIN 40FT es la elección definitiva para quienes buscan velocidad, elegancia y comodidad en una sola embarcación. Sus 3 motores Suzuki 325 HP la convierten en una de las más potentes de la flota, ideal para recorridos a Islas del Rosario o Barú. Incluye asoleadoras, sonido inalámbrico con conectividad Bluetooth, baño, cojinería de lujo y mesa central delantera y trasera. El casco MotoMarlin de gama luxury garantiza una navegación suave y segura, mientras que las escaleras de descenso al mar facilitan el acceso al agua cristalina.",
    capacidadPersonas: 20,
    eslora: "40 ft",
    tripulacion: 2,
    precioPorDia: 4200000,
    moneda: "COP",
    incluye: [
      "Capitán y marinero",
      "Combustible",
      "Asoleadoras",
      "Sonido inalámbrico con Bluetooth",
      "Baño",
      "Cojinería de lujo",
      "Mesa central delantera y trasera",
      "Escaleras de descenso al mar",
      "Casco MotoMarlin gama luxury",
    ],
    noIncluye: [
      "Alimentación y bebidas",
      "Propinas (sugeridas)",
      "Equipo de snorkel",
      "Tickets de impuestos en islas",
    ],
    caracteristicas: [
      { icono: "Users", label: "Hasta 20 personas" },
      { icono: "Ruler", label: "40 pies de eslora" },
      { icono: "Zap", label: "3 motores Suzuki 325 HP" },
      { icono: "Volume2", label: "Sonido inalámbrico" },
      { icono: "Sun", label: "Asoleadoras amplias" },
    ],
    imagenPrincipal: "/images/flota/botes-y-lanchas/motomarlin-40/motomarlin-40-principal.jpg",
    imagenes: [
      "/images/flota/botes-y-lanchas/motomarlin-40/motomarlin-40-01.jpg",
      "/images/flota/botes-y-lanchas/motomarlin-40/motomarlin-40-02.jpg",
      "/images/flota/botes-y-lanchas/motomarlin-40/motomarlin-40-03.jpg",
      "/images/flota/botes-y-lanchas/motomarlin-40/motomarlin-40-04.jpg",
    ],
    imagenAlt:
      "MOTOMARLIN 40 pies con 3 motores en el Caribe - Cartagena de Indias",
    destinosPosibles: ["Islas del Rosario", "Barú", "Bahía de Cartagena"],
    duracionTipica: "8 horas",
    destacado: true,
    disponible: true,
  },

  // ── BOTE 5: TODOMAR 34FT ──────────────────────────────────────────────────
  {
    id: "bote-todomar-34",
    slug: "todomar-34",
    nombre: "TODOMAR 34FT",
    tipo: "lancha",
    descripcionCorta:
      "Casco TodoMar de 34 pies con 2 motores Suzuki 300 HP. Amplios espacios, asoleadoras y sonido JL para hasta 12 personas.",
    descripcionLarga:
      "La TODOMAR 34FT combina espacio, potencia y seguridad en una embarcación de 34 pies con casco TodoMar. Sus 2 motores Suzuki 300 HP garantizan rendimiento óptimo en cualquier condición. Cuenta con amplios espacios, cómoda cojinería, asoleadoras amplias para tomar el sol, sonido JL de alta calidad y baño en consola. Es la opción equilibrada entre confort y agilidad, perfecta para grupos medianos de hasta 12 personas que quieren explorar las aguas de Cartagena con seguridad y estilo.",
    capacidadPersonas: 12,
    eslora: "34 ft",
    tripulacion: 2,
    precioPorDia: 2650000,
    moneda: "COP",
    incluye: [
      "Capitán y marinero",
      "Combustible",
      "Asoleadoras amplias",
      "Cojinería cómoda",
      "Sonido JL",
      "Baño en consola",
      "Casco TodoMar",
    ],
    noIncluye: [
      "Alimentación y bebidas",
      "Propinas (sugeridas)",
      "Equipo de snorkel",
      "Tickets de impuestos en islas",
    ],
    caracteristicas: [
      { icono: "Users", label: "Hasta 12 personas" },
      { icono: "Ruler", label: "34 pies de eslora" },
      { icono: "Zap", label: "2 motores Suzuki 300 HP" },
      { icono: "Volume2", label: "Sonido JL" },
      { icono: "Shield", label: "Excelente seguridad" },
    ],
    imagenPrincipal: "/images/flota/botes-y-lanchas/todomar-34/todomar-34-principal.jpg",
    imagenes: [
      "/images/flota/botes-y-lanchas/todomar-34/todomar-34-01.jpg",
      "/images/flota/botes-y-lanchas/todomar-34/todomar-34-02.jpg",
      "/images/flota/botes-y-lanchas/todomar-34/todomar-34-03.jpg",
      "/images/flota/botes-y-lanchas/todomar-34/todomar-34-04.jpg",
    ],
    imagenAlt:
      "Lancha TODOMAR 34 pies en Cartagena - tours por las Islas del Rosario con casco TodoMar",
    destinosPosibles: ["Islas del Rosario", "Barú", "Bahía de Cartagena"],
    duracionTipica: "8 horas",
    disponible: true,
  },

  // ── BOTE 6: HARB ─────────────────────────────────────────────────────────
  {
    id: "bote-harb",
    slug: "harb",
    nombre: "Harb",
    tipo: "lancha",
    descripcionCorta:
      "Speedboat Firpool 42ft modelo 2023 con 2 motores Suzuki 250 HP. Capacidad de hasta 22 personas, baño completo y sonido bluetooth.",
    descripcionLarga:
      "Lancha Harb es un Speedboat Firpool de 42 pies modelo 2023, equipado con 2 motores Suzuki 250 HP que garantizan velocidad y potencia. Cuenta con baño completo, sonido bluetooth y amplias asoleadoras. Ideal para grupos grandes en las Islas del Rosario o la Bahía de Cartagena. Tarifa base incluye hasta 15 pax; persona adicional $50.000 c/u hasta máximo 22 personas.",
    capacidadPersonas: 22,
    eslora: "42 ft",
    tripulacion: 2,
    precioPorDia: 3500000,
    moneda: "COP",
    incluye: [
      "Capitán y marinero",
      "Combustible",
      "Hielo",
      "Seguros e impuestos",
      "Baño completo",
      "Sonido bluetooth",
      "Asoleadoras",
      "2 motores Suzuki 250 HP",
    ],
    noIncluye: [
      "Alimentación y bebidas",
      "Propinas (sugeridas)",
      "Equipo de snorkel",
      "Tickets de impuestos en islas",
    ],
    caracteristicas: [
      { icono: "Users", label: "Hasta 22 personas" },
      { icono: "Ruler", label: "42 pies de eslora" },
      { icono: "Zap", label: "2 motores Suzuki 250 HP" },
      { icono: "Volume2", label: "Sonido bluetooth" },
      { icono: "Sun", label: "Asoleadoras amplias" },
    ],
    imagenPrincipal: "/images/flota/botes-y-lanchas/harb/harb-principal.jpg",
    imagenes: [
      "/images/flota/botes-y-lanchas/harb/harb-01.jpg",
      "/images/flota/botes-y-lanchas/harb/harb-02.jpg",
      "/images/flota/botes-y-lanchas/harb/harb-03.jpg",
      "/images/flota/botes-y-lanchas/harb/harb-04.jpg",
    ],
    imagenAlt: "Lancha Harb Speedboat Firpool 42ft en Cartagena",
    destinosPosibles: ["Islas del Rosario", "Barú", "Bahía de Cartagena"],
    duracionTipica: "8 horas",
    disponible: true,
    destacado: false,
    masPopular: false,
    capacidadAdicional:
      "Tarifa base 15 pax. Persona adicional $50.000 hasta máximo 22 pax. Modelo 2023.",
  },

  // ── BOTE 7: CHARLIE ───────────────────────────────────────────────────────
  {
    id: "bote-charlie",
    slug: "charlie",
    nombre: "Charlie",
    tipo: "lancha",
    descripcionCorta:
      "Speedboat Bravo 41 renovada 2024 con 2 motores Yamaha 250 HP. Capacidad de hasta 20 personas con sonido bluetooth y asoleadoras.",
    descripcionLarga:
      "Lancha Charlie es un Speedboat Bravo 41 totalmente renovado en 2024, equipado con 2 motores Yamaha 250 HP. Cuenta con baño completo, sonido bluetooth y asoleadoras espaciosas. Perfecta para grupos de hasta 20 personas. Tarifa base incluye 15 pax; persona adicional $50.000 c/u.",
    capacidadPersonas: 20,
    eslora: "41 ft",
    tripulacion: 2,
    precioPorDia: 3500000,
    moneda: "COP",
    incluye: [
      "Capitán y marinero",
      "Combustible",
      "Hielo",
      "Seguros e impuestos",
      "Baño completo",
      "Sonido bluetooth",
      "Asoleadoras",
      "2 motores Yamaha 250 HP",
    ],
    noIncluye: [
      "Alimentación y bebidas",
      "Propinas (sugeridas)",
      "Equipo de snorkel",
      "Tickets de impuestos en islas",
    ],
    caracteristicas: [
      { icono: "Users", label: "Hasta 20 personas" },
      { icono: "Ruler", label: "41 pies de eslora" },
      { icono: "Zap", label: "2 motores Yamaha 250 HP" },
      { icono: "Volume2", label: "Sonido bluetooth" },
      { icono: "Sun", label: "Asoleadoras amplias" },
    ],
    imagenPrincipal: "/images/flota/botes-y-lanchas/charlie/charlie-principal.jpg",
    imagenes: [
      "/images/flota/botes-y-lanchas/charlie/charlie-01.jpg",
      "/images/flota/botes-y-lanchas/charlie/charlie-02.jpg",
      "/images/flota/botes-y-lanchas/charlie/charlie-03.jpg",
      "/images/flota/botes-y-lanchas/charlie/charlie-04.jpg",
    ],
    imagenAlt: "Lancha Charlie Speedboat Bravo 41 renovada 2024 en Cartagena",
    destinosPosibles: ["Islas del Rosario", "Barú", "Bahía de Cartagena"],
    duracionTipica: "8 horas",
    disponible: true,
    destacado: false,
    masPopular: false,
    capacidadAdicional:
      "Renovada 2024. Tarifa base 15 pax. Persona adicional $50.000 hasta máximo 20 pax.",
  },

  // ── BOTE 8: BOTE LARRY ────────────────────────────────────────────────────
  {
    id: "bote-larry",
    slug: "bote-larry",
    nombre: "Bote Larry",
    tipo: "lancha",
    descripcionCorta:
      "Bote nuevo modelo 2024 con casco Singlar 290 y 2 motores Suzuki 150 HP. Capacidad máxima 10 personas con baño y ducha de agua dulce.",
    descripcionLarga:
      "Bote Larry es una embarcación nueva modelo 2024 con casco Singlar 290 que combina elegancia, confort y seguridad. Equipada con 2 motores Suzuki 150 HP. Cuenta con asientos cómodos, asoleadora central, baño central, ducha de agua dulce, nevera con hielo y escalera para descender al mar. Ideal para grupos pequeños o familias.",
    capacidadPersonas: 10,
    eslora: "29 ft",
    tripulacion: 2,
    precioPorDia: 2200000,
    moneda: "COP",
    incluye: [
      "Capitán y ayudante",
      "Combustible",
      "Hielo",
      "Baño central",
      "Ducha de agua dulce",
      "Nevera con hielo",
      "Asoleadora central",
      "Escalera al mar",
    ],
    noIncluye: [
      "Alimentación y bebidas",
      "Propinas (sugeridas)",
      "Equipo de snorkel",
      "Tickets de impuestos en islas",
    ],
    caracteristicas: [
      { icono: "Users", label: "Hasta 10 personas" },
      { icono: "Ruler", label: "29 pies de eslora" },
      { icono: "Zap", label: "2 motores Suzuki 150 HP" },
      { icono: "Bath", label: "Baño con ducha dulce" },
      { icono: "Snowflake", label: "Nevera con hielo" },
    ],
    imagenPrincipal: "/images/flota/botes-y-lanchas/bote-larry/bote-larry-principal.jpg",
    imagenes: [
      "/images/flota/botes-y-lanchas/bote-larry/bote-larry-01.jpg",
      "/images/flota/botes-y-lanchas/bote-larry/bote-larry-02.jpg",
      "/images/flota/botes-y-lanchas/bote-larry/bote-larry-03.jpg",
      "/images/flota/botes-y-lanchas/bote-larry/bote-larry-04.jpg",
    ],
    imagenAlt: "Bote Larry Singlar 290 modelo 2024 en Cartagena",
    destinosPosibles: ["Islas del Rosario", "Barú", "Bahía de Cartagena"],
    duracionTipica: "8 horas",
    disponible: true,
    destacado: false,
    masPopular: false,
    capacidadAdicional: "Modelo 2024 nuevo. Ideal para grupos pequeños y familias.",
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────
export const botesDestacados = botes.filter((b) => b.destacado);
export const botesDisponibles = botes.filter((b) => b.disponible);
export const boteMasPopular = botes.find((b) => b.masPopular);
export const getBoteBySlug = (slug: string) => botes.find((b) => b.slug === slug);
