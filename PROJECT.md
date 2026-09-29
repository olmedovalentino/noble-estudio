# PROJECT: Catálogo Web de Muebles

## 1. Visión y Objetivo del Proyecto
El proyecto consiste en el desarrollo de un sitio web profesional y moderno para un negocio de muebles de diseño y fabricación. 

**Enfoque de la V1:**
- **No es un e-commerce transaccional:** No incluye carrito de compras, pasarela de pagos, autenticación de usuarios ni base de datos activa.
- **Función principal:** Catálogo comercial digital de alta calidad visual enfocado en la conversión directa: **Catálogo → Producto → Consulta por WhatsApp**.
- **Preparado para escalar:** Estructura modular y fuertemente tipada para facilitar una migración futura a CMS (Sanity/Strapi) o base de datos (PostgreSQL/Supabase/Prisma) sin refactorizar la UI.

---

## 2. Decisiones Técnicas Clave

1. **Stack Tecnológico:**
   - **Framework:** Next.js (App Router) con TypeScript.
   - **Estilos:** Tailwind CSS v4 (diseño limpio, paleta neutra, sobria y profesional en escala de grises/zinc y blanco puro, sin atarse a maderas cálidas ni colores específicos hasta definir la identidad final).
   - **Optimización de Medios:** `next/image` para rendimiento óptimo y carga diferida (lazy loading).
   - **Linting & Calidad:** ESLint 9 configurado con ignores explícitos de `node_modules/**` para escaneo ágil y TypeScript estricto.

2. **Capa de Abstracción de Datos (Data Access Layer):**
   - Los productos residen en archivos TypeScript (`src/data/products.ts`) con una interfaz estricta (`src/types/product.ts`).
   - Se exponen mediante funciones de acceso (`getProducts()`, `getProductBySlug(slug)`, `getFeaturedProducts()`, `getCategories()`). Esto asegura que cuando se incorpore un CMS o base de datos, solo se modifique esta capa sin alterar los componentes.

3. **Centralización de Marca y Placeholder (Single Source of Truth):**
   - Archivo `src/config/site.ts` con todos los valores provisionales claramente rotulados:
     - Nombre comercial placeholder (ej. `[NOMBRE_DEL_NEGOCIO]`).
     - Teléfono de WhatsApp de contacto.
     - Enlaces a redes sociales, textos legales y mensaje base de WhatsApp.
     - Categorías provisionales.

4. **Filtrado en Catálogo mediante Search Params (URL-driven state):**
   - El filtrado por categorías en `/productos` utilizará query params en la URL (`/productos?categoria=mesas`).
   - *Ventajas:* URLs compartibles, amigables para SEO, navegación con botón "Atrás" nativo del navegador y sin complejidad de estado global innecesario.

5. **Estructura de Imágenes:**
   - Almacenamiento local en `/public/products/[slug]/` con nombres consistentes (`1.webp`, `2.webp`, etc.).
   - Preparado para cambiar los paths a URLs de CDN (Cloudinary / S3) sin tocar la lógica de renderizado.

6. **SEO y Metadatos:**
   - `metadata` estático en Home y Catálogo.
   - `generateMetadata` dinámico en `/productos/[slug]` con Open Graph específico para que cada producto se previsualice correctamente al compartir el enlace por WhatsApp u otras redes.

---

## 3. Estructura Propuesta de Carpetas

```text
muebles-web/
├── public/
│   ├── brand/                      # Logos, isotipos o favicons temporales
│   └── products/                   # Imágenes locales por producto
│       ├── mesa-paraiso-180/
│       │   ├── 1.webp
│       │   └── 2.webp
│       └── silla-nordica-roble/
│           ├── 1.webp
│           └── 2.webp
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Layout raíz (Header, Footer, tipografía, metadata global)
│   │   ├── page.tsx                # Home (Hero, Categorías, Destacados, Sobre Nosotros, CTA)
│   │   ├── productos/
│   │   │   ├── page.tsx            # Catálogo completo con selector de categorías
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Detalle de producto con galería y botón WhatsApp
│   │   ├── globals.css             # Estilos globales y directivas Tailwind
│   │   ├── not-found.tsx           # Página 404 personalizada
│   │   └── robots.txt / sitemap.ts # SEO técnico base
│   ├── components/                 # Componentes de UI reutilizables
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Barra de navegación responsive
│   │   │   └── Footer.tsx          # Pie de página y enlaces
│   │   ├── common/
│   │   │   ├── SectionTitle.tsx    # Títulos de sección con jerarquía uniforme
│   │   │   ├── WhatsAppButton.tsx  # Botón reusable de WhatsApp (con generador de mensaje)
│   │   │   └── Badge.tsx           # Indicador de disponibilidad / destacado
│   │   ├── home/
│   │   │   ├── Hero.tsx            # Hero principal con llamado a la acción
│   │   │   ├── CategoryList.tsx    # Grid de accesos directos por categoría
│   │   │   └── AboutSection.tsx    # Breve reseña del negocio / propuesta de valor
│   │   └── products/
│   │       ├── ProductCard.tsx     # Card de producto con imagen, precio, categoría y acción
│   │       ├── ProductGrid.tsx     # Grilla responsiva para listar productos
│   │       ├── ProductGallery.tsx  # Galería de imágenes (principal + miniaturas)
│   │       └── CategoryFilter.tsx  # Barra de filtros para el catálogo
│   ├── config/
│   │   └── site.ts                 # Configuración de marca, contacto y WhatsApp
│   ├── data/
│   │   ├── products.ts             # Datos MOCK tipados y funciones de consulta
│   │   └── categories.ts           # Definición centralizada de categorías
│   ├── types/
│   │   └── product.ts              # Interfaces TypeScript de Producto y Categoría
│   └── lib/
│       └── utils.ts                # Funciones auxiliares (formateo de precios en ARS/USD, url de WhatsApp, cn)
├── PROJECT.md                      # Documentación del proyecto y roadmap
├── tailwind.config.ts              # Configuración de diseño, colores y tipografías
├── tsconfig.json
└── package.json
```

