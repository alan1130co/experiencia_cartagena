import type { DestinoTranslation } from "./types";

/** Traducciones al inglés de lib/data/destinos.ts, indexadas por `slug`. */
export const destinosEn: Record<string, DestinoTranslation> = {
  "ciudad-amurallada": {
    nombre: "Walled City",
    descripcionCorta: "Cartagena's historic heart, a UNESCO World Heritage Site.",
    descripcion:
      "Walk among four centuries of colonial walls, colorful plazas, and cobblestone streets. The Walled City is the soul of Cartagena de Indias, declared a UNESCO World Heritage Site in 1984.",
    imagenAlt: "Colonial balconies in the Walled City of Cartagena",
    tags: ["History", "Culture", "UNESCO", "Architecture"],
  },
  "islas-del-rosario": {
    nombre: "Rosario Islands",
    descripcionCorta: "Crystal-clear waters and coral reefs 45 minutes from Cartagena.",
    descripcion:
      "The Corales del Rosario y de San Bernardo National Natural Park is home to 27 islands surrounded by turquoise waters. Diving, snorkeling, and absolute relaxation in the Colombian Caribbean.",
    imagenAlt: "Turquoise waters of the Rosario Islands in the Colombian Caribbean",
    tags: ["Beach", "Nature", "Diving", "Snorkeling"],
  },
  bocagrande: {
    descripcionCorta: "The modern hotel district facing the Caribbean Sea.",
    descripcion:
      "Cartagena's most cosmopolitan neighborhood combines urban beaches, signature restaurants, and a vibrant nightlife with the Caribbean as its backdrop.",
    imagenAlt: "Bocagrande beach with the Cartagena skyline in the background",
    tags: ["Beach", "Food", "Nightlife"],
  },
  getsemani: {
    nombre: "Getsemaní",
    descripcionCorta: "The most authentic and colorful neighborhood, birthplace of Cartagena's street art.",
    descripcion:
      "Once considered dangerous, Getsemaní is now Cartagena's most vibrant neighborhood. Striking murals, plazas full of life, and the city's most authentic food scene.",
    imagenAlt: "Colorful murals in the Getsemaní neighborhood of Cartagena",
    tags: ["Art", "Culture", "Food", "Authentic"],
  },
  "playa-blanca": {
    descripcionCorta: "One of the most beautiful beaches in the Colombian Caribbean, on Barú Island.",
    descripcion:
      "White sand, warm emerald-colored water, and palm trees. Playa Blanca on Barú Island is the quintessential beach destination of the Cartagena region.",
    imagenAlt: "White sand and palm trees at Playa Blanca on Barú Island",
    tags: ["Beach", "Relax", "Nature"],
  },
};
