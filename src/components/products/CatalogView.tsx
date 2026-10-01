"use client";

import { useSearchParams } from "next/navigation";
import { Product, Category } from "@/types";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CategoryFilter } from "@/components/products/CategoryFilter";

interface CatalogViewProps {
  initialProducts: Product[];
  categories: Category[];
}

export function CatalogView({ initialProducts, categories }: CatalogViewProps) {
  const searchParams = useSearchParams();
  const activeCategorySlug = searchParams.get("categoria") ?? undefined;

  const activeCategory = categories.find((c) => c.slug === activeCategorySlug);
  const filteredProducts = activeCategorySlug
    ? initialProducts.filter((p) => p.category === activeCategorySlug)
    : initialProducts;

  return (
    <>
      {/* Cabecera Editorial del Catálogo */}
      <div className="space-y-3 sm:space-y-4 max-w-3xl">
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#7E7A73] font-medium block">
          Colección Permanente
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#141413] tracking-tight font-normal leading-[1.1]">
          {activeCategory ? activeCategory.name : "Catálogo de Mobiliario"}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-[#7E7A73] font-light leading-relaxed">
          {activeCategory
            ? activeCategory.description
            : "Piezas concebidas con maderas nobles estacionadas, ensambles de alta precisión y acabados táctiles mate. Seleccione una tipología para filtrar el catálogo."}
        </p>
      </div>

      {/* Barra de Filtros por Categoría */}
      <div className="border-y border-[#E8E5DF] py-2.5 sm:py-3 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategorySlug}
        />
        <div className="flex items-center justify-between md:justify-end border-t md:border-t-0 border-[#E8E5DF]/60 pt-2 md:pt-0">
          <span className="text-[11px] uppercase tracking-[0.16em] text-[#7E7A73] shrink-0 font-medium">
            {filteredProducts.length} {filteredProducts.length === 1 ? "pieza" : "piezas"}
          </span>
        </div>
      </div>

      {/* Grilla de Productos */}
      <ProductGrid
        products={filteredProducts}
        emptyMessage={`No hay productos disponibles actualmente en la categoría "${activeCategory?.name ?? activeCategorySlug}".`}
      />
    </>
  );
}
