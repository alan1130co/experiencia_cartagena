"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface FlotaFiltersProps {
  categoriaActiva: "todos" | "botes" | "yates" | "catamaranes";
  onCategoriaChange: (cat: string) => void;
  counts: {
    todos: number;
    botes: number;
    yates: number;
    catamaranes: number;
  };
  ordenActivo: "precio-asc" | "precio-desc" | "capacidad-desc" | "nombre";
  onOrdenChange: (orden: string) => void;
}

const CATEGORIA_KEYS = ["todos", "botes", "yates", "catamaranes"] as const;

export function FlotaFilters({
  categoriaActiva,
  onCategoriaChange,
  counts,
  ordenActivo,
  onOrdenChange,
}: FlotaFiltersProps) {
  const t = useTranslations("FlotaFiltros");

  return (
    <div className="bg-surface rounded-2xl p-4 lg:p-6 border border-outline-variant">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        {/* Filtros de categoría */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIA_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => onCategoriaChange(key)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all",
                categoriaActiva === key
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-on-surface-variant border border-outline-variant hover:border-primary hover:text-primary",
              )}
            >
              {t(`categorias.${key}`)}{" "}
              <span className="opacity-70">({counts[key]})</span>
            </button>
          ))}
        </div>

        {/* Selector de orden */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="orden-select"
            className="text-sm text-on-surface-variant whitespace-nowrap"
          >
            {t("ordenarPor")}
          </label>
          <select
            id="orden-select"
            value={ordenActivo}
            onChange={(e) => onOrdenChange(e.target.value)}
            className="px-3 py-2 rounded-xl border border-outline-variant text-sm bg-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
          >
            <option value="precio-asc">{t("orden.precioAsc")}</option>
            <option value="precio-desc">{t("orden.precioDesc")}</option>
            <option value="capacidad-desc">{t("orden.capacidad")}</option>
            <option value="nombre">{t("orden.nombre")}</option>
          </select>
        </div>

      </div>
    </div>
  );
}
