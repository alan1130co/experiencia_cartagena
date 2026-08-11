import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

const HERO_VIDEO = "/videos/hero/hero-principal.mp4";
// TODO: generar este still a partir del video (frame ~1s) y optimizarlo a
// <150 KB — ver instrucciones en public/images/hero/README.md.
const HERO_POSTER = "/images/hero/hero-poster.webp";

export function Hero() {
  return (
    <section aria-label="Bienvenida — Cartagena Índigo" className="bg-surface">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">

          {/* ── IZQUIERDA: bloque de texto (5 de 12 columnas en desktop) ── */}
          {/* above-the-fold: reveal-eager (CSS puro), no ScrollReveal/IntersectionObserver */}
          <div className="reveal-eager order-2 lg:order-1 lg:col-span-5 lg:col-start-1">
            <h1
              className="font-display font-light leading-[1.1] tracking-[-0.02em] text-primary"
              style={{ fontSize: "clamp(2.25rem, 5vw, 5rem)" }}
            >
              Tour en Cartagena: vive el Caribe más hermoso de Colombia
            </h1>

            <p className="mt-6 max-w-md text-body-md text-on-surface-variant">
              Descubre experiencias seleccionadas en la joya colonial de
              América. Desde paseos en yate privados hasta cenas bajo las
              estrellas.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <ButtonLink href="/destinos" variant="primary" size="md">
                Explorar Destinos
              </ButtonLink>
              <Link
                href="/galeria"
                className="inline-flex items-center gap-2 text-label-caps text-primary transition-colors duration-200 hover:text-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Ver Galería
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>

          {/* ── DERECHA: imagen en tarjeta portal (7 de 12 columnas en desktop) ── */}
          {/* above-the-fold: reveal-eager, delay inline conserva el stagger que tenía ScrollReveal delay={150} */}
          <div
            className="reveal-eager order-1 lg:order-2 lg:col-span-7 lg:col-start-6"
            style={{ animationDelay: "150ms" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-b-[16px] rounded-t-[200px]">
              <video
                src={HERO_VIDEO}
                poster={HERO_POSTER}
                preload="metadata"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Calles coloniales de la Ciudad Amurallada de Cartagena de Indias"
                className="absolute inset-0 size-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
