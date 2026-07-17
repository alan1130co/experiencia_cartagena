import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  description: string;
  backLabel: string;
  backHref?: string;
  children?: React.ReactNode;
}

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  backLabel,
  backHref = "/",
  children,
}: PlaceholderPageProps) {
  return (
    <Section className="flex min-h-[60vh] items-center pt-32 lg:pt-36">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-4 text-label-caps uppercase tracking-wider text-primary">
            {eyebrow}
          </p>
          <h1 className="mb-4 text-headline-xl font-display font-light text-primary">
            {title}
          </h1>
          <p className="mb-8 text-body-md text-on-surface-variant">
            {description}
          </p>

          {children}

          <Link
            href={backHref}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
