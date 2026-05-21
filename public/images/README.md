# Imágenes — Experiencias Tour Cartagena

> Guía maestra para desarrolladores y clientes.
> Lee esto antes de agregar, reemplazar o reorganizar cualquier imagen del proyecto.

---

## Estructura de carpetas

```
public/images/
│
├── flota/                          ← TODA la flota aquí (nueva estructura)
│   ├── botes-y-lanchas/
│   │   ├── firpol-42/              ✅ 5 fotos (principal + 01-04)
│   │   ├── luxury-42/              ✅ 5 fotos
│   │   ├── lancha-28/              ✅ 5 fotos
│   │   ├── motomarlin-40/          ✅ 5 fotos
│   │   ├── todomar-34/             ✅ 5 fotos
│   │   ├── harb/                   ⏳ Pendiente
│   │   ├── charlie/                ⏳ Pendiente
│   │   └── bote-larry/             ⏳ Pendiente
│   ├── yates/
│   │   ├── wellcraft-33/           ⏳ Pendiente ($6.500.000)
│   │   ├── deportivo-44/           ⏳ Pendiente ($8.500.000)
│   │   ├── ambar-2/                ⏳ Pendiente
│   │   └── yate-70/                ⏳ Pendiente ($14.500.000)
│   └── catamaranes/
│       ├── valhalla/               ⏳ Pendiente — Leopard 51 ($14.000.000)
│       ├── hope/                   ⏳ Pendiente — Leopard 47 ($12.500.000)
│       ├── odysea/                 ⏳ Pendiente — Leopard 43 ($11.500.000)
│       ├── cahua/                  ⏳ Pendiente — Leopard 43 ($11.500.000)
│       ├── chicote/                ⏳ Pendiente — Lagoon 440 ($7.500.000)
│       └── xem-3/                  ⏳ Pendiente — Lagoon 400 ($7.000.000)
│
├── tours/                          ← Fotos de tours (agregar por slug cuando lleguen)
├── paquetes/                       ← Fotos de paquetes (agregar por slug cuando lleguen)
├── destinos/                       ← Fotos de destinos (Ciudad Amurallada, etc.)
├── experiencias/                   ← Fotos de experiencias especiales
├── galeria/                        ← Galería general del home
├── hero/                           ← Imagen principal del hero y banners
├── blog/                           ← Imágenes de portada de artículos
├── nosotros/                       ← Fotos del equipo y oficina
├── testimonios/                    ← Avatares de clientes
│
└── ui/                             ← Assets de marca
    └── logo.png                    ✅ Logo oficial
```

---

## Convención de nombres — Flota

Cada embarcación tiene su carpeta propia bajo `flota/[tipo]/[slug]/`.

**Patrón:**
```
[slug]-principal.jpg   ← imagen principal (card + hero detalle)
[slug]-01.jpg          ← galería detalle
[slug]-02.jpg
[slug]-03.jpg
[slug]-04.jpg
```

**Ejemplo para `firpol-42`:**
```
flota/botes-y-lanchas/firpol-42/
├── firpol-42-principal.jpg
├── firpol-42-01.jpg
├── firpol-42-02.jpg
├── firpol-42-03.jpg
└── firpol-42-04.jpg
```

---

## Convención de nombres — Resto del contenido

```
[slug-del-tour]-principal.jpg
[slug-del-tour]-01.jpg
destino-[slug]-01.jpg
blog-[slug]-cover.jpg
nosotros-equipo-01.jpg
```

### Reglas estrictas
- **Solo minúsculas** — sin mayúsculas, nunca
- **Guiones medios** (`-`) como separador — nunca espacios ni guiones bajos
- **Sin acentos ni ñ** — usar equivalente sin acento (ej: `getsemani`, no `getsemaní`)
- **Extensión en minúscula** — `.jpg` o `.webp`, nunca `.JPG`

---

## Formatos y especificaciones

| Uso | Resolución | Formato | Peso máximo |
|-----|-----------|---------|-------------|
| Principal flota (card) | 1200 × 900 px | JPG | 500 KB |
| Galería detalle | 1200 × 800 px | JPG | 800 KB |
| Hero / banner | 1920 × 1080 px | JPG | 1.5 MB |
| Logo / marca | — | SVG o PNG transparente | 100 KB |
| OG image | 1200 × 630 px | JPG | 150 KB |
| Avatar testimonio | 200 × 200 px | JPG/WebP | 50 KB |

> **Nota:** Next.js Image (`next/image`) optimiza automáticamente en build.
> Aun así, subir dentro de los pesos recomendados mejora los tiempos de build.

---

## Dónde actualizar los paths en el código

| Carpeta | Archivo de datos |
|---------|-----------------|
| `flota/botes-y-lanchas/` | `lib/data/botes.ts` |
| `flota/yates/` | `lib/data/yates.ts` |
| `flota/catamaranes/` | `lib/data/catamaranes.ts` |
| `tours/` | `lib/data/tours.ts` |
| `paquetes/` | `lib/data/paquetes.ts` |
| `destinos/` | `lib/data/destinos.ts` |
| `experiencias/` | `lib/data/experiencias.ts` |

---

## Lista de tareas pendientes

### Marca / UI
- [ ] `ui/logo-marca.svg` — logo completo en SVG
- [ ] `ui/favicon.ico` — favicon 32×32
- [ ] `ui/og-default.jpg` — Open Graph genérico 1200×630
- [ ] `ui/apple-touch-icon.png` — ícono iOS 180×180

### Flota — botes nuevos
- [ ] `harb/` — 5 fotos
- [ ] `charlie/` — 5 fotos
- [ ] `bote-larry/` — 5 fotos

### Flota — yates (todos)
- [ ] `wellcraft-33/` — 5 fotos
- [ ] `deportivo-44/` — 5 fotos
- [ ] `ambar-2/` — 5 fotos
- [ ] `yate-70/` — 5 fotos

### Flota — catamaranes (todos)
- [ ] `valhalla/` — 5 fotos
- [ ] `hope/` — 5 fotos
- [ ] `odysea/` — 5 fotos
- [ ] `cahua/` — 5 fotos
- [ ] `chicote/` — 5 fotos
- [ ] `xem-3/` — 5 fotos

### Contenido general
- [ ] Hero principal del home (`hero/`)
- [ ] Fotos de tours (`tours/`)
- [ ] Fotos de paquetes (`paquetes/`)
- [ ] Fotos de destinos (`destinos/`)
- [ ] Galería home (`galeria/`)
- [ ] Equipo y oficina (`nosotros/`)
