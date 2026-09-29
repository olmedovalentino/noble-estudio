import { Category } from "@/types";

/**
 * Catálogo central de Categorías (MOCK / Provisional).
 * 
 * Se utiliza como fuente única para la navegación por categorías,
 * filtros del catálogo y metadatos asociados.
 */
export const CATEGORIES: Category[] = [
  {
    id: "mesas",
    slug: "mesas",
    name: "Mesas",
    description: "Mesas de comedor, centros de living y mesas auxiliares.",
    featured: true,
  },
  {
    id: "sillas",
    slug: "sillas",
    name: "Sillas",
    description: "Sillas de comedor, banqueta alta y asientos de diseño.",
    featured: true,
  },
  {
    id: "racks-tv",
    slug: "racks-tv",
    name: "Racks TV",
    description: "Muebles para televisión, consolas y centros de entretenimiento.",
    featured: true,
  },
  {
    id: "comodas",
    slug: "comodas",
    name: "Cómodas",
    description: "Cajoneras amplias, aparadores y guardado para dormitorios.",
    featured: true,
  },
  {
    id: "mesas-de-luz",
    slug: "mesas-de-luz",
    name: "Mesas de luz",
    description: "Mesas de noche y laterales con cajón o estante inferior.",
    featured: false,
  },
  {
    id: "otros",
    slug: "otros",
    name: "Otros",
    description: "Estanterías modulares, recibidores y complementos de diseño.",
    featured: false,
  },
];
