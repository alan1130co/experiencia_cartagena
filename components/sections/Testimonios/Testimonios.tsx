import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { testimoniosDestacados } from "@/lib/data/testimonios";
import { TestimonioCard } from "./TestimonioCard";

export function Testimonios() {
  const testimonios = testimoniosDestacados.slice(0, 3);

  return (
    <Section className="bg-surface">
      <Container>

        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <p className="text-label-caps text-primary">TESTIMONIOS</p>
            <h2 className="mt-3 font-display text-4xl font-light leading-tight text-primary lg:text-headline-xl">
              Historias de nuestros viajeros
            </h2>
            <p className="mt-5 text-body-md text-on-surface-variant">
              Más de 500 familias han confiado en nosotros para vivir
              experiencias únicas en Cartagena de Indias.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {testimonios.map((testimonio) => (
              <TestimonioCard key={testimonio.id} testimonio={testimonio} />
            ))}
          </div>
        </ScrollReveal>

      </Container>
    </Section>
  );
}
