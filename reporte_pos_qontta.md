# 📊 Reporte Completo de Servicios — POS by Qontta

> **URL:** https://pos.qontta.com  
> **Plataforma:** Aplicación web (Next.js / PWA)  
> **Empresa:** Qontta  
> **Plan Actual:** Premium ($189.900/mes)  
> **Fecha del reporte:** 1 de julio de 2026  
> **Usuario evaluado:** Umbral (armando.hernandez@qontta.com) — Rol: Administrador

---

## 📑 Índice de Contenidos

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Dashboard — Panel de Control](#1--dashboard--panel-de-control)
3. [Ventas — Punto de Venta](#2--ventas--punto-de-venta)
4. [KDS — Kitchen Display System](#3--kds--kitchen-display-system)
5. [Productos](#4--productos)
6. [Categorías](#5--categorías)
7. [Presentaciones](#6--presentaciones)
8. [Modificadores](#7--modificadores)
9. [Inventario](#8--inventario)
10. [Usuarios](#9--usuarios)
11. [Configuración](#10--configuración)
12. [Planes y Precios](#11--planes-y-precios)
13. [Datos Actuales del Negocio](#datos-actuales-del-negocio)

---

## Resumen Ejecutivo

**POS by Qontta** es un sistema de punto de venta (POS) basado en la web, diseñado para restaurantes y negocios retail. Ofrece gestión integral de ventas, productos, inventario, cocina (KDS), usuarios y configuración del negocio. La plataforma es una Progressive Web App (PWA) construida con Next.js, lo que permite su uso desde cualquier dispositivo con navegador web.

### Módulos Principales

| Módulo | Ruta | Descripción |
|--------|------|-------------|
| Dashboard | `/dashboard` | Panel de control con métricas en tiempo real |
| Ventas | `/ventas` | Punto de venta con carrito y gestión de mesas |
| KDS | `/kds` | Sistema de pantalla de cocina |
| Productos | `/productos` | Catálogo de productos con precios |
| Categorías | `/categorias` | Organización de productos por categoría |
| Presentaciones | `/presentaciones` | Tamaños y variantes de productos |
| Modificadores | `/modificadores` | Extras y personalizaciones |
| Inventario | `/inventario` | Control de stock y cierres |
| Usuarios | `/usuarios` | Gestión de roles y accesos |
| Configuración | `/configuracion` | Ajustes generales del negocio |
| Planes | `/planes` | Suscripciones y precios |

---

## 1. 🏠 Dashboard — Panel de Control

> **Ruta:** `/dashboard`

El panel de control ofrece una vista general del rendimiento del negocio con métricas en tiempo real.

### Métricas del Día (Hoy)

| Métrica | Descripción |
|---------|-------------|
| **Total Ventas** | Número total de ventas registradas en el día |
| **Ventas Válidas** | Ventas excluyendo devoluciones |
| **Devoluciones** | Monto total devuelto hoy |
| **Total Ingresos** | Ingresos netos válidos del día |

### Reportes Adicionales

- **Ventas por Categoría** — Gráfico de distribución de ventas por categoría de producto
- **Resumen de la Semana** — Ventas, ingresado, devuelto y ventas válidas de la semana
- **Resumen del Mes** — Mismas métricas acumuladas del mes
- **Órdenes Recientes** — Listado de las últimas órdenes procesadas

### Funcionalidades

| Función | Descripción |
|---------|-------------|
| **Factura Z** | Generación de factura Z (cierre de caja diario) |

---

## 2. 💰 Ventas — Punto de Venta

> **Ruta:** `/ventas`

Módulo principal de operación donde se registran las ventas del negocio. Es el corazón del POS.

### Características

| Función | Descripción |
|---------|-------------|
| **Catálogo Visual** | Muestra productos con código, nombre, precio y stock disponible |
| **Filtro por Categorías** | Botones rápidos para filtrar por: Hamburguesa, Café, Bebidas, Acompañamientos, Postres, Combos |
| **Gestión de Mesas** | Asignación de ventas a mesas del restaurante |
| **Carrito de Compras** | Panel lateral "Order Details" con resumen de la venta |
| **Múltiples Ventas** | Soporte para múltiples ventas simultáneas (pestañas: "Venta 1", etc.) |
| **Tipo de Orden** | Selección de modalidad: Local, etc. |
| **Turno de Caja** | Apertura/cierre de turno con monto inicial en efectivo |
| **Historial de Turnos** | Registro de todos los turnos de caja anteriores |

### Información por Producto en Venta

- Nombre del producto
- Código de barras / código interno
- Precio de venta
- Stock disponible (o indicador "Sin stock")

---

## 3. 🍽️ KDS — Kitchen Display System

> **Ruta:** `/kds`

Sistema de pantalla de cocina para gestionar órdenes en preparación.

### Características

| Función | Descripción |
|---------|-------------|
| **Pantalla de Cocina** | Visualización de órdenes pendientes por área |
| **Áreas de Cocina** | Soporte para múltiples áreas (ej: cocina caliente, cocina fría, bar) |
| **Actualización** | Botón de actualización manual para refrescar órdenes |
| **Multi-área** | Selección de áreas de cocina para visualización filtrada |

> [!NOTE]
> Requiere configuración previa de áreas de cocina en la sección de Configuración.

---

## 4. 📦 Productos

> **Ruta:** `/productos`

Gestión completa del catálogo de productos del negocio.

### Campos por Producto

| Campo | Tipo | Descripción |
|-------|------|-------------|
| **Código** | Texto (auto-generado) | Código único del producto. Se genera automáticamente si se deja en blanco |
| **Nombre** | Texto | Nombre del producto |
| **Categoría** | Selector | Categoría a la que pertenece |
| **Precio Compra** | Numérico | Costo de adquisición/producción |
| **Precio Venta** | Numérico | Precio al público |
| **Sin inventario** | Checkbox | Producto de menú restaurante (no controla stock) |
| **¿Tiene presentación?** | Checkbox | Si el producto tiene variantes de tamaño |

### Funcionalidades

| Función | Descripción |
|---------|-------------|
| **+ Nuevo Producto** | Crear un nuevo producto con formulario modal |
| **Configuración** | Ajustes de la sección de productos |
| **Columnas** | Personalización de columnas visibles en la tabla |
| **Búsqueda** | Buscar por nombre o código |
| **Acciones** | Menú contextual por producto (editar, eliminar) |
| **Paginación** | Navegación entre páginas de resultados |

---

## 5. 🏷️ Categorías

> **Ruta:** `/categorias`

Organización de productos en categorías para facilitar la navegación en el punto de venta.

### Campos por Categoría

| Campo | Tipo | Descripción |
|-------|------|-------------|
| **ID** | Auto-generado | Identificador único |
| **Nombre** | Texto | Nombre de la categoría |

### Funcionalidades

- ➕ Crear nueva categoría
- ✏️ Editar categoría existente
- 🗑️ Eliminar categoría
- 🔍 Búsqueda por nombre
- ⚙️ Personalización de columnas

### Categorías Configuradas Actualmente

| ID | Nombre |
|----|--------|
| 8 | 🍔 Hamburguesa |
| 9 | ☕ Café |
| 10 | 🥤 Bebidas |
| 11 | 🍟 Acompañamientos |
| 12 | 🍰 Postres |
| 13 | 🎯 Combos |

---

## 6. 📐 Presentaciones

> **Ruta:** `/presentaciones`

Variantes de tamaño o presentación que se pueden asignar a productos.

### Campos por Presentación

| Campo | Tipo | Descripción |
|-------|------|-------------|
| **ID** | Auto-generado | Identificador único |
| **Nombre** | Texto | Nombre de la presentación/tamaño |

### Presentaciones Configuradas

| ID | Nombre | Uso Sugerido |
|----|--------|-------------|
| 1 | Pequeño | Papas, postres, bebidas |
| 2 | Mediano | Papas, postres, bebidas |
| 3 | Grande | Papas, postres, bebidas |
| 4 | Personal | Combos individuales |
| 5 | Familiar | Combos familiares |
| 6 | 8 oz | Cafés (espresso, americano) |
| 7 | 12 oz | Cafés (latte, cappuccino) |
| 8 | 16 oz | Cafés grandes, lattes, frappés |

---

## 7. 🧩 Modificadores

> **Ruta:** `/modificadores`

Módulo para configurar extras, personalizaciones y opciones adicionales de los productos.

> [!IMPORTANT]
> Al momento de la exploración, este módulo redirige al Dashboard. Esto puede indicar que:
> - El módulo aún no está completamente implementado
> - Requiere configuración adicional para habilitarse
> - La ruta puede variar según el plan contratado

### Uso Esperado

Los modificadores permiten agregar opciones como:
- Extras (queso adicional, tocineta, aguacate)
- Tipo de leche (entera, deslactosada, de almendras)
- Nivel de cocción (término medio, bien asada)
- Salsas (BBQ, mostaza-miel, ranch)
- Exclusiones (sin cebolla, sin tomate)

---

## 8. 📊 Inventario

> **Ruta:** `/inventario`

Control de stock, gestión de cantidades y cierres de inventario.

### Campos por Item de Inventario

| Campo | Tipo | Descripción |
|-------|------|-------------|
| **Código Producto** | Texto | Código de barras o interno |
| **Producto** | Texto | Nombre del producto |
| **Presentación** | Texto | Presentación asociada |
| **Cantidad** | Numérico | Cantidad en stock |

### Funcionalidades

| Función | Descripción |
|---------|-------------|
| **+ Nuevo Item** | Agregar un producto al inventario |
| **Cargar Excel** | Importación masiva de inventario desde archivo Excel |
| **Descargar Plantilla** | Descargar plantilla Excel para carga masiva |
| **Iniciar Nuevo Inventario** | Comenzar un nuevo conteo/cierre de inventario |
| **Historial de Cierres** | Ver cierres de inventario anteriores |
| **Eliminar todo** | Limpiar todo el inventario |
| **Búsqueda** | Buscar por código, producto o presentación |

### Estado Actual del Inventario

| Código | Producto | Cantidad |
|--------|----------|----------|
| 2000300000210 | Gaseosa Personal | 15.00 |
| 2000300000227 | Gaseosa 1000ml | 25.00 |
| 2000300000623 | Gaseosa 1500ml | 50.00 |

> [!NOTE]
> Aún no se ha realizado ningún cierre de inventario.

---

## 9. 👥 Usuarios

> **Ruta:** `/usuarios`

Gestión de usuarios con roles y permisos de acceso al sistema.

### Campos por Usuario

| Campo | Tipo | Descripción |
|-------|------|-------------|
| **Nombre** | Texto | Nombre del usuario |
| **Correo** | Email | Correo electrónico de acceso |
| **Rol** | Selector | Rol asignado (Administrador, Cajero, etc.) |
| **Creado** | Fecha | Fecha de creación de la cuenta |

### Usuarios Registrados

| Nombre | Correo | Rol | Creado |
|--------|--------|-----|--------|
| Umbral | armando.hernandez@qontta.com | Administrador | 28/06/2026 |

### Funcionalidades

- ➕ Crear nuevo usuario
- ✏️ Editar usuario existente
- 🗑️ Eliminar usuario
- 🔍 Búsqueda por nombre

---

## 10. ⚙️ Configuración

> **Ruta:** `/configuracion`

Ajustes generales del negocio y parámetros operativos.

### Información General

| Campo | Placeholder / Ejemplo | Descripción |
|-------|----------------------|-------------|
| **Nombre del negocio** | Ej: Mi Tienda | Nombre comercial |
| **NIT / Identificación** | Ej: 900123456-1 | Identificación fiscal |
| **Email** | contacto@empresa.com | Correo de contacto |
| **Teléfono** | Ej: 3001234567 | Teléfono del negocio |
| **Dirección** | Ej: Calle 15 # 8-32, Bogotá | Dirección física |
| **Descripción** | Breve descripción del negocio | Descripción comercial |

### Tipo de Negocio

| Configuración | Valor Actual | Descripción |
|---------------|-------------|-------------|
| **Modalidad** | Restaurante | Afecta la navegación y funcionalidades disponibles |

> [!WARNING]
> Cambiar la modalidad del negocio afecta las funcionalidades disponibles en toda la plataforma.

### Áreas de Cocina

- Permite agregar múltiples áreas (ej: "Cocina caliente", "Cocina fría", "Bar")
- Área actual configurada: **cocina**
- Se usan en el módulo KDS para distribuir órdenes

### Comisiones por Método de Pago

| Método de Pago | Tipo de Comisión | Ejemplo |
|----------------|-----------------|---------|
| Transferencia / Nequi / Daviplata | Comisión (%) | ej. 0.5% |
| Tarjeta | Comisión (%) | ej. 2.95% |
| Tarjeta | Cobro fijo ($) | ej. $900 |

> **Ejemplo:** En una venta de $100.000 por tarjeta, se recibirían aprox. $96.150 después de comisiones.

---

## 11. 💳 Planes y Precios

> **Ruta:** `/planes`

### Planes Disponibles

| Plan | Precio | Características | Estado |
|------|--------|----------------|--------|
| **Personalizado** | $0/mes* | Plan a medida con precio acordado individualmente | Disponible |
| **Básico** | $49.900/mes | Para negocios retail pequeños. Sin módulo restaurante | Disponible |
| **Pro** | $99.900/mes | Retail y restaurante básico. Hasta 15 mesas y 5 usuarios | Disponible |
| **Premium** | $189.900/mes | Todo ilimitado. Multi-zona, KDS multi-área | ✅ **Plan actual** |

> *El plan Personalizado tiene un precio acordado individualmente con el equipo de ventas.

### Comparativa de Funcionalidades por Plan

| Funcionalidad | Básico | Pro | Premium |
|---------------|--------|-----|---------|
| Punto de Venta | ✅ | ✅ | ✅ |
| Gestión de Productos | ✅ | ✅ | ✅ |
| Inventario | ✅ | ✅ | ✅ |
| Módulo Restaurante | ❌ | ✅ | ✅ |
| Mesas | ❌ | Hasta 15 | Ilimitadas |
| Usuarios | Limitado | Hasta 5 | Ilimitados |
| KDS Multi-área | ❌ | ❌ | ✅ |
| Multi-zona | ❌ | ❌ | ✅ |

---

## Datos Actuales del Negocio

### Resumen de Datos Configurados

| Elemento | Cantidad |
|----------|----------|
| 🏷️ Categorías | 6 |
| 📦 Productos | 60 |
| 📐 Presentaciones | 8 |
| 👥 Usuarios | 1 |
| 📊 Items en Inventario | 3 |
| 💰 Ventas realizadas | 0 |

### Productos por Categoría (60 Total)

#### 🍔 Hamburguesa (10 productos)
| Producto | Precio Compra | Precio Venta |
|----------|:------------:|:------------:|
| Hamburguesa Clásica | $8.000 | $18.000 |
| Hamburguesa Doble Carne | $12.000 | $25.000 |
| Hamburguesa con Queso | $9.000 | $20.000 |
| Hamburguesa BBQ | $10.000 | $22.000 |
| Hamburguesa de Pollo | $8.500 | $19.000 |
| Hamburguesa Veggie | $9.000 | $20.000 |
| Hamburguesa Hawaiana | $10.000 | $21.000 |
| Hamburguesa Mexicana | $10.500 | $22.000 |
| Hamburguesa de la Casa | $13.000 | $28.000 |
| Hamburguesa Kids | $6.000 | $14.000 |

#### ☕ Café (10 productos)
| Producto | Precio Compra | Precio Venta |
|----------|:------------:|:------------:|
| Café Americano | $1.500 | $5.000 |
| Café Latte | $2.500 | $7.000 |
| Cappuccino | $2.500 | $7.500 |
| Espresso | $1.200 | $4.500 |
| Espresso Doble | $2.000 | $6.000 |
| Mocaccino | $3.000 | $8.000 |
| Café Caramelo | $3.000 | $8.500 |
| Café Vainilla | $3.000 | $8.500 |
| Frappé de Café | $3.500 | $10.000 |
| Café Irlandés | $4.000 | $12.000 |

#### 🥤 Bebidas (10 productos)
| Producto | Precio Compra | Precio Venta |
|----------|:------------:|:------------:|
| Agua Botella 600ml | $800 | $3.000 |
| Gaseosa Personal | $1.500 | $4.000 |
| Gaseosa Litro | $3.000 | $7.000 |
| Jugo Natural de Naranja | $2.500 | $6.000 |
| Jugo Natural de Mango | $2.500 | $6.000 |
| Limonada Natural | $1.500 | $5.000 |
| Limonada de Coco | $2.000 | $6.500 |
| Malteada de Chocolate | $3.500 | $9.000 |
| Malteada de Fresa | $3.500 | $9.000 |
| Té Helado | $1.500 | $5.000 |

#### 🍟 Acompañamientos (10 productos)
| Producto | Precio Compra | Precio Venta |
|----------|:------------:|:------------:|
| Papas Francesas | $2.500 | $7.000 |
| Papas con Queso | $3.500 | $9.000 |
| Aros de Cebolla | $3.000 | $8.000 |
| Nuggets de Pollo x6 | $4.000 | $10.000 |
| Nuggets de Pollo x12 | $7.000 | $16.000 |
| Alitas BBQ x6 | $5.000 | $14.000 |
| Ensalada César | $3.500 | $9.000 |
| Ensalada de la Casa | $3.000 | $8.000 |
| Mazorca con Mantequilla | $2.000 | $5.000 |
| Dedos de Queso x6 | $3.500 | $9.000 |

#### 🍰 Postres (10 productos)
| Producto | Precio Compra | Precio Venta |
|----------|:------------:|:------------:|
| Brownie con Helado | $3.500 | $9.000 |
| Cheesecake | $4.000 | $10.000 |
| Torta de Chocolate | $3.500 | $9.000 |
| Helado 1 Bola | $1.500 | $5.000 |
| Helado 2 Bolas | $2.500 | $7.000 |
| Waffle con Helado | $4.000 | $11.000 |
| Churros con Chocolate | $2.500 | $7.000 |
| Flan de Caramelo | $2.000 | $6.000 |
| Milhojas | $3.000 | $8.000 |
| Sundae de Chocolate | $3.000 | $8.000 |

#### 🎯 Combos (10 productos)
| Producto | Precio Compra | Precio Venta |
|----------|:------------:|:------------:|
| Combo Clásico | $12.000 | $25.000 |
| Combo Doble | $16.000 | $32.000 |
| Combo BBQ | $14.000 | $28.000 |
| Combo Pollo | $13.000 | $26.000 |
| Combo Kids | $8.000 | $18.000 |
| Combo Pareja | $22.000 | $45.000 |
| Combo Familiar | $35.000 | $65.000 |
| Combo Café + Brownie | $5.000 | $12.000 |
| Combo Desayuno | $7.000 | $15.000 |
| Combo Hawaiano | $14.000 | $28.000 |

---

## Análisis de Márgenes

| Categoría | Margen Promedio | Rango Margen |
|-----------|:--------------:|:------------:|
| 🍔 Hamburguesa | ~55% | 50% — 57% |
| ☕ Café | ~63% | 60% — 70% |
| 🥤 Bebidas | ~60% | 56% — 73% |
| 🍟 Acompañamientos | ~60% | 56% — 64% |
| 🍰 Postres | ~62% | 57% — 70% |
| 🎯 Combos | ~50% | 46% — 58% |

---

> **Reporte generado automáticamente** mediante automatización de Chrome (Puppeteer) controlado por Antigravity AI.  
> **Fecha:** 1 de julio de 2026
