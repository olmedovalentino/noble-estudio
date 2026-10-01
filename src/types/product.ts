import { CategorySlug } from "./category";

/**
 * Dimensiones físicas de un mueble.
 */
export interface ProductDimensions {
  width?: number; // Ancho en centímetros
  height?: number; // Alto en centímetros
  depth?: number; // Profundidad en centímetros
  diameter?: number; // Diámetro en centímetros (para piezas circulares)
  frameWidth?: number; // Ancho del marco en centímetros (para espejos)
  unit?: "cm" | "mm" | "m"; // Unidad de medida (por defecto 'cm')
  formatted?: string; // Cadena legible preformateada (ej: "2,00 m × 0,80 m · Marco 12 cm")
}

/**
 * Representación de una imagen de producto.
 */
export interface ProductImage {
  src: string; // Ruta local relativa en /public o URL externa
  alt: string; // Texto descriptivo accesible para SEO y lectores de pantalla
  isMain?: boolean; // Marca la imagen destacada principal
}

/**
 * Modelo maestro de Producto (Mueble).
 * 
 * Diseñado de forma modular para catálogo comercial con consulta a WhatsApp
 * y preparado para una futura migración transparente a CMS o base de datos.
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  compareAtPrice?: number; // Precio anterior o tachado (opcional para promociones)
  shortDescription: string;
  description: string;
  images: ProductImage[];
  dimensions?: ProductDimensions;
  material?: string;
  finishes?: string[]; // Terminaciones y acabados disponibles
  features?: string[]; // Puntos clave y especificaciones técnicas
  featured: boolean; // Si aparece en la sección destacados de Home
  available: boolean; // Si está disponible para encargo o entrega inmediata
  manufacturingDays?: number; // Días estimados de fabricación artesanal (opcional)
}
