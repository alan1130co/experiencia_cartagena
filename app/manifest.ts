import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cartagena Índigo",
    short_name: "C. Índigo",
    description:
      "Agencia de viajes premium en Cartagena de Indias, Colombia.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#005371",
    icons: [
      {
        src: "/icon-192.png", // TODO: crear icono real
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png", // TODO: crear icono real
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
