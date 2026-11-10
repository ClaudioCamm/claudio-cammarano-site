// Il carotaggio di /en/claims/: passando su una colonna (o toccandola) si
// accende un claim, le sue relazioni e il pannello di lettura. Col mouse il
// clic apre la pagina del claim; col dito il primo tocco legge, il secondo apre.
// Dati in #cc-dati (src/_data/claimPages.js, campo reader).
(() => {
  const svg = document.querySelector('.cc-main');
  const rd = document.getElementById('cc-read');
  const box = document.getElementById('cc-dati');
  if (!svg || !rd || !box) return;
  const D = JSON.parse(box.textContent);
  const hint = rd.innerHTML;
  const q = s => svg.querySelectorAll(s);
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  let sel = -1, touch = false;

  function show(i) {
    sel = i;
    const c = D[i];
    svg.classList.add('cc-reading');
    q('.cc-sel,.cc-nb').forEach(e => e.classList.remove('cc-sel', 'cc-nb'));
    q(`[data-i="${i}"]`).forEach(e => e.classList.add('cc-sel'));
    q('.cc-arc').forEach(a => {
      if (+a.dataset.a === i || +a.dataset.b === i) {
        a.classList.add('cc-sel');
        const o = +a.dataset.a === i ? a.dataset.b : a.dataset.a;
        q(`.cc-claim[data-i="${o}"]`).forEach(e => e.classList.add('cc-nb'));
      }
    });
    const g = c.geo;
    let eq = `${g.base} ${g.tier}`;
    if (g.uses) eq += ` + ${g.uses} × 0.25`;
    if (g.contested) eq += ' × 1.5 contested';
    const rel = c.out.map(([h, n]) => `<li><span class="how">${h} →</span> ${n}</li>`).join('') +
      c.in.map(([h, n]) => `<li>${n} <span class="how">${h} →</span> this claim</li>`).join('');
    rd.innerHTML = `<p class="cp-k">${c.n} · ${esc(c.concepts)} · ${esc(c.cite)}</p>
<h3><a href="${c.url}">${esc(c.lead)}</a></h3>
<div class="cr-g"><dl><dt>1 Free tag</dt><dd>${esc(c.names)}</dd><dt>2 Topic</dt><dd>${esc(c.topic)}</dd><dt>3 Theme</dt><dd>${esc(c.theme)}</dd><dt>4 Concept</dt><dd>${esc(c.concepts)}</dd><dt>5 Geometry</dt><dd class="mono">${c.w} = ${eq}</dd></dl>
<div>${rel ? `<ul>${rel}</ul>` : '<p class="cr-hint">No declared relations yet.</p>'}<a class="go" href="${c.url}">Open ${c.n} &#8594;</a></div></div>`;
  }
  function reset() {
    sel = -1;
    svg.classList.remove('cc-reading');
    q('.cc-sel,.cc-nb').forEach(e => e.classList.remove('cc-sel', 'cc-nb'));
    rd.innerHTML = hint;
  }
  q('.cc-claim').forEach(a => {
    const i = +a.dataset.i;
    a.addEventListener('mouseenter', () => { if (!touch) show(i); });
    a.addEventListener('focus', () => show(i));
    a.addEventListener('click', e => {
      if (touch && sel !== i) { e.preventDefault(); show(i); }
    });
  });
  svg.addEventListener('pointerdown', e => { touch = e.pointerType !== 'mouse'; });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') reset(); });
})();
