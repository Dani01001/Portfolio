(function() {
  const css = `\n.cap-demo { margin-top: 6px; border-radius: 12px; border: 1px solid var(--edge); background: rgba(5,10,22,.55); padding: 14px; }\n.cap-row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }\n.cap-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border-radius: 9px; border: 1px solid var(--edge); background: var(--glass-strong); color: var(--ink); font: 500 13.5px var(--body); cursor: pointer; text-decoration: none; transition: border-color .2s, background .2s; }\n.cap-btn:hover { border-color: var(--accent); }\n.cap-btn.pri { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); font-weight: 600; }\n.cap-btn:disabled { opacity: .4; cursor: not-allowed; }\n.cap-in { width: 100%; padding: 10px 12px; border-radius: 9px; border: 1.5px solid var(--edge); background: var(--glass); color: var(--ink); font: 14px var(--body); outline: none; }\n.cap-in:focus { border-color: var(--accent); }\n.cap-in[aria-invalid="true"] { border-color: #ff6b6b; }\n.cap-err { min-height: 14px; font-size: 11.5px; color: #ff8a8a; }\n\n.wa-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }\n.wa-items { list-style: none; display: grid; gap: 8px; }\n.wa-items li { display: grid; grid-template-columns: 1fr auto; gap: 2px 8px; align-items: center; font-size: 13.5px; }\n.wa-items small { color: var(--ink-3); font-size: 12px; }\n.wa-q { grid-row: span 2; display: flex; align-items: center; gap: 6px; }\n.wa-q button { width: 26px; height: 26px; border-radius: 7px; border: 1px solid var(--edge); background: var(--glass-strong); color: var(--ink); cursor: pointer; }\n.wa-q span { min-width: 16px; text-align: center; font: 500 13px var(--mono); }\n.wa-chat { border-radius: 10px; padding: 10px; background: #0b141a; min-height: 150px; display: flex; flex-direction: column; justify-content: flex-end; }\n.wa-chat > small { font: 11px var(--mono); color: #8696a0; margin-bottom: 8px; }\n.wa-bubble { align-self: flex-end; max-width: 95%; padding: 8px 10px 16px; border-radius: 8px 0 8px 8px; background: #005c4b; color: #e9edef; font: 12.5px/1.45 var(--body); white-space: pre-wrap; position: relative; animation: capIn .3s; }\n.wa-bubble em { position: absolute; right: 8px; bottom: 3px; font: normal 10px var(--mono); color: #9fd6c8; }\n\n.fm-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }\n.fm-form { display: grid; gap: 6px; }\n.fm-form label { font: 500 11px var(--mono); color: var(--ink-3); text-transform: uppercase; letter-spacing: .06em; }\n.fm-hp { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; }\n.fm-mail { border-radius: 10px; border: 1px solid var(--edge); background: #0f1628; overflow: hidden; font-size: 12.5px; min-height: 180px; }\n.fm-mail header { padding: 10px 12px; border-bottom: 1px solid var(--edge); display: grid; gap: 2px; color: var(--ink-3); font-family: var(--mono); font-size: 11.5px; }\n.fm-mail header b { color: var(--ink); font-family: var(--body); font-size: 13px; }\n.fm-mail p { padding: 12px; color: var(--ink-2); white-space: pre-wrap; }\n.fm-empty { display: grid; place-items: center; min-height: 180px; padding: 16px; text-align: center; color: var(--ink-3); font: 12px var(--mono); }\n\n.pwa { position: relative; border-radius: 22px; border: 6px solid #1c2640; background: #0b1224; padding: 12px; min-height: 250px; overflow: hidden; }\n.pwa-bar { display: flex; justify-content: space-between; font: 11px var(--mono); color: var(--ink-3); margin-bottom: 8px; }\n.pwa-net { display: none; margin: 0 -12px 10px; padding: 7px 12px; background: #ffb454; color: #2a1800; font: 600 12px var(--body); }\n.pwa.off .pwa-net { display: block; }\n.pwa h4 { font: 600 14px var(--body); color: var(--ink); }\n.pwa ul { list-style: none; display: grid; gap: 6px; margin-top: 8px; }\n.pwa li { display: flex; justify-content: space-between; gap: 8px; padding: 8px 10px; border-radius: 8px; background: var(--glass-strong); font-size: 12.5px; animation: capIn .3s; }\n.pwa li i { font: normal 10.5px var(--mono); color: var(--mark-live); }\n.pwa li.pend i { color: #ffb454; }\n.pwa-toast { position: absolute; left: 12px; right: 12px; bottom: 12px; padding: 9px 10px; border-radius: 9px; background: var(--accent); color: var(--accent-ink); font: 600 12px var(--body); transform: translateY(140%); transition: transform .35s cubic-bezier(.3,1.3,.5,1); }\n.pwa-toast.show { transform: none; }\n.sw { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer; }\n.sw input { appearance: none; width: 38px; height: 22px; border-radius: 11px; background: var(--glass-strong); border: 1px solid var(--edge); position: relative; cursor: pointer; transition: background .25s; }\n.sw input::after { content: ""; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; border-radius: 50%; background: var(--ink); transition: transform .25s; }\n.sw input:checked { background: #ffb454; }\n.sw input:checked::after { transform: translateX(16px); }\n\n.api-out { margin-top: 10px; border-radius: 10px; background: #050a16; border: 1px solid var(--edge); min-height: 170px; font: 12px/1.6 var(--mono); overflow: auto; }\n.api-out header { display: flex; justify-content: space-between; padding: 8px 12px; border-bottom: 1px solid var(--edge); color: var(--ink-3); }\n.api-out header b { font-weight: 500; }\n.api-out header b.ok { color: var(--mark-live); } .api-out header b.bad { color: #ff8a8a; }\n.api-out pre { margin: 0; padding: 10px 12px; color: var(--ink-2); white-space: pre-wrap; word-break: break-all; }\n.api-m { font: 600 11px var(--mono); padding: 2px 6px; border-radius: 4px; margin-right: 4px; }\n.api-m.post { background: rgba(255,180,84,.18); color: #ffb454; } .api-m.get { background: rgba(127,224,168,.15); color: var(--mark-live); }\n\n.db { display: grid; grid-template-columns: 220px 1fr; gap: 18px; }\n.db-kpis { display: grid; gap: 8px; align-content: start; }\n.db-kpi { padding: 12px 14px; border-radius: 10px; border: 1px solid var(--edge); background: var(--glass); }\n.db-kpi small { font: 11px var(--mono); color: var(--ink-3); text-transform: uppercase; letter-spacing: .06em; }\n.db-kpi b { display: block; margin-top: 4px; font: 600 22px var(--display); color: var(--ink); font-variant-numeric: tabular-nums; }\n.db-kpi span { font-size: 12px; color: var(--ink-3); }\n.db-kpi span.up { color: var(--mark-live); }\n.db-top { display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 8px; }\n.db-top h4 { font: 600 14px var(--body); color: var(--ink); }\n.db-chips { display: flex; gap: 4px; }\n.db-chips button { padding: 6px 10px; border-radius: 7px; border: 1px solid transparent; background: none; color: var(--ink-3); font: 500 12px var(--mono); cursor: pointer; }\n.db-chips button[aria-pressed="true"] { border-color: var(--edge); background: var(--glass-strong); color: var(--ink); }\n.db-chart { position: relative; }\n.db-chart svg { display: block; width: 100%; height: 230px; overflow: visible; }\n.db-chart .grid line { stroke: rgba(255,255,255,.07); }\n.db-chart .axis text { fill: var(--ink-3); font: 10.5px var(--mono); }\n.db-chart .bar { fill: #5b8fe8; transition: opacity .2s; }\n.db-chart .bars.hover .bar { opacity: .45; }\n.db-chart .bars.hover .bar.on { opacity: 1; }\n.db-chart .hit { fill: transparent; cursor: default; }\n.db-tip { position: absolute; pointer-events: none; padding: 7px 10px; border-radius: 8px; background: #111a30; border: 1px solid var(--edge); font: 12px var(--body); color: var(--ink); white-space: nowrap; transform: translate(-50%, -110%); opacity: 0; transition: opacity .15s; }\n.db-tip small { display: block; font: 11px var(--mono); color: var(--ink-3); }\n.db-tip.show { opacity: 1; }\n.db-table { width: 100%; margin-top: 10px; border-collapse: collapse; font: 12px var(--mono); }\n.db-table th, .db-table td { padding: 5px 8px; border-bottom: 1px solid var(--edge); text-align: left; color: var(--ink-2); }\n.db-table td:last-child, .db-table th:last-child { text-align: right; }\n\n@media (max-width: 860px) {\n  .wa-grid, .fm-grid, .db { grid-template-columns: 1fr; }\n}\n`;
  const st = document.createElement('style');
  st.textContent = css;
  document.head.append(st);
  const $ = (s, r = document) => r.querySelector(s);
  const el = (t, c, x) => {
    const e = document.createElement(t);
    if (c) e.className = c;
    if (x != null) e.textContent = x;
    return e;
  };
  const gs = n => 'Gs. ' + Math.round(n).toLocaleString('es-PY');
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const wa = document.getElementById('capWa');
  if (wa) {
    const items = [ [ 'Lomito completo', 35e3 ], [ 'Hamburguesa doble', 3e4 ], [ 'Gaseosa 1,5 L', 12e3 ] ];
    const qty = [ 1, 1, 0 ];
    const list = $('.wa-items', wa), bubble = $('.wa-bubble', wa), link = $('.wa-open', wa);
    items.forEach(([n, p], i) => {
      const li = el('li');
      const name = el('span', null, n);
      const pr = el('small', null, gs(p));
      const q = el('div', 'wa-q');
      const m = el('button', null, '−');
      m.type = 'button';
      m.setAttribute('aria-label', 'Quitar ' + n);
      const c = el('span', null, qty[i]);
      const pl = el('button', null, '+');
      pl.type = 'button';
      pl.setAttribute('aria-label', 'Sumar ' + n);
      m.onclick = () => {
        qty[i] = Math.max(0, qty[i] - 1);
        c.textContent = qty[i];
        render();
      };
      pl.onclick = () => {
        qty[i] = Math.min(9, qty[i] + 1);
        c.textContent = qty[i];
        render();
      };
      q.append(m, c, pl);
      li.append(name, q, pr);
      list.append(li);
    });
    function render() {
      let total = 0, lines = [];
      items.forEach(([n, p], i) => {
        if (qty[i]) {
          lines.push(qty[i] + ' x ' + n + ' - ' + gs(p * qty[i]));
          total += p * qty[i];
        }
      });
      const msg = lines.length ? 'Hola, quiero hacer un pedido:\n' + lines.join('\n') + '\nTotal: ' + gs(total) : 'Todavía no elegiste nada.';
      const now = new Date;
      bubble.replaceChildren(msg, el('em', null, String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0')));
      bubble.style.animation = 'none';
      void bubble.offsetWidth;
      bubble.style.animation = '';
      link.href = 'https://wa.me/?text=' + encodeURIComponent(msg);
      link.toggleAttribute('aria-disabled', !lines.length);
      link.style.pointerEvents = lines.length ? '' : 'none';
      link.style.opacity = lines.length ? '' : '.4';
    }
    render();
  }
  const fm = document.getElementById('capForm');
  if (fm) {
    const form = $('form', fm), mail = $('.fm-inbox', fm);
    let last = 0;
    const rules = {
      fmName: v => v.trim().length >= 2 || 'Escribe tu nombre',
      fmMail: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Correo no válido',
      fmMsg: v => v.trim().length >= 10 || 'Mínimo 10 caracteres'
    };
    form.addEventListener('submit', e => {
      e.preventDefault();
      let ok = true;
      Object.entries(rules).forEach(([id, fn]) => {
        const i = document.getElementById(id), r = fn(i.value), err = i.nextElementSibling;
        err.textContent = r === true ? '' : r;
        i.setAttribute('aria-invalid', r !== true);
        if (r !== true) ok = false;
      });
      if (!ok) return;
      if ($('.fm-hp input', fm).value) return;
      if (Date.now() - last < 8e3) {
        $('.fm-status', fm).textContent = 'Espera unos segundos antes de enviar otra consulta.';
        return;
      }
      last = Date.now();
      const v = id => document.getElementById(id).value.trim();
      const box = el('div', 'fm-mail');
      const h = el('header');
      h.append(el('b', null, 'Nueva consulta desde la web'), el('span', null, 'De: ' + v('fmName') + ' <' + v('fmMail') + '>'), el('span', null, 'Para: ventas@tunegocio.com.py'));
      box.append(h, el('p', null, v('fmMsg')));
      mail.replaceChildren(box);
      $('.fm-status', fm).textContent = 'Enviado. También le llegó una respuesta automática a ' + v('fmMail') + '.';
      form.reset();
    });
  }
  const pw = document.getElementById('capPwa');
  if (pw) {
    const phone = $('.pwa', pw), list = $('.pwa ul', pw), toggle = $('#pwaOff', pw), toast = $('.pwa-toast', pw);
    let n = 3;
    const say = t => {
      toast.textContent = t;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1800);
    };
    toggle.addEventListener('change', async () => {
      phone.classList.toggle('off', toggle.checked);
      $('.pwa-bar span:last-child', pw).textContent = toggle.checked ? 'Sin señal' : '4G';
      if (!toggle.checked) {
        const pend = [ ...list.querySelectorAll('.pend') ];
        if (pend.length) {
          say('Sincronizando ' + pend.length + (pend.length === 1 ? ' cambio' : ' cambios'));
        }
        for (const li of pend) {
          await wait(450);
          li.classList.remove('pend');
          li.querySelector('i').textContent = 'Sincronizado';
        }
      }
    });
    $('.pwa-add', pw).addEventListener('click', () => {
      n++;
      const li = el('li', toggle.checked ? 'pend' : null);
      li.append(el('span', null, 'Pedido #01' + (40 + n)), el('i', null, toggle.checked ? 'Pendiente' : 'Sincronizado'));
      list.prepend(li);
      if (list.children.length > 4) list.lastElementChild.remove();
    });
    $('.pwa-install', pw).addEventListener('click', () => say('Se agregó a la pantalla de inicio'));
  }
  const api = document.getElementById('capApi');
  if (api) {
    const out = $('.api-out', api), withTok = $('[data-a="auth"]', api);
    let token = null;
    const show = (method, path, code, body) => {
      const h = el('header');
      const left = el('span');
      const m = el('span', 'api-m ' + method.toLowerCase(), method);
      left.append(m, path);
      const st = el('b', code < 300 ? 'ok' : 'bad', code + (code === 200 ? ' OK' : code === 201 ? ' Created' : ' Unauthorized'));
      h.append(left, st);
      out.replaceChildren(h, el('pre', null, JSON.stringify(body, null, 2)));
    };
    const b64 = o => btoa(JSON.stringify(o)).replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
    $('[data-a="login"]', api).addEventListener('click', async () => {
      out.replaceChildren(el('pre', null, 'Enviando usuario y contraseña…'));
      await wait(500);
      const exp = Math.floor(Date.now() / 1e3) + 300;
      token = b64({
        alg: 'HS256',
        typ: 'JWT'
      }) + '.' + b64({
        user_id: 17,
        exp: exp
      }) + '.firma-de-ejemplo';
      show('POST', '/api/token/', 200, {
        access: token,
        refresh: 'token-de-renovacion',
        expira_en: '5 minutos'
      });
      withTok.disabled = false;
    });
    $('[data-a="noauth"]', api).addEventListener('click', async () => {
      await wait(250);
      show('GET', '/api/reservas/', 401, {
        detail: 'No se proporcionaron credenciales de autenticación.'
      });
    });
    withTok.addEventListener('click', async () => {
      await wait(350);
      show('GET', '/api/reservas/', 200, [ {
        id: 208,
        restaurante: 'Restaurante Centro',
        personas: 4,
        fecha: '2026-10-03',
        hora: '19:00',
        estado: 'confirmada'
      }, {
        id: 211,
        restaurante: 'Restaurante Costanera',
        personas: 2,
        fecha: '2026-10-05',
        hora: '21:00',
        estado: 'pendiente'
      } ]);
    });
  }
  const db = document.getElementById('capDash');
  if (db) {
    let seed = 7;
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const days = [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ], months = [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ];
    const today = new Date;
    const mk = (n, step, base, amp) => Array.from({
      length: n
    }, (_, i) => {
      const d = new Date(today);
      if (step === 'd') d.setDate(d.getDate() - (n - 1 - i)); else d.setMonth(d.getMonth() - (n - 1 - i));
      const weekend = step === 'd' && (d.getDay() === 5 || d.getDay() === 6);
      const v = Math.round((base + rnd() * amp) * (weekend ? 1.45 : 1) / 1e3) * 1e3;
      return {
        label: step === 'd' ? n <= 7 ? days[d.getDay()] : d.getDate() + '/' + (d.getMonth() + 1) : months[d.getMonth()],
        full: step === 'd' ? days[d.getDay()] + ' ' + d.getDate() + '/' + (d.getMonth() + 1) : months[d.getMonth()] + ' ' + d.getFullYear(),
        v: v
      };
    });
    const sets = {
      7: mk(7, 'd', 26e5, 14e5),
      30: mk(30, 'd', 24e5, 16e5),
      12: mk(12, 'm', 72e6, 3e7)
    };
    const svg = $('svg', db), tip = $('.db-tip', db), tbody = $('.db-table tbody', db);
    const NS = 'http://www.w3.org/2000/svg';
    const mkS = (t, a) => {
      const e = document.createElementNS(NS, t);
      Object.entries(a).forEach(([k, v]) => e.setAttribute(k, v));
      return e;
    };
    const short = v => v >= 1e6 ? (v / 1e6).toLocaleString('es-PY', {
      maximumFractionDigits: 1
    }) + ' M' : Math.round(v / 1e3) + ' mil';
    function draw(key) {
      const data = sets[key];
      const W = svg.clientWidth || 600, H = 230, L = 48, B = 22, T = 8;
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      svg.replaceChildren();
      const max = Math.max(...data.map(d => d.v)) * 1.1;
      const niceStep = Math.pow(10, Math.floor(Math.log10(max / 4)));
      const step = [ 1, 2, 2.5, 5, 10 ].map(m => m * niceStep).find(s => max / s <= 5);
      const top = Math.ceil(max / step) * step;
      const y = v => T + (H - B - T) * (1 - v / top);
      const grid = mkS('g', {
        class: 'grid'
      }), axis = mkS('g', {
        class: 'axis'
      });
      for (let v = 0; v <= top; v += step) {
        grid.append(mkS('line', {
          x1: L,
          x2: W,
          y1: y(v),
          y2: y(v)
        }));
        const t = mkS('text', {
          x: L - 8,
          y: y(v) + 3.5,
          'text-anchor': 'end'
        });
        t.textContent = short(v);
        axis.append(t);
      }
      const bw = (W - L) / data.length, gap = Math.max(2, bw * .28), w = bw - gap;
      const bars = mkS('g', {
        class: 'bars'
      });
      data.forEach((d, i) => {
        const x = L + i * bw + gap / 2, h = H - B - y(d.v), r = Math.min(4, w / 2);
        const path = mkS('path', {
          class: 'bar',
          d: 'M' + x + ',' + (H - B) + 'v' + -(h - r) + 'q0,' + -r + ' ' + r + ',' + -r + 'h' + (w - 2 * r) + 'q' + r + ',0 ' + r + ',' + r + 'v' + (h - r) + 'z'
        });
        const hit = mkS('rect', {
          class: 'hit',
          x: L + i * bw,
          y: T,
          width: bw,
          height: H - B - T
        });
        hit.addEventListener('pointerenter', () => {
          bars.classList.add('hover');
          path.classList.add('on');
          tip.replaceChildren(el('small', null, d.full), gs(d.v));
          tip.style.left = (x + w / 2) / W * 100 + '%';
          tip.style.top = y(d.v) + 'px';
          tip.classList.add('show');
        });
        hit.addEventListener('pointerleave', () => {
          bars.classList.remove('hover');
          path.classList.remove('on');
          tip.classList.remove('show');
        });
        bars.append(path, hit);
        const every = data.length > 12 ? 5 : 1;
        if (i % every === 0 || i === data.length - 1) {
          const t = mkS('text', {
            x: x + w / 2,
            y: H - 6,
            'text-anchor': 'middle'
          });
          t.textContent = d.label;
          axis.append(t);
        }
      });
      svg.append(grid, bars, axis);
      const sum = data.reduce((a, d) => a + d.v, 0), orders = Math.round(sum / 84e3);
      $('[data-k="ventas"]', db).textContent = gs(sum);
      $('[data-k="pedidos"]', db).textContent = orders.toLocaleString('es-PY');
      $('[data-k="ticket"]', db).textContent = gs(sum / orders);
      tbody.replaceChildren(...data.map(d => {
        const tr = el('tr');
        tr.append(el('td', null, d.full), el('td', null, gs(d.v)));
        return tr;
      }));
      $('.db-top h4', db).textContent = 'Ventas por ' + (key === '12' ? 'mes, últimos 12 meses' : 'día, últimos ' + key + ' días');
    }
    let current = '7';
    db.querySelectorAll('.db-chips button').forEach(b => b.addEventListener('click', () => {
      db.querySelectorAll('.db-chips button').forEach(x => x.setAttribute('aria-pressed', x === b));
      current = b.dataset.r;
      draw(current);
    }));
    const tbl = $('.db-table', db), tBtn = $('.db-tablebtn', db);
    tBtn.addEventListener('click', () => {
      tbl.hidden = !tbl.hidden;
      tBtn.textContent = tbl.hidden ? 'Ver como tabla' : 'Ocultar tabla';
      tBtn.setAttribute('aria-expanded', !tbl.hidden);
    });
    draw(current);
    requestAnimationFrame(() => draw(current));
    addEventListener('resize', () => draw(current));
  }
})();
