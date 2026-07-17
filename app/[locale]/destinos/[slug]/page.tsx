import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { destinos, getDestino } from "@/lib/data/destinos";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    destinos.map((d) => ({ locale, slug: d.slug })),
  );
}

export default async function DestinoDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destino = getDestino(slug);
  if (!destino) notFound();

  const t = await getTranslations("Placeholder");

  return (
    <PlaceholderPage
      eyebrow={t("destinoDetalle.eyebrow")}
      title={t("destinoDetalle.title", { nombre: destino.nombre })}
      description={t("destinoDetalle.description", { nombre: destino.nombre })}
      backLabel={t("backHome")}
      backHref="/destinos"
    />
  );
}
