# Bitácora del proyecto — Portfolio de Jesús Amarilla

Registro cronológico del trabajo hecho sobre este portfolio, sesión por sesión.
Cada entrada resume commits reales (ver `git log` para el detalle completo y el diff).

---

## 2026-06-01 — Carga inicial

- Primera versión del sitio subida al repositorio.

## 2026-09-06 — Fase 1: SEO, accesibilidad, performance y contenido

- **SEO**: canonical, Open Graph completo, Twitter Card, JSON-LD (Person), `og-image.jpg`, `robots.txt`, `sitemap.xml`.
- **Favicon**: agrega `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` (antes mostraba el ícono genérico del navegador).
- **Performance**: optimiza `profile.jpg` de 1522×1522/304KB a 480×480/32KB (−91%); agrega `width`/`height`/`loading=lazy`/`decoding=async`.
- **Accesibilidad**: soporte `prefers-reduced-motion` (detiene partículas y tilt 3D), corrige roles/aria-label mal aplicados, `type="button"` explícito en botones del menú móvil.
- **Contenido**: corrige link de LinkedIn vencido.
- Agrega `README.md`.

## 2026-09-06 — Fase 2: rediseño de contenido, proyectos y accesibilidad avanzada

- **Proyectos** (cambio principal): elimina card decorativa sin información real; SERCAP (live, verificable) pasa a proyecto principal, IR Barber Supply a segundo lugar con badge honesto "En desarrollo activo"; corrige el ícono de GitHub de IR Barber Supply que enlazaba al perfil general disfrazado de "código del proyecto"; agrega bloque "// Qué demuestra" a cada proyecto; grid pasa de 2 a 1 columna (formato mini caso de estudio: Problema → Solución → Qué demuestra → Tecnologías).
- **Accesibilidad**: agrega landmark `<main>` y skip-link; menú móvil con trampa de foco real (`inert` + manejo de Tab/Escape); sube contraste de `--text-lo` de 2.3:1 (reprobado) a 4.3:1.
- **Responsive**: corrige overflow horizontal real en mobile (causado por el botón "Ver todos los repositorios" forzado a una línea).
- **Código**: elimina CSS muerto y comentarios de sección vacíos.

## 2026-09-07 — Fase 3, parte 1: reposicionamiento profesional

Punto de partida: revisión de la carpeta `mis trabajos/` (código real de SERCAP e IR Barber Supply, notas semanales de la pasantía) y del CV del usuario, para verificar que todo lo que dice el portfolio se pueda demostrar con trabajo real.

- **Reposicionamiento**: de "Técnico en Informática · Dev Frontend Junior" a "Frontend Developer Junior con base real en soporte TI" — mejor término de búsqueda para reclutadores, con el soporte TI como diferenciador y no como título principal.
- **Corrección de precisión técnica** (hallazgo importante): el portfolio decía que IR Barber Supply usaba Next.js/React/TypeScript; el código real es JavaScript vanilla con arquitectura de estado propia (patrón pub/sub, `localStorage` con sincronización entre pestañas, reglas de negocio de precios dual mayorista/minorista). Se reescribió la ficha del proyecto para reflejar la arquitectura real — más diferenciadora que el claim anterior. El mismo error existe en el CV del usuario (pendiente que lo corrija él mismo).
- **Nueva sección "Experiencia"**: detalle real de la pasantía en Distribuidora La Policlínica S.A. (220 hs), tomado de las notas semanales del usuario.
- **Stack reestructurado**: separa JavaScript (fuerte, con evidencia real) de React/Next.js/TypeScript (aprendiendo, sin proyecto shippeado que lo respalde); sube Backend/Django a "en práctica" por el proyecto real ReservaYa (Django, encontrado en `Documents/Expotec`).
- Menciona FortBox (RFID/Arduino, trabajo en equipo) y ReservaYa en "Sobre mí", sin convertirlos en proyectos destacados propios — no hay forma de verificar la atribución individual dentro del trabajo en equipo.
- Ajusta el copy de Hero/Contacto hacia búsqueda de empleo Junior en vez de framing freelance.
- Agrega `.gitignore` para excluir `mis trabajos/` (código de clientes/proyectos comerciales y documentos de la pasantía) del repositorio — nunca debe publicarse.

## 2026-09-07 — Fase 3, parte 2: cero emojis + aviso legal

- **Regla estricta sin emojis**: reemplaza cada emoji del sitio (ubicación, gorro de graduación, monitor, rayo, check, punto de disponibilidad, botón de cerrar menú, etc.) por íconos SVG en línea, minimalistas, mismo estilo trazo/`currentColor` que ya usaban los íconos de GitHub/LinkedIn. Verificado por script que no queda ningún emoji en el sitio.
- **Nueva página `legal.html`**: aviso legal (titularidad, objeto del sitio, propiedad intelectual, enlaces a terceros, límite de responsabilidad) y política de privacidad (el sitio no tiene formularios ni cookies propias ni analítica; lo único que "recibe datos técnicos" son Google Fonts y Vercel por el simple hecho de servir la página). Enlazada desde el footer y agregada al `sitemap.xml`.

---

## Pendientes conocidos (a la fecha de la última entrada)

1. Capturas de pantalla reales de SERCAP e IR Barber Supply — la sección de Proyectos sigue siendo 100% texto.
2. Decidir si se quiere un CV público sin teléfono para agregar un botón de descarga (el CV real tiene datos personales que no se subieron al repo).
3. Corregir en el CV real el mismo error de stack de IR Barber Supply (dice Next.js/React/TypeScript, el código real es vanilla JS).
4. Deploy de IR Barber Supply, aunque sea a un subdominio de Vercel, para tener un link "Ver en vivo" real.
5. QA visual/responsive en navegador real (no se pudo hacer en la sesión de reposicionamiento por falta de conexión de la extensión de Chrome).
