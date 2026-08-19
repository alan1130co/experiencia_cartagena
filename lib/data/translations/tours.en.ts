import type { TourTranslation } from "./types";

/** Traducciones al inglés de lib/data/tours.ts, indexadas por `slug`. */
export const toursEn: Record<string, TourTranslation> = {
  "isla-del-encanto": {
    descripcionBreve:
      "Enjoy a paradise day with buffet lunch and exclusive facilities in the Rosario Islands.",
    precioDesde: "$460.000 COP",
    horarios:
      "Hotel pickup: 7:00 am | Dock departure: 8:00 am | Return to island: 3:00 pm",
    ubicacionSalida:
      "Pickup in Laguito, Bocagrande, Castillogrande and Zona Norte (main avenue)",
    incluye: [
      "Round-trip boat transport",
      "Buffet-style lunch served",
      "Use of the facilities",
      "Free activity: kayak (subject to availability)",
      "Pickup starting at 7:00 am in authorized areas",
    ],
    noIncluye: [
      "Port tax: $29.000 per person (subject to change)",
      "Aquarium: $40.000 adult / $30.000 child (subject to change)",
      "Snorkeling: $70.000 per person",
      "Diving: $210.000 per person",
      "Does not include afternoon return from dock to hotel",
    ],
  },
  "sabai-maritimo": {
    descripcionBreve:
      "Exclusive day pass with à la carte lunch, beach bed, live DJ, and water activities.",
    precioDesde: "$480.000 COP",
    horarios: "Meeting time: 7:20 am | Return: 3:00 pm",
    ubicacionSalida: "TODOMAR private marina, Bocagrande",
    incluye: [
      "Departure tax included",
      "Round-trip shared boat transport",
      "Bottled water on board and welcome fruit skewer",
      "Panoramic tour past Fuerte de Bocachica, the Barú peninsula, Cholón and the Rosario Islands (30-min swim stop)",
      "Beach bed and towel service",
      "À la carte lunch (14 options) with a non-alcoholic drink",
      "Kayak, paddleboard, volleyball and beach rackets",
      "Unlimited coffee, Wi-Fi, pool and fresh-water showers",
      "Live DJ (Saturdays and Sundays)",
    ],
    noIncluye: [
      "Lunch options outside the day-pass menu",
      "Jet ski or banana boat (offered by third parties, at your own risk)",
      "Cash payments inside the club (card payment only, via card reader)",
      "Unspecified services",
    ],
  },
  "mangata-beach-club": {
    descripcionBreve:
      "A luxury experience with all-day 2-for-1 cocktails, snorkeling at the sunken plane, and à la carte lunch.",
    precioDesde: "$399.000 COP",
    horarios: "Arrival at marina: 7:30 am | Approx. return: 3:00 pm",
    ubicacionSalida: "TODOMAR private marina, Bocagrande",
    incluye: [
      "Round-trip transport on sport boats",
      "Welcome glass of champagne or fresh juice",
      "Bed, lounge, or sunbed seating",
      "Panoramic island tour and snorkeling at the Sunken Plane",
      "All-day 2-for-1 on selected cocktails and beer bucket deal (pay for 5, 6th free)",
      "À la carte lunch (8 options) with a non-alcoholic drink",
      "Use of kayaks, paddleboards, bicycles, and access to all facilities",
      "Fresh-water shower, towel service, and daily DJ",
    ],
    noIncluye: [
      "National Parks fee: $13.500 COP per person (strictly cash payment)",
      "Additional activities not mentioned",
    ],
  },
  "tour-bahia-bequia": {
    titulo: "Bequia Bay Tour in Cartagena",
    descripcionBreve:
      "A magical 2-hour cruise around Cartagena Bay aboard the Bequia Eagle boat with open bar.",
    precioDesde: "Check rate",
    horarios:
      "Check-in: 04:40 pm | Cruise: 05:30 pm to 07:30 pm (Monday to Sunday)",
    ubicacionSalida: "La Bodeguita Dock, gate #4",
    incluye: [
      "2-hour cruise around Cartagena Bay",
      "Welcome cocktail",
      "Open bar with national spirits (beer not included)",
      "Water and soda served by the glass",
      "Dance show, dance classes, dancers, host, and live DJ",
      "Safety protocols",
    ],
    noIncluye: [
      "Dock fee: $18.000 COP per person (cash only, subject to change)",
      "Expenses not specified in the package",
    ],
  },
  "noche-blanca-bequia": {
    titulo: "Bequia White Night",
    descripcionBreve:
      "An unforgettable 3-hour evening sailing the bay with a plated dinner and open bar.",
    precioDesde: "Check rate",
    horarios: "Check-in: 07:15 pm | Departure: 08:00 pm - 11:00 pm",
    ubicacionSalida: "La Bodeguita Dock, gate #4",
    incluye: [
      "Welcome cocktail",
      "3-hour cruise around Cartagena Bay",
      "Plated dinner (2 proteins, 4 sides, a dessert, and a drink)",
      "Open bar with national spirits, sodas, and water",
      "Dance show, dancers, host, and live DJ",
    ],
    noIncluye: [
      "Dock fee: $18.000 per person (cash only)",
      "Beer (additional cost)",
      "Expenses not specified in the package",
    ],
  },
};
