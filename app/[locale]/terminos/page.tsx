import { useTranslations } from "next-intl";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export default function TerminosPage() {
  const t = useTranslations("Placeholder");

  return (
    <PlaceholderPage
      eyebrow={t("terminos.eyebrow")}
      title={t("terminos.title")}
      description={t("terminos.description")}
      backLabel={t("backHome")}
    />
  );
}
