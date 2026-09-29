import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types";

interface CategoryBespokeGridProps {
  categories: Category[];
}

export function CategoryBespokeGrid({ categories }: CategoryBespokeGridProps) {
  // Asignamos una imagen representativa para cada categoría (usando los assets existentes)
  const categoryImages: Record<string, string> = {
    mesas: "/products/mesa-comedor-paraiso/1.svg",
    sillas: "/products/silla-nordica-petiribi/1.svg",
    "racks-tv": "/products/rack-tv-vester-160/1.svg",
    comodas: "/products/comoda-escandinava-6-cajones/1.svg",
    "mesas-de-luz": "/products/mesa-de-luz-flotante-alva/1.svg",
    otros: "/products/estanteria-modular-cubos-zen/1.svg",
  };

  return (
    <section className="py-20 md:py-28 bg-[#F5F4F0] border-y border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-14">
        {/* Encabezado de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#7E7A73] font-medium block">
              02 / Tipologías
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#141413] tracking-tight font-normal">
              Familias de Mobiliario
            </h2>
          </div>
          <Link
            href="/productos"
            className="text-xs uppercase tracking-[0.2em] text-[#141413] border-b border-[#141413] pb-1 hover:text-[#7E7A73] hover:border-[#7E7A73] transition-colors self-start md:self-auto"
          >
            Ver catálogo completo →
          </Link>
        </div>

        {/* Grilla Asimétrica Editorial */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {categories.map((cat, idx) => {
            // Asimetría visual: las primeras dos ocupan 7 y 5 columnas, las siguientes 4 cada una
            const colSpan =
              idx === 0
                ? "md:col-span-7"
                : idx === 1
                ? "md:col-span-5"
                : idx === 2
                ? "md:col-span-4"
                : idx === 3
                ? "md:col-span-4"
                : idx === 4
                ? "md:col-span-4"
                : "md:col-span-12";

            const aspectClass =
              idx === 0
                ? "aspect-16/10"
                : idx === 1
                ? "aspect-4/3 md:aspect-auto md:h-full"
                : idx === 5
                ? "aspect-21/9"
                : "aspect-4/3";

            return (
              <Link
                key={cat.id}
                href={`/productos?categoria=${cat.slug}`}
                className={`group relative overflow-hidden bg-[#EAE8E2] ${colSpan} flex flex-col justify-end p-6 md:p-8 min-h-[260px] md:min-h-[320px]`}
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
                <div className="absolute inset-0 bg-linear-to-t from-[#141413]/70 via-[#141413]/20 to-transparent transition-opacity duration-300 group-hover:from-[#141413]/80" />

                {/* Contenido textual flotante */}
                <div className="relative z-10 space-y-1 text-[#FBFBFA]">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#E8E5DF] font-light block">
                    Colección
                  </span>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#FBFBFA]">
                      {cat.name}
                    </h3>
                    <span className="text-xs text-[#E8E5DF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
