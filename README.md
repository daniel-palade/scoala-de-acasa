# Școala de Acasă

Platformă educațională pentru părinții copiilor din clasa pregătitoare și clasele 1–4.

**Ce oferă (viziune):**
- structura anului școlar, pe clase, conform planificării Ministerului Educației;
- exerciții de aprofundare pentru acasă;
- ghid pas cu pas pentru părinți.

**Stadiu:** prototip demonstrativ. Conținutul educațional este *exemplu* și urmează să fie
înlocuit cu planificarea oficială (edu.ro). Autentificarea este un demo local (localStorage);
conturile reale și plățile se leagă ulterior de un backend (Supabase) + procesator (Stripe).

## Structură
```
index.html          → home: selecția clasei (animație hover)
clasa.html?n=1      → structura anului școlar pentru o clasă
autentificare.html  → cont: autentificare / înregistrare (demo)
css/style.css
data: js/data.js
```

## Rulare locală
Deschide `index.html` într-un browser, sau servește statically (ex. `npx serve`).

## Deploy (GitHub Pages)
Settings → Pages → Source: *Deploy from a branch* → branch `main`, folder `/ (root)`. Site-ul e static, fără build.
