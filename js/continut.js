/* Continut educațional — dicționar de litere, indicații pentru părinți,
   bănci de întrebări și activități interactive. Conținut demo, corect pedagogic,
   care se înlocuiește/completează conform programei oficiale (edu.ro) în faza P4. */

window.CONTENT = (function () {
  // ---------- Dicționar literă → cuvinte uzuale (clasa 0) ----------
  const LITERA = {
    'A': [['avion', '✈️'], ['ac', '🧷'], ['arici', '🦔'], ['apă', '💧']],
    'M': [['măr', '🍎'], ['minge', '⚽'], ['masă', '🍽️'], ['mână', '✋']],
    'I': [['iepure', '🐰'], ['inel', '💍'], ['iarnă', '❄️'], ['iaurt', '🥛']],
    'U': [['urs', '🐻'], ['umbrelă', '☂️'], ['ușă', '🚪'], ['ureche', '👂']],
    'R': [['rață', '🦆'], ['roată', '🛞'], ['rinocer', '🦏'], ['rândunică', '🐦']],
    'E': [['elefant', '🐘'], ['etaj', '🏢'], ['elicopter', '🚁'], ['ecuson', '🪪']],
    'N': [['nor', '☁️'], ['nas', '👃'], ['nucă', '🌰'], ['nisip', '🏖️']],
    'T': [['tren', '🚂'], ['tort', '🎂'], ['tobă', '🥁'], ['telefon', '📞']],
    'O': [['ou', '🥚'], ['om', '🧍'], ['oaie', '🐑'], ['oraș', '🏙️']],
    'C': [['casă', '🏠'], ['cal', '🐴'], ['câine', '🐶'], ['ceas', '⌚']],
    'Ă': [['măr', '🍎'], ['măgar', '🫏'], ['mătură', '🧹'], ['băiat', '👦']],
    'P': [['pară', '🍐'], ['pește', '🐟'], ['pălărie', '👒'], ['pian', '🎹']],
    'L': [['leu', '🦁'], ['lună', '🌙'], ['lapte', '🥛'], ['lac', '🏞️']],
    'S': [['soare', '☀️'], ['sanie', '🛷'], ['stea', '⭐'], ['scaun', '🪑']],
    'Î': [['înghețată', '🍦'], ['înger', '👼'], ['înot', '🏊']],
    'V': [['vacă', '🐄'], ['vulpe', '🦊'], ['vânt', '🍃'], ['vioară', '🎻']],
    'Ț': [['țap', '🐐'], ['țărișoară', '🗺️'], ['țintă', '🎯'], ['țânțar', '🦟']],
    'Ș': [['șarpe', '🐍'], ['șapcă', '🧢'], ['șoarece', '🐭'], ['școală', '🏫']],
    'F': [['floare', '🌸'], ['furnică', '🐜'], ['foc', '🔥'], ['fluture', '🦋']],
    'G': [['gară', '🚉'], ['girafă', '🦒'], ['gard', '🚧'], ['geam', '🪟']],
    'B': [['balon', '🎈'], ['banană', '🍌'], ['broască', '🐸'], ['barcă', '⛵']],
    'D': [['dinozaur', '🦖'], ['deget', '☝️'], ['drum', '🛣️'], ['dulap', '🗄️']],
    'H': [['hartă', '🗺️'], ['haină', '👕'], ['hotel', '🏨'], ['hamac', '🛏️']],
    'J': [['jucărie', '🧸'], ['joc', '🎲'], ['jachetă', '🧥']],
    'Z': [['zebră', '🦓'], ['zmeură', '🍇'], ['zână', '🧚'], ['zar', '🎲']],
    'X': [['xilofon', '🎼'], ['taxi', '🚕'], ['pix', '🖊️'], ['box', '📦']],
    'Â': [['râu', '🏞️'], ['pâine', '🍞'], ['câine', '🐕'], ['mâine', '📅']]
  };

  const ALL_LETTERS = ['A', 'M', 'I', 'U', 'R', 'E', 'N', 'T', 'O', 'C', 'Ă', 'P', 'L', 'S', 'Î', 'V', 'Ț', 'Ș', 'F', 'G', 'B', 'D', 'H', 'J', 'Z', 'X', 'Â'];

  // extragem litera țintă din textul itemului ("M, m" → "M"; "litera A, a" → "A")
  function letterOf(item) {
    const s = item.s || '';
    let m = s.match(/^([A-ZĂÂÎȘȚ])\s*,\s*[a-zăâîșț]/);
    if (m) return m[1];
    m = s.match(/litera\s+([A-ZĂÂÎȘȚ])/i);
    if (m) return m[1].toUpperCase();
    return null;
  }

  // ---------- Indicații pentru părinți (pe clasă) ----------
  const TIPS_BASE = {
    0: [
      'Iubește prin joc: la 5–6 ani copilul învață prin mișcare și povești, nu prin „temă". Fă totul scurt și vesel.',
      'Citește-i cu voce tare 15–20 de minute pe zi și arată cu degetul cuvintele — așa leagă sunetul de literă.',
      'Nu corecta imediat. Lasă-l să greșească, laudă efortul, apoi repetă împreună litera sau cuvântul.',
      'Păstrează o rutină blândă: 10–15 minute pe zi valorează mai mult decât o oră o dată pe săptămână.'
    ],
    1: [
      'În clasa I se pune baza citit-scrisului: citește zilnic cu copilul, pe rând, câte o propoziție.',
      'Pentru matematică folosește obiecte concrete (nasturi, jucării) — numărarea pe degete este un pas bun, nu o greșeală.',
      'Lăudați progresul mic, nu doar răspunsul corect. Încrederea construiește plăcerea de a învăța.',
      'Limitați tentațiile digitale în timpul temelor; un spațiu liniștit ajută enorm concentrarea.'
    ],
    2: [
      'Clasa a II-a aduce adunare/scădere peste 100 și lectură fluentă: exersați puțin, dar în fiecare zi.',
      'Întrebați „cum ai gândit?" în loc de „cât face?" — verbalizarea întărește înțelegerea.',
      'Încurajați cititul independent de plăcere (benzi desenate, reviste) — nu doar manualul.',
      'Gestionați frustrarea calm: o greșeală este o șansă de a învăța, nu un eșec.'
    ],
    3: [
      'Se introduce tabla înmulțirii: recitați-o ca pe un cântecel, în contexte reale („3 mere × 2 coșuri").',
      'Lăsați copilul să citească singur enunțul unei probleme și să explice cu voce tare ce trebuie să afle.',
      'Învățați-l să-și verifice singur rezultatul (estimare + verificare) — devine mai autonom.',
      'Alternați munca scrisă cu pauze de mișcare; la 8–9 ani concentrarea susținută este de ~20–25 minute.'
    ],
    4: [
      'Clasa a IV-a pregătește gimnaziul: încurajați rezolvarea independentă și organizarea (agendă, plan pe săptămână).',
      'La fracții folosiți tăieturi reale (pizza, foaie, ciocolată) — fracția devine vizibilă, nu abstractă.',
      'Discutați despre ce a învățat, nu doar despre notă: „ce ți-a plăcut azi?" întărește curiozitatea.',
      'Respectați nevoia de autonomie: oferiți ajutor, dar lăsați-l să încerce singur întâi.'
    ]
  };

  function letterTips(letter) {
    return [
      'Azi exersăm litera „' + letter + '". Caut-o împreună și pe ambalaje, cărți, plăcuțe din casă — vânătoarea de litere e jocul preferat.',
      'Arată-i cum se scrie „' + letter + '" mare și mic, apoi lasă-l să o „deseneze" cu degetul în făină sau nisip.',
      'Pronunțați sunetul (nu numele literei) și găsiți împreună alte cuvinte care îl au.'
    ];
  }

  // ---------- Bănci de întrebări pentru quiz (pe clasă) ----------
  const QUIZ_BANK = {
    0: [
      { q: 'Câte picioare are o pisică?', o: ['2', '3', '4', '5'], c: 2 },
      { q: 'Ce animal spune „miau"?', o: ['Câinele', 'Pisica', 'Calul', 'Peștele'], c: 1 },
      { q: 'Câte degete ai la o mână?', o: ['3', '4', '5', '6'], c: 2 },
      { q: 'Care dintre acestea este o culoare?', o: ['Masa', 'Roșu', 'Mingea', 'Scaunul'], c: 1 },
      { q: 'Câte roți are o mașină?', o: ['2', '3', '4', '5'], c: 2 },
      { q: 'Ce cade din cer când e frig iarna?', o: ['Ploaie caldă', 'Zăpada', 'Frunze verzi', 'Soare'], c: 1 },
      { q: 'Câte zile are o săptămână?', o: ['5', '6', '7', '8'], c: 2 },
      { q: 'Care animal trăiește în apă?', o: ['Peștele', 'Găina', 'Vaca', 'Calul'], c: 0 }
    ],
    1: [
      { q: 'Cât face 4 + 3?', o: ['6', '7', '8', '5'], c: 1 },
      { q: 'Cât face 10 − 4?', o: ['5', '7', '6', '8'], c: 2 },
      { q: 'Care număr e mai mare: 27 sau 72?', o: ['27', '72', 'Sunt egale', 'Niciunul'], c: 1 },
      { q: 'Cât face 5 + 5 + 5?', o: ['10', '12', '15', '20'], c: 2 },
      { q: 'Numărul care urmează după 39 este…', o: ['38', '40', '41', '49'], c: 1 },
      { q: 'Cât face 20 − 9?', o: ['9', '10', '11', '12'], c: 2 },
      { q: 'Câte laturi are un triunghi?', o: ['2', '3', '4', '5'], c: 1 },
      { q: 'Cât face 6 + 6?', o: ['10', '12', '14', '16'], c: 1 }
    ],
    2: [
      { q: 'Cât face 25 + 15?', o: ['30', '35', '40', '45'], c: 2 },
      { q: 'Cât face 60 − 25?', o: ['25', '30', '35', '40'], c: 2 },
      { q: 'Câte luni are un an?', o: ['10', '11', '12', '13'], c: 2 },
      { q: 'Care zi urmează după marți?', o: ['Luni', 'Miercuri', 'Joi', 'Duminică'], c: 1 },
      { q: 'Cât face 100 − 45?', o: ['45', '50', '55', '60'], c: 2 },
      { q: 'Jumătate din 20 este…', o: ['5', '10', '15', '20'], c: 1 },
      { q: 'Cât face 7 + 7 + 7?', o: ['14', '20', '21', '28'], c: 2 },
      { q: 'Câte zile are o săptămână?', o: ['5', '6', '7', '8'], c: 2 }
    ],
    3: [
      { q: 'Cât face 6 × 7?', o: ['36', '42', '48', '49'], c: 1 },
      { q: 'Cât face 36 : 4?', o: ['8', '9', '10', '12'], c: 1 },
      { q: 'Cât face 125 + 75?', o: ['190', '200', '210', '215'], c: 1 },
      { q: 'Câte minute are o oră?', o: ['30', '45', '60', '90'], c: 2 },
      { q: 'Cât face 9 × 8?', o: ['64', '70', '72', '81'], c: 2 },
      { q: 'Cât face 100 : 4?', o: ['20', '25', '30', '40'], c: 1 },
      { q: 'Cât face 500 − 125?', o: ['350', '375', '400', '425'], c: 1 },
      { q: 'Câte zile are luna ianuarie?', o: ['28', '30', '31', '29'], c: 2 }
    ],
    4: [
      { q: 'Cât face 1/2 din 40?', o: ['10', '20', '30', '40'], c: 1 },
      { q: 'Cât face 12 × 12?', o: ['120', '132', '144', '156'], c: 2 },
      { q: 'Cât face 144 : 12?', o: ['10', '11', '12', '13'], c: 2 },
      { q: 'Cât fac 3/4 din 100?', o: ['50', '65', '75', '80'], c: 2 },
      { q: 'Câte grade are un unghi drept?', o: ['45', '60', '90', '180'], c: 2 },
      { q: 'Câte minute are o oră și jumătate?', o: ['60', '75', '90', '120'], c: 2 },
      { q: 'Cât face 900 : 3?', o: ['200', '300', '330', '450'], c: 1 },
      { q: 'Perimetrul unui pătrat cu latura de 5 cm este…', o: ['15 cm', '20 cm', '25 cm', '30 cm'], c: 1 }
    ]
  };

  // construiește o întrebare cu răspunsul corect marcat după amestecare
  function mk(q, options, correctValue) {
    const o = shuffle(options);
    return { q: q, o: o, c: o.indexOf(correctValue) };
  }

  function countChar(word, ch) {
    let c = 0;
    for (let i = 0; i < word.length; i++) { if (word[i] === ch) c++; }
    return c;
  }

  // ---------- Quiz generat din literă (clasa 0) ----------
  function letterQuiz(letter, words) {
    const other = ALL_LETTERS.filter(function (x) { return x !== letter; });
    const lower = letter.toLowerCase();
    const first = words[0][0];
    const distractors = pickDistractors(letter, 4);
    const qs = [];

    qs.push(mk('Care este litera „' + letter + '" ?', [letter, other[0], other[1], other[2]], letter));
    qs.push(mk('Care cuvânt conține litera „' + letter + '" ?', [first, distractors[0], distractors[1], distractors[2]], first));

    if (first.charAt(0).toLowerCase() === lower) {
      qs.push(mk('Cu ce literă începe cuvântul „' + first + '" ?', [letter, other[0], other[1], other[2]], letter));
    } else {
      const cnt = countChar(first, lower);
      qs.push(mk('De câte ori apare litera „' + letter + '" în „' + first + '" ?',
        shuffle([String(cnt), String(cnt + 1), String(Math.max(1, cnt - 1)), String(cnt + 2)]),
        String(cnt)));
    }

    const len = first.length;
    qs.push(mk('Câte litere are cuvântul „' + first + '" ?',
      [String(len), String(len + 1), String(Math.max(1, len - 1)), String(len + 2)], String(len)));

    qs.push(mk('Care cuvânt NU conține litera „' + letter + '" ?',
      [distractors[0], first, words[1][0], words[2][0]], distractors[0]));

    qs.push(QUIZ_BANK[0][hash(letter) % QUIZ_BANK[0].length]);

    return qs;
  }

  function pickDistractors(letter, k) {
    const lower = letter.toLowerCase();
    const pool = [];
    Object.keys(LITERA).forEach(function (L) {
      if (L !== letter) LITERA[L].forEach(function (p) { pool.push(p[0]); });
    });
    const picked = [];
    const ordered = shuffle(pool);
    for (let i = 0; i < ordered.length && picked.length < k; i++) {
      const word = ordered[i];
      if (picked.indexOf(word) !== -1) continue;
      if (word.indexOf(lower) === -1 && word.indexOf(letter) === -1) picked.push(word);
    }
    while (picked.length < k) picked.push('farfurie 🍽️'.split(' ')[0]);
    return picked;
  }

  // ---------- activitate „numara" (numără obiecte) ----------
  function numaraActivity(cls) {
    const cap = cls === 0 ? 6 : cls === 1 ? 10 : cls === 2 ? 20 : 50;
    const emoji = ['🍎', '⭐', '🐤', '🌼', '🎈', '🍪', '🐟', '⚽'];
    const rounds = [];
    for (let i = 0; i < 4; i++) {
      const n = 1 + Math.floor(Math.random() * cap);
      const e = emoji[Math.floor(Math.random() * emoji.length)];
      rounds.push({ n: n, e: e, ans: n });
    }
    return { type: 'numara', rounds: rounds };
  }

  // ---------- flash aritmetic (clasele 1–4) ----------
  function flashActivity(cls) {
    const rounds = [];
    for (let i = 0; i < 6; i++) rounds.push(arithFor(cls));
    return { type: 'flash', rounds: rounds };
  }

  function arithFor(cls) {
    const r = Math.random;
    let a, b, op, ans;
    if (cls <= 1) {
      a = 1 + Math.floor(r() * 9); b = 1 + Math.floor(r() * 9);
      op = r() < 0.5 ? '+' : '-';
      if (op === '-' && a < b) { const t = a; a = b; b = t; }
      ans = op === '+' ? a + b : a - b;
    } else if (cls === 2) {
      a = 10 + Math.floor(r() * 90); b = 1 + Math.floor(r() * 40);
      op = r() < 0.5 ? '+' : '-';
      if (op === '-' && a < b) { const t = a; a = b; b = t; }
      ans = op === '+' ? a + b : a - b;
    } else {
      b = 3 + Math.floor(r() * 9); ans = 3 + Math.floor(r() * 9);
      op = r() < 0.5 ? '×' : '÷';
      if (op === '÷') { a = ans * b; } else { a = ans; ans = a * b; }
    }
    return { a: a, b: b, op: op, ans: ans };
  }

  // ---------- API principal ----------
  function get(n, item) {
    const letter = letterOf(item);
    let parent, quiz, activity;

    if (n === 0 && letter && LITERA[letter]) {
      const words = LITERA[letter];
      parent = letterTips(letter).concat(TIPS_BASE[0].slice(0, 2));
      quiz = letterQuiz(letter, words);
      activity = {
        type: 'cuvinte',
        letter: letter,
        target: words.slice(0, 3),
        distractors: pickDistractors(letter, 3),
        emoji: words[0][1]
      };
    } else if (n === 0) {
      parent = TIPS_BASE[0];
      quiz = pickQuiz(0, 6);
      activity = numaraActivity(0);
    } else if (n <= 2) {
      parent = TIPS_BASE[n];
      quiz = pickQuiz(n, 8);
      activity = numaraActivity(n);
    } else {
      parent = TIPS_BASE[n];
      quiz = pickQuiz(n, 8);
      activity = (item.d === 'Matematică') ? flashActivity(n) : numaraActivity(n);
    }

    return { parent: parent, quiz: quiz, activity: activity, letter: letter };
  }

  function pickQuiz(cls, k) {
    return shuffle(QUIZ_BANK[cls].slice()).slice(0, k);
  }

  // ---------- helperi ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function hash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) { h = (h * 31 + str.charCodeAt(i)) >>> 0; }
    return h;
  }

  return { get: get, LITERA: LITERA };
})();
