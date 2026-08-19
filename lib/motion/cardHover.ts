import type { Transition, Variants } from "framer-motion";

/**
 * Micro-interacción de hover compartida por todas las tarjetas de catálogo
 * (TourCard, BoteCard, EmbarcacionCard, TestimonioCard): la tarjeta se eleva
 * con una sombra más pronunciada y, si tiene imagen, esta hace un zoom-in
 * sutil. Reutiliza el único color de sombra permitido en el sitio
 * (rgba(42, 107, 138, …), ver --shadow-card en app/globals.css) en vez de
 * introducir un negro genérico.
 */
export const cardHoverVariants: Variants = {
  rest: { y: 0, boxShadow: "0 10px 30px rgba(42, 107, 138, 0.08)" },
  hover: { y: -8, boxShadow: "0 28px 48px -8px rgba(42, 107, 138, 0.22)" },
};

export const cardHoverTransition: Transition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
};

export const imageZoomVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.08 },
};

export const imageZoomTransition: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};
