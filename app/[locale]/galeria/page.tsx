import { useTranslations } from "next-intl";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export default function GaleriaPage() {
  const t = useTranslations("Placeholder");

  return (
    <PlaceholderPage
      eyebrow={t("galeria.eyebrow")}
      title={t("galeria.title")}
      description={t("galeria.description")}
      backLabel={t("backHome")}
    />
  );
}
