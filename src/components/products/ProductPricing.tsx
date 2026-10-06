import { formatPrice } from "@/lib/utils";
import { getProductPaymentSummary } from "@/config/payment";

interface ProductPricingProps {
  price: number;
  compareAtPrice?: number;
  className?: string;
}

export function ProductPricing({
  price,
  compareAtPrice,
  className = "",
}: ProductPricingProps) {
  const summary = getProductPaymentSummary(price);

  return (
    <div className={`space-y-3.5 pt-1 ${className}`}>
      {/* 1. Precio Principal y Condición de Pago Contado */}
      <div>
        <div className="flex items-baseline space-x-3">
          <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#141413] tracking-tight font-normal">
            {formatPrice(summary.basePrice)}
          </span>
          {compareAtPrice && (
            <span className="text-sm text-[#A8A49D] line-through font-light">
              {formatPrice(compareAtPrice)}
            </span>
          )}
        </div>
        <span className="text-[11px] uppercase tracking-[0.18em] text-[#7E7A73] font-medium block pt-1">
          {summary.cashLabel}
        </span>
      </div>

      {/* 2. Opciones de Financiación (3 cuotas sin interés + Mercado Pago) */}
      <div className="space-y-1.5 pt-2 border-t border-[#E8E5DF]/70">
        {/* 3 cuotas sin interés */}
        <div className="flex items-center space-x-2.5 text-xs text-[#141413]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#141413] shrink-0" aria-hidden="true" />
          <span className="font-normal tracking-wide">
            {summary.interestFreePlan.label}
          </span>
        </div>

        {/* Mercado Pago: si se configuran tasas detalladas en el futuro se listan, sino se exhibe la opción estándar */}
        {summary.mercadoPagoPlan.hasCustomRates && summary.mercadoPagoPlan.detailedPlans ? (
          summary.mercadoPagoPlan.detailedPlans.map((plan) => (
            <div
              key={plan.installments}
              className="flex items-center space-x-2.5 text-[11px] text-[#7E7A73]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8A49D] shrink-0" aria-hidden="true" />
              <span className="tracking-wide">{plan.label}</span>
            </div>
          ))
        ) : (
          <div className="flex items-center space-x-2.5 text-[11px] text-[#7E7A73]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8A49D] shrink-0" aria-hidden="true" />
            <span className="tracking-wide">
              {summary.mercadoPagoPlan.label}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
