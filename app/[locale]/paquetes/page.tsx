import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { PaqueteCard } from "@/components/catalogos/PaqueteCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { paquetes } from "@/lib/data/paquetes";

export default function PaquetesPage() {
  return (
    <>
      {/* HERO */}
      <Section className="bg-surface pt-36 lg:pt-44 pb-12 lg:pb-16">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-label-caps text-primary uppercase tracking-wider">
                Paquetes Turísticos
              </p>
              <h1 className="text-headline-xl font-display font-light text-primary mt-3">
                Todo incluido en Cartagena
              </h1>
              <p className="text-body-md text-on-surface-variant mt-5">
                Combinaciones curadas de tours, embarcaciones y experiencias
                para maximizar tu estadía en Cartagena de Indias.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* GRID DE PAQUETES */}
      <Section className="py-12 lg:py-16 pb-20 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {paquetes.map((paquete, i) => (
              <ScrollReveal key={paquete.id} delay={i * 100}>
                <PaqueteCard paquete={paquete} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA FINAL */}
      <Section className="bg-primary text-white py-16 lg:py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-headline-lg font-display font-light mb-4">
              ¿Necesitas un paquete personalizado?
            </h2>
            <p className="text-body-md text-white/90 mb-6">
              Diseñamos paquetes a medida para grupos, empresas y ocasiones
              especiales. Cuéntanos qué buscas.
            </p>
            <WhatsAppButton
              variant="default"
              size="lg"
              mensaje="Hola, quiero un paquete personalizado para mi grupo"
            >
              HABLAR POR WHATSAPP
            </WhatsAppButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
