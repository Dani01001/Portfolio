document.documentElement.classList.add('js');

const nav = document.getElementById('nav');

const toggle = nav.querySelector('.nav-toggle');

const links = document.getElementById('navLinks');

function setMenu(open) {
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  if (open) links.querySelector('a').focus();
}

toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));

links.addEventListener('click', e => {
  if (e.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', e => {
  if (!nav.classList.contains('open')) return;
  if (e.key === 'Escape') {
    setMenu(false);
    toggle.focus();
  }
  if (e.key === 'Tab') {
    const items = [ toggle, ...links.querySelectorAll('a') ];
    const i = items.indexOf(document.activeElement);
    if (e.shiftKey && i <= 0) {
      e.preventDefault();
      items[items.length - 1].focus();
    } else if (!e.shiftKey && i === items.length - 1) {
      e.preventDefault();
      items[0].focus();
    }
  }
});

const navMap = new Map([ ...links.querySelectorAll('a') ].map(a => [ a.getAttribute('href').slice(1), a ]));

const spy = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  navMap.forEach(a => a.removeAttribute('aria-current'));
  const a = navMap.get(en.target.id);
  if (a) a.setAttribute('aria-current', 'true');
}), {
  rootMargin: '-45% 0px -50% 0px'
});

navMap.forEach((a, id) => {
  const s = document.getElementById(id);
  if (s) spy.observe(s);
});

const series = {
  food: [ {
    name: 'Humo Negro',
    style: 'Hamburguesería de autor: foto a sangre, titulares condensados y bloques de color pleno',
    type: 'Anton + Work Sans',
    colors: [ '#141110', '#f2b705', '#d8321e', '#f3ede3' ],
    src: 'prototipos/gastro-01.html'
  }, {
    name: 'Casa Tueste',
    style: 'Cafetería de especialidad: menta y espresso, sello giratorio, carta filtrable y horario en vivo',
    type: 'Bricolage Grotesque + Figtree',
    colors: [ '#e3ece6', '#2b1a12', '#e0662b', '#fbfdfb' ],
    src: 'prototipos/gastro-02.html'
  }, {
    name: 'Umi',
    style: 'Nikkei de autor: negro y bermellón, omakase que se enciende al bajar y reserva por turnos',
    type: 'Shippori Mincho + Zen Kaku Gothic',
    colors: [ '#0c0b0b', '#c8102e', '#c7a96b', '#ece6dc' ],
    src: 'prototipos/gastro-03.html'
  }, {
    name: 'Forno 900',
    style: 'Pizzería napolitana: azul cobalto y azulejos, armador visual de pizza y seguimiento del pedido',
    type: 'Lilita One + Nunito Sans',
    colors: [ '#1d3fa8', '#e8412c', '#ffd84d', '#e9eef6' ],
    src: 'prototipos/gastro-04.html'
  }, {
    name: 'Polo Sur · experimental',
    style: 'Heladería con cucurucho 3D en tiempo real que gira con el scroll, cambia de sabor y suma bochas',
    type: 'Chango + Rethink Sans · Three.js',
    colors: [ '#ffd6df', '#f6e0c4', '#e1efd2', '#fff0bf' ],
    src: 'prototipos/gastro-05.html'
  } ],
  shop: [ {
    name: 'Nodo',
    style: 'Tienda de tecnología: producto protagonista, comparador con barras y calculadora de cuotas',
    type: 'Sora',
    colors: [ '#f2f1ee', '#111111', '#3b2cff', '#d9f84a' ],
    src: 'prototipos/shop-01.html'
  }, {
    name: 'Sur Club',
    style: 'Streetwear: blanco y negro con naranja ácido, cuenta regresiva al drop y lookbook arrastrable',
    type: 'Big Shoulders Display + Martian Mono',
    colors: [ '#0a0a0a', '#f4f4f1', '#ff5a1f', '#8d8d88' ],
    src: 'prototipos/shop-02.html'
  }, {
    name: 'Rocío',
    style: 'Skincare: lila y ciruela, test de piel en tres preguntas y rutina de día y de noche',
    type: 'Instrument Serif + Hanken Grotesk',
    colors: [ '#dcd4f0', '#3a2146', '#c9674b', '#f3f0fa' ],
    src: 'prototipos/shop-03.html'
  }, {
    name: 'Nido',
    style: 'Deco y hogar: oliva y mostaza, puntos interactivos en la foto, filtros y combo con descuento',
    type: 'Schibsted Grotesk',
    colors: [ '#4b5a2e', '#e2b93b', '#f6f5f1', '#1c1d17' ],
    src: 'prototipos/shop-04.html'
  }, {
    name: 'Paso Libre · experimental',
    style: 'Zapatilla 3D que se gira con el mouse, tres colores que cambian la página y ángulos de cámara',
    type: 'Unbounded + Onest · model-viewer',
    colors: [ '#f1e6d4', '#141a2b', '#e9e7e2', '#e5732e' ],
    src: 'prototipos/shop-05.html'
  } ],
  corp: [ {
    name: 'Benítez & Ortiz',
    style: 'Estudio contable y jurídico: grilla editorial con líneas finas y verde institucional',
    type: 'Gloock + Public Sans',
    colors: [ '#eef0ef', '#0f3b2e', '#b39462', '#16201c' ],
    src: 'prototipos/corp-01.html'
  }, {
    name: 'Altura Desarrollos',
    style: 'Inmobiliaria: carbón y cobre, avance de obra, comparador antes y después y mapa con pines',
    type: 'Tenor Sans + Karla',
    colors: [ '#121416', '#c77d4a', '#efece6', '#1b1e21' ],
    src: 'prototipos/corp-02.html'
  }, {
    name: 'Clínica Arandú',
    style: 'Odontología: turquesa y coral, tratamientos con precio desde y calendario de turnos',
    type: 'Lexend',
    colors: [ '#0e7c86', '#ff7a5c', '#eef6f7', '#0f2a2e' ],
    src: 'prototipos/corp-03.html'
  }, {
    name: 'Ruta Norte',
    style: 'Logística: asfalto y amarillo de seguridad, rastreo de envíos y red de rutas animada',
    type: 'Barlow Condensed + Barlow',
    colors: [ '#16181a', '#ffc400', '#e9e8e4', '#36c275' ],
    src: 'prototipos/corp-04.html'
  }, {
    name: 'Kilómetro Cero · experimental',
    style: 'Agencia digital: tipografía que cambia de ancho, cursor propio y trabajos en scroll horizontal',
    type: 'Archivo (ancho variable)',
    colors: [ '#efeee9', '#0d0d0d', '#ff2e88', '#6d6c67' ],
    src: 'prototipos/corp-05.html'
  } ]
};

