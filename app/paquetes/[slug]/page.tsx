import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, X, Users, Calendar } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PaqueteCard } from "@/components/catalogos/PaqueteCard";
import { GaleriaFotos } from "@/components/catalogos/GaleriaFotos";
import { formatPrice } from "@/lib/utils";
import { paquetes, getPaqueteBySlug } from "@/lib/data/paquetes";

export function generateStaticParams() {
  return paquetes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const paquete = getPaqueteBySlug(slug);
  if (!paquete) return { title: "Paquete no encontrado" };

  return {
    title: `${paquete.nombre} | Experiencias Tour Cartagena`,
    description: paquete.descripcionCorta,
    keywords: [paquete.nombre, "paquete turístico Cartagena", paquete.tipo],
    openGraph: {
      title: `${paquete.nombre} | Experiencias Tour Cartagena`,
      description: paquete.descripcionCorta,
      images: [{ url: paquete.imagenPrincipal, alt: paquete.imagenAlt }],
      type: "website",
    },
  };
}

export default async function PaqueteDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paquete = getPaqueteBySlug(slug);
  if (!paquete) notFound();

  const relacionados = paquetes.filter((p) => p.slug !== paquete.slug);

  // Evitar duplicar imagenPrincipal en la galería
  const imagenesGaleria = paquete.imagenes.filter(
    (img) => img !== paquete.imagenPrincipal
  );

  return (
    <>
      {/* Breadcrumb */}
      <Section className="pt-32 lg:pt-36 pb-4">
        <Container>
          <Link
            href="/paquetes"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a paquetes
          </Link>
        </Container>
      </Section>

      {/* HERO: Galería + Info principal */}
      <Section className="py-8 lg:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* GALERÍA */}
            <GaleriaFotos
              imagenPrincipal={paquete.imagenPrincipal}
              imagenes={imagenesGaleria}
              alt={paquete.imagenAlt}
            />

            {/* INFO PRINCIPAL */}
            <div className="flex flex-col">
              {/* Badges */}
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold capitalize">
                  {paquete.tipo.replace("-", " ")}
                </span>
                {paquete.masPopular && (
                  <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    MÁS POPULAR
                  </span>
                )}
                {paquete.descuento && (
                  <span className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold">
                    -{paquete.descuento}% DESCUENTO
                  </span>
                )}
              </div>

              <h1 className="text-headline-xl font-display font-light text-primary leading-tight">
                {paquete.nombre}
              </h1>

              <p className="text-body-lg text-on-surface mt-4 leading-relaxed">
                {paquete.descripcionCorta}
              </p>

              {/* Características */}
              <div className="grid grid-cols-2 gap-4 mt-8 p-6 bg-surface rounded-2xl">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-on-surface-variant">Duración</p>
                    <p className="text-sm font-semibold text-on-surface">
                      {paquete.duracionDias} días / {paquete.duracionNoches} noches
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-on-surface-variant">Grupo</p>
                    <p className="text-sm font-semibold text-on-surface">
                      {paquete.capacidadMin === paquete.capacidadMax
                        ? `${paquete.capacidadMin} personas`
                        : `${paquete.capacidadMin}–${paquete.capacidadMax} personas`}
                    </p>
                  </div>
                </div>
                {paquete.tipoHospedaje && (
                  <div className="col-span-2 flex items-start gap-3">
                    <div className="w-5 h-5 text-primary flex-shrink-0 mt-0.5">🏨</div>
                    <div>
                      <p className="text-xs text-on-surface-variant">Hospedaje</p>
                      <p className="text-sm font-semibold text-on-surface">
                        {paquete.tipoHospedaje}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Precio */}
              <div className="mt-8 pb-6 border-b border-outline-variant">
                <p className="text-sm text-on-surface-variant">Por persona desde</p>
                <div className="flex items-baseline gap-3 mt-1">
                  {paquete.precioBase && (
                    <span className="text-base text-on-surface-variant line-through">
                      {formatPrice(paquete.precioBase)}
                    </span>
                  )}
                  <p className="text-headline-lg font-display text-primary font-light">
                    {formatPrice(paquete.precioPorPersona)}
                  </p>
                </div>
                {paquete.tipoAlimentacion && (
                  <p className="text-xs text-on-surface-variant mt-2 italic">
                    {paquete.tipoAlimentacion}
                  </p>
                )}
              </div>

              {/* CTAs */}
              <div className="mt-6 space-y-3">
                <WhatsAppButton
                  variant="default"
                  size="lg"
                  mensaje={`Hola, me interesa el paquete ${paquete.nombre}. ¿Tienen disponibilidad?`}
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
            Acerca del paquete
          </h2>
          <p className="text-body-lg text-on-surface leading-relaxed whitespace-pre-line">
            {paquete.descripcionLarga}
          </p>
        </Container>
      </Section>

      {/* ITINERARIO POR DÍAS */}
      <Section className="py-12">
        <Container className="max-w-3xl">
          <h2 className="text-headline-md font-display text-primary font-light mb-8">
            Itinerario día a día
          </h2>
          <div className="space-y-6">
            {paquete.itinerarioDias.map((dia) => (
              <div key={dia.dia} className="bg-surface rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                    {dia.dia}
                  </div>
                  <h3 className="text-xl font-display text-primary font-light">
                    {dia.titulo}
                  </h3>
                </div>
                <ul className="space-y-2 pl-13">
                  {dia.actividades.map((act, i) => (
                    <li key={i} className="flex items-start gap-3 text-on-surface">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
                {dia.hospedaje && (
                  <p className="mt-4 pl-13 text-sm text-on-surface-variant italic">
                    Hospedaje: {dia.hospedaje}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* INCLUYE / NO INCLUYE / QUÉ LLEVAR */}
      <Section className="py-12 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {paquete.incluye && (
              <div>
                <h3 className="text-headline-md font-display text-primary font-light mb-6">
                  ¿Qué incluye?
                </h3>
                <ul className="space-y-3">
                  {paquete.incluye.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-brand-green" />
                      </div>
                      <span className="text-on-surface">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {paquete.noIncluye && (
              <div>
                <h3 className="text-headline-md font-display text-primary font-light mb-6">
                  No incluido
                </h3>
                <ul className="space-y-3">
                  {paquete.noIncluye.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-on-surface-variant/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-on-surface-variant" />
                      </div>
                      <span className="text-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {paquete.queLlevar && (
              <div>
                <h3 className="text-headline-md font-display text-primary font-light mb-6">
                  Qué llevar
                </h3>
                <ul className="space-y-3">
                  {paquete.queLlevar.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span className="text-on-surface">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* TAMBIÉN TE PUEDE INTERESAR */}
      {relacionados.length > 0 && (
        <Section className="py-16 lg:py-20">
          <Container>
            <h3 className="text-headline-lg font-display text-primary font-light text-center mb-12">
              También te puede interesar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relacionados.map((rel) => (
                <PaqueteCard key={rel.id} paquete={rel} />
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
              ¿Listo para reservar {paquete.nombre}?
            </h2>
            <p className="text-body-md text-white/90 mb-6">
              Respuesta inmediata por WhatsApp. Cotización personalizada según
              fecha y tamaño del grupo.
            </p>
            <WhatsAppButton
              variant="default"
              size="lg"
              mensaje={`Hola, quiero más información sobre el paquete: ${paquete.nombre}`}
            >
              HABLAR POR WHATSAPP
            </WhatsAppButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
