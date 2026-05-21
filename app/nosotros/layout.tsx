import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Experiencias Tour Cartagena",
  description:
    "Conoce el equipo y la historia detrás de las mejores experiencias náuticas en Cartagena de Indias.",
  openGraph: {
    title: "Nosotros — Experiencias Tour Cartagena",
    description:
      "Pasión por el Caribe colombiano. Conoce quiénes somos.",
    type: "website",
  },
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
