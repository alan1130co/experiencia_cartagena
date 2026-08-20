import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const base = buildMetadata({
    title: "Nosotros",
    description:
      "Conoce el equipo y la historia detrás de las mejores experiencias náuticas en Cartagena de Indias.",
    path: `/${locale}/nosotros`,
  });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      title: "Nosotros — Experiencias Tour Cartagena",
      description: "Pasión por el Caribe colombiano. Conoce quiénes somos.",
    },
  };
}

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
