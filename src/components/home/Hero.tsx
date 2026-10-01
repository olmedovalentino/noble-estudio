import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] md:min-h-screen flex items-end pb-12 sm:pb-16 md:pb-24 pt-24 sm:pt-32 overflow-hidden bg-[#EFECE6]">
      {/* Fondo fotográfico arquitectónico */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/products/espejo-rectangular-petiribi-01.jpg"
          alt="Atmósfera de espacio contemporáneo con mobiliario de diseño"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-95 opacity-80"
        />
        {/* Degradado sutil para legibilidad editorial */}
        <div className="absolute inset-0 bg-linear-to-t from-[#141413]/85 via-[#141413]/40 to-[#141413]/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="max-w-3xl space-y-5 sm:space-y-6 text-[#FBFBFA]">
          <div className="space-y-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] sm:tracking-[0.3em] text-[#E8E5DF] font-light block">
              {siteConfig.name} · Edición 2026
            </span>
            <h1 className="text-[32px] sm:text-5xl md:text-7xl font-serif font-light tracking-tight leading-[1.12] sm:leading-[1.08] text-balance">
              La arquitectura del silencio y la nobleza del detalle.
            </h1>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-[#D4D1CA] font-light max-w-xl leading-relaxed">
            Mobiliario contemporáneo de fabricación propia. Formas puras,
            maderas macizas estacionadas y proporciones pensadas para habitar
            el espacio con distinción.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-8">
            <Link
              href="/productos"
              className="inline-flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.2em] bg-[#FBFBFA] text-[#141413] px-8 py-4 min-h-[48px] hover:bg-[#E8E5DF] transition-all duration-300 font-medium text-center"
            >
              <span>Explorar Colección</span>
              <span>→</span>
            </Link>

            <Link
              href="/#filosofia"
              className="inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.18em] text-[#FBFBFA] hover:text-[#E8E5DF] transition-colors border-b border-[#FBFBFA]/60 pb-1 py-2 sm:py-0 text-center"
            >
              <span>Nuestra Filosofía de Taller</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
