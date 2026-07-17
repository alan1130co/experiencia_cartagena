import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { MENSAJES_VENTA } from "@/lib/constants";
import {
  getEmbarcacionBySlug,
  getRelacionadas,
  flotaCompleta,
} from "@/lib/data/flota";
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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const emb = getEmbarcacionBySlug(slug);

  if (!emb) return { title: "Embarcación no encontrada" };

  return {
    title: `${emb.nombre} | Experiencias Tour Cartagena`,
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
      title: `${emb.nombre} | Experiencias Tour Cartagena`,
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

function categoriaLabel(cat: string): string {
  return (
    ({ bote: "Bote", yate: "Yate", catamaran: "Catamarán" } as Record<
      string,
      string
    >)[cat] ?? cat
  );
}

export default async function EmbarcacionDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const emb = getEmbarcacionBySlug(slug);

  if (!emb) notFound();

  const relacionadas = getRelacionadas(emb, 3);
  const categoriaTexto = categoriaLabel(emb._categoria);

  return (
    <>
      {/* Breadcrumb / volver */}
      <Section className="pt-32 lg:pt-36 pb-4">
        <Container>
          <Link
            href="/flota"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a la flota
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
                    MÁS POPULAR
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
                <p className="text-sm text-on-surface-variant">Desde</p>
                <p className="text-headline-lg font-display text-primary font-light mt-1">
                  {formatPrice(emb.precioPorDia)}
                  <span className="text-base font-sans text-on-surface-variant">
                    {" "}
                    /día
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
                  {MENSAJES_VENTA.botonReservar}
                </WhatsAppButton>
                <p className="text-xs text-on-surface-variant text-center">
                  Respuesta inmediata. Sin compromiso.
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
            Acerca de {emb.nombre}
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
                ¿Qué incluye?
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
                No incluido
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
            Destinos posibles
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
            Duración típica: {emb.duracionTipica}
          </p>
        </Container>
      </Section>

      {/* RELACIONADAS */}
      {relacionadas.length > 0 && (
        <Section className="py-16 lg:py-20">
          <Container>
            <h3 className="text-headline-lg font-display text-primary font-light text-center mb-12">
              También te puede interesar
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
              ¿Listo para reservar {emb.nombre}?
            </h2>
            <p className="text-body-md text-white/90 mb-6">
              Respuesta inmediata por WhatsApp. Cotización personalizada según
              fecha y grupo.
            </p>
            <WhatsAppButton
              variant="default"
              size="lg"
              productName={emb.nombre}
              intent="consultar"
            >
              {MENSAJES_VENTA.botonConsultar}
            </WhatsAppButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
