import type { Metadata } from "next";
import { getCategories, getProducts, getProductsByCategory } from "@/data";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { getGeneralWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Catálogo de Colección",
  description:
    "Catálogo completo de muebles contemporáneos de fabricación propia. Espejos, mesas, banquetas y recibidores de diseño.",
};

interface ProductosPageProps {
  searchParams: Promise<{ categoria?: string }>;
}

export default async function ProductosPage({ searchParams }: ProductosPageProps) {
  const params = await searchParams;
  const activeCategorySlug = params.categoria;

  const [categories, products] = await Promise.all([
    getCategories(),
    activeCategorySlug
      ? getProductsByCategory(activeCategorySlug)
      : getProducts(),
  ]);

  const activeCategory = categories.find((c) => c.slug === activeCategorySlug);

  return (
    <div className="pt-24 sm:pt-32 pb-16 md:pb-36 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-8 sm:space-y-12">
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
            {products.length} {products.length === 1 ? "pieza" : "piezas"}
          </span>
        </div>
      </div>

      {/* Grilla de Productos */}
      <ProductGrid
        products={products}
        emptyMessage={`No hay productos disponibles actualmente en la categoría "${activeCategory?.name ?? activeCategorySlug}".`}
      />

      {/* Bloque Inferior: Consulta por Medidas Especiales */}
      <div className="mt-16 md:mt-24 p-6 sm:p-8 md:p-12 bg-[#F5F4F0] border border-[#E8E5DF] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#7E7A73] font-medium block">
            Fabricación Especial
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-[#141413]">
            ¿Buscás dimensiones o materiales específicos?
          </h3>
          <p className="text-xs md:text-sm text-[#7E7A73] font-light leading-relaxed">
            Podemos producir cualquiera de los modelos de este catálogo adaptado a
            las medidas exactas de tu ambiente o con otra madera noble de nuestra
            reserva.
          </p>
        </div>

        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto text-center justify-center shrink-0 text-xs uppercase tracking-[0.2em] bg-[#141413] text-[#FBFBFA] px-8 py-4 min-h-[48px] hover:bg-[#2A2826] transition-colors"
        >
          Consultar por medidas especiales →
        </a>
      </div>
    </div>
  );
}
