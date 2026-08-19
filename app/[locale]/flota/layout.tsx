import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.flota" });
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "alquiler yates Cartagena",
      "botes Cartagena",
      "catamaranes Cartagena",
      "Islas del Rosario",
      "Powercat Cartagena",
    ],
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
    },
  };
}

export default function FlotaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
