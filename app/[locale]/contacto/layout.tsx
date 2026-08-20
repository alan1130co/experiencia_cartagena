import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const base = buildMetadata({
    title: "Contacto",
    description:
      "Contáctanos por WhatsApp, email o formulario. Respuestas inmediatas para tus consultas sobre tours, yates y experiencias en Cartagena.",
    path: `/${locale}/contacto`,
  });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      title: "Contacto — Experiencias Tour Cartagena",
      description: "Estamos aquí para ayudarte. Respondemos en menos de 1 hora.",
    },
  };
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
