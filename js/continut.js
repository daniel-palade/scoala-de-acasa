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

  // ============================================================
  //  GENERARE ZILNICĂ — exerciții + test unic pentru fiecare zi
  //  Aceeași zi → același conținut; zi diferită → conținut nou.
  // ============================================================

  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function irand(rng, lo, hi) { return lo + Math.floor(rng() * (hi - lo + 1)); }
  function spick(rng, arr) { return arr[Math.floor(rng() * arr.length)]; }
  function srng(arr, rng) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function numOpts(ans, rng, min, max) {
    const s = [ans];
    let g = 0;
    while (s.length < 4 && g++ < 120) {
      const d = irand(rng, 1, 9);
      const v = ans + (rng() < 0.5 ? -d : d);
      if (v < min || v > max || s.indexOf(v) !== -1) continue;
      s.push(v);
    }
    let k = 1;
    while (s.length < 4 && k < 40) { const v = ans + k; if (v <= max && s.indexOf(v) === -1) s.push(v); k++; }
    return srng(s, rng).map(String);
  }
  function wordOpts(correct, pool, rng) {
    const others = pool.filter(function (w) { return w !== correct; });
    const picked = srng(others, rng).slice(0, 3);
    return srng([correct].concat(picked), rng);
  }
  function fin(q, opts, corr, e) { return { q: q, o: opts, c: opts.indexOf(corr), e: e }; }

  function todayKey() {
    const d = new Date();
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }

  // ---------- Bănci pentru română ----------
  const RO_WORDS = [
    ['casă', 'C', 2], ['măr', 'M', 1], ['floare', 'F', 2], ['carte', 'C', 2],
    ['avion', 'A', 2], ['tren', 'T', 1], ['pisică', 'P', 3], ['soare', 'S', 2],
    ['copil', 'C', 2], ['mamă', 'M', 2], ['stea', 'S', 1], ['urs', 'U', 1]
  ];
  const RO_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V'];
  const RO_ANT = [
    ['mare', 'mic'], ['înalt', 'scund'], ['cald', 'rece'], ['vesel', 'trist'],
    ['harnic', 'leneș'], ['rapid', 'lent'], ['luminos', 'întunecat']
  ];
  const RO_RIME = [
    ['soare', 'floare'], ['masă', 'casă'], ['carte', 'noapte'], ['stea', 'cafea'], ['lună', 'cunună']
  ];
  const RO_VORBIRE = [
    ['aleargă', 'verb'], ['frumos', 'adjectiv'], ['copil', 'substantiv'], ['el', 'pronume'],
    ['carte', 'substantiv'], ['verde', 'adjectiv'], ['citește', 'verb']
  ];

  // ---------- Bancă științe (clasele 3–4) ----------
  const SC_BANK = [
    { q: 'Care este planeta cea mai apropiată de Soare?', o: ['Venus', 'Marte', 'Mercur', 'Jupiter'], c: 2, e: 'Mercur este planeta cea mai apropiată de Soare.' },
    { q: 'Ce ne dă lumină și căldură pe Pământ?', o: ['Luna', 'Soarele', 'Stelele', 'Cometele'], c: 1, e: 'Soarele ne dă lumină și căldură.' },
    { q: 'Care organ pompează sângele în corp?', o: ['Plămânii', 'Inima', 'Creierul', 'Stomacul'], c: 1, e: 'Inima pompează sângele în tot corpul.' },
    { q: 'Care este satelitul natural al Pământului?', o: ['Soarele', 'Luna', 'Marte', 'Venus'], c: 1, e: 'Luna este satelitul natural al Pământului.' },
    { q: 'Ce atrage un magnet?', o: ['Lemnul', 'Plasticul', 'Fierul', 'Hârtia'], c: 2, e: 'Magnetul atrage fierul și alte metale.' },
    { q: 'Din ce se face hârtia?', o: ['Fier', 'Lemn', 'Plastic', 'Sticlă'], c: 1, e: 'Hârtia se obține din lemn (pastă de lemn).' },
    { q: 'Cum se numește procesul prin care plantele produc hrană cu ajutorul Soarelui?', o: ['Respirație', 'Fotosinteză', 'Digestie', 'Evaporare'], c: 1, e: 'Fotosinteza este procesul prin care plantele produc hrană.' },
    { q: 'Unde trăiesc pinguinii?', o: ['La ecuator', 'La poli', 'În deșert', 'În pădurile tropicale'], c: 1, e: 'Pinguinii trăiesc în zonele reci, la poli.' },
    { q: 'Care animal respiră prin branhii?', o: ['Peștele', 'Pisica', 'Vaca', 'Găina'], c: 0, e: 'Peștii respiră prin branhii.' },
    { q: 'Ce strat face pământul fertil?', o: ['Nisipul', 'Vântul', 'Apa', 'Humusul'], c: 3, e: 'Humusul face pământul fertil.' },
    { q: 'Care este cel mai mare mamifer din lume?', o: ['Elefantul', 'Balena albastră', 'Rechinul', 'Girafa'], c: 1, e: 'Balena albastră este cel mai mare mamifer.' },
    { q: 'Ce măsurăm cu termometrul?', o: ['Temperatura', 'Lungimea', 'Greutatea', 'Volumul'], c: 0, e: 'Termometrul măsoară temperatura.' },
    { q: 'Cu ce organ respirăm?', o: ['Inima', 'Plămânii', 'Stomacul', 'Rinichii'], c: 1, e: 'Respirăm cu plămânii.' },
    { q: 'Care planetă este numită „Planeta Roșie"?', o: ['Venus', 'Jupiter', 'Marte', 'Saturn'], c: 2, e: 'Marte este numită „Planeta Roșie" datorită culorii sale.' },
    { q: 'Ce se obține când apa îngheață?', o: ['Abur', 'Gheață', 'Ploaie', 'Rouă'], c: 1, e: 'Când apa îngheață se transformă în gheață.' },
    { q: 'Cu ce organ auzim?', o: ['Ochii', 'Urechea', 'Nasul', 'Limba'], c: 1, e: 'Auzim cu ajutorul urechii.' }
  ];
  const SC_FACTS = [
    ['Câte zile are o săptămână?', 7, 'O săptămână are 7 zile.'],
    ['Câte luni are un an?', 12, 'Un an are 12 luni.'],
    ['Câte zile are un an obișnuit?', 365, 'Un an obișnuit are 365 de zile.'],
    ['Câte ore are o zi?', 24, 'O zi are 24 de ore.'],
    ['Câte minute are o oră?', 60, 'O oră are 60 de minute.'],
    ['Câte planete sunt în Sistemul Solar?', 8, 'Sistemul Solar are 8 planete.'],
    ['Câte picioare are o insectă?', 6, 'Insectele au 6 picioare.']
  ];

  // ---------- Generatori de întrebări ----------
  function mathQ(cls, rng) {
    const t = Math.floor(rng() * 6);
    if (cls === 1) {
      if (t === 0) { let a = irand(rng, 2, 20), b = irand(rng, 1, 9); const ans = a + b; return fin('Cât face ' + a + ' + ' + b + '?', numOpts(ans, rng, 0, 40), String(ans), a + ' + ' + b + ' = ' + ans + '.'); }
      if (t === 1) { let a = irand(rng, 3, 20), b = irand(rng, 1, a); const ans = a - b; return fin('Cât face ' + a + ' − ' + b + '?', numOpts(ans, rng, 0, 40), String(ans), a + ' − ' + b + ' = ' + ans + '.'); }
      if (t === 2) { let a = irand(rng, 1, 99), b = irand(rng, 1, 99); if (a === b) b = a + 1; const big = Math.max(a, b), small = Math.min(a, b); return fin('Care număr este mai mare: ' + a + ' sau ' + b + '?', numOpts(big, rng, 0, 100), String(big), big + ' este mai mare decât ' + small + '.'); }
      if (t === 3) { let a = irand(rng, 1, 98); const ans = a + 1; return fin('Care număr urmează după ' + a + '?', numOpts(ans, rng, 0, 100), String(ans), 'După ' + a + ' vine ' + ans + '.'); }
      if (t === 4) { let a = irand(rng, 1, 9), b = irand(rng, 1, 9), c = irand(rng, 1, 9); const ans = a + b + c; return fin('Cât face ' + a + ' + ' + b + ' + ' + c + '?', numOpts(ans, rng, 0, 30), String(ans), a + ' + ' + b + ' + ' + c + ' = ' + ans + '.'); }
      let a = irand(rng, 2, 99); const ans = a - 1; return fin('Care număr este înaintea lui ' + a + '?', numOpts(ans, rng, 0, 100), String(ans), 'Înaintea lui ' + a + ' vine ' + ans + '.');
    }
    if (cls === 2) {
      if (t === 0) { let a = irand(rng, 10, 99), b = irand(rng, 2, 40); const ans = a + b; return fin('Cât face ' + a + ' + ' + b + '?', numOpts(ans, rng, 0, 200), String(ans), a + ' + ' + b + ' = ' + ans + '.'); }
      if (t === 1) { let a = irand(rng, 20, 99), b = irand(rng, 2, a); const ans = a - b; return fin('Cât face ' + a + ' − ' + b + '?', numOpts(ans, rng, 0, 120), String(ans), a + ' − ' + b + ' = ' + ans + '.'); }
      if (t === 2) { let a = irand(rng, 100, 500), b = irand(rng, 100, 500); if (a === b) b = a + 10; const big = Math.max(a, b), small = Math.min(a, b); return fin('Care număr este mai mare: ' + a + ' sau ' + b + '?', numOpts(big, rng, 0, 600), String(big), big + ' este mai mare decât ' + small + '.'); }
      if (t === 3) { let a = irand(rng, 2, 50) * 2; const ans = a / 2; return fin('Cât este jumătate din ' + a + '?', numOpts(ans, rng, 0, 60), String(ans), 'Jumătate din ' + a + ' este ' + ans + ' (' + a + ' : 2 = ' + ans + ').'); }
      if (t === 4) { let a = irand(rng, 2, 50); const ans = a * 2; return fin('Cât este dublul lui ' + a + '?', numOpts(ans, rng, 0, 110), String(ans), 'Dublul lui ' + a + ' este ' + ans + ' (' + a + ' × 2 = ' + ans + ').'); }
      let a = irand(rng, 1, 9) * 10; const ans = a + 10; return fin('Numără din 10 în 10: după ' + a + ' vine...', numOpts(ans, rng, 0, 120), String(ans), 'Numărând din 10 în 10, după ' + a + ' vine ' + ans + '.');
    }
    if (cls === 3) {
      if (t === 0) { let a = irand(rng, 3, 10), b = irand(rng, 3, 10); const ans = a * b; return fin('Cât face ' + a + ' × ' + b + '?', numOpts(ans, rng, 0, 110), String(ans), a + ' × ' + b + ' = ' + ans + '.'); }
      if (t === 1) { let b = irand(rng, 3, 9), ans = irand(rng, 3, 9); let a = ans * b; return fin('Cât face ' + a + ' : ' + b + '?', numOpts(ans, rng, 0, 20), String(ans), a + ' : ' + b + ' = ' + ans + ', pentru că ' + ans + ' × ' + b + ' = ' + a + '.'); }
      if (t === 2) { let a = irand(rng, 100, 999), b = irand(rng, 10, 999); const ans = a + b; return fin('Cât face ' + a + ' + ' + b + '?', numOpts(ans, rng, 0, 2000), String(ans), a + ' + ' + b + ' = ' + ans + '.'); }
      if (t === 3) { let a = irand(rng, 200, 999), b = irand(rng, 20, 199); const ans = a - b; return fin('Cât face ' + a + ' − ' + b + '?', numOpts(ans, rng, 0, 1000), String(ans), a + ' − ' + b + ' = ' + ans + '.'); }
      if (t === 4) { let a = irand(rng, 2, 99); const m = rng() < 0.5 ? 10 : 100; const ans = a * m; return fin('Cât face ' + a + ' × ' + m + '?', numOpts(ans, rng, 0, 10000), String(ans), 'Pentru a înmulți cu ' + m + ' adăugăm un zero (sau două) la ' + a + '.'); }
      let a = irand(rng, 2, 9); const ans = a * 1000; return fin('Cât face ' + a + ' × 1000?', numOpts(ans, rng, 0, 10000), String(ans), a + ' × 1000 = ' + ans + '.');
    }
    if (t === 0) { let a = irand(rng, 1000, 99999), b = irand(rng, 100, 9999); const ans = a + b; return fin('Cât face ' + a + ' + ' + b + '?', numOpts(ans, rng, 0, 200000), String(ans), a + ' + ' + b + ' = ' + ans + '.'); }
    if (t === 1) { let a = irand(rng, 5000, 99999), b = irand(rng, 100, 4999); const ans = a - b; return fin('Cât face ' + a + ' − ' + b + '?', numOpts(ans, rng, 0, 120000), String(ans), a + ' − ' + b + ' = ' + ans + '.'); }
    if (t === 2) { let a = irand(rng, 11, 99), b = irand(rng, 2, 12); const ans = a * b; return fin('Cât face ' + a + ' × ' + b + '?', numOpts(ans, rng, 0, 2000), String(ans), a + ' × ' + b + ' = ' + ans + '.'); }
    if (t === 3) { let b = irand(rng, 3, 9), ans = irand(rng, 10, 99); let a = ans * b; return fin('Cât face ' + a + ' : ' + b + '?', numOpts(ans, rng, 0, 110), String(ans), a + ' : ' + b + ' = ' + ans + '.'); }
    if (t === 4) { let k = irand(rng, 5, 25), n = k * 4; const ans = n * 3 / 4; return fin('Cât reprezintă 3/4 din ' + n + '?', numOpts(ans, rng, 0, 120), String(ans), '3/4 din ' + n + ' = ' + n + ' : 4 = ' + (n / 4) + ', apoi × 3 = ' + ans + '.'); }
    let l = irand(rng, 3, 25); const ans = l * 4; return fin('Cât este perimetrul unui pătrat cu latura de ' + l + ' cm?', numOpts(ans, rng, 0, 120), String(ans), 'Perimetrul pătratului = 4 × ' + l + ' = ' + ans + ' cm.');
  }

  function roQ(cls, rng) {
    const maxT = cls === 1 ? 3 : (cls === 2 ? 5 : 6);
    const t = Math.floor(rng() * maxT);
    if (t === 0) {
      const w = spick(rng, RO_WORDS);
      const opts = wordOpts(w[1], RO_LETTERS, rng);
      return fin('Cu ce literă începe cuvântul „' + w[0] + '"?', opts, w[1], '„' + w[0] + '" începe cu litera „' + w[1] + '".');
    }
    if (t === 1) {
      const w = spick(rng, RO_WORDS);
      const len = w[0].length;
      return fin('Câte litere are cuvântul „' + w[0] + '"?', numOpts(len, rng, 1, 10), String(len), '„' + w[0] + '" are ' + len + ' litere.');
    }
    if (t === 2) {
      const w = spick(rng, RO_WORDS);
      const sil = w[2];
      return fin('Câte silabe are cuvântul „' + w[0] + '"?', numOpts(sil, rng, 1, 4), String(sil), '„' + w[0] + '" are ' + sil + ' silabe.');
    }
    if (t === 3) {
      const p = spick(rng, RO_ANT);
      const opts = wordOpts(p[1], RO_ANT.map(function (x) { return x[1]; }), rng);
      return fin('Care este opusul cuvântului „' + p[0] + '"?', opts, p[1], 'Opusul lui „' + p[0] + '" este „' + p[1] + '".');
    }
    if (t === 4) {
      const p = spick(rng, RO_RIME);
      const opts = wordOpts(p[1], RO_RIME.map(function (x) { return x[1]; }), rng);
      return fin('Care cuvânt rimează cu „' + p[0] + '"?', opts, p[1], '„' + p[1] + '" rimează cu „' + p[0] + '".');
    }
    const p = spick(rng, RO_VORBIRE);
    const tipos = srng(['substantiv', 'verb', 'adjectiv', 'pronume'], rng);
    const art = p[1] === 'verb' ? 'un verb' : p[1] === 'adjectiv' ? 'un adjectiv' : p[1] === 'pronume' ? 'un pronume' : 'un substantiv';
    return fin('Ce parte de vorbire este „' + p[0] + '"?', tipos, p[1], '„' + p[0] + '" este ' + art + '.');
  }

  function letterQ(letter, rng) {
    const words = LITERA[letter];
    const lower = letter.toLowerCase();
    const t = Math.floor(rng() * 6);
    if (t === 0) {
      const letters = wordOpts(letter, ALL_LETTERS, rng);
      return fin('Care este litera „' + letter + '"?', letters, letter, 'Litera „' + letter + '" este un sunet din alfabetul românesc.');
    }
    if (t === 1) {
      const w = spick(rng, words)[0];
      const l0 = w.charAt(0).toUpperCase();
      const letters = wordOpts(l0, ALL_LETTERS, rng);
      return fin('Cu ce literă începe cuvântul „' + w + '"?', letters, l0, '„' + w + '" începe cu litera „' + l0 + '".');
    }
    if (t === 2) {
      const w = spick(rng, words)[0];
      const len = w.length;
      return fin('Câte litere are cuvântul „' + w + '"?', numOpts(len, rng, 1, 12), String(len), '„' + w + '" are ' + len + ' litere: ' + w.split('').join('-') + '.');
    }
    if (t === 3) {
      const w = spick(rng, words)[0];
      const cnt = countChar(w, lower);
      return fin('De câte ori apare litera „' + letter + '" în cuvântul „' + w + '"?', numOpts(cnt, rng, 0, 4), String(cnt), 'Litera „' + letter + '" apare de ' + cnt + ' ori în „' + w + '".');
    }
    if (t === 4) {
      const yes = spick(rng, words)[0];
      const pool = pickDistractors(letter, 4);
      const opts = wordOpts(yes, pool, rng);
      return fin('Care cuvânt conține litera „' + letter + '"?', opts, yes, '„' + yes + '" conține litera „' + letter + '".');
    }
    return spick(rng, QUIZ_BANK[0]);
  }

  function countQ(rng) {
    const emoji = ['🍎', '⭐', '🐤', '🌼', '🎈', '🍪', '🐟', '⚽'];
    const e = spick(rng, emoji);
    const n = irand(rng, 2, 9);
    const shown = new Array(n).fill(e).join('');
    return fin('Câte obiecte sunt? ' + shown, numOpts(n, rng, 1, 12), String(n), 'Sunt exact ' + n + ' obiecte: numără-le unul câte unul.');
  }

  function scienceQ(rng) {
    if (rng() < 0.55) return spick(rng, SC_BANK);
    const f = spick(rng, SC_FACTS);
    return fin(f[0], numOpts(f[1], rng, 0, 400), String(f[1]), f[2]);
  }

  // ---------- helperi suplimentari ----------
  function digitAt(num, place) { return Math.floor(num / place) % 10; }
  function hasAny(str, list) { for (let i = 0; i < list.length; i++) { if (str.indexOf(list[i]) >= 0) return true; } return false; }
  function cmpSet(big, small, rng) {
    const s = [big, small];
    let g = 0;
    while (s.length < 4 && g++ < 100) {
      const d = irand(rng, 1, 999);
      const v = rng() < 0.5 ? big + d : Math.max(0, small - d);
      if (s.indexOf(v) === -1) s.push(v);
    }
    let k = 1;
    while (s.length < 4) { const v = big + k * 10; if (s.indexOf(v) === -1) s.push(v); k++; }
    return srng(s, rng).map(String);
  }

  // ============================================================
  //  TEME — potrivirea lecției cu subiectul ei (aprofundare)
  // ============================================================
  function topicOf(n, item) {
    const d = ((item.d || '') + '').toLowerCase();
    const tl = ((item.t || '') + '').toLowerCase();
    if (d.indexOf('mat') === 0) {
      if (tl.indexOf('numere') >= 0) return 'numere';
      if (tl.indexOf('adunare') >= 0 || tl.indexOf('scădere') >= 0) return 'adunare';
      if (tl.indexOf('înmulțire') >= 0) return 'inmultire';
      if (tl.indexOf('împărțire') >= 0) return 'impartire';
      if (tl.indexOf('fracț') >= 0) return 'fractii';
      if (tl.indexOf('geometrie') >= 0) return 'geometrie';
      if (tl.indexOf('măsur') >= 0) return 'masura';
      if (tl.indexOf('problem') >= 0) return 'probleme';
      return 'recap-mate';
    }
    if (d.indexOf('ști') === 0 || d.indexOf('sti') === 0) {
      if (tl.indexOf('pământ') >= 0 || tl.indexOf('păm') >= 0) return 'pamant';
      if (tl.indexOf('fizic') >= 0) return 'fizica';
      if (tl.indexOf('vie') >= 0 || tl.indexOf('viaț') >= 0) return 'lumea-vie';
      return 'stiinte';
    }
    if (n <= 2) {
      if (hasAny(tl, ['animal'])) return 'animale';
      if (hasAny(tl, ['plant', 'flor'])) return 'plante';
      if (hasAny(tl, ['toamn', 'iarn', 'primăvar', 'vara', 'vară', 'verii'])) return 'anotimpuri';
      if (hasAny(tl, ['stea', 'stel', 'planet', 'astr'])) return 'spatiu';
    }
    return null;
  }

  // ---------- NUMERE NATURALE (ordine, comparație, cifre, rotunjire) ----------
  function numbersQ(n, rng) {
    const max = n === 4 ? 1000000 : 10000;
    const t = Math.floor(rng() * 6);
    if (t === 0) {
      let a = irand(rng, 100, max), b = irand(rng, 100, max);
      if (a === b) b = a + irand(rng, 1, 999);
      const big = Math.max(a, b), small = Math.min(a, b);
      return fin('Care este cel mai mare număr dintre ' + a + ' și ' + b + '?', cmpSet(big, small, rng), String(big), big + ' este mai mare decât ' + small + '. Comparăm întâi numărul de cifre, apoi cifră cu cifră, de la stânga.');
    }
    if (t === 1) {
      const a = irand(rng, 10, max - 10);
      return fin('Care este succesorul lui ' + a + '?', numOpts(a + 1, rng, 0, max), String(a + 1), 'Succesorul lui ' + a + ' este ' + (a + 1) + ' (adăugăm 1).');
    }
    if (t === 2) {
      const a = irand(rng, 100, max);
      return fin('Care este predecesorul lui ' + a + '?', numOpts(a - 1, rng, 0, max), String(a - 1), 'Predecesorul lui ' + a + ' este ' + (a - 1) + ' (scădem 1).');
    }
    if (t === 3) {
      const a = irand(rng, 1000, n === 4 ? 999999 : 9999);
      const p = spick(rng, [[1000, 'miilor'], [100, 'sutelor'], [10, 'zecilor'], [1, 'unităților']]);
      const digit = digitAt(a, p[0]);
      return fin('Ce cifră se află pe locul ' + p[1] + ' în numărul ' + a + '?', numOpts(digit, rng, 0, 9), String(digit), 'În numărul ' + a + ', cifra de pe locul ' + p[1] + ' este ' + digit + '.');
    }
    if (t === 4) {
      const unit = spick(rng, [10, 100, 1000]);
      const a = irand(rng, 500, max);
      const ans = Math.round(a / unit) * unit;
      const nume = unit === 10 ? 'zeci' : unit === 100 ? 'sute' : 'mii';
      return fin('Rotunjește numărul ' + a + ' la ' + nume + '.', numOpts(ans, rng, 0, max), String(ans), 'Rotunjim ' + a + ' la cea mai apropiată valoare de ' + unit + ': ' + ans + '.');
    }
    const mii = irand(rng, 1, n === 4 ? 999 : 9);
    const sute = irand(rng, 0, 9), zeci = irand(rng, 0, 9), unitati = irand(rng, 0, 9);
    const ans = mii * 1000 + sute * 100 + zeci * 10 + unitati;
    return fin('Ce număr se formează din ' + mii + ' mii, ' + sute + ' sute, ' + zeci + ' zeci și ' + unitati + ' unități?', numOpts(ans, rng, 0, max), String(ans), 'Compunem: ' + mii + '×1000 + ' + sute + '×100 + ' + zeci + '×10 + ' + unitati + ' = ' + ans + '.');
  }

  // ---------- ADUNARE / SCĂDERE ----------
  function addSubQ(n, rng) {
    const max = n === 4 ? 1000000 : 10000;
    const t = Math.floor(rng() * 4);
    if (t === 0) {
      const a = irand(rng, 1000, max - 1000), b = irand(rng, 100, max - a);
      const ans = a + b;
      return fin('Cât face ' + a + ' + ' + b + '?', numOpts(ans, rng, 0, max), String(ans), a + ' + ' + b + ' = ' + ans + '.');
    }
    if (t === 1) {
      const a = irand(rng, 1000, max), b = irand(rng, 100, a);
      const ans = a - b;
      return fin('Cât face ' + a + ' − ' + b + '?', numOpts(ans, rng, 0, max), String(ans), a + ' − ' + b + ' = ' + ans + '.');
    }
    if (t === 2) {
      const hi = n === 4 ? 200000 : 3000;
      const a = irand(rng, 100, hi), b = irand(rng, 100, hi), c = irand(rng, 10, hi);
      const ans = a + b + c;
      return fin('Cât face ' + a + ' + ' + b + ' + ' + c + '?', numOpts(ans, rng, 0, max), String(ans), a + ' + ' + b + ' + ' + c + ' = ' + ans + '.');
    }
    const y = irand(rng, 100, max - 2000), x = irand(rng, 10, 1999);
    const ans = y + x;
    return fin('Care este numărul cu ' + x + ' mai mare decât ' + y + '?', numOpts(ans, rng, 0, max), String(ans), 'Adunăm: ' + y + ' + ' + x + ' = ' + ans + '.');
  }

  // ---------- ÎNMULȚIRE ----------
  function multQ(n, rng) {
    const t = Math.floor(rng() * 4);
    if (t === 0) {
      const a = irand(rng, 3, 9), b = irand(rng, 3, 9);
      const ans = a * b;
      return fin('Cât face ' + a + ' × ' + b + '?', numOpts(ans, rng, 0, 100), String(ans), a + ' × ' + b + ' = ' + ans + '.');
    }
    if (t === 1) {
      const a = irand(rng, 5, n === 4 ? 500 : 50), k = irand(rng, 2, 4);
      const ans = a * k;
      const name = k === 2 ? 'dublul' : k === 3 ? 'triplul' : 'împătritul';
      return fin('Cât este ' + name + ' lui ' + a + '?', numOpts(ans, rng, 0, ans + 500), String(ans), name + ' lui ' + a + ' = ' + a + ' × ' + k + ' = ' + ans + '.');
    }
    if (t === 2) {
      const a = irand(rng, 2, 99), m = spick(rng, [10, 100]);
      const ans = a * m;
      return fin('Cât face ' + a + ' × ' + m + '?', numOpts(ans, rng, 0, ans + 10000), String(ans), 'Înmulțind cu ' + m + ' adăugăm un zero la ' + a + ': ' + ans + '.');
    }
    const a = irand(rng, 10, 99), b = irand(rng, 10, 99);
    const ans = a * b;
    return fin('Cât face ' + a + ' × ' + b + '?', numOpts(ans, rng, 0, 10000), String(ans), a + ' × ' + b + ' = ' + ans + '.');
  }

  // ---------- ÎMPĂRȚIRE ----------
  function divQ(n, rng) {
    const t = Math.floor(rng() * 3);
    if (t === 0) {
      const b = irand(rng, 3, 9), q = irand(rng, 3, 9);
      const a = b * q;
      return fin('Cât face ' + a + ' : ' + b + '?', numOpts(q, rng, 0, 20), String(q), a + ' : ' + b + ' = ' + q + ', pentru că ' + q + ' × ' + b + ' = ' + a + '.');
    }
    if (t === 1) {
      const f = spick(rng, [2, 4]);
      const a = irand(rng, 2, 50) * f;
      const ans = a / f;
      const name = f === 2 ? 'jumătatea' : 'sfertul';
      return fin('Cât este ' + name + ' lui ' + a + '?', numOpts(ans, rng, 0, 100), String(ans), name + ' lui ' + a + ' = ' + a + ' : ' + f + ' = ' + ans + '.');
    }
    const b = irand(rng, 3, n === 4 ? 25 : 10), q = irand(rng, 5, n === 4 ? 200 : 10);
    const a = b * q;
    return fin('Cât face ' + a + ' : ' + b + '?', numOpts(q, rng, 0, n === 4 ? 200 : 15), String(q), a + ' : ' + b + ' = ' + q + '.');
  }

  // ---------- FRACȚII ----------
  const FRAC_EQ = [
    { q: 'Care fracție este egală cu 1/2?', o: ['2/4', '1/3', '2/3', '3/4'], c: 0, e: '1/2 = 2/4, pentru că dublăm și numărătorul și numitorul.' },
    { q: 'Care fracție este egală cu 1/3?', o: ['2/6', '1/2', '3/4', '2/3'], c: 0, e: '1/3 = 2/6.' },
    { q: 'Care fracție este egală cu 1/4?', o: ['2/8', '1/2', '3/4', '2/4'], c: 0, e: '1/4 = 2/8.' },
    { q: 'Care fracție este egală cu 2/4?', o: ['1/2', '1/4', '2/3', '3/4'], c: 0, e: '2/4 = 1/2 (simplificăm cu 2).' },
    { q: 'Care fracție este egală cu 3/6?', o: ['1/2', '1/3', '2/3', '3/4'], c: 0, e: '3/6 = 1/2.' },
    { q: 'Care fracție este egală cu 6/8?', o: ['3/4', '1/2', '2/3', '1/4'], c: 0, e: '6/8 = 3/4.' }
  ];

  function fractionsQ(n, rng) {
    const t = Math.floor(rng() * 5);
    if (t === 0) {
      const a = irand(rng, 2, 50) * 2;
      return fin('Cât este 1/2 din ' + a + '?', numOpts(a / 2, rng, 0, 100), String(a / 2), '1/2 din ' + a + ' = ' + a + ' : 2 = ' + (a / 2) + '.');
    }
    if (t === 1) {
      const a = irand(rng, 2, 25) * 4;
      return fin('Cât este 1/4 din ' + a + '?', numOpts(a / 4, rng, 0, 40), String(a / 4), '1/4 din ' + a + ' = ' + a + ' : 4 = ' + (a / 4) + '.');
    }
    if (t === 2) {
      const k = irand(rng, 2, 10), a = k * 4;
      return fin('Cât reprezintă 3/4 din ' + a + '?', numOpts(k * 3, rng, 0, 50), String(k * 3), '3/4 din ' + a + ' = ' + a + ' : 4 = ' + k + ', apoi × 3 = ' + (k * 3) + '.');
    }
    if (t === 3) {
      const list = [['1/2', 0.5], ['1/4', 0.25], ['1/3', 0.333], ['3/4', 0.75], ['2/3', 0.667], ['1/8', 0.125]];
      const names = list.map(function (x) { return x[0]; });
      let f1 = spick(rng, list), f2 = spick(rng, list);
      if (f1[0] === f2[0]) f2 = list[(list.indexOf(f2) + 1) % list.length];
      const bigger = f1[1] > f2[1] ? f1[0] : f2[0];
      const smaller = f1[0] === bigger ? f2[0] : f1[0];
      return fin('Care fracție este mai mare: ' + f1[0] + ' sau ' + f2[0] + '?', wordOpts(bigger, names, rng), bigger, bigger + ' este mai mare decât ' + smaller + '.');
    }
    return spick(rng, FRAC_EQ);
  }

  // ---------- GEOMETRIE ----------
  const GEO_BANK = [
    { q: 'Câte grade are un unghi drept?', o: ['45', '60', '90', '180'], c: 2, e: 'Un unghi drept are 90 de grade.' },
    { q: 'Ce figură are 4 laturi egale și 4 unghiuri drepte?', o: ['Dreptunghiul', 'Pătratul', 'Triunghiul', 'Cercul'], c: 1, e: 'Pătratul are 4 laturi egale și 4 unghiuri drepte.' },
    { q: 'Cercul…', o: ['are laturi', 'are vârfuri', 'nu are laturi, are rază', 'are colțuri'], c: 2, e: 'Cercul nu are laturi; are centru, rază și diametru.' },
    { q: 'Ce unește centrul cercului cu un punct de pe cerc?', o: ['Raza', 'Latura', 'Vârful', 'Diagonala'], c: 0, e: 'Raza unește centrul cu un punct de pe cerc.' },
    { q: 'Câte vârfuri are un triunghi?', o: ['2', '3', '4', '5'], c: 1, e: 'Triunghiul are 3 vârfuri și 3 laturi.' },
    { q: 'Care figură are toate laturile egale, dar nu neapărat unghiuri drepte?', o: ['Dreptunghiul', 'Pătratul', 'Rombul', 'Cercul'], c: 2, e: 'Rombul are toate laturile egale.' },
    { q: 'Ce este o dreaptă?', o: ['O linie fără început și fără sfârșit', 'Un punct', 'Un segment cu capete', 'Un colț'], c: 0, e: 'Dreapta este o linie infinită, fără capete.' },
    { q: 'Perimetrul înseamnă…', o: ['suprafața din interior', 'lungimea conturului', 'volumul', 'greutatea'], c: 1, e: 'Perimetrul este suma lungimilor tuturor laturilor (conturul).' },
    { q: 'Câte laturi egale are un triunghi echilateral?', o: ['1', '2', '3', '4'], c: 2, e: 'Triunghiul echilateral are toate cele 3 laturi egale.' },
    { q: 'Ce este un segment de dreaptă?', o: ['O porțiune de dreaptă cu două capete', 'O dreaptă infinită', 'Un cerc', 'O rază infinită'], c: 0, e: 'Segmentul este o porțiune de dreaptă delimitată de două capete.' }
  ];

  function geometryQ(n, rng) {
    const t = Math.floor(rng() * 5);
    if (t === 0) {
      const l = irand(rng, 3, 50);
      const ans = 4 * l;
      return fin('Cât este perimetrul unui pătrat cu latura de ' + l + ' cm?', numOpts(ans, rng, 0, 400), String(ans), 'Perimetrul pătratului = 4 × l = 4 × ' + l + ' = ' + ans + ' cm.');
    }
    if (t === 1) {
      const L = irand(rng, 5, 50), l = irand(rng, 2, L - 1);
      const ans = 2 * (L + l);
      return fin('Cât este perimetrul unui dreptunghi cu lungimea ' + L + ' cm și lățimea ' + l + ' cm?', numOpts(ans, rng, 0, 400), String(ans), 'Perimetrul dreptunghiului = 2 × (L + l) = 2 × ' + (L + l) + ' = ' + ans + ' cm.');
    }
    if (t === 2) {
      const p = spick(rng, [['triunghi', 3], ['pătrat', 4], ['dreptunghi', 4], ['pentagon', 5], ['hexagon', 6]]);
      return fin('Câte laturi are un ' + p[0] + '?', numOpts(p[1], rng, 0, 8), String(p[1]), 'Un ' + p[0] + ' are ' + p[1] + ' laturi.');
    }
    if (t === 3) {
      return spick(rng, GEO_BANK);
    }
    const l = irand(rng, 2, 20);
    const ans = l * l;
    return fin('Cât este aria unui pătrat cu latura de ' + l + ' cm?', numOpts(ans, rng, 0, 400), String(ans), 'Aria pătratului = l × l = ' + l + ' × ' + l + ' = ' + ans + ' cm².');
  }

  // ---------- UNITĂȚI DE MĂSURĂ ----------
  const MEASURE_BANK = [
    { q: 'Câți centimetri are un metru?', o: ['10', '100', '1000', '50'], c: 1, e: 'Un metru are 100 de centimetri.' },
    { q: 'Câți metri are un kilometru?', o: ['100', '1000', '10000', '500'], c: 1, e: 'Un kilometru are 1000 de metri.' },
    { q: 'Câte grame are un kilogram?', o: ['100', '1000', '10', '500'], c: 1, e: 'Un kilogram are 1000 de grame.' },
    { q: 'Câți mililitri are un litru?', o: ['100', '1000', '10', '500'], c: 1, e: 'Un litru are 1000 de mililitri.' },
    { q: 'Ce măsurăm cu termometrul?', o: ['Temperatura', 'Lungimea', 'Masa', 'Timpul'], c: 0, e: 'Termometrul măsoară temperatura.' },
    { q: 'Ce măsurăm în litri?', o: ['Lichidele', 'Lungimea', 'Timpul', 'Masa'], c: 0, e: 'În litri măsurăm lichidele (apă, lapte, suc).' },
    { q: 'Câte zile are o săptămână?', o: ['5', '6', '7', '8'], c: 2, e: 'O săptămână are 7 zile.' },
    { q: 'Câte luni are un an?', o: ['10', '11', '12', '13'], c: 2, e: 'Un an are 12 luni.' },
    { q: 'Câte minute are o oră?', o: ['30', '45', '60', '90'], c: 2, e: 'O oră are 60 de minute.' },
    { q: 'Ce instrument măsoară timpul?', o: ['Ceasul', 'Rigla', 'Cântarul', 'Termometrul'], c: 0, e: 'Ceasul măsoară timpul.' },
    { q: 'Cu ce măsurăm masa unui obiect?', o: ['Cântarul', 'Rigla', 'Ceasul', 'Litrul'], c: 0, e: 'Cântarul măsoară masa (cât de greu e un obiect).' },
    { q: 'Câte ore are o zi?', o: ['12', '24', '36', '48'], c: 1, e: 'O zi are 24 de ore.' },
    { q: 'Câte zile are un an bisect?', o: ['364', '365', '366', '367'], c: 2, e: 'Un an bisect are 366 de zile.' },
    { q: 'Ce unitate folosim pentru distanțe mari (între orașe)?', o: ['Centimetri', 'Kilometri', 'Milimetri', 'Litri'], c: 1, e: 'Pentru distanțe mari folosim kilometri.' },
    { q: 'Câți centimetri are un decimetru?', o: ['1', '10', '100', '1000'], c: 1, e: 'Un decimetru are 10 centimetri.' }
  ];
  const MEASURE_CONV = [['m', 'cm', 100], ['km', 'm', 1000], ['kg', 'g', 1000], ['l', 'ml', 1000]];

  function measureQ(rng) {
    if (rng() < 0.65) return spick(rng, MEASURE_BANK);
    const c = spick(rng, MEASURE_CONV);
    const a = irand(rng, 2, 25);
    const ans = a * c[2];
    return fin('Câți ' + c[1] + ' are ' + a + ' ' + c[0] + '?', numOpts(ans, rng, 0, ans + 2000), String(ans), '1 ' + c[0] + ' = ' + c[2] + ' ' + c[1] + '; deci ' + a + ' ' + c[0] + ' = ' + a + ' × ' + c[2] + ' = ' + ans + ' ' + c[1] + '.');
  }

  // ---------- PROBLEME (cu text) ----------
  function wordProblemQ(n, rng) {
    const t = Math.floor(rng() * 5);
    if (t === 0) {
      const a = irand(rng, 10, 500), b = irand(rng, 10, 500);
      const ans = a + b;
      return fin('Ana are ' + a + ' lei și mai primește ' + b + ' lei. Câți lei are acum?', numOpts(ans, rng, 0, 2000), String(ans), 'Adunăm: ' + a + ' + ' + b + ' = ' + ans + ' lei.');
    }
    if (t === 1) {
      const a = irand(rng, 100, 1000), b = irand(rng, 10, a);
      const ans = a - b;
      return fin('Într-un coș sunt ' + a + ' mere. Se iau ' + b + '. Câte mere rămân?', numOpts(ans, rng, 0, 1000), String(ans), 'Scădem: ' + a + ' − ' + b + ' = ' + ans + ' mere.');
    }
    if (t === 2) {
      const a = irand(rng, 3, 50), b = irand(rng, 3, 12);
      const ans = a * b;
      return fin('Un caiet costă ' + a + ' lei. Cât costă ' + b + ' caiete?', numOpts(ans, rng, 0, 2000), String(ans), 'Înmulțim: ' + a + ' × ' + b + ' = ' + ans + ' lei.');
    }
    if (t === 3) {
      const b = irand(rng, 3, 9), q = irand(rng, 4, 20);
      const a = b * q;
      return fin('Se împart ' + a + ' bomboane în mod egal la ' + b + ' copii. Câte primește fiecare?', numOpts(q, rng, 0, 100), String(q), 'Împărțim: ' + a + ' : ' + b + ' = ' + q + ' bomboane.');
    }
    const a = irand(rng, 20, 500), b = irand(rng, 10, a);
    const ans = a - b;
    return fin('Maria are ' + a + ' timbre, iar Ion are ' + b + '. Cu cât are mai multe Maria?', numOpts(ans, rng, 0, 1000), String(ans), 'Diferența: ' + a + ' − ' + b + ' = ' + ans + ' timbre.');
  }

  // ---------- ȘTIINȚE PE TEME ----------
  const SCIENCE_TOPIC = {
    'lumea-vie': [
      { q: 'Ce are nevoie o plantă ca să crească?', o: ['Lumină, apă și pământ', 'Doar piatră', 'Doar aer rece', 'Doar întuneric'], c: 0, e: 'Planta are nevoie de lumină, apă și pământ ca să crească.' },
      { q: 'Cum se numește procesul prin care plantele produc hrană?', o: ['Respirație', 'Fotosinteză', 'Digestie', 'Evaporare'], c: 1, e: 'Fotosinteza e procesul prin care plantele produc hrană cu ajutorul Soarelui.' },
      { q: 'Care parte a plantei absoarbe apa din pământ?', o: ['Frunza', 'Floarea', 'Rădăcina', 'Tulpina'], c: 2, e: 'Rădăcina absoarbe apa și substanțele hrănitoare din pământ.' },
      { q: 'Care animal respiră prin branhii?', o: ['Peștele', 'Pisica', 'Vaca', 'Găina'], c: 0, e: 'Peștii respiră prin branhii.' },
      { q: 'Cum se numesc animalele care mănâncă doar plante?', o: ['Carnivore', 'Erbivore', 'Omnivore', 'Insecte'], c: 1, e: 'Erbivorele mănâncă doar plante (de exemplu vaca, iepurele).' },
      { q: 'Cum se numesc animalele care mănâncă alte animale?', o: ['Erbivore', 'Carnivore', 'Plante', 'Fructe'], c: 1, e: 'Carnivorele mănâncă alte animale (de exemplu leul, lupul).' },
      { q: 'Ce organ pompează sângele în corp?', o: ['Plămânii', 'Inima', 'Creierul', 'Stomacul'], c: 1, e: 'Inima pompează sângele în tot corpul.' },
      { q: 'Cu ce organ respirăm?', o: ['Inima', 'Plămânii', 'Stomacul', 'Rinichii'], c: 1, e: 'Respirăm cu plămânii.' },
      { q: 'Cu ce organ vedem?', o: ['Urechea', 'Ochii', 'Nasul', 'Limba'], c: 1, e: 'Vedem cu ochii.' },
      { q: 'Cum se numește transformarea unui mormoloc în broască?', o: ['Metamorfoză', 'Fotosinteză', 'Evaporare', 'Digestie'], c: 0, e: 'Metamorfoza e transformarea prin care mormolocul devine broască.' },
      { q: 'Ce păsări migrează iarna spre țări calde?', o: ['Rândunelele', 'Vrăbiile', 'Găinile', 'Gâștele domestice'], c: 0, e: 'Rândunelele (și berzele) migrează iarna spre țări calde.' },
      { q: 'Din ce se dezvoltă o plantă?', o: ['Din sămânță', 'Din piatră', 'Din nisip', 'Din metal'], c: 0, e: 'Planta se dezvoltă din sămânță.' },
      { q: 'Care este cel mai mare mamifer din lume?', o: ['Elefantul', 'Balena albastră', 'Rechinul', 'Girafa'], c: 1, e: 'Balena albastră este cel mai mare mamifer.' },
      { q: 'Ce ne ajută să auzim?', o: ['Ochii', 'Urechile', 'Nasul', 'Limba'], c: 1, e: 'Auzim cu urechile.' },
      { q: 'Unde trăiesc peștii?', o: ['În deșert', 'În apă', 'În copaci', 'Sub pământ'], c: 1, e: 'Peștii trăiesc în apă.' },
      { q: 'Ce produc albinele?', o: ['Laptele', 'Mierea', 'Pâinea', 'Brânza'], c: 1, e: 'Albinele produc miere.' },
      { q: 'Câte picioare are o insectă?', o: ['4', '6', '8', '2'], c: 1, e: 'Insectele au 6 picioare.' },
      { q: 'Cum se numește puiul de cal?', o: ['Vițel', 'Mânz', 'Ied', 'Pui'], c: 1, e: 'Puiul de cal se numește mânz.' }
    ],
    'pamant': [
      { q: 'Care este planeta pe care trăim?', o: ['Marte', 'Pământul', 'Venus', 'Jupiter'], c: 1, e: 'Trăim pe planeta Pământ.' },
      { q: 'Ce mișcare a Pământului determină ziua și noaptea?', o: ['Rotația', 'Revoluția', 'Translația', 'Nicio mișcare'], c: 0, e: 'Rotația Pământului în jurul axei sale determină ziua și noaptea.' },
      { q: 'Cât durează rotația completă a Pământului în jurul axei sale?', o: ['12 ore', '24 ore', '7 zile', '365 zile'], c: 1, e: 'Rotația completă durează 24 de ore (o zi).' },
      { q: 'Cât durează mișcarea de revoluție a Pământului în jurul Soarelui?', o: ['24 ore', '30 zile', '365 zile', '7 zile'], c: 2, e: 'Revoluția Pământului în jurul Soarelui durează 365 de zile (un an).' },
      { q: 'Care planetă este a doua de la Soare?', o: ['Marte', 'Venus', 'Pământul', 'Jupiter'], c: 1, e: 'Venus este a doua planetă de la Soare.' },
      { q: 'Care este satelitul natural al Pământului?', o: ['Soarele', 'Luna', 'Marte', 'Venus'], c: 1, e: 'Luna este satelitul natural al Pământului.' },
      { q: 'Care este planeta numită „Planeta Roșie"?', o: ['Venus', 'Jupiter', 'Marte', 'Saturn'], c: 2, e: 'Marte este numită „Planeta Roșie" datorită culorii sale.' },
      { q: 'Ce se formează când apa se evaporă și apoi se condensează în cer?', o: ['Norii', 'Piatra', 'Focul', 'Nisipul'], c: 0, e: 'Norii se formează din vaporii de apă care se condensează.' },
      { q: 'Ce acoperă cea mai mare parte a suprafeței Pământului?', o: ['Continentele', 'Oceanele', 'Deșerturile', 'Munții'], c: 1, e: 'Oceanele acoperă cea mai mare parte a Pământului (aproximativ 70%).' },
      { q: 'Ce anotimp urmează după primăvară?', o: ['Toamna', 'Iarna', 'Vara', 'Toate'], c: 2, e: 'După primăvară vine vara.' },
      { q: 'Ce anotimp urmează după iarnă?', o: ['Toamna', 'Vara', 'Primăvara', 'Toate'], c: 2, e: 'După iarnă vine primăvara.' },
      { q: 'Ce este un vulcan?', o: ['Un munte care poate arunca lavă', 'Un râu', 'Un lac', 'Un vânt'], c: 0, e: 'Vulcanul este un munte care poate arunca lavă și cenușă.' },
      { q: 'Care dintre acestea este o planetă?', o: ['Luna', 'Saturn', 'Soarele', 'Cometa'], c: 1, e: 'Saturn este o planetă. Luna e satelit, Soarele e stea.' },
      { q: 'Ce ne dă Soarele?', o: ['Lumină și căldură', 'Apă', 'Pământ', 'Aer'], c: 0, e: 'Soarele ne dă lumină și căldură.' },
      { q: 'Care este planeta cea mai apropiată de Soare?', o: ['Venus', 'Marte', 'Mercur', 'Jupiter'], c: 2, e: 'Mercur este planeta cea mai apropiată de Soare.' },
      { q: 'Cum se numește apa care cade din nori?', o: ['Roua', 'Ploaia', 'Gheața', 'Aburul'], c: 1, e: 'Ploaia este apa care cade din nori.' },
      { q: 'Ce este un deșert?', o: ['O zonă foarte uscată, cu puțină apă', 'O pădure deasă', 'Un ocean', 'Un munte înalt'], c: 0, e: 'Deșertul este o zonă foarte uscată, cu foarte puțină apă.' },
      { q: 'Câte planete sunt în Sistemul Solar?', o: ['7', '8', '9', '10'], c: 1, e: 'Sistemul Solar are 8 planete.' }
    ],
    'fizica': [
      { q: 'Ce atrage un magnet?', o: ['Fierul', 'Lemnul', 'Plasticul', 'Hârtia'], c: 0, e: 'Magnetul atrage fierul și alte metale.' },
      { q: 'În ce stare este apa când îngheață?', o: ['Solidă', 'Lichidă', 'Gaz', 'Fum'], c: 0, e: 'Când îngheață, apa devine gheață → stare solidă.' },
      { q: 'În ce stare este apa dintr-un pahar obișnuit?', o: ['Solidă', 'Lichidă', 'Gaz', 'Fum'], c: 1, e: 'Apa dintr-un pahar este în stare lichidă.' },
      { q: 'Cum se numește trecerea apei din lichid în vapori (gaz)?', o: ['Înghețare', 'Evaporare', 'Condensare', 'Topire'], c: 1, e: 'Evaporarea e trecerea apei din lichid în vapori.' },
      { q: 'Cum se numește trecerea apei din gaz în lichid?', o: ['Evaporare', 'Condensare', 'Topire', 'Fierbere'], c: 1, e: 'Condensarea e trecerea vaporilor înapoi în lichid.' },
      { q: 'Ce trece prin corpurile transparente?', o: ['Lumina', 'Piatra', 'Apa', 'Metalul'], c: 0, e: 'Lumina trece prin corpurile transparente (sticlă, aer).' },
      { q: 'Cum se numește întoarcerea luminii de pe o oglindă?', o: ['Reflexia', 'Evaporarea', 'Topirea', 'Condensarea'], c: 0, e: 'Reflexia e întoarcerea luminii de pe o suprafață lucioasă (oglindă).' },
      { q: 'Un corp care nu lasă lumina să treacă este…', o: ['Transparent', 'Opac', 'Subțire', 'Lichid'], c: 1, e: 'Corpurile opace nu lasă lumina să treacă (de ex. lemnul, piatra).' },
      { q: 'Ce produce un bec?', o: ['Lumină (și adesea căldură)', 'Apă', 'Sunet', 'Frig'], c: 0, e: 'Becul produce lumină și, adesea, căldură.' },
      { q: 'Prin ce se propagă sunetul?', o: ['Aer, apă și corpuri solide', 'Doar prin vid', 'Doar prin metal', 'Doar prin lumină'], c: 0, e: 'Sunetul se propagă prin aer, apă și corpuri solide.' },
      { q: 'De ce cade un obiect la pământ?', o: ['E atras de gravitație', 'Plutește', 'Se topește', 'Rămâne în aer'], c: 0, e: 'Gravitația Pământului atrage obiectele spre sol.' },
      { q: 'Care corp este atras de magnet?', o: ['Un cui de fier', 'O riglă de plastic', 'Un creion de lemn', 'O foaie de hârtie'], c: 0, e: 'Cuiul de fier este atras de magnet, deci este magnetic.' },
      { q: 'Ce înseamnă că un corp „plutește" pe apă?', o: ['Stă la suprafața apei', 'Se scufundă', 'Se evaporă', 'Se topește'], c: 0, e: 'A pluti înseamnă a sta la suprafața apei, fără să te scufunzi.' },
      { q: 'Ce se întâmplă cu gheața când se încălzește?', o: ['Se topește (devine apă)', 'Îngheață mai tare', 'Rămâne la fel', 'Se evaporă direct'], c: 0, e: 'La căldură, gheața se topește și devine apă.' },
      { q: 'Cum se numește trecerea apei din solid în lichid?', o: ['Topire', 'Înghețare', 'Evaporare', 'Condensare'], c: 0, e: 'Topirea e trecerea din stare solidă în stare lichidă.' },
      { q: 'Ce folosim ca să măsurăm temperatura?', o: ['Termometrul', 'Rigla', 'Ceasul', 'Cântarul'], c: 0, e: 'Termometrul măsoară temperatura.' },
      { q: 'Ce produce un instrument muzical?', o: ['Sunete', 'Lumină', 'Căldură', 'Apă'], c: 0, e: 'Un instrument muzical produce sunete.' },
      { q: 'Ce este electricitatea?', o: ['O formă de energie', 'Un fel de apă', 'Un gaz', 'O piatră'], c: 0, e: 'Electricitatea este o formă de energie.' }
    ]
  };

  function scienceTopicQ(topic, rng) {
    if (rng() < 0.75) return spick(rng, SCIENCE_TOPIC[topic]);
    const f = spick(rng, SC_FACTS);
    return fin(f[0], numOpts(f[1], rng, 0, 400), String(f[1]), f[2]);
  }

  // ---------- teme integrate (clasele 1–2) ----------
  const THEME_BANK = {
    'animale': [
      { q: 'Ce animal spune „ham"?', o: ['Pisica', 'Câinele', 'Vaca', 'Găina'], c: 1, e: 'Câinele spune „ham".' },
      { q: 'Ce animal spune „miau"?', o: ['Câinele', 'Pisica', 'Calul', 'Peștele'], c: 1, e: 'Pisica spune „miau".' },
      { q: 'Ce animal ne dă lapte?', o: ['Vaca', 'Câinele', 'Pisica', 'Calul'], c: 0, e: 'Vaca ne dă lapte.' },
      { q: 'Unde trăiește peștele?', o: ['În copac', 'În apă', 'În deșert', 'Sub pământ'], c: 1, e: 'Peștele trăiește în apă.' },
      { q: 'Care animal are trunchi lung?', o: ['Elefantul', 'Pisica', 'Vaca', 'Iepurele'], c: 0, e: 'Elefantul are trunchi lung.' },
      { q: 'Câte picioare are o pisică?', o: ['2', '3', '4', '5'], c: 2, e: 'Pisica are 4 picioare.' },
      { q: 'Care animal zboară?', o: ['Pasărea', 'Vaca', 'Calul', 'Câinele'], c: 0, e: 'Pasărea zboară.' },
      { q: 'Ce animal păzește curtea și spune „ham-ham"?', o: ['Câinele', 'Pisica', 'Găina', 'Rața'], c: 0, e: 'Câinele păzește curtea și spune „ham-ham".' }
    ],
    'plante': [
      { q: 'Ce are nevoie o floare ca să crească?', o: ['Apă și lumină', 'Doar piatră', 'Doar întuneric', 'Doar vânt'], c: 0, e: 'Floarea are nevoie de apă și lumină ca să crească.' },
      { q: 'Unde cresc de obicei copacii?', o: ['În pământ', 'În apă', 'În aer', 'În foc'], c: 0, e: 'Copacii cresc în pământ, cu rădăcini.' },
      { q: 'Ce culoare au de obicei frunzele vara?', o: ['Verde', 'Roz', 'Albastre', 'Negre'], c: 0, e: 'Vara, frunzele sunt de obicei verzi.' },
      { q: 'Din ce cresc plantele?', o: ['Din sămânță', 'Din piatră', 'Din metal', 'Din nisip fierbinte'], c: 0, e: 'Plantele cresc din sămânță.' },
      { q: 'Ce parte a plantei e de obicei sub pământ?', o: ['Rădăcina', 'Floarea', 'Frunza', 'Tulpina'], c: 0, e: 'Rădăcina este sub pământ.' },
      { q: 'Care dintre acestea este un fruct?', o: ['Mărul', 'Masa', 'Scaunul', 'Creionul'], c: 0, e: 'Mărul este un fruct.' },
      { q: 'Ce fac albinele cu nectarul florilor?', o: ['Fac miere', 'Fac piatră', 'Fac apă', 'Fac foc'], c: 0, e: 'Albinele fac miere din nectarul și polenul florilor.' },
      { q: 'În ce anotimp înfloresc cele mai multe flori?', o: ['Primăvara', 'Toamna', 'Iarna', 'Niciodată'], c: 0, e: 'Primăvara înfloresc cele mai multe flori.' }
    ],
    'anotimpuri': [
      { q: 'În ce anotimp cade zăpada?', o: ['Iarna', 'Vara', 'Primăvara', 'Toamna'], c: 0, e: 'Iarna cade zăpada.' },
      { q: 'În ce anotimp este cel mai cald?', o: ['Iarna', 'Vara', 'Toamna', 'Primăvara'], c: 1, e: 'Vara este cel mai cald anotimp.' },
      { q: 'În ce anotimp cad frunzele din copaci?', o: ['Primăvara', 'Vara', 'Toamna', 'Iarna'], c: 2, e: 'Toamna cad frunzele din copaci.' },
      { q: 'În ce anotimp înfloresc florile?', o: ['Primăvara', 'Toamna', 'Iarna', 'Niciodată'], c: 0, e: 'Primăvara înfloresc florile.' },
      { q: 'Câte anotimpuri are un an?', o: ['3', '4', '5', '2'], c: 1, e: 'Un an are 4 anotimpuri.' },
      { q: 'Ce anotimp urmează după toamnă?', o: ['Vara', 'Iarna', 'Primăvara', 'Toamna'], c: 1, e: 'După toamnă vine iarna.' },
      { q: 'Ce anotimp urmează după vară?', o: ['Iarna', 'Toamna', 'Primăvara', 'Vara'], c: 1, e: 'După vară vine toamna.' },
      { q: 'În ce anotimp facem oameni de zăpadă?', o: ['Vara', 'Iarna', 'Primăvara', 'Toamna'], c: 1, e: 'Iarna facem oameni de zăpadă.' }
    ],
    'spatiu': [
      { q: 'Ce strălucește pe cer noaptea?', o: ['Stelele', 'Merele', 'Florile', 'Casele'], c: 0, e: 'Noaptea strălucesc stelele pe cer.' },
      { q: 'Cum se numește planeta pe care trăim?', o: ['Marte', 'Pământul', 'Venus', 'Luna'], c: 1, e: 'Trăim pe planeta Pământ.' },
      { q: 'Ce ne dă lumină ziua?', o: ['Soarele', 'Luna', 'Stelele', 'Norii'], c: 0, e: 'Soarele ne dă lumină ziua.' },
      { q: 'Ce vezi pe cer noaptea, lângă stele?', o: ['Luna', 'Soarele', 'Norii verzi', 'Curcubeul'], c: 0, e: 'Noaptea vedem Luna pe cer.' },
      { q: 'Cu ce călătoresc astronauții în spațiu?', o: ['Cu racheta', 'Cu trenul', 'Cu mașina', 'Cu bicicleta'], c: 0, e: 'Astronauții călătoresc cu racheta.' },
      { q: 'Soarele este…', o: ['o stea', 'o planetă', 'un satelit', 'o piatră'], c: 0, e: 'Soarele este o stea.' },
      { q: 'Câte planete sunt în Sistemul Solar?', o: ['6', '7', '8', '9'], c: 2, e: 'Sistemul Solar are 8 planete.' },
      { q: 'Luna este…', o: ['un satelit al Pământului', 'o planetă', 'o stea', 'un nor'], c: 0, e: 'Luna este satelitul natural al Pământului.' }
    ]
  };

  function themeQ(topic, rng) {
    const bank = THEME_BANK[topic];
    if (bank) return spick(rng, bank);
    return spick(rng, QUIZ_BANK[1]);
  }

  function genQuestion(n, item, letter, rng) {
    if (n === 0) {
      if (letter && LITERA[letter]) return letterQ(letter, rng);
      return rng() < 0.5 ? countQ(rng) : spick(rng, QUIZ_BANK[0]);
    }
    const topic = topicOf(n, item);
    if (n <= 2) {
      const r = rng();
      if (topic && r < 0.35) return themeQ(topic, rng);
      if (r < 0.75) return mathQ(n, rng);
      return roQ(n, rng);
    }
    if (topic === 'numere') return numbersQ(n, rng);
    if (topic === 'adunare') return addSubQ(n, rng);
    if (topic === 'inmultire') return multQ(n, rng);
    if (topic === 'impartire') return divQ(n, rng);
    if (topic === 'fractii') return fractionsQ(n, rng);
    if (topic === 'geometrie') return geometryQ(n, rng);
    if (topic === 'masura') return measureQ(rng);
    if (topic === 'probleme') return wordProblemQ(n, rng);
    if (topic === 'recap-mate') return mathQ(n, rng);
    if (topic === 'lumea-vie' || topic === 'pamant' || topic === 'fizica') return scienceTopicQ(topic, rng);
    if (topic === 'stiinte') return scienceQ(rng);
    const disc = ((item.d || '') + '').toLowerCase();
    if (disc.indexOf('rom') === 0) return roQ(n, rng);
    if (disc.indexOf('mat') === 0) return mathQ(n, rng);
    if (disc.indexOf('ști') === 0 || disc.indexOf('sti') === 0) return scienceQ(rng);
    return mathQ(n, rng);
  }

  function daily(n, item) {
    const base = get(n, item);
    const rng = mulberry32(hash(n + '|' + (item.t || '') + '|' + (item.d || '') + '|' + todayKey()));
    const letter = base.letter;
    const seen = {};
    const exercises = [];
    const test = [];
    let g = 0;
    while (exercises.length < 15 && g++ < 600) {
      const q = genQuestion(n, item, letter, rng);
      if (!seen[q.q]) { seen[q.q] = 1; exercises.push(q); }
    }
    while (test.length < (n === 0 ? 6 : 8) && g++ < 1200) {
      const q = genQuestion(n, item, letter, rng);
      if (!seen[q.q]) { seen[q.q] = 1; test.push(q); }
    }
    return { parent: base.parent, activity: base.activity, letter: letter, exercises: exercises, test: test };
  }

  return { get: get, daily: daily, LITERA: LITERA };
})();
