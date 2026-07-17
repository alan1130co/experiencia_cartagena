import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { DestinosTrending } from "@/components/sections/DestinosTrending";
import { BotesDestacados } from "@/components/sections/BotesDestacados";
import { YatesDestacados } from "@/components/sections/YatesDestacados";
import { CatamaranesDestacados } from "@/components/sections/CatamaranesDestacados";
import { Experiencias } from "@/components/sections/Experiencias";
import { ToursPopulares } from "@/components/sections/ToursPopulares";
import { PaquetesDestacados } from "@/components/sections/PaquetesDestacados";
import { Testimonios } from "@/components/sections/Testimonios";
import { GuiaGratis } from "@/components/sections/GuiaGratis";
import { Galeria } from "@/components/sections/Galeria";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Inicio",
};

export default function Home() {
  return (
    <>
      <Hero />
      <DestinosTrending />
      <BotesDestacados />
      <YatesDestacados />
      <CatamaranesDestacados />
      <Experiencias />
      <ToursPopulares />
      <PaquetesDestacados />
      <Testimonios />
      <GuiaGratis />
      <Galeria />
      <FAQ />
    </>
  );
}
