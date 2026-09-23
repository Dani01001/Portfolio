const LAB = [ {
  id: 'mag',
  cat: 'Botones',
  name: 'Botón magnético con relleno',
  desc: 'Sigue al cursor y se llena desde el punto por donde entraste.',
  html: `<button class="c-mag" type="button">\n  <span class="c-mag__fill" aria-hidden="true"></span>\n  <span class="c-mag__txt">Hablemos</span>\n  <svg class="c-mag__ico" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>\n</button>`,
  css: `.c-mag { position: relative; overflow: hidden; display: inline-flex; align-items: center; gap: 10px; padding: 16px 26px; border-radius: 999px; border: 1.5px solid var(--accent); background: transparent; color: var(--accent); font: 600 15px/1 var(--body); cursor: pointer; transition: transform .35s cubic-bezier(.2,.8,.2,1), color .3s; }\n.c-mag__fill { position: absolute; left: var(--x, 50%); top: var(--y, 50%); width: 0; aspect-ratio: 1; border-radius: 50%; background: var(--accent); transform: translate(-50%, -50%); transition: width .5s cubic-bezier(.2,.8,.2,1); }\n.c-mag:hover .c-mag__fill, .c-mag:focus-visible .c-mag__fill { width: 260%; }\n.c-mag:hover, .c-mag:focus-visible { color: var(--accent-ink); }\n.c-mag__txt, .c-mag__ico { position: relative; }\n.c-mag__ico { transition: transform .35s cubic-bezier(.2,.8,.2,1); }\n.c-mag:hover .c-mag__ico { transform: translateX(4px) rotate(-35deg); }`,
  js: function(root) {
    const btn = root.querySelector('.c-mag');
    btn.addEventListener('pointerenter', e => {
      const r = btn.getBoundingClientRect();
      btn.style.setProperty('--x', e.clientX - r.left + 'px');
      btn.style.setProperty('--y', e.clientY - r.top + 'px');
    });
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
      btn.style.transform = 'translate(' + x * .3 + 'px,' + y * .45 + 'px)';
    });
    btn.addEventListener('pointerleave', e => {
      const r = btn.getBoundingClientRect();
      btn.style.setProperty('--x', e.clientX - r.left + 'px');
      btn.style.setProperty('--y', e.clientY - r.top + 'px');
      btn.style.transform = '';
    });
  }
}, {
  id: 'dn',
  cat: 'Formularios',
  name: 'Interruptor día y noche',
  desc: 'El sol se convierte en luna y el cielo se llena de estrellas.',
  html: `<button class="c-dn" type="button" role="switch" aria-checked="false" aria-label="Modo oscuro">\n  <span class="c-dn__stars" aria-hidden="true"><i></i><i></i><i></i><i></i></span>\n  <span class="c-dn__cloud" aria-hidden="true"></span>\n  <span class="c-dn__knob" aria-hidden="true"><i></i><i></i><i></i></span>\n</button>\n<p class="c-dn__lbl" aria-live="polite">Modo claro</p>`,
  css: `.c-dn { position: relative; width: 104px; height: 48px; border-radius: 999px; border: 0; cursor: pointer; overflow: hidden; background: #6fb8f2; box-shadow: inset 0 3px 8px rgba(0,0,0,.25); transition: background .6s; }\n.c-dn[aria-checked="true"] { background: #1a2140; }\n.c-dn__knob { position: absolute; top: 5px; left: 5px; width: 38px; height: 38px; border-radius: 50%; background: #ffd23f; box-shadow: 0 0 0 6px rgba(255,210,63,.25), 0 2px 6px rgba(0,0,0,.3); transition: transform .6s cubic-bezier(.5,1.4,.4,1), background .6s, box-shadow .6s; }\n.c-dn[aria-checked="true"] .c-dn__knob { transform: translateX(56px) rotate(200deg); background: #e6e8f0; box-shadow: 0 0 0 6px rgba(230,232,240,.12), 0 2px 6px rgba(0,0,0,.4); }\n.c-dn__knob i { position: absolute; border-radius: 50%; background: #c2c6d4; opacity: 0; transition: opacity .4s .2s; }\n.c-dn__knob i:nth-child(1) { width: 9px; height: 9px; left: 8px; top: 9px; }\n.c-dn__knob i:nth-child(2) { width: 6px; height: 6px; left: 20px; top: 22px; }\n.c-dn__knob i:nth-child(3) { width: 5px; height: 5px; left: 22px; top: 8px; }\n.c-dn[aria-checked="true"] .c-dn__knob i { opacity: 1; }\n.c-dn__cloud { position: absolute; right: 12px; top: 20px; width: 34px; height: 12px; border-radius: 10px; background: #fff; box-shadow: -8px -6px 0 2px #fff, 6px -4px 0 0 #fff; transition: transform .6s, opacity .4s; }\n.c-dn[aria-checked="true"] .c-dn__cloud { transform: translateY(30px); opacity: 0; }\n.c-dn__stars i { position: absolute; width: 3px; height: 3px; border-radius: 50%; background: #fff; opacity: 0; transform: translateY(-20px); transition: opacity .4s, transform .6s; }\n.c-dn__stars i:nth-child(1) { left: 16px; top: 12px; } .c-dn__stars i:nth-child(2) { left: 30px; top: 30px; }\n.c-dn__stars i:nth-child(3) { left: 44px; top: 16px; } .c-dn__stars i:nth-child(4) { left: 24px; top: 22px; width: 2px; height: 2px; }\n.c-dn[aria-checked="true"] .c-dn__stars i { opacity: 1; transform: none; }\n.c-dn[aria-checked="true"] .c-dn__stars i:nth-child(2) { transition-delay: .1s; } .c-dn[aria-checked="true"] .c-dn__stars i:nth-child(3) { transition-delay: .2s; }\n.c-dn__lbl { margin-top: 14px; font: 500 13px/1 var(--mono); color: var(--ink-2); text-align: center; }`,
  js: function(root) {
    const sw = root.querySelector('.c-dn'), lbl = root.querySelector('.c-dn__lbl');
    sw.addEventListener('click', () => {
      const on = sw.getAttribute('aria-checked') !== 'true';
      sw.setAttribute('aria-checked', on);
      lbl.textContent = on ? 'Modo oscuro' : 'Modo claro';
    });
  }
}, {
  id: 'pass',
  cat: 'Formularios',
  name: 'Contraseña con requisitos en vivo',
  desc: 'Etiqueta flotante, medidor de seguridad y lista que se tilda sola.',
  html: `<div class="c-pw">\n  <div class="c-pw__box">\n    <input id="c-pw-in" type="password" placeholder=" " autocomplete="new-password" aria-describedby="c-pw-status">\n    <label for="c-pw-in">Contraseña</label>\n    <button type="button" class="c-pw__eye" aria-label="Mostrar contraseña" aria-pressed="false">\n      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>\n    </button>\n  </div>\n  <div class="c-pw__bar" aria-hidden="true"><i></i><i></i><i></i><i></i></div>\n  <ul class="c-pw__rules">\n    <li data-r="len">8 caracteres o más</li>\n    <li data-r="up">Una mayúscula</li>\n    <li data-r="num">Un número</li>\n    <li data-r="sym">Un símbolo</li>\n  </ul>\n  <p id="c-pw-status" class="c-pw__status" aria-live="polite">Escribe una contraseña</p>\n</div>`,
  css: `.c-pw { width: 100%; max-width: 280px; }\n.c-pw__box { position: relative; }\n.c-pw__box input { width: 100%; padding: 20px 44px 8px 14px; border-radius: 10px; border: 1.5px solid var(--edge); background: var(--glass); color: var(--ink); font: 15px var(--body); outline: none; transition: border-color .2s; }\n.c-pw__box input:focus { border-color: var(--accent); }\n.c-pw__box label { position: absolute; left: 14px; top: 15px; font: 14px var(--body); color: var(--ink-3); pointer-events: none; transition: transform .2s, font-size .2s, color .2s; transform-origin: left; }\n.c-pw__box input:focus + label, .c-pw__box input:not(:placeholder-shown) + label { transform: translateY(-9px) scale(.78); color: var(--accent); }\n.c-pw__eye { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); width: 32px; height: 32px; border: 0; border-radius: 8px; background: none; color: var(--ink-3); cursor: pointer; }\n.c-pw__eye[aria-pressed="true"] { color: var(--accent); }\n.c-pw__bar { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; margin: 10px 0; }\n.c-pw__bar i { height: 4px; border-radius: 2px; background: var(--edge); transition: background .3s; }\n.c-pw[data-s="1"] .c-pw__bar i:nth-child(-n+1) { background: #ff6b6b; }\n.c-pw[data-s="2"] .c-pw__bar i:nth-child(-n+2) { background: #ffb454; }\n.c-pw[data-s="3"] .c-pw__bar i:nth-child(-n+3) { background: #f5d442; }\n.c-pw[data-s="4"] .c-pw__bar i { background: var(--mark-live); }\n.c-pw__rules { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 4px 10px; padding: 0; margin: 0; }\n.c-pw__rules li { position: relative; padding-left: 20px; font-size: 12.5px; color: var(--ink-3); transition: color .2s; }\n.c-pw__rules li::before { content: ""; position: absolute; left: 0; top: 3px; width: 12px; height: 12px; border-radius: 50%; border: 1.5px solid var(--edge); transition: background .2s, border-color .2s; }\n.c-pw__rules li.ok { color: var(--ink); }\n.c-pw__rules li.ok::before { background: var(--mark-live); border-color: var(--mark-live); box-shadow: inset 0 0 0 2px var(--ground); }\n.c-pw__status { margin-top: 10px; font: 12px var(--mono); color: var(--ink-3); }`,
  js: function(root) {
    const box = root.querySelector('.c-pw'), input = root.querySelector('input'), eye = root.querySelector('.c-pw__eye'), status = root.querySelector('.c-pw__status');
    const tests = {
      len: v => v.length >= 8,
      up: v => /[A-ZÁÉÍÓÚÑ]/.test(v),
      num: v => /\d/.test(v),
      sym: v => /[^\wÁÉÍÓÚÑáéíóúñ\s]/.test(v)
    };
    const words = [ 'Escribe una contraseña', 'Débil', 'Regular', 'Buena', 'Segura' ];
    input.addEventListener('input', () => {
      let score = 0;
      root.querySelectorAll('[data-r]').forEach(li => {
        const ok = tests[li.dataset.r](input.value);
        li.classList.toggle('ok', ok);
        if (ok) score++;
      });
      box.dataset.s = input.value ? score : 0;
      status.textContent = input.value ? words[score] + ' (' + score + ' de 4 requisitos)' : words[0];
    });
    eye.addEventListener('click', () => {
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      eye.setAttribute('aria-pressed', show);
      eye.setAttribute('aria-label', show ? 'Ocultar contraseña' : 'Mostrar contraseña');
    });
  }
}, {
  id: 'send',
  cat: 'Botones',
  name: 'Botón con estados de envío',
  desc: 'Pasa de enviar a cargando, éxito o error sin saltos de diseño.',
  html: `<button class="c-send" type="button" data-state="idle">\n  <span class="c-send__txt">Enviar mensaje</span>\n  <span class="c-send__spin" aria-hidden="true"></span>\n  <svg class="c-send__ok" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>\n</button>\n<p class="c-send__hint" aria-live="polite">Un clic sale bien, el siguiente falla</p>`,
  css: `.c-send { position: relative; height: 52px; min-width: 190px; padding: 0 26px; border: 0; border-radius: 999px; background: var(--accent); color: var(--accent-ink); font: 600 15px var(--body); cursor: pointer; transition: min-width .4s cubic-bezier(.2,.8,.2,1), padding .4s, background .3s; }\n.c-send > * { transition: opacity .2s, transform .3s; }\n.c-send__spin, .c-send__ok { position: absolute; left: 50%; top: 50%; opacity: 0; transform: translate(-50%, -50%) scale(.5); }\n.c-send__spin { width: 22px; height: 22px; border-radius: 50%; border: 3px solid currentColor; border-right-color: transparent; }\n.c-send[data-state="loading"] { min-width: 52px; padding: 0; }\n.c-send[data-state="loading"] .c-send__txt, .c-send[data-state="ok"] .c-send__txt { opacity: 0; }\n.c-send[data-state="loading"] .c-send__spin { opacity: 1; transform: translate(-50%, -50%); animation: c-send-rot .7s linear infinite; }\n.c-send[data-state="ok"] { background: var(--mark-live); min-width: 52px; padding: 0; }\n.c-send[data-state="ok"] .c-send__ok { opacity: 1; transform: translate(-50%, -50%); }\n.c-send[data-state="error"] { background: #ff6b6b; animation: c-send-shake .4s; }\n@keyframes c-send-rot { to { transform: translate(-50%, -50%) rotate(360deg); } }\n@keyframes c-send-shake { 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }\n.c-send__hint { margin-top: 12px; font: 12px var(--mono); color: var(--ink-3); text-align: center; }`,
  js: function(root) {
    const b = root.querySelector('.c-send'), t = root.querySelector('.c-send__txt'), hint = root.querySelector('.c-send__hint');
    let fail = false;
    b.addEventListener('click', () => {
      if (b.dataset.state === 'loading') return;
      b.dataset.state = 'loading';
      b.setAttribute('aria-busy', 'true');
      hint.textContent = 'Enviando';
      setTimeout(() => {
        b.removeAttribute('aria-busy');
        if (fail) {
          b.dataset.state = 'error';
          t.textContent = 'Reintentar';
          hint.textContent = 'No se pudo enviar. Revisa tu conexión.';
        } else {
          b.dataset.state = 'ok';
          hint.textContent = 'Mensaje enviado';
          setTimeout(() => {
            b.dataset.state = 'idle';
            t.textContent = 'Enviar mensaje';
          }, 1600);
        }
        fail = !fail;
      }, 1300);
    });
  }
}, {
  id: 'tilt',
  cat: 'Tarjetas',
  name: 'Tarjeta 3D con reflejo',
  desc: 'Se inclina según el cursor y las capas se separan en profundidad.',
  html: `<div class="c-tilt">\n  <div class="c-tilt__card">\n    <svg class="c-tilt__lines" viewBox="0 0 300 180" aria-hidden="true"><path d="M-10 140 C 60 80, 120 170, 190 90 S 280 40, 320 70" /><path d="M-10 160 C 70 100, 130 190, 200 110 S 290 60, 320 95" /></svg>\n    <span class="c-tilt__chip" aria-hidden="true"></span>\n    <p class="c-tilt__num">4242 •••• •••• 2026</p>\n    <div class="c-tilt__foot"><span>Jesús Amarilla</span><span>12/29</span></div>\n    <span class="c-tilt__glare" aria-hidden="true"></span>\n  </div>\n</div>`,
  css: `.c-tilt { perspective: 700px; }\n.c-tilt__card { position: relative; width: 250px; height: 152px; border-radius: 14px; padding: 18px; background: linear-gradient(145deg, #1c2a4a, #0d1528); border: 1px solid rgba(127,178,255,.3); color: #e6ecfb; transform-style: preserve-3d; transition: transform .15s ease-out; box-shadow: 0 30px 50px -25px rgba(0,0,0,.8); }\n.c-tilt__lines { position: absolute; inset: 0; width: 100%; height: 100%; }\n.c-tilt__lines path { fill: none; stroke: rgba(127,178,255,.35); stroke-width: 1.5; }\n.c-tilt__chip { display: block; width: 36px; height: 26px; border-radius: 5px; background: linear-gradient(135deg, #e8cf8f, #b8964f); transform: translateZ(30px); }\n.c-tilt__num { margin-top: 30px; font: 500 15px var(--mono); letter-spacing: .06em; transform: translateZ(40px); }\n.c-tilt__foot { display: flex; justify-content: space-between; margin-top: 12px; font: 11px var(--mono); text-transform: uppercase; opacity: .8; transform: translateZ(25px); }\n.c-tilt__glare { position: absolute; inset: 0; border-radius: inherit; pointer-events: none; background: radial-gradient(circle at var(--gx, 50%) var(--gy, 0%), rgba(255,255,255,.35), transparent 55%); opacity: 0; transition: opacity .3s; }\n.c-tilt:hover .c-tilt__glare { opacity: 1; }`,
  js: function(root) {
    const wrap = root.querySelector('.c-tilt'), card = root.querySelector('.c-tilt__card');
    wrap.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      card.style.transform = 'rotateY(' + (px - .5) * 24 + 'deg) rotateX(' + (.5 - py) * 20 + 'deg)';
      card.style.setProperty('--gx', px * 100 + '%');
      card.style.setProperty('--gy', py * 100 + '%');
    });
    wrap.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  }
}, {
  id: 'tabs',
  cat: 'Navegación',
  name: 'Pestañas con indicador deslizante',
  desc: 'El indicador viaja y cambia de ancho; se maneja con las flechas.',
  html: `<div class="c-tabs">\n  <div class="c-tabs__list" role="tablist" aria-label="Plan">\n    <button role="tab" aria-selected="true" aria-controls="c-tabs-p" id="c-t0">Mensual</button>\n    <button role="tab" aria-selected="false" aria-controls="c-tabs-p" id="c-t1" tabindex="-1">Anual</button>\n    <button role="tab" aria-selected="false" aria-controls="c-tabs-p" id="c-t2" tabindex="-1">Empresas</button>\n    <span class="c-tabs__ind" aria-hidden="true"></span>\n  </div>\n  <div class="c-tabs__panel" role="tabpanel" id="c-tabs-p" aria-labelledby="c-t0"></div>\n</div>`,
  css: `.c-tabs { width: 100%; max-width: 300px; }\n.c-tabs__list { position: relative; display: flex; padding: 4px; border-radius: 12px; background: var(--glass-strong); border: 1px solid var(--edge); }\n.c-tabs__list button { position: relative; z-index: 1; flex: 1; padding: 10px 8px; border: 0; background: none; color: var(--ink-2); font: 500 13.5px var(--body); cursor: pointer; transition: color .3s; }\n.c-tabs__list button[aria-selected="true"] { color: var(--accent-ink); }\n.c-tabs__ind { position: absolute; top: 4px; bottom: 4px; left: 0; border-radius: 9px; background: var(--accent); transition: transform .45s cubic-bezier(.3,1.3,.5,1), width .45s cubic-bezier(.3,1.3,.5,1); }\n.c-tabs__panel { margin-top: 14px; padding: 14px; border-radius: 10px; border: 1px solid var(--edge); min-height: 74px; }\n.c-tabs__panel b { display: block; font: 600 24px var(--display); color: var(--ink); }\n.c-tabs__panel span { font-size: 13px; color: var(--ink-2); }\n.c-tabs__panel > * { animation: c-tabs-in .35s cubic-bezier(.2,.8,.2,1); }\n@keyframes c-tabs-in { from { opacity: 0; transform: translateY(6px); } }`,
  js: function(root) {
    const tabs = [ ...root.querySelectorAll('[role="tab"]') ], ind = root.querySelector('.c-tabs__ind'), panel = root.querySelector('[role="tabpanel"]');
    const data = [ [ 'Gs. 150.000', 'por mes, cancelas cuando quieras' ], [ 'Gs. 1.440.000', 'por año, ahorras dos meses' ], [ 'A medida', 'factura y soporte dedicado' ] ];
    function select(i, focus) {
      tabs.forEach((t, k) => {
        t.setAttribute('aria-selected', k === i);
        t.tabIndex = k === i ? 0 : -1;
      });
      ind.style.width = tabs[i].offsetWidth + 'px';
      ind.style.transform = 'translateX(' + tabs[i].offsetLeft + 'px)';
      panel.setAttribute('aria-labelledby', tabs[i].id);
      const b = document.createElement('b');
      b.textContent = data[i][0];
      const s = document.createElement('span');
      s.textContent = data[i][1];
      panel.replaceChildren(b, s);
      if (focus) tabs[i].focus();
    }
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') select((i + 1) % tabs.length, true);
        if (e.key === 'ArrowLeft') select((i + tabs.length - 1) % tabs.length, true);
      });
    });
    requestAnimationFrame(() => select(0));
    addEventListener('resize', () => select(tabs.findIndex(t => t.getAttribute('aria-selected') === 'true')));
  }
}, {
  id: 'acc',
  cat: 'Navegación',
  name: 'Acordeón fluido',
  desc: 'Abre con altura real animada; solo uno abierto a la vez.',
  html: `<div class="c-acc">\n  <div class="c-acc__item">\n    <button type="button" aria-expanded="true" aria-controls="c-acc-1" id="c-acc-b1">¿Cuánto tarda un sitio?<i aria-hidden="true"></i></button>\n    <div class="c-acc__panel" id="c-acc-1" role="region" aria-labelledby="c-acc-b1"><div><p>Una página de presentación, entre una y dos semanas.</p></div></div>\n  </div>\n  <div class="c-acc__item">\n    <button type="button" aria-expanded="false" aria-controls="c-acc-2" id="c-acc-b2">¿Puedo editarlo yo?<i aria-hidden="true"></i></button>\n    <div class="c-acc__panel" id="c-acc-2" role="region" aria-labelledby="c-acc-b2"><div><p>Sí, con un panel simple para textos, fotos y precios.</p></div></div>\n  </div>\n  <div class="c-acc__item">\n    <button type="button" aria-expanded="false" aria-controls="c-acc-3" id="c-acc-b3">¿Incluye dominio?<i aria-hidden="true"></i></button>\n    <div class="c-acc__panel" id="c-acc-3" role="region" aria-labelledby="c-acc-b3"><div><p>Te ayudo a registrarlo a tu nombre para que sea tuyo.</p></div></div>\n  </div>\n</div>`,
  css: `.c-acc { width: 100%; max-width: 300px; }\n.c-acc__item { border-bottom: 1px solid var(--edge); }\n.c-acc__item button { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 12px 2px; border: 0; background: none; color: var(--ink); font: 500 14px var(--body); text-align: left; cursor: pointer; }\n.c-acc__item i { position: relative; width: 14px; height: 14px; flex: none; }\n.c-acc__item i::before, .c-acc__item i::after { content: ""; position: absolute; left: 0; right: 0; top: 6px; height: 2px; border-radius: 1px; background: var(--accent); transition: transform .35s cubic-bezier(.3,1.3,.5,1); }\n.c-acc__item i::after { transform: rotate(90deg); }\n.c-acc__item button[aria-expanded="true"] i::after { transform: rotate(0); }\n.c-acc__panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .4s cubic-bezier(.2,.8,.2,1); }\n.c-acc__panel > div { overflow: hidden; }\n.c-acc__item button[aria-expanded="true"] + .c-acc__panel { grid-template-rows: 1fr; }\n.c-acc__panel p { padding: 0 2px 12px; font-size: 13px; color: var(--ink-2); }`,
  js: function(root) {
    const btns = root.querySelectorAll('.c-acc__item button');
    btns.forEach(b => b.addEventListener('click', () => {
      const open = b.getAttribute('aria-expanded') !== 'true';
      btns.forEach(x => x.setAttribute('aria-expanded', 'false'));
      b.setAttribute('aria-expanded', open);
    }));
  }
}, {
  id: 'modal',
  cat: 'Feedback',
  name: 'Ventana modal accesible',
  desc: 'Usa el elemento dialog: atrapa el foco, cierra con Escape y devuelve el foco.',
  html: `<button class="c-modal__open" type="button">Eliminar proyecto</button>\n<dialog class="c-modal" aria-labelledby="c-modal-t" aria-describedby="c-modal-d">\n  <div class="c-modal__ico" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01M10.3 3.9L2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg></div>\n  <h3 id="c-modal-t">¿Eliminar este proyecto?</h3>\n  <p id="c-modal-d">Se borrarán las páginas y los archivos. Esta acción no se puede deshacer.</p>\n  <div class="c-modal__row">\n    <button type="button" class="c-modal__no" value="cancelar">Cancelar</button>\n    <button type="button" class="c-modal__yes" value="eliminar">Sí, eliminar</button>\n  </div>\n</dialog>\n<p class="c-modal__out" aria-live="polite"></p>`,
  css: `.c-modal__open { padding: 13px 20px; border-radius: 10px; border: 1.5px solid #ff6b6b; background: transparent; color: #ff8a8a; font: 600 14px var(--body); cursor: pointer; transition: background .2s, color .2s; }\n.c-modal__open:hover { background: #ff6b6b; color: #1a0606; }\n.c-modal { position: fixed; inset: 0; margin: auto; height: fit-content; width: min(340px, 90vw); padding: 24px; border: 1px solid var(--edge); border-radius: 16px; background: #0f1628; color: var(--ink); box-shadow: 0 40px 80px -30px #000; }\n.c-modal::backdrop { background: rgba(3,6,14,.6); backdrop-filter: blur(6px); }\n.c-modal[open] { animation: c-modal-in .35s cubic-bezier(.3,1.3,.5,1); }\n@keyframes c-modal-in { from { opacity: 0; transform: translateY(12px) scale(.94); } }\n.c-modal__ico { width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center; background: rgba(255,107,107,.15); color: #ff8a8a; }\n.c-modal h3 { margin-top: 14px; font: 600 18px var(--body); }\n.c-modal p { margin-top: 6px; font-size: 14px; color: var(--ink-2); }\n.c-modal__row { display: flex; justify-content: flex-end; gap: 8px; margin-top: 20px; }\n.c-modal__row button { padding: 11px 16px; border-radius: 10px; border: 1px solid var(--edge); background: var(--glass-strong); color: var(--ink); font: 500 14px var(--body); cursor: pointer; }\n.c-modal__row .c-modal__yes { background: #ff6b6b; border-color: #ff6b6b; color: #1a0606; font-weight: 600; }\n.c-modal__out { margin-top: 12px; font: 12px var(--mono); color: var(--ink-3); text-align: center; min-height: 14px; }`,
  js: function(root) {
    const open = root.querySelector('.c-modal__open'), dlg = root.querySelector('dialog'), out = root.querySelector('.c-modal__out');
    open.addEventListener('click', () => {
      dlg.showModal();
      dlg.querySelector('.c-modal__no').focus();
    });
    dlg.querySelectorAll('.c-modal__row button').forEach(b => b.addEventListener('click', () => dlg.close(b.value)));
    dlg.addEventListener('click', e => {
      if (e.target === dlg) dlg.close('cancelar');
    });
    dlg.addEventListener('close', () => {
      out.textContent = dlg.returnValue === 'eliminar' ? 'Proyecto eliminado (demostración)' : 'No se eliminó nada';
      open.focus();
    });
  }
}, {
  id: 'toast',
  cat: 'Feedback',
  name: 'Notificaciones apilables',
  desc: 'Se apilan, muestran el tiempo restante, se pausan con el mouse y permiten deshacer.',
  html: `<div class="c-toast">\n  <div class="c-toast__btns">\n    <button type="button" data-t="ok">Guardar</button>\n    <button type="button" data-t="err">Error</button>\n    <button type="button" data-t="undo">Archivar</button>\n  </div>\n  <ol class="c-toast__stack" aria-live="polite"></ol>\n</div>`,
  css: `.c-toast { position: relative; width: 100%; height: 100%; min-height: 200px; }\n.c-toast__btns { display: flex; justify-content: center; gap: 6px; }\n.c-toast__btns button { padding: 9px 12px; border-radius: 8px; border: 1px solid var(--edge); background: var(--glass-strong); color: var(--ink); font: 500 13px var(--body); cursor: pointer; }\n.c-toast__stack { position: absolute; left: 0; right: 0; bottom: 0; list-style: none; display: flex; flex-direction: column; gap: 6px; padding: 0; margin: 0; }\n.c-toast__item { position: relative; overflow: hidden; display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 10px; background: #111a30; border: 1px solid var(--edge); font-size: 13px; animation: c-toast-in .35s cubic-bezier(.3,1.3,.5,1); }\n.c-toast__item.out { animation: c-toast-out .25s forwards; }\n@keyframes c-toast-in { from { opacity: 0; transform: translateY(14px) scale(.96); } }\n@keyframes c-toast-out { to { opacity: 0; transform: translateX(30px); } }\n.c-toast__item i { width: 8px; height: 8px; border-radius: 50%; flex: none; }\n.c-toast__item[data-t="ok"] i { background: var(--mark-live); }\n.c-toast__item[data-t="err"] i { background: #ff6b6b; }\n.c-toast__item[data-t="undo"] i { background: var(--accent); }\n.c-toast__item span { flex: 1; }\n.c-toast__item button { border: 0; background: none; color: var(--accent); font: 600 12.5px var(--body); cursor: pointer; }\n.c-toast__item b { position: absolute; left: 0; bottom: 0; height: 2px; width: 100%; background: currentColor; opacity: .35; transform-origin: left; animation: c-toast-time 4s linear forwards; }\n.c-toast__item:hover b { animation-play-state: paused; }\n@keyframes c-toast-time { to { transform: scaleX(0); } }`,
  js: function(root) {
    const stack = root.querySelector('.c-toast__stack');
    const msgs = {
      ok: 'Cambios guardados',
      err: 'No se pudo conectar',
      undo: 'Proyecto archivado'
    };
    root.querySelectorAll('[data-t]').forEach(btn => btn.addEventListener('click', () => {
      const type = btn.dataset.t;
      const li = document.createElement('li');
      li.className = 'c-toast__item';
      li.dataset.t = type;
      const dot = document.createElement('i');
      const txt = document.createElement('span');
      txt.textContent = msgs[type];
      const bar = document.createElement('b');
      li.append(dot, txt);
      if (type === 'undo') {
        const u = document.createElement('button');
        u.type = 'button';
        u.textContent = 'Deshacer';
        u.addEventListener('click', () => {
          txt.textContent = 'Restaurado';
          u.remove();
        });
        li.append(u);
      }
      li.append(bar);
      const close = () => {
        li.classList.add('out');
        li.addEventListener('animationend', () => li.remove(), {
          once: true
        });
      };
      bar.addEventListener('animationend', close);
      stack.append(li);
      if (stack.children.length > 3) stack.firstElementChild.remove();
    }));
  }
}, {
  id: 'step',
  cat: 'Formularios',
  name: 'Cantidad con números rodantes',
  desc: 'Cada dígito rueda hacia arriba o abajo y el total se recalcula.',
  html: `<div class="c-step">\n  <div class="c-step__row">\n    <button type="button" class="c-step__btn" data-d="-1" aria-label="Quitar uno">−</button>\n    <output class="c-step__num" aria-live="polite" aria-label="Cantidad"></output>\n    <button type="button" class="c-step__btn" data-d="1" aria-label="Sumar uno">+</button>\n  </div>\n  <p class="c-step__total">Total: <b></b></p>\n</div>`,
  css: `.c-step { text-align: center; }\n.c-step__row { display: inline-flex; align-items: center; gap: 6px; padding: 6px; border-radius: 999px; border: 1px solid var(--edge); background: var(--glass-strong); }\n.c-step__btn { width: 42px; height: 42px; border-radius: 50%; border: 0; background: var(--glass-strong); color: var(--ink); font: 500 22px var(--body); cursor: pointer; transition: background .2s, transform .15s; }\n.c-step__btn:hover:not(:disabled) { background: var(--accent); color: var(--accent-ink); }\n.c-step__btn:active:not(:disabled) { transform: scale(.9); }\n.c-step__btn:disabled { opacity: .3; cursor: not-allowed; }\n.c-step__num { display: flex; min-width: 56px; justify-content: center; height: 40px; overflow: hidden; font: 600 30px/40px var(--display); color: var(--ink); }\n.c-step__col { display: block; height: 40px; overflow: hidden; }\n.c-step__col span { display: block; transition: transform .45s cubic-bezier(.3,1.3,.5,1); }\n.c-step__col i { display: block; height: 40px; font-style: normal; }\n.c-step__total { margin-top: 14px; font: 13px var(--mono); color: var(--ink-2); }\n.c-step__total b { color: var(--accent); font-weight: 500; }`,
  js: function(root) {
    const out = root.querySelector('.c-step__num'), total = root.querySelector('.c-step__total b');
    const price = 45e3, min = 1, max = 20;
    let n = 1;
    function col() {
      const c = document.createElement('span');
      c.className = 'c-step__col';
      const strip = document.createElement('span');
      for (let d = 0; d < 10; d++) {
        const i = document.createElement('i');
        i.textContent = d;
        strip.append(i);
      }
      c.append(strip);
      return c;
    }
    const cols = [ col(), col() ];
    out.append(...cols);
    function render() {
      const s = String(n).padStart(2, '0');
      cols.forEach((c, k) => {
        c.firstChild.style.transform = 'translateY(' + -40 * +s[k] + 'px)';
      });
      cols[0].style.display = n < 10 ? 'none' : 'block';
      out.setAttribute('aria-label', 'Cantidad: ' + n);
      total.textContent = 'Gs. ' + (n * price).toLocaleString('es-PY');
      root.querySelector('[data-d="-1"]').disabled = n <= min;
      root.querySelector('[data-d="1"]').disabled = n >= max;
    }
    root.querySelectorAll('.c-step__btn').forEach(b => b.addEventListener('click', () => {
      n = Math.min(max, Math.max(min, n + +b.dataset.d));
      render();
    }));
    render();
  }
}, {
  id: 'range',
  cat: 'Formularios',
  name: 'Rango doble de precio',
  desc: 'Dos controles sobre una sola barra; no se pueden cruzar.',
  html: `<div class="c-range">\n  <div class="c-range__vals"><output class="c-range__min"></output><output class="c-range__max"></output></div>\n  <div class="c-range__track">\n    <span class="c-range__fill" aria-hidden="true"></span>\n    <input type="range" min="0" max="2000000" step="50000" value="300000" aria-label="Precio mínimo">\n    <input type="range" min="0" max="2000000" step="50000" value="1400000" aria-label="Precio máximo">\n  </div>\n  <p class="c-range__count" aria-live="polite"></p>\n</div>`,
  css: `.c-range { width: 100%; max-width: 280px; }\n.c-range__vals { display: flex; justify-content: space-between; font: 500 14px var(--mono); color: var(--ink); margin-bottom: 14px; }\n.c-range__track { position: relative; height: 24px; }\n.c-range__track::before { content: ""; position: absolute; left: 0; right: 0; top: 10px; height: 4px; border-radius: 2px; background: var(--edge); }\n.c-range__fill { position: absolute; top: 10px; height: 4px; border-radius: 2px; background: var(--accent); }\n.c-range input { position: absolute; left: 0; top: 0; width: 100%; height: 24px; margin: 0; background: none; pointer-events: none; -webkit-appearance: none; appearance: none; }\n.c-range input::-webkit-slider-thumb { -webkit-appearance: none; pointer-events: auto; width: 22px; height: 22px; border-radius: 50%; background: var(--ink); border: 4px solid var(--accent); cursor: grab; transition: transform .15s; }\n.c-range input::-moz-range-thumb { pointer-events: auto; width: 14px; height: 14px; border-radius: 50%; background: var(--ink); border: 4px solid var(--accent); cursor: grab; }\n.c-range input:active::-webkit-slider-thumb { transform: scale(1.2); cursor: grabbing; }\n.c-range input:focus-visible::-webkit-slider-thumb { box-shadow: 0 0 0 4px rgba(127,178,255,.35); }\n.c-range__count { margin-top: 14px; font: 12px var(--mono); color: var(--ink-3); }`,
  js: function(root) {
    const [a, b] = root.querySelectorAll('input'), fill = root.querySelector('.c-range__fill');
    const minO = root.querySelector('.c-range__min'), maxO = root.querySelector('.c-range__max'), count = root.querySelector('.c-range__count');
    const prices = [ 18e4, 26e4, 39e4, 52e4, 64e4, 79e4, 95e4, 12e5, 145e4, 18e5 ];
    const gs = v => 'Gs. ' + (+v).toLocaleString('es-PY');
    function update(e) {
      const gap = 1e5;
      if (+b.value - +a.value < gap) {
        if (e && e.target === a) a.value = +b.value - gap; else b.value = +a.value + gap;
      }
      const max = +a.max;
      fill.style.left = a.value / max * 100 + '%';
      fill.style.width = (b.value - a.value) / max * 100 + '%';
      minO.textContent = gs(a.value);
      maxO.textContent = gs(b.value);
      const n = prices.filter(p => p >= +a.value && p <= +b.value).length;
      count.textContent = n + ' de ' + prices.length + ' productos en este rango';
    }
    a.addEventListener('input', update);
    b.addEventListener('input', update);
    update();
  }
}, {
  id: 'carousel',
  cat: 'Navegación',
  name: 'Carrusel arrastrable',
  desc: 'Se arrastra con el mouse o el dedo, se acomoda solo y marca la posición.',
  html: `<div class="c-car">\n  <div class="c-car__track" tabindex="0" aria-label="Galería desplazable">\n    <figure><img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=70&auto=format&fit=crop" alt="Hamburguesa" draggable="false"><figcaption>Humo Negro</figcaption></figure>\n    <figure><img src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&q=70&auto=format&fit=crop" alt="Celular" draggable="false"><figcaption>Nodo</figcaption></figure>\n    <figure><img src="https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=70&auto=format&fit=crop" alt="Sashimi" draggable="false"><figcaption>Umi</figcaption></figure>\n    <figure><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=70&auto=format&fit=crop" alt="Casa moderna" draggable="false"><figcaption>Altura</figcaption></figure>\n    <figure><img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=70&auto=format&fit=crop" alt="Sillón amarillo" draggable="false"><figcaption>Nido</figcaption></figure>\n  </div>\n  <div class="c-car__dots" aria-hidden="true"></div>\n</div>`,
  css: `.c-car { width: 100%; }\n.c-car__track { display: flex; gap: 10px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; cursor: grab; padding: 2px; }\n.c-car__track::-webkit-scrollbar { display: none; }\n.c-car__track.drag { cursor: grabbing; scroll-snap-type: none; }\n.c-car__track figure { flex: 0 0 62%; margin: 0; scroll-snap-align: center; border-radius: 12px; overflow: hidden; position: relative; transition: transform .3s; }\n.c-car__track img { display: block; width: 100%; aspect-ratio: 4/3; object-fit: cover; user-select: none; }\n.c-car__track figcaption { position: absolute; left: 8px; bottom: 8px; padding: 4px 8px; border-radius: 6px; background: rgba(7,13,28,.75); font: 500 12px var(--mono); color: #e6ecfb; }\n.c-car__dots { display: flex; justify-content: center; gap: 6px; margin-top: 12px; }\n.c-car__dots i { width: 6px; height: 6px; border-radius: 3px; background: var(--edge); transition: width .3s, background .3s; }\n.c-car__dots i.on { width: 20px; background: var(--accent); }`,
  js: function(root) {
    const track = root.querySelector('.c-car__track'), dots = root.querySelector('.c-car__dots');
    const items = [ ...track.children ];
    items.forEach(() => dots.append(document.createElement('i')));
    let down = false, sx = 0, sl = 0, v = 0, last = 0;
    track.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse') return;
      down = true;
      sx = e.clientX;
      sl = track.scrollLeft;
      last = e.clientX;
      track.classList.add('drag');
      track.setPointerCapture(e.pointerId);
    });
    track.addEventListener('pointermove', e => {
      if (!down) return;
      track.scrollLeft = sl - (e.clientX - sx);
      v = e.clientX - last;
      last = e.clientX;
    });
    track.addEventListener('pointerup', () => {
      if (!down) return;
      down = false;
      track.scrollBy({
        left: -v * 8,
        behavior: 'smooth'
      });
      setTimeout(() => track.classList.remove('drag'), 250);
    });
    function mark() {
      const c = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      items.forEach((it, i) => {
        if (Math.abs(it.offsetLeft + it.offsetWidth / 2 - c) < Math.abs(items[best].offsetLeft + items[best].offsetWidth / 2 - c)) best = i;
      });
      [ ...dots.children ].forEach((d, i) => d.classList.toggle('on', i === best));
    }
    track.addEventListener('scroll', mark, {
      passive: true
    });
    mark();
  }
}, {
  id: 'combo',
  cat: 'Formularios',
  name: 'Buscador con autocompletado',
  desc: 'Filtra mientras escribes, resalta la coincidencia y se maneja con el teclado.',
  html: `<div class="c-cb">\n  <label for="c-cb-in">Ciudad de entrega</label>\n  <input id="c-cb-in" role="combobox" aria-expanded="false" aria-controls="c-cb-list" aria-autocomplete="list" autocomplete="off" placeholder="Escribe, por ejemplo, San">\n  <ul id="c-cb-list" role="listbox" hidden></ul>\n  <p class="c-cb__pick" aria-live="polite"></p>\n</div>`,
  css: `.c-cb { position: relative; width: 100%; max-width: 280px; align-self: start; margin-top: 8px; }\n.c-cb label { display: block; margin-bottom: 6px; font: 500 12.5px var(--body); color: var(--ink-3); }\n.c-cb input { width: 100%; padding: 12px 14px; border-radius: 10px; border: 1.5px solid var(--edge); background: var(--glass); color: var(--ink); font: 14px var(--body); outline: none; }\n.c-cb input:focus { border-color: var(--accent); }\n.c-cb ul { position: absolute; left: 0; right: 0; top: 100%; z-index: 5; margin: 6px 0 0; padding: 4px; list-style: none; max-height: 150px; overflow: auto; border-radius: 10px; border: 1px solid var(--edge); background: #0f1628; box-shadow: 0 20px 40px -20px #000; }\n.c-cb li { padding: 9px 10px; border-radius: 7px; font-size: 14px; color: var(--ink-2); cursor: pointer; }\n.c-cb li mark { background: none; color: var(--accent); font-weight: 600; }\n.c-cb li[aria-selected="true"] { background: var(--glass-strong); color: var(--ink); }\n.c-cb li.empty { cursor: default; color: var(--ink-3); }\n.c-cb__pick { margin-top: 10px; font: 12px var(--mono); color: var(--ink-3); min-height: 14px; }`,
  js: function(root) {
    const input = root.querySelector('input'), list = root.querySelector('ul'), pick = root.querySelector('.c-cb__pick');
    const cities = [ 'Asunción', 'Areguá', 'Caacupé', 'Capiatá', 'Ciudad del Este', 'Concepción', 'Coronel Oviedo', 'Encarnación', 'Fernando de la Mora', 'Itauguá', 'Lambaré', 'Limpio', 'Luque', 'Mariano Roque Alonso', 'Ñemby', 'Pedro Juan Caballero', 'Pilar', 'San Bernardino', 'San Lorenzo', 'Villarrica' ];
    const plain = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    let results = [], active = -1;
    function render() {
      const q = plain(input.value.trim());
      results = q ? cities.filter(c => plain(c).includes(q)) : [];
      list.replaceChildren();
      active = -1;
      if (!q) {
        list.hidden = true;
        input.setAttribute('aria-expanded', 'false');
        return;
      }
      if (!results.length) {
        const li = document.createElement('li');
        li.className = 'empty';
        li.textContent = 'Sin resultados';
        list.append(li);
      }
      results.forEach((c, i) => {
        const li = document.createElement('li');
        li.id = 'c-cb-o' + i;
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', 'false');
        const at = plain(c).indexOf(q);
        const m = document.createElement('mark');
        m.textContent = c.slice(at, at + q.length);
        li.append(c.slice(0, at), m, c.slice(at + q.length));
        li.addEventListener('mousedown', e => {
          e.preventDefault();
          choose(i);
        });
        list.append(li);
      });
      list.hidden = false;
      input.setAttribute('aria-expanded', 'true');
    }
    function move(d) {
      if (!results.length) return;
      active = (active + d + results.length) % results.length;
      [ ...list.children ].forEach((li, i) => li.setAttribute('aria-selected', i === active));
      input.setAttribute('aria-activedescendant', 'c-cb-o' + active);
      list.children[active].scrollIntoView({
        block: 'nearest'
      });
    }
    function choose(i) {
      input.value = results[i];
      pick.textContent = 'Envío a ' + results[i];
      list.hidden = true;
      input.setAttribute('aria-expanded', 'false');
      input.removeAttribute('aria-activedescendant');
    }
    input.addEventListener('input', render);
    input.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        move(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        move(-1);
      }
      if (e.key === 'Enter' && active >= 0) {
        e.preventDefault();
        choose(active);
      }
      if (e.key === 'Escape') {
        list.hidden = true;
        input.setAttribute('aria-expanded', 'false');
      }
    });
    input.addEventListener('blur', () => {
      list.hidden = true;
      input.setAttribute('aria-expanded', 'false');
    });
  }
}, {
  id: 'like',
  cat: 'Botones',
  name: 'Me gusta con partículas',
  desc: 'El corazón late, se llena y lanza partículas; el contador rueda.',
  html: `<button class="c-like" type="button" aria-pressed="false" aria-label="Me gusta">\n  <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.5-9.2C1 8.2 3.4 4.5 7 4.5c2.1 0 3.6 1.1 5 3 1.4-1.9 2.9-3 5-3 3.6 0 6 3.7 4.5 7.3C19.5 16.4 12 21 12 21z"/></svg>\n  <span class="c-like__burst" aria-hidden="true"></span>\n</button>\n<p class="c-like__count" aria-live="polite"><b>128</b> personas guardaron este diseño</p>`,
  css: `.c-like { position: relative; width: 72px; height: 72px; border-radius: 50%; border: 1px solid var(--edge); background: var(--glass-strong); cursor: pointer; display: grid; place-items: center; transition: transform .15s; }\n.c-like:active { transform: scale(.9); }\n.c-like svg path { fill: transparent; stroke: var(--ink-2); stroke-width: 1.8; transition: fill .25s, stroke .25s; }\n.c-like[aria-pressed="true"] svg { animation: c-like-pop .45s cubic-bezier(.3,1.6,.5,1); }\n.c-like[aria-pressed="true"] svg path { fill: #ff4d7a; stroke: #ff4d7a; }\n@keyframes c-like-pop { 0% { transform: scale(.6); } 60% { transform: scale(1.25); } }\n.c-like__burst { position: absolute; inset: 0; pointer-events: none; }\n.c-like__burst i { position: absolute; left: 50%; top: 50%; width: 7px; height: 7px; margin: -3.5px; border-radius: 50%; animation: c-like-fly .6s cubic-bezier(.1,.8,.3,1) forwards; }\n@keyframes c-like-fly { to { transform: translate(var(--dx), var(--dy)) scale(0); } }\n.c-like__count { margin-top: 12px; font: 12.5px var(--mono); color: var(--ink-2); text-align: center; }\n.c-like__count b { color: var(--ink); font-weight: 500; }`,
  js: function(root) {
    const btn = root.querySelector('.c-like'), burst = root.querySelector('.c-like__burst'), count = root.querySelector('.c-like__count b');
    const colors = [ '#ff4d7a', '#7fb2ff', '#ffd23f', '#7fe0a8' ];
    let n = 128;
    btn.addEventListener('click', () => {
      const on = btn.getAttribute('aria-pressed') !== 'true';
      btn.setAttribute('aria-pressed', on);
      n += on ? 1 : -1;
      count.textContent = n;
      if (!on || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      burst.replaceChildren();
      for (let k = 0; k < 12; k++) {
        const p = document.createElement('i'), a = k / 12 * Math.PI * 2, d = 44 + Math.random() * 18;
        p.style.setProperty('--dx', Math.cos(a) * d + 'px');
        p.style.setProperty('--dy', Math.sin(a) * d + 'px');
        p.style.background = colors[k % colors.length];
        burst.append(p);
      }
    });
  }
}, {
  id: 'skel',
  cat: 'Tarjetas',
  name: 'Carga con esqueleto',
  desc: 'Muestra la forma del contenido mientras carga, sin saltos de diseño.',
  html: `<div class="c-sk" aria-busy="true">\n  <div class="c-sk__head">\n    <span class="c-sk__av"><img alt="" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=70&auto=format&fit=crop"></span>\n    <div><p class="c-sk__l1">Lucía Ortiz</p><p class="c-sk__l2">Abogada · Asunción</p></div>\n  </div>\n  <p class="c-sk__txt">Revisó tu contrato y dejó tres comentarios en la cláusula de pagos.</p>\n</div>\n<button type="button" class="c-sk__again">Volver a cargar</button>`,
  css: `.c-sk { width: 100%; max-width: 270px; padding: 16px; border-radius: 14px; border: 1px solid var(--edge); background: var(--glass); }\n.c-sk__head { display: flex; gap: 12px; align-items: center; }\n.c-sk__av { width: 44px; height: 44px; border-radius: 50%; overflow: hidden; flex: none; }\n.c-sk__av img { width: 100%; height: 100%; object-fit: cover; }\n.c-sk__l1 { font: 600 14px var(--body); color: var(--ink); }\n.c-sk__l2 { font-size: 12.5px; color: var(--ink-3); }\n.c-sk__txt { margin-top: 12px; font-size: 13.5px; color: var(--ink-2); }\n.c-sk[aria-busy="true"] :is(.c-sk__av, .c-sk__l1, .c-sk__l2, .c-sk__txt) { color: transparent; border-radius: 6px; background: linear-gradient(90deg, rgba(255,255,255,.05) 25%, rgba(255,255,255,.14) 50%, rgba(255,255,255,.05) 75%) 0 0 / 300% 100%; animation: c-sk-shine 1.2s linear infinite; }\n.c-sk[aria-busy="true"] .c-sk__av { border-radius: 50%; }\n.c-sk[aria-busy="true"] img { opacity: 0; }\n.c-sk:not([aria-busy="true"]) > * { animation: c-sk-in .45s cubic-bezier(.2,.8,.2,1); }\n@keyframes c-sk-shine { to { background-position: -150% 0; } }\n@keyframes c-sk-in { from { opacity: 0; transform: translateY(6px); } }\n.c-sk__again { margin-top: 12px; border: 0; background: none; color: var(--accent); font: 500 13px var(--mono); cursor: pointer; }`,
  js: function(root) {
    const card = root.querySelector('.c-sk');
    function load() {
      card.setAttribute('aria-busy', 'true');
      setTimeout(() => card.setAttribute('aria-busy', 'false'), 1600);
    }
    root.querySelector('.c-sk__again').addEventListener('click', load);
    load();
  }
}, {
  id: 'copy',
  cat: 'Botones',
  name: 'Copiar con confirmación',
  desc: 'Copia al portapapeles y confirma con un cambio de ícono animado.',
  html: `<div class="c-copy">\n  <code>npm create vite@latest mi-sitio</code>\n  <button type="button" aria-label="Copiar comando">\n    <svg class="c-copy__a" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>\n    <svg class="c-copy__b" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>\n  </button>\n  <span class="c-copy__tip" role="status"></span>\n</div>`,
  css: `.c-copy { position: relative; display: flex; align-items: center; gap: 8px; padding: 6px 6px 6px 14px; border-radius: 10px; border: 1px solid var(--edge); background: #0b1224; }\n.c-copy code { font: 13px var(--mono); color: var(--ink); white-space: nowrap; }\n.c-copy code::before { content: "$ "; color: var(--accent); }\n.c-copy button { position: relative; width: 36px; height: 36px; flex: none; border-radius: 8px; border: 1px solid var(--edge); background: var(--glass-strong); color: var(--ink-2); cursor: pointer; }\n.c-copy svg { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); transition: transform .3s cubic-bezier(.3,1.5,.5,1), opacity .2s; }\n.c-copy__b { opacity: 0; transform: translate(-50%, -50%) scale(.3) !important; color: var(--mark-live); }\n.c-copy.done .c-copy__a { opacity: 0; transform: translate(-50%, -50%) scale(.3); }\n.c-copy.done .c-copy__b { opacity: 1; transform: translate(-50%, -50%) scale(1) !important; }\n.c-copy__tip { position: absolute; right: 0; top: -34px; padding: 5px 9px; border-radius: 6px; background: var(--mark-live); color: #04210f; font: 600 12px var(--body); opacity: 0; transform: translateY(6px); transition: opacity .2s, transform .25s; }\n.c-copy.done .c-copy__tip { opacity: 1; transform: none; }`,
  js: function(root) {
    const box = root.querySelector('.c-copy'), btn = box.querySelector('button'), tip = box.querySelector('.c-copy__tip');
    let timer;
    btn.addEventListener('click', async () => {
      const text = box.querySelector('code').textContent;
      try {
        await navigator.clipboard.writeText(text);
        tip.textContent = 'Copiado';
      } catch (e) {
        tip.textContent = 'Selecciona y copia a mano';
      }
      box.classList.add('done');
      clearTimeout(timer);
      timer = setTimeout(() => box.classList.remove('done'), 1600);
    });
  }
} ];

