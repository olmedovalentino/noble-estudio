import Link from "next/link";
import { getGeneralWhatsAppUrl } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 max-w-2xl mx-auto space-y-6">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#7E7A73] font-medium block">
        404 / Espacio no disponible
      </span>
      <h1 className="text-4xl sm:text-5xl font-serif text-[#141413] tracking-tight font-normal leading-tight">
        Pieza o página no encontrada
      </h1>
      <p className="text-sm text-[#7E7A73] font-light leading-relaxed max-w-md">
        El mueble o apartado que intentás consultar no existe, cambió de enlace o
        ha sido retirado de la exhibición temporal.
      </p>
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <Link
          href="/productos"
          className="w-full sm:w-auto text-xs uppercase tracking-[0.2em] bg-[#141413] text-[#FBFBFA] px-8 py-4 hover:bg-[#2A2826] transition-colors"
        >
          Explorar Catálogo →
        </Link>
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-xs uppercase tracking-[0.2em] border border-[#E8E5DF] text-[#141413] px-8 py-4 hover:border-[#141413] transition-colors"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
}
