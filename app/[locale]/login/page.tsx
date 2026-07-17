import { useTranslations } from "next-intl";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export default function LoginPage() {
  const t = useTranslations("Placeholder");

  return (
    <PlaceholderPage
      eyebrow={t("login.eyebrow")}
      title={t("login.title")}
      description={t("login.description")}
      backLabel={t("backHome")}
    />
  );
}
