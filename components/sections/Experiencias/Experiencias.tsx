import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { experiencias } from "@/lib/data/experiencias";
import { ExperienciaCard } from "./ExperienciaCard";

export function Experiencias() {
  return (
    <Section>
      <Container>

        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <p className="text-label-caps text-primary">EXPERIENCIAS PREMIUM</p>
            <h2 className="mt-3 font-display text-4xl font-light leading-tight text-primary lg:text-headline-xl">
              Vive momentos inolvidables
            </h2>
            <p className="mt-5 text-body-md text-on-surface-variant">
              Curaduría de experiencias únicas diseñadas para superar tus
              expectativas en el Caribe colombiano.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {experiencias.map((exp) => (
              <ExperienciaCard key={exp.id} exp={exp} />
            ))}
          </div>
        </ScrollReveal>

      </Container>
    </Section>
  );
}
