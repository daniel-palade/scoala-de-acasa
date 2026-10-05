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
    'Î': [['înghețată', '🍦'], ['înger', '👼'], ['înot', '🏊'], ['împărat', '👑']],
    'V': [['vacă', '🐄'], ['vulpe', '🦊'], ['vânt', '🍃'], ['vioară', '🎻']],
    'Ț': [['țap', '🐐'], ['țărișoară', '🗺️'], ['țintă', '🎯'], ['țânțar', '🦟']],
    'Ș': [['șarpe', '🐍'], ['șapcă', '🧢'], ['șoarece', '🐭'], ['școală', '🏫']],
    'F': [['floare', '🌸'], ['furnică', '🐜'], ['foc', '🔥'], ['fluture', '🦋']],
    'G': [['gară', '🚉'], ['girafă', '🦒'], ['gard', '🚧'], ['geam', '🪟']],
    'B': [['balon', '🎈'], ['banană', '🍌'], ['broască', '🐸'], ['barcă', '⛵']],
    'D': [['dinozaur', '🦖'], ['deget', '☝️'], ['drum', '🛣️'], ['dulap', '🗄️']],
    'H': [['hartă', '🗺️'], ['haină', '👕'], ['hotel', '🏨'], ['hamac', '🛏️']],
    'J': [['jucărie', '🧸'], ['joc', '🎲'], ['jachetă', '🧥'], ['jurnal', '📔']],
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
      { q: 'Câte picioare are o pisică?', o: ['2', '3', '4', '5'], c: 2, e: 'Pisica are 4 picioare — două în față și două în spate.' },
      { q: 'Ce animal spune „miau"?', o: ['Câinele', 'Pisica', 'Calul', 'Peștele'], c: 1, e: 'Pisica spune „miau", la fel cum câinele spune „ham".' },
      { q: 'Câte degete ai la o mână?', o: ['3', '4', '5', '6'], c: 2, e: 'O mână are 5 degete: unul mare și patru mici.' },
      { q: 'Care dintre acestea este o culoare?', o: ['Masa', 'Roșu', 'Mingea', 'Scaunul'], c: 1, e: '„Roșu" este o culoare. Masa, mingea și scaunul sunt obiecte.' },
      { q: 'Câte roți are o mașină?', o: ['2', '3', '4', '5'], c: 2, e: 'O mașină are 4 roți — câte una la fiecare colț.' },
      { q: 'Ce cade din cer când e frig iarna?', o: ['Ploaie caldă', 'Zăpada', 'Frunze verzi', 'Soare'], c: 1, e: 'Iarna cade zăpada, pentru că afară este frig.' },
      { q: 'Câte zile are o săptămână?', o: ['5', '6', '7', '8'], c: 2, e: 'O săptămână are 7 zile: luni, marți, miercuri, joi, vineri, sâmbătă și duminică.' },
      { q: 'Care animal trăiește în apă?', o: ['Peștele', 'Găina', 'Vaca', 'Calul'], c: 0, e: 'Peștele trăiește în apă, pentru că acolo respiră prin branhii.' }
    ],
    1: [
      { q: 'Cât face 4 + 3?', o: ['6', '7', '8', '5'], c: 1, e: '4 + 3 = 7. Pornești de la 4 și numeri încă trei: 5, 6, 7.' },
      { q: 'Cât face 10 − 4?', o: ['5', '7', '6', '8'], c: 2, e: '10 − 4 = 6. Scoți 4 din 10 și rămân 6.' },
      { q: 'Care număr e mai mare: 27 sau 72?', o: ['27', '72', 'Sunt egale', 'Niciunul'], c: 1, e: '72 este mai mare, pentru că are 7 zeci, iar 27 are doar 2 zeci.' },
      { q: 'Cât face 5 + 5 + 5?', o: ['10', '12', '15', '20'], c: 2, e: '5 + 5 + 5 = 15 (adică 3 × 5).' },
      { q: 'Numărul care urmează după 39 este…', o: ['38', '40', '41', '49'], c: 1, e: 'După 39 vine 40, ca atunci când numeri înainte.' },
      { q: 'Cât face 20 − 9?', o: ['9', '10', '11', '12'], c: 2, e: '20 − 9 = 11. Din 20 scazi 9 și rămân 11.' },
      { q: 'Câte laturi are un triunghi?', o: ['2', '3', '4', '5'], c: 1, e: 'Un triunghi are 3 laturi („tri" înseamnă trei).' },
      { q: 'Cât face 6 + 6?', o: ['10', '12', '14', '16'], c: 1, e: '6 + 6 = 12.' }
    ],
    2: [
      { q: 'Cât face 25 + 15?', o: ['30', '35', '40', '45'], c: 2, e: '25 + 15 = 40 (20 + 10 = 30, 5 + 5 = 10, total 40).' },
      { q: 'Cât face 60 − 25?', o: ['25', '30', '35', '40'], c: 2, e: '60 − 25 = 35.' },
      { q: 'Câte luni are un an?', o: ['10', '11', '12', '13'], c: 2, e: 'Un an are 12 luni.' },
      { q: 'Care zi urmează după marți?', o: ['Luni', 'Miercuri', 'Joi', 'Duminică'], c: 1, e: 'Zilele vin în ordine: luni, marți, miercuri — deci după marți vine miercuri.' },
      { q: 'Cât face 100 − 45?', o: ['45', '50', '55', '60'], c: 2, e: '100 − 45 = 55.' },
      { q: 'Jumătate din 20 este…', o: ['5', '10', '15', '20'], c: 1, e: 'Jumătate din 20 este 10, pentru că 10 + 10 = 20.' },
      { q: 'Cât face 7 + 7 + 7?', o: ['14', '20', '21', '28'], c: 2, e: '7 + 7 + 7 = 21 (adică 3 × 7).' },
      { q: 'Câte zile are o săptămână?', o: ['5', '6', '7', '8'], c: 2, e: 'O săptămână are 7 zile.' }
    ],
    3: [
      { q: 'Cât face 6 × 7?', o: ['36', '42', '48', '49'], c: 1, e: '6 × 7 = 42.' },
      { q: 'Cât face 36 : 4?', o: ['8', '9', '10', '12'], c: 1, e: '36 : 4 = 9, pentru că 9 × 4 = 36.' },
      { q: 'Cât face 125 + 75?', o: ['190', '200', '210', '215'], c: 1, e: '125 + 75 = 200.' },
      { q: 'Câte minute are o oră?', o: ['30', '45', '60', '90'], c: 2, e: 'O oră are 60 de minute.' },
      { q: 'Cât face 9 × 8?', o: ['64', '70', '72', '81'], c: 2, e: '9 × 8 = 72.' },
      { q: 'Cât face 100 : 4?', o: ['20', '25', '30', '40'], c: 1, e: '100 : 4 = 25, pentru că 25 × 4 = 100.' },
      { q: 'Cât face 500 − 125?', o: ['350', '375', '400', '425'], c: 1, e: '500 − 125 = 375.' },
      { q: 'Câte zile are luna ianuarie?', o: ['28', '30', '31', '29'], c: 2, e: 'Ianuarie are 31 de zile.' }
    ],
    4: [
      { q: 'Cât face 1/2 din 40?', o: ['10', '20', '30', '40'], c: 1, e: 'Jumătate din 40 este 20 (40 : 2 = 20).' },
      { q: 'Cât face 12 × 12?', o: ['120', '132', '144', '156'], c: 2, e: '12 × 12 = 144.' },
      { q: 'Cât face 144 : 12?', o: ['10', '11', '12', '13'], c: 2, e: '144 : 12 = 12, pentru că 12 × 12 = 144.' },
      { q: 'Cât fac 3/4 din 100?', o: ['50', '65', '75', '80'], c: 2, e: '3/4 din 100 = 75 (100 : 4 = 25, apoi 25 × 3 = 75).' },
      { q: 'Câte grade are un unghi drept?', o: ['45', '60', '90', '180'], c: 2, e: 'Un unghi drept are 90 de grade — exact ca un colț de carte.' },
      { q: 'Câte minute are o oră și jumătate?', o: ['60', '75', '90', '120'], c: 2, e: 'O oră = 60 minute + o jumătate = 30 minute, total 90.' },
      { q: 'Cât face 900 : 3?', o: ['200', '300', '330', '450'], c: 1, e: '900 : 3 = 300.' },
      { q: 'Perimetrul unui pătrat cu latura de 5 cm este…', o: ['15 cm', '20 cm', '25 cm', '30 cm'], c: 1, e: 'Perimetrul = 4 laturi × 5 cm = 20 cm.' }
    ]
  };

  // ---------- Bancă de întrebări pentru limba română (clasele 1–4) ----------
  const RO_BANK = {
    1: [
      { q: 'Cu ce literă începe cuvântul „casă"?', o: ['M', 'C', 'T', 'R'], c: 1, e: '„casă" începe cu litera C.' },
      { q: 'Câte litere are cuvântul „mama"?', o: ['2', '3', '4', '5'], c: 2, e: '„mama" are 4 litere: m-a-m-a.' },
      { q: 'Care cuvânt începe cu litera „A"?', o: ['Masă', 'Avion', 'Tren', 'Ușă'], c: 1, e: '„Avion" începe cu A. Celelalte încep cu M, T sau U.' },
      { q: 'Câte silabe are „pisică" (pi-si-că)?', o: ['2', '3', '4', '5'], c: 1, e: '„pisică" are 3 silabe: pi-si-că.' },
      { q: 'Care este prima literă a alfabetului?', o: ['Z', 'M', 'B', 'A'], c: 3, e: 'Alfabetul începe mereu cu litera A.' },
      { q: 'Care cuvânt începe cu litera „M"?', o: ['Pară', 'Măr', 'Casă', 'Nor'], c: 1, e: '„Măr" începe cu litera M.' }
    ],
    2: [
      { q: 'Care cuvânt este scris corect?', o: ['copil', 'cobil', 'pocil', 'lopci'], c: 0, e: 'Cuvântul scris corect este „copil".' },
      { q: 'Care este opusul cuvântului „mare"?', o: ['înalt', 'mic', 'lung', 'gros'], c: 1, e: 'Opusul lui „mare" este „mic".' },
      { q: 'Care cuvânt rimează cu „soare"?', o: ['casă', 'floare', 'masă', 'carte'], c: 1, e: '„floare" rimează cu „soare", pentru că ambele se termină în „-oare".' },
      { q: 'Câte litere are alfabetul limbii române?', o: ['26', '30', '31', '28'], c: 2, e: 'Alfabetul românesc are 31 de litere.' },
      { q: '„Pisica a prins șoarecele." Cine a prins?', o: ['Șoarecele', 'Pisica', 'Câinele', 'Nimeni'], c: 1, e: 'Pisica este cea care face acțiunea — ea l-a prins pe șoarecele.' },
      { q: 'Care cuvânt are 3 silabe?', o: ['casă', 'masă', 'papucă', 'cal'], c: 2, e: '„papucă" are 3 silabe: pa-pu-că. Casă și masă au 2, cal are una.' }
    ],
    3: [
      { q: 'Ce parte de vorbire este „aleargă"?', o: ['substantiv', 'verb', 'adjectiv', 'pronume'], c: 1, e: '„aleargă" arată o acțiune, deci este un verb.' },
      { q: 'În „Câinele latră", care este substantivul?', o: ['latră', 'câinele', 'și', 'un'], c: 1, e: '„câinele" este ființa despre care vorbim, deci este substantiv.' },
      { q: 'Care cuvânt este adjectiv?', o: ['frumos', 'carte', 'aleargă', 'el'], c: 0, e: '„frumos" arată o însușire, deci este adjectiv.' },
      { q: '„Eu (a merge) ieri la școală." Forma corectă este:', o: ['am mers', 'am merse', 'oi merge', 'merg'], c: 0, e: 'Trecutul lui „a merge" la persoana I este „am mers".' },
      { q: 'Care este pluralul cuvântului „copil"?', o: ['copii', 'copiii', 'copiluri', 'copile'], c: 0, e: 'Pluralul lui „copil" este „copii".' },
      { q: 'Care cuvânt este sinonim cu „vesel"?', o: ['trist', 'bucuros', 'supărat', 'liniștit'], c: 1, e: '„Bucuros" înseamnă același lucru cu „vesel".' }
    ],
    4: [
      { q: 'Care este subiectul din propoziția „Maria citește"?', o: ['citește', 'Maria', 'o', 'poveste'], c: 1, e: '„Maria" face acțiunea, deci este subiectul.' },
      { q: 'Care este predicatul din „Elevul scrie"?', o: ['Elevul', 'scrie', 'tema', 'în'], c: 1, e: '„scrie" este acțiunea (verbul), deci predicatul.' },
      { q: 'Care cuvânt este pronume?', o: ['frumos', 'el', 'aleargă', 'floare'], c: 1, e: '„el" ține locul unui nume, deci este pronume.' },
      { q: 'Care este opusul cuvântului „harnic"?', o: ['silitor', 'lenes', 'viteaz', 'blând'], c: 1, e: 'Opusul lui „harnic" (care muncește mult) este „leneș".' },
      { q: 'Care propoziție este scrisă corect?', o: ['Eu sa dus.', 'Eu s-a dus.', 'Eu s-au dus.', 'Eu m-am dus.'], c: 3, e: 'Corect este „Eu m-am dus." (folosim „m-am", nu „sa / s-a / s-au").' },
      { q: '„a alerga" este un…', o: ['substantiv', 'verb', 'adjectiv', 'pronume'], c: 1, e: '„a alerga" arată o acțiune, deci este verb.' }
    ]
  };

  // construiește o întrebare cu răspunsul corect marcat după amestecare
  function mk(q, options, correctValue, explain) {
    const o = shuffle(options);
    return { q: q, o: o, c: o.indexOf(correctValue), e: explain || '' };
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

    // 1) care este litera
    qs.push(mk('Care este litera „' + letter + '" ?', [letter, other[0], other[1], other[2]], letter,
      'Litera „' + letter + '" este un sunet din alfabetul românesc.'));

    // 2) care cuvânt conține litera
    qs.push(mk('Care cuvânt conține litera „' + letter + '" ?', [first, distractors[0], distractors[1], distractors[2]], first,
      'Cuvântul „' + first + '" conține litera „' + letter + '".'));

    // 3) început sau apariții
    if (first.charAt(0).toLowerCase() === lower) {
      qs.push(mk('Cu ce literă începe cuvântul „' + first + '" ?', [letter, other[0], other[1], other[2]], letter,
        '„' + first + '" începe cu litera „' + letter + '".'));
    } else {
      const cnt = countChar(first, lower);
      qs.push(mk('De câte ori apare litera „' + letter + '" în „' + first + '" ?',
        shuffle([String(cnt), String(cnt + 1), String(Math.max(1, cnt - 1)), String(cnt + 2)]),
        String(cnt),
        'Litera „' + letter + '" apare de ' + cnt + ' ori în „' + first + '".'));
    }

    // 4) câte litere are
    const len = first.length;
    qs.push(mk('Câte litere are cuvântul „' + first + '" ?',
      [String(len), String(len + 1), String(Math.max(1, len - 1)), String(len + 2)], String(len),
      '„' + first + '" are ' + len + ' litere: ' + first.split('').join('-') + '.'));

    // 5) care NU conține litera
    qs.push(mk('Care cuvânt NU conține litera „' + letter + '" ?',
      [distractors[0], first, words[1][0], words[2][0]], distractors[0],
      '„' + distractors[0] + '" nu conține litera „' + letter + '".'));

    // 6) întrebare generală (stabilă per lecție)
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
  const EMOJI_NAME = { '🍎': 'mere', '⭐': 'stele', '🐤': 'pui', '🌼': 'flori', '🎈': 'baloane', '🍪': 'prăjituri', '🐟': 'pești', '⚽': 'mingi' };

  function numaraActivity(cls) {
    const cap = cls === 0 ? 6 : cls === 1 ? 10 : cls === 2 ? 20 : 50;
    const emoji = ['🍎', '⭐', '🐤', '🌼', '🎈', '🍪', '🐟', '⚽'];
    const rounds = [];
    for (let i = 0; i < 7; i++) {
      const n = 1 + Math.floor(Math.random() * cap);
      const e = emoji[Math.floor(Math.random() * emoji.length)];
      rounds.push({ n: n, e: e, ans: n, why: 'Sunt exact ' + n + ' ' + EMOJI_NAME[e] + ' în imagine. Numără-le încă o dată, unul câte unul.' });
    }
    return { type: 'numara', rounds: rounds };
  }

  // ---------- flash aritmetic (clasele 1–4) ----------
  function flashActivity(cls) {
    const rounds = [];
    for (let i = 0; i < 7; i++) {
      const r = arithFor(cls);
      r.why = explainArith(r);
      rounds.push(r);
    }
    return { type: 'flash', rounds: rounds };
  }

  function explainArith(r) {
    if (r.op === '+') return r.a + ' + ' + r.b + ' = ' + r.ans + '. Pornim de la ' + r.a + ' și adunăm ' + r.b + '.';
    if (r.op === '-') return r.a + ' − ' + r.b + ' = ' + r.ans + '. Luăm ' + r.b + ' din ' + r.a + ' și rămân ' + r.ans + '.';
    if (r.op === '×') return r.a + ' × ' + r.b + ' = ' + r.ans + ' (' + r.a + ' adunat de ' + r.b + ' ori).';
    return r.a + ' : ' + r.b + ' = ' + r.ans + ', pentru că ' + r.ans + ' × ' + r.b + ' = ' + r.a + '.';
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

  // ---------- Indicații specifice pentru limba română (clasele 3–4) ----------
  const RO_TIPS = {
    3: [
      'La română, clasa a III-a aduce părțile de vorbire: joacă „ghicește ce e" (substantiv = ființă/lucru, verb = acțiune, adjectiv = însușire).',
      'Citiți împreună un text scurt, apoi puneți 2–3 întrebări simple: „cine?", „ce a făcut?", „unde?".',
      'Încurajează-l să scrie zilnic 2–3 propoziții despre ce a trăit — fără să insistăm pe greșeli.'
    ],
    4: [
      'Clasa a IV-a pregătește compunerile: faceți împreună un „plan de idei" înainte de a scrie (cine, ce, unde, când).',
      'La ortograme, exersați cu exemple din vorbirea de zi cu zi, nu doar din manual.',
      'Lasă-l să-și recitească textul cu voce tare — își prinde singur multe greșeli.'
    ]
  };

  // ---------- activitate „intrus" (găsește ce nu se potrivește) ----------
  const INTRUS_SETS = [
    { items: [['măr', '🍎'], ['banană', '🍌'], ['pară', '🍐'], ['scaun', '🪑']], odd: 3, hint: 'fructele' },
    { items: [['pisică', '🐱'], ['câine', '🐶'], ['iepure', '🐰'], ['avion', '✈️']], odd: 3, hint: 'animalele' },
    { items: [['roșu', '🔴'], ['albastru', '🔵'], ['verde', '🟢'], ['minge', '⚽']], odd: 3, hint: 'culorile' },
    { items: [['floare', '🌸'], ['copac', '🌳'], ['iarbă', '🌱'], ['telefon', '📱']], odd: 3, hint: 'plantele' },
    { items: [['iarnă', '❄️'], ['vară', '☀️'], ['toamnă', '🍂'], ['carte', '📖']], odd: 3, hint: 'anotimpurile' },
    { items: [['tren', '🚂'], ['mașină', '🚗'], ['autobuz', '🚌'], ['pantof', '👟']], odd: 3, hint: 'mijloacele de transport' },
    { items: [['carte', '📖'], ['caiet', '📓'], ['stilou', '🖊️'], ['banană', '🍌']], odd: 3, hint: 'lucrurile de școală' },
    { items: [['cămașă', '👔'], ['pantaloni', '👖'], ['rochie', '👗'], ['bomboană', '🍬']], odd: 3, hint: 'hainele' },
    { items: [['pâine', '🍞'], ['lapte', '🥛'], ['brânză', '🧀'], ['păpușă', '🪆']], odd: 3, hint: 'alimentele' }
  ];

  function intrusActivity() {
    const sets = shuffle(INTRUS_SETS).slice(0, 6);
    return {
      type: 'intrus',
      rounds: sets.map(function (s) {
        const oddName = s.items[s.odd][0];
        const shuffled = shuffle(s.items);
        return {
          items: shuffled,
          odd: shuffled.indexOf(s.items[s.odd]),
          hint: s.hint,
          why: '„' + oddName + '" este intrusul, pentru că toate celelalte sunt ' + s.hint + '.'
        };
      })
    };
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
        target: words.slice(0, 4),
        distractors: pickDistractors(letter, 3),
        emoji: words[0][1]
      };
    } else if (n === 0) {
      parent = TIPS_BASE[0];
      quiz = pickQuiz(0, 6);
      activity = numaraActivity(0);
    } else if (n <= 2) {
      parent = TIPS_BASE[n];
      quiz = mixQuiz(n, 8);
      activity = numaraActivity(n);
    } else {
      const disc = (item.d || '').toLowerCase();
      if (disc.indexOf('rom') === 0) {
        parent = (RO_TIPS[n] || []).concat(TIPS_BASE[n].slice(0, 1));
        quiz = pickFrom(RO_BANK[n], 6);
        activity = intrusActivity();
      } else if (disc.indexOf('mat') === 0) {
        parent = TIPS_BASE[n];
        quiz = pickQuiz(n, 8);
        activity = flashActivity(n);
      } else {
        parent = TIPS_BASE[n];
        quiz = pickQuiz(n, 8);
        activity = numaraActivity(n);
      }
    }

    return { parent: parent, quiz: quiz, activity: activity, letter: letter };
  }

  function pickQuiz(cls, k) {
    return shuffle(QUIZ_BANK[cls].slice()).slice(0, k);
  }

  function pickFrom(bank, k) {
    return shuffle(bank.slice()).slice(0, k);
  }

  // quiz mixt (matematică + română) pentru unitățile tematice integrate (clasele 1–2)
  function mixQuiz(cls, k) {
    const halfMath = Math.ceil(k / 2);
    const halfRo = k - halfMath;
    const math = shuffle(QUIZ_BANK[cls].slice()).slice(0, halfMath);
    const ro = shuffle((RO_BANK[cls] || []).slice()).slice(0, halfRo);
    return shuffle(math.concat(ro));
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
