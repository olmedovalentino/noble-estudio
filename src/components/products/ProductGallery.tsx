"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductImage } from "@/types";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-4/5 w-full bg-[#F3F1EC] flex items-center justify-center">
        <span className="text-xs text-[#7E7A73]">Sin imagen disponible</span>
      </div>
    );
  }

  const currentImage = images[selectedIndex] ?? images[0];

  return (
    <div className="space-y-4">
      {/* Contenedor Fotográfico Principal */}
      <div className="relative aspect-4/5 w-full overflow-hidden bg-[#F3F1EC]">
        <Image
          src={currentImage.src}
          alt={currentImage.alt || `${productName} - Vista ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-center transition-all duration-500 ease-out"
        />

        {/* Indicador sutil de imagen en móvil */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 md:hidden bg-[#141413]/70 backdrop-blur-xs text-[#FBFBFA] px-2.5 py-1 text-[10px] tracking-widest font-mono">
            {selectedIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Miniaturas de Navegación Editorial */}
      {images.length > 1 && (
        <div
          role="tablist"
          aria-label="Vistas fotográficas del producto"
          className="grid grid-cols-4 sm:grid-cols-5 gap-3 pt-1"
        >
          {images.map((image, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={image.src + index}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`Ver foto ${index + 1} de ${images.length} para ${productName}`}
                onClick={() => setSelectedIndex(index)}
                className={`relative aspect-4/5 w-full overflow-hidden bg-[#F3F1EC] transition-all duration-200 cursor-pointer focus:outline-hidden ${
                  isSelected
                    ? "ring-1 ring-[#141413] opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt || `Miniatura ${index + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
