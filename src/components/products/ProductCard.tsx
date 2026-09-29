import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const mainImage = product.images.find((img) => img.isMain) ?? product.images[0];

  return (
    <article className="group flex flex-col">
      <Link
        href={`/productos/${product.slug}`}
        className="block focus:outline-hidden"
        aria-label={`Ver detalle de ${product.name}`}
      >
        {/* Contenedor de Fotografía Editorial */}
        <div className="relative aspect-4/5 w-full overflow-hidden bg-[#F3F1EC]">
          {mainImage && (
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />
          )}

          {/* Sutil indicador de disponibilidad / artesanía */}
          {product.manufacturingDays && (
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[10px] uppercase tracking-[0.16em] bg-[#FBFBFA]/90 backdrop-blur-xs text-[#141413] px-2.5 py-1">
                Fabricación: ~{product.manufacturingDays} días
              </span>
            </div>
          )}
        </div>

        {/* Ficha Tipográfica Inferior */}
        <div className="pt-4 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#7E7A73]">
              {product.category}
            </span>
            <span className="text-xs font-medium tracking-tight text-[#141413]">
              {formatPrice(product.price)}
            </span>
          </div>

          <h3 className="text-base font-serif text-[#141413] group-hover:text-[#7E7A73] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-[#7E7A73] font-light line-clamp-1 pt-0.5">
            {product.dimensions.formatted ?? `${product.dimensions.width}x${product.dimensions.depth} cm`} · {product.material}
          </p>
        </div>
      </Link>
    </article>
  );
}
