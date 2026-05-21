import Image from "next/image";
import { Clock } from "lucide-react";
import type { Experiencia } from "@/types/experiencia";
import { formatPrice } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface ExperienciaCardProps {
  exp: Experiencia;
}

export function ExperienciaCard({ exp }: ExperienciaCardProps) {
  return (
    <article className="group relative aspect-[4/5] overflow-hidden rounded-2xl">

      {/* Imagen con zoom en hover */}
      <Image
        src={exp.imagen}
        alt={exp.imagenAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay degradado — se oscurece en hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/40" />

      {/* Contenido sobre imagen */}
      <div className="absolute inset-x-0 bottom-0 p-6">

        {/* Texto — se desplaza arriba en hover para dejar espacio al botón */}
        <div className="translate-y-0 transition-transform duration-300 group-hover:-translate-y-14">
          <h3 className="font-display text-2xl font-light leading-tight text-white">
            {exp.nombre}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="flex items-center gap-1.5 text-label-caps text-white/80">
              <Clock className="size-3.5 shrink-0" aria-hidden />
              {exp.duracion}
            </span>
            <span className="text-white/40" aria-hidden>·</span>
            <span className="text-label-caps text-white/80">
              Desde {formatPrice(exp.precioDesde)}
              {exp.incluyePorPersona ? " /persona" : ""}
            </span>
          </div>
        </div>

        {/* Botón WhatsApp — aparece desde abajo en hover */}
        <div className="absolute inset-x-6 bottom-6 translate-y-20 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <WhatsAppButton
            variant="default"
            size="md"
            mensaje={`Hola, me interesa la experiencia: ${exp.nombre}. ¿Me pueden dar más información?`}
            className="w-full justify-center text-label-caps"
          >
            RESERVAR EXPERIENCIA
          </WhatsAppButton>
        </div>

      </div>
    </article>
  );
}
