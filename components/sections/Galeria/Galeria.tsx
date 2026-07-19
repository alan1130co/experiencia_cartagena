import Image from "next/image";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { galeriaImagenes } from "@/lib/data/galeria";
import { cn } from "@/lib/utils";

export function Galeria() {
  const t = useTranslations("Galeria");
  const destacadas = galeriaImagenes.filter((img) => img.destacada);

  return (
    <Section className="bg-surface">
      <Container>

        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <p className="text-label-caps text-primary">Galería</p>
            <h2 className="mt-3 font-display text-4xl font-light leading-tight text-primary lg:text-headline-xl">
              Cartagena en imágenes
            </h2>
            <p className="mt-5 text-body-md text-on-surface-variant">
              Un vistazo a las experiencias que te esperan en el Caribe colombiano.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry fluido con CSS columns: cada tarjeta fluye a la columna con
            más espacio libre, sin celdas de grid ni huecos muertos.
            break-inside-avoid evita que una imagen se corte entre columnas.
            Cada tarjeta entra con su propio ScrollReveal (fade + slide-up) y
            un delay creciente para un efecto de entrada escalonado. */}
        <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {destacadas.map((img, index) => (
            <ScrollReveal
              key={img.id}
              delay={index * 80}
              className="break-inside-avoid"
            >
              <div
                className={cn(
                  "group relative overflow-hidden rounded-2xl",
                  img.tamaño === "grande" ? "aspect-[4/3]" : "aspect-[3/4]",
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/20" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-10 text-center lg:mt-12">
            <ButtonLink href="/galeria" variant="secondary" size="lg">
              {t("verGaleriaCompleta")}
            </ButtonLink>
          </div>
        </ScrollReveal>

      </Container>
    </Section>
  );
}
