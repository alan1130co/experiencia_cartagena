"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Users, Ruler, BedDouble, Bath, UserCheck } from "lucide-react";
import type { Bote } from "@/types/bote";
import type { Yate } from "@/types/yate";
import type { Catamaran } from "@/types/catamaran";
import { formatPrice } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import {
  cardHoverVariants,
  cardHoverTransition,
  imageZoomVariants,
  imageZoomTransition,
} from "@/lib/motion/cardHover";

type Categoria = "bote" | "yate" | "catamaran";

export interface EmbarcacionCardProps {
  embarcacion: Bote | Yate | Catamaran;
  categoria: Categoria;
}

const BOTE_TIPO_KEYS = ["lancha", "lancha-lujo", "bote"] as const;
type BoteTipoKey = (typeof BOTE_TIPO_KEYS)[number];

function getCapacidad(emb: Bote | Yate | Catamaran, categoria: Categoria): number {
  if (categoria === "catamaran") return (emb as Catamaran).capacidadVerano;
  return (emb as Bote | Yate).capacidadPersonas;
}

export function EmbarcacionCard({ embarcacion: emb, categoria }: EmbarcacionCardProps) {
  const t = useTranslations("Common");

  let tipoLabel: string | null = null;
  if (categoria === "bote") {
    const tipo = (emb as Bote).tipo;
    tipoLabel = BOTE_TIPO_KEYS.includes(tipo as BoteTipoKey)
      ? t(`boteTipo.${tipo as BoteTipoKey}`)
      : null;
  } else if (categoria === "catamaran") {
    const c = emb as Catamaran;
    tipoLabel = `${c.marca} ${c.modelo}`;
  }

  const capacidad = getCapacidad(emb, categoria);
  const yaticData =
    categoria === "yate" || categoria === "catamaran"
      ? (emb as Yate | Catamaran)
      : null;

  return (
    <motion.article
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={cardHoverVariants}
      transition={cardHoverTransition}
      className="bg-white rounded-2xl overflow-hidden flex flex-col h-full"
    >

      {/* Imagen: altura fija, no depende de la foto original */}
      <div className="relative h-56 shrink-0 overflow-hidden">
        <motion.div
          variants={imageZoomVariants}
          transition={imageZoomTransition}
          className="relative size-full"
        >
          <Image
            src={emb.imagenPrincipal}
            alt={emb.imagenAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
        {emb.masPopular && (
          <div className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-md">
            {t("mostPopular")}
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-primary px-3 py-1.5 rounded-full text-xs font-semibold">
          {t(`category.${categoria}`)}
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

        <p className="text-sm text-on-surface-variant mt-3 line-clamp-2">
          {emb.descripcionCorta}
        </p>

        <div className="grid grid-cols-2 gap-2 mt-4 pb-4 border-b border-outline-variant min-h-19">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <Users className="w-4 h-4 text-primary shrink-0" aria-hidden />
            <span>{t("upToPax", { count: capacidad })}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <Ruler className="w-4 h-4 text-primary shrink-0" aria-hidden />
            <span>{emb.eslora}</span>
          </div>

          {yaticData && yaticData.cabinas > 0 && (
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <BedDouble className="w-4 h-4 text-primary shrink-0" aria-hidden />
              <span>{t("cabins", { count: yaticData.cabinas })}</span>
            </div>
          )}
          {yaticData?.banos && (
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <Bath className="w-4 h-4 text-primary shrink-0" aria-hidden />
              <span>{t("bathrooms", { count: yaticData.banos })}</span>
            </div>
          )}

          {categoria === "bote" && (emb as Bote).tripulacion > 0 && (
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <UserCheck className="w-4 h-4 text-primary shrink-0" aria-hidden />
              <span>{t("crew", { count: (emb as Bote).tripulacion })}</span>
            </div>
          )}
        </div>

        {/* Ancla el precio y el CTA al fondo, sin importar cuánto crezca el contenido de arriba */}
        <div className="mt-auto">
          <div className="flex items-end justify-between mt-4">
            <div>
              <p className="text-xs text-on-surface-variant">{t("desde")}</p>
              <p className="font-display text-2xl font-light text-primary">
                {formatPrice(emb.precioPorDia)}
                <span className="text-xs text-on-surface-variant"> {t("perDay")}</span>
              </p>
            </div>
            <Link
              href={`/flota/${emb.slug}`}
              className="text-primary text-xs font-semibold tracking-wider uppercase hover:underline underline-offset-4"
            >
              {t("viewDetailsArrow")}
            </Link>
          </div>

          <WhatsAppButton
            variant="default"
            size="md"
            mensaje={`Hola, me interesa la embarcación ${emb.nombre}. ¿Está disponible?`}
            className="w-full mt-4"
          >
            {t("reserve")}
          </WhatsAppButton>
        </div>

      </div>
    </motion.article>
  );
}
