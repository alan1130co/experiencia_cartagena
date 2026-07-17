// Fallback de último recurso: solo se usa si una URL ni siquiera llega a
// resolver el segmento [locale] (fuera del alcance del proxy de next-intl).
// La 404 real que ven los usuarios es app/[locale]/not-found.tsx.
export default function RootNotFound() {
  return (
    <html lang="es">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
        }}
      >
        <div>
          <h1>404</h1>
          <p>Página no encontrada.</p>
          <a href="/">Volver al inicio / Back to home</a>
        </div>
      </body>
    </html>
  );
}
