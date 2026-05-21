import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { EmbarcacionCard } from "@/components/catalogos/EmbarcacionCard";
import { yatesDestacados } from "@/lib/data/yates";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function YatesDestacados() {
  return (
    <Section className="bg-white py-20 lg:py-28">
      <Container>

        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <p className="text-label-caps text-primary uppercase tracking-wider">
              Yates con cabinas
            </p>
            <h2 className="text-headline-lg lg:text-headline-xl text-primary font-display font-light mt-3">
              Yates de lujo para dormir a bordo
            </h2>
            <p className="text-body-md text-on-surface-variant mt-5">
              Embarcaciones con cabinas, cocina equipada y aire acondicionado
              para experiencias premium de varios días en el Caribe colombiano.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {yatesDestacados.slice(0, 3).map((yate) => (
            <ScrollReveal key={yate.id}>
              <EmbarcacionCard embarcacion={yate} categoria="yate" />
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <Link
            href="/yates"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            <span className="text-label-caps tracking-wider">VER TODOS LOS YATES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </Container>
    </Section>
  );
}
