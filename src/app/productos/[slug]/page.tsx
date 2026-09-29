import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProducts, getProductsByCategory } from "@/data";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductGrid } from "@/components/products/ProductGrid";
import { siteConfig } from "@/config/site";
import { formatPrice, getProductWhatsAppUrl } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Pieza no encontrada",
    };
  }

  const primaryImage = product.images.find((img) => img.isMain) ?? product.images[0];

  return {
    title: `${product.name} | ${siteConfig.name}`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.shortDescription,
      url: `${siteConfig.url}/productos/${product.slug}`,
      siteName: siteConfig.name,
      locale: siteConfig.seo.locale,
      type: "website",
      images: primaryImage
        ? [
            {
              url: primaryImage.src,
              alt: primaryImage.alt,
            },
          ]
        : [],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Productos relacionados: misma categoría primero, excluyendo el actual
  const sameCategoryProducts = await getProductsByCategory(product.category);
  let relatedProducts = sameCategoryProducts.filter((p) => p.slug !== product.slug);

  if (relatedProducts.length < 3) {
    const allProducts = await getProducts();
    const otherProducts = allProducts.filter(
      (p) => p.slug !== product.slug && p.category !== product.category
    );
    relatedProducts = [...relatedProducts, ...otherProducts].slice(0, 3);
  } else {
    relatedProducts = relatedProducts.slice(0, 3);
  }

  const whatsappUrl = getProductWhatsAppUrl(product.name);

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 max-w-7xl mx-auto px-6 md:px-12 space-y-20 md:space-y-32">
      {/* 1. Breadcrumb Discreto */}
      <nav aria-label="Ruta de navegación" className="text-[11px] uppercase tracking-[0.2em] text-[#7E7A73]">
        <ol className="flex items-center space-x-2 flex-wrap">
          <li>
            <Link href="/" className="hover:text-[#141413] transition-colors">
              Inicio
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#B0ACA5]">
            /
          </li>
          <li>
            <Link href="/productos" className="hover:text-[#141413] transition-colors">
              Colección
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#B0ACA5]">
            /
          </li>
          <li>
            <Link
              href={`/productos?categoria=${product.category}`}
              className="hover:text-[#141413] transition-colors"
            >
              {product.category}
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#B0ACA5]">
            /
          </li>
          <li className="text-[#141413] font-medium" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* 2. Cuerpo Editorial: Galería + Ficha Técnica */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Columna Izquierda: Galería Protagonista */}
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Columna Derecha: Ficha y Jerarquía Tipográfica */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
          {/* Encabezado del Mueble */}
          <div className="space-y-3 border-b border-[#E8E5DF] pb-6">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#7E7A73] font-medium block">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#141413] tracking-tight font-normal leading-[1.12]">
              {product.name}
            </h1>
            <div className="flex items-baseline space-x-4 pt-1">
              <span className="text-xl sm:text-2xl font-serif text-[#141413]">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-[#A8A49D] line-through font-light">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Descripción */}
          <div className="space-y-4 text-xs sm:text-sm text-[#7E7A73] font-light leading-relaxed">
            <p>{product.description}</p>
          </div>

          {/* Bloque de Especificaciones Arquitectónicas */}
          <div className="space-y-4 border-t border-[#E8E5DF] pt-6 text-xs">
            {/* Medidas */}
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-[#E8E5DF]/60">
              <span className="uppercase tracking-[0.2em] text-[#7E7A73] font-medium">
                Medidas
              </span>
              <span className="col-span-2 text-[#141413] font-light">
                {product.dimensions.formatted ??
                  `${product.dimensions.width} × ${product.dimensions.depth} × ${product.dimensions.height} cm`}
              </span>
            </div>

            {/* Material */}
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-[#E8E5DF]/60">
              <span className="uppercase tracking-[0.2em] text-[#7E7A73] font-medium">
                Material
              </span>
              <span className="col-span-2 text-[#141413] font-light">
                {product.material}
              </span>
            </div>

            {/* Terminaciones */}
            {product.finishes && product.finishes.length > 0 && (
              <div className="grid grid-cols-3 gap-2 py-2 border-b border-[#E8E5DF]/60">
                <span className="uppercase tracking-[0.2em] text-[#7E7A73] font-medium">
                  Acabados
                </span>
                <span className="col-span-2 text-[#141413] font-light">
                  {product.finishes.join(" · ")}
                </span>
              </div>
            )}

            {/* Detalles / Características */}
            {product.features && product.features.length > 0 && (
              <div className="grid grid-cols-3 gap-2 py-2 border-b border-[#E8E5DF]/60">
                <span className="uppercase tracking-[0.2em] text-[#7E7A73] font-medium">
                  Detalles
                </span>
                <ul className="col-span-2 text-[#141413] font-light space-y-1 list-disc list-inside">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Fabricación y Disponibilidad */}
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-[#E8E5DF]/60">
              <span className="uppercase tracking-[0.2em] text-[#7E7A73] font-medium">
                Plazo
              </span>
              <span className="col-span-2 text-[#141413] font-light">
                {product.manufacturingDays
                  ? `Fabricación artesanal: ~${product.manufacturingDays} días hábiles`
                  : "Entrega inmediata o a coordinar"}
              </span>
            </div>
          </div>

          {/* CTA Principal de Conversión hacia WhatsApp */}
          <div className="pt-4 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-3 bg-[#141413] text-[#FBFBFA] py-4 px-8 text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#2A2826] transition-all duration-300 text-center"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>Consultar por este producto</span>
            </a>

            <p className="text-[11px] text-center text-[#7E7A73] font-light">
              Consultanos por disponibilidad, medidas y opciones.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Productos Relacionados */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-[#E8E5DF] pt-16 md:pt-24 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#7E7A73] font-medium block">
                Selección Complementaria
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#141413] tracking-tight font-normal">
                También puede interesarte
              </h2>
            </div>
            <Link
              href="/productos"
              className="text-xs uppercase tracking-[0.2em] text-[#141413] border-b border-[#141413] pb-1 hover:text-[#7E7A73] hover:border-[#7E7A73] transition-colors self-start md:self-auto"
            >
              Ver toda la colección →
            </Link>
          </div>

          <ProductGrid products={relatedProducts} />
        </section>
      )}
    </div>
  );
}
