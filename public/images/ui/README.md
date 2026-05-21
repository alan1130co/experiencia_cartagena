# Imágenes de marca — UI

Archivos de identidad visual: logos, favicon, íconos y Open Graph.  
Estos archivos se referencian en `app/layout.tsx`, `lib/constants.ts` y las meta tags de SEO.

---

## Archivos esperados

### `logo.png` — Logo completo a color
- **Dimensiones:** 400×120px mínimo (ratio aproximado 3.3:1)
- **Formato:** `.png` con fondo transparente
- **Peso máximo:** 50 KB
- **Uso:** Header del sitio, Footer
- **Naming:** `logo.png` (exactamente este nombre — referenciado en `SITE_CONFIG.logo`)

### `logo-mark.png` — Isotipo / ícono solo
- **Dimensiones:** 512×512px
- **Formato:** `.png` con fondo transparente
- **Peso máximo:** 30 KB
- **Uso:** Favicon grande, app icon, avatar en redes sociales
- **Naming:** `logo-mark.png`

### `favicon.ico` — Favicon del navegador
- **Dimensiones:** Archivo multi-tamaño (16×16, 32×32, 48×48)
- **Formato:** `.ico`
- **Peso máximo:** 15 KB
- **Uso:** Tab del navegador, bookmarks
- **Naming:** `favicon.ico`
- **Nota:** También crear `favicon-32x32.png` y `favicon-16x16.png` para compatibilidad

### `og-default.jpg` — Imagen Open Graph genérica
- **Dimensiones:** 1200×630px (ratio 1.91:1 — requerido por Facebook/WhatsApp)
- **Formato:** `.jpg`
- **Peso máximo:** 150 KB
- **Uso:** Previsualización al compartir el sitio en redes sociales y WhatsApp
- **Naming:** `og-default.jpg` (referenciado en `SITE_CONFIG.ogImage`)
- **Contenido sugerido:** Logo centrado + nombre de la agencia + foto de Cartagena de fondo
- **Texto en imagen:** Mínimo, legible en tamaño pequeño

### `apple-touch-icon.png` — Ícono para iOS
- **Dimensiones:** 180×180px
- **Formato:** `.png` con fondo sólido (no transparente — iOS lo rellena de negro)
- **Peso máximo:** 20 KB
- **Uso:** "Agregar a pantalla de inicio" en iPhone/iPad
- **Naming:** `apple-touch-icon.png`

---

## Dónde se usan en el código

```
app/layout.tsx
  └── <link rel="icon" href="/images/ui/favicon.ico" />
  └── <link rel="apple-touch-icon" href="/images/ui/apple-touch-icon.png" />

components/layout/Header.tsx
  └── <Image src="/images/ui/logo.png" alt="Experiencias Tour Cartagena" />

lib/constants.ts
  └── SITE_CONFIG.logo = "/images/ui/logo.png"
  └── SITE_CONFIG.ogImage = "/images/ui/og-default.jpg"
```

---

## Notas

- El logo debe funcionar sobre fondo blanco (`#ffffff`) y fondo azul oscuro (`#005371`)
- Si el logo solo existe sobre fondo claro, pedir también versión blanca para el footer oscuro
- No comprimir el favicon — el tamaño pequeño justifica calidad máxima
