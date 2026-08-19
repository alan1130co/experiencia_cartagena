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
      className="flex h-full flex-col overflow-hidden rounded-2xl bg-white"
    >

      {/* Imagen */}
      <div className="relative aspect-4/3 overflow-hidden bg-surface">
        <motion.div
          variants={imageZoomVariants}
          transition={imageZoomTransition}
          className="relative size-full"
        >
          <Image
            src={tour.imagenPrincipal}
            alt={tour.titulo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <h3 className="font-display text-2xl font-light leading-tight text-primary">
          {tour.titulo}
        </h3>

        <p className="mt-2 line-clamp-2 text-body-md text-on-surface-variant">
          {tour.descripcionBreve}
        </p>

        <div className="mt-4 flex flex-col gap-2 border-b border-outline-variant pb-5">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <Clock className="size-4 shrink-0 text-primary" aria-hidden />
            <span className="line-clamp-1">{tour.horarios}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
            <span className="line-clamp-1">{tour.ubicacionSalida}</span>
          </div>
        </div>

        {/* Bloque inferior — siempre pegado al fondo de la tarjeta */}
        <div className="mt-auto flex flex-col gap-5 pt-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-on-surface-variant">{t("desde")}</p>
              <p className="font-display text-2xl font-light text-primary">
                {tour.precioDesde}
              </p>
            </div>
            <Link
              href={`/tours/${tour.slug}`}
              className="text-label-caps text-primary underline-offset-4 decoration-1 hover:underline"
            >
              {t("viewDetails")}
            </Link>
          </div>

          <WhatsAppButton
            variant="default"
            size="md"
            mensaje={`Hola, me interesa el tour ${tour.titulo}. ¿Tienen disponibilidad?`}
            className="w-full justify-center text-label-caps"
          >
            {t("reserveTour")}
          </WhatsAppButton>
        </div>
      </div>
    </motion.article>
  );
}
