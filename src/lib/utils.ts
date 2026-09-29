/**
 * Utilidades generales del proyecto sin dependencias externas innecesarias.
 */

/**
 * Concatena clases CSS condicionales filtrando valores falsy.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formatea un valor numérico a moneda (ARS por defecto o USD).
 */
export function formatPrice(
  amount: number,
  currency: "ARS" | "USD" = "ARS",
  locale: string = "es-AR"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Construye el enlace de WhatsApp para abrir chat con número y mensaje prellenado.
 */
export function buildWhatsAppUrl(phone: string, text: string): string {
  // Limpia cualquier carácter no numérico del teléfono
  const cleanPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
