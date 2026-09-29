import { siteConfig } from "@/config/site";

/**
 * Concatena clases CSS condicionales filtrando valores falsy.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formatea un valor numérico a moneda utilizando la configuración centralizada de la web.
 * Por defecto aplica ARS con formato argentino (es-AR: "$ 420.000").
 */
export function formatPrice(
  amount: number,
  currency: string = siteConfig.currency.code,
  locale: string = siteConfig.currency.locale
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Construye un enlace seguro de WhatsApp con número y texto prellenado.
 */
export function buildWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Genera la URL directa de WhatsApp para consultar por un producto específico del catálogo.
 * Ejemplo: "Hola, quería consultar por la Mesa Paraíso 1.80 que vi en la página."
 */
export function getProductWhatsAppUrl(productName: string): string {
  const message = `Hola, quería consultar por "${productName}" que vi en la página.`;
  return buildWhatsAppUrl(siteConfig.contact.whatsapp.phone, message);
}

/**
 * Genera la URL de WhatsApp para una consulta general sobre el catálogo.
 */
export function getGeneralWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    siteConfig.contact.whatsapp.phone,
    siteConfig.contact.whatsapp.defaultMessage
  );
}
