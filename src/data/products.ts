import fs from "fs";
import path from "path";
import { Category, CategorySlug, Product } from "@/types";
import { CATEGORIES } from "./categories";

/**
 * CATÁLOGO DE PRODUCTOS DISPONIBLES.
 * 
 * Colección de mobiliario y decoración artesanal físicamente disponibles.
 */
export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-010",
    slug: "espejo-rectangular-petiribi",
    name: "Espejo Rectangular Petiribí",
    category: "espejos",
    price: 690000,
    shortDescription:
      "Espejo de gran formato de 2,00 m × 0,80 m con marco de madera Petiribí de 12 cm.",
    description:
      "Espejo de gran formato realizado con marco de madera Petiribí. Una pieza de líneas simples y presencia cálida, pensada para dormitorios, vestidores, livings o recibidores.",
    images: [
      {
        src: "/images/products/espejo-rectangular-petiribi-01.jpg",
        alt: "Espejo Rectangular Petiribí 2,00 x 0,80 m vista principal",
        isMain: true,
      },
      {
        src: "/images/products/espejo-rectangular-petiribi-02.jpg",
        alt: "Detalle del marco de madera Petiribí de 12 cm",
        isMain: false,
      },
      {
        src: "/images/products/espejo-rectangular-petiribi-03.jpg",
        alt: "Espejo Rectangular Petiribí en ambiente",
        isMain: false,
      },
      {
        src: "/images/products/espejo-rectangular-petiribi-04.jpg",
        alt: "Detalle de terminación en madera Petiribí",
        isMain: false,
      },
    ],
    dimensions: {
      width: 80,
      height: 200,
      frameWidth: 12,
      formatted: "2,00 m × 0,80 m · Marco: 12 cm de ancho",
    },
    material: "Petiribí",
    features: [
      "Marco de 12 cm de ancho en madera maciza de Petiribí",
      "Gran escala visual para dormitorios, vestidores o recibidores",
      "Vetas naturales continuas con acabado suave",
    ],
    featured: true,
    available: true,
  },
  {
    id: "prod-011",
    slug: "espejo-marco-curvo-roble",
    name: "Espejo Marco Curvo Roble",
    category: "espejos",
    price: 740000,
    shortDescription:
      "Espejo de gran formato de 2,00 m × 0,80 m con marco curvo de 6 cm en madera de roble.",
    description:
      "Espejo de gran formato con marco curvo realizado en madera de roble. Su diseño orgánico y las vetas naturales de la madera aportan carácter y calidez al ambiente.",
    images: [
      {
        src: "/images/products/espejo-marco-curvo-roble-01.jpg",
        alt: "Espejo Marco Curvo Roble 2,00 x 0,80 m vista frontal",
        isMain: true,
      },
      {
        src: "/images/products/espejo-marco-curvo-roble-02.jpg",
        alt: "Detalle de curvatura orgánica del marco en roble",
        isMain: false,
      },
      {
        src: "/images/products/espejo-marco-curvo-roble-03.jpg",
        alt: "Espejo Marco Curvo Roble en ambiente",
        isMain: false,
      },
    ],
    dimensions: {
      width: 80,
      height: 200,
      frameWidth: 6,
      formatted: "2,00 m × 0,80 m · Marco: 6 cm de ancho",
    },
    material: "Roble",
    features: [
      "Marco curvo de diseño orgánico en madera de roble",
      "Terminación cuidada que resalta las vetas y el tono del roble",
      "Pieza de acento arquitectónico para vestir muros amplios",
    ],
    featured: true,
    available: true,
  },
  {
    id: "prod-012",
    slug: "espejo-redondo-petiribi",
    name: "Espejo Redondo Petiribí",
    category: "espejos",
    price: 340000,
    shortDescription:
      "Espejo circular de 0,80 m de diámetro enmarcado en madera Petiribí.",
    description:
      "Espejo circular enmarcado en madera Petiribí. Un diseño simple, cálido y atemporal que funciona muy bien en recibidores, dormitorios, baños o livings.",
    images: [
      {
        src: "/images/products/espejo-redondo-petiribi-01.jpg",
        alt: "Espejo Redondo Petiribí 0,80 m vista frontal",
        isMain: true,
      },
      {
        src: "/images/products/espejo-redondo-petiribi-02.jpg",
        alt: "Detalle del marco circular en madera Petiribí",
        isMain: false,
      },
      {
        src: "/images/products/espejo-redondo-petiribi-03.jpg",
        alt: "Espejo Redondo Petiribí sobre recibidor",
        isMain: false,
      },
    ],
    dimensions: {
      diameter: 80,
      formatted: "0,80 m de diámetro",
    },
    material: "Petiribí",
    features: [
      "Formato circular de 0,80 m de diámetro",
      "Marco perimetral en madera maciza de Petiribí",
      "Versatilidad para recibidores, dormitorios, livings o baños",
    ],
    featured: false,
    available: true,
  },
  {
    id: "prod-013",
    slug: "mesa-apoyo-petiribi-marmol",
    name: "Mesa de Apoyo Petiribí y Mármol",
    category: "mesas",
    price: 350000,
    shortDescription:
      "Mesa de apoyo compacta de 0,60 m de diámetro que combina madera Petiribí con mármol.",
    description:
      "Mesa de apoyo compacta que combina madera Petiribí con mármol. Su escala versátil permite utilizarla como mesa de luz, mesa lateral o como parte de una composición de dos mesas auxiliares en el living.",
    images: [
      {
        src: "/images/products/mesa-apoyo-petiribi-marmol-01.jpg",
        alt: "Mesa de Apoyo Petiribí y Mármol vista general",
        isMain: true,
      },
      {
        src: "/images/products/mesa-apoyo-petiribi-marmol-02.jpg",
        alt: "Detalle de tapa de mármol y base de madera Petiribí",
        isMain: false,
      },
      {
        src: "/images/products/mesa-apoyo-petiribi-marmol-03.jpg",
        alt: "Mesa de Apoyo Petiribí y Mármol en living",
        isMain: false,
      },
    ],
    dimensions: {
      diameter: 60,
      formatted: "0,60 m de diámetro",
    },
    material: "Madera Petiribí y mármol",
    features: [
      "Escala compacta auxiliar (0,60 m de diámetro)",
      "Uso versátil: mesa de luz, mesa lateral o auxiliar de living",
      "Apta para lucir individualmente o en composición de dos mesas",
    ],
    featured: true,
    available: true,
  },
  {
    id: "prod-014",
    slug: "mesa-apoyo-grande-marmol",
    name: "Mesa de Apoyo Grande con Mármol",
    category: "mesas",
    price: 550000,
    shortDescription:
      "Mesa de apoyo de mayor formato realizada en madera y mármol para living.",
    description:
      "Mesa de apoyo de mayor formato realizada en madera y mármol, pensada para ocupar un lugar protagonista en el living. Una pieza funcional que combina la calidez de la madera con la presencia del mármol.",
    images: [
      {
        src: "/images/products/mesa-apoyo-grande-marmol-01.jpg",
        alt: "Mesa de Apoyo Grande con Mármol vista general",
        isMain: true,
      },
      {
        src: "/images/products/mesa-apoyo-grande-marmol-02.jpg",
        alt: "Detalle de la superficie de mármol y cuerpo de madera",
        isMain: false,
      },
      {
        src: "/images/products/mesa-apoyo-grande-marmol-03.jpg",
        alt: "Mesa de Apoyo Grande con Mármol ambientada",
        isMain: false,
      },
    ],
    material: "Madera y mármol",
    features: [
      "Formato de mayor presencia y escala pensado para living",
      "Combinación armoniosa de madera con la solidez del mármol",
      "Pieza central de apoyo con jerarquía visual",
    ],
    featured: false,
    available: true,
  },
  {
    id: "prod-015",
    slug: "banqueta-pie-de-cama",
    name: "Banqueta Pie de Cama",
    category: "banquetas",
    price: 450000,
    shortDescription:
      "Banqueta de diseño pensada para acompañar dormitorio, vestidor o recibidor.",
    description:
      "Banqueta de diseño pensada para acompañar el dormitorio, un vestidor o un recibidor. Una pieza funcional que suma presencia y comodidad al ambiente.",
    images: [
      {
        src: "/images/products/banqueta-pie-de-cama-01.jpg",
        alt: "Banqueta Pie de Cama vista general",
        isMain: true,
      },
      {
        src: "/images/products/banqueta-pie-de-cama-02.jpg",
        alt: "Detalle de estructura y terminación de la banqueta",
        isMain: false,
      },
      {
        src: "/images/products/banqueta-pie-de-cama-03.jpg",
        alt: "Banqueta Pie de Cama en dormitorio",
        isMain: false,
      },
    ],
    features: [
      "Diseño estilizado para pie de cama, vestidor o recibidor",
      "Aporte de asiento auxiliar, apoyo y calidez al espacio",
    ],
    featured: false,
    available: true,
  },
  {
    id: "prod-016",
    slug: "recibidor-cedro",
    name: "Recibidor Cedro",
    category: "recibidores",
    price: 490000,
    shortDescription:
      "Recibidor realizado en madera de cedro para espacios de entrada.",
    description:
      "Recibidor realizado en madera de cedro, pensado para acompañar espacios de entrada con la calidez y las vetas naturales propias de la madera.",
    images: [
      {
        src: "/images/products/recibidor-cedro-01.jpg",
        alt: "Recibidor Cedro vista frontal",
        isMain: true,
      },
      {
        src: "/images/products/recibidor-cedro-02.jpg",
        alt: "Detalle de vetas y textura de madera de cedro",
        isMain: false,
      },
      {
        src: "/images/products/recibidor-cedro-03.jpg",
        alt: "Recibidor Cedro en espacio de entrada",
        isMain: false,
      },
    ],
    material: "Cedro",
    features: [
      "Mobiliario estilizado para entradas y zonas de transición",
      "Vetas naturales y calidez propias de la madera de cedro",
    ],
    featured: false,
    available: true,
  },
];

