import type { Metadata } from "next";
import { CraftsmanshipSection } from "@/components/home/CraftsmanshipSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Taller & Filosofía de Diseño",
  description:
    "Filosofía de diseño, materialidad noble y cuidado constructivo en cada pieza de mobiliario contemporáneo de Noble Estudio.",
  alternates: {
    canonical: `${siteConfig.url}/taller`,
  },
};

export default function TallerPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-36 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <CraftsmanshipSection titleAs="h1" />
    </div>
  );
}
