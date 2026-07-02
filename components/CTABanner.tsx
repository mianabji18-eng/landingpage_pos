"use client";

import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Sparkles
} from "lucide-react";


export default function CTABanner() {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="section-fade py-32 bg-white"
      aria-label="Llamado a la acción final"
    >
      <div className="container-xl">
        <div
          className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          style={{
            background:
              "linear-gradient(135deg, #ffffff 40%, #fff7ed 75%, #faf5ff 100%)",
            minHeight: "320px",
          }}
        >
          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between p-10 lg:p-14 gap-10">
            {/* Left */}
            <div className="flex-1 space-y-6 max-w-lg">
              <div
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-gray-800 bg-gray-100/80 backdrop-blur-sm border border-gray-200"
              >
                <Sparkles size={14} className="text-[#EA8F1F]" /> Empieza Hoy
              </div>
              <h2 className="text-[72px] leading-[1.02] tracking-[-0.04em] font-semibold text-gray-900">
                ¿Listo para transformar
                <br />
                tu{" "}
                <span className="italic text-[#EA8F1F]">Punto de Venta?</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Únete a cientos de restaurantes y tiendas que ya usan Qontta
                POS para vender más rápido, cometer menos errores y tomar
                mejores decisiones con datos reales.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
                <a
                  href="#precios"
                  className="btn-primary"
                  aria-label="Empezar gratis con POS by Qontta"
                >
                  Empezar Gratis <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://pos.qontta.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  aria-label="Solicitar una demo del producto"
                >
                  Solicitar Demo
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
