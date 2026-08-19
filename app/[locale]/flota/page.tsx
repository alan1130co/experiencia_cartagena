import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FlotaFiltrosYGrid } from "@/components/catalogos/FlotaFiltrosYGrid";

function GridSkeleton() {
  return (
    <>
      {/* FILTROS (skeleton) */}
      <Section className="py-6 lg:py-8">
        <Container>
          <div className="animate-pulse rounded-2xl border border-outline-variant bg-surface p-4 lg:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-9 w-24 rounded-full bg-outline-variant/40" />
                ))}
              </div>
              <div className="h-9 w-56 rounded-xl bg-outline-variant/40" />
            </div>
          </div>
        </Container>
      </Section>

      {/* GRID (skeleton) */}
      <Section className="pb-20 pt-4 lg:pb-28">
        <Container>
          <div className="mb-6 h-5 w-48 animate-pulse rounded bg-outline-variant/40" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse overflow-hidden rounded-2xl border border-outline-variant"
              >
                <div className="aspect-[4/3] bg-outline-variant/40" />
                <div className="space-y-3 p-6">
                  <div className="h-6 w-2/3 rounded bg-outline-variant/40" />
                  <div className="h-4 w-full rounded bg-outline-variant/30" />
                  <div className="h-4 w-5/6 rounded bg-outline-variant/30" />
                  <div className="mt-4 h-10 w-full rounded-full bg-outline-variant/40" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default function FlotaPage() {
  const t = useTranslations("FlotaPage");

  return (
    <>
      {/* HERO — HTML estático desde el primer byte, no depende de searchParams */}
      <Section className="bg-surface pt-36 lg:pt-44 pb-12 lg:pb-16">
        <Container>
          {/* above-the-fold: eager (Framer Motion anima al montar, sin esperar scroll) */}
          <ScrollReveal eager className="max-w-3xl mx-auto text-center">
            <p className="text-label-caps text-primary uppercase tracking-wider">
              {t("eyebrow")}
            </p>
            <h1 className="font-display text-4xl lg:text-headline-xl font-light text-primary mt-3 leading-tight">
              {t("title")}
            </h1>
            <p className="text-body-md text-on-surface-variant mt-5 max-w-2xl mx-auto">
              {t("description")}
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* FILTROS + GRID: única parte que depende de useSearchParams */}
      <Suspense fallback={<GridSkeleton />}>
        <FlotaFiltrosYGrid />
      </Suspense>

      {/* CTA FINAL — HTML estático desde el primer byte */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-headline-lg font-light mb-4">
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
      </section>
    </>
  );
}
