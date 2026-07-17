import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  Users, Ruler, Zap, Volume2, Bath, Sun,
  Waves, ChefHat, Shield, type LucideIcon,
} from "lucide-react";
import type { Bote } from "@/types";
import { formatPrice } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const ICON_MAP: Record<string, LucideIcon> = {
  Users, Ruler, Zap, Volume2, Bath, Sun, Waves, ChefHat, Shield,
};

function CaracteristicaIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden />;
}

interface BoteCardProps {
  bote: Bote;
}

export function BoteCard({ bote }: BoteCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:shadow-card-hover">

      {/* Imagen */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={bote.imagenPrincipal}
          alt={bote.imagenAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {bote.masPopular && (
          <div className="absolute left-4 top-4 rounded-full bg-brand-orange px-3 py-1.5 text-label-caps text-white shadow-md">
            MÁS POPULAR
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <h3 className="font-display text-2xl font-light leading-tight text-primary">
          {bote.nombre}
        </h3>

        <p className="mt-2 line-clamp-2 text-body-md text-on-surface-variant">
          {bote.descripcionCorta}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 border-b border-outline-variant pb-5">
          {bote.caracteristicas.slice(0, 4).map((carac, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
              <CaracteristicaIcon
                name={carac.icono}
                className="size-4 shrink-0 text-primary"
              />
              <span>{carac.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-xs text-on-surface-variant">Desde</p>
            <p className="font-display text-2xl font-light text-primary">
              {formatPrice(bote.precioPorDia)}
              <span className="text-sm text-on-surface-variant"> /día</span>
            </p>
          </div>
          <Link
            href={`/flota/${bote.slug}`}
            className="text-label-caps text-primary underline-offset-4 decoration-1 hover:underline"
          >
            VER DETALLES
          </Link>
        </div>

        <WhatsAppButton
          variant="default"
          size="md"
          mensaje={`Hola, me interesa el bote ${bote.nombre}. ¿Está disponible?`}
          className="mt-5 w-full justify-center text-label-caps"
        >
          RESERVAR POR WHATSAPP
        </WhatsAppButton>
      </div>
    </article>
  );
}
