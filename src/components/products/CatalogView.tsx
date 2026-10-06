"use client";

import { useSearchParams } from "next/navigation";
import { Product, Category } from "@/types";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/utils";

interface CatalogViewProps {
  initialProducts: Product[];
  categories: Category[];
}

export function CatalogView({ initialProducts, categories }: CatalogViewProps) {
  const searchParams = useSearchParams();
  const activeCategorySlug = searchParams.get("categoria") ?? undefined;
  const isCustom = activeCategorySlug === "a-medida";

  const activeCategory = categories.find((c) => c.slug === activeCategorySlug);
  const filteredProducts = isCustom
    ? []
    : activeCategorySlug
    ? initialProducts.filter((p) => p.category === activeCategorySlug)
    : initialProducts;

  // Ordenación editorial: productos con fotos primero, PRÓXIMAMENTE al final.
  // Partición estable que preserva el orden relativo dentro de cada grupo sin mutar el array.
  const displayProducts = isCustom
    ? []
    : [
        ...filteredProducts.filter((p) => p.images && p.images.length > 0),
        ...filteredProducts.filter((p) => !p.images || p.images.length === 0),
      ];

  return (
    <>
      {/* Cabecera Editorial del Catálogo */}
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

      {/* Barra de Filtros por Categoría */}
      <div className="border-y border-[#E8E5DF] py-2.5 sm:py-3 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategorySlug}
        />
        {!isCustom && (
          <div className="flex items-center justify-between md:justify-end border-t md:border-t-0 border-[#E8E5DF]/60 pt-2 md:pt-0">
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#7E7A73] shrink-0 font-medium">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "pieza" : "piezas"}
            </span>
          </div>
        )}
      </div>

      {/* Presentación Editorial A Medida O Grilla de Productos */}
      {isCustom ? (
        <div className="py-12 sm:py-20 md:py-28 max-w-3xl space-y-6 sm:space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#7E7A73] font-medium block">
              Piezas a Medida
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#141413] tracking-tight font-normal leading-[1.15] text-balance">
              Diseñadas para tu espacio.
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#7E7A73] font-light leading-relaxed">
            Adaptamos los modelos de nuestra colección a las dimensiones de tu
            ambiente y evaluamos alternativas de material y terminación para cada
            proyecto.
          </p>

          <div className="pt-4 border-t border-[#E8E5DF]/70">
            <a
              href={buildWhatsAppUrl(
                siteConfig.contact.whatsapp.phone,
                "Hola, me gustaría consultar por un proyecto de mueble a medida."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.2em] bg-[#141413] text-[#FBFBFA] px-8 py-4 min-h-[48px] hover:bg-[#2A2826] transition-colors"
            >
              <span>Consultar Proyecto</span>
              <span>→</span>
            </a>
          </div>
        </div>
      ) : (
        <ProductGrid
          products={displayProducts}
          emptyMessage={`No hay productos disponibles actualmente en la categoría "${activeCategory?.name ?? activeCategorySlug}".`}
          showResetFilter={Boolean(activeCategorySlug && !isCustom && filteredProducts.length === 0)}
        />
      )}
    </>
  );
}
