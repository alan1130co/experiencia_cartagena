# Galería principal — Home

Fotos que aparecen en la sección "Galería" de la página de inicio  
y en la página `/galeria`. Son la vitrina visual general del negocio.

---

## Propósito

Mostrar la diversidad de experiencias de la agencia en un mosaico visual atractivo.  
El visitante que llega aquí está explorando — estas fotos deben seducirlo.

---

## Especificaciones técnicas

La galería usa un layout tipo masonry/grid con dos tamaños de imagen:

### Imagen grande (ocupa 2 columnas o fila completa)
- **Dimensiones:** 1200×800px (ratio 3:2)
- **Peso máximo:** 250 KB

### Imagen pequeña (ocupa 1 columna)
- **Dimensiones:** 600×800px (ratio 3:4 — vertical)
- **Peso máximo:** 150 KB

- **Formato preferido:** `.webp`
- **Formato fallback:** `.jpg`

---

## Cantidad esperada

**8–12 imágenes** para la sección home (5–7 grandes + 3–5 pequeñas).  
La página `/galeria` puede tener más: hasta 24 imágenes.

---

## Naming convention

```
galeria-[categoria]-[numero].webp
```

**Categorías sugeridas:** `yate`, `playa`, `ciudad`, `gastronomia`, `atardecer`, `familia`, `pareja`

**Ejemplos:**
```
galeria-yate-01.webp        ← imagen grande
galeria-playa-01.webp       ← imagen pequeña
galeria-ciudad-01.webp      ← imagen grande
galeria-atardecer-01.webp   ← imagen pequeña
galeria-gastronomia-01.webp ← imagen pequeña
galeria-familia-01.webp     ← imagen grande
```

---

## Mix de contenido recomendado

Para 10 fotos de galería:
- 3 × yates / mar / islas
- 2 × ciudad colonial / arquitectura
- 2 × playas / naturaleza
- 1 × gastronomía / experiencias
- 1 × atardecer / momento especial
- 1 × personas / actividades

---

## Notas

- Seleccionar las mejores fotos del portafolio completo — no todo llega aquí
- Evitar fotos similares entre sí — variedad de colores, planos y temas
- El orden importa: la primera y la última foto son las más vistas
- Formato en `lib/data/galeria.ts` — actualizar el array al agregar imágenes
