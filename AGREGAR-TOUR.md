# Cómo agregar un tour nuevo

No hace falta tocar código de React ni de diseño. Solo dos cosas:

1. Subir las fotos a una carpeta.
2. Llenar los datos del tour en un archivo.

Seguí estos pasos en orden.

---

## Paso 1 — Elegí el slug del tour

El "slug" es el identificador del tour en la URL, por ejemplo `volcan-del-totumo`
da la página `/tours/volcan-del-totumo`.

Reglas:
- Todo en minúsculas.
- Palabras separadas por guiones (`-`), sin espacios ni tildes.
- Único, no puede repetirse con otro tour.

Ejemplo: para "Volcán del Totumo + Playa Privada" el slug es `volcan-del-totumo`.

## Paso 2 — Prepará las fotos

Necesitás:
- **1 foto principal** (la que se ve en las tarjetas de tours).
- **4 a 6 fotos de galería** (se ven en la página de detalle del tour).

Todas en formato **horizontal, relación 4:3** (por ejemplo 1600×1200px), en `.webp`.

### Opción A — Tenés `.webp` ya listas y del tamaño correcto

Copialas directamente a `public/images/tours/` con estos nombres exactos
(reemplazá `{slug}` por el slug de tu tour):

```
public/images/tours/{slug}-main.webp
public/images/tours/{slug}-1.webp
public/images/tours/{slug}-2.webp
public/images/tours/{slug}-3.webp
public/images/tours/{slug}-4.webp
```

### Opción B — Tenés fotos crudas (celular, cámara, jpg/png)

Poné todas las fotos crudas del tour en una carpeta cualquiera, por ejemplo
`raw-fotos/`, y nombralas para que el orden alfabético sea el orden que
querés que aparezcan (la primera foto en orden alfabético se vuelve la
principal):

```
raw-fotos/
  0-main.jpg
  1-playa.jpg
  2-piscina.jpg
  3-almuerzo.jpg
```

Después corré, desde la raíz del proyecto:

```
npm run optimize-tour-images -- --slug volcan-del-totumo --input ./raw-fotos
```

Esto recorta cada foto a 4:3, la redimensiona y la guarda ya convertida y con
el nombre correcto directo en `public/images/tours/`. No hace falta que
borres la carpeta `raw-fotos/` después (no forma parte del proyecto ni se
publica).

## Paso 3 — Completá los datos del tour

Abrí `lib/data/tours.ts` y agregá un objeto nuevo **al final del array**
`toursData` (antes del `];` que lo cierra), separado del anterior por una
coma. Usá la plantilla de abajo.

Después, si el sitio también debe verse en inglés, abrí
`lib/data/translations/tours.en.ts` y agregá la traducción con el mismo
`slug` como clave (ver ejemplos existentes en ese archivo — el `titulo` en
inglés es opcional si el nombre no se traduce, el resto de los campos de
texto sí son obligatorios).

## Paso 4 — Confirmá que se ve bien

Corré el sitio local:

```
npm run dev
```

Y revisá:
- `http://localhost:3000/tours` → tu tour nuevo debe aparecer en la grilla.
- `http://localhost:3000/tours/{slug}` → la página de detalle, con la
  galería de fotos y las listas de "incluye" / "no incluido".
- `http://localhost:3000/` (home) → si marcaste `destacado: true`, tu tour
  aparece en el carrusel de destacados (máximo 3 tours destacados a la vez;
  si marcás más de 3, solo se muestran los primeros 3 del array).

---

## Plantilla para copiar y pegar

Pegá esto dentro de `toursData` en `lib/data/tours.ts` y completá cada campo:

```ts
{
  id: "7", // siguiente número disponible, como texto
  slug: "nombre-del-tour",
  titulo: "Nombre visible del tour",
  imagenPrincipal: "/images/tours/nombre-del-tour-main.webp",
  galeria: [
    "/images/tours/nombre-del-tour-1.webp",
    "/images/tours/nombre-del-tour-2.webp",
    "/images/tours/nombre-del-tour-3.webp",
    "/images/tours/nombre-del-tour-4.webp"
  ],
  descripcionBreve: "Descripción corta, 1-2 líneas, se muestra en la tarjeta.",
  precioDesde: "Consultar tarifa", // o algo como "$460.000 COP"
  horarios: "Recogida hotel: 7:00 am | Salida: 8:30 am | Regreso: 4:00 pm",
  ubicacionSalida: "Dónde se recoge o dónde es el punto de encuentro",
  incluye: [
    "Ítem que incluye 1",
    "Ítem que incluye 2"
  ],
  noIncluye: [
    "Ítem que no incluye 1"
    // o dejalo como array vacío: [] si no hay nada que aclarar
  ],
  destacado: true // opcional: true para que aparezca en el home, si lo omitís no aparece
}
```

### Campos, uno por uno

| Campo | Qué va acá |
|---|---|
| `id` | Un número único como texto, el siguiente disponible. |
| `slug` | El identificador de la URL (Paso 1). |
| `titulo` | Nombre del tour, como se muestra en tarjetas y en el título de la página. |
| `imagenPrincipal` | Ruta a la foto principal (ver Paso 2). |
| `galeria` | Lista de rutas a las fotos de galería (4 a 6 recomendado). |
| `descripcionBreve` | 1-2 líneas, aparece en la tarjeta del tour. |
| `precioDesde` | Texto libre: `"$460.000 COP"` o `"Consultar tarifa"`. |
| `horarios` | Texto libre, normalmente con `\|` separando hitos del día. |
| `ubicacionSalida` | Punto de encuentro o zona de recogida. |
| `incluye` | Lista de cosas que incluye el tour. |
| `noIncluye` | Lista de cosas que NO incluye (podés dejarla vacía: `[]`). |
| `destacado` | `true` si querés que aparezca en el carrusel del home. Opcional. |

---

## Preguntas frecuentes

**¿Puedo tener más de 3 tours con `destacado: true`?**
Sí, pero el home solo muestra los primeros 3 (en el orden en que aparecen
en `toursData`).

**¿Qué pasa si me olvido de la traducción en inglés?**
El sitio en `/en` va a mostrar ese tour en español como respaldo, no se
rompe, pero queda inconsistente con el resto del sitio en inglés.

**¿Y si me equivoco de nombre de archivo de imagen?**
La imagen simplemente no va a cargar (espacio roto) en esa foto puntual,
el resto del tour funciona igual. Revisá que el nombre en `tours.ts`
coincida exactamente (mayúsculas/minúsculas incluidas) con el archivo en
`public/images/tours/`.
