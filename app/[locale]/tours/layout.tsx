import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tours en Cartagena | Experiencias Tour Cartagena",
  description:
    "Descubre Cartagena con nuestros tours: Centro Histórico, Islas del Rosario, Playa Blanca, gastronomía y más. Reserva ahora por WhatsApp.",
  keywords: [
    "tours Cartagena",
    "Centro Histórico",
    "Islas del Rosario",
    "Playa Blanca",
    "Cholón",
  ],
  openGraph: {
    title: "Tours en Cartagena — Experiencias Tour Cartagena",
    description: "10+ tours para descubrir el Caribe colombiano",
    type: "website",
  },
};

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
