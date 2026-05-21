# Imagen del Hero — Home

Foto principal que aparece en el lado derecho del Hero de la página de inicio,  
dentro de la tarjeta con forma de arco (`rounded-t-[200px]`).

---

## Propósito

Es la imagen más visible del sitio — la primera impresión del visitante.  
Debe transmitir: **Caribe colombiano, historia colonial, autenticidad**.

---

## Especificaciones técnicas

- **Dimensiones:** 1200×1500px mínimo (ratio 4:5 — vertical)
- **Formato preferido:** `.webp`
- **Formato fallback:** `.jpg`
- **Peso máximo:** 300 KB
- **Calidad:** Alta resolución, buena iluminación natural

---

## Cantidad esperada

1 imagen principal + 1–2 alternativas opcionales para pruebas A/B.

---

## Naming convention

```
hero-principal.webp
hero-alternativa-01.webp
hero-alternativa-02.webp
```

---

## Contenido ideal de la foto

**Solicitado por el cliente:** calle colonial de Cartagena con carro clásico  
- Perspectiva: nivel de calle, ligeramente contrapicada
- Hora dorada preferida (amanecer o atardecer)
- Balcones floridos visibles
- Arquitectura colonial en buen estado
- El carro clásico puede ser americano de los 50s-60s, colores vibrantes

**Alternativas aceptables:**
- Muralla colonial al atardecer (vista aérea o desde el mar)
- Calle peatonal de la Ciudad Amurallada con turistas caminando
- Vista de los edificios coloniales con flores de buganvilia

---

## Notas

- Orientación **vertical** (portrait) — la tarjeta tiene ratio 4:5
- El sujeto principal debe estar centrado — `object-position: center`
- Evitar fotos con texto, marcas de agua o logos
- Evitar fotos oscuras — el hero se ve sobre fondo claro (`bg-surface`)
- Peso: optimizar con Squoosh a calidad 85 antes de subir

---

## Dónde se usa en el código

```
components/sections/Hero/Hero.tsx
  └── const HERO_IMAGE = "/images/hero/hero-principal.webp"
```
