/* Programa oficială — sinteză a programelor școlare pentru învățământul primar,
   elaborate și aprobate de Ministerul Educației (acte normative de mai jos).
   Prezintă, pentru fiecare clasă și disciplină: competențele (ce ar trebui să poată
   face copilul) și conținuturile (ce se învață). Destinat orientării părintelui. */

window.PROGRAMA = {

  // Actele normative care aprobă programele școlare pentru învățământul primar
  acte: [
    'Comunicare în limba română (clasa pregătitoare, I, a II-a) — aprobată prin OMEN nr. 3418/19.03.2013, Anexa 2.',
    'Matematică și explorarea mediului (clasa pregătitoare, I, a II-a) — aprobată prin OMEN nr. 3418/19.03.2013.',
    'Limba și literatura română (clasele a III-a – a IV-a) — aprobată prin OMEN nr. 5003/02.12.2014.',
    'Matematică (clasele a III-a – a IV-a) — aprobată prin OMEN nr. 5003/02.12.2014.',
    'Științe ale naturii, Istorie, Geografie, Educație civică (clasele a III-a – a IV-a) — OMEN nr. 5003/02.12.2014.'
  ],
  sursa: 'Ministerul Educației — programe școlare pentru învățământul primar (edu.ro)',

  // ---------- date pe clasă ----------
  classes: {
    0: {
      discipline: [
        {
          nume: 'Comunicare în limba română',
          emoji: '📖',
          competente: [
            'Receptarea de mesaje orale în contexte cunoscute (ascultă, înțelege, urmează instrucțiuni).',
            'Exprimarea de mesaje orale (se prezintă, povestește, formulează întrebări și răspunsuri).',
            'Receptarea mesajelor scrise: recunoaște și numește literele de tipar, citește cuvinte uzuale.',
            'Redactarea de mesaje simple: scrie litere și cuvinte cu litere de tipar.'
          ],
          continuturi: [
            'Sunetele limbii române și literele corespunzătoare (alfabetul de tipar).',
            'Cuvântul, silaba, sunetul; despărțirea cuvintelor în silabe.',
            'Citirea cuvintelor și a propozițiilor scurte, formate din litere învățate.',
            'Scrierea literelor mari și mici de tipar; scrierea unor cuvinte uzuale.'
          ]
        },
        {
          nume: 'Matematică și explorarea mediului',
          emoji: '🔢',
          competente: [
            'Recunoașterea și scrierea numerelor naturale 0–31.',
            'Efectuarea de adunări și scăderi cu 1–2 unități, cu sprijin pe obiecte.',
            'Recunoașterea figurilor geometrice și a relațiilor spațiale (poziții, direcții).',
            'Explorarea și descrierea mediului apropiat (plante, animale, corpul, fenomene).'
          ],
          continuturi: [
            'Numerele naturale de la 0 la 31: recunoaștere, formare, scriere, comparare, ordonare.',
            'Adunarea și scăderea în concentrul 0–31, fără trecere peste ordin.',
            'Figuri geometrice simple (pătrat, cerc, triunghi, dreptunghi).',
            'Orientare spațială și temporală; unități de măsură uzuale; măsurarea timpului (ziua, ziua săptămânii, luna).',
            'Elemente din mediul înconjurător: corpul uman, plante, animale, vreme.'
          ]
        },
        {
          nume: 'Dezvoltare personală', emoji: '🧠',
          competente: ['Autocunoașterea pozitivă', 'Gestionarea emoțiilor', 'Relaționarea cu ceilalți'],
          continuturi: ['Cine sunt eu', 'Emoții și sentimente', 'Reguli, prietenie, cooperare, igienă și autonomie']
        },
        {
          nume: 'Arte vizuale și abilități practice', emoji: '🎨',
          competente: ['Folosirea unor tehnici simple de desen, modelaj, colaj', 'Realizarea de lucrări simple'],
          continuturi: ['Linia, punctul, culoarea', 'Tehnici de lucru cu hârtie și plastilină']
        },
        {
          nume: 'Muzică și mișcare', emoji: '🎵',
          competente: ['Receptarea muzicii și a cântecelor pentru copii', 'Exprimarea prin mișcare și cânt'],
          continuturi: ['Cântece pentru copii', 'Jocuri muzicale și ritm']
        },
        {
          nume: 'Educație fizică', emoji: '🤸',
          competente: ['Executarea unor exerciții de bază', 'Participarea la jocuri de mișcare'],
          continuturi: ['Exerciții de motricitate', 'Jocuri de mișcare și ștafete simple']
        }
      ]
    },

    1: {
      discipline: [
        {
          nume: 'Comunicare în limba română', emoji: '📖',
          competente: [
            'Receptarea de mesaje orale în contexte cunoscute.',
            'Exprimarea orală în diverse situații de comunicare.',
            'Receptarea mesajelor scrise: citirea corectă a cuvintelor și propozițiilor.',
            'Redactarea de mesaje: scrierea literelor de mână și a unor propoziții scurte.'
          ],
          continuturi: [
            'Alfabetul limbii române; sunet și literă.',
            'Citirea cuvintelor, propozițiilor și a textelor scurte.',
            'Scrierea literelor de mână (caligrafie); ortografie de bază.',
            'Despărțirea cuvintelor în silabe; propoziția simplă.'
          ]
        },
        {
          nume: 'Matematică și explorarea mediului', emoji: '🔢',
          competente: [
            'Recunoașterea, scrierea și compararea numerelor naturale 0–100.',
            'Efectuarea de adunări și scăderi fără trecere peste ordin, în concentrul 0–100.',
            'Recunoașterea figurilor geometrice și a proprietăților simple.',
            'Explorarea mediului și folosirea unor unități de măsură.'
          ],
          continuturi: [
            'Numerele naturale 0–100: formare, citire, scriere, comparare, ordonare.',
            'Adunarea și scăderea în concentrul 0–100.',
            'Figuri geometrice și elemente de orientare spațială.',
            'Unități de măsură (lungime, masă, timp); elemente din mediul înconjurător.'
          ]
        },
        {
          nume: 'Dezvoltare personală', emoji: '🧠',
          competente: ['Autocunoaștere', 'Comunicare și relaționare', 'Igienă și sănătate'],
          continuturi: ['Despre mine și colegii mei', 'Emoții, prietenie, reguli de comunicare']
        },
        { nume: 'Arte vizuale și abilități practice', emoji: '🎨', competente: ['Realizarea de lucrări simple', 'Folosirea materialelor și tehnicilor de bază'], continuturi: ['Culoare, formă, compoziție', 'Tehnici de lucru'] },
        { nume: 'Muzică și mișcare', emoji: '🎵', competente: ['Receptarea muzicii', 'Cântarea și mișcarea ritmică'], continuturi: ['Cântece și jocuri muzicale'] },
        { nume: 'Educație fizică', emoji: '🤸', competente: ['Exerciții fizice de bază', 'Jocuri de mișcare'], continuturi: ['Motricitate', 'Jocuri și exerciții'] }
      ]
    },

    2: {
      discipline: [
        {
          nume: 'Comunicare în limba română', emoji: '📖',
          competente: [
            'Receptarea de mesaje orale și scrise.',
            'Lectura fluentă, corectă și expresivă a textelor.',
            'Exprimarea orală și scrisă în situații uzuale.',
            'Utilizarea corectă a unor reguli de scriere (ortografie și punctuație).'
          ],
          continuturi: [
            'Lectura textelor narative scurte; înțelegerea celor citite.',
            'Scrierea corectă: semne de punctuație, scrierea cuvintelor cu grupuri de litere.',
            'Textul narativ: repere de bază (întâmplare, personaje); planul simplu de idei.',
            'Ortograme uzuale (sa/s-a, sau/s-au, ia/i-a, lau/l-au).'
          ]
        },
        {
          nume: 'Matematică și explorarea mediului', emoji: '🔢',
          competente: [
            'Recunoașterea, scrierea și compararea numerelor naturale 0–1000.',
            'Efectuarea de adunări și scăderi cu numere 0–1000 (cu și fără trecere peste ordin).',
            'Recunoașterea și utilizarea elementelor de geometrie.',
            'Rezolvarea de probleme simple.'
          ],
          continuturi: [
            'Numerele naturale 0–1000.',
            'Adunarea și scăderea în concentrul 0–1000.',
            'Introducere în înmulțire (adunare repetată).',
            'Fracții introductive (jumătate, sfert).',
            'Elemente de geometrie, unități de măsură și monede.'
          ]
        },
        {
          nume: 'Dezvoltare personală', emoji: '🧠',
          competente: ['Autocunoaștere', 'Relaționare și comunicare', 'Sănătate și siguranță'],
          continuturi: ['Emoții și comportamente', 'Prietenie, cooperare, reguli']
        },
        { nume: 'Arte vizuale și abilități practice', emoji: '🎨', competente: ['Realizarea de lucrări creative', 'Utilizarea tehnicilor plastice'], continuturi: ['Culoare, formă, volum', 'Tehnici de lucru'] },
        { nume: 'Muzică și mișcare', emoji: '🎵', competente: ['Receptarea muzicii', 'Interpretarea de cântece'], continuturi: ['Cântece și exerciții ritmice'] },
        { nume: 'Educație fizică', emoji: '🤸', competente: ['Exerciții fizice', 'Jocuri sportive'], continuturi: ['Motricitate', 'jocuri'] }
      ]
    },

    3: {
      discipline: [
        {
          nume: 'Limba și literatura română', emoji: '📚',
          competente: [
            'Receptarea de mesaje orale și scrise în contexte variate.',
            'Lectura corectă, fluentă și conștientă a textelor.',
            'Exprimarea orală și scrisă (propoziții, texte scurte).',
            'Utilizarea corectă a limbii: ortografie, punctuație, părți de vorbire de bază.'
          ],
          continuturi: [
            'Texte literare și nonliterare: lectură și înțelegere.',
            'Substantivul, verbul, adjectivul (recunoaștere și folosire corectă).',
            'Ortografie și punctuație; vocabular.',
            'Textul narativ și descrierea; compuneri scurte.'
          ]
        },
        {
          nume: 'Matematică', emoji: '🔢',
          competente: [
            'Utilizarea numerelor naturale 0–10.000 în calcule.',
            'Efectuarea de adunări, scăderi, înmulțiri și împărțiri.',
            'Recunoașterea și utilizarea elementelor de geometrie.',
            'Rezolvarea de probleme cu una sau mai multe operații.'
          ],
          continuturi: [
            'Numerele naturale 0–10.000.',
            'Adunarea și scăderea; înmulțirea; împărțirea (0–100).',
            'Fracții introductive.',
            'Elemente de geometrie; unități de măsură.'
          ]
        },
        {
          nume: 'Științe ale naturii', emoji: '🌿',
          competente: [
            'Explorarea și descrierea lumii vii (plante, animale, om).',
            'Înțelegerea unor fenomene și relații ale naturii.',
            'Folosirea unor instrumente simple de observare.'
          ],
          continuturi: [
            'Lumea vie: plante, animale, corpul uman.',
            'Pământul — mediu de viață (apă, aer, sol).',
            'Noțiuni introductive de fizică (lumină, sunet, căldură).'
          ]
        },
        { nume: 'Educație civică', emoji: '🤝', competente: ['Respectarea regulilor și a celorlalți', 'Participarea în grup'], continuturi: ['Reguli, drepturi și responsabilități', 'Comunitatea locală'] }
      ]
    },

    4: {
      discipline: [
        {
          nume: 'Limba și literatura română', emoji: '📚',
          competente: [
            'Receptarea de mesaje orale și scrise.',
            'Lectura fluentă și expresivă a textelor.',
            'Exprimarea orală și scrisă (compuneri, texte).',
            'Utilizarea corectă a limbii: ortografie, punctuație, părți de vorbire.'
          ],
          continuturi: [
            'Texte literare și nonliterare; povestirea și înțelegerea.',
            'Părțile de vorbire (substantiv, verb, adjectiv, pronume).',
            'Ortografie și punctuație; ortograme.',
            'Compuneri: narațiune, descriere, text cu dialog.'
          ]
        },
        {
          nume: 'Matematică', emoji: '🔢',
          competente: [
            'Utilizarea numerelor naturale 0–1.000.000 în calcule.',
            'Efectuarea operațiilor și a ordinii lor.',
            'Utilizarea fracțiilor și a elementelor de geometrie.',
            'Rezolvarea de probleme și folosirea unităților de măsură.'
          ],
          continuturi: [
            'Numerele naturale 0–1.000.000.',
            'Adunarea, scăderea, înmulțirea, împărțirea.',
            'Fracții; unități de măsură.',
            'Elemente de geometrie: perimetru, forme.'
          ]
        },
        {
          nume: 'Științe ale naturii', emoji: '🌿',
          competente: [
            'Explorarea științelor vieții, ale Pământului și ale fizicii.',
            'Înțelegerea unor fenomene naturale.',
            'Realizarea de observații și măsurători simple.'
          ],
          continuturi: [
            'Științele vieții (plante, animale, om).',
            'Științele Pământului (Pământ, astre, fenomene).',
            'Științele fizicii (fenomene fizice simple).'
          ]
        },
        { nume: 'Istorie', emoji: '🏛️', competente: ['Situarea în timp a unor evenimente', 'Raportarea la trecutul local și național'], continuturi: ['Repere din istoria locală și națională', 'Personalități și evenimente'] },
        { nume: 'Geografie', emoji: '🗺️', competente: ['Orientarea în spațiu (orizont local)', 'Recunoașterea unor repere geografice'], continuturi: ['Orizontul local și țara', 'Repere geografice (râu, munte, oraș)'] },
        { nume: 'Educație civică', emoji: '🤝', competente: ['Respectarea drepturilor și responsabilităților', 'Participare activă în comunitate'], continuturi: ['Cetățeanul și comunitatea', 'Reguli și valori democratice'] }
      ]
    }
  }
};
