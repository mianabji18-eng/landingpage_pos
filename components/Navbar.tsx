"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Clientes", href: "#clientes" },
  { label: "Características", href: "#core-features" },
  { label: "Producto", href: "#producto" },
  { label: "Precios", href: "#precios" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0].href);
  const isClicking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Skip updating activeLink if we just clicked a nav link
      if (isClicking.current) return;

      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = ""; // fallback

      // check which section is in view
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = `#${section}`;
            break;
          }
        }
      }
      
      // if scrolled to top, set to first link
      if (window.scrollY < 100) {
          currentSection = navLinks[0].href;
      }
      
      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-gray-200/80"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container-xl">
        <nav
          aria-label="Navegación principal"
          className="flex items-center justify-between h-16 md:h-18"
        >
          {/* Logo */}
          <Link href="/" aria-label="POS by Qontta — Inicio" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm transition-transform group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A78BFA)" }}
              aria-hidden="true"
            >
              Q
            </div>
            <span className="font-bold text-gray-900 text-[1.0625rem] tracking-tight">
              Qontta <span className="text-[#7C3AED]">POS</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <motion.nav 
            initial={{ opacity: 0, scale: 0.85, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.35, duration: 0.7, delay: 0.1 }}
            className="hidden md:flex items-center bg-gray-50/80 p-1.5 rounded-full border border-gray-200/60 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] backdrop-blur-md"
          >
            <ul className="flex items-center gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.label} className="relative">
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white rounded-full shadow-sm ring-1 ring-gray-200/50"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <a
                    href={link.href}
                    onClick={(e) => {
                      isClicking.current = true;
                      setActiveLink(link.href);
                      setTimeout(() => {
                        isClicking.current = false;
                      }, 1000); // Wait for smooth scroll to finish
                    }}
                    className={`relative z-10 px-5 py-2 rounded-full text-[14.5px] font-medium transition-colors duration-200 block ${
                      activeLink === link.href
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
                    }`}
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#demo"
              className="bg-black text-white hover:bg-gray-800 px-6 py-2.5 rounded-full text-[14.5px] font-medium transition-colors flex items-center gap-2 shadow-lg shadow-black/10"
              aria-label="Solicitar Demo"
            >
              Solicitar Demo <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 px-4 rounded-xl text-gray-700 font-medium hover:bg-purple-50 hover:text-[#7C3AED] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="#demo"
              className="btn-primary w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Demo <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
