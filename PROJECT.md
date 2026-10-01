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

- **Etapa 3: Componentes Globales de Layout** *(COMPLETADA)*
  - `Header` minimalista con detección de scroll (fondo traslúcido y desenfoque sutil), menú mobile de pantalla completa y enlace discreto de atención.
  - `Footer` amplio y editorial con información del atelier, showroom, horarios, categorías y redes.
  - `WhatsAppButton` flotante rediseñado como píldora sobria de lujo (en grafito/negro mate, con indicador sutil y sin estridencias).
  - Primitiva `SectionTitle` con etiqueta de autor (`01 / MANIFIESTO`), tipografía serif refinada y descripción fluida.

- **Etapa 4: Home Page Editorial** *(COMPLETADA)*
  - Hero a pantalla completa (`Hero.tsx`) con atmósfera visual, mínima intervención textual y CTA discreto.
  - Bloque editorial (`EditorialIntro.tsx`) sobre materialidad, arquitectura y respeto por el espacio.
  - Grilla asimétrica de categorías (`CategoryBespokeGrid.tsx`) que rompe la cuadrícula genérica.
  - Sección de "Piezas Destacadas" con `ProductGrid` y tarjetas editoriales `ProductCard`.
  - Bloque de taller (`CraftsmanshipSection.tsx`) enfocado en ebanistería, maderas seleccionadas y proyectos a medida.
  - Quiebre inmersivo (`AtmosphereBreak.tsx`) en tono grafito con ambientación arquitectónica.
  - Llamado final (`ConsultationCTA.tsx`) enfocado en la atención directa por WhatsApp y cita previa.

- **Etapa 5: Catálogo General (`/productos`)** *(COMPLETADA V1)*
  - Cabecera editorial con contexto de la colección.
  - Barra de filtrado dinámico `CategoryFilter` conectada a `searchParams` (`/productos?categoria=...`).
  - Grilla responsiva de productos con imágenes de gran porte, tipografía sutil y precio sin protagonismo invasivo.
  - Bloque para consultas de medidas y maderas especiales al final del catálogo.

- **Etapa 6: Detalle de Producto (`/productos/[slug]`)** *(COMPLETADA)*
  - Galería interactiva `ProductGallery` con soporte de múltiples imágenes, selector de miniaturas y optimización con `next/image`.
  - Jerarquía tipográfica editorial y ficha técnica arquitectónica sin encierro en cards (Medidas, Material, Acabados, Detalles de ensamble y Plazos de producción).
  - Botón de conversión principal conectado a `getProductWhatsAppUrl(product.name)` con mensaje prellenado contextual ("Consultar por este producto") y estética refinada en carbón mate.
  - Implementación de `generateStaticParams` para pre-renderizado SSG de todos los slugs y `generateMetadata` con Open Graph dinámico para redes y WhatsApp.
  - Sección inferior "También puede interesarte" con 3 productos relacionados reutilizando `ProductGrid` y `ProductCard`.
  - Página personalizada `src/app/not-found.tsx` con manejo de errores 404 mediante `notFound()`.
  - Simplificación de `ProductCard` en catálogo y Home (mostrando únicamente categoría, nombre y precio bajo la imagen).

- **Etapa 7: Cierre y Pulido de la V1 Técnica** *(COMPLETADA)*
  - Auditoría de textos provisionales: neutralización estricta de claims comerciales, procesos de fabricación, showroom físico y servicios no confirmados.
  - Ajuste del microcopy en la ficha de producto a *"Consultanos por disponibilidad, medidas y opciones"*.
  - Validación completa de compilación (`tsc`, `lint`, `next build` con SSG).
  - Estructura técnica y visual 100% preparada y lista para producción.