const iframe = document.getElementById('proto');

const spec = document.getElementById('spec');

const frame = document.querySelector('.frame');

let cat = 'food', idx = 0, loaded = false;

function pressGroup(sel, target) {
  document.querySelectorAll(sel).forEach(b => b.setAttribute('aria-pressed', b === target));
}

function showProto() {
  const p = series[cat][idx];
  document.querySelectorAll('.nums .chip').forEach((b, i) => b.setAttribute('aria-pressed', i === idx));
  if (loaded) iframe.src = p.src;
  iframe.title = 'Prototipo ' + p.name;
  const row = (label, value) => {
    const d = document.createElement('div');
    const dt = document.createElement('dt');
    dt.textContent = label;
    const dd = document.createElement('dd');
    if (value instanceof Node) dd.append(value); else dd.textContent = value;
    d.append(dt, dd);
    return d;
  };
  const sw = document.createElement('span');
  sw.className = 'swatches';
  p.colors.forEach(c => {
    const i = document.createElement('i');
    i.style.background = c;
    sw.append(i);
  });
  const open = document.createElement('a');
  open.className = 'open-new';
  open.href = p.src;
  open.target = '_blank';
  open.rel = 'noopener';
  open.textContent = 'Abrir en pestaña nueva';
  const note = document.createElement('p');
  note.className = 'fict';
  note.textContent = 'Marca ficticia creada para este estudio. No es un cliente real.';
  spec.replaceChildren(row('Prototipo', p.name), row('Estilo', p.style), row('Tipografía', p.type), row('Paleta', sw), open, note);
}

document.querySelectorAll('.tabs .chip').forEach(b => b.addEventListener('click', () => {
  pressGroup('.tabs .chip', b);
  cat = b.dataset.cat;
  idx = 0;
  showProto();
}));

document.querySelectorAll('.nums .chip').forEach((b, i) => b.addEventListener('click', () => {
  idx = i;
  showProto();
}));

document.querySelectorAll('.devices .chip').forEach(b => b.addEventListener('click', () => {
  pressGroup('.devices .chip', b);
  frame.dataset.device = b.dataset.dev;
}));

showProto();

new IntersectionObserver((entries, obs) => {
  if (!entries[0].isIntersecting) return;
  loaded = true;
  iframe.src = series[cat][idx].src;
  obs.disconnect();
}, {
  rootMargin: '400px'
}).observe(document.getElementById('estudio'));

document.querySelectorAll('.glass').forEach(g => g.addEventListener('pointermove', e => {
  const r = g.getBoundingClientRect();
  g.style.setProperty('--mx', e.clientX - r.left + 'px');
  g.style.setProperty('--my', e.clientY - r.top + 'px');
}));

const reveal = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) {
    en.target.classList.add('in');
    reveal.unobserve(en.target);
  }
}), {
  threshold: .12
});

document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
