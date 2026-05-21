import type { Metadata } from "next";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Accordion } from "@/components/ui/Accordion";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import type { FAQ } from "@/types";

export const metadata: Metadata = { title: "Sandbox — Design System" };

const faqs: FAQ[] = [
  {
    pregunta: "¿Cuánto dura el tour por el centro histórico?",
    respuesta:
      "El tour tiene una duración de 3 horas e incluye visita a la Catedral, el Palacio de la Inquisición y los baluartes de la muralla con guía bilingüe.",
  },
  {
    pregunta: "¿Qué incluye el paquete turístico?",
    respuesta:
      "El paquete incluye transporte desde tu hotel, guía certificado, seguro de viaje, entradas a los sitios y un refrigerio típico de la región.",
  },
  {
    pregunta: "¿Puedo cancelar o reprogramar mi reserva?",
    respuesta:
      "Puedes cancelar o reprogramar con hasta 48 horas de anticipación sin costo adicional. Después de ese plazo se aplica un cargo del 20%.",
  },
  {
    pregunta: "¿Los tours son privados o grupales?",
    respuesta:
      "Ofrecemos ambas modalidades. Los tours grupales tienen un máximo de 12 personas; los privados se adaptan completamente a tu itinerario.",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-10 border-b border-outline-variant pb-4">
      <Text variant="label-caps" className="text-primary">
        {children}
      </Text>
    </div>
  );
}

