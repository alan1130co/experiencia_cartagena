import Image from "next/image";
import { CalendarDays, Check } from "lucide-react";
import type { Paquete } from "@/types";
import { formatPrice } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface PaqueteCardProps {
  paquete: Paquete;
}

export function PaqueteCard({ paquete }: PaqueteCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:shadow-card-hover">

      {/* Imagen */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={paquete.imagenPrincipal}
          alt={paquete.imagenAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {paquete.masPopular && (
          <div className="absolute left-4 top-4 rounded-full bg-brand-orange px-3 py-1.5 text-label-caps text-white shadow-md">
            MÁS POPULAR
          </div>
        )}
        {paquete.descuento && (
          <div className="absolute right-4 top-4 rounded-full bg-red-600 px-2.5 py-1 text-label-caps text-white shadow-md">
            -{paquete.descuento}%
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <h3 className="font-display text-2xl font-light leading-tight text-primary">
          {paquete.nombre}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm text-on-surface-variant">
          <CalendarDays className="size-4 shrink-0 text-primary" aria-hidden />
          <span>{paquete.duracionDias} días / {paquete.duracionNoches} noches</span>
        </div>

        {/* Lista incluye */}
        {paquete.incluye && paquete.incluye.length > 0 && (
          <ul className="mt-5 space-y-2 border-b border-outline-variant pb-5">
            {paquete.incluye.slice(0, 4).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                <Check className="size-4 shrink-0 text-brand-green mt-0.5" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Precio */}
        <div className="mt-5">
          <div className="flex items-baseline gap-2">
            {paquete.precioBase && (
              <span className="text-sm text-on-surface-variant line-through">
                {formatPrice(paquete.precioBase)}
              </span>
            )}
            <span className="font-display text-2xl font-light text-primary">
              {formatPrice(paquete.precioPorPersona)}
            </span>
          </div>
          <p className="mt-1 text-xs text-on-surface-variant">por persona</p>
        </div>

        <WhatsAppButton
          variant="default"
          size="md"
          mensaje={`Hola, me interesa el paquete ${paquete.nombre}`}
          className="mt-5 w-full justify-center text-label-caps"
        >
          VER PAQUETE
        </WhatsAppButton>
      </div>
    </article>
  );
}
