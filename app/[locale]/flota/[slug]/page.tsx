import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ArrowLeft,
  Check,
  X,
  MapPin,
  Users,
  Ruler,
  BedDouble,
  Bath,
  Snowflake,
  ChefHat,
  Anchor,
  Volume2,
  Sun,
  Zap,
  Shield,
  PartyPopper,
  Waves,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { EmbarcacionCard } from "@/components/catalogos/EmbarcacionCard";
import { GaleriaFotos } from "@/components/catalogos/GaleriaFotos";
import { formatPrice } from "@/lib/utils";
import { buildProductTitle, withBrand } from "@/lib/metadata";
import { getTouristTripSchema, getBreadcrumbSchema } from "@/lib/schema";
import {
  getEmbarcacionBySlug,
  getRelacionadas,
  flotaCompleta,
} from "@/lib/data/flota";
import type { Locale } from "@/lib/i18n/catalog-locale";
import { routing } from "@/i18n/routing";

// SSG: pre-generar las páginas (18 embarcaciones × 2 locales) en build time
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    flotaCompleta.map((emb) => ({ locale, slug: emb.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const emb = getEmbarcacionBySlug(slug, locale as Locale);
  const tMeta = await getTranslations({ locale, namespace: "Detalle" });

  if (!emb) return { title: tMeta("embarcacionNoEncontrada") };

  const title = buildProductTitle(emb.nombre, [
    tMeta("embarcacionTitle1", { nombre: emb.nombre }),
    tMeta("embarcacionTitle2", { nombre: emb.nombre }),
  ]);

  return {
    title,
    description: emb.descripcionCorta,
    keywords: [
      emb.nombre,
      "alquiler Cartagena",
      "Islas del Rosario",
      emb._categoria === "yate"
        ? "yate Cartagena"
        : emb._categoria === "catamaran"
        ? "catamarán Cartagena"
        : "bote Cartagena",
    ],
    openGraph: {
      title: withBrand(title),
      description: emb.descripcionCorta,
      images: [{ url: emb.imagenPrincipal, alt: emb.imagenAlt }],
      type: "website",
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ICON_MAP: Record<string, any> = {
  Users,
  Ruler,
  BedDouble,
  Bath,
  Snowflake,
  ChefHat,
  Anchor,
  Volume2,
  Sun,
  Zap,
  Shield,
  PartyPopper,
  Waves,
};

export default async function EmbarcacionDetallePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const emb = getEmbarcacionBySlug(slug, locale as Locale);

  if (!emb) notFound();

  const relacionadas = getRelacionadas(emb, locale as Locale, 3);
  const t = await getTranslations("Detalle");
  const tCommon = await getTranslations("Common");
  const categoriaTexto = tCommon(`category.${emb._categoria}`);

  return (
    <>
      {/* JSON-LD: producto + ruta de navegación */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: getTouristTripSchema({
            nombre: emb.nombre,
            descripcion: emb.descripcionCorta,
            precio: emb.precioPorDia,
            moneda: emb.moneda,
            duracion: emb.duracionTipica,
            imagen: emb.imagenPrincipal,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: getBreadcrumbSchema([
            { nombre: "Inicio", href: `/${locale}` },
            { nombre: "Flota", href: `/${locale}/flota` },
            { nombre: emb.nombre, href: `/${locale}/flota/${emb.slug}` },
          ]),
        }}
      />

      {/* Breadcrumb / volver */}
      <Section className="pt-32 lg:pt-36 pb-4">
        <Container>
          <Link
            href="/flota"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("volverFlota")}
          </Link>
        </Container>
      </Section>

      {/* HERO: Galería + Info principal */}
      <Section className="py-8 lg:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* GALERÍA (izquierda) */}
            <GaleriaFotos
              imagenPrincipal={emb.imagenPrincipal}
              imagenes={emb.imagenes}
              alt={emb.imagenAlt}
            />

            {/* INFO PRINCIPAL (derecha) */}
            <div className="flex flex-col">

              {/* Badges */}
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                  {categoriaTexto}
                </span>
                {emb.masPopular && (
                  <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    {tCommon("mostPopular")}
                  </span>
                )}
              </div>

              {/* Nombre */}
              <h1 className="text-headline-xl font-display font-light text-primary leading-tight">
                {emb.nombre}
              </h1>

              {/* Marca/Modelo (catamaranes) */}
              {emb._categoria === "catamaran" && "marca" in emb && (
                <p className="text-on-surface-variant uppercase tracking-wider text-sm mt-2">
                  {emb.marca} {emb.modelo}
                </p>
              )}

              {/* Descripción corta */}
              <p className="text-body-lg text-on-surface mt-6 leading-relaxed">
                {emb.descripcionCorta}
              </p>

              {/* Características clave */}
              <div className="grid grid-cols-2 gap-4 mt-8 p-6 bg-surface rounded-2xl">
                {emb.caracteristicas.slice(0, 6).map((carac, i) => {
                  const Icon = ICON_MAP[carac.icono];
                  return (
                    <div key={i} className="flex items-center gap-3">
                      {Icon && (
                        <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                      <span className="text-sm text-on-surface">
                        {carac.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Precio */}
              <div className="mt-8 pb-6 border-b border-outline-variant">
                <p className="text-sm text-on-surface-variant">{tCommon("desde")}</p>
                <p className="text-headline-lg font-display text-primary font-light mt-1">
                  {formatPrice(emb.precioPorDia)}
                  <span className="text-base font-sans text-on-surface-variant">
                    {" "}
                    {tCommon("perDay")}
                  </span>
                </p>
                {emb.capacidadAdicional && (
                  <p className="text-xs text-on-surface-variant mt-2 italic">
                    {emb.capacidadAdicional}
                  </p>
                )}
              </div>

              {/* CTAs */}
              <div className="mt-6 space-y-3">
                <WhatsAppButton
                  variant="default"
                  size="lg"
                  productName={emb.nombre}
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

      {/* DESCRIPCIÓN LARGA */}
      <Section className="py-12 bg-surface">
        <Container className="max-w-3xl">
          <h2 className="text-headline-md font-display text-primary font-light mb-6">
            {t("acercaDe", { nombre: emb.nombre })}
          </h2>
          <p className="text-body-lg text-on-surface leading-relaxed whitespace-pre-line">
            {emb.descripcionLarga}
          </p>
        </Container>
      </Section>

      {/* INCLUYE / NO INCLUYE */}
      <Section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            <div>
              <h3 className="text-headline-md font-display text-primary font-light mb-6">
                {t("queIncluye")}
              </h3>
              <ul className="space-y-3">
                {emb.incluye.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-brand-green" />
                    </div>
                    <span className="text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-headline-md font-display text-primary font-light mb-6">
                {t("noIncluido")}
              </h3>
              <ul className="space-y-3">
                {emb.noIncluye.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-on-surface-variant/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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

      {/* DESTINOS */}
      <Section className="py-12 bg-surface">
        <Container className="max-w-3xl">
          <h3 className="text-headline-md font-display text-primary font-light mb-6">
            {t("destinosPosibles")}
          </h3>
          <div className="flex flex-wrap gap-3">
            {emb.destinosPosibles.map((destino) => (
              <div
                key={destino}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-outline-variant"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{destino}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-on-surface-variant mt-4 italic">
            {t("duracionTipica", { duracion: emb.duracionTipica })}
          </p>
        </Container>
      </Section>

      {/* RELACIONADAS */}
      {relacionadas.length > 0 && (
        <Section className="py-16 lg:py-20">
          <Container>
            <h3 className="text-headline-lg font-display text-primary font-light text-center mb-12">
              {t("tambienTePuedeInteresar")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relacionadas.map((rel) => (
                <EmbarcacionCard
                  key={rel.id}
                  embarcacion={rel}
                  categoria={rel._categoria}
                />
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
              {t("listoParaReservar", { nombre: emb.nombre })}
            </h2>
            <p className="text-body-md text-white/90 mb-6">
              {t("respuestaInmediataWhatsapp")}
            </p>
            <WhatsAppButton
              variant="default"
              size="lg"
              productName={emb.nombre}
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
