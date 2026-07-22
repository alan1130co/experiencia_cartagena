"use client";

import { useState } from "react";
import Image from "next/image";

interface GaleriaFotosProps {
  imagenPrincipal: string;
  imagenes: string[];
  alt: string;
}

export function GaleriaFotos({ imagenPrincipal, imagenes, alt }: GaleriaFotosProps) {
  const todasFotos = [imagenPrincipal, ...imagenes];
  const [fotoActiva, setFotoActiva] = useState(0);

  return (
    <div className="space-y-3">
      <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-surface">
        <Image
          src={todasFotos[fotoActiva]}
          alt={`${alt} - Foto ${fotoActiva + 1} de ${todasFotos.length}`}
          fill
          className="object-contain transition-opacity duration-300"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={fotoActiva === 0}
        />
      </div>

      <div className="grid grid-cols-5 gap-2 lg:gap-3">
        {todasFotos.map((foto, i) => (
          <button
            key={i}
            onClick={() => setFotoActiva(i)}
            className={`relative aspect-square rounded-lg overflow-hidden bg-surface transition-all duration-200 ${
              i === fotoActiva
                ? "ring-2 ring-primary ring-offset-2 opacity-100"
                : "opacity-60 hover:opacity-100 hover:ring-1 hover:ring-primary"
            }`}
            aria-label={`Ver foto ${i + 1}`}
          >
            <Image src={foto} alt="" fill className="object-contain" sizes="20vw" />
          </button>
        ))}
      </div>
    </div>
  );
}
