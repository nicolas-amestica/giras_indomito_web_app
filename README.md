# Giras Indómito Web App

Sitio web oficial de **Giras Indómito**, una agencia especializada en giras de estudio y turismo aventura en Chile. Esta aplicación moderna está construida con Angular 21 y ofrece una experiencia interactiva para explorar destinos, programas y servicios.

## 🚀 Características Principales

*   **Inicio**: Presentación de la agencia y destacados.
*   **Programas**: Catálogo detallado de destinos turísticos (Pucón, San Pedro de Atacama, Patagonia, etc.) con itinerarios descargables en PDF.
*   **Servicios**: Información sobre los servicios incluidos y opciones personalizadas.
*   **Nosotros**: Historia y misión de Giras Indómito.
*   **Contacto**: Formulario para consultas y cotizaciones.
*   **Diseño Responsivo**: Adaptado para móviles y escritorio utilizando Tailwind CSS.
*   **Animaciones**: Experiencia de usuario enriquecida con GSAP y AOS.

## 🛠 Tech Stack

Este proyecto utiliza las últimas tecnologías del ecosistema web:

*   **Framework**: [Angular v21](https://angular.dev/)
*   **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI**: [PrimeNG](https://primeng.org/)
*   **Iconos**: [PrimeIcons](https://primeng.org/icons)
*   **Animaciones**: [GSAP](https://gsap.com/) y [AOS](https://michalsnik.github.io/aos/)
*   **Carruseles**: [Swiper](https://swiperjs.com/)
*   **Generación de PDF**: [pdfmake](http://pdfmake.org/)
*   **Server-Side Rendering (SSR)**: Optimizado para SEO y rendimiento inicial.

## 📋 Requisitos Previos

*   **Node.js**: Versión `22.12.0` (recomendado usar `nvm` para gestionar la versión).
*   **NPM**: Incluido con Node.js.

## ⚙️ Instalación y Configuración

1.  **Clonar el repositorio**:
    ```bash
    git clone <url-del-repositorio>
    cd giras_indomito_ng_dev_pub_usw2
    ```

2.  **Configurar entorno Node**:
    Si usas `nvm`, puedes cargar la versión correcta automáticamente:
    ```bash
    nvm use
    ```

3.  **Instalar dependencias**:
    ```bash
    npm install
    ```

## ▶️ Ejecución

### Servidor de Desarrollo
Para iniciar el servidor de desarrollo local:

```bash
npm start
```
> **Nota**: El script `start` carga automáticamente el entorno nvm y ejecuta `ng serve` en el puerto `4400` sin HMR (Hot Module Replacement) por defecto.

Alternativamente, puedes usar el comando estándar de Angular:
```bash
ng serve
```
La aplicación estará disponible en `http://localhost:4400/` (o el puerto que indique la consola).

### Build de Producción
Para compilar el proyecto para producción:

```bash
npm run build
```
Los archivos compilados se guardarán en el directorio `dist/`.

## 🚚 Despliegue FTP

El despliegue se realiza con el script local `tools/deploy-ftp.local.sh`. Por seguridad, el script, las credenciales y los manifiestos de despliegue están excluidos de Git mediante `.git/info/exclude` y no deben subirse al repositorio.

### Configuración local

Crear el archivo `.ftp-deploy.local.env` en la raíz del proyecto:

```bash
FTP_HOST='servidor-ftp-asignado-por-el-proveedor'
FTP_PORT='21'
FTP_USER='usuario-ftp'
FTP_PASSWORD='contrasena-ftp'
```

Restringir los permisos de los archivos locales:

```bash
chmod 600 .ftp-deploy.local.env
chmod 700 tools/deploy-ftp.local.sh
```

Nunca incluir credenciales reales en el README, commits, Pull Requests ni archivos rastreados por Git.

### Desplegar DEV

```bash
./tools/deploy-ftp.local.sh dev
```

Este comando:

- Ejecuta `ng build --configuration=dev`.
- Habilita las funcionalidades configuradas para DEV, incluido el acceso al portal de pagos.
- Publica el contenido de `dist/app/browser` en `/public_html/dev.girasindomito.cl`.
- Mantiene un manifiesto incremental independiente en `.ftp-deploy-manifest.dev.local.tsv`.

### Desplegar producción

```bash
./tools/deploy-ftp.local.sh prd
```

Este comando:

- Ejecuta `ng build --configuration=production`.
- Aplica la configuración productiva, que mantiene oculto el portal de pagos mientras no esté disponible en producción.
- Publica el contenido de `dist/app/browser` en `/public_html`.
- Mantiene un manifiesto incremental independiente en `.ftp-deploy-manifest.prd.local.tsv`.

### Comportamiento seguro

- El ambiente es obligatorio: el script solo acepta `dev` o `prd`.
- `index.html` se publica al final para evitar que la página apunte a bundles aún no cargados.
- Solo se transfieren archivos nuevos o cuyo hash cambió desde el último despliegue del ambiente.
- El script no elimina archivos remotos ni modifica carpetas de otros dominios.
- DEV y producción usan builds, destinos y manifiestos independientes.
- Antes de desplegar, verificar en la consola el ambiente y el destino remoto informados por el script.

### Server-Side Rendering (SSR)
Para probar la versión servida desde el backend (SSR):

```bash
npm run serve:ssr:app
```

## 📂 Estructura del Proyecto

```text
/src
  /app
    /core           # Servicios singleton, guards e interceptores
    /features       # Módulos funcionales (home, programs, contact, etc.)
    /layout         # Componentes estructurales (header, footer)
    /shared         # Componentes reutilizables, directivas y pipes
    /environments   # Configuraciones de entorno
  /assets           # Recursos estáticos (imágenes, fuentes, PDFs)
```

## 🧪 Tests

Para ejecutar las pruebas unitarias:
```bash
npm test
```

---
Desarrollado con ❤️ para Giras Indómito.
