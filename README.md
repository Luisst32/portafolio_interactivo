# Portafolio – Luis Enrique Peñafiel Frias

Portafolio web personal e interactivo de un estudiante de Ingeniería de Software (UNEMI),
enfocado en desarrollo backend y cloud. Presenta información académica y profesional,
habilidades técnicas, proyectos destacados, un Design System documentado y un formulario de contacto.

## Tecnologías

- **HTML5 semántico:** `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `address`, `footer`.
- **CSS propio:** Custom Properties (design tokens), Flexbox, CSS Grid, media queries y unidades relativas. Sin frameworks.
- **JavaScript (vanilla):** interactividad y persistencia de preferencias con `localStorage`.

## Boceto

Antes de maquetar se definió la distribución de las secciones en escritorio y móvil:

![Boceto del portafolio](docs/boceto.svg)

## Diseño responsive

El CSS sigue un enfoque *mobile first* con dos puntos de quiebre:

| Dispositivo | Ancho | Distribución |
|---|---|---|
| Teléfono | menos de 640px | Una columna |
| Tablet | desde 640px (`40rem`) | Habilidades y proyectos en 2 columnas |
| Computadora | desde 1024px (`64rem`) | Inicio en 2 columnas y proyectos en 3 |

## Estructura del proyecto

```
index.html            Página principal (Inicio, Sobre mí, Habilidades, Proyectos, Contacto)
design-system.html    Documentación del sistema visual y componentes
css/variables.css     Design tokens (colores, tipografía, espaciado, radios, sombras)
css/base.css          Reset, tipografía y utilidades
css/layout.css        Estructura de secciones, grids y media queries
css/components.css    Componentes reutilizables (navbar, botones, badge, skill, card, formulario)
css/design-system.css Estilos propios de la página Design System
assets/img/           Fotografía, capturas de proyectos (WebP) e ilustración (SVG)
assets/icons/         Logos de tecnologías (Devicon, licencia MIT)
docs/                 Boceto y capturas del resultado
```

## Cómo visualizarlo

1. Clonar el repositorio: `git clone <url-del-repositorio>`
2. Abrir `index.html` en el navegador, o usar la extensión **Live Server** de VS Code
   (clic derecho sobre `index.html` → *Open with Live Server*).

No requiere instalación ni dependencias.

## Capturas

_Se agregarán al finalizar la maquetación._

## Privacidad

El sitio no publica datos personales sensibles (teléfono, dirección, documentos). El CV original
está excluido del repositorio mediante `.gitignore`.

## Avance

- [x] Parte 1: boceto, estructura HTML semántica, contenido y design tokens
- [x] Parte 2: componentes CSS, layout responsive y página Design System
- [ ] Parte 3: interactividad con JavaScript, pruebas, capturas y publicación
