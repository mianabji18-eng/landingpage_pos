"use client";

import { useEffect, useRef } from "react";
import {
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  Package,
  Bell,
  Search,
  MoreHorizontal,
  Lock,
  LayoutDashboard,
  ChefHat,
  Users,
  Settings,
  ClipboardList,
  Sparkles
} from "lucide-react";

const kpiCards = [
  {
    label: "Total Ventas Hoy",
    value: "$847.500",
    change: "+1.87%",
    up: true,
    icon: ShoppingBag,
    iconColor: "#F97316",
    iconBg: "rgba(249,115,22,0.1)",
  },
  {
    label: "Ventas Válidas",
    value: "451",
    change: "-0.89%",
    up: false,
    icon: Package,
    iconColor: "#7C3AED",
    iconBg: "rgba(124,58,237,0.1)",
  },
  {
    label: "Devoluciones",
    value: "41%",
    change: "+2.45%",
    up: true,
    icon: TrendingDown,
    iconColor: "#EC4899",
    iconBg: "rgba(236,72,153,0.1)",
  },
  {
    label: "Total Ingresos",
    value: "1.284",
    change: "+3.14%",
    up: true,
    icon: TrendingUp,
    iconColor: "#10B981",
    iconBg: "rgba(16,185,129,0.1)",
  },
];

const recentOrders = [
  { id: "#784514-784511", item: "Combo Clásico", status: "Entregado", amount: "$25.000" },
  { id: "#784514-784512", item: "Café Latte", status: "En Cocina", amount: "$7.000" },
  { id: "#784514-784513", item: "Papas con Queso", status: "Pendiente", amount: "$9.000" },
];

const statusStyle: Record<string, string> = {
  "Entregado": "bg-emerald-100 text-emerald-700",
  "En Cocina": "bg-orange-100 text-orange-700",
  "Pendiente": "bg-gray-100 text-gray-600",
};

