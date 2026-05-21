import Image from "next/image";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import type { Tour } from "@/types";
import { formatPrice, tourCategoria } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:shadow-card-hover">

      {/* Imagen */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.imagenPrincipal}
          alt={tour.imagenAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-label-caps text-white shadow-md">
          {tour.popular ? "POPULAR" : tourCategoria(tour.categoria)}
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <h3 className="font-display text-2xl font-light leading-tight text-primary">
          {tour.nombre}
        </h3>

        <p className="mt-2 line-clamp-2 text-body-md text-on-surface-variant">
          {tour.descripcionCorta}
        </p>

        <div className="mt-4 flex flex-col gap-2 border-b border-outline-variant pb-5">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <Clock className="size-4 shrink-0 text-primary" aria-hidden />
            <span>{tour.duracion}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <Users className="size-4 shrink-0 text-primary" aria-hidden />
            <span>Hasta {tour.capacidadMaxima} personas</span>
          </div>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-xs text-on-surface-variant">Por persona desde</p>
            <p className="font-display text-2xl font-light text-primary">
              {formatPrice(tour.precioPorPersona)}
            </p>
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            className="text-label-caps text-primary underline-offset-4 decoration-1 hover:underline"
          >
            VER DETALLES
          </Link>
        </div>

        <WhatsAppButton
          variant="default"
          size="md"
          mensaje={`Hola, me interesa el tour ${tour.nombre}. ¿Tienen disponibilidad?`}
          className="mt-5 w-full justify-center text-label-caps"
        >
          RESERVAR TOUR
        </WhatsAppButton>
      </div>
    </article>
  );
}
