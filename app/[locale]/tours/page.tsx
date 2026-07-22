import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { TourCard } from "@/components/catalogos/TourCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { toursData } from "@/lib/data/tours";

export default function ToursPage() {
  return (
    <>
      {/* HERO */}
      <Section className="bg-surface pt-36 lg:pt-44 pb-12 lg:pb-16">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-label-caps text-primary uppercase tracking-wider">
                Tours en Cartagena
              </p>
              <h1 className="text-headline-xl font-display font-light text-primary mt-3">
                Descubre el Caribe colombiano
              </h1>
              <p className="text-body-md text-on-surface-variant mt-5">
                Recorridos curados con guías locales expertos para vivir
                Cartagena de Indias como un verdadero local.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* GRID */}
      <Section className="py-8 lg:py-12 pb-20 lg:pb-28">
        <Container>
          <p className="text-sm text-on-surface-variant mb-6">
            Mostrando{" "}
            <strong className="text-primary">{toursData.length}</strong>{" "}
            {toursData.length === 1 ? "tour" : "tours"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {toursData.map((tour) => (
              <ScrollReveal key={tour.id} className="h-full">
                <TourCard tour={tour} />
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
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-body-md text-white/90 mb-6">
              Diseñamos tours personalizados según tu grupo y preferencias.
              Contáctanos por WhatsApp.
            </p>
            <WhatsAppButton
              variant="default"
              size="lg"
              mensaje="Hola, quiero un tour personalizado para mi grupo"
            >
              HABLAR POR WHATSAPP
            </WhatsAppButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
