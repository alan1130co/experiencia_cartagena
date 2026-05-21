"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

interface SiteLogoProps {
  /** Clase aplicada al contenedor (Image o texto fallback). */
  className?: string;
  /** Variante de color — "dark" para fondos oscuros, "light" (default) para fondos claros. */
  variant?: "light" | "dark";
}

/**
 * Logo del sitio con fallback a texto si /images/ui/logo.png no existe aún.
 * Componente de cliente porque gestiona estado de error de imagen.
 */
export function SiteLogo({ className, variant = "light" }: SiteLogoProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <span
        className={cn(
          "font-display text-lg font-bold leading-none",
          variant === "dark" ? "text-white" : "text-primary",
          className,
        )}
      >
        {SITE_CONFIG.shortName}
      </span>
    );
  }

  return (
    <Image
      src={SITE_CONFIG.logo}
      alt={`${SITE_CONFIG.name} — logo`}
      width={192}
      height={64}
      priority
      className={cn("h-12 w-auto object-contain lg:h-16", className)}
      onError={() => setError(true)}
    />
  );
}
