"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getGeneralWhatsAppUrl } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al cambiar de ruta o presionar Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/productos", label: "Colección" },
    { href: "/#filosofia", label: "Taller & Diseño" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "bg-transparent py-4"
            : isScrolled
            ? "bg-[#FBFBFA]/95 backdrop-blur-md border-b border-[#E8E5DF] py-3 sm:py-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            : "bg-linear-to-b from-[#141413]/25 via-[#141413]/5 to-transparent md:bg-transparent py-4 sm:py-5 md:py-7 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Nombre de marca */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="group flex flex-col items-start min-h-[44px] justify-center"
            aria-label={`${siteConfig.name} - Inicio`}
          >
            <span
              className={`text-sm md:text-base tracking-[0.22em] uppercase font-semibold transition-colors ${
                !isScrolled && !isMobileMenuOpen
                  ? "text-[#FBFBFA] md:text-[#141413] drop-shadow-xs md:drop-shadow-none"
                  : "text-[#141413] group-hover:text-[#7E7A73]"
              }`}
            >
              {siteConfig.name}
            </span>
            <span
              className={`text-[9px] tracking-[0.3em] uppercase font-light hidden sm:block ${
                !isScrolled && !isMobileMenuOpen
                  ? "text-[#E8E5DF] md:text-[#7E7A73]"
                  : "text-[#7E7A73]"
              }`}
            >
              Mobiliario de autor
            </span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] text-[#141413] hover:text-[#7E7A73] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#141413] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Discreto WhatsApp & Menú Mobile */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.18em] border border-[#2A2826] text-[#141413] px-4 py-2 hover:bg-[#141413] hover:text-[#FBFBFA] transition-all duration-300"
            >
              <span>Atención Directa</span>
            </a>

            {/* Botón Hamburguesa Mobile (Área táctil mínima 44x44px) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden min-w-[44px] min-h-[44px] p-2.5 flex items-center justify-center -mr-1.5 transition-colors focus:outline-hidden ${
                !isScrolled && !isMobileMenuOpen
                  ? "text-[#FBFBFA] md:text-[#141413]"
                  : "text-[#141413] hover:text-[#7E7A73]"
              }`}
              aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-4 relative flex flex-col justify-between pointer-events-none">
                <span
                  className={`w-full h-[1.5px] transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "bg-[#141413] rotate-45 translate-y-[7px]"
                      : !isScrolled
                      ? "bg-[#FBFBFA] md:bg-[#141413]"
                      : "bg-[#141413]"
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] transition-all duration-200 ${
                    isMobileMenuOpen
                      ? "opacity-0"
                      : !isScrolled
                      ? "bg-[#FBFBFA] md:bg-[#141413]"
                      : "bg-[#141413]"
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "bg-[#141413] -rotate-45 -translate-y-[7.5px]"
                      : !isScrolled
                      ? "bg-[#FBFBFA] md:bg-[#141413]"
                      : "bg-[#141413]"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Menú Mobile Fullscreen / Drawer editorial con soporte Safe Area */}
      <div
        className={`fixed inset-0 z-30 bg-[#FBFBFA] flex flex-col justify-between px-6 sm:px-10 pt-[max(5.5rem,calc(env(safe-area-inset-top,0px)+3.5rem))] pb-[max(2rem,calc(env(safe-area-inset-bottom,0px)+1.5rem))] md:hidden transition-all duration-400 ease-in-out overscroll-contain overflow-y-auto ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="space-y-6 sm:space-y-8">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#7E7A73] block border-b border-[#E8E5DF] pb-2">
            Navegación
          </span>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl sm:text-3xl font-serif text-[#141413] hover:text-[#7E7A73] transition-colors py-2.5 min-h-[48px] flex items-center"
            >
              Inicio
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl sm:text-3xl font-serif text-[#141413] hover:text-[#7E7A73] transition-colors py-2.5 min-h-[48px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-5 border-t border-[#E8E5DF] pt-6 mt-8">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#7E7A73]">
              Consultas & Citas
            </p>
            <p className="text-sm font-medium text-[#141413]">
              {siteConfig.contact.whatsapp.displayPhone}
            </p>
          </div>
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center space-x-2.5 text-xs uppercase tracking-[0.18em] bg-[#141413] text-[#FBFBFA] py-4 px-6 min-h-[48px] font-medium hover:bg-[#2A2826] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
