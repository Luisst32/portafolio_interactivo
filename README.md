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

## Estructura del proyecto

```
index.html            Página principal (Inicio, Sobre mí, Habilidades, Proyectos, Contacto)
design-system.html    Documentación del sistema visual y componentes
css/variables.css     Design tokens (colores, tipografía, espaciado, radios, sombras)
css/base.css          Reset, tipografía y utilidades
assets/img/           Fotografía e ilustraciones de proyectos (SVG livianos)
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
- [ ] Parte 2: componentes CSS, layout responsive y página Design System
- [ ] Parte 3: interactividad con JavaScript, pruebas, capturas y publicación
