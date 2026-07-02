"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Star, ArrowUpRight, Info, CheckCircle2 } from "lucide-react";

const plans = [
  {
    id: "basico",
    name: "Básico",
    price: "$49.900",
    priceLabel: "/mes",
    desc: "Para negocios retail pequeños que quieren ordenar sus ventas.",
    popular: false,
    cta: "Empezar Ahora",
    ctaStyle: "ghost",
    features: [
      "Punto de Venta completo",
      "Gestión de Productos",
      "Control de Inventario",
      "Reportes del día",
      "1 usuario (cajero)",
      "Soporte por email",
    ],
    highlight: "Sin módulo restaurante",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$99.900",
    priceLabel: "/mes",
    desc: "Retail y restaurante. Gestiona hasta 15 mesas y tu equipo de 5 personas.",
    popular: true,
    cta: "Empezar Gratis",
    ctaStyle: "primary",
    features: [
      "Todo lo del plan Básico",
      "Módulo Restaurante completo",
      "Hasta 15 mesas",
      "Hasta 5 usuarios",
      "KDS Cocina básico",
      "Soporte prioritario",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$189.900",
    priceLabel: "/mes",
    desc: "La experiencia completa. Todo ilimitado para negocios que quieren escalar.",
    popular: false,
    cta: "Empezar Ahora",
    ctaStyle: "ghost",
    current: true,
    features: [
      "Todo lo del plan Pro",
      "Mesas ilimitadas",
      "Usuarios ilimitados",
      "KDS Multi-área",
      "Multi-zona",
      "Soporte VIP + WhatsApp",
    ],
  },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [annual, setAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("pro");

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="precios"
      ref={sectionRef}
      className="section-fade py-32 bg-gray-50"
      aria-label="Planes y precios de POS by Qontta"
    >
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="badge-violet mx-auto">Precios Flexibles</div>
          <h2 className="text-[72px] leading-[1.02] tracking-[-0.04em] font-semibold text-gray-900">
            Un plan para cada{" "}
            <span className="italic text-[#EA8F1F]">Tipo de Negocio</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Elige el plan que se adapta a tu operación. Sin costos ocultos,
            sin contratos a largo plazo. Cancela cuando quieras.
          </p>

          {/* Toggle anual/mensual */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className={`text-sm font-medium ${!annual ? "text-gray-900" : "text-gray-400"}`}>
              Mensual
            </span>
            <button
              role="switch"
              aria-checked={annual}
              aria-label="Cambiar a facturación anual"
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                annual ? "bg-violet-600" : "bg-gray-300"
              }`}
              onClick={() => setAnnual(!annual)}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
                  annual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-gray-900" : "text-gray-400"}`}>
              Anual
              <span className="ml-1.5 text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                -20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto"
          aria-label="Comparativa de planes"
        >
          {plans.map((plan) => (
            <article
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`pricing-card flex flex-col cursor-pointer transition-all duration-300 ${selectedPlan === plan.id ? "popular" : ""}`}
              aria-label={`Plan ${plan.name}${plan.current ? " (Plan actual)" : ""}${plan.popular ? " (Más popular)" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                    style={{ background: "#0F0A1E" }}
                  >
                    <Star size={10} fill="white" aria-hidden="true" />
                    MÁS POPULAR
                  </div>
                </div>
              )}
              {plan.current && (
                <div className="absolute -top-3.5 right-4">
                  <div className="badge-green text-xs flex items-center gap-1">
                    <CheckCircle2 size={12} /> Plan Actual
                  </div>
                </div>
              )}

              <div className="flex-1 space-y-6">
                {/* Plan name */}
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-1">{plan.name}</p>
                  <div className="flex items-end gap-1 mb-2">
                    {plan.priceLabel ? (
                      <>
                        <span className="text-3xl font-black text-gray-900">
                          {annual && plan.price !== "A medida"
                            ? plan.price.replace(/\d+/, (n) =>
                                Math.round(parseInt(n) * 0.8).toLocaleString("es-CO")
                              )
                            : plan.price}
                        </span>
                        <span className="text-sm text-gray-400 mb-1">{plan.priceLabel}</span>
                      </>
                    ) : (
                      <span className="text-2xl font-black text-gray-900">{plan.price}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-snug">{plan.desc}</p>
                  {plan.highlight && (
                    <p className="text-xs font-semibold text-orange-500 mt-1.5 flex items-center gap-1">
                      <Info size={14} /> {plan.highlight}
                    </p>
                  )}
                </div>

                {/* Features list */}
                <ul className="space-y-3" role="list" aria-label={`Características del plan ${plan.name}`}>
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5" role="listitem">
                      <Check
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${
                          selectedPlan === plan.id ? "text-violet-600" : "text-emerald-500"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-600">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#demo"
                  className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-sm transition-all duration-200 ${
                    selectedPlan === plan.id
                      ? "text-white shadow-lg hover:shadow-xl hover:-translate-y-1"
                      : "border-1.5 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                  style={
                    selectedPlan === plan.id
                      ? { background: "linear-gradient(135deg, #7C3AED, #A78BFA)" }
                      : {}
                  }
                  aria-label={`${plan.cta} con el plan ${plan.name}`}
                >
                  {plan.cta}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
