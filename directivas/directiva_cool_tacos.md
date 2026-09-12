# DIRECTIVA: DESARROLLO_WEB_COOL_TACOS_MURCIA

> **ID:** DIRECTIVA_CT_2026_01
> **Script / Proyecto Asociado:** `COOL TACOS Web App`
> **Última Actualización:** 12/09/2026
> **Estado:** ACTIVO

---

## 1. Objetivos y Alcance
- **Objetivo Principal:** Construir la experiencia web responsive y mobile-first desde cero para el restaurante "COOL TACOS" (French Tacos & Street Food) en Murcia, España.
- **Criterio de Éxito:** La aplicación web debe estar 100% funcional, servible mediante Vite (`npm run dev`), con diseño oscuro/crema urbano, fotografías fotorrealistas de producto, creador interactivo de French Tacos, carta completa categorizada, modal de pedidos a domicilio/takeaway y mapa/ubicación en Murcia.

## 2. Especificaciones de Entrada/Salida (I/O)

### Entradas (Inputs)
- Concepto de marca: French Tacos, cultura urbana, queso fundido, Murcia.
- Paleta: Negro Carbón, Crema Suave, Amarillo Queso, Rojo/Naranja Picante.
- Tipografías Google Fonts: Syne / Bebas Neue + Outfit.

### Salidas (Outputs)
- `index.html`: Estructura principal mobile-first.
- `src/style.css`: Sistema de diseño CSS moderno con tokens.
- `src/main.js`: Lógica interactiva del menú, customizador de tacos y pedidos.
- `src/data/menuData.js`: Datos completos de productos, ingredientes y precios.
- `public/assets/`: Imágenes de alta calidad generadas para tacos, entrantes y postres.

## 3. Flujo Lógico (Algoritmo)
1. **Inicialización de Proyecto:** Crear estructura Vite + Vanilla JS con dependencias.
2. **Generación de Assets:** Generar imágenes apetecibles fotorrealistas de French Tacos gratinados y street food.
3. **Construcción del Sistema de Estilos:** Definir CSS Custom Properties para paleta urbana, tipografía con carácter y diseño responsive táctil.
4. **Desarrollo de Componentes y Vistas:**
   - Hero banner de alto impacto visual (<5 segundos de comprensión).
   - Explicador gráfico "¿Qué es un Taco Francés?".
   - Tarjetas de Tacos populares (Bestsellers).
   - Creador interactivo en tiempo real ("Diseña tu Taco").
   - Menú filtrable categorizado.
   - Estado de apertura en vivo (Huso horario Murcia Europe/Madrid).
   - Modal de pedidos a domicilio (Glovo, Uber Eats, WhatsApp Directo).
5. **Verificación:** Probar build y ejecución sin errores.

## 4. Herramientas y Librerías
- **Frontend Core:** HTML5, CSS3 Vanilla, JavaScript ES6+.
- **Build Tool:** Vite.
- **Fuentes:** Google Fonts (Syne, Bebas Neue, Outfit).

## 5. Restricciones y Casos Borde (Edge Cases)
- **Mobile First:** Más del 85% del tráfico vendrá de smartphones vía Instagram/TikTok. Botones y controles deben ser amplios (mínimo 44px de área táctil).
- **Formatos:** No usar plantillas genéricas de restaurantes convencionales ni dashboards. La comida y la vibra urbana son los protagonistas.
- **Zonas Horarias:** El horario del local debe calcularse con el huso `Europe/Madrid`.

## 6. Protocolo de Errores y Aprendizajes (Memoria Viva)

| Fecha | Error Detectado | Causa Raíz | Solución/Parche Aplicado |
|-------|-----------------|------------|--------------------------|
| 12/09/2026 | Inicialización de workspace | Workspace vacío | Se crea configuración Vite limpia en el directorio raíz |

## 7. Ejemplos de Uso

```bash
# Instalación e inicio de servidor de desarrollo
npm install
npm run dev
```

## 8. Checklist de Pre-Ejecución
- [x] Workspace verificado
- [x] Plan de implementación registrado en artefactos

## 9. Checklist Post-Ejecución
- [ ] Servidor de desarrollo respondiendo en localhost
- [ ] Creador de Tacos sumando correctamente opciones M/L/XL y carnes
- [ ] Modal de pedidos funcionando
- [ ] Imágenes renderizando correctamente
