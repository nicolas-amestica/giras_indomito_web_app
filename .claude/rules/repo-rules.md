<!-- AUTO-GENERATED — DO NOT EDIT MANUALLY -->
<!-- Managed-By: indomito-context-compiler -->
<!-- Artifact-Format: 1 -->
<!-- Engine-Version: 1.0.0 -->
<!-- Source: ai/source/repo-overrides/app-ngx-web.md -->
# Repo Rules — app-ngx-web

# Repo Override — app-ngx-web

> Contexto específico del sitio web público de Giras Indómito.

## Descripción

Aplicación Angular 21 pública con SSR para presentar la marca, programas, destinos, servicios y canales de contacto. Está orientada a contenido, experiencia comercial y SEO. Enlaza al portal `app-ngx-pay`, pero no implementa pagos ni capacidades administrativas.

## Stack

- Angular 21 con componentes standalone, SSR e `inject()`
- PrimeNG v21 y TailwindCSS v3
- TypeScript 5.9, Karma y Jasmine
- GSAP, AOS, Swiper y Three.js para experiencias visuales

## Reglas

- Mantener separados el sitio informativo (`app-ngx-web`), el portal de pagos (`app-ngx-pay`) y el Hub administrativo (`app-ngx-hub`).
- Priorizar SEO, accesibilidad, rendimiento, diseño responsive y compatibilidad SSR; no usar directamente APIs exclusivas del navegador sin proteger su ejecución.
- No incorporar sesión administrativa, IAM, checkout ni gestión de cuotas.
- Usar PrimeNG para controles y Tailwind para composición conforme a la versión instalada en este repositorio.
- Mantener componentes standalone y responsabilidades autocontenidas en `core`, `features`, `layout` y `shared`.
- TSDoc en español para funciones públicas e interfaces.
- Validar anchos de 320 px, 390 px, tablet y escritorio.

## Scopes de commits

`core`, `shared`, `home`, `programs`, `services`, `about`, `contact`, `gallery`, `layout`, `seo`, `tools`
