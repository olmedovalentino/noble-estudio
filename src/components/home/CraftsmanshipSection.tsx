import Image from "next/image";
import { getGeneralWhatsAppUrl } from "@/lib/utils";

export function CraftsmanshipSection() {
  return (
    <section id="filosofia" className="py-24 md:py-36 max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Imagen Editorial de Detalle / Taller */}
        <div className="lg:col-span-6 relative aspect-4/5 w-full bg-[#EAE8E2] overflow-hidden">
          <Image
            src="/products/mesa-comedor-paraiso/2.svg"
            alt="Detalle de veta de madera natural y uniones artesanales en el taller"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#FBFBFA]/90 backdrop-blur-xs text-[#141413]">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#7E7A73]">
              Atelier & Manufactura
            </p>
            <p className="text-xs font-serif pt-1 text-[#2A2826]">
              Ajuste milimétrico de espigas y preservación del poro abierto.
            </p>
          </div>
        </div>

        {/* Narrativa Editorial */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#7E7A73] font-medium block">
              03 / Manufactura Propia
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#141413] tracking-tight font-normal leading-[1.14]">
              El oficio del ebanista llevado a la escala contemporánea.
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#7E7A73] font-light leading-relaxed">
            Cada mueble es producido de principio a fin en nuestras
            instalaciones. No tercerizamos los ensambles estructurales ni el
            laqueado final: controlamos cada fase para garantizar piezas
            concebidas para perdurar.
          </p>

          {/* Tres Pilares Arquitectónicos Tipográficos */}
          <div className="space-y-6 pt-2 border-t border-[#E8E5DF]">
            <div className="flex items-start space-x-6">
              <span className="text-xs font-serif text-[#7E7A73] pt-0.5">01</span>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-[0.16em] text-[#141413] font-semibold">
                  Maderas Nobles Seleccionadas
                </h4>
                <p className="text-xs text-[#7E7A73] font-light leading-relaxed">
                  Paraíso, Petiribí, Guayubira y Roble secados a horno con
                  niveles de humedad estabilizados.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <span className="text-xs font-serif text-[#7E7A73] pt-0.5">02</span>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-[0.16em] text-[#141413] font-semibold">
                  Proyectos a Medida
                </h4>
                <p className="text-xs text-[#7E7A73] font-light leading-relaxed">
                  Adaptamos dimensiones, maderas y acabados a las necesidades
                  particulares de tu proyecto o plano de arquitectura.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <span className="text-xs font-serif text-[#7E7A73] pt-0.5">03</span>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-[0.16em] text-[#141413] font-semibold">
                  Terminaciones de Alto Tránsito
                </h4>
                <p className="text-xs text-[#7E7A73] font-light leading-relaxed">
                  Lacas poliuretánicas al agua y ceras satinadas que repelen
                  manchas sin alterar la calidez táctil de la fibra viva.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] bg-[#141413] text-[#FBFBFA] px-8 py-4 hover:bg-[#2A2826] transition-colors"
            >
              <span>Consultar por piezas a medida</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
