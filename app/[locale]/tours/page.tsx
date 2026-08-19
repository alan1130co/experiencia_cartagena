import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { TourCard } from "@/components/catalogos/TourCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getTours } from "@/lib/data/tours";
import type { Locale } from "@/lib/i18n/catalog-locale";

export default function ToursPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations("ToursPage");
  const tours = getTours(locale);

  return (
    <>
      {/* HERO */}
      <Section className="bg-surface pt-36 lg:pt-44 pb-12 lg:pb-16">
        <Container>
          {/* above-the-fold: eager (Framer Motion anima al montar, sin esperar scroll) */}
          <ScrollReveal eager className="max-w-3xl mx-auto text-center">
            <p className="text-label-caps text-primary uppercase tracking-wider">
              {t("eyebrow")}
            </p>
            <h1 className="text-headline-xl font-display font-light text-primary mt-3">
              {t("title")}
            </h1>
            <p className="text-body-md text-on-surface-variant mt-5">
              {t("description")}
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* GRID */}
      <Section className="py-8 lg:py-12 pb-20 lg:pb-28">
        <Container>
          <p className="text-sm text-on-surface-variant mb-6">
            {t("showingCount", { count: tours.length })}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {tours.map((tour) => (
              <ScrollReveal key={tour.id} className="h-full">
                <TourCard tour={tour} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA FINAL */}
      <Section className="bg-primary text-white py-16 lg:py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-headline-lg font-display font-light mb-4">
              {t("ctaTitle")}
            </h2>
            <p className="text-body-md text-white/90 mb-6">
              {t("ctaText")}
            </p>
            <WhatsAppButton
              variant="default"
              size="lg"
              mensaje={t("whatsappMessage")}
            >
              {t("ctaButton")}
            </WhatsAppButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
