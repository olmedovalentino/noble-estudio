import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getGeneralWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contacto & Consultas",
  description:
    "Canales oficiales de atención de Noble Estudio. Consultas comerciales y asesoramiento directo por WhatsApp, email e Instagram.",
  alternates: {
    canonical: `${siteConfig.url}/contacto`,
  },
};

export default function ContactoPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 md:pb-36 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-8 sm:space-y-12">
      {/* 1. Encabezado Editorial (Mismo sistema y ritmo visual que /productos) */}
      <div className="space-y-3 sm:space-y-4 max-w-3xl">
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#7E7A73] font-medium block">
          Atención & Consultas
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#141413] tracking-tight font-normal leading-[1.1]">
          Conversemos sobre tu espacio
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-[#7E7A73] font-light leading-relaxed">
          Brindamos asesoramiento personalizado para resolver inquietudes sobre
          piezas de nuestra colección, medidas específicas y adaptaciones particulares.
        </p>
      </div>

      {/* 2. Canales Oficiales en Grilla Editorial */}
      <div className="border-t border-[#E8E5DF] pt-8 sm:pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* WhatsApp */}
        <div className="bg-[#F5F4F0] p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-[#E8E5DF]">
          <div className="space-y-3">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#7E7A73] font-medium">
                Atención Directa
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif text-[#141413]">
              WhatsApp
            </h2>
            <p className="text-sm font-medium text-[#141413]">
              {siteConfig.contact.whatsapp.displayPhone}
            </p>
            <p className="text-xs text-[#7E7A73] font-light leading-relaxed">
              Consultas inmediatas por piezas de la colección, disponibilidad y opciones de fabricación.
            </p>
          </div>
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2.5 text-xs uppercase tracking-[0.18em] bg-[#141413] text-[#FBFBFA] py-3.5 px-6 min-h-[44px] font-medium hover:bg-[#2A2826] transition-colors text-center"
          >
            <span>Iniciar Consulta</span>
            <span>→</span>
          </a>
        </div>

        {/* Email */}
        <div className="bg-[#F5F4F0] p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-[#E8E5DF]">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#7E7A73] font-medium block">
              Correo Electrónico
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-[#141413]">
              Email
            </h2>
            <p className="text-sm font-medium text-[#141413] break-all">
              {siteConfig.contact.email}
            </p>
            <p className="text-xs text-[#7E7A73] font-light leading-relaxed">
              Para consultas detalladas, planos o especificaciones de proyectos.
            </p>
          </div>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.18em] border border-[#141413] text-[#141413] py-3.5 px-6 min-h-[44px] hover:bg-[#141413] hover:text-[#FBFBFA] transition-colors text-center"
          >
            <span>Enviar Correo</span>
            <span>→</span>
          </a>
        </div>

        {/* Instagram */}
        <div className="bg-[#F5F4F0] p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-[#E8E5DF] md:col-span-2 lg:col-span-1">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#7E7A73] font-medium block">
              Canal Visual
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-[#141413]">
              Instagram
            </h2>
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#141413] hover:text-[#7E7A73] transition-colors inline-block"
            >
              {siteConfig.contact.instagramHandle}
            </a>
            <p className="text-xs text-[#7E7A73] font-light leading-relaxed">
              Registro fotográfico de piezas y novedades de taller.
            </p>
          </div>

          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.18em] border border-[#141413] text-[#141413] py-3.5 px-6 min-h-[44px] hover:bg-[#141413] hover:text-[#FBFBFA] transition-colors text-center"
          >
            <span>Ver Instagram</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
