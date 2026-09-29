import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <div className="max-w-md space-y-4 rounded-xl border border-zinc-200 bg-white p-8 shadow-xs">
        <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
          Etapa 1: Base Inicial Lista
        </span>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {siteConfig.name}
        </h1>
        <p className="text-sm text-zinc-500">
          {siteConfig.description}
        </p>
        <div className="pt-2 text-xs text-zinc-400">
          Estructura base, configuración y herramientas inicializadas correctamente.
        </div>
      </div>
    </main>
  );
}
