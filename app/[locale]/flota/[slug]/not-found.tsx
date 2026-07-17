import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowLeft } from "lucide-react";

export default function EmbarcacionNotFound() {
  return (
    <Section className="py-32 text-center">
      <Container>
        <h1 className="text-headline-lg font-display text-primary font-light mb-4">
          Embarcación no encontrada
        </h1>
        <p className="text-on-surface-variant mb-8">
          La embarcación que buscas no existe o ha sido removida del catálogo.
        </p>
        <Link
          href="/flota"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90"
        >
          <ArrowLeft className="w-4 h-4" />
          Ver toda la flota
        </Link>
      </Container>
    </Section>
  );
}
