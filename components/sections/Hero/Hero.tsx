"use client";

import { useEffect, useRef } from "react";
import { preload } from "react-dom";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

const HERO_VIDEO = "/videos/hero/hero-principal.mp4";
const HERO_POSTER = "/images/hero/hero-poster.webp";

export function Hero() {
  const t = useTranslations("Home.hero");
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // HERO_POSTER es el elemento LCP de la home. El navegador no lo descubre
  // como recurso crítico hasta que el parser HTML llega al atributo
  // `poster` del <video> más abajo — a diferencia de un <img>, no hay forma
  // de darle `fetchPriority` directo al poster de un <video>. `preload()`
  // (React 19) inyecta un <link rel="preload"> en el <head> durante el
  // render (server y cliente), así el fetch arranca antes en vez de
  // esperar a que el parser llegue al <video>.
  preload(HERO_POSTER, { as: "image", fetchPriority: "high" });

  // El cambio de idioma (ES/EN) navega a otra URL (/es -> /en), y en el App
  // Router de Next.js una <page> siempre se desmonta y remonta al cambiar la
  // URL — el Hero vive en page.tsx, no en un layout persistente, así que
  // este remount del <video> es inevitable sin mover el video a un layout
  // raíz global (lo que lo haría persistir en todas las páginas, no solo en
  // Home). El atributo `autoplay` no siempre dispara la reproducción de forma
  // fiable en navegadores móviles cuando el elemento se vuelve a montar
  // rápido durante una transición SPA, así que forzamos el play()
  // explícitamente y reintentamos si el navegador lo rechaza o si la carga
  // falla a mitad de camino (red móvil inestable).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay rechazado (p. ej. política del navegador) — el poster
        // se sigue mostrando, no es un error a reintentar.
      });
    };

    const handleError = () => {
      if (cancelled) return;
      // Falla de red a mitad de carga tras el remount: reintenta una vez
      // en vez de quedarse pegado en el poster para siempre.
      video.load();
      tryPlay();
    };

    video.addEventListener("error", handleError);
    tryPlay();

    return () => {
      cancelled = true;
      video.removeEventListener("error", handleError);
    };
  }, []);

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
          {/* above-the-fold: sin animación de entrada a propósito. Este
              bloque y el de la derecha usaban <ScrollReveal>, que parte de
              opacity:0 y anima con Framer Motion tras hidratar — Chrome
              excluye del LCP a los elementos en opacity:0, así que el video
              de la derecha (el elemento LCP) no se consideraba "pintado"
              hasta que React montaba y corría la animación. Se quitó de
              ambos bloques, no solo del video, para no dejar un desfase
              visual entre el texto y el video al cargar. */}
          <div className="order-2 lg:order-1 lg:col-span-5 lg:col-start-1">
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
          </div>

          {/* ── DERECHA: imagen en tarjeta portal (7 de 12 columnas en desktop) ── */}
          {/* above-the-fold: sin animación de entrada — es el elemento LCP,
              debe pintarse en cuanto el HTML/CSS carga, sin esperar
              hidratación de React (ver nota de Render Delay más abajo). */}
          <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
            {/* Marco fijo (no se mueve) que recorta el video en movimiento —
                el video va sobredimensionado para que el parallax nunca deje
                ver un borde vacío dentro del marco. */}
            <div className="relative aspect-4/5 overflow-hidden rounded-b-[16px] rounded-t-[200px]">
              <motion.video
                ref={videoRef}
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
          </div>

        </div>
      </Container>
    </section>
  );
}
