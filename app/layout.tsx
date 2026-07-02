import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "POS by Qontta — El Sistema de Punto de Venta para Restaurantes y Retail",
  description:
    "POS by Qontta es el sistema de punto de venta web más completo para restaurantes y tiendas. Gestiona ventas, inventario, cocina (KDS) y más desde cualquier dispositivo. Planes desde $49.900/mes.",
  keywords:
    "POS, punto de venta, restaurante, sistema POS Colombia, software caja registradora, KDS cocina, inventario restaurante, Qontta",
  authors: [{ name: "Qontta" }],
  openGraph: {
    title: "POS by Qontta — El POS que hace crecer tu negocio",
    description:
      "Sistema de punto de venta web para restaurantes y retail. Gestión integral de ventas, cocina, inventario y reportes en tiempo real.",
    type: "website",
    url: "https://pos.qontta.com",
    siteName: "POS by Qontta",
  },
  twitter: {
    card: "summary_large_image",
    title: "POS by Qontta — El POS que hace crecer tu negocio",
    description:
      "Sistema de punto de venta web para restaurantes y retail. Planes desde $49.900/mes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
