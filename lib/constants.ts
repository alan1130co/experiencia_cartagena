// ─── Información del negocio ─────────────────────────────────────────────────
// Busca "TODO: rellenar dato real" para encontrar todos los placeholders

export const SITE_CONFIG = {
  name: "Experiencias Tour Cartagena",
  shortName: "Experiencias Tour",
  tagline: "Agencia de Viajes Premium en Cartagena de Indias",
  url: "https://experienciascartagena.com", // TODO: rellenar dato real
  logo: "/images/ui/logo.png", // TODO: colocar logo final en public/images/ui/logo.png
  ogImage: "/images/ui/og-default.jpg", // TODO: crear imagen OG 1200×630
  locale: "es_CO",
  language: "es",
} as const;

export const CONTACTO = {
  whatsapp: "PENDIENTE", // TODO: rellenar número WhatsApp Business (ej: "573001234567")
  whatsappMensaje: "Hola, me interesa conocer más sobre sus tours y experiencias en Cartagena.",
  telefono: "PENDIENTE", // TODO: rellenar dato real
  email: "PENDIENTE", // TODO: rellenar dato real
  direccion: "Torices Calle 42 #13-59",
  ciudad: "Cartagena de Indias",
  departamento: "Bolívar",
  pais: "Colombia",
  codigoPostal: "130001",
} as const;

export const COORDENADAS = {
  lat: 10.391,
  lng: -75.4794,
} as const;

export const REDES_SOCIALES = {
  instagram: "PENDIENTE", // TODO: rellenar dato real (ej: "@experienciascartagena")
  facebook: "PENDIENTE", // TODO: rellenar dato real
  tiktok: "PENDIENTE", // TODO: rellenar dato real
  youtube: "PENDIENTE", // TODO: rellenar dato real
} as const;

export const AÑO_FUNDACION = "PENDIENTE"; // TODO: rellenar dato real

export const KEYWORDS_PRIMARIAS = [
  "viajes a Cartagena",
  "tours Cartagena de Indias",
  "agencia de viajes Cartagena",
  "paquetes turísticos Cartagena",
  "botes y lanchas en Cartagena",
  "experiencias Cartagena Colombia",
] as const;

export const KEYWORDS_LONGTAIL = [
  "qué hacer en Cartagena de Indias",
  "tour Islas del Rosario desde Cartagena",
  "alquiler de yate privado en Cartagena",
  "mejores paquetes turísticos en Cartagena",
  "guía de viaje Cartagena Colombia",
] as const;

// Navegación principal
type NavDropdownItem = {
  label: string;
  href: string;
  icon: string;
  description: string;
};

export type NavLink = {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Flota",
    href: "/flota",
    dropdown: [
      {
        label: "Botes y Lanchas",
        href: "/botes",
        icon: "Anchor",
        description: "Speedboats y lanchas rápidas para el día",
      },
      {
        label: "Yates",
        href: "/yates",
        icon: "Ship",
        description: "Yates de lujo con cabinas para dormir",
      },
      {
        label: "Catamaranes",
        href: "/catamaranes",
        icon: "Sailboat",
        description: "Powercats Leopard y Lagoon",
      },
    ],
  },
  { label: "Tours", href: "/tours" },
  { label: "Paquetes", href: "/paquetes" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

// WhatsApp helper
export function getWhatsAppUrl(mensaje?: string): string {
  const numero = CONTACTO.whatsapp;
  const texto = encodeURIComponent(mensaje ?? CONTACTO.whatsappMensaje);
  return `https://wa.me/${numero}?text=${texto}`;
}
