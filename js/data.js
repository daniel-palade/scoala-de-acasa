/* Datele site-ului — prototip demonstrativ.
   Conținutul educațional de aici este DOAR exemplu și va fi înlocuit
   cu planificarea oficială a Ministerului Educației (edu.ro). */

window.APP = {
  brand: "Școala de Acasă",
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
      desc: "Înmulțire, împărțire, texte și primele noțiuni de științe, istorie și geografie."
    },
    {
      n: 4,
      title: "Clasa a IV-a",
      short: "Clasa 4",
      color: "#9333ea",
      tint: "#cd9df2",
      emoji: "🧭",
      desc: "Pregătirea pentru gimnaziu: fracții, compuneri și cunoștințe generale solide."
    }
  ],

  /* Structura anului școlar — EXEMPLU DEMONSTRATIV */
  structure: {
    0: {
      disciplines: [
        "Comunicare în limba română",
        "Matematică și explorarea mediului",
        "Arte vizuale și abilități practice",
        "Muzică și mișcare",
        "Dezvoltare personală"
      ],
      semestre: [
        { name: "Semestrul I", units: [
          { title: "Suntem elevi — clasa pregătitoare", weeks: "săpt. 1–4", subject: "Dezvoltare personală", body: "Rutinele de școală, reguli simple, cunoașterea colegilor." },
          { title: "Sunete, silabe și primele litere", weeks: "săpt. 5–10", subject: "Comunicare în limba română", body: "Discriminarea sunetelor, silabizare, literele de bază." },
          { title: "Numerele 0–10 și formele", weeks: "săpt. 11–16", subject: "Matematică și explorarea mediului", body: "Numărare, comparare, formele geometrice de bază." }
        ]},
        { name: "Semestrul II", units: [
          { title: "Citit și scris de mână", weeks: "săpt. 17–24", subject: "Comunicare în limba română", body: "Citit silabic, scris corect al literelor învățate." },
          { title: "Numerele 0–31 și noțiuni de timp", weeks: "săpt. 25–30", subject: "Matematică și explorarea mediului", body: "Numărare extinsă, zilele săptămânii, luni, anotimpuri." },
          { title: "Anotimpuri și mediul înconjurător", weeks: "săpt. 31–35", subject: "Matematică și explorarea mediului", body: "Plante, animale, vreme — prin observare și joc." }
        ]}
      ]
    },
    1: {
      disciplines: [
        "Comunicare în limba română",
        "Matematică și explorarea mediului",
        "Arte vizuale și abilități practice",
        "Muzică și mișcare",
        "Dezvoltare personală"
      ],
      semestre: [
        { name: "Semestrul I", units: [
          { title: "Litere și sunete (a, m, i, u, n, r)", weeks: "săpt. 1–8", subject: "Comunicare în limba română", body: "Recunoașterea și scrierea literelor, citirea silabelor." },
          { title: "Numerele naturale 0–10", weeks: "săpt. 9–12", subject: "Matematică", body: "Numărare, comparare, adunări mici." },
          { title: "Numerele 0–31 și măsurători simple", weeks: "săpt. 13–16", subject: "Matematică", body: "Extindere, bani, unități de lungime neconvenționale." }
        ]},
        { name: "Semestrul II", units: [
          { title: "Lectură fluentă și scriere de propoziții", weeks: "săpt. 17–24", subject: "Comunicare în limba română", body: "Citit cursiv, propoziții simple, despărțire în silabe." },
          { title: "Numerele 0–100", weeks: "săpt. 25–28", subject: "Matematică", body: "Zeci și unități, ordine, compunere și descompunere." },
          { title: "Adunarea și scăderea până la 100 (fără trecere)", weeks: "săpt. 29–33", subject: "Matematică", body: "Operații pe baza materialului concret, probleme simple." },
          { title: "Plante și animale din jurul nostru", weeks: "săpt. 34–35", subject: "Științe", body: "Observare și descriere a mediului apropiat." }
        ]}
      ]
    },
    2: {
      disciplines: [
        "Comunicare în limba română",
        "Matematică și explorarea mediului",
        "Arte vizuale și abilități practice",
        "Muzică și mișcare",
        "Dezvoltare personală"
      ],
      semestre: [
        { name: "Semestrul I", units: [
          { title: "Textul: citire și înțelegere", weeks: "săpt. 1–6", subject: "Comunicare în limba română", body: "Citire conștientă, identificarea ideilor principale." },
          { title: "Numere 0–100: compunere și descompunere", weeks: "săpt. 7–10", subject: "Matematică", body: "Sute, zeci, unități; ordonare și comparare." },
          { title: "Adunare și scădere cu trecere peste ordin", weeks: "săpt. 11–16", subject: "Matematică", body: "Algoritmi de calcul, probe prin operația inversă." }
        ]},
        { name: "Semestrul II", units: [
          { title: "Ortografie și despărțirea în silabe", weeks: "săpt. 17–22", subject: "Comunicare în limba română", body: "Reguli de bază, scriere corectă a cuvintelor frecvente." },
          { title: "Înmulțirea (baze) — tabla înmulțirii", weeks: "săpt. 23–27", subject: "Matematică", body: "Conceptul de înmulțire, tabla înmulțirii cu 2, 3, 4, 5." },
          { title: "Măsurători și geometrie", weeks: "săpt. 28–31", subject: "Matematică", body: "Lungimi, timp, bani; figuri geometrice plane." },
          { title: "Mediul înconjurător: plante și viețuitoare", weeks: "săpt. 32–35", subject: "Științe", body: "Necesitățile viețuitoarelor, igiena și sănătatea." }
        ]}
      ]
    },
    3: {
      disciplines: [
        "Limba română",
        "Matematică",
        "Științe ale naturii",
        "Istorie",
        "Geografie",
        "Educație civică",
        "Limba engleză"
      ],
      semestre: [
        { name: "Semestrul I", units: [
          { title: "Textul narativ și părțile lui", weeks: "săpt. 1–5", subject: "Limba română", body: "Personaje, desfășurare, idee principală; povestire." },
          { title: "Numere naturale până la 1 000 000", weeks: "săpt. 6–9", subject: "Matematică", body: "Citire, scriere, comparare, rotunjire." },
          { title: "Înmulțirea și împărțirea", weeks: "săpt. 10–13", subject: "Matematică", body: "Tabla înmulțirii, împărțirea, relația dintre ele." },
          { title: "Localitatea și țara mea", weeks: "săpt. 14–16", subject: "Geografie / Istorie", body: "Orientare, harta simplă, momente importante din trecut." }
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
      disciplines: [
        "Limba română",
        "Matematică",
        "Științe ale naturii",
        "Istorie",
        "Geografie",
        "Educație civică",
        "Limba engleză"
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
