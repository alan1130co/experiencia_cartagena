import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, X, MapPin, Clock, Users, Calendar } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { TourCard } from "@/components/catalogos/TourCard";
import { GaleriaFotos } from "@/components/catalogos/GaleriaFotos";
import { formatPrice } from "@/lib/utils";
import { tours, getTourBySlug } from "@/lib/data/tours";
import { getCategoriaInfo } from "@/lib/data/categorias-tours";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
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
    title: `${tour.nombre} | Experiencias Tour Cartagena`,
    description: tour.descripcionCorta,
    keywords: [tour.nombre, "tour Cartagena", tour.categoria],
    openGraph: {
      title: `${tour.nombre} | Experiencias Tour Cartagena`,
      description: tour.descripcionCorta,
      images: [{ url: tour.imagenPrincipal, alt: tour.imagenAlt }],
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

  const categoriaInfo = getCategoriaInfo(tour.categoria);
  const relacionados = tours
    .filter((t) => t.categoria === tour.categoria && t.slug !== tour.slug)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb / volver */}
      <Section className="pt-28 lg:pt-32 pb-4">
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
              imagenes={tour.imagenes}
              alt={tour.imagenAlt}
            />

            {/* INFO PRINCIPAL (derecha) */}
            <div className="flex flex-col">
              {/* Badges */}
              <div className="flex gap-2 flex-wrap mb-4">
                {categoriaInfo && (
                  <span
                    className={`inline-flex items-center gap-1.5 ${categoriaInfo.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {categoriaInfo.label}
                  </span>
                )}
                {tour.popular && (
                  <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    POPULAR
                  </span>
                )}
              </div>

              {/* Nombre */}
              <h1 className="text-headline-xl font-display font-light text-primary leading-tight">
                {tour.nombre}
              </h1>

              {/* Descripción corta */}
              <p className="text-body-lg text-on-surface mt-4 leading-relaxed">
                {tour.descripcionCorta}
              </p>

              {/* Características clave */}
              <div className="grid grid-cols-2 gap-4 mt-8 p-6 bg-surface rounded-2xl">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-on-surface-variant">Duración</p>
                    <p className="text-sm font-semibold text-on-surface">
                      {tour.duracion}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-on-surface-variant">Capacidad</p>
                    <p className="text-sm font-semibold text-on-surface">
                      Hasta {tour.capacidadMaxima} personas
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-on-surface-variant">Horarios</p>
                    <p className="text-sm font-semibold text-on-surface">
                      {tour.horarios.join(" · ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-on-surface-variant">Encuentro</p>
                    <p className="text-sm font-semibold text-on-surface line-clamp-2">
                      {tour.puntoEncuentro}
                    </p>
                  </div>
                </div>
              </div>

              {/* Precio */}
              <div className="mt-8 pb-6 border-b border-outline-variant">
                <p className="text-sm text-on-surface-variant">Desde</p>
                <p className="text-headline-lg font-display text-primary font-light mt-1">
                  {formatPrice(tour.precioPorPersona)}
                  <span className="text-base font-sans text-on-surface-variant">
                    {" "}
                    /persona
                  </span>
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-6 space-y-3">
                <WhatsAppButton
                  variant="default"
                  size="lg"
                  mensaje={`Hola, me interesa reservar el tour: ${tour.nombre}. ¿Tienen disponibilidad?`}
                  className="w-full"
                >
                  RESERVAR POR WHATSAPP
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
            Acerca del tour
          </h2>
          <p className="text-body-lg text-on-surface leading-relaxed whitespace-pre-line">
            {tour.descripcionLarga}
          </p>
        </Container>
      </Section>

      {/* ITINERARIO */}
      <Section className="py-12">
        <Container className="max-w-3xl">
          <h2 className="text-headline-md font-display text-primary font-light mb-8">
            Itinerario
          </h2>
          <div className="space-y-4">
            {tour.itinerario.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 pb-4 border-b border-outline-variant last:border-b-0"
              >
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">
                  {item.hora}
                </div>
                <div className="text-on-surface">
                  <p className="font-medium">{item.actividad}</p>
                  {item.descripcion && (
                    <p className="text-sm text-on-surface-variant mt-1">
                      {item.descripcion}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* INCLUYE / NO INCLUYE / QUÉ LLEVAR */}
      <Section className="py-12 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Qué incluye */}
            <div>
              <h3 className="text-headline-md font-display text-primary font-light mb-6">
                ¿Qué incluye?
              </h3>
              <ul className="space-y-3">
                {tour.incluye.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    <div className="w-6 h-6 rounded-full bg-on-surface-variant/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-on-surface-variant" />
                    </div>
                    <span className="text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qué llevar */}
            <div>
              <h3 className="text-headline-md font-display text-primary font-light mb-6">
                Qué llevar
              </h3>
              <ul className="space-y-3">
                {tour.queLlevar.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-on-surface">{item}</span>
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
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-on-surface">
                {tour.puntoEncuentro}
              </p>
              <p className="text-sm text-on-surface-variant mt-1">
                Horarios de salida: {tour.horarios.join(" y ")}
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
              ¿Listo para reservar {tour.nombre}?
            </h2>
            <p className="text-body-md text-white/90 mb-6">
              Respuesta inmediata por WhatsApp. Cotización personalizada según
              fecha y grupo.
            </p>
            <WhatsAppButton
              variant="default"
              size="lg"
              mensaje={`Hola, quiero más información sobre el tour: ${tour.nombre}`}
            >
              HABLAR POR WHATSAPP
            </WhatsAppButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
