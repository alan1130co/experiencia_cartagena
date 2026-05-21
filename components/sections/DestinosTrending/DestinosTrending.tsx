import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ScrollReveal } from "@/components/layout/ScrollReveal";

const DESTINOS = [
  {
    numero: "01",
    slug: "ciudad-amurallada",
    nombre: "Ciudad Amurallada",
    descripcion: "Historia colonial entre balcones floridos",
    imagen:
      "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=600&q=80",
    alt: "Muralla colonial de Cartagena de Indias al atardecer — tour Ciudad Amurallada",
  },
  {
    numero: "02",
    slug: "islas-del-rosario",
    nombre: "Islas del Rosario",
    descripcion: "Aguas turquesa a 45 minutos del puerto",
    imagen:
      "https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?w=600&q=80",
    alt: "Aguas turquesa cristalinas de las Islas del Rosario, Cartagena de Indias",
  },
  {
    numero: "03",
    slug: "getsemani",
    nombre: "Getsemaní",
    descripcion: "Bohemia, color y arte urbano",
    imagen:
      "https://images.unsplash.com/photo-1596367407372-96cb88503db6?w=600&q=80",
    alt: "Coloridas calles y murales del barrio Getsemaní en Cartagena de Indias",
  },
  {
    numero: "04",
    slug: "playa-blanca",
    nombre: "Playa Blanca",
    descripcion: "Arena blanca y atardeceres dorados",
    imagen:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    alt: "Arena blanca y aguas turquesa de Playa Blanca, Isla Barú, Colombia",
  },
] as const;

export function DestinosTrending() {
  return (
    <Section>
      <Container>
        {/* Encabezado de sección */}
        <ScrollReveal>
          <p className="text-label-caps text-primary">DESTINOS EN TENDENCIA</p>
          <Heading level={2} className="mt-3 max-w-lg">
            Destinos que enamoran
          </Heading>
        </ScrollReveal>

        {/* Lista numerada */}
        <ScrollReveal delay={120} className="mt-12 lg:mt-16">
          <ul role="list">
            {DESTINOS.map((destino) => (
              <li
                key={destino.slug}
                className="group border-b border-outline-variant last:border-b-0"
              >
                <Link
                  href={`/destinos/${destino.slug}`}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
                >
                  <div className="flex items-start gap-4 py-6 sm:items-center sm:gap-6 sm:py-8">
                    {/* Número serif grande */}
                    <span
                      aria-hidden
                      className="w-14 shrink-0 font-display text-[2.25rem] font-light leading-none text-outline-variant transition-colors duration-300 group-hover:text-primary sm:w-20 sm:text-[3.5rem]"
                    >
                      {destino.numero}
                    </span>

                    {/* Texto + imagen — columna en mobile, fila en sm+ */}
                    <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                      {/* Texto */}
                      <div className="flex-1">
                        <p className="text-body-lg font-semibold text-on-surface transition-colors duration-300 group-hover:text-primary">
                          {destino.nombre}
                        </p>
                        <p className="mt-1 text-body-md text-on-surface-variant">
                          {destino.descripcion}
                        </p>
                      </div>

                      {/* Imagen */}
                      <div className="relative h-44 w-full overflow-hidden rounded-[16px] sm:h-[72px] sm:w-28 sm:shrink-0 lg:h-20 lg:w-36">
                        <Image
                          src={destino.imagen}
                          alt={destino.alt}
                          fill
                          sizes="(max-width: 640px) calc(100vw - 5rem), 144px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
