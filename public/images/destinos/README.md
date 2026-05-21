# Imágenes de destinos

Fotos de los 4 destinos destacados que aparecen en la sección  
"Destinos en Tendencia" de la home y en `/destinos/[slug]`.

---

## Propósito

Cada destino tiene una imagen thumbnail en la lista de la home (72×72px renderizado,  
pero debe ser alta resolución) y una imagen hero en su página de detalle.

---

## Especificaciones técnicas

### Thumbnail (lista de la home)
- **Dimensiones originales:** 600×400px mínimo (ratio 3:2)
- **Formato:** `.webp`
- **Peso máximo:** 100 KB
- La imagen se recorta automáticamente con `object-cover` — composición centrada

### Hero (página de detalle `/destinos/[slug]`)
- **Dimensiones:** 1400×700px (ratio 2:1 — panorámico)
- **Formato:** `.webp`
- **Peso máximo:** 250 KB

---

## Cantidad esperada

2 fotos por destino (thumbnail + hero) → **8 imágenes mínimo**.  
Opcionalmente 2–4 fotos de galería adicional por destino.

---

## Naming convention

```
destino-[slug]-thumb.webp       ← para la lista de la home
destino-[slug]-hero.webp        ← para la página de detalle
destino-[slug]-galeria-01.webp  ← opcionales
```

**Destinos actuales:**
```
destino-ciudad-amurallada-thumb.webp
destino-ciudad-amurallada-hero.webp
destino-islas-del-rosario-thumb.webp
destino-islas-del-rosario-hero.webp
destino-getsemani-thumb.webp
destino-getsemani-hero.webp
destino-playa-blanca-thumb.webp
destino-playa-blanca-hero.webp
```

---

## Composición ideal por destino

| Destino | Foto thumbnail sugerida | Foto hero sugerida |
|---------|------------------------|--------------------|
| Ciudad Amurallada | Balcón florido, detalle arquitectónico | Panorámica de la muralla al atardecer |
| Islas del Rosario | Agua turquesa desde arriba | Vista aérea de las islas |
| Getsemaní | Mural colorido de primer plano | Calle bohemia con vida nocturna |
| Playa Blanca | Arena blanca y mar cristalino | Panorámica de la playa completa |

---

## Notas

- El thumbnail debe ser **legible** en tamaño pequeño (72px de alto) — evitar detalles muy finos
- La imagen hero debe ser **horizontal/panorámica** — sin zonas importantes en los bordes
- Para Islas del Rosario: fotos aéreas de dron funcionan perfectamente
