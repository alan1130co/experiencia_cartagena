"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

const BENEFICIOS = [
  "50 lugares imperdibles en Cartagena",
  "Restaurantes recomendados por categoría",
  "Itinerarios sugeridos por días",
  "Tips de transporte y seguridad",
];

export function GuiaGratis() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nombre = formData.get("nombre");
    const email = formData.get("email");

    console.log("Suscripción:", { nombre, email });
    alert(
      `¡Gracias ${nombre}! La guía será enviada a ${email} próximamente. ` +
        `Mientras tanto, contáctanos por WhatsApp para más info.`
    );

    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <section className="relative bg-primary text-white py-20 lg:py-28 overflow-hidden">
      {/* Imagen de fondo con overlay sutil */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1800&q=60"
          alt=""
          fill
          className="object-cover"
          aria-hidden={true}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* COLUMNA IZQUIERDA: Texto */}
          <div>
            <p className="text-label-caps text-brand-orange tracking-wider mb-3">
              GUÍA GRATIS
            </p>
            <h2 className="text-headline-lg lg:text-headline-xl font-display font-light mb-5">
              Tu guía completa de Cartagena
            </h2>
            <p className="text-body-md text-white/90 mb-8 max-w-lg">
              Descarga gratis nuestra guía con los 50 mejores lugares,
              restaurantes y experiencias secretas que solo los locales conocen.
            </p>

            <ul className="space-y-3">
              {BENEFICIOS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <Check
                    className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5"
                    aria-hidden={true}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA DERECHA: Formulario */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 text-on-surface">
            <h3 className="text-headline-md text-primary font-display font-light mb-2">
              Descarga gratis
            </h3>
            <p className="text-sm text-on-surface-variant mb-6">
              Te enviaremos la guía a tu correo electrónico.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-primary mb-1.5"
                >
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 border border-outline-variant rounded-xl focus:outline-none focus:border-primary transition-colors"
                  placeholder="María García"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-primary mb-1.5"
                >
                  Tu correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-outline-variant rounded-xl focus:outline-none focus:border-primary transition-colors"
                  placeholder="maria@ejemplo.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-green hover:bg-green-600 text-white font-semibold py-3.5 rounded-full transition-colors"
              >
                DESCARGAR GUÍA GRATIS
              </button>

              <p className="text-xs text-on-surface-variant text-center">
                Al suscribirte aceptas nuestra política de privacidad. No spam,
                prometido.
              </p>
            </form>
          </div>

        </div>
      </Container>
    </section>
  );
}
