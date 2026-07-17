"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { TourCard } from "@/components/catalogos/TourCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { tours } from "@/lib/data/tours";
import { categoriasTours } from "@/lib/data/categorias-tours";

export default function ToursPage() {
  const [categoriaActiva, setCategoriaActiva] = useState<string>("todos");

  const toursFiltrados = useMemo(() => {
    if (categoriaActiva === "todos") return tours;
    return tours.filter((t) => t.categoria === categoriaActiva);
  }, [categoriaActiva]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { todos: tours.length };
    categoriasTours.forEach((cat) => {
      c[cat.id] = tours.filter((t) => t.categoria === cat.id).length;
    });
    return c;
  }, []);

  return (
    <>
      {/* HERO */}
      <Section className="bg-surface pt-36 lg:pt-44 pb-12 lg:pb-16">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-label-caps text-primary uppercase tracking-wider">
                Tours en Cartagena
              </p>
              <h1 className="text-headline-xl font-display font-light text-primary mt-3">
                Descubre el Caribe colombiano
              </h1>
              <p className="text-body-md text-on-surface-variant mt-5">
                Recorridos curados con guías locales expertos para vivir
                Cartagena de Indias como un verdadero local.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* FILTROS */}
      <Section className="py-8">
        <Container>
          <div className="bg-surface rounded-2xl p-4 lg:p-6 border border-outline-variant">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategoriaActiva("todos")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
                  ${
                    categoriaActiva === "todos"
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-on-surface-variant border border-outline-variant hover:border-primary hover:text-primary"
                  }`}
              >
                Todos{" "}
                <span className="ml-1 opacity-70">({counts.todos})</span>
              </button>

              {categoriasTours.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaActiva(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
                    ${
                      categoriaActiva === cat.id
                        ? "bg-primary text-white shadow-md"
                        : "bg-white text-on-surface-variant border border-outline-variant hover:border-primary hover:text-primary"
                    }`}
                >
                  {cat.label}{" "}
                  <span className="ml-1 opacity-70">({counts[cat.id]})</span>
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* GRID */}
      <Section className="py-8 lg:py-12 pb-20 lg:pb-28">
        <Container>
          {toursFiltrados.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-headline-md font-display font-light text-primary mb-4">
                No hay tours en esta categoría
              </p>
              <button
                onClick={() => setCategoriaActiva("todos")}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90"
              >
                Ver todos los tours →
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm text-on-surface-variant mb-6">
                Mostrando{" "}
                <strong className="text-primary">{toursFiltrados.length}</strong>{" "}
                {toursFiltrados.length === 1 ? "tour" : "tours"}
                {categoriaActiva !== "todos" &&
                  ` en categoría "${categoriaActiva}"`}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {toursFiltrados.map((tour) => (
                  <ScrollReveal key={tour.id}>
                    <TourCard tour={tour} />
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}
        </Container>
      </Section>

      {/* CTA FINAL */}
      <Section className="bg-primary text-white py-16 lg:py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-headline-lg font-display font-light mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-body-md text-white/90 mb-6">
              Diseñamos tours personalizados según tu grupo y preferencias.
              Contáctanos por WhatsApp.
            </p>
            <WhatsAppButton
              variant="default"
              size="lg"
              mensaje="Hola, quiero un tour personalizado para mi grupo"
            >
              HABLAR POR WHATSAPP
            </WhatsAppButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
