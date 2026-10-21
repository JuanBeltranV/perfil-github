# Portafolio · Juan Ignacio Beltrán

Portafolio en español con React, TypeScript y Vite. Diseño editorial oscuro con identidad verde, proyectos reales, detalles de arquitectura y certificados verificados. Sin backend ni servicios de seguimiento.

## Desarrollo

Node.js 22.12 o superior.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

Abrir la ruta `/perfil-github/` del servidor. `base` de Vite está fijado en `/perfil-github/`; los recursos públicos utilizan `import.meta.env.BASE_URL` y los certificados se importan como recursos para que Vite resuelva sus rutas.

## Organización

- `src/data.ts`: perfil, proyectos, tecnologías y certificados.
- `src/components.tsx`: navegación, enlaces, títulos y proyectos desplegables.
- `src/App.tsx`: composición de las secciones.
- `src/styles.css`: estilos, adaptación móvil y movimiento reducido.
- `assets/certs`: originales conservados. Solo los tres documentos seleccionados se incorporan al build.
- `public/images`: capturas reales optimizadas a WebP.
- `css/styles.css`: archivo original preservado como referencia; ya no se carga.

Para incorporar el CV, colocar el PDF real en `public/cv/juan-beltran.pdf` y definir `profile.cvPath = 'cv/juan-beltran.pdf'`. Mientras sea `null`, no se genera un enlace a un archivo inexistente.

## Publicación, únicamente con aprobación

La URL prevista sigue siendo https://juanbeltranv.github.io/perfil-github/.

1. Revisar y aprobar el PR antes de integrarlo en `main`.
2. En Settings → Pages, seleccionar **GitHub Actions** como fuente de publicación. Esto debe hacerse como parte de la publicación aprobada: no se cambia durante la preparación del PR. Si Pages usa actualmente una rama, cambiar la fuente antes de integrar evita publicar el HTML de Vite sin compilar.
3. Integrar el PR aprobado.
4. Ejecutar manualmente **Deploy portfolio (manual approval)** sobre `main`, activando la confirmación de aprobación.

No hay despliegue por `push` ni por `pull_request`. CI valida las ramas de trabajo y los PR. El workflow de publicación solo acepta `main` y aprobación explícita. No modifica permisos ni protecciones del repositorio. El primer despliegue requiere que Pages esté configurado y el entorno `github-pages` permita `main`.

Referencias: [Vite en GitHub Pages](https://vite.dev/guide/static-deploy.html#github-pages) y [workflows de Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Contenido, accesibilidad y revisión

Ver [procedencia del contenido](docs/content-sources.md). Navegación por anclas sin router, menú móvil con Escape, enlace de salto, foco visible, detalles HTML nativos y soporte `prefers-reduced-motion`. Las animaciones de entrada por desplazamiento son una mejora progresiva: el contenido sigue visible sin soporte del navegador. La fuente Manrope se distribuye localmente a través de Fontsource (SIL OFL).

Los metadatos incluyen título, descripción, URL canónica, Open Graph, imagen social, sitemap y datos estructurados Person. GitHub Pages no permite servir un `robots.txt` de proyecto en la raíz del dominio; el archivo local no sustituye la configuración de `juanbeltranv.github.io/robots.txt`.
