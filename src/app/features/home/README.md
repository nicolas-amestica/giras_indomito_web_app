# Home Module

Este módulo gestiona la página de inicio (Landing Page) de la aplicación Giras Indómito.

## 📋 Descripción

El módulo Home es la puerta de entrada al sitio web. Su objetivo es capturar la atención del usuario mediante imágenes impactantes, presentar los destinos más populares y ofrecer prueba social a través de testimonios.

## 🧩 Componentes

### `HomeComponent`
Componente principal que estructura la vista de inicio.

**Características:**
*   **Hero Slider**: Carrusel de imágenes de alta calidad implementado con Swiper (vía `register` de `swiper/element/bundle`).
*   **Destinos Destacados**: Sección que muestra tarjetas con los destinos más solicitados (Pucón, Bariloche, Camboriú).
*   **Testimonios**: Carrusel de opiniones de clientes (Colegios, Liceos).
*   **Animaciones**: Uso de `ParallaxDirective` y transiciones visuales.

## 🛠 Dependencias e Imports
*   `Swiper`: Para el carrusel principal.
*   `PrimeNG`: `CarouselModule`, `ButtonModule`.
*   `Shared`: `SectionTitleComponent`, `DestinationCardComponent`, `ParallaxDirective`.

## ⚙️ Configuración
Los datos visualizados (imágenes del slider, lista de destinos, testimonios) están definidos actualmente como constantes dentro del componente `HomeComponent`.
