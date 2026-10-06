import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CATEGORIES } from "@/data/categories";
import { getGeneralWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-[#141413] text-[#FBFBFA] pt-14 md:pt-20 pb-12 border-t border-[#2A2826]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Grilla principal editorial */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 md:pb-16 border-b border-[#2A2826]">
          {/* Columna Marca & Manifiesto */}
          <div className="md:col-span-5 space-y-4 md:space-y-6">
            <span className="text-sm tracking-[0.24em] uppercase font-semibold text-[#FBFBFA] block">
              {siteConfig.name}
            </span>
            <p className="text-sm text-[#A8A49D] font-light leading-relaxed max-w-sm">
              Mobiliario contemporáneo concebido bajo principios de sobriedad
              arquitectónica, líneas limpias y diseño perdurable.
            </p>
            <div className="pt-1">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[44px] text-xs uppercase tracking-[0.18em] text-[#FBFBFA] border-b border-[#FBFBFA] hover:text-[#A8A49D] hover:border-[#A8A49D] transition-colors"
              >
                <span>Consultar por WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Subgrilla de 2 columnas para mobile: Colección y Contacto */}
          <div className="grid grid-cols-2 gap-8 md:contents">
            {/* Columna Colecciones */}
            <div className="md:col-span-3 space-y-3 md:space-y-4">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#7E7A73]">
                Colección
              </h4>
              <ul className="space-y-1 md:space-y-2">
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/productos?categoria=${cat.slug}`}
                      className="inline-block py-1 text-xs text-[#A8A49D] hover:text-[#FBFBFA] transition-colors tracking-wide"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna Contacto */}
            <div className="md:col-span-2 space-y-3 md:space-y-4">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#7E7A73]">
                Contacto
              </h4>
              <ul className="space-y-1 md:space-y-2 text-xs">
                <li>
                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-1 text-[#A8A49D] hover:text-[#FBFBFA] transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-block py-1 text-[#A8A49D] hover:text-[#FBFBFA] transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-1 text-[#A8A49D] hover:text-[#FBFBFA] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna Ubicación */}
          <div className="md:col-span-2 space-y-3 md:space-y-4 pt-2 md:pt-0">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#7E7A73]">
              Ubicación
            </h4>
            <div className="text-xs text-[#A8A49D] leading-relaxed">
              <p>
                {siteConfig.contact.address.fullLocation}
              </p>
            </div>
          </div>
        </div>

        {/* Fila inferior: copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-[11px] text-[#7E7A73]">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
