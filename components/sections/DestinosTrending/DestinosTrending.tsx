import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { getDestinosDestacados } from "@/lib/data/destinos";
import { cn } from "@/lib/utils";

/**
 * Diseño bento asimétrico: la primera tarjeta (Ciudad Amurallada) ocupa el
 * doble de ancho y alto en desktop para actuar como pieza destacada; el resto
 * se reparte en una franja de 2 columnas a su derecha.
 */
const BENTO_SPAN = [
  "sm:col-span-2 lg:col-span-6 lg:row-span-2",
  "lg:col-span-6 lg:row-span-1",
  "lg:col-span-3 lg:row-span-1",
  "lg:col-span-3 lg:row-span-1",
];

const IMAGE_SIZES = [
  "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw",
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw",
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
];

export function DestinosTrending() {
  const destinos = getDestinosDestacados();

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

        {/* Bento grid */}
        <ScrollReveal delay={120} className="mt-12 lg:mt-16">
          <ul
            role="list"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[15rem] lg:gap-6"
          >
            {destinos.map((destino, index) => {
              const numero = String(index + 1).padStart(2, "0");
              const esDestacada = index === 0;

              return (
                <li key={destino.slug} className={BENTO_SPAN[index]}>
                  <Link
                    href={`/destinos/${destino.slug}`}
                    className="group relative flex h-full w-full overflow-hidden rounded-2xl shadow-card transition-shadow duration-300 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <div
                      className={cn(
                        "relative w-full overflow-hidden",
                        esDestacada
                          ? "aspect-4/5 sm:aspect-video lg:aspect-auto"
                          : "aspect-4/3 lg:aspect-auto",
                      )}
                    >
                      <Image
                        src={destino.imagen}
                        alt={destino.imagenAlt}
                        fill
                        sizes={IMAGE_SIZES[index]}
                        priority={esDestacada}
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />

                      {/* Overlay de degradado oscuro para legibilidad del texto */}
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent"
                      />

                      {/* Número de orden */}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute left-5 top-5 font-display font-light leading-none text-white/70 transition-colors duration-300 group-hover:text-white",
                          esDestacada ? "text-[2.5rem]" : "text-3xl",
                        )}
                      >
                        {numero}
                      </span>

                      {/* Flecha indicadora */}
                      <span className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100">
                        <ArrowUpRight className="size-5" aria-hidden />
                      </span>

                      {/* Texto */}
                      <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                        <p
                          className={cn(
                            "font-display font-light leading-tight text-white",
                            esDestacada ? "text-2xl lg:text-3xl" : "text-xl",
                          )}
                        >
                          {destino.nombre}
                        </p>
                        <p className="mt-1.5 max-w-md text-sm text-white/80 lg:text-body-md">
                          {destino.descripcionCorta}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
