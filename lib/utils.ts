export function cn(...classes: (string | undefined | null | false | 0)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(amount: number, currency: "COP" | "USD" = "COP"): string {
  const formatted = new Intl.NumberFormat(currency === "COP" ? "es-CO" : "en-US").format(amount);
  return `$${formatted}`;
}

export function tipoYate(tipo: string): string {
  const tipos: Record<string, string> = {
    "yate-lujo": "Yate de Lujo",
    catamaran: "Catamarán",
    lancha: "Lancha",
    velero: "Velero",
  };
  return tipos[tipo] ?? tipo;
}

export function porcentajeDescuento(original: number, actual: number): number {
  return Math.round(((original - actual) / original) * 100);
}
