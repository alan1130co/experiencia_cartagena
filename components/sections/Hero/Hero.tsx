"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/layout/ScrollReveal";

const HERO_VIDEO = "/videos/hero/hero-principal.mp4";
// TODO: generar este still a partir del video (frame ~1s) y optimizarlo a
// <150 KB — ver instrucciones en public/images/hero/README.md.
const HERO_POSTER = "/images/hero/hero-poster.webp";

export function Hero() {
  const t = useTranslations("Home.hero");
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax: el video se desplaza más lento que el resto del contenido.
  // offset ["start end", "end start"] ata el progreso 0→1 exactamente a la
  // ventana en la que la sección es visible en pantalla (top del target
  // toca el fondo del viewport → bottom del target toca el techo del
  // viewport), sin importar qué haya antes en el documento (el Header
  // sticky ocupa espacio en el flujo, así que anclar a "start start" —
  // como estaba antes — retrasaba el inicio del efecto y comprimía todo el
  // recorrido en la altura de una sola sección, haciendo el desplazamiento
  // casi imperceptible). No hay una imagen de fondo a pantalla completa en
  // este layout (es un grid de dos columnas texto/video) — el efecto se
  // aplica al bloque de video, que es el elemento visual equivalente.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-45, 45]);

  return (
    <section
      ref={sectionRef}
      aria-label={t("ariaLabel")}
      className="bg-surface"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">

          {/* ── IZQUIERDA: bloque de texto (5 de 12 columnas en desktop) ── */}
          {/* above-the-fold: eager (Framer Motion anima al montar, sin esperar scroll) */}
          <ScrollReveal eager className="order-2 lg:order-1 lg:col-span-5 lg:col-start-1">
            <h1
              className="font-display font-light leading-[1.1] tracking-[-0.02em] text-primary"
              style={{ fontSize: "clamp(2.25rem, 5vw, 5rem)" }}
            >
              {t("title")}
            </h1>

            <p className="mt-6 max-w-md text-body-md text-on-surface-variant">
              {t("description")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <ButtonLink href="/destinos" variant="primary" size="md">
                {t("ctaExplore")}
              </ButtonLink>
              <Link
                href="/galeria"
                className="inline-flex items-center gap-2 text-label-caps text-primary transition-colors duration-200 hover:text-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {t("ctaGallery")}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </ScrollReveal>

          {/* ── DERECHA: imagen en tarjeta portal (7 de 12 columnas en desktop) ── */}
          {/* above-the-fold: eager, delay conserva el stagger que tenía antes */}
          <ScrollReveal
            eager
            delay={150}
            className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6"
          >
            {/* Marco fijo (no se mueve) que recorta el video en movimiento —
                el video va sobredimensionado para que el parallax nunca deje
                ver un borde vacío dentro del marco. */}
            <div className="relative aspect-4/5 overflow-hidden rounded-b-[16px] rounded-t-[200px]">
              <motion.video
                style={{ y }}
                src={HERO_VIDEO}
                poster={HERO_POSTER}
                preload="metadata"
                autoPlay
                loop
                muted
                playsInline
                aria-label={t("videoAriaLabel")}
                className="absolute inset-x-0 -top-[9%] h-[118%] w-full object-cover object-center"
              />
            </div>
          </ScrollReveal>

        </div>
      </Container>
    </section>
  );
}
