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
          isScrolled
            ? "bg-[#FBFBFA]/95 backdrop-blur-md border-b border-[#E8E5DF] py-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-6 md:py-7 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Nombre de marca */}
          <Link
            href="/"
            className="group flex flex-col items-start"
            aria-label={`${siteConfig.name} - Inicio`}
          >
            <span className="text-sm md:text-base tracking-[0.22em] uppercase font-semibold text-[#141413] transition-colors group-hover:text-[#7E7A73]">
              {siteConfig.name}
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#7E7A73] font-light hidden sm:block">
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
          <div className="flex items-center space-x-5">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.18em] border border-[#2A2826] text-[#141413] px-4 py-2 hover:bg-[#141413] hover:text-[#FBFBFA] transition-all duration-300"
            >
              <span>Atención Directa</span>
            </a>

            {/* Botón Hamburguesa Mobile */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#141413] hover:text-[#7E7A73] transition-colors focus:outline-hidden"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-4 relative flex flex-col justify-between">
                <span
                  className={`w-full h-[1.5px] bg-[#141413] transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] bg-[#141413] transition-all duration-200 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] bg-[#141413] transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Menú Mobile Fullscreen / Drawer editorial */}
      <div
        className={`fixed inset-0 z-30 bg-[#FBFBFA] flex flex-col justify-between p-8 pt-28 md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="space-y-8">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#7E7A73] block border-b border-[#E8E5DF] pb-2">
            Navegación
          </span>
          <nav className="flex flex-col space-y-6">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-[#141413] hover:text-[#7E7A73] transition-colors"
            >
              Inicio
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-[#141413] hover:text-[#7E7A73] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-6 border-t border-[#E8E5DF] pt-6">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.16em] text-[#7E7A73]">
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
            className="block text-center text-xs uppercase tracking-[0.18em] bg-[#141413] text-[#FBFBFA] py-3.5 px-6"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
