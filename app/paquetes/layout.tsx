import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paquetes Turísticos | Experiencias Tour Cartagena",
  description:
    "Paquetes todo incluido en Cartagena de Indias: tours, hospedaje, embarcaciones y experiencias premium.",
  openGraph: {
    title: "Paquetes Turísticos — Experiencias Tour Cartagena",
    description:
      "Paquetes todo incluido para descubrir el Caribe colombiano.",
    type: "website",
  },
};

export default function PaquetesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