---

## 4. Modelo de Datos (`Product`)

```typescript
export interface Product {
  id: string;
  slug: string;
  nombre: string;
  categoria: ProductCategory;
  precio: number;
  precioComparacion?: number; // Para mostrar eventuales descuentos
  moneda: 'ARS' | 'USD';
  descripcionCorta: string;
  descripcionLarga: string[];
  imagenes: {
    src: string;
    alt: string;
    esPrincipal?: boolean;
  }[];
  medidas: {
    anchoCm: number;
    altoCm: number;
    profundidadCm: number;
    textoLibre?: string; // Ej: "1.80m x 0.90m x 0.75m"
  };
  material: string;
  terminacion?: string;
  caracteristicas: string[];
  destacado: boolean;
  disponible: boolean;
}
```

---

## 5. Convenciones de Desarrollo
- **Componentes limpios y pequeños:** Máximo ~150 líneas por componente; delegar subpartes complejas en componentes hijos.
- **Tipado estricto:** No usar `any`.
- **Accesibilidad y SEO:** Todas las imágenes llevarán textos `alt` descriptivos con el nombre y material del mueble; estructura jerárquica de encabezados (`h1`, `h2`, `h3`).
- **Placeholders claros:** Cualquier dato temporal llevará el prefijo `MOCK_` o `PLACEHOLDER_` para una sustitución inmediata una vez definidos los activos reales.

---

## 6. Plan de Implementación por Etapas

- **Etapa 1: Inicialización & Estructura Base** *(COMPLETADA)*
  - Inicializado Next.js 16 con App Router, React 19, TypeScript 5 y Tailwind CSS v4.
  - Creada estructura de carpetas `src/` (components, config, data, types, lib) y `public/` (brand, products).
  - Creado `src/config/site.ts` con todos los placeholders de marca, contacto y WhatsApp claramente centralizados.
  - Creado `src/lib/utils.ts` con helpers puros (`cn`, `formatPrice`, `buildWhatsAppUrl`).
  - Base visual neutra y sobria configurada en `src/app/globals.css`.
  - Validaciones de TypeScript (`tsc --noEmit`), ESLint (`npm run lint`) y compilación de producción (`next build`) exitosas sin errores.

- **Etapa 2: Capa de Datos & Utilidades** *(COMPLETADA)*
  - Definidos tipos e interfaces estrictas en `src/types/product.ts` y `src/types/category.ts` (`Product`, `ProductDimensions`, `ProductImage`, `Category`, `CategorySlug`).
  - Creado catálogo central de categorías en `src/data/categories.ts`.
  - Creado catálogo MOCK de 9 productos representativos distribuidos en todas las categorías en `src/data/products.ts`.
  - Creada capa asíncrona de acceso a datos (Data Access Layer) con `getProducts()`, `getProductBySlug()`, `getFeaturedProducts()`, `getProductsByCategory()`, `getCategories()`, `getCategoryBySlug()`.
  - Configurado `formatPrice()` con soporte nativo para pesos argentinos (`ARS`, locale `es-AR` vía `Intl.NumberFormat`) conectado a `siteConfig`.
  - Generada estructura local física para fotos en `public/products/[slug]/` con placeholders SVG elegantes y accesibles.
  - Creados helpers directos de WhatsApp para productos y consultas generales en `src/lib/utils.ts`.
  - Validaciones de TypeScript (`tsc --noEmit`), ESLint y producción (`next build`) verificadas al 100%.

- **Etapa 3: Componentes Globales de Layout**
  - `Header` responsive con navegación clara (Inicio, Catálogo, Contacto).
  - `Footer` con información comercial, horarios, links y aviso de datos demostrativos.
  - `WhatsAppButton` flotante y reutilizable.

- **Etapa 4: Home Page**
  - Hero visual de alto impacto con llamada a la acción hacia `/productos`.
  - Grid de categorías visuales (`CategoryCard`).
  - Sección de "Productos Destacados" (`ProductGrid`).
  - Sección de propuesta de valor / taller / calidad ("Sobre nosotros").
  - Banner CTA para consultas a medida por WhatsApp.

- **Etapa 5: Catálogo General (`/productos`)**
  - Barra de filtrado dinámico por categorías (sincronizada con la URL).
  - Listado en grilla responsiva con `ProductCard`.
  - Estados vacíos si no hay coincidencias en la categoría seleccionada.

- **Etapa 6: Detalle de Producto (`/productos/[slug]`)**
  - Galería de imágenes interactiva (`ProductGallery`).
  - Ficha técnica completa (dimensiones, maderas, acabados, características).
  - Botón principal de conversión con mensaje automático parametrizado por producto para WhatsApp.
  - Metadatos dinámicos para SEO y Open Graph.

- **Etapa 7: Verificación, Responsive & Pulido Visual**
  - Comprobación de visualización en mobile y desktop.
  - Verificación de enlaces, generación de mensajes de WhatsApp y performance general.
