// Tavola II inglese: la geometria dei claim. Dati in #geo-dati (src/_data/geometria.js).
(()=>{
const D=JSON.parse(document.getElementById('geo-dati').textContent);const NS='http://www.w3.org/2000/svg',sv=document.getElementById('geo-sv'),rd=document.getElementById('geo-rd'),gw=document.getElementById('geo');
const V=matchMedia('(max-width:600px)').matches;sv.setAttribute('viewBox',V?'0 0 360 560':'0 0 900 330');
const el=(t,a,p=sv)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);p.appendChild(e);return e};
const GR='var(--color-lab-text)',BO='var(--geo-bo)';
const glyph=(g,s,col,ring)=>{let h='';if(ring)h+=`<circle cx=8 cy=8 r=7.3 fill=none stroke="${BO}" stroke-width=1.3 />`;h+=`<g ${ring?'transform="translate(8,8) scale(.66) translate(-8,-8)"':''}>`;
 if(s=='point')h+=`<circle cx=8 cy=8 r=3.4 fill="${col}"/>`;else if(s=='therefore')h+=[[8,3.9],[4.3,11.6],[11.7,11.6]].map(([a,b])=>`<circle cx=${a} cy=${b} r=1.75 fill="${col}"/>`).join('');
 else if(s=='exists')h+=`<path d="M11.1 2.9v10.2M5 2.9h6.1M5 8h6.1M5 13.1h6.1" stroke="${col}" stroke-width=1.6 fill=none />`;else h+=`<path d="M8 2.6v6.9" stroke="${col}" stroke-width=1.6 /><circle cx=8 cy=12.7 r=1.5 fill="${col}"/>`;g.innerHTML+=h+'</g>'};
const marks=[];const lanes=[['literature','From the literature',GR],['log','From the research log',BO]];
const note=(x,y,tx,ty,txt,anchor='start')=>{el('path',{d:`M${x},${y} L${tx},${ty+4}`,class:'lead'});const t=el('text',{x:tx+(anchor=='start'?4:-4),y:ty,class:'note','text-anchor':anchor});t.textContent=txt};
const mk=(c,col,x,y,s)=>{const g=el('g',{class:'mk',tabindex:0,role:'button','aria-label':c.n+', '+c.concept+', weight '+c.w,transform:`translate(${x-s/2},${y-s/2}) scale(${s/22})`});
  el('rect',{x:-3,y:-3,width:28,height:28,rx:3,class:'hit'},g);const gg=el('g',{transform:'translate(3,3)'},g);glyph(gg,c.shape,col,c.ct);g.dataset.i=D.indexOf(c);marks.push(g)};
if(!V){const xs=v=>60+(v-0.5)*760;
 [0.5,0.75,1,1.25,1.5].forEach(v=>{el('line',{x1:xs(v),x2:xs(v),y1:30,y2:262,class:'ax'});const t=el('text',{x:xs(v),y:296,'text-anchor':'middle',class:'axn'});t.textContent=v});
 lanes.forEach(([key,t,col],li)=>{const yl=[130,230][li];el('line',{x1:50,x2:850,y1:yl+16,y2:yl+16,class:'lane'});const l=el('text',{x:50,y:yl-62,class:'lbl',fill:col});l.textContent=t;
  const cnt={};D.filter(c=>c.voice==key).sort((a,b)=>a.w-b.w).forEach(c=>{const i=(cnt[c.w]=(cnt[c.w]||0)+1)-1;mk(c,col,xs(c.w)-((i%4)-1.5)*22,yl-Math.floor(i/4)*22,22)})});
 note(xs(0.5)+30,214,xs(0.5)+110,186,'a site page counts as grey literature: the log starts low');
 note(xs(1.5)-6,118,xs(1.5)-40,52,'contested, so weighed ×1.5 on purpose','end');
}else{ // telefono: il peso sale in verticale, due colonne, segni grandi da toccare
 const ys=v=>500-(v-0.5)*440;
 [0.5,0.75,1,1.25,1.5].forEach(v=>{el('line',{x1:44,x2:356,y1:ys(v),y2:ys(v),class:'ax'});const t=el('text',{x:38,y:ys(v)+8,'text-anchor':'end',class:'axn'});t.textContent=v});
 lanes.forEach(([key,t,col],li)=>{const x0=[62,218][li];const l=el('text',{x:x0,y:20,class:'lbl',fill:col});l.textContent=li?'Research log':'Literature';
  const cnt={};D.filter(c=>c.voice==key).sort((a,b)=>a.w-b.w).forEach(c=>{const i=(cnt[c.w]=(cnt[c.w]||0)+1)-1;mk(c,col,x0+16+(i%4)*34,ys(c.w)-16-Math.floor(i/4)*34,30)})});
 el('line',{x1:204,x2:204,y1:30,y2:510,class:'lane'});
}
const fmt=v=>(+v).toFixed(2).replace(/0$/,'');
function show(i){marks.forEach(m=>m.classList.toggle('on',+m.dataset.i===i));gw.classList.add('dim');const c=D[i];
 let eq=`<b>${fmt(c.base)}</b> ${c.tier}`;if(c.u)eq+=` + <b>${fmt(0.25*c.u)}</b> for ${c.u} use${c.u>1?'s':''}`;if(c.m>1)eq+=` <i>× 1.5 contested</i>`;eq+=` = <b>${fmt(c.w)}</b>`;
 rd.innerHTML=`<p class="k">${c.n} · ${c.concept} · ${c.src}</p><h3><a href="${c.href}">${c.gist}</a></h3><p class="eq">${eq}</p>`}
function reset(){gw.classList.remove('dim');marks.forEach(m=>m.classList.remove('on'));rd.innerHTML='<p class="k">Read it</p><p class="hint">Each mark is a claim: <b>•</b> observed, <b>∴</b> derived, <b>∃</b> what there is, <b>!</b> what should be done. Point at one, or tap it, to see what it says and how its weight is made.</p>'}
marks.forEach(m=>{const i=+m.dataset.i;m.addEventListener('mouseenter',()=>show(i));m.addEventListener('focus',()=>show(i));m.addEventListener('click',e=>{e.stopPropagation();show(i)})});
sv.addEventListener('mouseleave',reset);document.addEventListener('click',reset);reset();

})();
