# Portfolio — Jesús Daniel Amarilla Nuñez

Sitio personal de presentación profesional. Frontend Developer Junior, Técnico en Informática (MEC Paraguay, 2025), con experiencia real en soporte TI.

**Demo en vivo:** https://portfolio-jda.vercel.app/

## Stack

HTML5, CSS3 y JavaScript nativo — sin frameworks ni dependencias de build. El sitio corre directamente en el navegador:

- Terminal interactiva animada (efecto typewriter) en el Hero
- Fondo de partículas en `<canvas>` con interacción al mouse
- Animaciones de entrada por scroll (`IntersectionObserver`)
- Menú responsive con navegación por scroll-spy
- Soporte de `prefers-reduced-motion` para accesibilidad

## Estructura

```
index.html   → Markup y contenido (Hero, Sobre mí, Experiencia, Stack, Proyectos, Contacto)
styles.css   → Estilos (variables de diseño, layout, responsive)
main.js      → Interactividad (partículas, typewriter, nav, animaciones, tilt)
profile.jpg  → Foto de perfil (optimizada, 480×480)
favicon.svg / favicon-32.png / apple-touch-icon.png → Iconos del sitio
og-image.jpg → Imagen para previews de redes sociales (Open Graph / Twitter Card)
robots.txt / sitemap.xml → SEO
```

## Ejecutar localmente

No requiere instalación ni build. Basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático:

```bash
npx serve .
```

## Deploy

Desplegado en [Vercel](https://vercel.com) como sitio estático, con deploy automático desde la rama `main`.

## Contacto

- Email: jesusamarilla.contacto@gmail.com
- GitHub: [github.com/Dani01001](https://github.com/Dani01001)
- LinkedIn: [linkedin.com/in/jesus-amarilla-dn](https://www.linkedin.com/in/jesus-amarilla-dn)
