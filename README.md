# Guido Gabriele Peruilh — CV site

Sitio de presentación de CV bilingüe (ES/EN) para GitHub Pages:

**[https://guidogabrieleperuilh.github.io](https://guidogabrieleperuilh.github.io)**

Repositorio: [GuidoGabrielePeruilh/GuidoGabrielePeruilh.github.io](https://github.com/GuidoGabrielePeruilh/GuidoGabrielePeruilh.github.io)

## Qué incluye

- Página única con resumen, skills, experiencia, educación y contacto
- Toggle de idioma español / inglés (se guarda en `localStorage`)
- Descarga del CV en PDF (`public/Guido_Gabriele_Peruilh_CV.pdf`)

## Desarrollo local

```bash
npm install
npm run dev
```

El servidor de desarrollo corre en `http://127.0.0.1:4177`.

```bash
npm run build
npm run preview
```

## Deploy

El workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) construye el sitio y lo publica en GitHub Pages al hacer push a `main`.

En el repo de GitHub: **Settings → Pages → Source: GitHub Actions**.
