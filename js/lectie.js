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

  // ---------- conținut (generare zilnică) ----------
  const content = CONTENT.daily(n, item);

  // ---------- POPUP FEEDBACK (modal) ----------
  const fbBack = document.createElement('div');
  fbBack.className = 'modal-backdrop';
  fbBack.innerHTML =
    '<div class="modal">' +
    '<div class="m-emoji" id="m-emoji">✅</div>' +
    '<h3 id="m-title">Corect!</h3>' +
    '<p class="m-sub" id="m-sub"></p>' +
    '<div class="m-explain" id="m-explain"></div>' +
    '<button class="btn btn-primary m-btn" id="m-btn">Continuă</button>' +
    '</div>';
  document.body.appendChild(fbBack);

  const mEmoji = $('m-emoji');
  const mTitle = $('m-title');
  const mSub = $('m-sub');
  const mExplain = $('m-explain');
  const mBtn = $('m-btn');
  let fbNext = null;

  // ---------- sunet vesel la răspuns corect (nimic la greșit) ----------
  let audioCtx = null;
  function playHappy() {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const now = audioCtx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach(function (f, i) {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = 'triangle';
        o.frequency.setValueAtTime(f, now + i * 0.1);
        const t0 = now + i * 0.1;
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(0.5, t0 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.28);
        o.connect(g);
        g.connect(audioCtx.destination);
        o.start(t0);
        o.stop(t0 + 0.3);
      });
    } catch (e) { /* sunetul este opțional */ }
  }

  // ok = răspuns corect?, right = textul răspunsului corect (poate fi null),
  // chosen = ce a ales copilul (poate fi null), why = explicație, sub = subtitlu opțional.
  function showFeedback(ok, right, chosen, why, sub) {
    if (ok) playHappy();
    mEmoji.textContent = ok ? '✅' : '❌';
    mTitle.textContent = ok ? 'Corect!' : 'Greșit!';
    let subtitle = sub;
    if (!subtitle) {
      if (ok) {
        subtitle = right ? ('„' + right + '" este răspunsul bun!') : 'Bravo!';
      } else {
        const parts = [];
        if (chosen) parts.push('Ai ales „' + chosen + '".');
        if (right) parts.push('Răspunsul corect este „' + right + '".');
        subtitle = parts.join(' ');
      }
    }
    mSub.textContent = subtitle;
    mExplain.textContent = why || '';
    mBtn.onclick = function () {
      fbBack.classList.remove('on');
      if (fbNext) { const cb = fbNext; fbNext = null; cb(); }
    };
    fbBack.classList.add('on');
  }

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
          const finished = found >= act.target.length;
          fbNext = function () {
            if (finished) completeActivity();
          };
          showFeedback(
            true,
            null,
            null,
            '„' + word + '" conține litera „' + act.letter + '". Bravo! Ai găsit un cuvânt corect.',
            finished
              ? 'Ai găsit toate cuvintele cu litera „' + act.letter + '"!'
              : '„' + word + '" conține litera „' + act.letter + '".'
          );
        } else {
          b.classList.add('no');
          fbNext = function () { b.classList.remove('no'); };
          showFeedback(
            false,
            null,
            word,
            '„' + word + '" NU conține litera „' + act.letter + '". Caută cuvintele în care auzi și vezi litera ' + act.letter + '.',
            '„' + word + '" nu conține litera „' + act.letter + '". Mai încearcă!'
          );
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
          const oddName = r.items[r.odd][0];
          if (ok) {
            b.classList.add('ok');
          } else {
            b.classList.add('no');
            grid.querySelectorAll('.word-card')[r.odd].classList.add('ok');
          }
          fbNext = function () { i++; draw(); };
          showFeedback(ok, oddName, ok ? null : item[0], r.why);
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
          fbNext = function () { i++; draw(); };
          showFeedback(ok, String(r.ans), String(val), r.why);
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
    const questions = content.test;

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
      locked = false;
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
    }

    function answer(idx, btn) {
      if (locked) return;
      locked = true;

      const q = questions[qi];
      const correctIdx = q.c;
      const isOk = idx === correctIdx;
      const allBtns = card.querySelectorAll('.opt');
      allBtns[correctIdx].classList.add('ok');
      if (!isOk) {
        btn.classList.add('no');
        wrong++;
      }
      allBtns.forEach(function (b) { b.disabled = true; });

      fbNext = function () { qi++; if (qi >= questions.length) finish(); else renderQ(); };
      showFeedback(isOk, q.o[q.c], q.o[idx], q.e);
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

  // ---------- EXERCIȚII ZILNICE (15 exerciții noi în fiecare zi) ----------
  const exEl = $('exercises');
  if (exEl) buildExercises();

  function buildExercises() {
    exEl.innerHTML = '';
    let qi = 0, locked = false;
    const questions = content.exercises;

    const progress = document.createElement('div');
    progress.className = 'q-progress';
    const bar = document.createElement('div');
    bar.className = 'q-bar';
    questions.forEach(function () { bar.appendChild(document.createElement('span')); });
    progress.appendChild(bar);
    exEl.appendChild(progress);

    const card = document.createElement('div');
    card.className = 'q-card';
    exEl.appendChild(card);

    function renderQ() {
      locked = false;
      card.innerHTML = '';
      const dots = progress.querySelectorAll('.q-bar span');
      dots.forEach(function (d, idx) { d.className = idx < qi ? 'done' : idx === qi ? 'cur' : ''; });

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
    }

    function answer(idx, btn) {
      if (locked) return;
      locked = true;
      const q = questions[qi];
      const correctIdx = q.c;
      const isOk = idx === correctIdx;
      const allBtns = card.querySelectorAll('.opt');
      allBtns[correctIdx].classList.add('ok');
      if (!isOk) btn.classList.add('no');
      allBtns.forEach(function (b) { b.disabled = true; });
      fbNext = function () { qi++; if (qi >= questions.length) finishEx(); else renderQ(); };
      showFeedback(isOk, q.o[q.c], q.o[idx], q.e);
    }

    function finishEx() {
      card.innerHTML = '';
      const dots = progress.querySelectorAll('.q-bar span');
      dots.forEach(function (d) { d.className = 'done'; });
      const res = document.createElement('div');
      res.className = 'q-result';
      res.innerHTML = '<div class="res-emoji">🎯</div><h3>Bravo! Ai terminat exercițiile!</h3><p>Ai rezolvat toate cele ' + questions.length + ' exerciții. Mâine te așteaptă altele noi!</p>';
      card.appendChild(res);
    }

    renderQ();
  }

  // ---------- DESCĂRCARE PDF (fișă de lucru printabilă) ----------
  const btnPdf = $('btn-pdf');
  if (btnPdf) btnPdf.addEventListener('click', downloadLessonPdf);

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function activityPrintable() {
    const a = content.activity;
    let h = '';
    if (a.type === 'cuvinte') {
      const words = a.target.map(function (p) { return p[0]; });
      h += '<p><b>Găsește cuvintele care conțin litera „' + esc(a.letter) + '".</b></p>';
      h += '<p>Cuvinte cu litera „' + esc(a.letter) + '": <span class="answer">' + esc(words.join(', ')) + '</span>.</p>';
    } else if (a.type === 'numara') {
      h += '<p><b>Numără obiectele din fiecare rând.</b></p>';
      a.rounds.forEach(function (r, i) {
        h += '<p>' + (i + 1) + ') Câte obiecte sunt? ' + r.e + ' × ' + r.n + ' → Răspuns: <span class="answer">' + r.ans + '</span></p>';
      });
    } else if (a.type === 'flash') {
      h += '<p><b>Rezolvă exercițiile.</b></p>';
      a.rounds.forEach(function (r, i) {
        h += '<p>' + (i + 1) + ') ' + r.a + ' ' + r.op + ' ' + r.b + ' = ? → Răspuns: <span class="answer">' + r.ans + '</span></p>';
      });
    } else if (a.type === 'intrus') {
      h += '<p><b>Găsește intrusul din fiecare rând.</b></p>';
      a.rounds.forEach(function (r, i) {
        const words = r.items.map(function (p) { return p[0]; }).join(', ');
        const odd = r.items[r.odd][0];
        h += '<p>' + (i + 1) + ') ' + esc(words) + ' → Răspuns: <span class="answer">' + esc(odd) + '</span></p>';
      });
    }
    return h;
  }

  function mcPrintable(questions) {
    let h = '';
    questions.forEach(function (q, i) {
      h += '<p><b>' + (i + 1) + ') ' + esc(q.q) + '</b></p>';
      q.o.forEach(function (opt, j) {
        const isC = j === q.c;
        h += '<p class="pop' + (isC ? ' correct' : '') + '">' + String.fromCharCode(65 + j) + ') ' + esc(opt) + (isC ? ' ✓' : '') + '</p>';
      });
    });
    return h;
  }

  function buildPrintableHtml() {
    const meta = [item.w, item.s, item.d].filter(Boolean).join(' · ');
    return '<!DOCTYPE html><html lang="ro"><head><meta charset="UTF-8">' +
      '<title>' + esc(item.t) + ' — fișă de lucru</title>' +
      '<style>' +
      'body{font-family:Arial,Helvetica,sans-serif;color:#1f2937;margin:32px;line-height:1.55;font-size:14px}' +
      'h1{font-size:22px;margin:0 0 4px}' +
      'h2{font-size:15px;color:#6b7280;margin:0 0 20px;font-weight:normal}' +
      'h3{font-size:16px;margin:24px 0 10px;border-bottom:2px solid #111827;padding-bottom:4px}' +
      'p{margin:6px 0}' +
      '.pop{margin-left:18px}' +
      '.answer{color:#166534;font-weight:bold}' +
      '.correct{color:#166534;font-weight:bold}' +
      '.footer{margin-top:28px;font-size:11px;color:#9ca3af}' +
      '</style></head><body>' +
      '<h1>📚 ' + esc(item.t) + '</h1>' +
      '<h2>' + esc(cls.title) + (meta ? ' · ' + esc(meta) : '') + ' · Școala de Acasă</h2>' +
      '<h3>Activitate interactivă</h3>' + activityPrintable() +
      '<h3>Exerciții zilnice</h3>' + mcPrintable(content.exercises) +
      '<h3>Testul lecției</h3>' + mcPrintable(content.test) +
      '<p class="footer">Fișă generată de Școala de Acasă. Răspunsurile corecte sunt marcate cu verde.</p>' +
      '</body></html>';
  }

  function downloadLessonPdf() {
    const w = window.open('', '_blank', 'width=840,height=680');
    if (!w) { alert('Te rugăm să permiți ferestrele pop-up pentru a descărca PDF-ul.'); return; }
    w.document.open();
    w.document.write(buildPrintableHtml());
    w.document.close();
    w.focus();
    setTimeout(function () { w.print(); }, 400);
  }
})();
