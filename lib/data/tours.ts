export interface TourItem {
  id: string;
  slug: string;
  titulo: string;
  imagenPrincipal: string;
  galeria: string[];
  descripcionBreve: string;
  precioDesde: string;
  horarios: string;
  incluye: string[];
  noIncluye: string[];
  ubicacionSalida: string;
}

export const toursData: TourItem[] = [
  {
    id: "1",
    slug: "isla-del-encanto",
    titulo: "Isla del Encanto",
    imagenPrincipal: "/images/tours/isla-del-encanto-main.jpg",
    galeria: [
      "/images/tours/isla-del-encanto-1.jpg",
      "/images/tours/isla-del-encanto-2.jpg",
      "/images/tours/isla-del-encanto-3.jpg"
    ],
    descripcionBreve: "Disfruta de un día paradisíaco con almuerzo buffet e instalaciones exclusivas en las Islas del Rosario.",
    precioDesde: "$460.000 COP",
    horarios: "Recogida hotel: 7:00 am | Salida muelle: 8:00 am | Retorno isla: 3:00 pm",
    ubicacionSalida: "Recogida en Laguito, Bocagrande, Castillogrande y Zona Norte (avenida principal)",
    incluye: [
      "Transporte en lancha ida y vuelta",
      "Almuerzo servido estilo buffet",
      "Uso de las instalaciones",
      "Actividad gratis: Kayak (sujeto a disponibilidad)",
      "Recogida a partir de las 7:00 am en zonas autorizadas"
    ],
    noIncluye: [
      "Impuesto portuario: $29.000 por persona (Sujeto a cambio)",
      "Acuario: $40.000 adulto / $30.000 niño (Sujeto a cambio)",
      "Snorkel: $70.000 por persona",
      "Buceo: $210.000 por persona",
      "No incluye retorno en la tarde desde muelle hasta hotel"
    ]
  },
  {
    id: "2",
    slug: "sabai-maritimo",
    titulo: "Sabai Marítimo & Beach Venue",
    imagenPrincipal: "/images/tours/sabai-main.jpg",
    galeria: [
      "/images/tours/sabai-1.jpg",
      "/images/tours/sabai-2.jpg",
      "/images/tours/sabai-3.jpg"
    ],
    descripcionBreve: "Pasadía exclusivo con almuerzo a la carta, cama de playa, DJ en vivo y actividades náuticas.",
    precioDesde: "$480.000 COP",
    horarios: "Encuentro: 7:20 am | Regreso: 3:00 pm",
    ubicacionSalida: "Marina privada TODOMAR de Bocagrande",
    incluye: [
      "Impuesto de salida incluido",
      "Transporte en lancha compartida ida y regreso",
      "Botella de agua a bordo y paleta de frutas de bienvenida",
      "Tour panorámico por El Fuerte de Bocachica, península de Barú, Cholón e Islas del Rosario (baño de 30 min)",
      "Cama de playa y servicio de toalla",
      "Almuerzo a la carta (14 opciones) con bebida no alcohólica",
      "Kayak, paddleboard, voleibol y raquetas de playa",
      "Café ilimitado, Wi-Fi, piscina y duchas de agua dulce",
      "DJ en vivo (Sábados y Domingos)"
    ],
    noIncluye: [
      "Opciones de almuerzo fuera del menú del pasadía",
      "Jetski o gusano (ofrecidos por externos bajo su riesgo)",
      "Pagos en efectivo dentro del club (exclusivamente tarjeta por datáfono)",
      "Servicios no especificados"
    ]
  },
  {
    id: "3",
    slug: "mangata-beach-club",
    titulo: "Mangata Beach Club",
    imagenPrincipal: "/images/tours/mangata-main.jpg",
    galeria: [
      "/images/tours/mangata-1.jpg",
      "/images/tours/mangata-2.jpg",
      "/images/tours/mangata-3.jpg"
    ],
    descripcionBreve: "Experiencia de lujo con 2x1 en cócteles todo el día, snorkel en avioneta hundida y almuerzo a la carta.",
    precioDesde: "$399.000 COP",
    horarios: "Llegada a marina: 7:30 am | Retorno aprox: 3:00 pm",
    ubicacionSalida: "Marina privada TODOMAR de Bocagrande",
    incluye: [
      "Transporte en lanchas deportivas ida y vuelta",
      "Copa de champaña de bienvenida o jugo natural",
      "Acomodación en cama, sala o silla asoleadora",
      "Tour panorámico por las islas y snorkel en la Avioneta Hundida",
      "2x1 todo el día en cócteles seleccionados y cubetazo de cerveza (pagan 5, la 6ta gratis)",
      "Almuerzo a la carta (8 opciones) con bebida no alcohólica",
      "Uso de kayaks, paddleboards, bicicletas y acceso a todas las instalaciones",
      "Ducha de agua dulce, servicio de toallas y DJ diario"
    ],
    noIncluye: [
      "Impuesto de Parques Nacionales Naturales: $13.500 COP por persona (pago estrictamente en efectivo)",
      "Actividades adicionales no mencionadas"
    ]
  },
  {
    id: "4",
    slug: "tour-bahia-bequia",
    titulo: "Tour Bahía Bequia en Cartagena",
    imagenPrincipal: "/images/tours/bequia-bahia-main.jpg",
    galeria: [
      "/images/tours/bequia-bahia-1.jpg",
      "/images/tours/bequia-bahia-2.jpg"
    ],
    descripcionBreve: "Recorrido mágico de 2 horas por la bahía de Cartagena a bordo del Barco Bequia Eagle con barra libre.",
    precioDesde: "Consultar tarifa",
    horarios: "Citación: 04:40 pm | Recorrido: 05:30 pm a 07:30 pm (Lunes a Domingo)",
    ubicacionSalida: "Muelle de La Bodeguita, puerta #4",
    incluye: [
      "Recorrido de 2 horas por la bahía de Cartagena",
      "Cóctel de bienvenida",
      "Barra libre de cócteles con licores nacionales (no incluye cerveza)",
      "Agua y gaseosa servida en vaso",
      "Show de baile, clases de baile, bailarines, animador y DJ en vivo",
      "Protocolos de seguridad"
    ],
    noIncluye: [
      "Impuesto del Muelle: $18.000 COP por persona (Solo efectivo, sujeto a cambio)",
      "Gastos no especificados en el paquete"
    ]
  },
  {
    id: "5",
    slug: "noche-blanca-bequia",
    titulo: "Noche Blanca Bequia",
    imagenPrincipal: "/images/tours/noche-blanca-main.jpg",
    galeria: [
      "/images/tours/noche-blanca-1.jpg",
      "/images/tours/noche-blanca-2.jpg"
    ],
    descripcionBreve: "Una velada inolvidable de 3 horas navegando la bahía con cena servida en plato y barra libre.",
    precioDesde: "Consultar tarifa",
    horarios: "Citación: 07:15 pm | Zarpe: 08:00 pm - 11:00 pm",
    ubicacionSalida: "Muelle de La Bodeguita, puerta #4",
    incluye: [
      "Cóctel de bienvenida",
      "Recorrido de 3 horas por la bahía de Cartagena",
      "Cena servida en plato (2 proteínas, 4 acompañamientos, un postre y una bebida)",
      "Barra libre de cócteles con licores nacionales, gaseosas y agua",
      "Show de baile, bailarines, animador y DJ en vivo"
    ],
    noIncluye: [
      "Impuesto de Muelle: $18.000 por persona (Solo en efectivo)",
      "Cervezas (costo adicional)",
      "Gastos no especificados en el paquete"
    ]
  }
];

export function getTourBySlug(slug: string): TourItem | undefined {
  return toursData.find((t) => t.slug === slug);
}
