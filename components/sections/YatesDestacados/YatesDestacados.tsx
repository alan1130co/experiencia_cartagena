import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { EmbarcacionCard } from "@/components/catalogos/EmbarcacionCard";
import { getYatesDestacados } from "@/lib/data/yates";
import type { Locale } from "@/lib/i18n/catalog-locale";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function YatesDestacados() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Home.yates");
  const yates = getYatesDestacados(locale);

  return (
    <Section className="bg-white py-20 lg:py-28">
      <Container>

        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <p className="text-label-caps text-primary uppercase tracking-wider">
              {t("eyebrow")}
            </p>
            <h2 className="text-headline-lg lg:text-headline-xl text-primary font-display font-light mt-3">
              {t("title")}
            </h2>
            <p className="text-body-md text-on-surface-variant mt-5">
              {t("description")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {yates.slice(0, 3).map((yate) => (
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
            <span className="text-label-caps tracking-wider">{t("ctaViewAll")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </Container>
    </Section>
  );
}
