"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  ChefHat,
  Package,
  BarChart3,
  Settings,
  CheckCircle2,
  Receipt,
  Tag,
  Monitor,
  CookingPot,
  FileSpreadsheet,
  ClipboardList,
  TrendingUp,
  Target,
  ReceiptText,
  Store,
  CreditCard,
  Users
} from "lucide-react";

const tabs = [
  {
    id: "pos",
    label: "Punto de Venta",
    icon: ShoppingCart,
    tagline: "Vende Más Rápido",
    cards: [
      {
        badge: "● Operaciones",
        badgeType: "green",
        title: "Catálogo Visual Inteligente",
        desc: "Filtra por categorías con un clic: Hamburguesas, Café, Bebidas, Postres y más. Cada producto muestra precio, código y stock en tiempo real.",
        icon: ShoppingCart,
        featured: false,
      },
      {
        badge: "● Multi-venta",
        badgeType: "orange",
        title: "Múltiples Ventas Simultáneas",
        desc: "Maneja varias órdenes al mismo tiempo con pestañas independientes. Asigna mesas, define el tipo de orden (local, para llevar) y cobra sin interrupciones.",
        icon: Receipt,
        featured: true,
      },
      {
        badge: "● Control",
        badgeType: "violet",
        title: "Turnos de Caja y Mesas",
        desc: "Abre y cierra turnos con monto inicial en efectivo. Lleva el historial completo de cada cajero y gestiona las mesas de tu restaurante con fluidez.",
        icon: Tag,
        featured: false,
      },
    ],
  },
  {
    id: "kds",
    label: "KDS Cocina",
    icon: ChefHat,
    tagline: "Cocina Sincronizada",
    cards: [
      {
        badge: "● Tiempo Real",
        badgeType: "green",
        title: "Pantalla de Cocina en Vivo",
        desc: "Las órdenes llegan al instante a la pantalla de cocina. Sin papel, sin gritos. Cada pedido aparece ordenado y claro para el equipo de cocina.",
        icon: Monitor,
        featured: false,
      },
      {
        badge: "● Multi-área",
        badgeType: "orange",
        title: "Zonas de Cocina Independientes",
        desc: "Divide tu cocina en áreas: Cocina Caliente, Cocina Fría, Bar. Cada área ve solo los pedidos que le corresponden, eliminando la confusión.",
        icon: CookingPot,
        featured: true,
      },
      {
        badge: "● Coordinación",
        badgeType: "violet",
        title: "Sin Errores en Pedidos",
        desc: "El KDS sincroniza la sala con la cocina al 100%. Reduce los tiempos de espera y elimina los errores de comunicación entre meseros y cocineros.",
        icon: CheckCircle2,
        featured: false,
      },
    ],
  },
  {
    id: "inventario",
    label: "Inventario",
    icon: Package,
    tagline: "Stock Bajo Control",
    cards: [
      {
        badge: "● Productos",
        badgeType: "green",
        title: "Catálogo de 60+ Productos",
        desc: "Gestiona tu catálogo completo con precios de compra, venta, código de barras y stock. Con o sin control de inventario por producto.",
        icon: Package,
        featured: false,
      },
      {
        badge: "● Carga Masiva",
        badgeType: "orange",
        title: "Importación por Excel",
        desc: "¿Tienes tu inventario en una hoja de cálculo? Súbelo en segundos con nuestra plantilla Excel. Actualización masiva sin teclear uno a uno.",
        icon: FileSpreadsheet,
        featured: true,
      },
      {
        badge: "● Historial",
        badgeType: "violet",
        title: "Cierres de Inventario",
        desc: "Registra cierres periódicos para comparar stock teórico vs real. Identifica mermas y fugas con el historial completo de cierres anteriores.",
        icon: ClipboardList,
        featured: false,
      },
    ],
  },
  {
    id: "reportes",
    label: "Reportes",
    icon: BarChart3,
    tagline: "Datos para Decidir",
    cards: [
      {
        badge: "● Hoy",
        badgeType: "green",
        title: "Dashboard en Tiempo Real",
        desc: "Ventas del día, ingresos, devoluciones y ventas válidas de un vistazo. El panel de control que necesitas al abrir y cerrar cada turno.",
        icon: TrendingUp,
        featured: false,
      },
      {
        badge: "● Análisis",
        badgeType: "orange",
        title: "Ventas por Categoría",
        desc: "Descubre cuáles categorías generan más ingresos: Hamburguesas con margen del 55%, Café con 63%, Bebidas con 60%. Optimiza tu menú con datos.",
        icon: Target,
        featured: true,
      },
      {
        badge: "● Contabilidad",
        badgeType: "violet",
        title: "Factura Z y Cierre de Caja",
        desc: "Genera la Factura Z automáticamente al final del día. El cierre de caja diario queda registrado con el detalle de todas las transacciones.",
        icon: ReceiptText,
        featured: false,
      },
    ],
  },
  {
    id: "config",
    label: "Configuración",
    icon: Settings,
    tagline: "A Tu Medida",
    cards: [
      {
        badge: "● Negocio",
        badgeType: "green",
        title: "Perfil Completo del Negocio",
        desc: "Configura nombre, NIT, dirección, teléfono y descripción. Personaliza el sistema para que tenga el nombre y la identidad de tu negocio.",
        icon: Store,
        featured: false,
      },
      {
        badge: "● Pagos",
        badgeType: "orange",
        title: "Comisiones por Método de Pago",
        desc: "Define las comisiones reales de Nequi, Daviplata y tarjeta (Visa/MC). El sistema calcula automáticamente lo que recibes después de comisiones.",
        icon: CreditCard,
        featured: true,
      },
      {
        badge: "● Equipo",
        badgeType: "violet",
        title: "Usuarios y Roles",
        desc: "Crea perfiles de Administrador y Cajero con accesos diferenciados. Tu equipo ve solo lo que necesita ver para hacer su trabajo.",
        icon: Users,
        featured: false,
      },
    ],
  },
];

