import { getCategories } from "@/data";
import { Hero } from "@/components/home/Hero";
import { EditorialIntro } from "@/components/home/EditorialIntro";
import { CategoryBespokeGrid } from "@/components/home/CategoryBespokeGrid";
import { AtmosphereBreak } from "@/components/home/AtmosphereBreak";

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <div className="flex flex-col">
      {/* 1. Hero Principal */}
      <Hero />

      {/* 2. Manifiesto & Declaración Editorial */}
      <EditorialIntro />

      {/* 3. Tipologías & Familias de Mobiliario */}
      <CategoryBespokeGrid categories={categories} />

      {/* 4. Quiebre de Atmósfera Inmersivo */}
      <AtmosphereBreak />
    </div>
  );
}
