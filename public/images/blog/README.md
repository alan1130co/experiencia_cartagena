# Imágenes de portada del blog

Imagen de cover para cada artículo del blog (`/blog/[slug]`).  
También aparece como thumbnail en la lista de artículos.

---

## Propósito

La imagen de portada es lo primero que ve el lector en la lista del blog  
y en la preview al compartir el artículo en redes sociales (Open Graph).

---

## Especificaciones técnicas

- **Dimensiones:** 1200×630px (ratio 1.91:1 — compatible con Open Graph)
- **Formato preferido:** `.webp`
- **Formato fallback:** `.jpg`
- **Peso máximo:** 200 KB
- **Calidad:** Buena — se usa también como imagen OG del artículo

---

## Cantidad esperada

1 imagen por artículo. Número de artículos inicial: **3–6 posts**.

---

## Naming convention

```
blog-[slug-del-articulo]-cover.webp
```

**Ejemplos** (basados en temas probables del blog de turismo):
```
blog-que-hacer-en-cartagena-cover.webp
blog-islas-del-rosario-guia-completa-cover.webp
blog-mejores-restaurantes-cartagena-cover.webp
blog-como-llegar-a-playa-blanca-cover.webp
blog-getsemani-barrio-cultural-cover.webp
```

---

## Estilo visual recomendado

- Foto horizontal del destino o actividad del artículo
- Espacio en el tercio superior o inferior para superponer el título (si el diseño lo requiere)
- Colores vibrantes del Caribe — atractivos en thumbnail pequeño
- Evitar fotos muy oscuras o de bajo contraste

---

## Notas

- Esta imagen también es la `og:image` del artículo — debe verse bien en preview de WhatsApp (600×315px recortada al centro)
- Si no hay foto propia, usar Unsplash con licencia CC0 y documentar la fuente en el array `lib/data/blog.ts`
- Al reemplazar Unsplash por foto real, actualizar el campo `imagen` en `lib/data/blog.ts`
