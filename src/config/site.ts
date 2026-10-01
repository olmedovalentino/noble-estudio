/**
 * Configuración central del sitio y datos del negocio (PLACEHOLDERS).
 * 
 * NOTA: Los siguientes valores son provisionales y están centralizados
 * para permitir su sustitución inmediata cuando se defina la identidad
 * comercial, marca y datos de contacto definitivos.
 */

export const siteConfig = {
  // Identidad provisional de la marca
  name: "Muebles & Diseño", // [PLACEHOLDER_NOMBRE_NEGOCIO]
  shortName: "Muebles",
  description:
    "Catálogo comercial de muebles de diseño para el hogar y espacios contemporáneos. Fabricación de calidad y atención directa por WhatsApp.",
  url: "https://ejemplo-muebles.com", // [PLACEHOLDER_URL]

  // Canales de contacto comercial
  contact: {
    whatsapp: {
      phone: "5491112345678", // [PLACEHOLDER_TELEFONO_WHATSAPP]: código de país + área + número (sin símbolos ni espacios)
      displayPhone: "+54 9 11 1234-5678",
      defaultMessage:
        "Hola, me gustaría consultar por los muebles de su catálogo.",
    },
    email: "contacto@ejemplo.com", // [PLACEHOLDER_EMAIL]
    instagram: "https://instagram.com/placeholder_muebles", // [PLACEHOLDER_INSTAGRAM]
    facebook: "https://facebook.com/placeholder_muebles", // [PLACEHOLDER_FACEBOOK]
    address: {
      city: "Buenos Aires",
      country: "Argentina",
      note: "Atención y consultas personalizadas por WhatsApp",
    },
    schedule: "Lunes a Viernes de 9:00 a 18:00 hs. Sábados de 9:00 a 13:00 hs.",
  },

  // Categorías comerciales iniciales (provisionales)
  categories: [
    { id: "mesas", label: "Mesas" },
    { id: "espejos", label: "Espejos" },
    { id: "banquetas", label: "Banquetas" },
    { id: "recibidores", label: "Recibidores" },
  ] as const,

  // Configuración de moneda y localización
  currency: {
    code: "ARS",
    locale: "es-AR",
  },

  // Metadatos globales y SEO
  seo: {
    locale: "es_AR",
    ogType: "website",
  },
} as const;

export type SiteConfig = typeof siteConfig;
