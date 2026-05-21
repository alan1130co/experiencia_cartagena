# Fotos de clientes — Testimonios

Fotos de perfil de clientes que aparecen junto a sus testimonios  
en la sección "Testimonios" de la home.

---

## Propósito

Humanizar los testimonios escritos y aumentar su credibilidad.  
Una foto real de un cliente satisfecho vale más que cualquier texto.

---

## Especificaciones técnicas

- **Dimensiones:** 200×200px (cuadrado — se muestra circular con `rounded-full`)
- **Formato preferido:** `.webp`
- **Formato fallback:** `.jpg`
- **Peso máximo:** 40 KB (son thumbnails pequeños)
- **Calidad:** Media-alta — suficiente para 80px de diámetro renderizado

---

## Cantidad esperada

1 foto por testimonio. Testimonios iniciales: **4–6 clientes**.

---

## Naming convention

```
testimonio-[nombre-apellido].webp
```

**Ejemplos:**
```
testimonio-ana-rodriguez.webp
testimonio-carlos-martinez.webp
testimonio-maria-gonzalez.webp
testimonio-john-smith.webp
testimonio-laura-perez.webp
```

---

## Cómo obtener estas fotos

**Opción 1 — Foto real del cliente (ideal):**
- Solicitar permiso explícito y por escrito para usar su foto
- El cliente puede enviar una selfie o foto de perfil de calidad razonable
- Redimensionar y comprimir antes de subir

**Opción 2 — Avatar generado (alternativa ética):**
- Usar un avatar de ilustración o ícono genérico
- Nunca usar fotos de personas reales sin permiso (riesgo legal)
- Servicios como [UI Faces](https://uifaces.co/) o ilustraciones propias

**Opción 3 — Sin foto (fallback):**
- El componente debe mostrar iniciales del nombre si no hay foto
- En `lib/data/testimonios.ts`, dejar el campo `avatar` como `null`

---

## Notas

- **Obligatorio:** permiso escrito de cada cliente para usar su imagen y nombre
- No usar fotos tomadas de redes sociales sin permiso — riesgo legal
- Las fotos son pequeñas — no vale la pena invertir en sesión fotográfica específica
- Si el cliente no tiene foto disponible, las iniciales funcionan perfectamente
- Formato en `lib/data/testimonios.ts` — actualizar el campo `avatar` al agregar fotos
