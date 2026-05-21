import { CONTACTO, COORDENADAS, SITE_CONFIG, AÑO_FUNDACION } from "./constants";

// Sanitiza el JSON-LD para prevenir XSS
function safeStringify(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export function getTravelAgencySchema() {
  return safeStringify({
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: SITE_CONFIG.name,
    description:
      "Agencia de viajes premium en Cartagena de Indias. Tours exclusivos, paquetes turísticos y experiencias únicas en el Caribe colombiano.",
    url: SITE_CONFIG.url,
    telephone: CONTACTO.telefono, // TODO: rellenar dato real
    email: CONTACTO.email, // TODO: rellenar dato real
    foundingDate: AÑO_FUNDACION, // TODO: rellenar dato real
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACTO.direccion, // TODO: rellenar dato real
      addressLocality: CONTACTO.ciudad,
      addressRegion: CONTACTO.departamento,
      postalCode: CONTACTO.codigoPostal,
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COORDENADAS.lat,
      longitude: COORDENADAS.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    currenciesAccepted: "COP, USD",
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Cartagena de Indias",
    },
  });
}

export function getTouristDestinationSchema(destino: {
  nombre: string;
  descripcion: string;
  imagen: string;
  coordenadas?: { lat: number; lng: number };
}) {
  return safeStringify({
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destino.nombre,
    description: destino.descripcion,
    image: destino.imagen,
    ...(destino.coordenadas && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: destino.coordenadas.lat,
        longitude: destino.coordenadas.lng,
      },
    }),
  });
}

export function getTouristTripSchema(plan: {
  nombre: string;
  descripcion: string;
  precio: number;
  moneda: string;
  duracion: string;
  imagen: string;
}) {
  return safeStringify({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: plan.nombre,
    description: plan.descripcion,
    image: plan.imagen,
    touristType: "Cultural",
    offers: {
      "@type": "Offer",
      price: plan.precio,
      priceCurrency: plan.moneda,
      availability: "https://schema.org/InStock",
    },
  });
}

export function getFAQSchema(
  faqs: Array<{ pregunta: string; respuesta: string }>
) {
  return safeStringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.respuesta,
      },
    })),
  });
}

export function getBreadcrumbSchema(
  items: Array<{ nombre: string; href: string }>
) {
  return safeStringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.nombre,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  });
}

export function getAggregateRatingSchema(testimonios: {
  calificacionPromedio: number;
  totalResenas: number;
}) {
  return safeStringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: testimonios.calificacionPromedio,
      reviewCount: testimonios.totalResenas,
      bestRating: 5,
      worstRating: 1,
    },
  });
}
