import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";
import { toursData } from "@/lib/data/tours";

export const dynamic = "force-static";

export async function GET() {
  const base = SITE_CONFIG.url;

  const tourLines = toursData
    .map((tour) => `- [${tour.titulo}](${base}/es/tours/${tour.slug}): ${tour.descripcionBreve}`)
    .join("\n");

  const whatsappUrl = getWhatsAppUrl();

  const content = `# ${SITE_CONFIG.name}

> ${SITE_CONFIG.tagline}. Tours, paseos en lancha y experiencias en Cartagena de Indias y sus islas.

## Tours

${tourLines}

## Contacto

- [Reservar por WhatsApp](${whatsappUrl})
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
