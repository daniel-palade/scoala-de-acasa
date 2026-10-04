/* Datele site-ului.
   - Clasa 0 (pregătitoare): planificare REALĂ Editura EDU, anul școlar 2026–2027 (pe module).
   - Clasele 1–4: structura disciplinelor conform planului-cadru oficial; unitățile sunt orientative
     și urmează să fie importate la fel din planificările Editura EDU. */

window.APP = {
  brand: "Școala de Acasă",
  anScolar: "2026–2027",

  classes: [
    {
      n: 0,
      title: "Clasa pregătitoare",
      short: "Clasa 0",
      color: "#0d9488",
      tint: "#9cdbd2",
      emoji: "🌱",
      desc: "Descoperire prin joacă: primele sunete, litere și numere, fără presiune — exact cum se face la școală."
    },
    {
      n: 1,
      title: "Clasa I",
      short: "Clasa 1",
      color: "#d97706",
      tint: "#f2cd8f",
      emoji: "✨",
      desc: "Fundația cititului, scrisului și a numerelor 0–100 — primul an în care se pun bazele."
    },
    {
      n: 2,
      title: "Clasa a II-a",
      short: "Clasa 2",
      color: "#ea580c",
      tint: "#f5b28a",
      emoji: "🍀",
      desc: "Consolidare: adunare și scădere, lectură fluentă și primele reguli de ortografie."
    },
    {
      n: 3,
      title: "Clasa a III-a",
      short: "Clasa 3",
      color: "#4f46e5",
      tint: "#b3adf4",
      emoji: "🚀",
      desc: "Înmulțire, împărțire, texte și primele noțiuni de științe și educație civică."
    },
    {
      n: 4,
      title: "Clasa a IV-a",
      short: "Clasa 4",
      color: "#9333ea",
      tint: "#cd9df2",
      emoji: "🧭",
      desc: "Pregătirea pentru gimnaziu: fracții, compuneri, istorie, geografie și cunoștințe generale."
    }
  ],

  structure: {
    0: {
      source: "Editura EDU — Planificare calendaristică, anul școlar 2026–2027",
      orar: [
        { d: "Comunicare în limba română", ore: 5 },
        { d: "Matematică și explorarea mediului", ore: 4 },
        { d: "Limba modernă", ore: 1 },
        { d: "Religie", ore: 1 },
        { d: "Educație fizică", ore: 2 },
        { d: "Muzică și mișcare", ore: 2 },
        { d: "Arte vizuale și abilități practice", ore: 2 },
        { d: "Dezvoltare personală", ore: 2 },
        { d: "Total ore / săptămână", ore: 19, total: true }
      ],
      disciplines: [
        "Comunicare în limba română",
        "Matematică și explorarea mediului",
        "Limba modernă",
        "Arte vizuale și abilități practice",
        "Muzică și mișcare",
        "Educație fizică",
        "Dezvoltare personală",
        "Religie"
      ],
      modules: [
        {
          name: "Modulul 1 · Caiet de creație 1",
          weeks: "săpt. 1–14 (septembrie – decembrie)",
          items: [
            { t: "De azi sunt școlar!", w: "săpt. 1", s: "Evaluare inițială" },
            { t: "Școala piticilor", w: "săpt. 2", s: "Cine sunt eu? · Povestea mărului" },
            { t: "Aventura aligatorului", w: "săpt. 3", s: "Sunetul și litera A, a" },
            { t: "Motănelul Miaunel", w: "săpt. 4", s: "M, m" },
            { t: "Iepurica cea isteață", w: "săpt. 5", s: "I, i" },
            { t: "Ursulețul răsfățat", w: "săpt. 6", s: "U, u" },
            { t: "Plecarea rățuștelor", w: "săpt. 7", s: "R, r" },
            { t: "Talentatul Eli", w: "săpt. 8", s: "E, e" },
            { t: "Năsturel cel necăjit", w: "săpt. 9", s: "N, n" },
            { t: "Trenulețul Titi", w: "săpt. 10", s: "T, t" },
            { t: "Oul haios", w: "săpt. 11", s: "O, o" },
            { t: "Cadoul Corinei", w: "săpt. 12", s: "C, c" },
            { t: "O mică gospodină", w: "săpt. 13", s: "Ă, ă" },
            { t: "În așteptarea lui Moș Crăciun", w: "săpt. 14", s: "Recapitulare" }
          ]
        },
        {
          name: "Modulul 2 · Caiet de creație 2",
          weeks: "săpt. 16–21 (ianuarie – februarie)",
          items: [
            { t: "Pic, picătura năzdrăvană", w: "săpt. 16", s: "P, p" },
            { t: "Pinguinul schior", w: "săpt. 17", s: "L, l" },
            { t: "La săniuș", w: "săpt. 18", s: "S, s" },
            { t: "Poveste cu înghețată", w: "săpt. 19", s: "Î, î" },
            { t: "Vulpea vicleană", w: "săpt. 20", s: "V, v" },
            { t: "Animăluțele mătușii", w: "săpt. 21", s: "Ț, ț" }
          ]
        },
        {
          name: "Modulul 3 · Caiet de creație 3",
          weeks: "săpt. 22–28 (martie – aprilie)",
          items: [
            { t: "La pescuit", w: "săpt. 22", s: "Ș, ș" },
            { t: "Flori pentru mama", w: "săpt. 23", s: "F, f" },
            { t: "În grădină", w: "săpt. 24", s: "G, g" },
            { t: "Prin pădure", w: "săpt. 25", s: "B, b" },
            { t: "În livadă", w: "săpt. 26", s: "D, d" },
            { t: "Sărbătoarea Paștelui", w: "săpt. 27", s: "H, h" },
            { t: "Jucăriile", w: "săpt. 28", s: "J, j" }
          ]
        },
        {
          name: "Modulul 4 · Caiet de creație 4",
          weeks: "săpt. 30–33 (mai)",
          items: [
            { t: "Azor", w: "săpt. 30", s: "Z, z" },
            { t: "O navă extraterestră", w: "săpt. 31", s: "X, x" },
            { t: "O mână de ajutor", w: "săpt. 32", s: "Â, â" },
            { t: "Super-eroul Rocky · Ziua copiilor", w: "săpt. 33", s: "K, Q, W, Y" }
          ]
        },
        {
          name: "Modulul 5 · Caiet de creație 5",
          weeks: "săpt. 34–36 (iunie)",
          items: [
            { t: "La cumpărături", w: "săpt. 34", s: "Bani · Leul" },
            { t: "La munte · La mare", w: "săpt. 35–36", s: "Recapitulare · Vine vacanța" }
          ]
        }
      ]
    },

    1: {
      source: "Plan-cadru oficial · anul școlar 2026–2027 (structura detaliată se va importa din planificarea Editura EDU)",
      disciplines: [
        "Comunicare în limba română",
        "Matematică și explorarea mediului",
        "Limba modernă",
        "Arte vizuale și abilități practice",
        "Muzică și mișcare",
        "Educație fizică",
        "Dezvoltare personală",
        "Religie"
      ],
      semestre: [
        { name: "Semestrul I", units: [
          { title: "Litere și sunete (a, m, i, u, n, r)", weeks: "săpt. 1–8", subject: "Comunicare în limba română", body: "Recunoașterea și scrierea literelor, citirea silabelor." },
          { title: "Numerele naturale 0–10", weeks: "săpt. 9–12", subject: "Matematică și explorarea mediului", body: "Numărare, comparare, adunări mici." },
          { title: "Numerele 0–31 și măsurători simple", weeks: "săpt. 13–16", subject: "Matematică și explorarea mediului", body: "Extindere, bani, unități de lungime neconvenționale." }
        ]},
        { name: "Semestrul II", units: [
          { title: "Lectură fluentă și scriere de propoziții", weeks: "săpt. 17–24", subject: "Comunicare în limba română", body: "Citit cursiv, propoziții simple, despărțire în silabe." },
          { title: "Numerele 0–100", weeks: "săpt. 25–28", subject: "Matematică și explorarea mediului", body: "Zeci și unități, ordine, compunere și descompunere." },
          { title: "Adunarea și scăderea până la 100 (fără trecere)", weeks: "săpt. 29–33", subject: "Matematică și explorarea mediului", body: "Operații pe baza materialului concret, probleme simple." },
          { title: "Plante și animale din jurul nostru", weeks: "săpt. 34–35", subject: "Științe", body: "Observare și descriere a mediului apropiat." }
        ]}
      ]
    },

    2: {
      source: "Plan-cadru oficial · anul școlar 2026–2027 (structura detaliată se va importa din planificarea Editura EDU)",
      disciplines: [
        "Comunicare în limba română",
        "Matematică și explorarea mediului",
        "Limba modernă",
        "Arte vizuale și abilități practice",
        "Muzică și mișcare",
        "Educație fizică",
        "Dezvoltare personală",
        "Religie"
      ],
      semestre: [
        { name: "Semestrul I", units: [
          { title: "Textul: citire și înțelegere", weeks: "săpt. 1–6", subject: "Comunicare în limba română", body: "Citire conștientă, identificarea ideilor principale." },
          { title: "Numere 0–100: compunere și descompunere", weeks: "săpt. 7–10", subject: "Matematică și explorarea mediului", body: "Sute, zeci, unități; ordonare și comparare." },
          { title: "Adunare și scădere cu trecere peste ordin", weeks: "săpt. 11–16", subject: "Matematică și explorarea mediului", body: "Algoritmi de calcul, probe prin operația inversă." }
        ]},
        { name: "Semestrul II", units: [
          { title: "Ortografie și despărțirea în silabe", weeks: "săpt. 17–22", subject: "Comunicare în limba română", body: "Reguli de bază, scriere corectă a cuvintelor frecvente." },
          { title: "Înmulțirea (baze) — tabla înmulțirii", weeks: "săpt. 23–27", subject: "Matematică și explorarea mediului", body: "Conceptul de înmulțire, tabla înmulțirii cu 2, 3, 4, 5." },
          { title: "Măsurători și geometrie", weeks: "săpt. 28–31", subject: "Matematică și explorarea mediului", body: "Lungimi, timp, bani; figuri geometrice plane." },
          { title: "Mediul înconjurător: plante și viețuitoare", weeks: "săpt. 32–35", subject: "Științe", body: "Necesitățile viețuitoarelor, igiena și sănătatea." }
        ]}
      ]
    },

    3: {
      source: "Plan-cadru oficial · anul școlar 2026–2027 (structura detaliată se va importa din planificarea Editura EDU)",
      disciplines: [
        "Limba română",
        "Matematică",
        "Științe ale naturii",
        "Educație civică",
        "Limba modernă (engleză)",
        "Arte vizuale și abilități practice",
        "Muzică și mișcare",
        "Educație fizică",
        "Religie"
      ],
      semestre: [
        { name: "Semestrul I", units: [
          { title: "Textul narativ și părțile lui", weeks: "săpt. 1–5", subject: "Limba română", body: "Personaje, desfășurare, idee principală; povestire." },
          { title: "Numere naturale până la 1 000 000", weeks: "săpt. 6–9", subject: "Matematică", body: "Citire, scriere, comparare, rotunjire." },
          { title: "Înmulțirea și împărțirea", weeks: "săpt. 10–13", subject: "Matematică", body: "Tabla înmulțirii, împărțirea, relația dintre ele." },
          { title: "Localitatea și normele de conviețuire", weeks: "săpt. 14–16", subject: "Educație civică", body: "Roluri, reguli, respect și responsabilitate în comunitate." }
        ]},
        { name: "Semestrul II", units: [
          { title: "Compuneri și ortograme", weeks: "săpt. 17–22", subject: "Limba română", body: "Redactare de texte scurte, s-a/sau, ia/i-a." },
          { title: "Fracții elementare", weeks: "săpt. 23–26", subject: "Matematică", body: "Jumătate, sfert, treime; recunoaștere vizuală." },
          { title: "Unități de măsură și geometrie", weeks: "săpt. 27–30", subject: "Matematică", body: "Lungimi, mase, capacități; perimetrul figurilor." },
          { title: "Fenomene ale naturii și corpul uman", weeks: "săpt. 31–35", subject: "Științe ale naturii", body: "Circuitul apei, plante și animale, igiena corpului." }
        ]}
      ]
    },

    4: {
      source: "Plan-cadru oficial · anul școlar 2026–2027 (structura detaliată se va importa din planificarea Editura EDU)",
      disciplines: [
        "Limba română",
        "Matematică",
        "Științe ale naturii",
        "Istorie",
        "Geografie",
        "Educație civică",
        "Limba modernă (engleză)",
        "Arte vizuale și abilități practice",
        "Muzică și mișcare",
        "Educație fizică",
        "Religie"
      ],
      semestre: [
        { name: "Semestrul I", units: [
          { title: "Textul: tipuri și trăsături", weeks: "săpt. 1–5", subject: "Limba română", body: "Narațiune, descriere, dialog; planul textului." },
          { title: "Numere naturale și operații", weeks: "săpt. 6–9", subject: "Matematică", body: "Adunare, scădere, înmulțire, împărțire — consolidare." },
          { title: "Fracții: citire, scriere, comparare", weeks: "săpt. 10–13", subject: "Matematică", body: "Fracții egale cu unitatea, subunitare, comparare." },
          { title: "România pe hartă", weeks: "săpt. 14–16", subject: "Geografie", body: "Relief, râuri, orașe mari; regiunile țării." }
        ]},
        { name: "Semestrul II", units: [
          { title: "Compuneri și corectitudine gramaticală", weeks: "săpt. 17–22", subject: "Limba română", body: "Părți de vorbire uzuale, redactare corectă." },
          { title: "Fracții zecimale și unități de măsură", weeks: "săpt. 23–26", subject: "Matematică", body: "Zecimi, sutimi; lungimi, mase, capacități." },
          { title: "Arii și volume (noțiuni introductive)", weeks: "săpt. 27–30", subject: "Matematică", body: "Aria pătratului și dreptunghiului; cubul." },
          { title: "Începuturile istoriei românilor", weeks: "săpt. 31–35", subject: "Istorie", body: "Geto-dacii, romanii, primele forme de organizare." }
        ]}
      ]
    }
  }
};
