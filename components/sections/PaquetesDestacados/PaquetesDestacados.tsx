import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { paquetesDestacados } from "@/lib/data/paquetes";
import { PaqueteCard } from "./PaqueteCard";

export function PaquetesDestacados() {
  const paquetes = paquetesDestacados.slice(0, 3);

  return (
    <Section>
      <Container>

        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <p className="text-label-caps text-primary">PAQUETES TURÍSTICOS</p>
            <h2 className="mt-3 font-display text-4xl font-light leading-tight text-primary lg:text-headline-xl">
              Diseña tu aventura perfecta
            </h2>
            <p className="mt-5 text-body-md text-on-surface-variant">
              Combinaciones cuidadosamente curadas de tours, embarcaciones y
              experiencias para maximizar tu estadía en el Caribe colombiano.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {paquetes.map((paquete) => (
              <PaqueteCard key={paquete.id} paquete={paquete} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center lg:mt-16">
            <Link
              href="/paquetes"
              className="inline-flex items-center gap-2 font-semibold text-primary transition-all duration-200 hover:gap-3"
            >
              <span className="text-label-caps">VER TODOS LOS PAQUETES</span>
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </ScrollReveal>

      </Container>
    </Section>
  );
}
