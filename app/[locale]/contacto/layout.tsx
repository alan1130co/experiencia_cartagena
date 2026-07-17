import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Experiencias Tour Cartagena",
  description:
    "Contáctanos por WhatsApp, email o formulario. Respuestas inmediatas para tus consultas sobre tours, yates y experiencias en Cartagena.",
  openGraph: {
    title: "Contacto — Experiencias Tour Cartagena",
    description: "Estamos aquí para ayudarte. Respondemos en menos de 1 hora.",
    type: "website",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
