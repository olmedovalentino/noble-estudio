import { Category, CategorySlug, Product } from "@/types";
import { CATEGORIES } from "./categories";

/**
 * CATÁLOGO DE PRODUCTOS (DATOS MOCK / DEMOSTRACIÓN).
 * 
 * AVISO: Los nombres, especificaciones, medidas y precios son ficticios
 * y tienen fines estrictamente ilustrativos para el desarrollo de la interfaz
 * y la verificación de filtros y flujos comerciales.
 */
export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-001",
    slug: "mesa-comedor-paraiso",
    name: "Mesa de Comedor Paraíso 1.80",
    category: "mesas",
    price: 420000,
    compareAtPrice: 470000,
    shortDescription:
      "Mesa de comedor rectangular en madera paraíso con terminación poliuretánica mate. Ideal para 6 a 8 comensales.",
    description:
      "Nuestra mesa de comedor Paraíso combina la calidez de las vetas naturales con una estructura sólida pensada para el uso cotidiano. Cuenta con patas macizas torneadas cónicas y una tapa reforzada con biselado suave en sus bordes, ofreciendo una estética contemporánea y de gran resistencia.",
    images: [
      {
        src: "/products/mesa-comedor-paraiso/1.svg",
        alt: "Mesa de comedor Paraíso 1.80 vista frontal y superior",
        isMain: true,
      },
      {
        src: "/products/mesa-comedor-paraiso/2.svg",
        alt: "Detalle de ensamble y textura de la madera Paraíso",
        isMain: false,
      },
    ],
    dimensions: {
      width: 180,
      height: 76,
      depth: 90,
      unit: "cm",
      formatted: "180 x 90 x 76 cm",
    },
    material: "Madera Paraíso maciza en patas y enchapado natural de 19mm en tapa",
    finishes: [
      "Laca poliuretánica mate de alto tránsito",
      "Bordes pulidos con bisel suave",
    ],
    features: [
      "Capacidad confortable para 6 a 8 personas",
      "Patas desmontables mediante herrajes internos de acero",
      "Tratamiento hidrófugo resistente a manchas y líquidos diarios",
    ],
    featured: true,
    available: true,
    manufacturingDays: 15,
  },
  {
    id: "prod-002",
    slug: "silla-nordica-petiribi",
    name: "Silla Nórdica Petiribí",
    category: "sillas",
    price: 145000,
    shortDescription:
      "Silla de diseño escandinavo en Petiribí macizo con respaldo curvo ergonómico y asiento tapizado.",
    description:
      "Diseñada bajo premisas de confort postural y elegancia visual, la silla Nórdica Petiribí destaca por las curvas orgánicas de su respaldo torneado artesanalmente. Su asiento de densidad media-alta garantiza durabilidad tanto para comedores familiares como para espacios de trabajo.",
    images: [
      {
        src: "/products/silla-nordica-petiribi/1.svg",
        alt: "Silla Nórdica Petiribí vista lateral de diseño",
        isMain: true,
      },
      {
        src: "/products/silla-nordica-petiribi/2.svg",
        alt: "Detalle del respaldo curvo en madera Petiribí maciza",
        isMain: false,
      },
    ],
    dimensions: {
      width: 48,
      height: 82,
      depth: 52,
      unit: "cm",
      formatted: "48 x 52 x 82 cm",
    },
    material: "Madera Petiribí macizo estacionado y secado a horno",
    finishes: [
      "Lustre con cera vegetal y aceites protectores satinados",
      "Tapizado en tela de lino con proceso antimanchas",
    ],
    features: [
      "Uniones en caja y espiga encoladas a presión",
      "Espuma de alta densidad (28 kg) con memoria elástica",
      "Topes protectores de fieltro instalados en cada pata",
    ],
    featured: true,
    available: true,
    manufacturingDays: 10,
  },
  {
    id: "prod-003",
    slug: "rack-tv-vester-160",
    name: "Rack TV Vester 1.60",
    category: "racks-tv",
    price: 360000,
    compareAtPrice: 395000,
    shortDescription:
      "Mueble para televisión y audio con estructura combinada de hierro estructural y madera de Guayubira.",
    description:
      "El rack Vester aporta un carácter sobrio y moderno a cualquier sala de estar. Diseñado para alojar pantallas de gran porte, dispone de dos módulos cerrados con puertas corredizas ranuradas y un nicho central abierto para consolas o decodificadores con pasacables discretos.",
    images: [
      {
        src: "/products/rack-tv-vester-160/1.svg",
        alt: "Rack TV Vester 1.60 combinado en hierro y Guayubira",
        isMain: true,
      },
      {
        src: "/products/rack-tv-vester-160/2.svg",
        alt: "Detalle de puertas corredizas y pasacables trasero",
        isMain: false,
      },
    ],
    dimensions: {
      width: 160,
      height: 55,
      depth: 40,
      unit: "cm",
      formatted: "160 x 40 x 55 cm",
    },
    material: "Madera de Guayubira seleccionada y perfiles de hierro 20x20",
    finishes: [
      "Estructura metálica con pintura epoxi termoendurecible al horno en negro mate",
      "Madera sellada con hidrolaca protectora",
    ],
    features: [
      "Apto para televisores de hasta 65 pulgadas",
      "Orificios pasacables traseros en el nicho central",
      "Puertas con guías de rodamiento suave y silencioso",
    ],
    featured: true,
    available: true,
    manufacturingDays: 20,
  },
  {
    id: "prod-004",
    slug: "comoda-escandinava-6-cajones",
    name: "Cómoda Escandinava 6 Cajones",
    category: "comodas",
    price: 510000,
    shortDescription:
      "Aparador y cómoda amplia con seis cajones profundos con correderas telescópicas y apertura a 45 grados.",
    description:
      "Solución de guardado integral de líneas puras. Combina un casco laqueado satinado con frentes de cajón con veta corrida en madera Paraíso. Los tiradores integrados tipo uñero eliminan herrajes externos para un frente completamente limpio.",
    images: [
      {
        src: "/products/comoda-escandinava-6-cajones/1.svg",
        alt: "Cómoda escandinava de 6 cajones vista frontal",
        isMain: true,
      },
      {
        src: "/products/comoda-escandinava-6-cajones/2.svg",
        alt: "Detalle de cajones abiertos con correderas telescópicas",
        isMain: false,
      },
    ],
    dimensions: {
      width: 140,
      height: 85,
      depth: 45,
      unit: "cm",
      formatted: "140 x 45 x 85 cm",
    },
    material: "Cuerpo en MDF de alta densidad y frentes en Paraíso natural",
    finishes: [
      "Laca poliuretánica blanca satinada no amarilleante",
      "Frentes tratados con laca transparente mate",
    ],
    features: [
      "6 cajones con correderas telescópicas metálicas de extracción total",
      "Frentes con tirador uñero fresado a 45°",
      "Patas macizas en ángulo con refuerzo transversal",
    ],
    featured: true,
    available: true,
    manufacturingDays: 20,
  },
  {
    id: "prod-005",
    slug: "mesa-de-luz-flotante-alva",
    name: "Mesa de Luz Flotante Alva",
    category: "mesas-de-luz",
    price: 110000,
    shortDescription:
      "Mesa de luz de pared con cajón oculto y diseño suspendido para optimizar espacios de dormitorio.",
    description:
      "La mesa de luz Alva se ancla a la pared liberando el piso por completo, lo que facilita la limpieza y otorga sensación de amplitud. Cuenta con un cajón con apertura suave y un nicho superior para apoyar libros y dispositivos.",
    images: [
      {
        src: "/products/mesa-de-luz-flotante-alva/1.svg",
        alt: "Mesa de luz flotante Alva instalada en pared",
        isMain: true,
      },
      {
        src: "/products/mesa-de-luz-flotante-alva/2.svg",
        alt: "Detalle del anclaje y cajón con apertura suave",
        isMain: false,
      },
    ],
    dimensions: {
      width: 45,
      height: 22,
      depth: 35,
      unit: "cm",
      formatted: "45 x 35 x 22 cm",
    },
    material: "Madera Paraíso maciza en contorno y frente laqueado",
    finishes: [
      "Terminación al agua no tóxica y ecológica",
      "Bordes suavizados para evitar roces",
    ],
    features: [
      "Sistema de montaje invisible mediante listón francés oculto",
      "Cajón con correderas metálicas ocultas",
      "Capacidad de carga testeada de hasta 25 kg",
    ],
    featured: false,
    available: true,
    manufacturingDays: 7,
  },
  {
    id: "prod-006",
    slug: "set-mesas-nido-ratonas",
    name: "Set Mesas Ratonas Nido Oval",
    category: "mesas",
    price: 230000,
    shortDescription:
      "Juego de 2 mesas ratonas bajas ovaladas superponibles con patas torneadas cónicas.",
    description:
      "Un conjunto versátil para el centro del living. Su formato nido permite guardarlas una debajo de otra para ahorrar espacio, o bien distribuirlas por el ambiente cuando se reciben visitas. Formas suaves y seguras sin esquinas filosas.",
    images: [
      {
        src: "/products/set-mesas-nido-ratonas/1.svg",
        alt: "Set de 2 mesas ratonas nido ovaladas en living",
        isMain: true,
      },
      {
        src: "/products/set-mesas-nido-ratonas/2.svg",
        alt: "Mesas nido separadas mostrando dimensiones relativas",
        isMain: false,
      },
    ],
    dimensions: {
      width: 90,
      height: 42,
      depth: 50,
      unit: "cm",
      formatted: "Grande: 90x50x42 cm | Chica: 60x40x37 cm",
    },
    material: "Madera maciza de Kiri en patas y tapas enchapadas en Roble",
    finishes: [
      "Lustre claro satinado con protección contra humedad",
      "Borde perimetral rebajado suave",
    ],
    features: [
      "Estructura liviana y fácil de trasladar",
      "Formas redondeadas libres de cantos vivos",
      "Encastres de ensamble reforzado",
    ],
    featured: false,
    available: true,
    manufacturingDays: 10,
  },
  {
    id: "prod-007",
    slug: "banqueta-alta-barra-koto",
    name: "Banqueta Alta Barra Koto",
    category: "sillas",
    price: 125000,
    shortDescription:
      "Banqueta para barra desayunadora con estructura minimalista de hierro y asiento de madera maciza.",
    description:
      "La banqueta Koto está diseñada para barras e islas de cocina con una altura de asiento de 75 cm. Su asiento ergonómico fresado en madera maciza asegura una postura cómoda, complementado por un apoyapiés perimetral continuo.",
    images: [
      {
        src: "/products/banqueta-alta-barra-koto/1.svg",
        alt: "Banqueta alta Koto en hierro negro y asiento de madera",
        isMain: true,
      },
      {
        src: "/products/banqueta-alta-barra-koto/2.svg",
        alt: "Detalle del asiento fresado ergonómico",
        isMain: false,
      },
    ],
    dimensions: {
      width: 42,
      height: 95,
      depth: 42,
      unit: "cm",
      formatted: "42 x 42 x 95 cm (Asiento: 75 cm)",
    },
    material: "Hierro macizo redondo de 12mm y asiento de Guatambú macizo",
    finishes: [
      "Pintura epoxi horneada en tono negro mate microtexturado",
      "Asiento laqueado con hidrolaca transparente",
    ],
    features: [
      "Altura estándar de 75 cm compatible con mesadas de 95 a 105 cm",
      "Apoyapiés soldado con costura continua invisible",
      "Estructura apilable de hasta 3 unidades",
    ],
    featured: false,
    available: true,
    manufacturingDays: 10,
  },
  {
    id: "prod-008",
    slug: "estanteria-modular-cubos-zen",
    name: "Estantería Modular Cubos Zen",
    category: "otros",
    price: 390000,
    shortDescription:
      "Biblioteca y estantería divisoria de ambientes con módulos asimétricos abiertos a doble faz.",
    description:
      "La estantería Zen funciona tanto contra la pared como divisoria de ambientes, ya que no tiene fondo cerrado y luce idéntica de ambos lados. Sus compartimentos alternados permiten alojar libros, piezas de cerámica, plantas o luminarias.",
    images: [
      {
        src: "/products/estanteria-modular-cubos-zen/1.svg",
        alt: "Estantería Zen divisoria con módulos asimétricos",
        isMain: true,
      },
      {
        src: "/products/estanteria-modular-cubos-zen/2.svg",
        alt: "Detalle de uniones y estantes de madera maciza",
        isMain: false,
      },
    ],
    dimensions: {
      width: 100,
      height: 180,
      depth: 32,
      unit: "cm",
      formatted: "100 x 32 x 180 cm",
    },
    material: "Madera maciza de Álamo teñido y seleccionado de 25mm de espesor",
    finishes: [
      "Tinte tono grafito ahumado y encerado artesanal",
      "Bordes lijados a mano al tacto sedoso",
    ],
    features: [
      "Doble faz: apta como separador de ambientes de living o estudio",
      "Base sólida autonivelable",
      "5 niveles útiles con compartimentos de alturas variables",
    ],
    featured: false,
    available: true,
    manufacturingDays: 15,
  },
  {
    id: "prod-009",
    slug: "mesa-de-luz-cubo-nordica",
    name: "Mesa de Luz Cubo Nórdica",
    category: "mesas-de-luz",
    price: 135000,
    shortDescription:
      "Mesa de noche con nicho superior abierto y cajón inferior con corredera telescópica metálica.",
    description:
      "Una pieza funcional para el dormitorio que equilibra un espacio abierto de rápido acceso con un cajón cerrado de buena capacidad. Su base con patas cónicas despega el cuerpo del suelo logrando una figura liviana.",
    images: [
      {
        src: "/products/mesa-de-luz-cubo-nordica/1.svg",
        alt: "Mesa de luz Cubo Nórdica con nicho y cajón",
        isMain: true,
      },
      {
        src: "/products/mesa-de-luz-cubo-nordica/2.svg",
        alt: "Detalle de corredera metálica y veta de madera",
        isMain: false,
      },
    ],
    dimensions: {
      width: 45,
      height: 60,
      depth: 38,
      unit: "cm",
      formatted: "45 x 38 x 60 cm",
    },
    material: "Madera Paraíso maciza en patas y enchapado natural en cuerpo",
    finishes: [
      "Laca poliuretánica mate resistente al agua",
      "Interior de cajón forrado en melamina lino",
    ],
    features: [
      "Nicho pasante superior para libros, reloj o cargadores",
      "Cajón con corredera telescópica suave",
      "Estructura firme con encastres reforzados",
    ],
    featured: false,
    available: true,
    manufacturingDays: 12,
  },
];

// ============================================================================
// CAPA DE ACCESO A DATOS (DATA ACCESS LAYER)
// ============================================================================
// Todas las funciones son asíncronas para desacoplar el origen de datos.
// Cuando se migre a CMS (Sanity/Strapi) o base de datos (Prisma/Supabase),
// los Server Components y llamadas seguirán usando la misma firma (`await getProducts()`).

/**
 * Obtiene todos los productos del catálogo.
 */
export async function getProducts(): Promise<Product[]> {
  return MOCK_PRODUCTS;
}

/**
 * Obtiene un producto por su slug único. Retorna null si no existe.
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);
  return product ?? null;
}

/**
 * Obtiene los productos marcados como destacados para la Home.
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  return MOCK_PRODUCTS.filter((p) => p.featured);
}

/**
 * Obtiene los productos que pertenecen a una categoría específica.
 */
export async function getProductsByCategory(
  categorySlug: CategorySlug | string
): Promise<Product[]> {
  return MOCK_PRODUCTS.filter((p) => p.category === categorySlug);
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
