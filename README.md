# Meridian Health

A React single-page hospital website built with Vite.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Getting started

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally.

## Project structure

```text
public/                 Static files served as-is
  favicon.svg
src/
  components/
    SiteContent.jsx     Hospital website page content
  App.jsx               App behavior and page composition
  main.jsx              React entry point
  styles.css            Global styles
index.html              Vite HTML entry
vite.config.js          Vite and React configuration
```