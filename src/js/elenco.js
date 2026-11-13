// /en/claims/all/: la matrice in testa porta all'unita' (clic su una colonna)
// e filtra per concetto (clic su un'etichetta); i pulsanti filtrano per tipo
// di garanzia; in ogni unita' il contesto e i tagli si aprono a richiesta.
(() => {
  const reg = document.getElementById('al-reg');
  if (!reg) return;
  reg.classList.add('al-js');
  const units = [...reg.querySelectorAll('.u')];
  const now = document.getElementById('al-now');
  const fnB = [...document.querySelectorAll('.al-fn button')];
  const mx = document.querySelector('.al-mxd');
  let fn = '', concept = '', conceptName = '';

  function apply() {
    units.forEach(u => {
      const ok = (!fn || u.dataset.fn === fn) && (!concept || u.dataset.concepts.split(' ').includes(concept));
      u.hidden = !ok;
    });
    // nasconde Argomenti e Temi rimasti vuoti
    reg.querySelectorAll('.rg-to').forEach(h => {
      let e = h.nextElementSibling, any = false;
      while (e && e.classList.contains('u')) { if (!e.hidden) any = true; e = e.nextElementSibling; }
      h.hidden = !any;
    });
    reg.querySelectorAll('.rg-th').forEach(s => { s.hidden = !s.querySelector('.u:not([hidden])'); });
    fnB.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.fn === fn)));
    if (mx) mx.querySelectorAll('[data-concept]').forEach(a => a.classList.toggle('on', a.dataset.concept === concept));
    const n = units.filter(u => !u.hidden).length;
    if (fn || concept) {
      now.hidden = false;
      now.querySelector('span').textContent = `${n} claim${n === 1 ? '' : 's'}${concept ? ' on ' + conceptName : ''}${fn ? ' · ' + fnB.find(b => b.dataset.fn === fn).textContent.replace(/\s*\d+\s*$/, '').trim() : ''}`;
    } else now.hidden = true;
  }
  fnB.forEach(b => b.addEventListener('click', () => { fn = b.dataset.fn; apply(); }));
  document.getElementById('al-clear').addEventListener('click', () => { fn = ''; concept = ''; apply(); });

  function go(id) {
    const u = document.getElementById(id);
    if (!u) return;
    if (u.hidden) { fn = ''; concept = ''; apply(); }
    history.replaceState(null, '', '#' + id);
    u.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    u.querySelector('.u-n').focus({ preventScroll: true });
  }
  if (mx) mx.addEventListener('click', e => {
    const col = e.target.closest('.mx-col,.cc-claim');
    if (col && col.dataset.id) { e.preventDefault(); go(col.dataset.id); return; }
    const k = e.target.closest('[data-concept]');
    if (k) {
      e.preventDefault();
      concept = concept === k.dataset.concept ? '' : k.dataset.concept;
      conceptName = k.textContent.trim();
      apply();
      document.getElementById('al-bar').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  document.querySelectorAll('.al-sr').forEach(a => a.addEventListener('click', e => { e.preventDefault(); go(a.getAttribute('href').slice(1)); }));
  reg.addEventListener('click', e => {
    const b = e.target.closest('.u-pass,.u-cuts');
    if (!b) return;
    const u = b.closest('.u'), c = b.classList.contains('u-pass') ? 'ctx-on' : 'cuts-on';
    b.setAttribute('aria-pressed', String(u.classList.toggle(c)));
  });
  reg.querySelectorAll('.u-act button').forEach(b => b.setAttribute('aria-pressed', 'false'));
})();