export default function SandboxPage() {
  return (
    <>
      <main id="main-content">
        {/* Hero banner */}
        <Section className="bg-primary">
          <Container>
            <ScrollReveal>
              <Badge className="bg-white/20 text-white">PASO 2 — Design System</Badge>
              <Heading level={1} className="mt-4 text-white">
                Cartagena Índigo
              </Heading>
              <Text variant="body-lg" className="mt-4 max-w-xl text-white/80">
                Página de prueba para validar todos los componentes base antes
                de continuar con el PASO 3.
              </Text>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ── Tipografía ── */}
        <Section>
          <Container>
            <SectionLabel>01 — Tipografía</SectionLabel>
            <ScrollReveal>
              <Heading level={1}>H1 — Display XL (Fraunces 300, 80px)</Heading>
              <Heading level={2} className="mt-6">
                H2 — Headline LG (Fraunces 400, 48px)
              </Heading>
              <Heading level={3} className="mt-6">
                H3 — Headline MD (Fraunces 400, 32px)
              </Heading>
              <Heading level={4} className="mt-6">
                H4 — Body LG Semibold (18px)
              </Heading>
              <Heading level={5} className="mt-4">
                H5 — Body MD Semibold (16px)
              </Heading>
              <Heading level={6} className="mt-4">
                H6 — Label Caps (12px, 700, uppercase)
              </Heading>
            </ScrollReveal>
            <ScrollReveal delay={100} className="mt-10 space-y-4">
              <Text variant="body-lg">
                Body LG (18px) — Cartagena de Indias es la joya del Caribe
                colombiano, una ciudad amurallada llena de historia, color y
                magia que enamora a quienes la visitan.
              </Text>
              <Text variant="body-md">
                Body MD (16px) — Descubre cada rincón de la ciudad colonial con
                nuestros tours especializados, diseñados para que vivas una
                experiencia auténtica e inolvidable.
              </Text>
              <Text variant="label-caps">
                Label Caps — Texto en mayúsculas · 12px · tracking-wide
              </Text>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ── Botones ── */}
        <Section className="bg-surface-container">
          <Container>
            <SectionLabel>02 — Botones (pill / rounded-full)</SectionLabel>
            <div className="space-y-6">
              <div>
                <Text variant="label-caps" className="mb-3 text-outline">
                  Variante primary
                </Text>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="sm">Primary SM</Button>
                  <Button variant="primary" size="md">Primary MD</Button>
                  <Button variant="primary" size="lg">Primary LG</Button>
                </div>
              </div>
              <div>
                <Text variant="label-caps" className="mb-3 text-outline">
                  Variante secondary
                </Text>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" size="sm">Secondary SM</Button>
                  <Button variant="secondary" size="md">Secondary MD</Button>
                  <Button variant="secondary" size="lg">Secondary LG</Button>
                </div>
              </div>
              <div>
                <Text variant="label-caps" className="mb-3 text-outline">
                  Variante ghost
                </Text>
                <div className="flex flex-wrap gap-4">
                  <Button variant="ghost" size="sm">Ghost SM</Button>
                  <Button variant="ghost" size="md">Ghost MD</Button>
                  <Button variant="ghost" size="lg">Ghost LG</Button>
                </div>
              </div>
              <div>
                <Text variant="label-caps" className="mb-3 text-outline">
                  ButtonLink (Next.js Link)
                </Text>
                <div className="flex flex-wrap gap-4">
                  <ButtonLink href="/contacto" variant="primary" size="md">
                    Reservar ahora
                  </ButtonLink>
                  <ButtonLink href="/planes" variant="secondary" size="md">
                    Ver planes
                  </ButtonLink>
                </div>
              </div>
              <div>
                <Text variant="label-caps" className="mb-3 text-outline">
                  Estado disabled
                </Text>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" disabled>Disabled</Button>
                  <Button variant="secondary" disabled>Disabled</Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ── Badges ── */}
        <Section>
          <Container>
            <SectionLabel>03 — Badges / Chips</SectionLabel>
            <ScrollReveal className="flex flex-wrap gap-3">
              <Badge>Cultura</Badge>
              <Badge>Aventura</Badge>
              <Badge>Relax</Badge>
              <Badge>Romántico</Badge>
              <Badge>Familiar</Badge>
              <Badge>Destacado</Badge>
              <Badge>Nuevo</Badge>
              <Badge>Tour privado</Badge>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ── Cards ── */}
        <Section className="bg-surface">
          <Container>
            <SectionLabel>04 — Cards (radius 16px, shadow ambient azul)</SectionLabel>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  badge: "Cultura",
                  title: "Tour Centro Histórico",
                  desc: "Recorre las calles empedradas y la imponente muralla de la Ciudad Amurallada con un guía experto.",
                  price: "desde $85 USD",
                },
                {
                  badge: "Aventura",
                  title: "Islas del Rosario",
                  desc: "Navega hacia el Parque Nacional Natural Corales del Rosario y disfruta de aguas cristalinas.",
                  price: "desde $120 USD",
                },
                {
                  badge: "Relax",
                  title: "Atardecer en Bocagrande",
                  desc: "Vive el atardecer más espectacular del Caribe con cóctel incluido y música en vivo.",
                  price: "desde $65 USD",
                },
              ].map((card, i) => (
                <ScrollReveal key={card.title} delay={i * 100}>
                  <Card className="flex flex-col p-6">
                    <Badge className="self-start">{card.badge}</Badge>
                    <Heading level={4} className="mt-3">
                      {card.title}
                    </Heading>
                    <Text className="mt-2 grow">{card.desc}</Text>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-body-md font-semibold text-primary">
                        {card.price}
                      </span>
                      <Button variant="primary" size="sm">
                        Reservar
                      </Button>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Card variante ghost / surface */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <ScrollReveal>
                <Card className="bg-surface-container p-6 shadow-none">
                  <Heading level={5}>Card sin sombra (bg-surface-container)</Heading>
                  <Text className="mt-2">
                    Variante para usar sobre fondos blancos donde la sombra no
                    contrasta suficiente.
                  </Text>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <Card className="border border-outline-variant p-6 shadow-none">
                  <Heading level={5}>Card con borde (sin sombra)</Heading>
                  <Text className="mt-2">
                    Útil para listas de precios, planes o elementos de formulario.
                  </Text>
                </Card>
              </ScrollReveal>
            </div>
          </Container>
        </Section>

        {/* ── Inputs ── */}
        <Section>
          <Container className="max-w-2xl">
            <SectionLabel>05 — Inputs (radius 16px, label arriba)</SectionLabel>
            <div className="grid gap-6 sm:grid-cols-2">
              <Input label="Nombre completo" placeholder="Tu nombre completo" />
              <Input label="Apellidos" placeholder="Tus apellidos" />
              <Input
                label="Correo electrónico"
                type="email"
                placeholder="tu@email.com"
                hint="Nunca compartiremos tu email con terceros."
              />
              <Input
                label="Teléfono / WhatsApp"
                type="tel"
                placeholder="+57 300 000 0000"
              />
              <Input
                label="Campo con error"
                placeholder="Ejemplo inválido"
                error="Este campo es obligatorio."
              />
              <Input
                label="Campo deshabilitado"
                placeholder="No editable"
                disabled
              />
            </div>
          </Container>
        </Section>

        {/* ── Accordion ── */}
        <Section className="bg-surface-container">
          <Container className="max-w-3xl">
            <SectionLabel>06 — Accordion / FAQ</SectionLabel>
            <ScrollReveal>
              <Accordion items={faqs} />
            </ScrollReveal>
            <ScrollReveal delay={100} className="mt-6">
              <Accordion items={faqs.slice(0, 2)} allowMultiple />
              <Text variant="label-caps" className="mt-3 text-outline">
                ↑ Variante allowMultiple (varios abiertos a la vez)
              </Text>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ── ScrollReveal ── */}
        <Section>
          <Container>
            <SectionLabel>07 — ScrollReveal (slide-up 20px + fade-in)</SectionLabel>
            <Text variant="body-md" className="mb-8">
              Baja el scroll para ver la animación de entrada con distintos delays.
            </Text>
            <div className="grid gap-6 sm:grid-cols-3">
              {[0, 150, 300].map((delay) => (
                <ScrollReveal key={delay} delay={delay}>
                  <Card className="p-6">
                    <Badge>Delay {delay}ms</Badge>
                    <Heading level={5} className="mt-3">
                      Animación {delay === 0 ? "inmediata" : `+${delay}ms`}
                    </Heading>
                    <Text className="mt-2">
                      Este card entra con un retraso de {delay} milisegundos
                      respecto al scroll trigger.
                    </Text>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* ── Layout: Container + Section ── */}
        <Section className="bg-primary">
          <Container>
            <div className="mb-10 border-b border-white/20 pb-4">
              <Text variant="label-caps" className="text-white/60">
                08 — Container + Section
              </Text>
            </div>
            <div className="rounded-[16px] border-2 border-dashed border-white/30 p-8 text-center">
              <Text variant="label-caps" className="text-white/60">
                Container — max-w-[1280px] · px-4 sm:px-6 lg:px-8
              </Text>
              <Heading level={4} className="mt-3 text-white">
                Section — py-20 lg:py-24
              </Heading>
              <Text variant="body-md" className="mt-2 text-white/70">
                80px padding vertical en móvil · 96px en desktop (lg:)
              </Text>
            </div>
          </Container>
        </Section>

        {/* ── Paleta de colores ── */}
        <Section>
          <Container>
            <SectionLabel>09 — Paleta de colores</SectionLabel>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { bg: "bg-primary", label: "primary", hex: "#005371" },
                { bg: "bg-primary-container", label: "primary-container", hex: "#2a6b8a" },
                { bg: "bg-secondary", label: "secondary", hex: "#4c616e" },
                { bg: "bg-tertiary", label: "tertiary", hex: "#6f4309" },
                { bg: "bg-surface", label: "surface", hex: "#f8f9fc", dark: true },
                { bg: "bg-surface-container", label: "surface-container", hex: "#eceef1", dark: true },
                { bg: "bg-on-surface", label: "on-surface", hex: "#191c1e" },
                { bg: "bg-on-surface-variant", label: "on-surface-variant", hex: "#40484d" },
              ].map(({ bg, label, hex, dark }) => (
                <div key={label} className={`${bg} rounded-[16px] p-4`}>
                  <p className={`text-label-caps ${dark ? "text-on-surface" : "text-white"}`}>
                    {label}
                  </p>
                  <p className={`mt-1 text-body-md ${dark ? "text-on-surface-variant" : "text-white/70"}`}>
                    {hex}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
