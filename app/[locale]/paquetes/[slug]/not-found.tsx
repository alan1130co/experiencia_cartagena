import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function PaqueteNotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center pt-32 lg:pt-36">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-label-caps text-primary uppercase tracking-wider mb-4">
            Paquete no encontrado
          </p>
          <h1 className="text-headline-xl font-display font-light text-primary mb-4">
            Este paquete no existe
          </h1>
          <p className="text-body-md text-on-surface-variant mb-8">
            El paquete que buscas no está disponible. Explora nuestros paquetes
            o cuéntanos lo que necesitas por WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/paquetes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Ver todos los paquetes
            </Link>
            <WhatsAppButton
              variant="default"
              size="md"
              mensaje="Hola, quiero información sobre los paquetes turísticos"
            >
              PREGUNTAR POR WHATSAPP
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
