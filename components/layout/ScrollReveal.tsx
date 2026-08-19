"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Retraso antes de animar, en ms (mantiene la API del sistema anterior). */
  delay?: number;
  /**
   * true = anima al montar en vez de esperar scroll — reservado para el
   * primer bloque above-the-fold de cada página (candidato a LCP).
   */
  eager?: boolean;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  eager = false,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const transition = { duration: 0.6, ease: "easeOut" as const, delay: delay / 1000 };

  if (eager) {
    return (
      <motion.div
        className={cn(className)}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
