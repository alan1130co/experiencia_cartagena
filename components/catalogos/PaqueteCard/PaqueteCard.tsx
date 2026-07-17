import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Calendar, Check } from "lucide-react";
import type { Paquete } from "@/types";
import { formatPrice } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface PaqueteCardProps {
  paquete: Paquete;
}

export function PaqueteCard({ paquete }: PaqueteCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">
      <Link
        href={`/paquetes/${paquete.slug}`}
        className="relative aspect-[4/3] overflow-hidden block"
      >
        <Image
          src={paquete.imagenPrincipal}
          alt={paquete.imagenAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {paquete.masPopular && (
          <div className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wider">
            MÁS POPULAR
          </div>
        )}
        {paquete.descuento && (
          <div className="absolute top-4 right-4 bg-brand-red text-white px-2.5 py-1 rounded-full text-xs font-bold">
            -{paquete.descuento}%
          </div>
        )}
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-display font-light text-primary leading-tight">
          {paquete.nombre}
        </h3>

        <div className="flex items-center gap-2 mt-2 text-sm text-on-surface-variant">
          <Calendar className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
          <span>
            {paquete.duracionDias} días / {paquete.duracionNoches} noches
          </span>
        </div>

        {paquete.incluye && paquete.incluye.length > 0 && (
          <ul className="mt-5 space-y-2 pb-5 border-b border-outline-variant flex-1">
            {paquete.incluye.slice(0, 4).map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-on-surface-variant"
              >
                <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <div className="flex items-baseline gap-2">
            {paquete.precioBase && (
              <span className="text-sm text-on-surface-variant line-through">
                {formatPrice(paquete.precioBase)}
              </span>
            )}
            <span className="text-2xl font-display text-primary font-light">
              {formatPrice(paquete.precioPorPersona)}
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">por persona</p>
        </div>

        <WhatsAppButton
          variant="default"
          size="md"
          mensaje={`Hola, me interesa el paquete ${paquete.nombre}`}
          className="w-full mt-4"
        >
          VER PAQUETE
        </WhatsAppButton>
      </div>
    </article>
  );
}