(function() {
  function bodyOf(fn) {
    const src = fn.toString();
    const lines = src.slice(src.indexOf('{') + 1, src.lastIndexOf('}')).replace(/^\n+|\s+$/g, '').split('\n');
    const pad = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^ */)[0].length));
    return lines.map(l => l.slice(pad)).join('\n');
  }
  const host = document.getElementById('labGrid');
  const filters = document.getElementById('labFilters');
  if (!host) return;
  const cats = [ 'Todos', ...new Set(LAB.map(c => c.cat)) ];
  cats.forEach((c, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip';
    b.textContent = c;
    b.setAttribute('aria-pressed', i === 0);
    b.addEventListener('click', () => {
      filters.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
      host.querySelectorAll('.lab-card').forEach(card => {
        card.hidden = c !== 'Todos' && card.dataset.cat !== c;
      });
    });
    filters.append(b);
  });
  const style = document.createElement('style');
  style.textContent = LAB.map(c => c.css).join('\n');
  document.head.append(style);
  LAB.forEach((c, n) => {
    const card = document.createElement('article');
    card.className = 'glass lab-card';
    card.dataset.cat = c.cat;
    const demo = document.createElement('div');
    demo.className = 'lab-demo';
    demo.innerHTML = c.html;
    const foot = document.createElement('footer');
    foot.className = 'lab-foot';
    const info = document.createElement('div');
    const num = document.createElement('span');
    num.className = 'lab-num';
    num.textContent = String(n + 1).padStart(2, '0') + ' · ' + c.cat;
    const h = document.createElement('h3');
    h.textContent = c.name;
    const p = document.createElement('p');
    p.textContent = c.desc;
    info.append(num, h, p);
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'lab-toggle';
    toggle.textContent = 'Ver código';
    toggle.setAttribute('aria-expanded', 'false');
    foot.append(info, toggle);
    const code = document.createElement('div');
    code.className = 'lab-code';
    code.hidden = true;
    const tabs = document.createElement('div');
    tabs.className = 'lab-code-tabs';
    const pre = document.createElement('pre');
    const codeEl = document.createElement('code');
    pre.append(codeEl);
    const copy = document.createElement('button');
    copy.type = 'button';
    copy.className = 'lab-copy';
    copy.textContent = 'Copiar';
    let current = 'html';
    const source = {
      html: c.html,
      css: c.css,
      js: bodyOf(c.js)
    };
    const show = lang => {
      current = lang;
      codeEl.textContent = source[lang];
      tabs.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b.dataset.l === lang));
    };
    [ 'html', 'css', 'js' ].forEach(l => {
      const b = document.createElement('button');
      b.type = 'button';
      b.dataset.l = l;
      b.textContent = l.toUpperCase();
      b.addEventListener('click', () => show(l));
      tabs.append(b);
    });
    tabs.append(copy);
    copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(source[current]);
        copy.textContent = 'Copiado';
      } catch (e) {
        copy.textContent = 'No se pudo';
      }
      setTimeout(() => copy.textContent = 'Copiar', 1400);
    });
    code.append(tabs, pre);
    show('html');
    toggle.addEventListener('click', () => {
      const open = code.hidden;
      code.hidden = !open;
      toggle.setAttribute('aria-expanded', open);
      toggle.textContent = open ? 'Ocultar código' : 'Ver código';
    });
    card.append(demo, foot, code);
    host.append(card);
    try {
      c.js(demo);
    } catch (e) {
      console.error('Componente ' + c.id, e);
    }
  });
})();
