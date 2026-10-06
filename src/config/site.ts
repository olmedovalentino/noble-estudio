/**
 * Configuración central del sitio y datos comerciales oficiales de Noble Estudio.
 */

export const siteConfig = {
  // Identidad oficial de la marca
  name: "Noble Estudio",
  shortName: "Noble Estudio",
  description:
    "Mobiliario de autor y diseño contemporáneo. Fabricación propia en maderas nobles, proporciones arquitectónicas y atención personalizada por WhatsApp.",
  url: "https://nobleestudio.com.ar",

  // Canales de contacto comercial
  contact: {
    whatsapp: {
      phone: "5493513844333", // WhatsApp: 3513844333 (Córdoba, Argentina -> formato internacional: 5493513844333)
      displayPhone: "+54 9 351 384-4333",
      defaultMessage:
        "Hola, me gustaría consultar por los muebles de su catálogo.",
    },
    email: "noble.estudio.muebles@gmail.com",
    instagram: "https://www.instagram.com/noble.estudioarg/",
    instagramHandle: "@noble.estudioarg",
    address: {
      city: "Mendiolaza",
      province: "Córdoba",
      country: "Argentina",
      fullLocation: "Mendiolaza, Córdoba, Argentina",
    },
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
