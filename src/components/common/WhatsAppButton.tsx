import { getGeneralWhatsAppUrl, getProductWhatsAppUrl } from "@/lib/utils";

interface WhatsAppButtonProps {
  productName?: string;
  variant?: "floating" | "inline" | "secondary";
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  productName,
  variant = "floating",
  className = "",
  children,
}: WhatsAppButtonProps) {
  const url = productName
    ? getProductWhatsAppUrl(productName)
    : getGeneralWhatsAppUrl();

  // Variante flotante: discreta, elegante, con paleta neutra y sutil acento
  if (variant === "floating") {
    return (
      <aside aria-label="Contacto directo">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed bottom-[max(1.25rem,calc(env(safe-area-inset-bottom,0px)+0.75rem))] right-4 sm:right-6 z-40 flex items-center space-x-2.5 min-h-[44px] bg-[#141413] text-[#FBFBFA] px-3.5 sm:px-4 py-2.5 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.22)] border border-[#2A2826] hover:bg-[#2A2826] active:scale-95 transition-all duration-300 group ${className}`}
          aria-label="Consultar por WhatsApp"
        >
          {/* Icono vectorial minimalista de WhatsApp */}
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse motion-reduce:animate-none" />
          <svg
            className="w-4 h-4 text-[#FBFBFA] transition-transform group-hover:scale-105"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.076-2.158-.53-.941-.389-1.545-.969-1.993-1.424-.447-.455-.837-1.109-.837-1.745 0-.636.331-1.042.45-.164.088-.09.192-.128.288-.128.096 0 .192.001.275.006.097.006.227-.037.355.271.132.318.45 1.097.49 1.177.04.08.066.174.013.28-.053.107-.08.174-.16.267-.08.093-.169.208-.242.279-.08.08-.163.167-.07.327.093.16.413.682.887 1.104.609.542 1.123.709 1.283.789.16.08.253.067.346-.04.093-.107.4-.467.507-.627.107-.16.213-.133.36-.08.147.053.933.44 1.093.52.16.08.267.12.307.187.04.067.04.387-.104.792z" />
          </svg>
          <span className="text-[11px] uppercase tracking-[0.16em] font-medium pr-0.5">
            Consultas
          </span>
        </a>
      </aside>
    );
  }

  // Variante inline para fichas de producto
  if (variant === "inline") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center space-x-3 w-full bg-[#141413] text-[#FBFBFA] min-h-[48px] py-4 px-6 text-xs uppercase tracking-[0.2em] font-medium border border-[#141413] hover:bg-[#2A2826] active:bg-black transition-all duration-300 text-center ${className}`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366]" />
        <span>{children ?? "Consultar por WhatsApp"}</span>
      </a>
    );
  }

  // Variante secundaria
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] border-b border-[#141413] min-h-[44px] py-2 hover:text-[#7E7A73] hover:border-[#7E7A73] transition-colors ${className}`}
    >
      <span>{children ?? "Consultar disponibilidad →"}</span>
    </a>
  );
}
