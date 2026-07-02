"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, User } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add("visible"), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Sección principal"
      className="section-fade relative min-h-screen flex items-center overflow-hidden pt-20 pb-24 lg:pt-24 lg:pb-32"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 65% 45%, #EDE9FE 0%, #F5F3FF 40%, #FFF7ED 72%, #FFFFFF 100%)",
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-20 left-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #A78BFA 0%, transparent 70%)",
            transform: "translateX(-10%)",
          }}
        />
      </div>

      <div className="container-xl relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center min-h-[calc(100vh-64px)]">
          {/* Left — Copy */}
          <div className="flex flex-col justify-center space-y-10 pt-8 lg:pt-0">
            {/* Social proof badge */}
            <div className="flex items-center gap-4">
              <div
                className="flex items-center -space-x-3"
                aria-label="Avatares de clientes"
              >
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-violet-200 border-2 border-white flex items-center justify-center text-violet-600 shadow-sm"
                    aria-hidden="true"
                  >
                    <User size={18} />
                  </div>
                ))}
              </div>
              <div
                className="bg-white/60 backdrop-blur-md rounded-full px-4 py-2 text-sm font-semibold text-gray-700 border border-white shadow-sm"
              >
                500+ Negocios Activos
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-5">
              <h1 className="text-[72px] leading-[1.02] tracking-[-0.04em] font-semibold text-gray-900">
                El POS que hace crecer{" "}
                <br className="hidden sm:block" />
                tu{" "}
                <span className="italic text-[#EA8F1F]">Negocio</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                Desde el punto de venta hasta el inventario, Qontta
                centraliza toda la operación de tu negocio en una sola plataforma
                web. Sin instalaciones, sin complicaciones.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
              <a
                href="#precios"
                className="btn-primary"
                aria-label="Empezar gratis con POS by Qontta"
              >
                Empezar Gratis <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#demo"
                className="btn-ghost"
                aria-label="Ver demostración del producto"
              >
                Ver Demostración
              </a>
            </div>


          </div>

          {/* Right — Hero Image */}
          <div
            className="relative flex items-center justify-center h-[420px] lg:h-[600px] w-full"
            aria-hidden="true"
          >
            <div className="absolute w-[110%] h-[100%] lg:w-[110%] lg:h-[100%] flex items-center justify-start lg:justify-center right-0 lg:right-[-5%]">
              <img 
                src="/image.png" 
                alt="Qontta POS Preview" 
                className="w-full h-full object-cover object-left rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
