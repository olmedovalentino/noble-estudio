import { siteConfig } from "@/config/site";
import { getGeneralWhatsAppUrl } from "@/lib/utils";

export function ConsultationCTA() {
  return (
    <section id="contacto" className="py-24 md:py-36 bg-[#FBFBFA]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8">
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#7E7A73] font-medium block">
          04 / Atención Personalizada
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#141413] tracking-tight font-normal leading-[1.15] text-balance">
          Conversemos sobre tu espacio, plano o proyecto de interiorismo.
        </h2>

        <p className="text-sm md:text-base text-[#7E7A73] font-light max-w-xl mx-auto leading-relaxed">
          Brindamos asesoramiento directo por WhatsApp para responder dudas sobre
          piezas de la colección, medidas y opciones de fabricación.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.2em] bg-[#141413] text-[#FBFBFA] px-10 py-4.5 hover:bg-[#2A2826] transition-all duration-300 font-medium"
          >
            <span>Iniciar Consulta por WhatsApp</span>
            <span>→</span>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.2em] border border-[#E8E5DF] text-[#141413] px-8 py-4.5 hover:border-[#141413] transition-colors"
          >
            <span>Enviar Correo</span>
          </a>
        </div>

        <div className="pt-6 text-xs text-[#7E7A73] font-light space-y-1">
          <p>
            {siteConfig.contact.address.city}, {siteConfig.contact.address.country} · {siteConfig.contact.address.note}
          </p>
          <p className="text-[11px] text-[#A8A49D]">
            Horarios de atención: {siteConfig.contact.schedule}
          </p>
        </div>
      </div>
    </section>
  );
}
