import json,subprocess
g=json.load(open('scripts/wikidata/out/geo.json')); d=json.load(open('scripts/wikidata/decisioni.json'))
succ=dict(d['successori']); succ.update({"Atene":"Grecia","Zhu":"Cina","Repubblica delle Sette Province Unite":"Paesi Bassi","Regno dei Paesi Bassi":"Paesi Bassi","Regno di Napoli":"Italia","Russia sovietica":"Russia","internazionale":"UE","Europa":"UE"})
idx=json.loads(subprocess.run(['node','-e',"const c=require('./src/_data/conceptsIndex.js');console.log(JSON.stringify((typeof c==='function'?c():c).map(x=>({name:x.name,type:x.type,related:(x.related||[]).map(r=>r.name)}))))"],capture_output=True,text=True).stdout)
own={}
for e in idx:
    n=e['name']
    if n in d['geo']:
        own[n]=(d['geo'][n]['modo'],d['geo'][n]['paesi'])
    elif n in g and g[n]['paesi']:
        ps=[]
        for x in g[n]['paesi']:
            l=succ.get(x['label'],x['label'])
            if l!='Unione Sovietica' and l not in ps: ps.append(l)
        own[n]=('wikidata',ps)
res={}; undecided=[]
for e in idx:
    n=e['name']
    if n in own: res[n]=own[n]; continue
    inh=[]
    for r in e['related']:
        if r in own and own[r][0] in ('wikidata','diretta') and own.get(r) and idx_type(r) if False else r in own and own[r][0] in ('wikidata','diretta'):
            for p in own[r][1]:
                if p not in inh: inh.append(p)
    if inh: res[n]=('teorico-auto',inh)
    else: res[n]=('nessuna',[]); undecided.append((n,e['type']))
json.dump({k:{'modo':v[0],'paesi':v[1]} for k,v in res.items()},open('/tmp/geo_res.json','w'),ensure_ascii=False,indent=1)
from collections import Counter
print(Counter(v[0] for v in res.values()))
print('AUTO:',[(k,v[1]) for k,v in res.items() if v[0]=='teorico-auto'])
print('NESSUNA-da-confermare:',undecided)
