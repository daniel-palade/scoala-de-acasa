/* Pagina de clasă — afișează orarul + structura anului școlar (pe module sau semestre) */

(function () {
  const APP = window.APP;

  function qs(name) {
    const p = new URLSearchParams(window.location.search);
    return p.get(name);
  }

  function shade(hex, percent) {
    const num = parseInt(hex.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  }

  function openLesson(title) {
    window.location.href = 'lectie.html?n=' + n + '&t=' + encodeURIComponent(title);
  }

  let n = parseInt(qs('n'), 10);
  if (isNaN(n) || n < 0 || n > 4) n = 0;

  const cls = APP.classes.find(function (c) { return c.n === n; });
  const struct = APP.structure[n];

  // hero
  document.getElementById('ch-emoji').textContent = cls.emoji;
  document.getElementById('ch-title').textContent = cls.title;
  document.getElementById('ch-desc').textContent = cls.desc;

  const hero = document.getElementById('class-hero');
  hero.style.background = 'linear-gradient(150deg, ' + cls.color + ', ' + shade(cls.color, -22) + ')';

  document.title = cls.title + ' — Școala de Acasă';

  // chips (discipline)
  const chips = document.getElementById('chips');
  (struct.disciplines || []).forEach(function (d) {
    const c = document.createElement('span');
    c.className = 'chip';
    c.textContent = d;
    chips.appendChild(c);
  });

  const cont = document.getElementById('semestre');

  // sursa planificării
  if (struct.source) {
    const s = document.createElement('p');
    s.className = 'orc-label';
    s.innerHTML = '📚 Sursă: <b>' + struct.source + '</b>';
    cont.appendChild(s);
  }

  // ORAR (dacă există)
  if (struct.orar) {
    const h = document.createElement('h2');
    h.style.color = cls.color;
    h.innerHTML = '<span class="dot"></span>Orarul săptămânal';
    cont.appendChild(h);

    const grid = document.createElement('div');
    grid.className = 'orar-grid';
    struct.orar.forEach(function (o) {
      const item = document.createElement('div');
      item.className = 'orar-item' + (o.total ? ' total' : '');
      item.innerHTML = '<span class="od">' + o.d + '</span><b>' + o.ore + '</b>';
      grid.appendChild(item);
    });
    cont.appendChild(grid);
  }

  // MODULE (clasa pregătitoare etc.)
  if (struct.modules) {
    struct.modules.forEach(function (m) {
      const h = document.createElement('h2');
      h.style.color = cls.color;
      h.innerHTML = '<span class="dot"></span>' + m.name;
      cont.appendChild(h);

      const w = document.createElement('p');
      w.className = 'mod-weeks';
      w.textContent = '🗓 ' + m.weeks;
      cont.appendChild(w);

      m.items.forEach(function (it) {
        const div = document.createElement('div');
        div.className = 'theme theme-link';
        div.setAttribute('role', 'button');
        div.setAttribute('tabindex', '0');
        div.setAttribute('aria-label', 'Deschide lecția ' + it.t);
        div.style.borderLeftColor = cls.color;
        let tagHtml = '';
        if (it.d) {
          tagHtml = '<span class="theme-tag" style="background:' + cls.tint + ';color:' + shade(cls.color, -34) + ';">' + it.d + '</span>';
        }
        div.innerHTML =
          '<div class="theme-head">' + tagHtml +
            '<div class="theme-title">' + it.t + '</div>' +
            '<span class="theme-open">Deschide lecția →</span>' +
          '</div>' +
          '<div class="theme-meta">' + it.w + ' · ' + it.s + '</div>';
        div.addEventListener('click', function () { openLesson(it.t); });
        div.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLesson(it.t); }
        });
        cont.appendChild(div);
      });
    });
    return;
  }

  // SEMESTRE (clasele 1–4, orientativ)
  (struct.semestre || []).forEach(function (sem) {
    const h = document.createElement('h2');
    h.style.color = cls.color;
    h.innerHTML = '<span class="dot"></span>' + sem.name;
    cont.appendChild(h);

    sem.units.forEach(function (u) {
      const color = cls.color;
      const det = document.createElement('details');
      det.className = 'unitcard';
      det.innerHTML =
        '<summary>' +
          '<span>' + u.title + '</span>' +
          '<span class="chev">▾</span>' +
        '</summary>' +
        '<div class="uc-body">' +
          '<span class="tag" style="background:' + cls.tint + ';color:' + shade(color, -30) + ';">' + u.subject + '</span>' +
          '<div>' + u.body + '</div>' +
          '<div class="weeks">🗓 ' + u.weeks + '</div>' +
        '</div>';
      cont.appendChild(det);
    });
  });
})();
