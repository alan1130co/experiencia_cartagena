import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Users, Ruler, BedDouble, Bath, UserCheck } from "lucide-react";
import type { Bote } from "@/types/bote";
import type { Yate } from "@/types/yate";
import type { Catamaran } from "@/types/catamaran";
import { formatPrice } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type Categoria = "bote" | "yate" | "catamaran";

export interface EmbarcacionCardProps {
  embarcacion: Bote | Yate | Catamaran;
  categoria: Categoria;
}

const CATEGORIA_LABEL: Record<Categoria, string> = {
  bote: "Bote",
  yate: "Yate",
  catamaran: "Catamarán",
};

const BOTE_TIPO_LABEL: Record<string, string> = {
  "lancha": "Lancha",
  "lancha-lujo": "Lancha de Lujo",
  "bote": "Bote",
};

function tipoEspecifico(emb: Bote | Yate | Catamaran, categoria: Categoria): string | null {
  if (categoria === "bote") return BOTE_TIPO_LABEL[(emb as Bote).tipo] ?? null;
  if (categoria === "catamaran") {
    const c = emb as Catamaran;
    return `${c.marca} ${c.modelo}`;
  }
  return null;
}

function getCapacidad(emb: Bote | Yate | Catamaran, categoria: Categoria): number {
  if (categoria === "catamaran") return (emb as Catamaran).capacidadVerano;
  return (emb as Bote | Yate).capacidadPersonas;
}

export function EmbarcacionCard({ embarcacion: emb, categoria }: EmbarcacionCardProps) {
  const tipoLabel = tipoEspecifico(emb, categoria);
  const capacidad = getCapacidad(emb, categoria);
  const yaticData =
    categoria === "yate" || categoria === "catamaran"
      ? (emb as Yate | Catamaran)
      : null;

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">

      {/* Imagen */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={emb.imagenPrincipal}
          alt={emb.imagenAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {emb.masPopular && (
          <div className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-md">
            MÁS POPULAR
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-primary px-3 py-1.5 rounded-full text-xs font-semibold">
          {CATEGORIA_LABEL[categoria]}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-1">

        <div>
          <h3 className="font-display text-2xl font-light leading-tight text-primary">
            {emb.nombre}
          </h3>
          {tipoLabel && (
            <p className="text-xs text-on-surface-variant uppercase tracking-wider mt-1">
              {tipoLabel}
            </p>
          )}
        </div>

        <p className="text-sm text-on-surface-variant mt-3 line-clamp-2 flex-1">
          {emb.descripcionCorta}
        </p>

        <div className="grid grid-cols-2 gap-2 mt-4 pb-4 border-b border-outline-variant">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <Users className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
            <span>Hasta {capacidad} pax</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <Ruler className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
            <span>{emb.eslora}</span>
          </div>

          {yaticData && yaticData.cabinas > 0 && (
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <BedDouble className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
              <span>{yaticData.cabinas} cabinas</span>
            </div>
          )}
          {yaticData?.banos && (
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <Bath className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
              <span>{yaticData.banos} baños</span>
            </div>
          )}

          {categoria === "bote" && (emb as Bote).tripulacion > 0 && (
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <UserCheck className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
              <span>{(emb as Bote).tripulacion} tripulantes</span>
            </div>
          )}
        </div>

        <div className="flex items-end justify-between mt-4">
          <div>
            <p className="text-xs text-on-surface-variant">Desde</p>
            <p className="font-display text-2xl font-light text-primary">
              {formatPrice(emb.precioPorDia)}
              <span className="text-xs text-on-surface-variant"> /día</span>
            </p>
          </div>
          <Link
            href={`/flota/${emb.slug}`}
            className="text-primary text-xs font-semibold tracking-wider uppercase hover:underline underline-offset-4"
          >
            Ver detalles →
          </Link>
        </div>

        <WhatsAppButton
          variant="default"
          size="md"
          mensaje={`Hola, me interesa la embarcación ${emb.nombre}. ¿Está disponible?`}
          className="w-full mt-4"
        >
          RESERVAR
        </WhatsAppButton>

      </div>
    </article>
  );
}
