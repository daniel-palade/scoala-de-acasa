/* Pagina de lecție — timer + activitate interactivă + indicații părinte + test gamificat. */

(function () {
  const APP = window.APP;
  const CONTENT = window.CONTENT;
  const Store = window.Store;
  const $ = function (id) { return document.getElementById(id); };

  function qs(name) { return new URLSearchParams(window.location.search).get(name); }

  // ---------- găsim clasa + itemul de lecție ----------
  let n = parseInt(qs('n'), 10);
  if (isNaN(n) || n < 0 || n > 4) n = 0;
  const title = (qs('t') || '').trim();

  const cls = APP.classes.find(function (c) { return c.n === n; });
  const struct = APP.structure[n];

  let item = null;
  (struct.modules || []).forEach(function (m) {
    m.items.forEach(function (it) {
      if (it.t === title && !item) item = it;
    });
  });
  if (!item) item = { t: title || 'Lecție', w: '', s: '' };

  const KEY = n + ':' + item.t;

  // ---------- hero ----------
  document.title = item.t + ' — ' + cls.title + ' · Școala de Acasă';
  $('l-emoji').textContent = cls.emoji;
  $('l-title').textContent = item.t;

  const metaBits = [];
  if (item.w) metaBits.push(item.w);
  if (item.s) metaBits.push(item.s);
  if (item.d) metaBits.push(item.d);
  $('l-meta').textContent = metaBits.join(' · ');

  const hero = $('l-hero');
  hero.style.background = 'linear-gradient(150deg, ' + cls.color + ', ' + shade(cls.color, -22) + ')';
  $('back-class').setAttribute('href', 'clasa.html?n=' + n);

  function refreshPoints() {
    const el = $('l-points');
    if (el) el.textContent = Store.points();
  }
  refreshPoints();

  function shade(hex, percent) {
    const num = parseInt(hex.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  }

  // ---------- conținut ----------
  const content = CONTENT.get(n, item);

  // ---------- TIMER ----------
  const tDisplay = $('timer-display');
  const tToggle = $('timer-toggle');
  let seconds = 0, running = false, tInt = null;

  function fmt(s) {
    const m = Math.floor(s / 60), ss = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (ss < 10 ? '0' : '') + ss;
  }
  tToggle.addEventListener('click', function () {
    if (running) {
      running = false; clearInterval(tInt);
      tToggle.textContent = '▶ Continuă';
    } else {
      running = true;
      tToggle.textContent = '⏸ Pauză';
      tInt = setInterval(function () { seconds++; tDisplay.textContent = fmt(seconds); }, 1000);
    }
  });
  $('timer-reset').addEventListener('click', function () {
    running = false; clearInterval(tInt); seconds = 0;
    tDisplay.textContent = fmt(0); tToggle.textContent = '▶ Începe';
  });

  // ---------- INDICAȚII PĂRINTE ----------
  const tipsList = $('tips-list');
  content.parent.forEach(function (tip) {
    const li = document.createElement('li');
    li.textContent = tip;
    tipsList.appendChild(li);
  });

  // ---------- finalizare activitate (+10) ----------
  function completeActivity() {
    $('activity').style.display = 'none';
    $('act-done').style.display = '';
    if (!Store.lessonDone(KEY)) {
      Store.markLessonDone(KEY);
      Store.addPoints(10);
      refreshPoints();
    } else {
      // deja terminată — nu mai adăugăm puncte, dar arătăm confirmarea
    }
  }

  // ---------- ACTIVITATE ----------
  const actEl = $('activity');

  if (content.activity.type === 'cuvinte') {
    renderCuvinte(content.activity);
    $('act-title').textContent = '🎮 Găsește cuvintele cu „' + content.activity.letter + '"';
    $('act-sub').textContent = 'Apasă pe fiecare cuvânt care conține litera ' + content.activity.letter + '.';
  } else if (content.activity.type === 'numara') {
    $('act-title').textContent = '🎮 Numără obiectele';
    $('act-sub').textContent = 'Privește și alege câte obiecte sunt.';
    renderRounds(content.activity);
  } else if (content.activity.type === 'flash') {
    $('act-title').textContent = '🧮 Socotește rapid';
    $('act-sub').textContent = 'Rezolvă fiecare exercițiu și treci mai departe.';
    renderRounds(content.activity);
  } else if (content.activity.type === 'intrus') {
    $('act-title').textContent = '🎮 Găsește intrusul';
    $('act-sub').textContent = 'În fiecare rând, apasă pe ce nu se potrivește cu restul.';
    renderIntrus(content.activity);
  } else {
    completeActivity();
  }

  function renderCuvinte(act) {
    const cards = act.target.concat(act.distractors.map(function (w) { return [w, '❓']; }));
    const shuffled = [];
    const arr = cards.slice();
    while (arr.length) shuffled.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);

    const big = document.createElement('div');
    big.className = 'letter-big';
    big.innerHTML = '<span>' + act.letter + '</span><span class="letter-low">' + act.letter.toLowerCase() + '</span>';

    const grid = document.createElement('div');
    grid.className = 'word-grid';

    let found = 0;
    shuffled.forEach(function (pair) {
      const word = pair[0], emoji = pair[1];
      const isTarget = act.target.some(function (tp) { return tp[0] === word; });
      const b = document.createElement('button');
      b.className = 'word-card';
      b.innerHTML = '<span class="wc-emoji">' + emoji + '</span><span class="wc-word">' + word + '</span>';
      b.addEventListener('click', function () {
        if (b.dataset.done) return;
        if (isTarget) {
          b.classList.add('ok');
          b.dataset.done = '1';
          found++;
          if (found >= act.target.length) {
            setTimeout(completeActivity, 500);
          }
        } else {
          b.classList.add('no');
          setTimeout(function () { b.classList.remove('no'); }, 450);
        }
      });
      grid.appendChild(b);
    });

    actEl.appendChild(big);
    actEl.appendChild(grid);
  }

  function renderIntrus(act) {
    const box = document.createElement('div');
    actEl.appendChild(box);
    let i = 0;

    function draw() {
      if (i >= act.rounds.length) { setTimeout(completeActivity, 300); return; }
      const r = act.rounds[i];
      box.innerHTML = '';

      const prompt = document.createElement('div');
      prompt.className = 'round-prompt';
      prompt.innerHTML =
        '<p style="font-size:17px;font-weight:700;color:var(--ink);margin:0 0 4px;">Care nu se potrivește aici?</p>' +
        '<p style="color:var(--muted);font-size:14px;margin:0;">Indiciu: toate celelalte sunt <b>' + r.hint + '</b>.</p>';
      box.appendChild(prompt);

      const grid = document.createElement('div');
      grid.className = 'word-grid';
      r.items.forEach(function (item, idx) {
        const b = document.createElement('button');
        b.className = 'word-card';
        b.innerHTML = '<span class="wc-emoji">' + item[1] + '</span><span class="wc-word">' + item[0] + '</span>';
        b.addEventListener('click', function () {
          if (grid.dataset.done) return;
          grid.dataset.done = '1';
          const ok = idx === r.odd;
          if (ok) {
            b.classList.add('ok');
          } else {
            b.classList.add('no');
            grid.querySelectorAll('.word-card')[r.odd].classList.add('ok');
          }
          setTimeout(function () { i++; draw(); }, 900);
        });
        grid.appendChild(b);
      });
      box.appendChild(grid);
    }

    draw();
  }

  function renderRounds(act) {
    const rounds = act.rounds;
    let i = 0;
    const box = document.createElement('div');
    actEl.appendChild(box);

    function draw() {
      if (i >= rounds.length) { setTimeout(completeActivity, 300); return; }
      const r = rounds[i];
      box.innerHTML = '';

      const prompt = document.createElement('div');
      prompt.className = 'round-prompt';
      if (act.type === 'numara') {
        prompt.innerHTML = '<div class="emoji-count">' + ('<span>' + r.e + '</span>').repeat(r.n) + '</div>' +
          '<p>Câte obiecte sunt?</p>';
      } else {
        prompt.innerHTML = '<div class="flash-q">' + r.a + ' <b>' + r.op + '</b> ' + r.b + ' = ?</div>';
      }

      const opts = document.createElement('div');
      opts.className = 'options-grid';
      const choices = buildChoices(r);
      choices.forEach(function (val) {
        const b = document.createElement('button');
        b.className = 'opt';
        b.textContent = val;
        b.addEventListener('click', function () {
          if (opts.dataset.done) return;
          opts.dataset.done = '1';
          const ok = String(val) === String(r.ans);
          b.classList.add(ok ? 'ok' : 'no');
          if (!ok) {
            // evidențiem răspunsul corect
            opts.querySelectorAll('.opt').forEach(function (ob) {
              if (String(ob.textContent) === String(r.ans)) ob.classList.add('ok');
            });
          }
          setTimeout(function () { i++; draw(); }, 700);
        });
        opts.appendChild(b);
      });

      box.appendChild(prompt);
      box.appendChild(opts);
    }

    function buildChoices(r) {
      const set = [r.ans];
      while (set.length < 4) {
        const d = r.ans + rand(-5, 5);
        if (d < 0) continue;
        if (set.indexOf(d) === -1) set.push(d);
      }
      // amestecăm
      for (let k = set.length - 1; k > 0; k--) {
        const j = Math.floor(Math.random() * (k + 1));
        const t = set[k]; set[k] = set[j]; set[j] = t;
      }
      return set;
    }

    draw();
  }

  function rand(a, b) {
    const lo = Math.min(a, b), hi = Math.max(a, b);
    return Math.floor(Math.random() * (hi - lo + 1)) + lo;
  }

  // ---------- QUIZ ----------
  const quizEl = $('quiz');
  const MAX_WRONG = 2;

  function buildQuiz() {
    // curățăm
    quizEl.innerHTML = '';
    let qi = 0, wrong = 0, locked = false;
    const questions = content.quiz;

    const progress = document.createElement('div');
    progress.className = 'q-progress';
    const bar = document.createElement('div');
    bar.className = 'q-bar';
    questions.forEach(function () { bar.appendChild(document.createElement('span')); });
    progress.appendChild(bar);
    quizEl.appendChild(progress);

    const card = document.createElement('div');
    card.className = 'q-card';
    quizEl.appendChild(card);

    function renderQ() {
      card.innerHTML = '';
      const dots = progress.querySelectorAll('.q-bar span');
      dots.forEach(function (d, idx) {
        d.className = idx < qi ? 'done' : idx === qi ? 'cur' : '';
      });

      const q = questions[qi];
      const qtitle = document.createElement('div');
      qtitle.className = 'q-title';
      qtitle.innerHTML = '<span class="q-num">' + (qi + 1) + '/' + questions.length + '</span> ' + q.q;
      card.appendChild(qtitle);

      const opts = document.createElement('div');
      opts.className = 'options-grid';
      q.o.forEach(function (opt, idx) {
        const b = document.createElement('button');
        b.className = 'opt';
        b.innerHTML = '<span class="opt-key">' + String.fromCharCode(65 + idx) + '</span>' + opt;
        b.addEventListener('click', function () { answer(idx, b); });
        opts.appendChild(b);
      });
      card.appendChild(opts);

      const fb = document.createElement('div');
      fb.className = 'q-feedback';
      card.appendChild(fb);

      const next = document.createElement('button');
      next.className = 'btn btn-primary q-next';
      next.textContent = 'Continuă →';
      next.style.display = 'none';
      next.addEventListener('click', function () {
        qi++; locked = false;
        if (qi >= questions.length) finish();
        else renderQ();
      });
      card.appendChild(next);

      var nextRef = next; // pentru closure
      function answer(idx, btn) {
        if (locked) return;
        locked = true;

        const correctIdx = q.c;
        const isOk = idx === correctIdx;
        const allBtns = opts.querySelectorAll('.opt');
        allBtns[correctIdx].classList.add('ok');
        if (!isOk) {
          btn.classList.add('no');
          wrong++;
        }
        fb.innerHTML = isOk
          ? '<span class="fb ok-fb">✅ Corect! Bravo!</span>'
          : '<span class="fb no-fb">❌ Nu. Răspunsul corect este evidențiat.</span>';

        allBtns.forEach(function (b) { b.disabled = true; });
        nextRef.textContent = (qi >= questions.length - 1) ? 'Vezi rezultatul →' : 'Continuă →';
        nextRef.style.display = '';
      }
    }

    function finish() {
      card.innerHTML = '';
      const dots = progress.querySelectorAll('.q-bar span');
      dots.forEach(function (d) { d.className = 'done'; });

      const ok = wrong <= MAX_WRONG;
      const res = document.createElement('div');
      res.className = 'q-result';

      if (ok) {
        res.innerHTML =
          '<div class="res-emoji">🏆</div>' +
          '<h3>Ai trecut testul!</h3>' +
          '<p>Ai greșit doar ' + wrong + ' din ' + questions.length + ' întrebări.</p>';
      } else {
        res.innerHTML =
          '<div class="res-emoji">💪</div>' +
          '<h3>Mai ai un pic!</h3>' +
          '<p>Ai greșit ' + wrong + ' întrebări (maxim ' + MAX_WRONG + ' permise). Poți încerca de câte ori vrei.</p>';
      }
      card.appendChild(res);

      if (ok && !Store.quizDone(KEY)) {
        Store.markQuizDone(KEY);
        Store.addPoints(20);
        refreshPoints();
        const pts = document.createElement('p');
        pts.className = 'res-points';
        pts.textContent = '🎁 +20 puncte pentru oul-mascotă!';
        card.appendChild(pts);
      } else if (ok) {
        const done = document.createElement('p');
        done.className = 'res-points';
        done.textContent = 'Test deja rezolvat — punctele au fost acordate o singură dată.';
        card.appendChild(done);
      }

      const again = document.createElement('button');
      again.className = 'btn btn-ghost q-again';
      again.textContent = ok ? '🔁 Rezolvă din nou' : '🔁 Încearcă din nou';
      again.addEventListener('click', buildQuiz);
      card.appendChild(again);
    }

    renderQ();
  }

  buildQuiz();
})();
