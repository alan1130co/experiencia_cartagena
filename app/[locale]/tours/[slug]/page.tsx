import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Check, X, MapPin, Calendar } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { TourCard } from "@/components/catalogos/TourCard";
import { GaleriaFotos } from "@/components/catalogos/GaleriaFotos";
import { MENSAJES_VENTA } from "@/lib/constants";
import { toursData, getTourBySlug } from "@/lib/data/tours";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    toursData.map((t) => ({ locale, slug: t.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Tour no encontrado" };

  return {
    title: `${tour.titulo} | Experiencias Tour Cartagena`,
    description: tour.descripcionBreve,
    keywords: [tour.titulo, "tour Cartagena"],
    openGraph: {
      title: `${tour.titulo} | Experiencias Tour Cartagena`,
      description: tour.descripcionBreve,
      images: [{ url: tour.imagenPrincipal, alt: tour.titulo }],
      type: "website",
    },
  };
}

export default async function TourDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const relacionados = toursData
    .filter((t) => t.slug !== tour.slug)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb / volver */}
      <Section className="pt-32 lg:pt-36 pb-4">
        <Container>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a tours
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
                    <p className="text-xs text-on-surface-variant">Horarios</p>
                    <p className="text-sm font-semibold text-on-surface">
                      {tour.horarios}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-on-surface-variant">Salida</p>
                    <p className="text-sm font-semibold text-on-surface line-clamp-2">
                      {tour.ubicacionSalida}
                    </p>
                  </div>
                </div>
              </div>

              {/* Precio */}
              <div className="mt-8 pb-6 border-b border-outline-variant">
                <p className="text-sm text-on-surface-variant">Desde</p>
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

      {/* INCLUYE / NO INCLUYE */}
      <Section className="py-12 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Qué incluye */}
            <div>
              <h3 className="text-headline-md font-display text-primary font-light mb-6">
                ¿Qué incluye?
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
                No incluido
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
            Punto de encuentro
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
              También te puede interesar
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
              ¿Listo para reservar {tour.titulo}?
            </h2>
            <p className="text-body-md text-white/90 mb-6">
              Respuesta inmediata por WhatsApp. Cotización personalizada según
              fecha y grupo.
            </p>
            <WhatsAppButton
              variant="default"
              size="lg"
              productName={tour.titulo}
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
