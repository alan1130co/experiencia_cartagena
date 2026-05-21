import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { toursPopulares } from "@/lib/data/tours";
import { TourCard } from "./TourCard";

export function ToursPopulares() {
  const tours = toursPopulares.slice(0, 3);

  return (
    <Section className="bg-surface">
      <Container>

        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <p className="text-label-caps text-primary">TOURS POPULARES</p>
            <h2 className="mt-3 font-display text-4xl font-light leading-tight text-primary lg:text-headline-xl">
              Descubre Cartagena
            </h2>
            <p className="mt-5 text-body-md text-on-surface-variant">
              Los recorridos más solicitados por nuestros viajeros — desde la
              Ciudad Amurallada hasta las Islas del Rosario.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center lg:mt-16">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 font-semibold text-primary transition-all duration-200 hover:gap-3"
            >
              <span className="text-label-caps">VER TODOS LOS TOURS</span>
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </ScrollReveal>

      </Container>
    </Section>
  );
}
