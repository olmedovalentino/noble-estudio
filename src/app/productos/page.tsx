import type { Metadata } from "next";
import { Suspense } from "react";
import { getCategories, getProducts } from "@/data";
import { CatalogView } from "@/components/products/CatalogView";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { siteConfig } from "@/config/site";
import { Category, Product } from "@/types";

export const metadata: Metadata = {
  title: "Catálogo de Colección",
  description:
    "Catálogo completo de muebles contemporáneos de fabricación propia. Espejos, mesas, banquetas y recibidores de diseño.",
  alternates: {
    canonical: `${siteConfig.url}/productos`,
  },
};

function CatalogFallback({
  initialProducts,
  categories,
}: {
  initialProducts: Product[];
  categories: Category[];
}) {
  return (
    <>
      <div className="space-y-3 sm:space-y-4 max-w-3xl">
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#7E7A73] font-medium block">
          Colección Permanente
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#141413] tracking-tight font-normal leading-[1.1]">
          Catálogo de Mobiliario
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-[#7E7A73] font-light leading-relaxed">
          Piezas concebidas con maderas nobles estacionadas, ensambles de alta precisión y acabados táctiles mate. Seleccione una tipología para filtrar el catálogo.
        </p>
      </div>

      <div className="border-y border-[#E8E5DF] py-2.5 sm:py-3 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        <CategoryFilter categories={categories} />
        <div className="flex items-center justify-between md:justify-end border-t md:border-t-0 border-[#E8E5DF]/60 pt-2 md:pt-0">
          <span className="text-[11px] uppercase tracking-[0.16em] text-[#7E7A73] shrink-0 font-medium">
            {initialProducts.length} {initialProducts.length === 1 ? "pieza" : "piezas"}
          </span>
        </div>
      </div>

      <ProductGrid
        products={[
          ...initialProducts.filter((p) => p.images && p.images.length > 0),
          ...initialProducts.filter((p) => !p.images || p.images.length === 0),
        ]}
      />
    </>
  );
}

export default async function ProductosPage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <div className="pt-24 sm:pt-32 pb-16 md:pb-36 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-8 sm:space-y-12">
      <Suspense
        fallback={
          <CatalogFallback
            initialProducts={products}
            categories={categories}
          />
        }
      >
        <CatalogView initialProducts={products} categories={categories} />
      </Suspense>
    </div>
  );
}
