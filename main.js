'use strict';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   1. CANVAS DE PARTÍCULAS (red de nodos)
   ============================================================ */
(function initParticles() {
  if (prefersReducedMotion) return;
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const CONFIG = {
    count:   65,
    maxDist: 125,
    speed:   0.38,
    radius:  { min: 0.6, max: 1.8 },
    mouse:   { active: false, x: -9999, y: -9999, reach: 110 },
  };

  let particles = [];
  let raf;
  let W, H;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeParticle() {
    const speed = CONFIG.speed;
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - .5) * speed * 2,
      vy: (Math.random() - .5) * speed * 2,
      r:  Math.random() * (CONFIG.radius.max - CONFIG.radius.min) + CONFIG.radius.min,
    };
  }

  function init() {
    particles = Array.from({ length: CONFIG.count }, makeParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const { mouse, maxDist } = CONFIG;
    const len = particles.length;

    for (let i = 0; i < len; i++) {
      const p = particles[i];

      /* mover */
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      /* punto */
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,240,255,.5)';
      ctx.fill();

      /* líneas entre partículas */
      for (let j = i + 1; j < len; j++) {
        const q  = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < maxDist) {
          const a = (1 - d / maxDist) * .18;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(0,240,255,${a})`;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }
      }

      /* interacción con el mouse */
      if (mouse.active) {
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const md  = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < mouse.reach) {
          const a = (1 - md / mouse.reach) * .45;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0,240,255,${a})`;
          ctx.lineWidth   = .8;
          ctx.stroke();
        }
      }
    }

    raf = requestAnimationFrame(draw);
  }

  /* Eventos */
  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('mousemove', e => {
      const rect  = canvas.getBoundingClientRect();
      CONFIG.mouse.x      = e.clientX - rect.left;
      CONFIG.mouse.y      = e.clientY - rect.top;
      CONFIG.mouse.active = true;
    }, { passive: true });
    hero.addEventListener('mouseleave', () => {
      CONFIG.mouse.active = false;
    });
  }

  const ro = new ResizeObserver(() => { resize(); init(); });
  ro.observe(canvas);

  resize();
  init();
  draw();
})();


/* ============================================================
   2. EFECTO TYPEWRITER (terminal)
   ============================================================ */
(function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    'Construyo interfaces que funcionan.',
    'Diseño sistemas que escalan.',
    'Código limpio. Resultados reales.',
    'Del frontend a la base de datos.',
    'Disponible para tu próximo proyecto.',
  ];

  let pIdx    = 0;
  let cIdx    = 0;
  let erasing = false;
  let tid;

  function tick() {
    const phrase = phrases[pIdx];

    if (!erasing) {
      /* escribir */
      el.textContent = phrase.slice(0, cIdx + 1);
      cIdx++;
      if (cIdx === phrase.length) {
        erasing = true;
        tid = setTimeout(tick, 2000);
        return;
      }
      tid = setTimeout(tick, 55);
    } else {
      /* borrar */
      el.textContent = phrase.slice(0, cIdx - 1);
      cIdx--;
      if (cIdx === 0) {
        erasing = false;
        pIdx    = (pIdx + 1) % phrases.length;
      }
      tid = setTimeout(tick, 30);
    }
  }

  tid = setTimeout(tick, 900);
})();


/* ============================================================
   3. NAVEGACIÓN — scroll + mobile menu
   ============================================================ */
(function initNav() {
  const nav        = document.getElementById('nav');
  const toggle     = document.getElementById('navToggle');
  const menu       = document.getElementById('mobileMenu');
  const closeBtn   = document.getElementById('mobileMenuClose');
  const skipLink   = document.querySelector('.skip-link');
  const main       = document.getElementById('main');
  const footer     = document.querySelector('.footer');
  const inertTargets = [skipLink, nav, main, footer].filter(Boolean);
  const sections   = Array.from(document.querySelectorAll('section[id]'));
  const navLinks   = Array.from(document.querySelectorAll('.nav__link:not(.nav__link--cta)'));
  let menuOpen     = false;

  /* Scroll → clase scrolled + link activo */
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    highlightActive();
  }

  function highlightActive() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
    });
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('active', active);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile menu — con trampa de foco real vía "inert" */
  function openMenu()  {
    menuOpen = true;
    menu.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    inertTargets.forEach(el => { el.inert = true; });
    if (closeBtn) closeBtn.focus();
  }
  function closeMenu(returnFocus = true) {
    menuOpen = false;
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    inertTargets.forEach(el => { el.inert = false; });
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener('click', () => menuOpen ? closeMenu() : openMenu());
  if (closeBtn) closeBtn.addEventListener('click', () => closeMenu());

  menu.addEventListener('click', e => {
    /* Al navegar por un link, no devolvemos el foco al botón hamburguesa:
       dejamos que la navegación a la sección siga su curso natural. */
    if (e.target.classList.contains('mobile-menu__link')) closeMenu(false);
  });

  /* Cerrar con Escape + envolver el foco (Tab / Shift+Tab) dentro del menú */
  document.addEventListener('keydown', e => {
    if (!menuOpen) return;

    if (e.key === 'Escape') {
      closeMenu();
      return;
    }

    if (e.key === 'Tab') {
      const focusable = Array.from(menu.querySelectorAll('button, a[href]'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();


/* ============================================================
   4. ANIMACIONES DE ENTRADA (IntersectionObserver)
   ============================================================ */
(function initFadeIn() {
  /* Elementos a animar */
  const targets = document.querySelectorAll(
    '.section__header, .about, .stack-card, .project-card, .contact__card, .about__cert'
  );

  targets.forEach((el, i) => {
    el.classList.add('js-fade');
    el.style.transitionDelay = `${(i % 5) * 0.07}s`;
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => obs.observe(el));
})();


/* ============================================================
   5. TILT 3D EN TARJETAS DE PROYECTO
   ============================================================ */
(function initCardTilt() {
  if (prefersReducedMotion) return;
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect  = card.getBoundingClientRect();
      const x     = e.clientX - rect.left;
      const y     = e.clientY - rect.top;
      const cx    = rect.width  / 2;
      const cy    = rect.height / 2;
      const rotX  = ((y - cy) / cy) * -5;
      const rotY  = ((x - cx) / cx) *  5;

      card.style.transform = `translateY(-3px) perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();


/* ============================================================
   6. SMOOTH SCROLL (fallback para browsers sin soporte CSS)
   ============================================================ */
(function initSmoothScroll() {
  if (CSS.supports('scroll-behavior', 'smooth')) return;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
