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
    description: "Mesas de apoyo, living y auxiliares con maderas nobles y mármol.",
    featured: true,
  },
  {
    id: "espejos",
    slug: "espejos",
    name: "Espejos",
    description: "Espejos de gran formato y circulares enmarcados en maderas nobles.",
    featured: true,
  },
  {
    id: "banquetas",
    slug: "banquetas",
    name: "Banquetas",
    description: "Banquetas de diseño pensadas para acompañar dormitorios o recibidores.",
    featured: true,
  },
  {
    id: "recibidores",
    slug: "recibidores",
    name: "Recibidores",
    description: "Mobiliario estilizado para entradas y espacios de transición.",
    featured: true,
  },
];
