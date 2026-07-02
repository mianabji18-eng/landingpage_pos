import { Send, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Producto: [
    { label: "Funcionalidades", href: "#core-features" },
    { label: "Punto de Venta", href: "#core-features" },
    { label: "KDS Cocina", href: "#core-features" },
    { label: "Precios", href: "#precios" },
  ],
  Empresa: [
    { label: "Acerca de", href: "#empresa" },
    { label: "Contacto", href: "mailto:contacto@qontta.com" },
    { label: "Blog", href: "#" },
    { label: "Soporte", href: "#" },
  ],
  Recursos: [
    { label: "Documentación", href: "#" },
    { label: "Centro de Ayuda", href: "#" },
    { label: "Casos de Éxito", href: "#" },
    { label: "API Docs", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-white border-t border-gray-100 pt-16 pb-8"
      role="contentinfo"
      aria-label="Pie de página de POS by Qontta"
    >
      <div className="container-xl">
        {/* Top grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group w-fit"
              aria-label="POS by Qontta - Inicio"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm transition-transform group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A78BFA)" }}
                aria-hidden="true"
              >
                Q
              </div>
              <span className="font-bold text-gray-900 text-lg tracking-tight">
                Qontta <span style={{ color: "#7C3AED" }}>POS</span>
              </span>
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Qontta POS ayuda a restaurantes y tiendas modernas a gestionar
              ventas, cocina, inventario y usuarios — todo desde el navegador,
              sin instalaciones.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3" aria-label="Redes sociales">
              {[
                { icon: Send, label: "Telegram", href: "#" },
                { icon: Twitter, label: "Twitter / X", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600 transition-all duration-200"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <nav
              key={section}
              aria-label={`Links de ${section}`}
            >
              <h3 className="text-sm font-bold text-gray-900 mb-5">{section}</h3>
              <ul className="space-y-3" role="list">
                {links.map(({ label, href }) => (
                  <li key={label} role="listitem">
                    <a
                      href={href}
                      className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-gray-400">
            © 2026 Qontta. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Política de Privacidad
            </a>
            <span className="text-gray-200" aria-hidden="true">|</span>
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
