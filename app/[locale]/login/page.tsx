import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.login" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

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
