import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types";

interface CategoryBespokeGridProps {
  categories: Category[];
}

export function CategoryBespokeGrid({ categories }: CategoryBespokeGridProps) {
  // Asignamos una imagen representativa para cada categoría activa
  const categoryImages: Record<string, string> = {
    espejos: "/images/products/espejo-rectangular-petiribi-01.jpg",
    mesas: "/products/placeholder.svg",
    banquetas: "/products/placeholder.svg",
    recibidores: "/products/placeholder.svg",
  };

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#F5F4F0] border-y border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-14">
        {/* Encabezado de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#7E7A73] font-medium block">
              02 / Tipologías
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#141413] tracking-tight font-normal">
              Familias de Mobiliario
            </h2>
          </div>
          <Link
            href="/productos"
            className="text-xs uppercase tracking-[0.2em] text-[#141413] border-b border-[#141413] pb-1 hover:text-[#7E7A73] hover:border-[#7E7A73] transition-colors self-start md:self-auto min-h-[40px] flex items-center"
          >
            Ver catálogo completo →
          </Link>
        </div>

        {/* Grilla Asimétrica Editorial */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          {categories.map((cat, idx) => {
            // Distribución armónica: fila 1 (7 + 5 cols), fila 2 (6 + 6 cols)
            const colSpan =
              idx === 0
                ? "md:col-span-7"
                : idx === 1
                ? "md:col-span-5"
                : "md:col-span-6";

            const aspectClass =
              idx === 0
                ? "aspect-16/10"
                : idx === 1
                ? "aspect-4/3 md:aspect-auto md:h-full"
                : "aspect-4/3";

            return (
              <Link
                key={cat.id}
                href={`/productos?categoria=${cat.slug}`}
                className={`group relative overflow-hidden bg-[#EAE8E2] ${colSpan} flex flex-col justify-end p-5 sm:p-6 md:p-8 min-h-[200px] sm:min-h-[260px] md:min-h-[320px]`}
              >
                {/* Imagen de fondo */}
                <Image
                  src={categoryImages[cat.slug] ?? "/products/placeholder.svg"}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104 brightness-95 ${aspectClass}`}
                />

                {/* Filtro degradado sutil */}
                <div className="absolute inset-0 bg-linear-to-t from-[#141413]/75 via-[#141413]/25 to-transparent transition-opacity duration-300 group-hover:from-[#141413]/85" />

                {/* Contenido textual flotante */}
                <div className="relative z-10 space-y-1 text-[#FBFBFA]">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#E8E5DF] font-light block">
                    Colección
                  </span>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl sm:text-3xl font-serif text-[#FBFBFA]">
                      {cat.name}
                    </h3>
                    <span className="text-xs text-[#E8E5DF] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      Explorar →
                    </span>
                  </div>
                  <p className="text-xs text-[#D4D1CA] font-light max-w-sm line-clamp-1 pt-1 hidden sm:block">
                    {cat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
