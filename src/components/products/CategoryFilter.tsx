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

  return (
    <nav
      aria-label="Filtro por categoría"
      className="flex items-center space-x-2 md:space-x-4 overflow-x-auto pb-4 pt-2 no-scrollbar"
    >
      <Link
        href="/productos"
        className={`shrink-0 text-xs uppercase tracking-[0.18em] px-4 py-2 transition-all ${
          isAllActive
            ? "bg-[#141413] text-[#FBFBFA]"
            : "text-[#7E7A73] hover:text-[#141413] hover:bg-[#F3F1EC]"
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
            className={`shrink-0 text-xs uppercase tracking-[0.18em] px-4 py-2 transition-all ${
              isActive
                ? "bg-[#141413] text-[#FBFBFA]"
                : "text-[#7E7A73] hover:text-[#141413] hover:bg-[#F3F1EC]"
            }`}
          >
            {cat.name}
          </Link>
        );
      })}
    </nav>
  );
}
