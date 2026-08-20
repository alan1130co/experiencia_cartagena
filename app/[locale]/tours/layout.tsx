import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.tours" });
  const base = buildMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/tours`,
  });
  return {
    ...base,
    keywords: [
      "tours Cartagena",
      "Centro Histórico",
      "Islas del Rosario",
      "Playa Blanca",
      "Cholón",
    ],
    openGraph: {
      ...base.openGraph,
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
  };
}

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
