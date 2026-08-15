import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { DestinosTrending } from "@/components/sections/DestinosTrending";
import { BotesDestacados } from "@/components/sections/BotesDestacados";
import { YatesDestacados } from "@/components/sections/YatesDestacados";
import { CatamaranesDestacados } from "@/components/sections/CatamaranesDestacados";
import { ToursPopulares } from "@/components/sections/ToursPopulares";
import { Testimonios } from "@/components/sections/Testimonios";
import { Galeria } from "@/components/sections/Galeria";
import { FAQ } from "@/components/sections/FAQ";
import { getTravelAgencySchema, getFAQSchema } from "@/lib/schema";
import { faqs } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Tour en Cartagena de Indias",
};

export default function Home() {
  return (
    <>
      {/* JSON-LD: una sola vez para todo el sitio, en la home */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getTravelAgencySchema() }}
      />
      {/* JSON-LD: coincide con las preguntas visibles en <FAQ /> más abajo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getFAQSchema(faqs) }}
      />
      <Hero />
      <DestinosTrending />
      <BotesDestacados />
      <YatesDestacados />
      <CatamaranesDestacados />
      <ToursPopulares />
      <Testimonios />
      <Galeria />
      <FAQ />
    </>
  );
}
