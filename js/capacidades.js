(function() {
  const css = `\n\n.cap-wide { grid-column: span 6; display: grid; grid-template-columns: .85fr 1.15fr; gap: 28px; padding: 26px; align-items: center; }\n.cap-wide.rev { grid-template-columns: 1.15fr .85fr; }\n.cap-wide.rev .cap-txt { order: 2; }\n.cap-txt { display: flex; flex-direction: column; gap: 12px; }\n.cap-txt ul { list-style: none; display: grid; gap: 8px; margin-top: 4px; }\n.cap-txt li { display: flex; gap: 10px; font-size: 14px; color: var(--ink-2); }\n.cap-txt li::before { content: ""; width: 6px; height: 6px; margin-top: 8px; border-radius: 50%; background: var(--accent); flex: none; }\n.cap-note { font: 12px/1.5 var(--mono); color: var(--ink-3); border-left: 2px solid var(--edge); padding-left: 10px; }\n\n.win { border-radius: 14px; border: 1px solid var(--edge); background: rgba(5,10,22,.7); overflow: hidden; box-shadow: 0 30px 60px -30px #000; }\n.win-bar { display: flex; align-items: center; gap: 6px; padding: 10px 12px; border-bottom: 1px solid var(--edge); }\n.win-bar i { width: 9px; height: 9px; border-radius: 50%; background: var(--edge); }\n.win-bar span { margin-left: 10px; flex: 1; padding: 5px 10px; border-radius: 6px; background: var(--glass-strong); font: 11.5px var(--mono); color: var(--ink-3); }\n.win-body { position: relative; min-height: 330px; padding: 22px; display: grid; place-items: center; }\n.win-body > section { width: 100%; max-width: 360px; animation: capIn .45s cubic-bezier(.2,.8,.2,1); }\n.win-body > section[hidden] { display: none; }\n@keyframes capIn { from { opacity: 0; transform: translateY(10px); } }\n\n.cg-login h4 { font: 600 20px var(--body); color: var(--ink); }\n.cg-login > p { font-size: 13.5px; color: var(--ink-3); margin: 4px 0 18px; }\n.cg-gbtn { width: 100%; display: flex; align-items: center; justify-content: center; gap: 12px; height: 46px; border-radius: 999px; border: 1px solid #dadce0; background: #fff; color: #1f1f1f; font: 500 14.5px 'Roboto', var(--body); cursor: pointer; transition: box-shadow .2s, background .2s; }\n.cg-gbtn:hover { background: #f8f9fa; box-shadow: 0 1px 3px rgba(0,0,0,.3); }\n.cg-or { display: flex; align-items: center; gap: 10px; margin: 16px 0; font: 11.5px var(--mono); color: var(--ink-3); }\n.cg-or::before, .cg-or::after { content: ""; flex: 1; height: 1px; background: var(--edge); }\n.cg-fake { width: 100%; padding: 12px 14px; border-radius: 10px; border: 1px solid var(--edge); background: var(--glass); color: var(--ink-3); font: 14px var(--body); }\n\n.cg-steps h4 { font: 600 16px var(--body); color: var(--ink); margin-bottom: 14px; }\n.cg-steps ol { list-style: none; display: grid; gap: 10px; }\n.cg-steps li { display: grid; grid-template-columns: 28px 1fr; gap: 12px; align-items: center; padding: 12px; border-radius: 12px; border: 1px solid var(--edge); opacity: .35; transition: opacity .3s, border-color .3s; }\n.cg-steps li.on { opacity: 1; border-color: var(--accent); }\n.cg-steps li.done { opacity: 1; }\n.cg-steps li i { width: 28px; height: 28px; border-radius: 50%; border: 2px solid var(--edge); display: grid; place-items: center; color: transparent; transition: background .3s, border-color .3s, color .3s; }\n.cg-steps li.on i { border-color: var(--accent); border-right-color: transparent; animation: capSpin .8s linear infinite; }\n.cg-steps li.done i { background: var(--mark-live); border-color: var(--mark-live); color: #04210f; animation: none; }\n.cg-steps li b { display: block; font: 500 14px var(--body); color: var(--ink); }\n.cg-steps li small { font: 12px var(--mono); color: var(--ink-3); }\n@keyframes capSpin { to { transform: rotate(360deg); } }\n\n.cg-user { display: flex; align-items: center; gap: 14px; }\n.cg-av { width: 52px; height: 52px; border-radius: 50%; display: grid; place-items: center; background: linear-gradient(135deg, #7fb2ff, #4f7fe0); color: #06101f; font: 700 18px var(--body); flex: none; }\n.cg-user b { display: block; font: 600 16px var(--body); color: var(--ink); }\n.cg-user span { font-size: 13px; color: var(--ink-3); }\n.cg-ok { display: inline-flex; align-items: center; gap: 6px; margin-top: 6px; padding: 3px 8px; border-radius: 999px; background: rgba(127,224,168,.12); color: var(--mark-live); font: 500 11px var(--mono); }\n.cg-tiles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin: 18px 0 14px; }\n.cg-tile { padding: 12px 10px; border-radius: 12px; border: 1px solid var(--edge); background: var(--glass); text-align: left; cursor: pointer; transition: border-color .2s, transform .2s; font: inherit; color: inherit; }\n.cg-tile:hover { transform: translateY(-2px); border-color: var(--accent); }\n.cg-tile[aria-pressed="true"] { border-color: var(--accent); background: var(--glass-strong); }\n.cg-tile svg { color: var(--accent); }\n.cg-tile b { display: block; margin-top: 8px; font: 600 13px var(--body); color: var(--ink); }\n.cg-tile small { font-size: 11.5px; color: var(--ink-3); }\n.cg-result { min-height: 44px; padding: 12px; border-radius: 10px; background: rgba(127,178,255,.08); border: 1px dashed rgba(127,178,255,.35); font-size: 13px; color: var(--ink-2); }\n.cg-result b { color: var(--ink); font-weight: 600; }\n.cg-actions { display: flex; justify-content: space-between; align-items: center; margin-top: 14px; }\n.cg-link { border: 0; background: none; color: var(--accent); font: 500 12.5px var(--mono); cursor: pointer; padding: 0; }\n.cg-token { margin-top: 12px; padding: 12px; border-radius: 10px; background: #050a16; border: 1px solid var(--edge); font: 11.5px/1.6 var(--mono); color: var(--ink-2); white-space: pre; overflow: auto; }\n.cg-token .k { color: var(--accent); } .cg-token .s { color: var(--mark-live); }\n\n.cp { display: grid; grid-template-columns: 290px 1fr; gap: 22px; align-items: start; }\n.cp-stage { perspective: 900px; }\n.cp-card { position: relative; width: 290px; height: 182px; transform-style: preserve-3d; transition: transform .7s cubic-bezier(.3,1.2,.5,1); }\n.cp-card.flip { transform: rotateY(180deg); }\n.cp-face { position: absolute; inset: 0; border-radius: 16px; padding: 20px; backface-visibility: hidden; color: #f2f5ff; overflow: hidden; background: var(--cp-bg, linear-gradient(135deg, #26314f, #111728)); box-shadow: 0 30px 50px -25px #000, inset 0 0 0 1px rgba(255,255,255,.12); transition: background .5s; }\n.cp-face::after { content: ""; position: absolute; inset: 0; background: radial-gradient(120% 90% at 100% 0%, rgba(255,255,255,.18), transparent 50%); pointer-events: none; }\n.cp-back { transform: rotateY(180deg); padding: 0; }\n.cp-top { display: flex; justify-content: space-between; align-items: flex-start; }\n.cp-chip { width: 42px; height: 32px; border-radius: 6px; background: linear-gradient(135deg, #f0d9a0, #b8964f); position: relative; }\n.cp-chip::before { content: ""; position: absolute; inset: 7px 0; border-block: 1px solid rgba(80,60,20,.4); }\n.cp-brand { font: 800 16px/1 var(--body); letter-spacing: .04em; text-align: right; min-height: 22px; transition: opacity .3s; }\n.cp-brand.visa { font-style: italic; font-size: 22px; letter-spacing: 0; }\n.cp-num { margin-top: 30px; font: 500 18px var(--mono); letter-spacing: .08em; white-space: nowrap; }\n.cp-num span { display: inline-block; transition: transform .25s; }\n.cp-num span.new { animation: capDigit .3s cubic-bezier(.3,1.5,.5,1); }\n@keyframes capDigit { from { transform: translateY(-8px); opacity: 0; } }\n.cp-foot { display: flex; justify-content: space-between; margin-top: 18px; font: 11px var(--mono); text-transform: uppercase; }\n.cp-foot small { display: block; font-size: 9px; opacity: .6; margin-bottom: 2px; }\n.cp-foot b { font-weight: 500; font-size: 13px; }\n.cp-stripe { height: 40px; margin-top: 22px; background: #07090f; }\n.cp-cvv { margin: 18px 20px 0; display: flex; align-items: center; gap: 10px; }\n.cp-cvv span { flex: 1; height: 34px; border-radius: 4px; background: repeating-linear-gradient(90deg, #e9e4d8 0 8px, #d9d3c4 8px 16px); }\n.cp-cvv b { width: 56px; height: 34px; border-radius: 4px; background: #fff; color: #111; display: grid; place-items: center; font: 600 15px var(--mono); }\n.cp-backnote { margin: 14px 20px 0; font-size: 9.5px; opacity: .6; }\n.cp-tests { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; }\n.cp-tests button { padding: 7px 10px; border-radius: 8px; border: 1px solid var(--edge); background: var(--glass); color: var(--ink-2); font: 500 12px var(--body); cursor: pointer; }\n.cp-tests button:hover { border-color: var(--accent); color: var(--ink); }\n.cp-form { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 12px; }\n.cp-f { display: flex; flex-direction: column; gap: 5px; }\n.cp-f.full { grid-column: 1 / -1; }\n.cp-f label { font: 500 11.5px var(--mono); color: var(--ink-3); text-transform: uppercase; letter-spacing: .06em; }\n.cp-f input, .cp-f select { width: 100%; padding: 11px 12px; border-radius: 10px; border: 1.5px solid var(--edge); background: var(--glass); color: var(--ink); font: 15px var(--body); outline: none; transition: border-color .2s; }\n.cp-f select option { color: #111; }\n.cp-f input:focus, .cp-f select:focus { border-color: var(--accent); }\n.cp-f[data-bad] input { border-color: #ff6b6b; }\n.cp-f .err { min-height: 15px; font-size: 11.5px; color: #ff8a8a; }\n.cp-num-wrap { position: relative; }\n.cp-num-wrap em { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); font: 700 11px var(--body); font-style: normal; color: var(--accent); letter-spacing: .04em; }\n.cp-pay { grid-column: 1 / -1; position: relative; height: 50px; border: 0; border-radius: 12px; background: var(--accent); color: var(--accent-ink); font: 600 15px var(--body); cursor: pointer; transition: background .3s, transform .15s; }\n.cp-pay:active { transform: scale(.98); }\n.cp-pay[data-state="loading"] { color: transparent; pointer-events: none; }\n.cp-pay[data-state="loading"]::after { content: ""; position: absolute; left: 50%; top: 50%; width: 20px; height: 20px; margin: -10px; border-radius: 50%; border: 3px solid var(--accent-ink); border-right-color: transparent; animation: capSpin .7s linear infinite; }\n.cp-msg { grid-column: 1 / -1; min-height: 20px; font-size: 13px; }\n.cp-msg.ok { color: var(--mark-live); } .cp-msg.bad { color: #ff8a8a; }\n.cp-receipt { grid-column: 1 / -1; padding: 16px; border-radius: 12px; border: 1px solid rgba(127,224,168,.4); background: rgba(127,224,168,.07); animation: capIn .4s; }\n.cp-receipt b { display: block; font: 600 16px var(--body); color: var(--ink); }\n.cp-receipt dl { display: grid; grid-template-columns: auto 1fr; gap: 4px 14px; margin-top: 10px; font-size: 13px; }\n.cp-receipt dt { color: var(--ink-3); } .cp-receipt dd { color: var(--ink); text-align: right; font-family: var(--mono); }\n\n@media (max-width: 980px) {\n  .cap-wide, .cap-wide.rev { grid-template-columns: 1fr; }\n  .cap-wide.rev .cap-txt { order: 0; }\n  .cp { grid-template-columns: 1fr; justify-items: center; }\n  .cp-form { width: 100%; }\n}\n@media (max-width: 420px) { .cp-card { width: 260px; height: 164px; } .cp-num { font-size: 16px; margin-top: 22px; } .cg-tiles { grid-template-columns: 1fr; } }\n@media (prefers-reduced-motion: reduce) { .cp-card, .win-body > section { transition: none; animation: none; } }\n`;
  const st = document.createElement('style');
  st.textContent = css;
  document.head.append(st);
  const $ = (sel, r = document) => r.querySelector(sel);
  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const check = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>';
  const g = document.getElementById('capGoogle');
  if (g) {
    const body = $('.win-body', g);
    const login = $('.cg-login', g), steps = $('.cg-steps', g), user = $('.cg-session', g);
    const show = s => [ login, steps, user ].forEach(x => x.hidden = x !== s);
    $('.cg-gbtn', g).addEventListener('click', async () => {
      show(steps);
      const items = [ ...steps.querySelectorAll('li') ];
      items.forEach(li => {
        li.className = '';
        li.querySelector('i').innerHTML = '';
      });
      for (const li of items) {
        li.className = 'on';
        await wait(750);
        li.className = 'done';
        li.querySelector('i').innerHTML = check;
      }
      await wait(300);
      show(user);
      $('.cg-tile', user).focus();
    });
    const results = {
      cal: [ 'Turno agendado', 'viernes a las 14:00 en el calendario de la clínica. Te llegó la invitación por correo.' ],
      map: [ 'Sucursal más cercana', 'a 2,3 km, unos 8 minutos en auto. Se muestra en un mapa con la ruta.' ],
      sheet: [ 'Pedido guardado', 'en la fila 58 de la planilla de pedidos. El dueño lo ve al instante en su celular.' ]
    };
    const res = $('.cg-result', user);
    user.querySelectorAll('.cg-tile').forEach(t => t.addEventListener('click', () => {
      user.querySelectorAll('.cg-tile').forEach(x => x.setAttribute('aria-pressed', x === t));
      const [a, b] = results[t.dataset.k];
      const bb = el('b', null, a + ': ');
      res.replaceChildren(bb, b);
    }));
    const tok = $('.cg-token', user), tBtn = $('.cg-link[data-act="token"]', user);
    tBtn.addEventListener('click', () => {
      tok.hidden = !tok.hidden;
      tBtn.textContent = tok.hidden ? 'Ver datos del token' : 'Ocultar token';
      tBtn.setAttribute('aria-expanded', !tok.hidden);
    });
    $('.cg-link[data-act="out"]', user).addEventListener('click', () => {
      tok.hidden = true;
      tBtn.textContent = 'Ver datos del token';
      user.querySelectorAll('.cg-tile').forEach(x => x.setAttribute('aria-pressed', 'false'));
      res.textContent = 'Elige una acción para ver qué pasa con la cuenta conectada.';
      show(login);
      $('.cg-gbtn', g).focus();
    });
  }
  const p = document.getElementById('capPay');
  if (p) {
    const card = $('.cp-card', p), numEl = $('.cp-num', p), brandEl = $('.cp-brand', p);
    const nameOut = $('.cp-name', p), expOut = $('.cp-exp', p), cvvOut = $('.cp-cvv b', p);
    const fNum = $('#cpNum', p), fName = $('#cpName', p), fExp = $('#cpExp', p), fCvv = $('#cpCvv', p), fQ = $('#cpQuotas', p);
    const pay = $('.cp-pay', p), msg = $('.cp-msg', p), badge = $('.cp-num-wrap em', p);
    const total = 89e4;
    const gs = n => 'Gs. ' + Math.round(n).toLocaleString('es-PY');
    const brands = {
      visa: {
        n: 'VISA',
        bg: 'linear-gradient(135deg, #1f3c8f, #0e1d4a)',
        len: 16,
        cvv: 3
      },
      mc: {
        n: 'Mastercard',
        bg: 'linear-gradient(135deg, #2b2b33, #121217)',
        len: 16,
        cvv: 3
      },
      amex: {
        n: 'AMERICAN EXPRESS',
        bg: 'linear-gradient(135deg, #1d6f7a, #0b3a40)',
        len: 15,
        cvv: 4
      },
      none: {
        n: '',
        bg: '',
        len: 16,
        cvv: 3
      }
    };
    const detect = d => /^4/.test(d) ? 'visa' : /^(5[1-5]|2(2[2-9]|[3-6]\d|7[01]|720))/.test(d) ? 'mc' : /^3[47]/.test(d) ? 'amex' : 'none';
    const luhn = d => {
      let s = 0;
      [ ...d ].reverse().forEach((c, i) => {
        let n = +c;
        if (i % 2) {
          n *= 2;
          if (n > 9) n -= 9;
        }
        s += n;
      });
      return d.length > 11 && s % 10 === 0;
    };
    let brand = 'none', lastShown = '';
    function paintNumber(d) {
      const b = brands[brand];
      const groups = brand === 'amex' ? [ 4, 6, 5 ] : [ 4, 4, 4, 4 ];
      let i = 0;
      const frag = [];
      groups.forEach((len, gi) => {
        let s = '';
        for (let k = 0; k < len; k++) s += d[i + k] || '•';
        i += len;
        frag.push(s);
      });
      const text = frag.join(' ');
      numEl.replaceChildren(...[ ...text ].map((ch, k) => {
        const s = el('span', ch !== lastShown[k] && ch !== '•' ? 'new' : null, ch);
        return s;
      }));
      lastShown = text;
    }
    function setBrand(b) {
      if (b === brand) return;
      brand = b;
      brandEl.textContent = brands[b].n;
      brandEl.className = 'cp-brand ' + b;
      card.style.setProperty('--cp-bg', brands[b].bg || 'linear-gradient(135deg, #26314f, #111728)');
      $('.cp-back', p).style.setProperty('--cp-bg', brands[b].bg || 'linear-gradient(135deg, #26314f, #111728)');
      badge.textContent = brands[b].n ? brands[b].n.split(' ')[0] : '';
      fNum.maxLength = b === 'amex' ? 17 : 19;
      fCvv.maxLength = brands[b].cvv;
    }
    function fmt(d) {
      return brand === 'amex' ? [ d.slice(0, 4), d.slice(4, 10), d.slice(10, 15) ].filter(Boolean).join(' ') : d.replace(/(\d{4})(?=\d)/g, '$1 ');
    }
    fNum.addEventListener('input', () => {
      const d = fNum.value.replace(/\D/g, '').slice(0, 16);
      setBrand(detect(d));
      const cut = d.slice(0, brands[brand].len);
      fNum.value = fmt(cut);
      paintNumber(cut);
      clearErr(fNum);
    });
    fName.addEventListener('input', () => {
      fName.value = fName.value.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ' ]/g, '');
      nameOut.textContent = fName.value.trim().toUpperCase() || 'NOMBRE APELLIDO';
      clearErr(fName);
    });
    fExp.addEventListener('input', () => {
      let d = fExp.value.replace(/\D/g, '').slice(0, 4);
      if (d.length >= 3) d = d.slice(0, 2) + '/' + d.slice(2);
      fExp.value = d;
      expOut.textContent = d || 'MM/AA';
      clearErr(fExp);
    });
    fCvv.addEventListener('input', () => {
      fCvv.value = fCvv.value.replace(/\D/g, '');
      cvvOut.textContent = '•'.repeat(fCvv.value.length) || '•••';
      clearErr(fCvv);
    });
    fCvv.addEventListener('focus', () => card.classList.add('flip'));
    fCvv.addEventListener('blur', () => card.classList.remove('flip'));
    function updateQuotas() {
      [ ...fQ.options ].forEach(o => {
        const n = +o.value;
        o.textContent = n === 1 ? 'Un pago de ' + gs(total) : n + ' cuotas de ' + gs(total / n);
      });
      pay.textContent = 'Pagar ' + gs(total);
    }
    updateQuotas();
    function setErr(input, text) {
      const f = input.closest('.cp-f');
      f.setAttribute('data-bad', '');
      f.querySelector('.err').textContent = text;
      input.setAttribute('aria-invalid', 'true');
    }
    function clearErr(input) {
      const f = input.closest('.cp-f');
      f.removeAttribute('data-bad');
      f.querySelector('.err').textContent = '';
      input.removeAttribute('aria-invalid');
      msg.textContent = '';
      msg.className = 'cp-msg';
    }
    function validate() {
      let ok = true;
      const d = fNum.value.replace(/\D/g, '');
      if (d.length < brands[brand].len || !luhn(d)) {
        setErr(fNum, d.length < 12 ? 'Número incompleto' : 'El número no es válido');
        ok = false;
      }
      if (fName.value.trim().split(/\s+/).length < 2) {
        setErr(fName, 'Nombre y apellido como figura en la tarjeta');
        ok = false;
      }
      const m = fExp.value.match(/^(\d{2})\/(\d{2})$/);
      const now = new Date, mm = m ? +m[1] : 0, yy = m ? 2e3 + +m[2] : 0;
      if (!m || mm < 1 || mm > 12 || yy < now.getFullYear() || yy === now.getFullYear() && mm < now.getMonth() + 1) {
        setErr(fExp, 'Fecha inválida o vencida');
        ok = false;
      }
      if (fCvv.value.length !== brands[brand].cvv) {
        setErr(fCvv, brands[brand].cvv + ' dígitos');
        ok = false;
      }
      return ok;
    }
    const form = $('.cp-form', p);
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!validate()) {
        const bad = form.querySelector('[data-bad] input');
        if (bad) bad.focus();
        return;
      }
      pay.dataset.state = 'loading';
      msg.className = 'cp-msg';
      msg.textContent = 'Procesando pago de prueba…';
      await wait(1600);
      pay.dataset.state = '';
      const d = fNum.value.replace(/\D/g, '');
      if (d === '4000000000000002') {
        msg.className = 'cp-msg bad';
        msg.textContent = 'Pago rechazado por el banco emisor (tarjeta de prueba de rechazo). No se cobró nada.';
        return;
      }
      const q = +fQ.value;
      const rec = el('div', 'cp-receipt');
      rec.setAttribute('role', 'status');
      rec.tabIndex = -1;
      rec.append(el('b', null, 'Pago aprobado en modo prueba'));
      const dl = el('dl');
      [ [ 'Monto', gs(total) ], [ 'Plan', q === 1 ? 'Un pago' : q + ' cuotas de ' + gs(total / q) ], [ 'Tarjeta', brands[brand].n + ' terminada en ' + d.slice(-4) ], [ 'Autorización', String(1e5 + Math.floor(Math.random() * 899999)) ] ].forEach(([a, b]) => dl.append(el('dt', null, a), el('dd', null, b)));
      rec.append(dl);
      const again = el('button', 'cg-link', 'Hacer otro pago');
      again.type = 'button';
      again.style.marginTop = '10px';
      again.addEventListener('click', () => {
        rec.remove();
        form.reset();
        lastShown = '';
        setBrand('none');
        paintNumber('');
        nameOut.textContent = 'NOMBRE APELLIDO';
        expOut.textContent = 'MM/AA';
        cvvOut.textContent = '•••';
        [ ...form.children ].forEach(c => c.hidden = false);
        updateQuotas();
        fNum.focus();
      });
      rec.append(again);
      [ ...form.children ].forEach(c => c.hidden = true);
      form.append(rec);
      rec.focus();
      msg.textContent = '';
    });
    const fill = (num, name, exp, cvv) => {
      fNum.value = num;
      fNum.dispatchEvent(new Event('input'));
      fName.value = name;
      fName.dispatchEvent(new Event('input'));
      fExp.value = exp;
      fExp.dispatchEvent(new Event('input'));
      fCvv.value = cvv;
      fCvv.dispatchEvent(new Event('input'));
    };
    const yy = String(((new Date).getFullYear() + 3) % 100).padStart(2, '0');
    p.querySelectorAll('.cp-tests button').forEach(b => b.addEventListener('click', () => {
      const t = b.dataset.t;
      if (t === 'visa') fill('4242424242424242', 'María González', '12' + yy, '123');
      if (t === 'mc') fill('5555555555554444', 'Carlos Benítez', '08' + yy, '321');
      if (t === 'amex') fill('378282246310005', 'Ana Villalba', '05' + yy, '1234');
      if (t === 'bad') fill('4000000000000002', 'Pedro Ramírez', '10' + yy, '999');
    }));
    paintNumber('');
  }
})();
