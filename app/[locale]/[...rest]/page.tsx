import { notFound } from "next/navigation";

// Catch-all: cualquier ruta dentro de /[locale]/ que no coincida con ningún
// page.tsx existente cae aquí. Sin este archivo, Next.js nunca llega a entrar
// en el árbol [locale] para una URL desconocida y usa la 404 genérica en vez
// de app/[locale]/not-found.tsx.
export default function CatchAll() {
  notFound();
}
