import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function TourNotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center pt-28 lg:pt-32">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-label-caps text-primary uppercase tracking-wider mb-4">
            Tour no encontrado
          </p>
          <h1 className="text-headline-xl font-display font-light text-primary mb-4">
            Oops, este tour no existe
          </h1>
          <p className="text-body-md text-on-surface-variant mb-8">
            El tour que buscas no está disponible. Explora nuestro catálogo
            completo o contáctanos por WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Ver todos los tours
            </Link>
            <WhatsAppButton
              variant="default"
              size="md"
              mensaje="Hola, estoy buscando información sobre un tour en Cartagena"
            >
              PREGUNTAR POR WHATSAPP
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
