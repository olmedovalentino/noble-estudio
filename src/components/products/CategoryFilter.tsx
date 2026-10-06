import Link from "next/link";
import { Category } from "@/types";

interface CategoryFilterProps {
  categories: Category[];
  activeCategory?: string;
}

export function CategoryFilter({
  categories,
  activeCategory,
}: CategoryFilterProps) {
  const isAllActive = !activeCategory;
  const isCustomActive = activeCategory === "a-medida";

  return (
    <nav
      aria-label="Filtro por categoría"
      className="flex items-center gap-2 sm:gap-2.5 md:gap-3 overflow-x-auto md:overflow-visible py-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
    >
      <Link
        href="/productos"
        className={`shrink-0 text-xs uppercase tracking-[0.16em] px-3.5 py-2 sm:px-4 sm:py-2.5 min-h-[40px] flex items-center transition-all ${
          isAllActive
            ? "bg-[#141413] text-[#FBFBFA]"
            : "text-[#7E7A73] hover:text-[#141413] hover:bg-[#F3F1EC] bg-[#F5F4F0] sm:bg-transparent"
        }`}
      >
        Todas las Piezas
      </Link>

      {categories.map((cat) => {
        const isActive = activeCategory === cat.slug;
        return (
          <Link
            key={cat.id}
            href={`/productos?categoria=${cat.slug}`}
            className={`shrink-0 text-xs uppercase tracking-[0.16em] px-3.5 py-2 sm:px-4 sm:py-2.5 min-h-[40px] flex items-center transition-all ${
              isActive
                ? "bg-[#141413] text-[#FBFBFA]"
                : "text-[#7E7A73] hover:text-[#141413] hover:bg-[#F3F1EC] bg-[#F5F4F0] sm:bg-transparent"
            }`}
          >
            {cat.name}
          </Link>
        );
      })}

      <Link
        href="/productos?categoria=a-medida"
        className={`shrink-0 text-xs uppercase tracking-[0.16em] px-3.5 py-2 sm:px-4 sm:py-2.5 min-h-[40px] flex items-center transition-all ${
          isCustomActive
            ? "bg-[#141413] text-[#FBFBFA]"
            : "text-[#7E7A73] hover:text-[#141413] hover:bg-[#F3F1EC] bg-[#F5F4F0] sm:bg-transparent"
        }`}
      >
        A Medida
      </Link>
    </nav>
  );
}
