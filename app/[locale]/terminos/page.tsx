import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.terminos" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/terminos`,
  });
}

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
