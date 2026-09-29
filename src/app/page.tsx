import Link from "next/link";
import { getCategories, getFeaturedProducts } from "@/data";
import { Hero } from "@/components/home/Hero";
import { EditorialIntro } from "@/components/home/EditorialIntro";
import { CategoryBespokeGrid } from "@/components/home/CategoryBespokeGrid";
import { CraftsmanshipSection } from "@/components/home/CraftsmanshipSection";
import { AtmosphereBreak } from "@/components/home/AtmosphereBreak";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionTitle } from "@/components/common/SectionTitle";

export default async function HomePage() {
  const [categories, featuredProducts] = await Promise.all([
    getCategories(),
    getFeaturedProducts(),
  ]);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Principal */}
      <Hero />

      {/* 2. Manifiesto & Declaración Editorial */}
      <EditorialIntro />

      {/* 3. Tipologías & Categorías Asimétricas */}
      <CategoryBespokeGrid categories={categories} />

      {/* 4. Productos Destacados */}
      <section className="py-24 md:py-36 max-w-7xl mx-auto px-6 md:px-12 w-full space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8E5DF] pb-8">
          <SectionTitle
            tag="03 / Selección de Autor"
            title="Piezas Destacadas"
            description="Mobiliario insignia de nuestra colección, seleccionado por su balance formal y pureza de líneas."
          />
          <Link
            href="/productos"
            className="text-xs uppercase tracking-[0.2em] text-[#141413] border-b border-[#141413] pb-1 hover:text-[#7E7A73] hover:border-[#7E7A73] transition-colors shrink-0 self-start md:self-auto"
          >
            Explorar todo el catálogo ({featuredProducts.length} destacadas) →
          </Link>
        </div>

        {/* Grilla editorial de productos */}
        <ProductGrid products={featuredProducts} />
      </section>

      {/* 5. Taller, Materiales y Proyectos Especiales */}
      <CraftsmanshipSection />

      {/* 6. Quiebre de Atmósfera Inmersivo */}
      <AtmosphereBreak />

      {/* 7. Consulta Directa por WhatsApp y Showroom */}
      <ConsultationCTA />
    </div>
  );
}