- **Etapa 8: Auditoría y Optimización Mobile Completa V1** *(COMPLETADA)*
  - **Header & Drawer Mobile:**
    - Altura optimizada y botón hamburguesa con área táctil accesible de 44x44px, atributos `aria-expanded` y `aria-label`.
    - Menú overlay a pantalla completa usando `100dvh` y paddings dinámicos con `env(safe-area-inset-top)` y `env(safe-area-inset-bottom)`.
    - Bloqueo de scroll en `<body>` mientras el menú está abierto y cierre automático al seleccionar una ruta.
    - Gradiente de respaldo oscuro para contraste impecable sobre fotografías claras u oscuras.
  - **Hero & Primer Impacto:**
    - Altura `100dvh` para evitar saltos de layout por las barras dinámicas del navegador móvil en iOS/Android.
    - Tipografía de título fluida y equilibrada (`text-[32px] sm:text-5xl`), evitando saturación en pantallas de 320px–390px.
    - Overlay de gradiente oscuro (`from-[#141413]/85`) para legibilidad fotográfica premium. Botones con touch target de 48px de altura y full width en mobile.
  - **Catálogo (`/productos`) — Decisión de Grilla:**
    - **1 columna en smartphones (<640px)**, 2 columnas en tablets (640px–1023px) y 3 columnas en desktop (1024px+).
    - *Fundamento:* Catálogo selecto de 7 piezas de alto valor ($340.000–$740.000). A 2 columnas en smartphones (160px por tarjeta), la imagen se reducía a 200px de altura, perdiendo la apreciación de la veta del petiribí/roble, los ensambles y el mármol, asemejándose a un marketplace genérico. La columna única proporciona una escala editorial generosa y digna de una firma de autor, navegable en pocos scrolls continuos.
    - Filtros horizontales por categoría con scroll táctil suave (`overflow-x: auto`), sangrado de pantalla completa en mobile (`-mx-4 px-4`), pills con contraste visual y scrollbars invisibles (`.no-scrollbar`).
  - **Ficha de Producto (`/productos/[slug]`):**
    - Jerarquía mobile reordenada con CSS Flexbox order para priorizar la acción comercial:
      `Fotografía / Galería ↓ Categoría ↓ Nombre ↓ Precio ↓ CTA WhatsApp (min-h 48px) ↓ Descripción ↓ Especificaciones Técnicas (Medidas / Material / Acabados) ↓ Piezas Relacionadas`.
    - Galería mobile táctil con soporte nativo de gestos swipe (`onTouchStart`/`onTouchEnd`), contador de diapositivas (`1 / 4`) y miniaturas touch-friendly (>=44x44px) sin dependencias externas pesadas.
  - **Botón Flotante de WhatsApp:**
    - Integración con safe areas de iPhone (`bottom-[max(1.25rem,calc(env(safe-area-inset-bottom,0px)+0.75rem))]`).
    - Tamaño táctil ergonómico (>=44px), sombra suave y posicionamiento no invasivo (`right-4 sm:right-6`).
  - **Footer:**
    - Reorganización de las 4 columnas apiladas de desktop en una estructura editorial mobile compacta: Manifiesto a ancho completo, subgrilla de 2 columnas para Colección y Contacto, y Ubicación debajo, con enlaces de altura táctil cómoda (min-h 36-44px).
  - **Global & Accesibilidad:**
    - `globals.css` configurado con `overflow-x: clip` en html/body para eliminar scrolls horizontales accidentales.
    - `touch-action: manipulation` para suprimir el retardo de 300ms en navegadores móviles.
    - Soporte de `prefers-reduced-motion: reduce`.
    - Verificación rigurosa en viewports 320px, 360px, 375px, 390px, 430px y 768px, y comprobación de regresiones en desktop (1280px+).

- **Etapa 9: Preparación para Static Export y Despliegue en Cloudflare Pages** *(COMPLETADA)*
  - `next.config.ts` configurado con `output: "export"` e `images: { unoptimized: true }`.
  - Migración del filtrado dinámico de `/productos` a `CatalogView` cliente envuelto en `<Suspense>` con fallback estático completo (100% amigable con SEO y compatible con Static Export sin requerir servidor Node.js).
  - Todas las 11 rutas pre-renderizadas como HTML estático en `/out` (`index.html`, `404.html`, `productos.html`, y las 7 fichas en `productos/[slug].html`).
  - Verificación estricta de `.gitignore` para prevenir subida de `.next`, `out`, `node_modules` o archivos de configuración local.
  - Validación completa con cero errores en `tsc --noEmit`, `npm run lint` y `npm run build`.

---

## 7. Próxima Etapa: Integración de Identidad, Catálogo y Contenido Real

Una vez provistos los activos definitivos por el cliente/negocio, se llevará a cabo una pasada integral de sustitución:

1. **Identidad de Marca:** Definición final del nombre comercial, logotipo vectorial/isotipo en `/public/brand/` y favicon.
2. **Canales Oficiales:** Asignación del número de WhatsApp definitivo y cuentas oficiales de contacto en `src/config/site.ts`.
3. **Catálogo Definitivo:** Reemplazo de `MOCK_PRODUCTS` por los productos reales con sus medidas exactas, materiales auténticos y precios fijados.
4. **Fotografía en Alta Resolución:** Carga de las fotografías profesionales en `/public/products/[slug]/` en formato WebP optimizado.
5. **Categorías Finales:** Ajuste de la lista de categorías oficiales del negocio.
