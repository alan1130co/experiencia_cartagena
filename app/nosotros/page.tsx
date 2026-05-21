import Image from "next/image";
import { Anchor, Shield, Star, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const VALORES = [
  {
    icon: Anchor,
    titulo: "Profesionalismo náutico",
    descripcion:
      "Capitanes certificados, embarcaciones homologadas y operaciones bajo los más altos estándares de seguridad marítima.",
  },
  {
    icon: Shield,
    titulo: "Seguridad garantizada",
    descripcion:
      "Chalecos salvavidas para todos, seguros de navegación y protocolos de emergencia en cada salida.",
  },
  {
    icon: Star,
    titulo: "Experiencias premium",
    descripcion:
      "Cada detalle está pensado para superar tus expectativas: guías bilingües, equipos de calidad y atención personalizada.",
  },
  {
    icon: Heart,
    titulo: "Pasión por Cartagena",
    descripcion:
      "Somos cartageneros que amamos nuestra ciudad. Compartimos ese amor en cada recorrido, cada tour y cada amanecer en el Caribe.",
  },
];

const ESTADISTICAS = [
  { numero: "500+", etiqueta: "Clientes felices" },
  { numero: "18+", etiqueta: "Embarcaciones" },
  { numero: "10+", etiqueta: "Tours disponibles" },
  { numero: "5+", etiqueta: "Años de experiencia" },
];

const EQUIPO = [
  {
    nombre: "/** TODO: Reemplazar */",
    cargo: "Fundador y Director",
    foto: "https://placehold.co/200x200/005371/ffffff?text=Foto",
  },
  {
    nombre: "/** TODO: Reemplazar */",
    cargo: "Guía Principal",
    foto: "https://placehold.co/200x200/2a6b8a/ffffff?text=Foto",
  },
  {
    nombre: "/** TODO: Reemplazar */",
    cargo: "Coordinadora de Operaciones",
    foto: "https://placehold.co/200x200/4c616e/ffffff?text=Foto",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* HERO */}
      <Section className="bg-surface pt-36 lg:pt-44 pb-16 lg:pb-20">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-label-caps text-primary uppercase tracking-wider">
                Acerca de Nosotros
              </p>
              <h1 className="text-headline-xl font-display font-light text-primary mt-3">
                Pasión por el Caribe colombiano
              </h1>
              <p className="text-body-md text-on-surface-variant mt-5 max-w-2xl mx-auto">
                {/** TODO: Reemplazar por subtítulo real del cliente */}
                Somos una agencia de turismo especializada en experiencias
                náuticas y culturales en Cartagena de Indias. Conectamos
                viajeros con lo mejor que el Caribe colombiano tiene para
                ofrecer.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* HISTORIA */}
      <Section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=80"
                  alt="Vista del Centro Histórico de Cartagena de Indias"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div>
                <p className="text-label-caps text-primary uppercase tracking-wider mb-4">
                  Nuestra historia
                </p>
                <h2 className="text-headline-lg font-display font-light text-primary mb-6 leading-tight">
                  Nacimos para compartir{" "}
                  <em>lo que más amamos</em>
                </h2>
                <p className="text-body-lg text-on-surface leading-relaxed">
                  {/** TODO: Reemplazar por historia real del cliente */}
                  Experiencias Tour Cartagena nació de la pasión por compartir
                  la belleza única del Caribe colombiano. Llevamos años
                  conectando viajeros con experiencias inolvidables: desde el
                  casco antiguo declarado Patrimonio UNESCO hasta las aguas
                  turquesa de las Islas del Rosario.
                </p>
                <p className="text-body-lg text-on-surface leading-relaxed mt-4">
                  {/** TODO: Reemplazar por historia real del cliente */}
                  Nuestro equipo de guías locales certificados y capitanes
                  experimentados garantiza que cada aventura sea segura,
                  auténtica y perfectamente diseñada para ti.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* VALORES */}
      <Section className="py-16 lg:py-20 bg-surface">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-label-caps text-primary uppercase tracking-wider mb-3">
                Nuestros valores
              </p>
              <h2 className="text-headline-lg font-display font-light text-primary">
                Lo que nos define
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {VALORES.map((valor, i) => {
              const Icon = valor.icon;
              return (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="bg-white rounded-2xl p-8 text-center shadow-card">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-primary" aria-hidden />
                    </div>
                    <h3 className="font-display text-lg font-light text-primary mb-3">
                      {valor.titulo}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {valor.descripcion}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ESTADÍSTICAS */}
      <Section className="bg-primary text-white py-16 lg:py-20">
        <Container>
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {ESTADISTICAS.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-headline-xl font-display font-light">
                    {stat.numero}
                  </p>
                  <p className="text-body-md text-white/80 mt-1">
                    {stat.etiqueta}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* EQUIPO */}
      <Section className="py-16 lg:py-20">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-label-caps text-primary uppercase tracking-wider mb-3">
                Nuestro equipo
              </p>
              <h2 className="text-headline-lg font-display font-light text-primary">
                Las personas detrás de cada experiencia
              </h2>
              <p className="text-sm text-on-surface-variant mt-2 italic">
                {/** TODO: Reemplazar por equipo real */}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {EQUIPO.map((persona, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-surface">
                    <Image
                      src={persona.foto}
                      alt={`Foto de ${persona.nombre}`}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="font-display text-lg font-light text-primary">
                    {persona.nombre}
                  </h3>
                  <p className="text-sm text-on-surface-variant mt-1">
                    {persona.cargo}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA FINAL */}
      <Section className="bg-primary text-white py-16 lg:py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-headline-lg font-display font-light mb-4">
              ¿Listo para vivir el Caribe?
            </h2>
            <p className="text-body-md text-white/90 mb-6">
              Escríbenos por WhatsApp y uno de nuestros expertos locales te
              ayudará a planear la experiencia perfecta.
            </p>
            <WhatsAppButton
              variant="default"
              size="lg"
              mensaje="Hola, quiero planear mi experiencia en Cartagena"
            >
              HABLAR POR WHATSAPP
            </WhatsAppButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
