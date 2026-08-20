import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.flota" });
  const base = buildMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/flota`,
  });
  return {
    ...base,
    keywords: [
      "alquiler yates Cartagena",
      "botes Cartagena",
      "catamaranes Cartagena",
      "Islas del Rosario",
      "Powercat Cartagena",
    ],
    openGraph: {
      ...base.openGraph,
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
  };
}

export default function FlotaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
