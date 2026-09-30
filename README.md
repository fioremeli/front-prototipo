# Eximia Code · Trabajo Práctico Grupal 1

**Desarrollo de Sistemas Web · Front End · 2026 · 2.º Cuatrimestre**  
**Tecnicatura Superior en Desarrollo de Software · IFTS 29**  
**Grupo 12 · TP1**

> Sitio web grupal desarrollado con HTML5 semántico, CSS3 y JavaScript vanilla para presentar a **Eximia Code**, un equipo ficticio orientado al desarrollo de software para logística inteligente B2B, planificación de rutas, trazabilidad y operación de última milla.

## Índice

1. [Enlaces del proyecto](#1-enlaces-del-proyecto)
2. [Integrantes](#2-integrantes)
3. [Propósito y propuesta](#3-propósito-y-propuesta)
4. [Tecnologías utilizadas](#4-tecnologías-utilizadas)
5. [Estructura del proyecto y por qué el CSS está dividido](#5-estructura-del-proyecto)
6. [Identidad visual y guía de estilos](#6-identidad-visual-y-guía-de-estilos)
7. [Decisiones UX/UI](#7-decisiones-uxui-tomadas-antes-de-comenzar)
8. [Responsive Design](#8-responsive-design)
9. [Accesibilidad y teclado](#9-accesibilidad-y-navegación-por-teclado)
10. [JavaScript e interacciones](#10-javascript-e-interacciones-dinámicas)
11. [Formularios](#11-formularios-de-contacto)
12. [Imágenes y optimización](#12-imágenes-y-optimización-de-carga)
13. [Bitácora](#13-bitácora)
14. [Colaboración y commits](#14-plan-de-trabajo-y-colaboración-github)
15. [Pruebas realizadas](#15-pruebas-realizadas)
16. [Capturas](#16-capturas-de-pantalla)
17. [Uso de IA y autoría](#17-uso-de-inteligencia-artificial-y-autoría)
18. [Evolución](#18-evolución-para-próximos-trabajos)
19. [Checklist frente a la consigna](#19-checklist-final-frente-a-la-consigna)
20. [Conclusión](#20-conclusión)
21. [Criterio final de teclado](#21-navegación-por-teclado-criterio-final)
22. [Preferencias del usuario y animación](#22-preferencias-del-usuario-y-accesibilidad-ampliada)

---

## 1. Enlaces del proyecto

- **Repositorio grupal:** https://github.com/fiorellaalarcon/tp1-grupo12
- **Sitio publicado en Vercel:** https://practica-front-seven.vercel.app/index.html
- **Entrega:** se entrega un único enlace, el del repositorio grupal.

> La URL de Vercel debe verificarse nuevamente después de la publicación final realizada con el repositorio grupal actualizado.

---

## 2. Integrantes

| Perfil | Integrante | Rol | Ciudad | GitHub |
|---|---|---|---|---|
| 1 | **Fiorella Alarcón** | Product & Frontend Engineer | Posadas | https://github.com/fiorellaalarcon/ |
| 2 | **Axel Alva** | Backend Developer | CABA | https://github.com/axelalva2023/ |
| 3 | **Malena Jasque** | UX/UI & QA | Posadas | https://github.com/malenajasque/ |
| 4 | **Javier Churquina** | Data & Routing | CABA | https://github.com/Freddy1537/ |
| 5 | **Selene Pais** | DevOps & Docs | CABA | https://github.com/Selepais/ |

Cada perfil individual mantiene su enlace de GitHub visible. En la portada, las tarjetas de integrantes son enlaces únicos y completamente clickeables hacia el perfil correspondiente, para evitar destinos duplicados dentro de una misma tarjeta.

---

## 3. Propósito y propuesta

**Eximia Code** representa un equipo interdisciplinario que desarrolla soluciones digitales para empresas vinculadas con distribución gastronómica, logística refrigerada y operación B2B.

La portada presenta:

- identidad y propósito del grupo;
- interacción dinámica de optimización/recalculo de rutas;
- panel visual del producto;
- listado completo de integrantes;
- estadísticas del equipo;
- formulario de contacto;
- navegación principal y navegación de pie;
- acceso a la Bitácora.

Cada perfil presenta una estructura común para facilitar la comparación y la navegación:

1. foto/avatar;
2. nombre, ciudad y edad;
3. rol profesional;
4. enlace a GitHub;
5. contacto;
6. interacción dinámica propia del rol;
7. navegación interna por anclas;
8. cuatro habilidades;
9. tres películas favoritas;
10. tres discos favoritos con carga de Spotify bajo demanda;
11. formulario de contacto;
12. navegación entre perfiles y acceso al resto del equipo.

---

## 4. Tecnologías utilizadas

- **HTML5 semántico**
- **CSS3**
- **JavaScript vanilla**
- **CSS Grid y Flexbox**
- **Google Fonts**
- **Devicon** para iconografía tecnológica
- **Spotify Embed** cargado bajo demanda en los discos
- **FormSubmit** como endpoint del formulario, utilizado mediante `fetch` para evitar redirecciones
- **Vercel** para publicación

No se utilizaron frameworks de frontend ni librerías JavaScript para la lógica principal del sitio.

---

## 5. Estructura del proyecto

```text
TP1-Grupo12/
├── index.html                  # portada
├── fiorella.html  axel.html  malena.html  javier.html  selene.html   # perfiles
├── bitacora.html               # proceso, problemas y soluciones
├── README.md
├── css/                        # un archivo por responsabilidad (orden de carga)
│   ├── 01-variables.css        # paleta, tipografías, temas claro/oscuro
│   ├── 02-base.css             # reset, foco, skip-link, botones, utilidades
│   ├── 03-layout.css           # header, menú, footer
│   ├── 04-portada.css          # hero, equipo, GitHub, estadísticas
│   ├── 05-perfil.css           # ficha, habilidades, películas, discos
│   ├── 06-formularios.css      # formularios y estados de error
│   ├── 07-bitacora.css         # línea de tiempo, problemas/soluciones, checklist
│   ├── 08-responsive.css       # breakpoints 1200 / 900 / 400 px
│   └── 09-accesibilidad.css    # reduced-motion, contrast, forced-colors, print
├── js/
│   ├── theme.js  skip-links.js  nav.js  forms.js  spotify.js   # módulos compartidos
│   ├── index.js                # interacción de la portada
│   └── fiorella.js  axel.js  malena.js  javier.js  selene.js   # una interacción por perfil
├── img/                        # WebP: avatares, miniaturas -400, panel, logo, pósters, discos
├── docs/
│   ├── capturas/               # capturas reales del sitio
│   └── PLAN-DE-COMMITS.md      # commits por sección y por integrante
└── scripts/commit-por-integrante.sh
```

### Responsabilidad de cada archivo

- `index.html`: portada, presentación del equipo, perfiles de GitHub, estadísticas y contacto grupal.
- `fiorella.html`, `axel.html`, `malena.html`, `javier.html`, `selene.html`: perfiles 1 a 5.
- `bitacora.html`: decisiones, dificultades y soluciones, cambios y checklist.
- `css/*.css`: cada archivo lleva un encabezado que explica su alcance y comentarios por bloque.
- `js/theme.js`: tema claro/oscuro con persistencia y preferencia del sistema.
- `js/skip-links.js`: saltos de contenido y «Volver arriba».
- `js/nav.js`: menú hamburguesa accesible con cierre por Escape.
- `js/forms.js`: validación ARIA y envío con `fetch`.
- `js/spotify.js`: iframes de Spotify bajo demanda.
- `js/index.js` y `js/<integrante>.js`: interacciones dinámicas de portada y perfiles.

### Por qué el CSS está dividido en nueve archivos

**Decisión:** en lugar de un único `style.css`, el CSS se separó por responsabilidad y se carga en orden desde cada HTML.

| A favor de dividir | En contra (y cómo se maneja) |
|---|---|
| Cada archivo tiene un solo tema; es más fácil encontrar y corregir una regla. | Más archivos que abrir. Se mitiga con el prefijo numérico (`01-` a `09-`) que fija el orden de lectura y de carga. |
| Permite commits pequeños y por integrante (requisito de colaboración de la consigna). | Cada archivo es una petición HTTP adicional. En Vercel (HTTP/2) el costo es bajo para archivos tan chicos. |
| Menos conflictos de merge: dos personas rara vez editan el mismo archivo. | Hay que enlazar los nueve `<link>` en cada página. |
| El orden de la cascada queda explícito (variables → base → layout → componentes → responsive → preferencias). | Sin herramienta de empaquetado no se minimiza. Para producción real se concatenaría en un solo archivo. |

Un único `style.css` bien comentado también cumple la consigna. Se eligió dividir porque el proyecto es grupal, el historial de commits se evalúa y la modularidad hace visible el trabajo de cada persona. Si el equipo prefiere un solo archivo, alcanza con concatenarlos en el mismo orden.

**Variables CSS:** colores, tipografías, radios (`--radius-sm/md`), ancho máximo (`--max`), altura del header (`--header-h`), espaciado de secciones (`--space-section`), colores de marca fijos (`--spotify-green`, `--mono-on-dark`) y duración de la animación (`--anim-duration`) viven en `css/01-variables.css`. En pantallas de 400 px sólo se redefine `--header-h`, y el header y la barra de anclas se ajustan juntos.

### Convenciones de código

- Sangría de **2 espacios** en HTML, CSS y JavaScript, sin tabuladores ni espacios finales (verificado con un script sobre los 7 HTML, 9 CSS y 11 JS).
- Comentarios por sección en los tres lenguajes: cada bloque explica *qué* resuelve y *por qué*.
- Sin selectores CSS duplicados ni reglas sin uso en la portada; las clases `error` y `success` se conservan porque las agrega `forms.js`.
- Un único `<h1>` por página, jerarquía `h1 > h2 > h3` sin saltos.

---

## 6. Identidad visual y guía de estilos

### Paleta

Se adoptó una lógica **60-30-10** como criterio de distribución visual: una base amplia de fondos, superficies secundarias y texto; una proporción intermedia para identidad y componentes; y acentos para acciones y estados.

La paleta se centraliza mediante variables CSS para mantener coherencia entre todas las páginas.

### Modo claro

| Variable | Hexadecimal | Uso |
|---|---|---|
| `--bg-primary` | `#FFFFFF` | fondo principal |
| `--bg-secondary` | `#F4F7F6` | secciones alternas |
| `--bg-surface` | `#E3EBE8` | tarjetas y superficies |
| `--text-primary` | `#070D1F` | texto principal |
| `--text-secondary` | `#1E293B` | texto secundario |
| `--border-color` | `#3A506B` | bordes |
| `--accent-primary` | `#00684D` | acción principal |
| `--accent-secondary` | `#005A80` | enlaces/acento secundario |
| `--focus-ring` | `#D9381E` | foco visible |

### Modo oscuro

| Variable | Hexadecimal | Uso |
|---|---|---|
| `--bg-primary` | `#0B132B` | fondo principal |
| `--bg-secondary` | `#111C3D` | secciones alternas |
| `--bg-surface` | `#1C2541` | tarjetas y superficies |
| `--text-primary` | `#FFFFFF` | texto principal |
| `--text-secondary` | `#E4E9F0` | texto secundario |
| `--border-color` | `#6B829B` | bordes con contraste mejorado |
| `--accent-primary` | `#06D6A0` | acción principal |
| `--accent-secondary` | `#48CAE4` | enlaces/acento secundario |
| `--focus-ring` | `#FFB703` | foco visible |

La combinación se eligió para transmitir tecnología, precisión, logística y trazabilidad sin utilizar una estética excesivamente saturada.

### Tipografías

- **Orbitron:** identidad de marca y títulos `h1`, especialmente para reforzar el carácter tecnológico.
- **Space Grotesk:** encabezados secundarios.
- **IBM Plex Sans:** cuerpo de texto y elementos de lectura prolongada.

Las tres familias se cargan mediante Google Fonts.

### Iconografía

- Devicon para las tecnologías.
- SVG propio para el logo de Figma multicolor.
- Apache Kafka se adapta al tema: negro en modo claro y blanco en modo oscuro.
- Los controles de interfaz utilizan símbolos simples acompañados por texto accesible cuando corresponde.

---

## 7. Decisiones UX/UI tomadas antes de comenzar

Antes de implementar el sitio se analizaron alternativas de navegación, presentación, responsive y accesibilidad.

### Menú hamburguesa en dispositivos pequeños

Se decidió utilizar un menú hamburguesa hasta `900 px` porque permite conservar el espacio horizontal para la marca, el selector de tema y el contenido principal. En móvil el menú se despliega verticalmente con Inicio, Equipo, Bitácora y Contacto.

### Tarjetas de integrantes completamente clickeables

Se descartó colocar varios destinos dentro de la misma tarjeta de integrante. La tarjeta completa funciona como un único enlace hacia el perfil y contiene el texto **“Ver perfil →”** integrado debajo de ciudad y edad.

La decisión busca:

- aumentar el área efectiva de interacción;
- reducir la cantidad de decisiones dentro de la tarjeta;
- evitar enlaces duplicados hacia el mismo destino;
- facilitar el uso táctil y la navegación con teclado;
- mantener una lectura clara para tecnologías asistivas.

El enlace a GitHub se encuentra únicamente dentro de cada perfil individual porque representa un destino externo diferente.

### Hover y foco

Las tarjetas de «Conocé al resto del equipo» (al final de cada perfil) tienen **la misma microinteracción** que las de la portada: elevación de 6 px, sombra y borde de acento, tanto con el cursor como con el foco de teclado. Se unificó para que el mismo componente se comporte igual en todo el sitio.

Las tarjetas de integrantes incorporan una elevación visual mediante `transform` y `box-shadow`, junto con un cambio sutil de borde. El foco de teclado rodea la tarjeta completa.

Cuando el usuario solicita menos movimiento mediante `prefers-reduced-motion`, se elimina la elevación y las transiciones.

### Navegación de perfiles no cíclica

Se decidió que los perfiles no formen un recorrido circular:

- Perfil 1: **Volver a equipo — Inicio — Siguiente**.
- Perfiles 2, 3 y 4: **Anterior — Inicio — Siguiente**.
- Perfil 5: **Anterior — Inicio — Volver a equipo**.

Esto hace explícitos los extremos del recorrido y evita que un usuario termine en un perfil inesperado al continuar avanzando.

### Inicio siempre centrado

La navegación inferior utiliza tres columnas de igual ancho. Así, **Inicio permanece visualmente centrado** en desktop, tablet y móvil aunque cambien las etiquetas laterales.

---

## 8. Responsive Design

El sitio se diseñó para funcionar en móvil, tablet y escritorio.

### Breakpoints obligatorios

- **400 px:** móvil pequeño; se pasa a una sola columna en los grids principales y se compactan navegación y botones.
- **900 px:** tablet/móvil; aparece el menú hamburguesa y se reorganizan grids.
- **1200 px:** escritorio compacto/tablet horizontal; se reducen columnas para mantener legibilidad.

Además de los breakpoints obligatorios, se utilizan unidades relativas, `minmax()`, `clamp()`, Grid y Flexbox para que el diseño pueda adaptarse también a anchos intermedios.

### Prevención de overflow

Se incorporaron medidas como:

- `min-width: 0` en contenedores Grid/Flex;
- `overflow-wrap: anywhere` en textos potencialmente largos;
- grids que cambian de columnas según viewport;
- navegación interna adaptable;
- controles que se expanden en móvil;
- imágenes con proporciones estables.

El comportamiento debe verificarse visualmente en **400, 900 y 1200 px** antes de la entrega final.

---

## 9. Accesibilidad y navegación por teclado

La accesibilidad se trabajó desde la estructura HTML y no únicamente desde el CSS.

Se incorporaron:

- `lang="es"`.
- HTML5 semántico.
- `header`, `nav`, `main`, `section`, `article`, `figure`, `form` y `footer`.
- textos alternativos en imágenes.
- `aria-label`, `aria-live` y estados ARIA sólo cuando aportan información adicional.
- Nombre accesible que **contiene el texto visible** (WCAG 2.5.3): las tarjetas de equipo dicen «Ver perfil de …» y el botón de tema «Cambiar a modo claro / oscuro».
- `role="status"` únicamente en el mensaje que cambia (demos y formularios), no en todo el contenedor.
- Sin `<aside>` ni landmarks de más: los enlaces de GitHub son contenido del equipo y van en un `<div>` con su encabezado `h3`.
- El botón de tema **no** usa `aria-pressed`: su etiqueta ya describe la acción y combinar ambos se anuncia dos veces.
- Las cifras de la portada son una lista `<ul>` con `<li>`.
- `label` asociado a cada campo del formulario.
- `aria-invalid` y mensajes de error.
- indicadores `:focus-visible` visibles.
- enlace **Saltar al contenido principal** como primer elemento enfocable del documento.
- enlace **Volver arriba ↑** al final de las páginas.
- destino `#top` para que “Volver arriba ↑” llegue al inicio real del documento, incluso con header fijo.
- `scroll-margin-top` para evitar que el header fijo oculte el contenido al usar anclas internas.
- soporte para `prefers-reduced-motion: reduce`.


### Formularios y envío AJAX

Los formularios conservan el endpoint HTML tradicional como respaldo sin JavaScript y agregan un endpoint AJAX de FormSubmit para el flujo principal sin redirección. El envío AJAX usa `POST`, `Content-Type: application/json` y `Accept: application/json`, siguiendo la documentación oficial de FormSubmit. Antes de la entrega final se debe comprobar en el sitio publicado que el mensaje llega efectivamente al correo configurado y que la cuenta/formulario está activado.

### Criterio de resolución de imágenes

Los avatares de perfil se conservan en `1200×1200` porque se muestran hasta aproximadamente `600×600` CSS px y así se dispone de una fuente adecuada para pantallas de alta densidad; las tarjetas usan versiones `400×400` mediante `srcset`. El panel se conserva en `1200×1200` porque se muestra hasta aproximadamente `560` CSS px y su peso WebP es reducido. Pósters `300×450`, discos `300×300` y logo `96×96` se mantienen en dimensiones acordes a su tamaño visual.

### Bitácora sin desplazamiento horizontal

La sección de problemas y soluciones se presenta como una lista de tarjetas semánticas en lugar de una tabla con ancho mínimo. De este modo conserva todo el contenido de la bitácora y evita exigir desplazamiento horizontal en celulares.

### Regla de oro de `tabindex`

La navegación por Tab utiliza el **orden natural del DOM** y los elementos interactivos nativos (`a`, `button`, `input`, `textarea`). No se utilizan `tabindex="1"`, valores positivos ni `tabindex="0"` para forzar un recorrido artificial.

Los H1 usan `tabindex="-1"` únicamente para poder recibir el foco del **Saltar al contenido principal** sin agregarse al recorrido normal de Tab. El `<main>` no es enfocable.

### Recorrido de teclado

En cada página, el primer foco es **Saltar al contenido principal**. Si se activa, el foco pasa al H1 y el usuario comienza directamente en el contenido principal. Si no se activa, el usuario continúa por el header y sus controles siguiendo el orden natural del HTML.

En la portada, el recorrido natural continúa por los enlaces y botones interactivos de la página: navegación, acciones de portada, demo, tarjetas de perfiles, email, campos del formulario, envío y enlaces del pie.

En los perfiles, el recorrido continúa por GitHub, contacto, demo de rol, navegación interna, reproducción de álbumes, formulario, navegación entre perfiles y tarjetas del resto del equipo.

Las tarjetas de integrantes son enlaces completos, por lo que se activan con **Enter** y no requieren `tabindex` adicional. Las imágenes, títulos, estadísticas y tarjetas meramente informativas no se agregan al recorrido de Tab.

### Saltos y retorno

- **Saltar al contenido principal:** lleva al H1 de la página mediante foco programático.
- **Volver arriba ↑:** al final de la página desplaza la ventana a `top: 0`, es decir, al inicio real del documento, y devuelve el foco a la marca “Eximia Code” del encabezado.
- **Inicio:** utiliza `index.html`, por lo que la portada abre desde el inicio real del documento y muestra correctamente el encabezado y el H1 `Eximia Code`.

---

## 10. JavaScript e interacciones dinámicas

La consigna solicita una interacción dinámica en portada y otra en cada perfil. Se implementaron siete archivos JS con responsabilidades separadas.

### `js/index.js` — portada

**Interacción:** botón `Optimizar ruta` / `Recalcular ruta`.

Al activarlo, cambia el mensaje de estado con distintos escenarios de simulación logística, por ejemplo:

- ruta optimizada;
- agrupamiento de vehículos;
- monitoreo de cadena de frío;
- comparación de costos.

El mensaje de la demo usa `role="status"` (equivale a `aria-live="polite"`) para que el cambio de estado se comunique a tecnologías asistivas sin anunciar también el texto del botón.

### `js/fiorella.js`

**Interacción:** demo de rol Product & Frontend.  
Muestra estados relacionados con UI, contraste, foco, responsive, navegación accesible y prototipado.

### `js/axel.js`

**Interacción:** demo de rol Backend.  
Simula estados de API, MongoDB, endpoints y preparación del backend.

### `js/malena.js`

**Interacción:** demo de rol UX/UI & QA.  
Simula checks de calidad, mejoras UX, validación de formularios y checklist de entrega.

### `js/javier.js`

**Interacción:** demo de rol Data & Routing.  
Simula optimización de rutas, agrupamiento de vehículos, cadena de frío y matrices de costos.

### `js/selene.js`

**Interacción:** demo de rol DevOps & Docs.  
Simula pipeline, documentación, build y preparación de deploy.

### Módulos compartidos (`theme.js`, `skip-links.js`, `nav.js`, `forms.js`, `spotify.js`)

- cambio entre tema claro y oscuro, con persistencia en `localStorage` protegida por `try/catch` y preferencia del sistema como valor inicial;
- menú hamburguesa con `aria-expanded`, `aria-controls` y cierre con **Escape**;
- comportamiento del skip link y de «Volver arriba»;
- validación accesible de formularios con mensajes de error y éxito;
- envío mediante `fetch` sin redirección;
- carga bajo demanda de los iframes de Spotify.

### Spotify bajo demanda

Las portadas de los discos se muestran como una fachada liviana. El iframe de Spotify se crea al activar el control de reproducción, evitando cargar todos los embeds desde el inicio y reduciendo trabajo inicial del navegador.

En el perfil de Javier, el álbum **Hybrid Theory** de Linkin Park (2000) utiliza el ID de Spotify `2pKw6GERJVAD61449B1EEM` y se inserta mediante el formato oficial de embed `https://open.spotify.com/embed/album/2pKw6GERJVAD61449B1EEM?utm_source=generator`.

En el perfil de Fiorella, el álbum **folklore** de Taylor Swift (2020) utiliza el ID de Spotify `2fenSS68JI1h4Fo296JfGr` y se inserta mediante el mismo formato de embed bajo demanda.

---

## 11. Formularios de contacto

Cada formulario cuenta con:

- `label` explícito;
- validación de nombre, email, asunto y mensaje;
- mensaje mínimo de 10 caracteres;
- `aria-invalid` en campos con error;
- mensajes de error dinámicos;
- estado de éxito con `role="status"` y `aria-live`;
- foco sobre el estado después de un envío exitoso;
- envío mediante `fetch` al endpoint AJAX documentado de FormSubmit (`/ajax/`) para evitar redirección.
- `action` tradicional conservado como respaldo si JavaScript no está disponible.

El mensaje de éxito de portada es:

> Mensaje enviado correctamente. ¡Gracias por contactarnos!

En los perfiles:

> Mensaje enviado correctamente. ¡Gracias por comunicarte conmigo!

**Prueba real pendiente para la entrega:** antes de publicar definitivamente, el equipo debe realizar un envío de prueba con datos controlados y verificar la recepción. No se declara como realizado hasta comprobarlo efectivamente.

---

## 12. Imágenes y optimización de carga

Todas las imágenes locales están en **WebP**. Los pesos se verificaron con un script después de comprimir.

| Recurso | Dimensión | Peso máximo | Peso real |
|---|---:|---:|---:|
| Avatares de integrantes (`img/<nombre>.webp`) | `1200 × 1200` | 70 KB | 61–67 KB |
| Miniaturas de tarjetas (`img/<nombre>-400.webp`) | `400 × 400` | — | 20–23 KB |
| Panel principal (`img/panel.webp`) | `1200 × 1200` | 78 KB | 73 KB |
| Logo del header y favicon (`img/logo-96.webp`) | `96 × 96` | — | 6 KB (el original de 300 px pesaba 23 KB para mostrarse a 44 px) |
| Portadas de discos | `300 × 300` | 40 KB | menos de 40 KB |
| Pósters de películas | `300 × 450` | 40 KB | menos de 40 KB |

Técnicas aplicadas:

- `width` y `height` reales en todas las imágenes para evitar saltos de diseño (CLS);
- `srcset` y `sizes` en el avatar del perfil, que elige la miniatura de 400 px o la versión de 1200 px según la pantalla;
- las tarjetas de equipo cargan la miniatura de 400 px en lugar de la imagen completa;
- `fetchpriority="high"` y `preload` para la imagen principal de cada página;
- `loading="lazy"` y `decoding="async"` en imágenes fuera del primer viewport;
- Spotify se carga sólo al pulsar ▶ (patrón facade);
- versión fija de Devicon y un único punto de carga de Google Fonts con `display=swap`.

---

## 13. Bitácora

`bitacora.html` registra el proceso del proyecto y se encuentra enlazada desde el menú principal.

La bitácora debe conservar y ampliar:

- decisiones iniciales;
- reparto de tareas;
- investigación previa;
- decisiones UX/UI;
- dificultades técnicas;
- correcciones;
- pruebas responsive;
- pruebas de teclado y accesibilidad;
- publicación;
- colaboración mediante GitHub.

---

## 14. Plan de trabajo y colaboración GitHub

Cada integrante sube sus archivos con su propio usuario de Git. Los commits se agrupan por unidades funcionales o técnicas completas, no por cada línea o sección pequeña.

- **Fiorella:** estructura inicial, sistema visual base, navegación global, portada y perfil de Fiorella.
- **Malena:** layout, estilos de portada y perfiles, formularios, responsive, accesibilidad y perfil de Malena.
- **Javier:** Spotify bajo demanda, perfil de Javier y recursos multimedia.
- **Axel:** validación/envío de formularios, perfil de Axel y su interacción.
- **Selene:** bitácora, perfil de Selene, capturas, plan de commits, script y README final.

El detalle commit por commit, con mensajes y archivos, está en [`docs/PLAN-DE-COMMITS.md`](docs/PLAN-DE-COMMITS.md). Para ejecutar sólo los commits propios: `./scripts/commit-por-integrante.sh <nombre>`.

No se deben inventar commits retrospectivos: el historial final debe reflejar lo que realmente hizo cada integrante.

---

## 15. Pruebas realizadas

Las pruebas automáticas se ejecutaron en Chromium con Playwright sobre las 7 páginas. Los ítems marcados como **pendiente manual** deben repetirlos las personas del equipo y tildarse recién cuando se hayan hecho.

### Responsive

| Prueba | Resultado |
|---|---|
| Ancho de 320, 400, 900, 1200 y 1440 px, sin scroll horizontal | Sin desbordes en las 7 páginas |
| Menú hamburguesa hasta 900 px | Se abre con Enter, actualiza `aria-expanded` y se cierra con Escape devolviendo el foco |
| Header a 400 px | `--header-h` pasa a 64 px y la barra de anclas acompaña |
| Problemas y soluciones de la bitácora en pantallas chicas | Se presentan como tarjetas semánticas, sin desplazamiento horizontal |
| Dispositivos reales (celular y tablet) | **Pendiente manual** |

### Teclado

- [x] El primer foco de cada página es «Saltar al contenido principal» y lleva al H1.
- [x] Las tarjetas de integrantes se abren con Enter.
- [x] Foco visible de 3 px en marca, botón de tema, botones, anclas, tarjetas del resto del equipo, botones de navegación y pie.
- [x] El botón ▶ de un disco crea el reproductor de Spotify con Enter.
- [x] Orden natural del DOM, sin `tabindex` positivo y sin capturar Tab.
- [ ] Recorrido completo con Tab de cada página, revisado por una persona: **pendiente manual**.

### Accesibilidad

- [x] `lang="es"` y un único `<h1>` por página (7 de 7).
- [x] Todas las imágenes tienen `alt` (0 sin atributo).
- [x] Formulario vacío: cuatro campos con `aria-invalid="true"`, mensaje «Este campo es obligatorio.» y foco en el primer campo con error.
- [x] Email inválido: mensaje «Ingresá un correo electrónico válido.».
- [x] `prefers-reduced-motion: reduce`: sin animación de entrada y sin elevación en tarjetas.
- [x] `prefers-color-scheme: dark`: tema oscuro automático.
- [ ] Lector de pantalla (NVDA, VoiceOver o TalkBack): **pendiente manual**.
- [ ] Envío real del formulario a FormSubmit: **pendiente manual** (requiere confirmar el correo la primera vez).

### Contraste (WCAG 2.1 AA, calculado con la fórmula de luminancia relativa)

| Par de colores | Claro | Oscuro | Mínimo |
|---|---:|---:|---:|
| Texto principal / fondo | 19,33 | 18,38 | 4,5 |
| Texto secundario / fondo | 14,63 | 15,07 | 4,5 |
| Texto secundario / superficie | 12,06 | 12,38 | 4,5 |
| Enlaces y roles (`--accent-secondary`) / fondo | 7,57 | 9,49 | 4,5 |
| Enlaces y roles / superficie | 6,24 | 7,80 | 4,5 |
| Texto sobre botón primario | 6,80 | 10,25 | 4,5 |
| Mensaje de error / fondo | 6,57 | 9,06 | 4,5 |
| Borde de componentes / superficie | 6,82 | 3,81 | 3 |
| Anillo de foco / superficie | 3,82 | 8,65 | 3 |

Todos los pares cumplen AA. El texto secundario del tema oscuro tiene más de 12:1.

### JavaScript

- [x] Demo de la portada (cicla tres mensajes).
- [x] Demo de cada uno de los 5 perfiles.
- [x] Cambio de tema con persistencia.
- [x] Menú responsive.
- [x] Validación de formularios.
- [x] Spotify bajo demanda.
- [x] Sin errores de JavaScript en consola.

### Publicación

- [ ] Repositorio público e independiente.
- [ ] Cinco integrantes con commits propios.
- [ ] Vercel publicado desde el repositorio final y URL verificada.

---

## 16. Capturas de pantalla

Capturas reales tomadas del sitio final a 1200, 900 y 400 px, en `docs/capturas/`.

**Portada a 1200 px**

![Portada a 1200 px](docs/capturas/01-portada-desktop-1200.webp)

**Portada a 400 px (menú hamburguesa)**

![Portada a 400 px (menú hamburguesa)](docs/capturas/02-portada-mobile-400.webp)

**Perfil de Fiorella a 1200 px**

![Perfil de Fiorella a 1200 px](docs/capturas/03-perfil-fiorella.webp)

**Perfil de Javier a 900 px**

![Perfil de Javier a 900 px](docs/capturas/04-perfil-javier-tablet-900.webp)

**Perfil de Malena a 400 px**

![Perfil de Malena a 400 px](docs/capturas/05-perfil-malena-mobile-400.webp)

**Bitácora**

![Bitácora](docs/capturas/06-bitacora.webp)

**Modo oscuro**

![Modo oscuro](docs/capturas/07-modo-oscuro.webp)

**Foco visible en el skip-link**

![Foco visible en el skip-link](docs/capturas/08-teclado-skip-link.webp)

**Microinteracción en «Conocé al resto del equipo» (hover)**

![Microinteracción en Conocé al resto del equipo](docs/capturas/09-hover-resto-del-equipo.webp)

---

## 17. Uso de Inteligencia Artificial y autoría

La IA se utilizó como **asistente técnico y creativo**, manteniendo la revisión, selección y adaptación final bajo criterio del equipo.

### Herramienta técnica principal

- **ChatGPT — OpenAI, GPT-5.6 Luna.**
- **Plan:** gratuito, según la configuración utilizada durante el desarrollo.

Se utilizó para:

- analizar la consigna y la rúbrica;
- revisar estructura semántica HTML5;
- proponer y revisar patrones responsive;
- analizar accesibilidad y navegación por teclado;
- revisar `prefers-reduced-motion`;
- detectar y corregir problemas de CSS/JavaScript;
- diseñar la lógica de las interacciones dinámicas;
- revisar formularios, estados ARIA y foco;
- documentar funciones JavaScript;
- organizar la Bitácora y el README;
- revisar decisiones UX/UI como menú hamburguesa, tarjetas clickeables y jerarquía visual.

### Revisión técnica y versión mejorada

- **Claude — Anthropic, modelo Claude Sonnet 5.5.** Plan: *(completar por el equipo: gratuito o pago)*. Experiencia previa del equipo: *(completar)*.
- Se utilizó para auditar el proyecto contra la rúbrica y los criterios de correcciones anteriores, recomprimir las imágenes con un script (Pillow), dividir el CSS y el JavaScript por secciones, corregir errores de accesibilidad, generar las capturas con un navegador automatizado y redactar el plan de commits.
- El equipo revisó y probó el resultado, y decidió qué cambios conservar antes de subirlos.

### Qué revisó el equipo manualmente después de usar IA

*(Tildar cuando cada persona lo haya hecho. No marcar lo que no se probó.)*

- [ ] Se abrió cada página en el navegador y se comparó con la consigna.
- [ ] Se leyó el código de cada archivo propio y se puede explicar qué hace.
- [ ] Se probó la demo JavaScript del perfil propio y se editaron sus frases si hacía falta.
- [ ] Se recorrió el sitio sólo con teclado (Tab, Enter, Escape).
- [ ] Se probó en un celular real y en una ventana angosta del navegador.
- [ ] Se revisaron los textos del README, la bitácora y los perfiles (edad, ciudad, gustos) y se corrigieron.
- [ ] Se verificó que cada avatar y cada imagen tenga un `alt` que describa lo que se ve.
- [ ] Se revisaron los nombres de commits antes de subirlos.

### Generación de logo y avatares

El logo de Eximia Code y los avatares/representaciones visuales de los integrantes se trabajaron mediante generación de imágenes a partir de prompts. El criterio del equipo fue utilizar una identidad coherente con software, logística, datos, tecnología y operación B2B.

En cada caso, el resultado generado fue revisado y adaptado para funcionar como recurso visual del proyecto. La elección final no se tomó automáticamente: se evaluaron legibilidad, coherencia con la paleta, relación con la identidad del grupo y comportamiento en diferentes tamaños.

### Criterio de autoría

La IA no reemplazó la toma de decisiones del equipo. El grupo definió y revisó:

- nombre e identidad de Eximia Code;
- propósito del proyecto;
- orden y contenido de perfiles;
- roles de cada integrante;
- selección de películas y discos;
- paleta visual;
- tipografías;
- estructura de navegación;
- menú responsive;
- decisión de tarjetas completamente clickeables;
- orden de tabulación;
- requisitos de accesibilidad;
- breakpoints;
- contenido de Bitácora;
- pruebas y correcciones antes de la entrega.

La versión final debe ser comprendida, probada y defendida por el equipo durante la revisión docente.

---

## 18. Evolución para próximos trabajos

El proyecto queda preparado para evolucionar en próximas entregas. Algunas líneas posibles son:

- separar componentes repetitivos mediante nuevas estrategias sin abandonar las restricciones de la materia;
- ampliar la simulación de rutas con datos reales de prueba;
- mejorar la persistencia de preferencias;
- incorporar nuevas métricas de accesibilidad;
- ampliar la documentación técnica;
- automatizar pruebas de enlaces y validaciones;
- incorporar nuevas funcionalidades al concepto de logística inteligente.

La evolución se realizará manteniendo como prioridades la claridad, accesibilidad, responsive design, rendimiento y coherencia visual.

---

## 19. Checklist final frente a la consigna

- [x] `index.html` en la raíz del proyecto.
- [x] Cinco páginas individuales.
- [x] CSS separado en nueve archivos dentro de `css/`.
- [x] JavaScript separado en `js/`.
- [x] Imágenes en `img/`.
- [x] Portada con propósito e integrantes.
- [x] Cuatro habilidades por perfil.
- [x] Tres películas por perfil.
- [x] Tres discos por perfil.
- [x] Navegación interna.
- [x] Navegación no cíclica entre perfiles.
- [x] Interacción dinámica en portada.
- [x] Interacción dinámica en cada perfil.
- [x] Responsive a 400, 900 y 1200 px.
- [x] `prefers-reduced-motion`.
- [x] Skip link y foco visible.
- [x] Formularios accesibles.
- [x] Bitácora HTML.
- [x] README documentado.
- [ ] Historial final de GitHub con participación real de los cinco integrantes.
- [ ] Publicación final de Vercel desde el repositorio actualizado.
- [ ] Envío real de prueba del formulario verificado.
- [ ] Capturas reales agregadas al repositorio.

---

## 20. Conclusión

**Eximia Code · Grupo 12** propone una experiencia web coherente con el concepto de un equipo de desarrollo orientado a logística inteligente. El proyecto combina HTML5 semántico, CSS3, JavaScript vanilla, diseño responsive, accesibilidad, interacción dinámica y documentación del proceso.

La intención del TP1 no es únicamente presentar cinco perfiles, sino demostrar que las decisiones visuales, técnicas, de accesibilidad y de organización fueron pensadas, implementadas, probadas y documentadas de manera colaborativa.

## 21. Navegación por teclado: criterio final

El enlace **Saltar al contenido principal** enfoca el H1 de cada página, que usa `tabindex="-1"` sólo como destino programático. Después del salto, Tab continúa por los controles reales del contenido. No se usan valores positivos de `tabindex` y **no se intercepta la tecla Tab** en ningún elemento: se eliminó una captura de Tab en el último enlace del menú porque creaba una trampa de teclado (WCAG 2.1.2).

**Volver arriba ↑** desplaza el documento a `top: 0` y lleva el foco a la marca «Eximia Code» del encabezado.

## 22. Preferencias del usuario y accesibilidad ampliada

| Preferencia | Cómo responde el sitio |
|---|---|
| `prefers-reduced-motion: reduce` | sin transiciones, animaciones ni desplazamiento suave |
| `prefers-color-scheme: dark` | tema oscuro automático si no hay elección manual |
| `prefers-contrast: more` | bordes negros o blancos, sin sombras ni degradados, enlaces subrayados |
| `forced-colors: active` | bordes y foco con colores del sistema |
| `print` | se ocultan menú, formularios y controles |

Además: `<meta name="color-scheme">`, `aria-current="page"` en el menú, `aria-labelledby` en cada sección con título, enlaces externos anunciados como «se abre en una pestaña nueva», lista semántica de problemas/soluciones sin scroll horizontal y datos estructurados JSON-LD (`Organization` y `Person`).

### Animación: una sola y de baja intensidad

El sitio tiene **una única animación con `@keyframes`**, `fadeInUp`: el bloque principal de la portada y de cada perfil aparece con un fundido y 12 px de desplazamiento, una vez y en 0,5 s. Se eligió una sola a propósito, siguiendo la devolución de trabajos anteriores («bajar la carga de animaciones»).

- Sólo se activa dentro de `@media (prefers-reduced-motion: no-preference)`.
- Con `reduce`, además, la regla global de `09-accesibilidad.css` anula animaciones, transiciones y desplazamiento suave.
- No hay animaciones infinitas, pulsos, brillos ni fondos en movimiento.
- Las transiciones que existen son microinteracciones cortas (0,22 s): botones, tarjetas de equipo, tarjetas del resto del equipo y zoom leve en portadas de discos.
