import Link from "next/link";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  className?: string;
  emptyMessage?: string;
  showResetFilter?: boolean;
}

export function ProductGrid({
  products,
  className = "",
  emptyMessage = "No se encontraron piezas en esta selección.",
  showResetFilter = false,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center space-y-4">
        <p className="text-sm font-serif text-[#7E7A73]">{emptyMessage}</p>
        {showResetFilter && (
          <div className="pt-2">
            <Link
              href="/productos"
              className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#141413] border-b border-[#141413] pb-0.5 hover:text-[#7E7A73] hover:border-[#7E7A73] transition-colors"
            >
              Ver todas las piezas →
            </Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-6 sm:gap-y-14 lg:gap-x-8 lg:gap-y-16 ${className}`}
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={index < 3}
        />
      ))}
    </div>
  );
}
