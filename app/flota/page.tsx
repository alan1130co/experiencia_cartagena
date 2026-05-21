"use client";

import { Suspense, useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { EmbarcacionCard } from "@/components/catalogos/EmbarcacionCard";
import { FlotaFilters } from "@/components/catalogos/FlotaFilters";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { botes } from "@/lib/data/botes";
import { yates } from "@/lib/data/yates";
import { catamaranes } from "@/lib/data/catamaranes";

const ITEMS_POR_PAGINA = 4;

// Suspense boundary necesaria para useSearchParams en client components
export default function FlotaPage() {
  return (
    <Suspense fallback={null}>
      <FlotaContent />
    </Suspense>
  );
}

const CATEGORIAS_VALIDAS = ["todos", "botes", "yates", "catamaranes"] as const;

function categoriaValida(cat: string | null): string {
  return CATEGORIAS_VALIDAS.includes(cat as typeof CATEGORIAS_VALIDAS[number]) ? cat! : "todos";
}

function FlotaContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [categoria, setCategoria] = useState<string>(
    categoriaValida(searchParams.get("categoria"))
  );
  const [orden, setOrden] = useState<string>("precio-asc");
  const [paginaActual, setPaginaActual] = useState(1);

  // Sincronizar cuando cambia el query param (navegación desde dropdown)
  useEffect(() => {
    const nueva = categoriaValida(searchParams.get("categoria"));
    if (nueva !== categoria) {
      setCategoria(nueva);
      setPaginaActual(1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Reset de paginación cuando cambia el orden
  useEffect(() => {
    setPaginaActual(1);
  }, [orden]);

  // Unificar todas las embarcaciones con categoría y capacidad normalizada
  const todasEmbarcaciones = useMemo(() => [
    ...botes.map((b) => ({ ...b, _categoria: "bote" as const, _capacidad: b.capacidadPersonas })),
    ...yates.map((y) => ({ ...y, _categoria: "yate" as const, _capacidad: y.capacidadPersonas })),
    ...catamaranes.map((c) => ({ ...c, _categoria: "catamaran" as const, _capacidad: c.capacidadVerano })),
  ], []);

  const filtradas = useMemo(() => {
    if (categoria === "botes") return todasEmbarcaciones.filter((e) => e._categoria === "bote");
    if (categoria === "yates") return todasEmbarcaciones.filter((e) => e._categoria === "yate");
    if (categoria === "catamaranes") return todasEmbarcaciones.filter((e) => e._categoria === "catamaran");
    return todasEmbarcaciones;
  }, [todasEmbarcaciones, categoria]);

  const ordenadas = useMemo(() => {
    const arr = [...filtradas];
    if (orden === "precio-asc") arr.sort((a, b) => a.precioPorDia - b.precioPorDia);
    if (orden === "precio-desc") arr.sort((a, b) => b.precioPorDia - a.precioPorDia);
    if (orden === "capacidad-desc") arr.sort((a, b) => b._capacidad - a._capacidad);
    if (orden === "nombre") arr.sort((a, b) => a.nombre.localeCompare(b.nombre));
    return arr;
  }, [filtradas, orden]);

  // Cálculos de paginación
  const totalPaginas = Math.ceil(ordenadas.length / ITEMS_POR_PAGINA);
  const inicio = (paginaActual - 1) * ITEMS_POR_PAGINA;
  const fin = inicio + ITEMS_POR_PAGINA;
  const embarcacionesPagina = ordenadas.slice(inicio, fin);

  function handleCategoriaChange(nuevaCategoria: string) {
    setCategoria(nuevaCategoria);
    setPaginaActual(1);
    if (nuevaCategoria === "todos") {
      router.push("/flota", { scroll: false });
    } else {
      router.push(`/flota?categoria=${nuevaCategoria}`, { scroll: false });
    }
  }

  function cambiarPagina(nuevaPagina: number) {
    setPaginaActual(nuevaPagina);
    document.getElementById("flota-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const counts = {
    todos: todasEmbarcaciones.length,
    botes: botes.length,
    yates: yates.length,
    catamaranes: catamaranes.length,
  };

  return (
    <>
      {/* HERO */}
      <Section className="bg-surface pt-32 lg:pt-40 pb-12 lg:pb-16">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-label-caps text-primary uppercase tracking-wider">
                Nuestra Flota
              </p>
              <h1 className="font-display text-4xl lg:text-headline-xl font-light text-primary mt-3 leading-tight">
                Embarcaciones en el Caribe
              </h1>
              <p className="text-body-md text-on-surface-variant mt-5 max-w-2xl mx-auto">
                Botes rápidos para el día, yates con cabinas para dormir, y
                catamaranes Powercat para grupos grandes. Selecciona la
                embarcación perfecta para tu experiencia en Cartagena.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* FILTROS */}
      <Section className="py-6 lg:py-8">
        <Container>
          <FlotaFilters
            categoriaActiva={categoria as "todos" | "botes" | "yates" | "catamaranes"}
            onCategoriaChange={handleCategoriaChange}
            counts={counts}
            ordenActivo={orden as "precio-asc" | "precio-desc" | "capacidad-desc" | "nombre"}
            onOrdenChange={setOrden}
          />
        </Container>
      </Section>

      {/* GRID */}
      <Section className="pb-20 lg:pb-28 pt-4">
        <Container>
          {ordenadas.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-headline-md font-light text-primary mb-4">
                Próximamente
              </p>
              <p className="text-body-md text-on-surface-variant max-w-md mx-auto">
                Estamos preparando esta categoría. Mientras tanto, explora
                nuestros botes y lanchas disponibles.
              </p>
              <button
                type="button"
                onClick={() => handleCategoriaChange("botes")}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Ver botes disponibles →
              </button>
            </div>
          ) : (
            <>
              {/* Contador */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">
                <p className="text-sm text-on-surface-variant">
                  Mostrando{" "}
                  <strong className="text-primary">
                    {inicio + 1}-{Math.min(fin, ordenadas.length)}
                  </strong>{" "}
                  de{" "}
                  <strong className="text-primary">{ordenadas.length}</strong>
                  {ordenadas.length === 1 ? " embarcación" : " embarcaciones"}
                  {categoria !== "todos" && ` en categoría "${categoria}"`}
                </p>
                {totalPaginas > 1 && (
                  <p className="text-sm text-on-surface-variant">
                    Página{" "}
                    <strong className="text-primary">{paginaActual}</strong> de{" "}
                    <strong className="text-primary">{totalPaginas}</strong>
                  </p>
                )}
              </div>

              {/* Grid 2 columnas */}
              <div id="flota-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {embarcacionesPagina.map((emb) => (
                  <ScrollReveal key={emb.id}>
                    <EmbarcacionCard
                      embarcacion={emb}
                      categoria={emb._categoria}
                    />
                  </ScrollReveal>
                ))}
              </div>

              {/* Paginación */}
              {totalPaginas > 1 && (
                <div className="mt-12 flex justify-center items-center gap-2 flex-wrap">
                  <button
                    onClick={() => cambiarPagina(paginaActual - 1)}
                    disabled={paginaActual === 1}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-outline-variant hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-outline-variant disabled:hover:text-on-surface-variant transition-all flex items-center gap-2"
                    aria-label="Página anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Anterior
                  </button>

                  <div className="flex gap-1">
                    {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
                      <button
                        key={num}
                        onClick={() => cambiarPagina(num)}
                        className={`w-10 h-10 rounded-full text-sm font-semibold transition-all ${
                          num === paginaActual
                            ? "bg-primary text-white shadow-md"
                            : "bg-white border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                        }`}
                        aria-label={`Página ${num}`}
                        aria-current={num === paginaActual ? "page" : undefined}
                      >
                        {num}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => cambiarPagina(paginaActual + 1)}
                    disabled={paginaActual === totalPaginas}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-outline-variant hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-outline-variant disabled:hover:text-on-surface-variant transition-all flex items-center gap-2"
                    aria-label="Página siguiente"
                  >
                    Siguiente
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </Container>
      </Section>

      {/* CTA FINAL */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-headline-lg font-light mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-body-md text-white/90 mb-6">
              Contáctanos por WhatsApp y te ayudamos a diseñar la experiencia
              perfecta para tu grupo.
            </p>
            <WhatsAppButton
              variant="default"
              size="lg"
              mensaje="Hola, quiero ayuda para elegir la embarcación ideal para mi viaje en Cartagena."
            >
              HABLAR POR WHATSAPP
            </WhatsAppButton>
          </div>
        </Container>
      </section>
    </>
  );
}
