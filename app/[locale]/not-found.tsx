import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <Section className="flex min-h-[70vh] items-center pt-32 lg:pt-36">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-4 text-label-caps uppercase tracking-wider text-primary">
            {t("eyebrow")}
          </p>
          <h1 className="mb-4 text-headline-xl font-display font-light text-primary">
            {t("title")}
          </h1>
          <p className="mb-8 text-body-md text-on-surface-variant">
            {t("description")}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              {t("backHome")}
            </Link>
            <WhatsAppButton
              variant="default"
              size="md"
              mensaje={t("whatsappMessage")}
            >
              {t("contactUs")}
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
