import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildProductTitle, withBrand } from "@/lib/metadata";
import { getTouristDestinationSchema, getBreadcrumbSchema } from "@/lib/schema";
import { destinos, getDestino } from "@/lib/data/destinos";
import type { Locale } from "@/lib/i18n/catalog-locale";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    destinos.map((d) => ({ locale, slug: d.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const destino = getDestino(slug, locale as Locale);
  const tMeta = await getTranslations({ locale, namespace: "Detalle" });
  if (!destino) return { title: tMeta("destinoNoEncontrado") };

  const title = buildProductTitle(destino.nombre, [
    tMeta("destinoTitle1", { nombre: destino.nombre }),
    tMeta("destinoTitle2", { nombre: destino.nombre }),
  ]);

  return {
    title,
    description: `${destino.descripcionCorta} ${tMeta("destinoDescriptionSuffix")}`,
    openGraph: {
      title: withBrand(title),
      description: destino.descripcionCorta,
      images: [{ url: destino.imagen, alt: destino.imagenAlt }],
      type: "website",
    },
  };
}

export default async function DestinoDetallePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const destino = getDestino(slug, locale as Locale);
  if (!destino) notFound();

  const t = await getTranslations("Placeholder");

  return (
    <>
      {/* JSON-LD: destino turístico + ruta de navegación */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: getTouristDestinationSchema({
            nombre: destino.nombre,
            descripcion: destino.descripcion,
            imagen: destino.imagen,
            coordenadas: destino.coordenadas,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: getBreadcrumbSchema([
            { nombre: "Inicio", href: `/${locale}` },
            { nombre: "Destinos", href: `/${locale}/destinos` },
            { nombre: destino.nombre, href: `/${locale}/destinos/${destino.slug}` },
          ]),
        }}
      />
      <PlaceholderPage
        eyebrow={t("destinoDetalle.eyebrow")}
        title={t("destinoDetalle.title", { nombre: destino.nombre })}
        description={t("destinoDetalle.description", { nombre: destino.nombre })}
        backLabel={t("backHome")}
        backHref="/destinos"
      />
    </>
  );
}
