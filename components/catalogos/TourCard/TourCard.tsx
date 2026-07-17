import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  Clock,
  Users,
  Landmark,
  Waves,
  UtensilsCrossed,
  TreePine,
  Mountain,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Tour, CategoriaTour } from "@/types/tour";
import { formatPrice } from "@/lib/utils";
import { getCategoriaInfo } from "@/lib/data/categorias-tours";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const ICON_MAP: Record<string, LucideIcon> = {
  Landmark,
  Waves,
  UtensilsCrossed,
  TreePine,
  Mountain,
};

function CategoriaBadge({ categoria }: { categoria: CategoriaTour }) {
  const info = getCategoriaInfo(categoria);
  if (!info) return null;
  const Icon = ICON_MAP[info.icono];
  return (
    <span
      className={`inline-flex items-center gap-1.5 ${info.color} text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm`}
    >
      {Icon && <Icon className="w-3 h-3" aria-hidden />}
      {info.label}
    </span>
  );
}

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">
      {/* Imagen */}
      <Link
        href={`/tours/${tour.slug}`}
        className="relative aspect-[4/3] overflow-hidden block"
      >
        <Image
          src={tour.imagenPrincipal}
          alt={tour.imagenAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <CategoriaBadge categoria={tour.categoria} />
        </div>
        {tour.popular && (
          <div className="absolute top-4 right-4 bg-brand-orange text-white px-2.5 py-1 rounded-full text-xs font-bold tracking-wider">
            POPULAR
          </div>
        )}
      </Link>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-display font-light text-primary leading-tight">
          {tour.nombre}
        </h3>

        <p className="text-sm text-on-surface-variant mt-2 line-clamp-2 flex-1">
          {tour.descripcionCorta}
        </p>

        <div className="flex items-center gap-4 mt-4 pb-4 border-b border-outline-variant text-sm text-on-surface-variant">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" aria-hidden />
            <span>{tour.duracion}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-primary" aria-hidden />
            <span>{tour.capacidadMaxima} máx</span>
          </div>
        </div>

        <div className="flex items-end justify-between mt-4">
          <div>
            <p className="text-xs text-on-surface-variant">Desde</p>
            <p className="text-xl font-display text-primary font-light">
              {formatPrice(tour.precioPorPersona)}
              <span className="text-xs text-on-surface-variant"> /persona</span>
            </p>
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            className="text-primary text-xs font-semibold tracking-wider uppercase hover:underline"
          >
            Ver detalles →
          </Link>
        </div>

        <WhatsAppButton
          variant="default"
          size="md"
          mensaje={`Hola, me interesa el tour: ${tour.nombre}`}
          className="w-full mt-4"
        >
          RESERVAR TOUR
        </WhatsAppButton>
      </div>
    </article>
  );
}