// ============================================================================
// RESOLUCIÓN DE IMÁGENES SEGURA (PREVIENE 404s MIENTRAS SE SUBEN LOS ARCHIVOS)
// ============================================================================

/**
 * Resuelve la ruta física de la imagen del producto.
 * Si la imagen configurada existe físicamente en disco (ej. /images/products/<slug>-01.jpg),
 * se retorna directamente dicha ruta. Si todavía no fue subida, devuelve "/products/placeholder.svg"
 * como fallback seguro para evitar 404s e imágenes rotas en el navegador.
 */
function resolveImageSrc(src: string): string {
  if (!src) return "/products/placeholder.svg";

  const cleanPath = src.startsWith("/") ? src.slice(1) : src;
  const filePath = path.join(process.cwd(), "public", cleanPath);

  if (fs.existsSync(filePath)) {
    return src;
  }

  // Fallback seguro al placeholder existente cuando la fotografía aún no fue subida
  return "/products/placeholder.svg";
}

function processProduct(product: Product): Product {
  return {
    ...product,
    images: product.images.map((img) => ({
      ...img,
      src: resolveImageSrc(img.src),
    })),
  };
}

// ============================================================================
// CAPA DE ACCESO A DATOS (DATA ACCESS LAYER)
// ============================================================================

/**
 * Obtiene todos los productos del catálogo.
 */
export async function getProducts(): Promise<Product[]> {
  return MOCK_PRODUCTS.map(processProduct);
}

/**
 * Obtiene un producto por su slug único. Retorna null si no existe.
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);
  return product ? processProduct(product) : null;
}

/**
 * Obtiene los productos marcados como destacados para la Home.
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  return MOCK_PRODUCTS.filter((p) => p.featured).map(processProduct);
}

/**
 * Obtiene los productos que pertenecen a una categoría específica.
 */
export async function getProductsByCategory(
  categorySlug: CategorySlug | string
): Promise<Product[]> {
  return MOCK_PRODUCTS.filter((p) => p.category === categorySlug).map(processProduct);
}

/**
 * Obtiene el listado completo de categorías.
 */
export async function getCategories(): Promise<Category[]> {
  return CATEGORIES;
}

/**
 * Obtiene una categoría por su slug único. Retorna null si no existe.
 */
export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  const category = CATEGORIES.find((c) => c.slug === slug);
  return category ?? null;
}
