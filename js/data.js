/* Datele site-ului.
   Toate clasele: planificare REALĂ Editura EDU, anul școlar 2026–2027.
   - Clasa 0 (pregătitoare): orar + 5 module „Caiet de creație" (o temă/literă pe săptămână).
   - Clasele 1–2: orar + 5 module, fiecare cu unități tematice integrate.
   - Clasele 3–4: orar + 5 module, cu unități de învățare pe disciplines (română, matematică, științe).
   Perioadele modulelor respectă structura oficială a anului școlar 2026–2027 (Ministerul Educației). */

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
          weeks: "7 sept – 22 dec 2026",
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
          weeks: "11 ian – 19 feb 2027",
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
          weeks: "22 feb – 23 apr 2027",
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
          weeks: "5 mai – 18 iun 2027",
          items: [
            { t: "Azor", w: "săpt. 30", s: "Z, z" },
            { t: "O navă extraterestră", w: "săpt. 31", s: "X, x" },
            { t: "O mână de ajutor", w: "săpt. 32", s: "Â, â" },
            { t: "Super-eroul Rocky · Ziua copiilor", w: "săpt. 33", s: "K, Q, W, Y" },
            { t: "La cumpărături", w: "săpt. 34", s: "Bani · Leul" },
            { t: "La munte · La mare", w: "săpt. 35–36", s: "Recapitulare · Vine vacanța" }
          ]
        }
      ]
    },

    1: {
      source: "Editura EDU — Planificare calendaristică, anul școlar 2026–2027",
      orar: [
        { d: "Comunicare în limba română", ore: 7 },
        { d: "Matematică și explorarea mediului", ore: 4 },
        { d: "Limba modernă", ore: 1 },
        { d: "Religie", ore: 1 },
        { d: "Arte vizuale și abilități practice", ore: 2 },
        { d: "Muzică și mișcare", ore: 2 },
        { d: "Educație fizică", ore: 2 },
        { d: "Dezvoltare personală", ore: 1 },
        { d: "Total ore / săptămână", ore: 20, total: true }
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
          name: "Modulul 1",
          weeks: "7 sept – 23 oct 2026",
          items: [
            { t: "Din nou la școală", w: "7–25 sept", s: "3 săptămâni" },
            { t: "Universul meu", w: "28 sept – 23 oct", s: "4 săptămâni" }
          ]
        },
        {
          name: "Modulul 2",
          weeks: "2 nov – 22 dec 2026",
          items: [
            { t: "Toți cei mici, la bunici", w: "2–20 nov", s: "3 săptămâni" },
            { t: "Călătorie în lumea poveștilor", w: "23 nov – 15 dec", s: "4 săptămâni" }
          ]
        },
        {
          name: "Modulul 3",
          weeks: "11 ian – 19 feb 2027",
          items: [
            { t: "Prietenie", w: "11–29 ian", s: "3 săptămâni" },
            { t: "În lumea plantelor", w: "1–19 feb", s: "3 săptămâni" }
          ]
        },
        {
          name: "Modulul 4",
          weeks: "1 mar – 23 apr 2027",
          items: [
            { t: "În lumea animalelor", w: "1–26 mar", s: "4 săptămâni" },
            { t: "Poveștile pământului", w: "29 mar – 16 apr", s: "3 săptămâni" }
          ]
        },
        {
          name: "Modulul 5",
          weeks: "5 mai – 18 iun 2027",
          items: [
            { t: "Cântec, joc și voie bună", w: "5–21 mai", s: "3 săptămâni" },
            { t: "Se apropie vacanța · Recapitulare finală", w: "24 mai – 18 iun", s: "4 săptămâni" }
          ]
        }
      ]
    },

    2: {
      source: "Editura EDU — Planificare calendaristică, anul școlar 2026–2027",
      orar: [
        { d: "Comunicare în limba română", ore: 6 },
        { d: "Matematică și explorarea mediului", ore: 5 },
        { d: "Limba modernă", ore: 1 },
        { d: "Religie", ore: 1 },
        { d: "Arte vizuale și abilități practice", ore: 2 },
        { d: "Muzică și mișcare", ore: 2 },
        { d: "Educație fizică", ore: 2 },
        { d: "Dezvoltare personală", ore: 1 },
        { d: "Total ore / săptămână", ore: 20, total: true }
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
          name: "Modulul 1",
          weeks: "7 sept – 23 oct 2026",
          items: [
            { t: "Călătorii, călătorii", w: "7–25 sept", s: "3 săptămâni" },
            { t: "În lumea cunoașterii", w: "28 sept – 23 oct", s: "4 săptămâni" }
          ]
        },
        {
          name: "Modulul 2",
          weeks: "2 nov – 22 dec 2026",
          items: [
            { t: "Pe cărările toamnei", w: "2–20 nov", s: "3 săptămâni" },
            { t: "Colindăm în lung și-n lat", w: "23 nov – 15 dec", s: "4 săptămâni" }
          ]
        },
        {
          name: "Modulul 3",
          weeks: "11 ian – 19 feb 2027",
          items: [
            { t: "Cu iarna la drum", w: "11 ian – 5 feb", s: "4 săptămâni" },
            { t: "Călător printre stele", w: "8–19 feb", s: "2 săptămâni" }
          ]
        },
        {
          name: "Modulul 4",
          weeks: "1 mar – 23 apr 2027",
          items: [
            { t: "Pe aripile primăverii", w: "1–12 mar", s: "2 săptămâni" },
            { t: "Călătorim prin Țara Copilăriei", w: "15–26 mar", s: "2 săptămâni" },
            { t: "Pe covorul fermecat", w: "29 mar – 16 apr", s: "3 săptămâni" }
          ]
        },
        {
          name: "Modulul 5",
          weeks: "5 mai – 18 iun 2027",
          items: [
            { t: "În lumea invențiilor", w: "5–28 mai", s: "4 săptămâni" },
            { t: "În căutarea verii", w: "31 mai – 18 iun", s: "3 săptămâni" }
          ]
        }
      ]
    },

    3: {
      source: "Editura EDU — Planificare calendaristică, anul școlar 2026–2027",
      orar: [
        { d: "Limba și literatura română", ore: 5 },
        { d: "Limba modernă", ore: 2 },
        { d: "Matematică", ore: 4 },
        { d: "Științe ale naturii", ore: 1 },
        { d: "Educație civică", ore: 1 },
        { d: "Religie", ore: 1 },
        { d: "Educație fizică", ore: 2 },
        { d: "Joc și mișcare", ore: 1 },
        { d: "Muzică și mișcare", ore: 1 },
        { d: "Arte vizuale și abilități practice", ore: 2 },
        { d: "Total ore / săptămână", ore: 20, total: true }
      ],
      disciplines: [
        "Limba și literatura română",
        "Matematică",
        "Științe ale naturii",
        "Educație civică",
        "Limba modernă",
        "Arte vizuale și abilități practice",
        "Muzică și mișcare",
        "Educație fizică",
        "Religie"
      ],
      modules: [
        {
          name: "Modulul 1",
          weeks: "7 sept – 23 oct 2026",
          items: [
            { t: "Din nou la drum", d: "Română", w: "7–25 sept", s: "15 ore" },
            { t: "În călătorie cu trenul", d: "Română", w: "28 sept – 23 oct", s: "20 ore" },
            { t: "Recapitulare inițială", d: "Matematică", w: "7–25 sept", s: "12 ore" },
            { t: "Numerele naturale 0–10 000", d: "Matematică", w: "28 sept – 23 oct", s: "16 ore" },
            { t: "Recapitulare · Lumea vie", d: "Științe", w: "7 sept – 23 oct", s: "7 ore" }
          ]
        },
        {
          name: "Modulul 2",
          weeks: "2 nov – 22 dec 2026",
          items: [
            { t: "Călătorim pe mătură", d: "Română", w: "2–20 nov", s: "15 ore" },
            { t: "Colindăm în lung și-n lat", d: "Română", w: "23 nov – 15 dec", s: "18 ore" },
            { t: "Adunarea și scăderea 0–10 000", d: "Matematică", w: "2–20 nov", s: "12 ore" },
            { t: "Înmulțirea 0–10 000", d: "Matematică", w: "23 nov – 15 dec", s: "14 ore" },
            { t: "Lumea vie (continuare)", d: "Științe", w: "2 nov – 15 dec", s: "7 ore" }
          ]
        },
        {
          name: "Modulul 3",
          weeks: "11 ian – 19 feb 2027",
          items: [
            { t: "Călătorim cu sania", d: "Română", w: "11–29 ian", s: "15 ore" },
            { t: "Călătorim printre planete", d: "Română", w: "1–19 feb", s: "15 ore" },
            { t: "Înmulțirea cu factor de 2+ cifre", d: "Matematică", w: "11–29 ian", s: "12 ore" },
            { t: "Împărțirea numerelor 0–100", d: "Matematică", w: "1–19 feb", s: "12 ore" },
            { t: "Pământul – mediu de viață", d: "Științe", w: "11 ian – 19 feb", s: "6 ore" }
          ]
        },
        {
          name: "Modulul 4",
          weeks: "1 mar – 23 apr 2027",
          items: [
            { t: "Pe aripi de păsări", d: "Română", w: "1–26 mar", s: "20 ore" },
            { t: "Călătorim prin Țara veseliei", d: "Română", w: "29 mar – 16 apr", s: "15 ore" },
            { t: "Fracții", d: "Matematică", w: "1–26 mar", s: "16 ore" },
            { t: "Elemente intuitive de geometrie", d: "Matematică", w: "29 mar – 16 apr", s: "12 ore" },
            { t: "Din lumea fizicii", d: "Științe", w: "1 mar – 16 apr", s: "7 ore" }
          ]
        },
        {
          name: "Modulul 5",
          weeks: "5 mai – 18 iun 2027",
          items: [
            { t: "Străbatem Țara piticilor", d: "Română", w: "5–25 mai", s: "18 ore" },
            { t: "În căutarea verii", d: "Română", w: "31 mai – 18 iun", s: "15 ore" },
            { t: "Unități și instrumente de măsură", d: "Matematică", w: "5–28 mai", s: "14 ore" },
            { t: "Recapitulare finală", d: "Matematică", w: "31 mai – 18 iun", s: "12 ore" },
            { t: "Din lumea fizicii (cont.) · Recapitulare", d: "Științe", w: "5 mai – 18 iun", s: "7 ore" }
          ]
        }
      ]
    },

    4: {
      source: "Editura EDU — Planificare calendaristică, anul școlar 2026–2027",
      orar: [
        { d: "Limba și literatura română", ore: 5 },
        { d: "Limba modernă", ore: 2 },
        { d: "Matematică", ore: 4 },
        { d: "Științe ale naturii", ore: 1 },
        { d: "Istorie", ore: 1 },
        { d: "Geografie", ore: 1 },
        { d: "Educație civică", ore: 1 },
        { d: "Religie", ore: 1 },
        { d: "Educație fizică", ore: 2 },
        { d: "Joc și mișcare", ore: 1 },
        { d: "Muzică și mișcare", ore: 1 },
        { d: "Arte vizuale și abilități practice", ore: 2 },
        { d: "Total ore / săptămână", ore: 22, total: true }
      ],
      disciplines: [
        "Limba și literatura română",
        "Matematică",
        "Științe ale naturii",
        "Istorie",
        "Geografie",
        "Educație civică",
        "Limba modernă",
        "Arte vizuale și abilități practice",
        "Muzică și mișcare",
        "Educație fizică",
        "Religie"
      ],
      modules: [
        {
          name: "Modulul 1",
          weeks: "7 sept – 23 oct 2026",
          items: [
            { t: "Din nou la drum", d: "Română", w: "7–25 sept", s: "15 ore" },
            { t: "Alege să fii bun!", d: "Română", w: "28 sept – 23 oct", s: "20 ore" },
            { t: "Recapitulare · Numere 0–1 000 000", d: "Matematică", w: "7 sept – 23 oct", s: "28 ore" },
            { t: "Recapitulare · Științele vieții", d: "Științe", w: "7 sept – 23 oct", s: "7 ore" }
          ]
        },
        {
          name: "Modulul 2",
          weeks: "2 nov – 22 dec 2026",
          items: [
            { t: "Înalță-te prin cunoaștere!", d: "Română", w: "2–27 nov", s: "20 ore" },
            { t: "Să nu uiți oameni, țară și colinde!", d: "Română", w: "2–15 dec", s: "13 ore" },
            { t: "Adunarea și scăderea 0–1 000 000", d: "Matematică", w: "2–20 nov", s: "12 ore" },
            { t: "Înmulțirea 0–1 000 000", d: "Matematică", w: "23 nov – 15 dec", s: "14 ore" },
            { t: "Științele vieții (continuare)", d: "Științe", w: "2 nov – 15 dec", s: "7 ore" }
          ]
        },
        {
          name: "Modulul 3",
          weeks: "11 ian – 19 feb 2027",
          items: [
            { t: "Prețuiește-ți neamul!", d: "Română", w: "11 ian – 19 feb", s: "30 ore" },
            { t: "Împărțirea 0–1 000 000", d: "Matematică", w: "11 ian – 19 feb", s: "24 ore" },
            { t: "Științele Pământului", d: "Științe", w: "11 ian – 19 feb", s: "6 ore" }
          ]
        },
        {
          name: "Modulul 4",
          weeks: "1 mar – 23 apr 2027",
          items: [
            { t: "Iubește-ți familia!", d: "Română", w: "1 mar – 16 apr", s: "35 ore" },
            { t: "Probleme", d: "Matematică", w: "1–12 mar", s: "8 ore" },
            { t: "Fracții", d: "Matematică", w: "15–26 mar", s: "8 ore" },
            { t: "Elemente intuitive de geometrie", d: "Matematică", w: "29 mar – 16 apr", s: "12 ore" },
            { t: "Științele Pământului (cont.) · Fizica", d: "Științe", w: "1 mar – 16 apr", s: "7 ore" }
          ]
        },
        {
          name: "Modulul 5",
          weeks: "5 mai – 18 iun 2027",
          items: [
            { t: "Fii vesel mereu!", d: "Română", w: "5–28 mai", s: "18 ore" },
            { t: "Ai reușit!", d: "Română", w: "31 mai – 18 iun", s: "14 ore" },
            { t: "Unități de măsură", d: "Matematică", w: "5–28 mai", s: "14 ore" },
            { t: "Recapitulare finală", d: "Matematică", w: "31 mai – 18 iun", s: "12 ore" },
            { t: "Științele fizicii (cont.) · Recapitulare", d: "Științe", w: "5 mai – 18 iun", s: "7 ore" }
          ]
        }
      ]
    }
  }
};
