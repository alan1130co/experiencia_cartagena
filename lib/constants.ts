// ─── Información del negocio ─────────────────────────────────────────────────
// Los datos de negocio aún no confirmados están tipados como `null`.
// Antes de producción: busca `null as string | null` en este archivo y completa cada valor.
// No uses la cadena "PENDIENTE" — un `null` no puede filtrarse por accidente al DOM
// ni al JSON-LD de schema.ts, un string sí.

export const SITE_CONFIG = {
  name: "Cartagena Indigo",
  shortName: "Cartagena Indigo",
  tagline: "Agencia de Viajes Premium en Cartagena de Indias",
  url: "https://cartagenaindigo.com",
  logo: "/images/ui/logo.png", // TODO: colocar logo final en public/images/ui/logo.png
  ogImage: "/images/ui/og-default.jpg", // TODO: crear imagen OG 1200×630
  locale: "es_CO",
  language: "es",
} as const;

export const CONTACTO = {
  whatsapp: "573244921697",
  whatsappMensaje: "Hola, me interesa información sobre una reserva en Cartagena Indigo.",
  telefono: null as string | null,
  email: null as string | null,
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
  instagram: null as string | null, // URL completa: "https://instagram.com/..."
  facebook: null as string | null,
  tiktok: null as string | null,
  youtube: null as string | null,
} as const;

export const AÑO_FUNDACION: string | null = null; // formato ISO: "2019-01-01"

// ─── Copys de conversión (WhatsApp-first) ───────────────────────────────────
// Texto de botones CTA reutilizable en tarjetas y páginas de detalle
// (tours, paquetes, flota). El mensaje base de WhatsApp vive en
// CONTACTO.whatsappMensaje — única fuente de verdad, no lo dupliques aquí.

export const MENSAJES_VENTA = {
  botonConsultar: "Consultar disponibilidad",
  botonReservar: "Reservar ahora",
} as const;

// ─── Internacionalización (next-intl) ───────────────────────────────────────

export const I18N_CONFIG = {
  locales: ["es", "en"],
  defaultLocale: "es",
} as const;

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
// Los textos visibles NO viven aquí — `labelKey`/`descriptionKey` son claves
// del namespace "Header" en messages/{locale}.json. Esta estructura solo
// define la forma de la navegación (rutas e iconos), idéntica en todo idioma.
type NavDropdownItem = {
  labelKey: string;
  href: string;
  icon: string;
  descriptionKey: string;
};

export type NavLink = {
  labelKey: string;
  href: string;
  dropdown?: NavDropdownItem[];
};

export const NAV_LINKS: NavLink[] = [
  { labelKey: "nav.inicio", href: "/" },
  {
    labelKey: "nav.flota",
    href: "/flota",
    dropdown: [
      {
        labelKey: "nav.botes",
        href: "/botes",
        icon: "Anchor",
        descriptionKey: "nav.botesDesc",
      },
      {
        labelKey: "nav.yates",
        href: "/yates",
        icon: "Ship",
        descriptionKey: "nav.yatesDesc",
      },
      {
        labelKey: "nav.catamaranes",
        href: "/catamaranes",
        icon: "Sailboat",
        descriptionKey: "nav.catamaranesDesc",
      },
    ],
  },
  { labelKey: "nav.tours", href: "/tours" },
  { labelKey: "nav.paquetes", href: "/paquetes" },
  { labelKey: "nav.nosotros", href: "/nosotros" },
  { labelKey: "nav.contacto", href: "/contacto" },
];

// ─── Helpers de datos de negocio ────────────────────────────────────────────

/** URLs de redes sociales activas, listas para `sameAs` en JSON-LD (SEO). */
export function getSameAsUrls(): string[] {
  return Object.values(REDES_SOCIALES).filter(
    (url): url is string => Boolean(url),
  );
}

/** Construye el link de WhatsApp, o `null` si el número no está configurado. */
export function getWhatsAppUrl(mensaje?: string): string | null {
  if (!CONTACTO.whatsapp) return null;
  const numero = CONTACTO.whatsapp.replace(/[\s+()-]/g, "");
  const texto = encodeURIComponent(mensaje ?? CONTACTO.whatsappMensaje);
  return `https://wa.me/${numero}?text=${texto}`;
}

/** Intención de contacto: distingue un cierre directo de una consulta previa. */
export type WhatsAppIntent = "reservar" | "consultar";

/** Mensaje de WhatsApp personalizado con el nombre de un tour/paquete/embarcación. */
export function getProductWhatsAppMessage(
  productName: string,
  intent: WhatsAppIntent = "consultar",
): string {
  const accion =
    intent === "reservar"
      ? `quiero realizar una reserva para ${productName}`
      : `me gustaría obtener más información sobre ${productName}`;
  return `Hola, ${accion} en ${SITE_CONFIG.name}.`;
}
