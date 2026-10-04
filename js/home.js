/* Home — generare carduri + animația de hover "umple pagina, se retrage la margini" */

(function () {
  const APP = window.APP;
  const cardsWrap = document.getElementById('cards');
  const stage = document.getElementById('stage');
  const sEmoji = document.getElementById('s-emoji');
  const sNum = document.getElementById('s-num');
  const sDesc = document.getElementById('s-desc');
  const sCta = document.getElementById('s-cta');

  const EDGE = 48;            // banda de siguranță perimetrală (px)
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;

  let activeCard = null;
  let retreating = false;

  // Construim cele 5 carduri
  APP.classes.forEach(function (cls) {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.n = cls.n;
    card.style.background = 'linear-gradient(160deg, ' + cls.color + ', ' + shade(cls.color, -18) + ')';
    card.innerHTML =
      '<div class="c-emoji">' + cls.emoji + '</div>' +
      '<div class="c-num">' + cls.short + '</div>' +
      '<div class="c-name">' + cls.title + '</div>';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'Deschide ' + cls.title);
    cardsWrap.appendChild(card);

    card.addEventListener('click', function () { go(cls.n); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(cls.n); }
    });

    if (!isTouch && !reduced) {
      card.addEventListener('mouseenter', function () { activate(card); });
    }
  });

  function go(n) {
    window.location.href = 'clasa.html?n=' + n;
  }

  function shade(hex, percent) {
    const num = parseInt(hex.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  }

  function activate(card) {
    if (activeCard === card || retreating) return;
    const cls = APP.classes[card.dataset.n];

    // umplem conținutul stratului
    sEmoji.textContent = cls.emoji;
    sNum.textContent = cls.title;
    sDesc.textContent = cls.desc;
    sCta.textContent = 'Intră în ' + cls.short + ' →';
    stage.style.background = 'linear-gradient(160deg, ' + cls.color + ', ' + shade(cls.color, -18) + ')';
    stage.dataset.n = cls.n;

    // poziția de start = exact dreptunghiul cardului
    const r = card.getBoundingClientRect();
    stage.style.transition = 'none';
    stage.style.left = r.left + 'px';
    stage.style.top = r.top + 'px';
    stage.style.width = r.width + 'px';
    stage.style.height = r.height + 'px';
    stage.style.opacity = '0';
    stage.classList.add('on');
    stage.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';

    void stage.offsetWidth; // reflow

    // animăm spre "aproape toată pagina, dar nu până la margini"
    stage.style.transition =
      'left .5s cubic-bezier(.22,1,.36,1), top .5s cubic-bezier(.22,1,.36,1), ' +
      'width .5s cubic-bezier(.22,1,.36,1), height .5s cubic-bezier(.22,1,.36,1), opacity .22s ease';
    stage.style.left = EDGE + 'px';
    stage.style.top = EDGE + 'px';
    stage.style.width = (window.innerWidth - EDGE * 2) + 'px';
    stage.style.height = (window.innerHeight - EDGE * 2) + 'px';
    stage.style.opacity = '1';

    // celelalte carduri se estompează
    document.querySelectorAll('.card').forEach(function (c) {
      if (c !== card) c.classList.add('dim');
    });
    card.classList.add('picked');

    activeCard = card;
  }

  function deactivate() {
    if (!activeCard) return;
    const card = activeCard;
    const r = card.getBoundingClientRect();

    stage.style.transition =
      'left .38s cubic-bezier(.22,1,.36,1), top .38s cubic-bezier(.22,1,.36,1), ' +
      'width .38s cubic-bezier(.22,1,.36,1), height .38s cubic-bezier(.22,1,.36,1), opacity .18s ease';
    stage.style.left = r.left + 'px';
    stage.style.top = r.top + 'px';
    stage.style.width = r.width + 'px';
    stage.style.height = r.height + 'px';
    stage.style.opacity = '0';

    document.querySelectorAll('.card').forEach(function (c) { c.classList.remove('dim'); });
    card.classList.remove('picked');
    activeCard = null;

    setTimeout(function () {
      if (!activeCard) {
        stage.classList.remove('on');
        stage.style.pointerEvents = 'none';
        document.body.style.overflow = '';
      }
    }, 400);
  }

  // retragerea când cursorul ajunge la margini
  window.addEventListener('mousemove', function (e) {
    if (!activeCard || reduced) return;
    if (e.clientX < EDGE || e.clientY < EDGE ||
        e.clientX > window.innerWidth - EDGE || e.clientY > window.innerHeight - EDGE) {
      retreating = true;
      deactivate();
      setTimeout(function () { retreating = false; }, 420);
    }
  });

  // click pe strat → navighează
  stage.addEventListener('click', function () {
    if (stage.dataset.n !== undefined && stage.dataset.n !== '') {
      go(parseInt(stage.dataset.n, 10));
    }
  });

  window.addEventListener('resize', function () {
    if (activeCard) deactivate();
  });
})();
