# Procedencia del contenido

Revisión: 21 de octubre de 2026.

## Referencia visual

[Jacek's Portfolio](https://www.jacekhacking.com/) inspeccionado visualmente en escritorio y a 390 px: fondo oscuro, nombre destacado, navegación compacta, presentación personal, bloques de proyectos con detalles y formación. Se observó texto animado en la introducción. No se copiaron código, imágenes ni composición literal. La adaptación conserva la portada asimétrica con espacio vacío a la derecha, acentos verdes, imágenes reales y filas editoriales. Los logotipos pequeños se mantienen en navegación y footer.

## Proyectos

- [PokePeluche README](https://github.com/JuanBeltranV/tienda-pokepeluche/blob/main/README.md): catálogo académico, CRUD por rol, Cognito, Spring, SQLite y contacto. Sin carrito, pagos ni pedidos; sin demo permanente. Arquitectura de demostración con API Gateway y Quick Tunnel documentada, no auditada ni desplegada por este portafolio.
- [Captura PokePeluche](https://github.com/JuanBeltranV/tienda-pokepeluche/blob/main/docs/capturas/catalogo-neutro.png): captura existente del catálogo con fotografías de Bulbasaur, Charmander, Squirtle y Pikachu, sustituyendo las ilustraciones genéricas. Descargada del repositorio público y comparada con la copia local (SHA-256 `1798BF8F05AEC6089D700FB1CF5D50FDEB2B055E9C93799D577252241EE6FB0B`). La estructura coincide con `frontend/src/pages/Catalog.jsx` y las tarjetas neutras de `frontend/src/emerald.css`; las fotografías se contrastaron con los PNG de `frontend/public/images`. Convertida de PNG a WebP, conservando el contenido completo y las dimensiones de 1425 × 1103. No se recreó la interfaz, no se añadieron productos a la imagen ni se realizó una nueva demostración del backend. El seed de Java todavía contiene imágenes SVG provisionales: no se usó ese seed para producir esta captura.
- [Country Clash README](https://github.com/JuanBeltranV/country-clash/blob/main/README.md): comparación de poblaciones, puntuación por sesión, siluetas con D3/TopoJSON, datos de respaldo y demo Pages.
- [Código de la API de Country Clash](https://github.com/JuanBeltranV/country-clash/blob/main/src/api/restCountries.js): verifica el uso de `https://restcountries.com/v3.1/all?fields=name,population,flags,cca2,cca3,ccn3`, un tiempo de espera de 3500 ms y la alternativa local cuando la respuesta falla o no contiene suficientes países válidos. El detalle técnico nombra la API por esta evidencia de código, sin afirmar disponibilidad actual del servicio externo.
- [Captura Country Clash](https://github.com/JuanBeltranV/country-clash/blob/main/public/assets/preview-example.png): captura incluida en el README, convertida a WebP sin alterar su contenido.

No se usaron datos de proyectos privados. Las tecnologías se basan en estos repositorios, el portafolio anterior (Python, Oracle SQL) y el stack de este portafolio. Las áreas de IA y DevOps se presentan como intereses, sin inventar proyectos o niveles de dominio.

## Certificados

Los tres documentos se leyeron y se renderizaron para verificar sus títulos e instituciones:

| Archivo | Título oficial | Emisor | Fecha |
| --- | --- | --- | --- |
| `Cert_Entry_Python.pdf` | PCEP – Certified Entry-Level Python Programmer | Python Institute | 15 junio 2025 |
| `Cert_Certiprof_AI.pdf` | Artificial Intelligence Professional Certification – CAIPC | CertiProf | 14 junio 2026 |
| `Certificado_Modulo.pdf` | Desarrollador Fullstack (certificación de módulo) | Duoc UC | 12 septiembre 2026 |

CAIPC indica vencimiento el 13 de junio de 2029. No se consultaron servicios externos para validar las firmas. Se conservan los originales y no se reproducen sus identificadores personales en el HTML. Los dos archivos Cisco no se enlazan ni se importan al build. No existe CV en el repositorio al momento de esta revisión.
