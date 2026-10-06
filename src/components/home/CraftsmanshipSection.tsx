import Image from "next/image";
import { buildWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const TALLER_IMAGE = {
  src: "/images/editorial/taller.jpg",
  alt: "Detalle de medición y trazado sobre banco de trabajo",
  objectPosition: "object-center",
} as const;

interface CraftsmanshipSectionProps {
  titleAs?: "h1" | "h2";
}

export function CraftsmanshipSection({ titleAs = "h2" }: CraftsmanshipSectionProps) {
  const HeadingTag = titleAs;

  return (
    <section id="filosofia" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Imagen Editorial de Detalle / Taller */}
        <div className="lg:col-span-6 relative aspect-4/5 w-full bg-[#EAE8E2] overflow-hidden">
          <Image
            src={TALLER_IMAGE.src}
            alt={TALLER_IMAGE.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover ${TALLER_IMAGE.objectPosition}`}
          />
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#FBFBFA]/90 backdrop-blur-xs text-[#141413]">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#7E7A73]">
              Diseño & Proporción
            </p>
            <p className="text-xs font-serif pt-1 text-[#2A2826]">
              Cuidado en los detalles y preservación de texturas nobles.
            </p>
          </div>
        </div>

        {/* Narrativa Editorial */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#7E7A73] font-medium block">
              Filosofía de Diseño
            </span>
            <HeadingTag className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#141413] tracking-tight font-normal leading-[1.14]">
              Líneas puras, proporción y atención al detalle.
            </HeadingTag>
          </div>

          <p className="text-sm md:text-base text-[#7E7A73] font-light leading-relaxed">
            Buscamos el equilibrio entre la sobriedad contemporánea y el carácter
            de los materiales nobles. Cada pieza está concebida para habitar los
            ambientes con armonía, funcionalidad y presencia visual.
          </p>

          {/* Tres Pilares Arquitectónicos Tipográficos */}
          <div className="space-y-6 pt-2 border-t border-[#E8E5DF]">
            <div className="flex items-start space-x-6">
              <span className="text-xs font-serif text-[#7E7A73] pt-0.5">01</span>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-[0.16em] text-[#141413] font-semibold">
                  Materialidad Expresiva
                </h4>
                <p className="text-xs text-[#7E7A73] font-light leading-relaxed">
                  Maderas seleccionadas con vetas de carácter y estructuras sólidas
                  pensadas para el uso cotidiano.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <span className="text-xs font-serif text-[#7E7A73] pt-0.5">02</span>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-[0.16em] text-[#141413] font-semibold">
                  Opciones y Medidas
                </h4>
                <p className="text-xs text-[#7E7A73] font-light leading-relaxed">
                  Posibilidad de consultar adaptaciones de dimensiones y acabados
                  según las necesidades particulares del espacio.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <span className="text-xs font-serif text-[#7E7A73] pt-0.5">03</span>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-[0.16em] text-[#141413] font-semibold">
                  Terminaciones Mate
                </h4>
                <p className="text-xs text-[#7E7A73] font-light leading-relaxed">
                  Tratamientos protectores satinados que cuidan la superficie
                  preservando la calidez táctil del material.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 sm:pt-4">
            <a
              href={buildWhatsAppUrl(
                siteConfig.contact.whatsapp.phone,
                "Hola, me gustaría consultar por opciones a medida desde la página de Taller."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.2em] bg-[#141413] text-[#FBFBFA] px-8 py-4 min-h-[48px] hover:bg-[#2A2826] transition-colors text-center"
            >
              <span>Consultar por opciones a medida</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
