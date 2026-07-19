import Image from "next/image";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { galeriaImagenes } from "@/lib/data/galeria";

export default function GaleriaPage() {
  const t = useTranslations("Galeria.pagina");
  const noDestacadas = galeriaImagenes.filter((img) => !img.destacada);

  return (
    <Section className="pt-32 lg:pt-36">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <p className="text-label-caps text-primary">{t("eyebrow")}</p>
          <h1 className="mt-3 font-display text-4xl font-light leading-tight text-primary lg:text-headline-xl">
            {t("title")}
          </h1>
          <p className="mt-5 text-body-md text-on-surface-variant">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
          {noDestacadas.map((img) => (
            <div
              key={img.id}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/20" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
