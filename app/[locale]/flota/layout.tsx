import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Flota",
  description:
    "Botes, yates y catamaranes para tus experiencias en Cartagena de Indias. Embarcaciones premium con tripulación profesional para Islas del Rosario, Barú y la Bahía.",
  keywords: [
    "alquiler yates Cartagena",
    "botes Cartagena",
    "catamaranes Cartagena",
    "Islas del Rosario",
    "Powercat Cartagena",
  ],
  openGraph: {
    title: "Nuestra Flota — Experiencias Tour Cartagena",
    description: "Embarcaciones premium para vivir el Caribe colombiano",
    type: "website",
  },
};

export default function FlotaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
