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
  const [touchStart, setTouchStart] = useState<number | null>(null);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-4/5 w-full overflow-hidden bg-[#F3F1EC] flex flex-col items-center justify-center p-8 text-center select-none space-y-2">
        <span className="text-xs uppercase tracking-[0.26em] text-[#7E7A73] font-medium">
          Próximamente
        </span>
        <p className="text-[11px] text-[#A8A49D] font-light tracking-wide">
          Fotografías disponibles próximamente.
        </p>
      </div>
    );
  }

  const currentImage = images[selectedIndex] ?? images[0];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 45 && images.length > 1) {
      // Swipe izquierda -> siguiente foto
      setSelectedIndex((prev) => (prev + 1) % images.length);
    } else if (diff < -45 && images.length > 1) {
      // Swipe derecha -> foto anterior
      setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    }
    setTouchStart(null);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Contenedor Fotográfico Principal con soporte de Swipe Táctil */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative aspect-4/5 w-full overflow-hidden bg-[#F3F1EC] select-none touch-pan-y"
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt || `${productName} - Vista ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-center transition-all duration-300 ease-out"
        />

        {/* Indicador sutil de imagen en móvil */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 md:hidden bg-[#141413]/75 backdrop-blur-xs text-[#FBFBFA] px-2.5 py-1 text-[10px] tracking-widest font-mono">
            {selectedIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Miniaturas de Navegación Editorial con área táctil cómoda */}
      {images.length > 1 && (
        <div
          role="tablist"
          aria-label="Vistas fotográficas del producto"
          className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3 pt-0.5"
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
                className={`relative aspect-4/5 w-full overflow-hidden bg-[#F3F1EC] transition-all duration-200 cursor-pointer min-h-[44px] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:ring-offset-2 ${
                  isSelected
                    ? "ring-1.5 ring-[#141413] opacity-100"
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
