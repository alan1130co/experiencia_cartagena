import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { Accordion } from "@/components/ui/Accordion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { faqs } from "@/lib/data/faq";

export function FAQ() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">

          <ScrollReveal>
            <div className="mb-12 text-center lg:mb-16">
              <p className="text-label-caps text-primary">Preguntas frecuentes</p>
              <h2 className="mt-3 font-display text-4xl font-light leading-tight text-primary lg:text-headline-xl">
                Todo lo que necesitas saber
              </h2>
              <p className="mt-5 text-body-md text-on-surface-variant">
                Las dudas más comunes antes de reservar, resueltas.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <Accordion items={faqs} />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-12 rounded-2xl bg-surface p-8 text-center">
              <p className="font-semibold text-on-surface">
                ¿No encontraste lo que buscabas?
              </p>
              <p className="mt-2 text-body-md text-on-surface-variant">
                Nuestro equipo responde en menos de 1 hora por WhatsApp.
              </p>
              <WhatsAppButton
                variant="default"
                size="md"
                mensaje="Hola, tengo una pregunta sobre sus tours y experiencias en Cartagena."
                className="mt-6 mx-auto"
              >
                PREGUNTAR POR WHATSAPP
              </WhatsAppButton>
            </div>
          </ScrollReveal>

        </div>
      </Container>
    </Section>
  );
}
