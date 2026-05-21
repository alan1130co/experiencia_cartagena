/**
 * Tipos compartidos entre Yate, Tour y Paquete.
 * Importar desde aquí para evitar duplicación.
 */

/** Moneda de precio: pesos colombianos o dólares. */
export type Moneda = "COP" | "USD";

/** Característica visual con ícono de lucide-react y etiqueta. */
export interface Caracteristica {
  /** Nombre del ícono en lucide-react (ej: "users", "clock", "anchor"). */
  icono: string;
  /** Texto descriptivo visible (ej: "Hasta 12 personas"). */
  label: string;
}

/** Elemento de itinerario con hora y actividad, para tours. */
export interface ItemItinerario {
  /** Hora de inicio de la actividad (ej: "09:00 AM"). */
  hora: string;
  /** Nombre corto de la actividad. */
  actividad: string;
  /** Descripción opcional con más detalle. */
  descripcion?: string;
}

/**
 * Día de itinerario para paquetes multi-día.
 * Similar a ItinerarioDia de plan.ts pero incluye hospedaje opcional.
 */
export interface DiaItinerario {
  /** Número del día (1, 2, 3...). */
  dia: number;
  /** Título del día (ej: "Llegada y tour de bienvenida"). */
  titulo: string;
  /** Lista de actividades del día. */
  actividades: string[];
  /** Nombre del alojamiento de esa noche, si aplica. */
  hospedaje?: string;
}
