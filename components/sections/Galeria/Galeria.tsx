import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { galeriaImagenes } from "@/lib/data/galeria";
import { cn } from "@/lib/utils";

export function Galeria() {
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

        <ScrollReveal delay={120}>
          {/* Grid masonry manual: columnas con imágenes de diferentes alturas */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4">
            {galeriaImagenes.map((img) => (
              <div
                key={img.id}
                className={cn(
                  "group relative overflow-hidden rounded-2xl",
                  img.tamaño === "grande"
                    ? "col-span-2 aspect-[4/3]"
                    : "col-span-1 aspect-square",
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={
                    img.tamaño === "grande"
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/20" />
              </div>
            ))}
          </div>
        </ScrollReveal>

      </Container>
    </Section>
  );
}
