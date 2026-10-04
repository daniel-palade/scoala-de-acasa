/* Pagina de clasă — afișează structura anului școlar pentru clasa selectată */

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

  let n = parseInt(qs('n'), 10);
  if (isNaN(n) || n < 0 || n > 4) n = 1;

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
  struct.disciplines.forEach(function (d) {
    const c = document.createElement('span');
    c.className = 'chip';
    c.textContent = d;
    chips.appendChild(c);
  });

  // semestre + unități
  const cont = document.getElementById('semestre');
  struct.semestre.forEach(function (sem) {
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
