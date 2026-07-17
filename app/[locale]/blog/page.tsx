import { useTranslations } from "next-intl";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export default function BlogPage() {
  const t = useTranslations("Placeholder");

  return (
    <PlaceholderPage
      eyebrow={t("blog.eyebrow")}
      title={t("blog.title")}
      description={t("blog.description")}
      backLabel={t("backHome")}
    />
  );
}