function getBadgeStyle(type: string) {
  if (type === "green")
    return { background: "rgba(16,185,129,0.1)", color: "#059669", border: "1px solid rgba(16,185,129,0.2)" };
  if (type === "orange")
    return { background: "rgba(249,115,22,0.1)", color: "#EA580C", border: "1px solid rgba(249,115,22,0.2)" };
  return { background: "rgba(124,58,237,0.1)", color: "#7C3AED", border: "1px solid rgba(124,58,237,0.2)" };
}

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("pos");
  const sectionRef = useRef<HTMLElement>(null);

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

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section ref={sectionRef} className="section-fade py-20 md:py-32 bg-gray-50 border-t border-gray-100" id="core-features">
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="badge-violet mx-auto">Core Features</div>
          <h2 className="text-4xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-[-0.04em] font-semibold text-gray-900 mt-4">
            Todo lo que necesitas para{" "}
            <br className="hidden sm:block" />
            <span className="italic text-[#EA8F1F]">Vender Más</span>
          </h2>
          <p className="text-gray-500 text-lg mt-6">
            Una plataforma completa para restaurantes y retail. Del punto de
            venta a la cocina, del inventario a los reportes.
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex flex-nowrap justify-start sm:justify-center items-center mb-12 p-1.5 bg-white rounded-full shadow-sm border border-gray-200 mx-auto w-max max-w-full overflow-x-auto overflow-y-hidden hide-scrollbar"
          role="tablist"
          aria-label="Categorías de funcionalidades"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              className={`relative px-5 py-2.5 rounded-full text-[14.5px] font-medium transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeFeatureTab"
                  className="absolute inset-0 bg-black rounded-full"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10, scale: 0.98 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
            exit={{ opacity: 0, filter: "blur(4px)", y: -10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentTab.cards.map((card, i) => {
              const CardIcon = card.icon;
              return (
                <article
                key={card.title}
                className={`feature-card ${card.featured ? "featured" : ""}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Top */}
                <div className="space-y-4">
                  <div
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={card.featured ? { background: "rgba(255,255,255,0.2)", color: "white" } : getBadgeStyle(card.badgeType)}
                    aria-label={`Categoría: ${card.badge.replace("● ", "")}`}
                  >
                    {card.badge}
                  </div>
                  <h3
                    className={`text-xl font-bold leading-tight ${
                      card.featured ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      card.featured
                        ? "text-purple-100"
                        : "text-gray-500"
                    }`}
                  >
                    {card.desc}
                  </p>
                </div>

                {/* Bottom */}
                <div
                className={`mt-8 pt-4 border-t flex items-center gap-3 ${
                  card.featured ? "border-white/20" : "border-gray-100"
                }`}
              >
                <span className="text-3xl flex items-center justify-center text-gray-400" aria-hidden="true" style={card.featured ? { color: "rgba(255,255,255,0.7)" } : {}}>
                  <CardIcon size={28} />
                </span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2
                    size={14}
                    className={card.featured ? "text-white/70" : "text-emerald-500"}
                    aria-hidden="true"
                  />
                  <span
                    className={`text-xs font-medium ${
                      card.featured ? "text-purple-100" : "text-gray-400"
                    }`}
                  >
                    Incluido en todos los planes
                  </span>
                </div>
              </div>
            </article>
            );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
