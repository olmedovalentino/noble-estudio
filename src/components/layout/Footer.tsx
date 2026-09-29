import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CATEGORIES } from "@/data/categories";
import { getGeneralWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-[#141413] text-[#FBFBFA] pt-20 pb-12 border-t border-[#2A2826]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Grilla principal editorial */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-[#2A2826]">
          {/* Columna Marca & Manifiesto */}
          <div className="md:col-span-5 space-y-6">
            <span className="text-sm tracking-[0.24em] uppercase font-semibold text-[#FBFBFA] block">
              {siteConfig.name}
            </span>
            <p className="text-sm text-[#A8A49D] font-light leading-relaxed max-w-sm">
              Mobiliario contemporáneo concebido bajo principios de sobriedad
              arquitectónica, líneas limpias y diseño perdurable.
            </p>
            <div className="pt-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] text-[#FBFBFA] border-b border-[#FBFBFA] pb-1 hover:text-[#A8A49D] hover:border-[#A8A49D] transition-colors"
              >
                <span>Consultar por WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Columna Colecciones */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#7E7A73]">
              Colección
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/productos"
                  className="text-xs text-[#E8E5DF] hover:text-[#FFFFFF] transition-colors tracking-wide"
                >
                  Ver Catálogo Completo
                </Link>
              </li>
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/productos?categoria=${cat.slug}`}
                    className="text-xs text-[#A8A49D] hover:text-[#FBFBFA] transition-colors tracking-wide"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Ubicación & Horarios */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#7E7A73]">
              Ubicación
            </h4>
            <div className="space-y-2 text-xs text-[#A8A49D] leading-relaxed">
              <p className="text-[#FBFBFA]">
                {siteConfig.contact.address.city},{" "}
                {siteConfig.contact.address.country}
              </p>
              <p className="text-[11px] text-[#7E7A73] pt-1">
                {siteConfig.contact.address.note}
              </p>
              <p className="text-[11px] text-[#7E7A73] pt-2">
                {siteConfig.contact.schedule}
              </p>
            </div>
          </div>

          {/* Columna Contacto */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#7E7A73]">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A8A49D] hover:text-[#FBFBFA] transition-colors"
                >
                  WhatsApp: {siteConfig.contact.whatsapp.displayPhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#A8A49D] hover:text-[#FBFBFA] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A8A49D] hover:text-[#FBFBFA] transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Fila inferior: copyright y aviso legal */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-[11px] text-[#7E7A73] space-y-4 md:space-y-0">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-[10px] tracking-wider uppercase text-[#54524E]">
            Catálogo Comercial Provisional (Datos MOCK para desarrollo)
          </p>
        </div>
      </div>
    </footer>
  );
}