export default function DashboardPreview() {
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

  return (
    <section
      id="producto"
      ref={sectionRef}
      className="section-fade py-32 bg-white"
      aria-label="Vista previa del dashboard de POS by Qontta"
    >
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="badge-violet mx-auto">Vista del Producto</div>
          <h2 className="text-[72px] leading-[1.02] tracking-[-0.04em] font-semibold text-gray-900">
            Tu negocio, de un{" "}
            <span className="italic text-[#EA8F1F]">solo vistazo</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            El panel de control en tiempo real te muestra lo que más importa:
            ventas, ingresos, órdenes recientes y mucho más.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div
          className="relative max-w-5xl mx-auto"
          role="img"
          aria-label="Captura de pantalla del dashboard de POS by Qontta"
        >
          {/* Browser chrome */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
            style={{ boxShadow: "0 32px 80px rgba(124,58,237,0.15), 0 8px 32px rgba(0,0,0,0.1)" }}
          >
            {/* Browser bar */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white rounded-md px-4 py-1.5 text-xs text-gray-500 font-mono flex items-center gap-2 min-w-[220px] max-w-xs border border-gray-200">
                  <Lock size={14} className="text-emerald-500" />
                  pos.qontta.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="bg-white flex" style={{ minHeight: "460px" }}>
              {/* Sidebar */}
              <aside
                className="hidden lg:flex flex-col w-52 border-r border-gray-100 p-4 gap-1 bg-white"
                aria-label="Barra de navegación lateral"
              >
                {/* Logo in sidebar */}
                <div className="flex items-center gap-2 px-3 py-3 mb-4">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-xs"
                    style={{ background: "linear-gradient(135deg, #7C3AED, #A78BFA)" }}
                    aria-hidden="true"
                  >Q</div>
                  <span className="font-bold text-gray-900 text-sm">Qontta POS</span>
                </div>

                {[
                  { label: "Dashboard", icon: LayoutDashboard, active: true },
                  { label: "Ventas", icon: ShoppingBag, badge: null },
                  { label: "KDS Cocina", icon: ChefHat, badge: null },
                  { label: "Productos", icon: Package, badge: null },
                  { label: "Inventario", icon: ClipboardList, badge: null },
                  { label: "Usuarios", icon: Users, badge: "1" },
                  { label: "Configuración", icon: Settings, badge: null },
                ].map(({ label, icon: Icon, active, badge }) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                      active
                        ? "text-white"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                    }`}
                    style={active ? { background: "linear-gradient(135deg, #7C3AED, #A78BFA)" } : {}}
                    role="menuitem"
                    aria-current={active ? "page" : undefined}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={18} aria-hidden="true" />
                      {label}
                    </div>
                    {badge && (
                      <span className="text-xs bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded-full font-bold">
                        {badge}
                      </span>
                    )}
                  </div>
                ))}
              </aside>

              {/* Main area */}
              <main className="flex-1 p-6 space-y-6" aria-label="Contenido del dashboard">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Buscar">
                      <Search size={16} className="text-gray-400" aria-hidden="true" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Notificaciones">
                      <Bell size={16} className="text-gray-400" aria-hidden="true" />
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold" aria-label="Perfil de usuario">
                      A
                    </div>
                  </div>
                </div>

                {/* KPI Grid */}
                <div
                  className="grid grid-cols-2 xl:grid-cols-4 gap-4"
                  aria-label="Indicadores clave de rendimiento"
                >
                  {kpiCards.map(({ label, value, change, up, icon: Icon, iconColor, iconBg }) => (
                    <div
                      key={label}
                      className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: iconBg }}
                          aria-hidden="true"
                        >
                          <Icon size={16} color={iconColor} />
                        </div>
                        <button className="text-gray-300 hover:text-gray-500" aria-label="Más opciones">
                          <MoreHorizontal size={14} aria-hidden="true" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 mb-1">{label}</p>
                      <p className="text-lg font-black text-gray-900">{value}</p>
                      <p
                        className={`text-xs font-semibold mt-1 flex items-center gap-0.5 ${
                          up ? "text-emerald-600" : "text-red-500"
                        }`}
                        aria-label={`Variación: ${change}`}
                      >
                        {up ? "↑" : "↓"} {change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom split */}
                <div className="grid lg:grid-cols-2 gap-4">
                  {/* Recent Orders */}
                  <div className="bg-white border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">Órdenes Recientes</h3>
                        <p className="text-xs text-gray-400">3 órdenes activas</p>
                      </div>
                      <button className="text-xs text-purple-600 font-semibold hover:underline">
                        Ver todas
                      </button>
                    </div>
                    <div className="space-y-2">
                      {recentOrders.map((order) => (
                        <div
                          key={order.id}
                          className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                        >
                          <div>
                            <p className="text-xs font-semibold text-gray-700">{order.item}</p>
                            <p className="text-xs text-gray-400 font-mono">{order.id}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusStyle[order.status]}`}>
                              {order.status}
                            </span>
                            <span className="text-xs font-bold text-gray-700">{order.amount}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mini chart */}
                  <div className="bg-white border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900 text-sm">Ventas por Categoría</h3>
                      <span className="text-xs text-gray-400">Este mes</span>
                    </div>
                    <div
                      className="space-y-3"
                      role="list"
                      aria-label="Ventas por categoría de producto"
                    >
                      {[
                        { cat: "Hamburguesas", pct: 78, color: "#F97316" },
                        { cat: "Café", pct: 63, color: "#7C3AED" },
                        { cat: "Bebidas", pct: 55, color: "#3B82F6" },
                        { cat: "Acompañamientos", pct: 40, color: "#10B981" },
                        { cat: "Combos", pct: 50, color: "#EC4899" },
                      ].map(({ cat, pct, color }) => (
                        <div key={cat} role="listitem" aria-label={`${cat}: ${pct}%`}>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs font-medium text-gray-600">{cat}</span>
                            <span className="text-xs font-bold text-gray-800">{pct}%</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{ width: `${pct}%`, background: color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>

          {/* Floating badge */}
          <div
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-full px-5 py-2.5 text-sm font-semibold text-gray-700 whitespace-nowrap border border-gray-200 shadow-lg flex items-center gap-2"
            aria-label="Este dashboard es una representación del producto real"
          >
            <Sparkles size={16} className="text-violet-500" /> Vista real de pos.qontta.com
          </div>
        </div>
      </div>
    </section>
  );
}
