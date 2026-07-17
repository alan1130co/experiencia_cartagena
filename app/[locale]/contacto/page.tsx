"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CONTACTO, REDES_SOCIALES } from "@/lib/constants";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const datos = Object.fromEntries(formData);

  console.log("Mensaje enviado:", datos);
  alert(
    `¡Gracias ${datos.nombre}! Hemos recibido tu mensaje. ` +
      `Te contactaremos pronto en ${datos.email}. ` +
      `Para respuestas inmediatas, escríbenos por WhatsApp.`
  );

  (e.currentTarget as HTMLFormElement).reset();
}

export default function ContactoPage() {
  return (
    <>
      {/* HERO */}
      <Section className="bg-surface pt-36 lg:pt-44 pb-12 lg:pb-16">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-label-caps text-primary uppercase tracking-wider">
                Contacto
              </p>
              <h1 className="text-headline-xl font-display font-light text-primary mt-3">
                Estamos aquí para ayudarte
              </h1>
              <p className="text-body-md text-on-surface-variant mt-5">
                Respondemos en menos de 1 hora por WhatsApp.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* 2 COLUMNAS: Info + Formulario */}
      <Section className="py-12 lg:py-16 pb-20 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* IZQUIERDA: Info de contacto */}
            <div className="space-y-5">

              {/* WhatsApp */}
              <div className="bg-brand-green/5 rounded-2xl p-6 border border-brand-green/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.541 5.876L0 24l6.269-1.517A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.012-1.374l-.36-.215-3.724.901.936-3.617-.235-.372A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">WhatsApp</h3>
                    <p className="text-sm text-on-surface-variant mb-3">
                      Respuesta inmediata — la forma más rápida
                    </p>
                    <WhatsAppButton
                      variant="default"
                      size="md"
                      mensaje="Hola, quiero más información sobre tours y experiencias en Cartagena"
                    >
                      ABRIR WHATSAPP
                    </WhatsAppButton>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-surface rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-sm text-on-surface-variant mb-2">
                      Para consultas y propuestas comerciales
                    </p>
                    {CONTACTO.email !== "PENDIENTE" ? (
                      <a
                        href={`mailto:${CONTACTO.email}`}
                        className="text-primary font-semibold hover:underline"
                      >
                        {CONTACTO.email}
                      </a>
                    ) : (
                      <span className="text-on-surface-variant text-sm italic">
                        Email pendiente de configurar
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Teléfono */}
              {CONTACTO.telefono !== "PENDIENTE" && (
                <div className="bg-surface rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Teléfono</h3>
                      <a
                        href={`tel:${CONTACTO.telefono}`}
                        className="text-primary font-semibold hover:underline"
                      >
                        {CONTACTO.telefono}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Dirección */}
              <div className="bg-surface rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Oficina</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {CONTACTO.direccion}
                      <br />
                      {CONTACTO.ciudad}, {CONTACTO.departamento}
                      <br />
                      {CONTACTO.pais}
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="bg-surface rounded-2xl p-6">
                <h3 className="font-semibold text-primary mb-4">Síguenos</h3>
                <div className="flex gap-3">
                  {REDES_SOCIALES.instagram !== "PENDIENTE" && (
                    <a
                      href={`https://instagram.com/${REDES_SOCIALES.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary text-on-surface-variant transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                  )}
                  {REDES_SOCIALES.tiktok !== "PENDIENTE" && (
                    <a
                      href={`https://tiktok.com/@${REDES_SOCIALES.tiktok}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary text-on-surface-variant transition-colors"
                      aria-label="TikTok"
                    >
                      <TikTokIcon className="w-5 h-5" />
                    </a>
                  )}
                  {REDES_SOCIALES.instagram === "PENDIENTE" &&
                    REDES_SOCIALES.tiktok === "PENDIENTE" && (
                      <p className="text-sm text-on-surface-variant italic">
                        Redes pendientes de configurar
                      </p>
                    )}
                </div>
              </div>
            </div>

            {/* DERECHA: Formulario */}
            <div className="bg-white rounded-2xl shadow-card p-8">
              <h3 className="text-headline-md font-display text-primary font-light mb-2">
                Envíanos un mensaje
              </h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Te responderemos en menos de 24 horas. Para respuestas
                inmediatas, usa WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-semibold text-primary mb-1.5"
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-4 py-3 border border-outline-variant rounded-xl focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-primary mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-outline-variant rounded-xl focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-semibold text-primary mb-1.5"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      className="w-full px-4 py-3 border border-outline-variant rounded-xl focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="asunto"
                    className="block text-sm font-semibold text-primary mb-1.5"
                  >
                    Asunto
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    className="w-full px-4 py-3 border border-outline-variant rounded-xl focus:outline-none focus:border-primary bg-white transition-colors"
                  >
                    <option value="reserva">Quiero reservar una experiencia</option>
                    <option value="info">Solicito información</option>
                    <option value="grupo">Grupo grande / Evento</option>
                    <option value="cotizacion">Solicito cotización</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-semibold text-primary mb-1.5"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    required
                    placeholder="Cuéntanos qué tipo de experiencia buscas..."
                    className="w-full px-4 py-3 border border-outline-variant rounded-xl focus:outline-none focus:border-primary resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 rounded-full transition-colors"
                >
                  ENVIAR MENSAJE
                </button>

                <p className="text-xs text-on-surface-variant text-center">
                  Al enviar, aceptas nuestra política de privacidad.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      {/* MAPA */}
      <Section className="py-16">
        <Container>
          <h2 className="text-center text-headline-lg font-display text-primary font-light mb-8">
            Encuéntranos
          </h2>
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-surface">
            {/* TODO: Reemplazar src con embed real de Google Maps de la dirección exacta */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62875.99097836085!2d-75.55!3d10.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625e93a107841%3A0x276fd71e9bdd4d49!2sCartagena%2C%20Bolivar!5e0!3m2!1ses!2sco!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Experiencias Tour Cartagena"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
