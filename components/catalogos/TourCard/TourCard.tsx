"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Clock, MapPin } from "lucide-react";
import type { TourItem } from "@/lib/data/tours";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import {
  cardHoverVariants,
  cardHoverTransition,
  imageZoomVariants,
  imageZoomTransition,
} from "@/lib/motion/cardHover";

interface TourCardProps {
  tour: TourItem;
}

export function TourCard({ tour }: TourCardProps) {
  const t = useTranslations("Common");

  return (
    <motion.article
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={cardHoverVariants}
      transition={cardHoverTransition}
      className="flex h-full flex-col bg-white rounded-2xl overflow-hidden"
    >
      {/* Imagen */}
      <Link
        href={`/tours/${tour.slug}`}
        className="relative aspect-4/3 overflow-hidden block bg-surface"
      >
        <motion.div
          variants={imageZoomVariants}
          transition={imageZoomTransition}
          className="relative size-full"
        >
          <Image
            src={tour.imagenPrincipal}
            alt={tour.titulo}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
      </Link>

      {/* Contenido */}
      <div className="p-6 flex flex-1 flex-col">
        <h3 className="text-2xl font-display font-light text-primary leading-tight">
          {tour.titulo}
        </h3>

        <p className="text-sm text-on-surface-variant mt-2 line-clamp-2">
          {tour.descripcionBreve}
        </p>

        <div className="flex flex-col gap-2 mt-4 pb-4 border-b border-outline-variant text-sm text-on-surface-variant">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary shrink-0" aria-hidden />
            <span className="line-clamp-1">{tour.horarios}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden />
            <span className="line-clamp-1">{tour.ubicacionSalida}</span>
          </div>
        </div>

        {/* Bloque inferior — siempre pegado al fondo de la tarjeta */}
        <div className="mt-auto flex flex-col gap-4 pt-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-on-surface-variant">{t("desde")}</p>
              <p className="text-xl font-display text-primary font-light">
                {tour.precioDesde}
              </p>
            </div>
            <Link
              href={`/tours/${tour.slug}`}
              className="text-primary text-xs font-semibold tracking-wider uppercase hover:underline"
            >
              {t("viewDetailsArrow")}
            </Link>
          </div>

          <WhatsAppButton
            variant="default"
            size="md"
            mensaje={t("tourInterestMessage", { titulo: tour.titulo })}
            className="w-full"
          >
            {t("reserveTour")}
          </WhatsAppButton>
        </div>
      </div>
    </motion.article>
  );
}
