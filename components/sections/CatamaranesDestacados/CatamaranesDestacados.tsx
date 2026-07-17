import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { EmbarcacionCard } from "@/components/catalogos/EmbarcacionCard";
import { catamaranesDestacados } from "@/lib/data/catamaranes";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function CatamaranesDestacados() {
  return (
    <Section className="bg-surface py-20 lg:py-28">
      <Container>

        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <p className="text-label-caps text-primary uppercase tracking-wider">
              Catamaranes Powercat
            </p>
            <h2 className="text-headline-lg lg:text-headline-xl text-primary font-display font-light mt-3">
              Catamaranes para grupos grandes
            </h2>
            <p className="text-body-md text-on-surface-variant mt-5">
              Powercats Leopard y Lagoon con capacidad hasta 35 personas,
              ideales para eventos especiales y celebraciones en el Caribe.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {catamaranesDestacados.slice(0, 3).map((catamaran) => (
            <ScrollReveal key={catamaran.id}>
              <EmbarcacionCard embarcacion={catamaran} categoria="catamaran" />
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <Link
            href="/catamaranes"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            <span className="text-label-caps tracking-wider">VER TODOS LOS CATAMARANES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </Container>
    </Section>
  );
}
