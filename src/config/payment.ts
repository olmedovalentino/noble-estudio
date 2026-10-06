import { formatPrice } from "@/lib/utils";

/**
 * CONFIGURACIÓN CENTRALIZADA DE FORMAS DE PAGO Y FINANCIACIÓN
 * 
 * Permite gestionar desde un único archivo:
 * - Opciones de pago de contado (efectivo / transferencia).
 * - Planes de cuotas sin interés (cálculo automático precio / N).
 * - Planes de cuotas con Mercado Pago (6 y 12 cuotas).
 * 
 * NOTA DE ARQUITECTURA:
 * Las tasas de recargo para 6 y 12 cuotas están preparadas en `mercadoPagoRates`.
 * Cuando se definan las tasas oficiales (ej: 0.18 para 18%), simplemente se asignan allí
 * y el sistema calculará automáticamente el precio final financiado, la cuota y el recargo.
 * Mientras sean `null` o `undefined`, no se inventan ni exhiben montos ni porcentajes falsos.
 */

export interface MercadoPagoRateConfig {
  /** Recargo porcentual en decimal (ej: 0.15 para 15% de recargo). null = pendiente de definición */
  rate: number | null;
}

export interface PaymentArchitectureConfig {
  cashOrTransferLabel: string;
  interestFree: {
    installments: number;
    labelSuffix: string;
  };
  mercadoPago: {
    providerName: string;
    installments: number[];
    fallbackLabel: string;
    /** Tasas configurables por cantidad de cuotas */
    rates: Record<number, MercadoPagoRateConfig>;
  };
}

export const paymentConfig: PaymentArchitectureConfig = {
  cashOrTransferLabel: "Efectivo o transferencia",
  interestFree: {
    installments: 3,
    labelSuffix: "sin interés",
  },
  mercadoPago: {
    providerName: "Mercado Pago",
    installments: [6, 12],
    fallbackLabel: "6 y 12 cuotas disponibles con Mercado Pago",
    rates: {
      // Dejar en null hasta contar con las tasas comerciales oficiales
      6: { rate: null },
      12: { rate: null },
    },
  },
};

export interface CalculatedPlan {
  installments: number;
  isInterestFree: boolean;
  installmentAmount: number | null;
  totalFinancedAmount: number | null;
  surchargePercentage: number | null;
  label: string;
}

export interface ProductPaymentSummary {
  basePrice: number;
  cashLabel: string;
  interestFreePlan: {
    installments: number;
    installmentAmount: number;
    formattedInstallment: string;
    label: string;
  };
  mercadoPagoPlan: {
    label: string;
    hasCustomRates: boolean;
    detailedPlans?: CalculatedPlan[];
  };
}

/**
 * Calcula el desglose completo de formas de pago para un producto a partir de su precio base.
 */
export function getProductPaymentSummary(basePrice: number): ProductPaymentSummary {
  // 1. Cuotas sin interés (cálculo automático precio / 3)
  const interestFreeInstallments = paymentConfig.interestFree.installments;
  const interestFreeInstallmentAmount = Math.round(basePrice / interestFreeInstallments);
  const formattedInterestFreeInstallment = formatPrice(interestFreeInstallmentAmount);

  // 2. Planes Mercado Pago (6 y 12 cuotas)
  const mpRates = paymentConfig.mercadoPago.rates;
  const hasCustomRates = Object.values(mpRates).some((r) => r.rate !== null && r.rate !== undefined);

  let detailedPlans: CalculatedPlan[] | undefined = undefined;

  if (hasCustomRates) {
    detailedPlans = paymentConfig.mercadoPago.installments.map((inst) => {
      const config = mpRates[inst];
      if (config && config.rate !== null && config.rate !== undefined) {
        const total = Math.round(basePrice * (1 + config.rate));
        const cuota = Math.round(total / inst);
        const pct = Math.round(config.rate * 100);
        return {
          installments: inst,
          isInterestFree: config.rate === 0,
          installmentAmount: cuota,
          totalFinancedAmount: total,
          surchargePercentage: pct,
          label: `${inst} cuotas de ${formatPrice(cuota)} (Total financiado: ${formatPrice(total)})`,
        };
      }
      return {
        installments: inst,
        isInterestFree: false,
        installmentAmount: null,
        totalFinancedAmount: null,
        surchargePercentage: null,
        label: `${inst} cuotas disponibles con ${paymentConfig.mercadoPago.providerName}`,
      };
    });
  }

  return {
    basePrice,
    cashLabel: paymentConfig.cashOrTransferLabel,
    interestFreePlan: {
      installments: interestFreeInstallments,
      installmentAmount: interestFreeInstallmentAmount,
      formattedInstallment: formattedInterestFreeInstallment,
      label: `${interestFreeInstallments} cuotas sin interés de ${formattedInterestFreeInstallment}`,
    },
    mercadoPagoPlan: {
      label: paymentConfig.mercadoPago.fallbackLabel,
      hasCustomRates,
      detailedPlans,
    },
  };
}
