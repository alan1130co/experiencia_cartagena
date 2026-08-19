import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Check, X, MapPin, Calendar } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { TourCard } from "@/components/catalogos/TourCard";
import { GaleriaFotos } from "@/components/catalogos/GaleriaFotos";
import { buildProductTitle, withBrand } from "@/lib/metadata";
import {
  getTouristTripSchema,
  getBreadcrumbSchema,
  parsePrecioTexto,
} from "@/lib/schema";
import { toursData, getTours, getTourBySlug } from "@/lib/data/tours";
import type { Locale } from "@/lib/i18n/catalog-locale";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    toursData.map((t) => ({ locale, slug: t.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const tour = getTourBySlug(slug, locale as Locale);
  const tMeta = await getTranslations({ locale, namespace: "Detalle" });
  if (!tour) return { title: tMeta("tourNoEncontrado") };

  const title = buildProductTitle(tour.titulo, [
    tMeta("tourTitle1", { titulo: tour.titulo }),
    tMeta("tourTitle2", { titulo: tour.titulo }),
  ]);

  return {
    title,
    description: tour.descripcionBreve,
    keywords: [tour.titulo, "tour Cartagena"],
    openGraph: {
      title: withBrand(title),
      description: tour.descripcionBreve,
      images: [{ url: tour.imagenPrincipal, alt: tour.titulo }],
      type: "website",
    },
  };
}

export default async function TourDetallePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const tour = getTourBySlug(slug, locale as Locale);
  if (!tour) notFound();

  const relacionados = getTours(locale as Locale)
    .filter((t) => t.slug !== tour.slug)
    .slice(0, 3);

  const precio = parsePrecioTexto(tour.precioDesde);
  const t = await getTranslations("Detalle");
  const tCommon = await getTranslations("Common");

  return (
    <>
      {/* JSON-LD: producto + ruta de navegación */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: getTouristTripSchema({
            nombre: tour.titulo,
            descripcion: tour.descripcionBreve,
            precio: precio?.precio ?? null,
            moneda: precio?.moneda ?? "COP",
            duracion: tour.horarios,
            imagen: tour.imagenPrincipal,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: getBreadcrumbSchema([
            { nombre: "Inicio", href: `/${locale}` },
            { nombre: "Tours", href: `/${locale}/tours` },
            { nombre: tour.titulo, href: `/${locale}/tours/${tour.slug}` },
          ]),
        }}
      />

      {/* Breadcrumb / volver */}
      <Section className="pt-32 lg:pt-36 pb-4">
        <Container>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("volverTours")}
          </Link>
        </Container>
      </Section>

      {/* HERO: Galería + Info principal */}
      <Section className="py-8 lg:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* GALERÍA (izquierda) */}
            <GaleriaFotos
              imagenPrincipal={tour.imagenPrincipal}
              imagenes={tour.galeria}
              alt={tour.titulo}
            />

            {/* INFO PRINCIPAL (derecha) */}
            <div className="flex flex-col">
              {/* Nombre */}
              <h1 className="text-headline-xl font-display font-light text-primary leading-tight">
                {tour.titulo}
              </h1>

              {/* Descripción breve */}
              <p className="text-body-lg text-on-surface mt-4 leading-relaxed">
                {tour.descripcionBreve}
              </p>

              {/* Características clave */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 p-6 bg-surface rounded-2xl">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-on-surface-variant">{t("horarios")}</p>
                    <p className="text-sm font-semibold text-on-surface">
                      {tour.horarios}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-on-surface-variant">{t("salida")}</p>
                    <p className="text-sm font-semibold text-on-surface line-clamp-2">
                      {tour.ubicacionSalida}
                    </p>
                  </div>
                </div>
              </div>

              {/* Precio */}
              <div className="mt-8 pb-6 border-b border-outline-variant">
                <p className="text-sm text-on-surface-variant">{tCommon("desde")}</p>
                <p className="text-headline-lg font-display text-primary font-light mt-1">
                  {tour.precioDesde}
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-6 space-y-3">
                <WhatsAppButton
                  variant="default"
                  size="lg"
                  productName={tour.titulo}
                  intent="reservar"
                  className="w-full"
                >
                  {tCommon("reservarAhora")}
                </WhatsAppButton>
                <p className="text-xs text-on-surface-variant text-center">
                  {t("respuestaInmediataSinCompromiso")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* INCLUYE / NO INCLUYE */}
      <Section className="py-12 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Qué incluye */}
            <div>
              <h3 className="text-headline-md font-display text-primary font-light mb-6">
                {t("queIncluye")}
              </h3>
              <ul className="space-y-3">
                {tour.incluye.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-brand-green" />
                    </div>
                    <span className="text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* No incluido */}
            <div>
              <h3 className="text-headline-md font-display text-primary font-light mb-6">
                {t("noIncluido")}
              </h3>
              <ul className="space-y-3">
                {tour.noIncluye.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-on-surface-variant/10 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-on-surface-variant" />
                    </div>
                    <span className="text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* PUNTO DE ENCUENTRO */}
      <Section className="py-12">
        <Container className="max-w-3xl">
          <h3 className="text-headline-md font-display text-primary font-light mb-4">
            {t("puntoDeEncuentro")}
          </h3>
          <div className="flex items-start gap-3 p-6 bg-surface rounded-2xl border border-outline-variant">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-on-surface">
                {tour.ubicacionSalida}
              </p>
              <p className="text-sm text-on-surface-variant mt-1">
                {tour.horarios}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* TOURS RELACIONADOS */}
      {relacionados.length > 0 && (
        <Section className="py-16 lg:py-20 bg-surface">
          <Container>
            <h3 className="text-headline-lg font-display text-primary font-light text-center mb-12">
              {t("tambienTePuedeInteresar")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relacionados.map((rel) => (
                <TourCard key={rel.id} tour={rel} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA FINAL */}
      <Section className="bg-primary text-white py-16 lg:py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-headline-lg font-display font-light mb-4">
              {t("listoParaReservar", { nombre: tour.titulo })}
            </h2>
            <p className="text-body-md text-white/90 mb-6">
              {t("respuestaInmediataWhatsapp")}
            </p>
            <WhatsAppButton
              variant="default"
              size="lg"
              productName={tour.titulo}
              intent="consultar"
            >
              {tCommon("consultarDisponibilidad")}
            </WhatsAppButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
