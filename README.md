# Portafolio Personal - Anastasia Orellana

Proyecto desarrollado para la Evaluación Formativa N° 2 de DSY1104 - Desarrollo Fullstack II.

El proyecto implementa un portafolio personal utilizando React, Bootstrap, datos JSON y pruebas unitarias con Jasmine y Karma.

## Requisitos

- Node.js 18 o superior.
- npm.

## Instalación

Abrir una terminal dentro del proyecto y ejecutar:

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Vite mostrará una dirección local, en este caso `http://localhost:5175/`.

## Crear versión de producción

```bash
npm run build
```

La versión final quedará en la carpeta `dist/`.

## Ejecutar pruebas unitarias

```bash
npm test
```

Las pruebas están implementadas con Jasmine y se ejecutan mediante Karma usando un navegador JSDOM.

## Ejecutar pruebas con cobertura

```bash
npm run test:coverage
```

El informe HTML se genera en:

```text
coverage/html/index.html
```

También se genera un archivo `coverage/lcov.info`.

## Estructura principal

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Inicio.jsx
│   ├── SobreMi.jsx
│   ├── Proyectos.jsx
│   ├── ProyectoCard.jsx
│   ├── Noticias.jsx
│   ├── NoticiaCard.jsx
│   └── Contacto.jsx
├── data/
│   └── noticias.json
├── tests/
│   └── App.spec.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## Requisitos de la evaluación cubiertos

- React como framework frontend.
- Componentes React personalizados y reutilizables.
- Props para enviar información a componentes.
- State para manejar datos y formulario.
- Bootstrap: Navbar, Cards, Buttons, Form y Grid.
- Diseño responsive.
- Tres proyectos con imagen, título, descripción, tecnologías y enlaces.
- Dos noticias cargadas desde JSON.
- Pruebas unitarias con Jasmine y Karma.
- Pruebas de renderización, props, state, eventos y DOM.
- Mock de datos mediante componente de prueba con props.
- Informe de cobertura mediante Karma Coverage.
- README de instalación, ejecución y pruebas.
- Accesibilidad básica mediante etiquetas `alt`, labels y navegación semántica.
- Optimización mediante componentes reutilizables y recursos SVG livianos.


## Autora

Anastasia Orellana
