"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Star, Quote } from "lucide-react";
import type { Testimonio } from "@/types";
import { cardHoverVariants, cardHoverTransition } from "@/lib/motion/cardHover";

interface TestimonioCardProps {
  testimonio: Testimonio;
}

export function TestimonioCard({ testimonio }: TestimonioCardProps) {
  const t = useTranslations("Common");

  return (
    <motion.article
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={cardHoverVariants}
      transition={cardHoverTransition}
      className="flex flex-col rounded-2xl bg-surface-container p-8"
    >

      {/* Estrellas */}
      <div className="flex gap-1" aria-label={t("ratingLabel", { rating: testimonio.rating })}>
        {Array.from({ length: testimonio.rating }).map((_, i) => (
          <Star key={i} className="size-5 fill-brand-orange text-brand-orange" aria-hidden />
        ))}
      </div>

      {/* Quote decorativo */}
      <Quote className="mt-4 size-8 text-primary/20" aria-hidden />

      {/* Texto */}
      <p className="mt-2 flex-1 text-body-md leading-relaxed text-on-surface">
        &ldquo;{testimonio.testimonio}&rdquo;
      </p>

      {/* Divisor */}
      <div className="my-6 h-px bg-outline-variant" />

      {/* Footer */}
      <div className="flex items-center gap-4">
        {testimonio.foto ? (
          <div className="relative size-12 shrink-0 overflow-hidden rounded-full">
            <Image
              src={testimonio.foto}
              alt={testimonio.fotoAlt ?? testimonio.nombre}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-sm text-on-primary">
            {testimonio.nombre.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-primary">{testimonio.nombre}</p>
          <p className="text-xs text-on-surface-variant">
            {testimonio.ubicacion}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
