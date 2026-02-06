# Programs Module

Este módulo es responsable de mostrar el catálogo completo de programas y giras de estudio disponibles.

## 📋 Descripción

El módulo Programs permite a los usuarios explorar la oferta turística de la agencia. Implementa un sistema de filtrado jerárquico (Zona -> Destino -> Región) para facilitar la búsqueda de itinerarios específicos y permite la visualización o descarga de los programas en formato PDF.

## 🧩 Componentes

### `ProgramsComponent`
Controlador principal de la vista de programas.

**Lógica de Negocio:**
*   **Filtrado Reactivo**: Utiliza **Angular Signals** (`selectedZone`, `selectedDestination`, `selectedRegion`) y `computed` values para actualizar dinámicamente las opciones de los selectores y la lista de programas disponibles.
*   **Gestión de Archivos**: Lógica para determinar qué PDFs mostrar según la selección actual del usuario.
*   **Descargas**: Funcionalidad para abrir PDFs en nueva pestaña o forzar la descarga directa.

## 🗃 Datos
La estructura de datos de los programas se importa desde `constants/programs.constant`, manteniendo la lógica separada de los datos.

## 🛠 Dependencias e Imports
*   `PrimeNG`: `SelectModule`, `CardModule`, `ButtonModule`.
*   `Shared`: `SectionTitleComponent`, interfaces (`ProgramZone`, `ProgramDestination`, etc.).
