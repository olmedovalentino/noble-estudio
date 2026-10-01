/**
 * Tipado de Categorías de Muebles.
 * 
 * NOTA: Las categorías y slugs son provisionales (MOCK)
 * y están centralizadas para evitar strings arbitrarios.
 */

export type CategorySlug =
  | "mesas"
  | "espejos"
  | "banquetas"
  | "recibidores";

export interface Category {
  id: CategorySlug;
  slug: CategorySlug;
  name: string;
  description: string;
  featured?: boolean;
}
