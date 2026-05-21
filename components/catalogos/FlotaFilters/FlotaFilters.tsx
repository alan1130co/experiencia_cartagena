"use client";

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

const CATEGORIAS = [
  { key: "todos", label: "Todos" },
  { key: "botes", label: "Botes" },
  { key: "yates", label: "Yates" },
  { key: "catamaranes", label: "Catamaranes" },
] as const;

export function FlotaFilters({
  categoriaActiva,
  onCategoriaChange,
  counts,
  ordenActivo,
  onOrdenChange,
}: FlotaFiltersProps) {
  return (
    <div className="bg-surface rounded-2xl p-4 lg:p-6 border border-outline-variant">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        {/* Filtros de categoría */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => onCategoriaChange(cat.key)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all",
                categoriaActiva === cat.key
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-on-surface-variant border border-outline-variant hover:border-primary hover:text-primary",
              )}
            >
              {cat.label}{" "}
              <span className="opacity-70">({counts[cat.key]})</span>
            </button>
          ))}
        </div>

        {/* Selector de orden */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="orden-select"
            className="text-sm text-on-surface-variant whitespace-nowrap"
          >
            Ordenar por:
          </label>
          <select
            id="orden-select"
            value={ordenActivo}
            onChange={(e) => onOrdenChange(e.target.value)}
            className="px-3 py-2 rounded-xl border border-outline-variant text-sm bg-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
          >
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
            <option value="capacidad-desc">Mayor capacidad</option>
            <option value="nombre">Nombre A-Z</option>
          </select>
        </div>

      </div>
    </div>
  );
}
