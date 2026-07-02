"use client";

import { useEffect, useRef, useState } from "react";
import {
  Utensils,
  Coffee,
  Pizza,
  ChefHat,
  Beer,
  Store,
  CakeSlice,
  UtensilsCrossed,
} from "lucide-react";

const businesses = [
  { name: "Hamburguesas", icon: Utensils },
  { name: "Cafeterías", icon: Coffee },
  { name: "Pizzerías", icon: Pizza },
  { name: "Restaurantes", icon: ChefHat },
  { name: "Bares", icon: Beer },
  { name: "Tiendas Retail", icon: Store },
  { name: "Pastelerías", icon: CakeSlice },
  { name: "Comidas Rápidas", icon: UtensilsCrossed },
];

const metrics = [
  {
    number: 500,
    suffix: "+",
    label: "Negocios confían en nosotros",
    decimals: 0,
  },
  {
    number: 60,
    suffix: "k+",
    label: "Transacciones procesadas",
    decimals: 0,
  },
  {
    number: 4.9,
    suffix: "★",
    label: "Calificación promedio",
    decimals: 1,
  },
  {
    number: 99.9,
    suffix: "%",
    label: "Tiempo de actividad",
    decimals: 1,
  },
];

function AnimatedNumber({ value, decimals, isVisible }: { value: number; decimals: number; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutExpo for smooth deceleration
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setDisplayValue(value * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value, isVisible]);

  return <>{displayValue.toFixed(decimals)}</>;
}

export default function TrustedBy() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="clientes"
      ref={sectionRef}
      className="section-fade py-20 bg-gray-50/50 border-y border-gray-100"
      aria-label="Métricas y tipos de negocio que confían en Qontta POS"
    >
      <div className="container-xl max-w-6xl mx-auto px-4">
        {/* Headline */}
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-gray-400 mb-10">
          Confiado por negocios de toda Colombia
        </p>

        {/* Business type grid (Clean Logo Grid Style) */}
        <div
          className="flex flex-wrap justify-center md:grid md:grid-cols-4 gap-8 md:gap-12 mb-20 mx-auto max-w-5xl"
          role="list"
          aria-label="Tipos de negocio"
        >
          {businesses.map(({ name, icon: Icon }) => (
            <div
              key={name}
              role="listitem"
              className="flex items-center justify-center gap-3 group cursor-default"
            >
              <Icon className="w-6 h-6 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
              <span className="text-sm md:text-base font-semibold text-gray-500 group-hover:text-gray-800 transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          aria-label="Estadísticas clave"
        >
          {metrics.map(({ number, suffix, label, decimals }) => (
            <div
              key={label}
              className="text-center p-4 transition-transform duration-300 group hover:-translate-y-1"
            >
              <div
                className="text-4xl sm:text-5xl font-black text-purple-600 mb-3 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center drop-shadow-sm"
                aria-label={`${number}${suffix}`}
              >
                <AnimatedNumber value={number} decimals={decimals} isVisible={isVisible} />
                <span>{suffix}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-500 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
