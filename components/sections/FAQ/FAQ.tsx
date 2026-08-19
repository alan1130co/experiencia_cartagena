import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { Accordion } from "@/components/ui/Accordion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import type { FAQ as FAQItem } from "@/types";

export function FAQ() {
  const t = useTranslations("Home.faq");
  const items = t.raw("items") as FAQItem[];

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">

          <ScrollReveal>
            <div className="mb-12 text-center lg:mb-16">
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
            <Accordion items={items} />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-12 rounded-2xl bg-surface p-8 text-center">
              <p className="font-semibold text-on-surface">
                {t("notFoundTitle")}
              </p>
              <p className="mt-2 text-body-md text-on-surface-variant">
                {t("notFoundText")}
              </p>
              <WhatsAppButton
                variant="default"
                size="md"
                mensaje={t("whatsappMessage")}
                className="mt-6 mx-auto"
              >
                {t("ctaWhatsapp")}
              </WhatsAppButton>
            </div>
          </ScrollReveal>

        </div>
      </Container>
    </Section>
  );
}
