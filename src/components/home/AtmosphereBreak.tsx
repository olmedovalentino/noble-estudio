import Link from "next/link";
import Image from "next/image";

export function AtmosphereBreak() {
  return (
    <section className="relative py-16 sm:py-28 md:py-40 bg-[#161514] text-[#FBFBFA] overflow-hidden">
      {/* Imagen de fondo en gran formato */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/products/espejo-rectangular-petiribi-03.jpg"
          alt="Atmósfera arquitectónica con muebles de autor integrados al espacio"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity filter blur-[0.5px]"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-[#161514]/60 to-[#161514]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-center space-y-6 sm:space-y-8">
        <span className="text-[10px] uppercase tracking-[0.32em] text-[#A8A49D] font-light block">
          Atmósfera & Confort
        </span>

        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#FBFBFA] leading-[1.14] text-balance">
          Muebles que transforman la casa en un refugio de serenidad y orden.
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-[#B0ACA5] font-light max-w-2xl mx-auto leading-relaxed">
          Diseñamos pensando en la armonía entre volúmenes, texturas y luces
          naturales. Una invitación a habitar sin prisa.
        </p>

        <div className="pt-2 sm:pt-4">
          <Link
            href="/productos"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.22em] text-[#FBFBFA] border border-[#A8A49D]/50 px-8 py-4 min-h-[48px] hover:bg-[#FBFBFA] hover:text-[#141413] transition-all duration-300 font-medium text-center"
          >
            <span>Descubrir todas las piezas</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
