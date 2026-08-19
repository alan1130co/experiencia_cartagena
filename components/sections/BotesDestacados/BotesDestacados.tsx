import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { getBotesDestacados } from "@/lib/data/botes";
import type { Locale } from "@/lib/i18n/catalog-locale";
import { BoteCard } from "./BoteCard";

export function BotesDestacados() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Home.botes");
  const botes = getBotesDestacados(locale).slice(0, 3);

  return (
    <Section className="bg-surface">
      <Container>

        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <p className="text-label-caps text-primary">{t("eyebrow")}</p>
            <h2 className="mt-3 font-display text-4xl font-light leading-tight text-primary lg:text-headline-xl">
              {t("title")}
            </h2>
            <p className="mt-5 text-body-md text-on-surface-variant">
              {t("description")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {botes.map((bote) => (
              <BoteCard key={bote.id} bote={bote} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center lg:mt-16">
            <Link
              href="/flota"
              className="inline-flex items-center gap-2 font-semibold text-primary transition-all duration-200 hover:gap-3"
            >
              <span className="text-label-caps">{t("ctaViewAll")}</span>
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </ScrollReveal>

      </Container>
    </Section>
  );
}
