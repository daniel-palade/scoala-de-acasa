/* Gamificare — mascota ou → rățușcă, în funcție de puncte și sexul copilului. */

(function () {
  const STAGES = [
    { min: 0,   name: 'Oul',           desc: 'Oul tocmai a apărut. E gata să crească alături de tine!' },
    { min: 30,  name: 'Ou crăpat',     desc: 'Oul a crăpat — ceva se mișcă înăuntru!' },
    { min: 100, name: 'Pui de rață',   desc: 'Puiul și-a scos capul din ou. Bună, lume!' },
    { min: 200, name: 'Boboc',         desc: 'Bobocul a ieșit din ou și face primii pași.' },
    { min: 350, name: 'Rățușcă',       desc: 'Rățușca crește frumos și prinde culoare.' },
    { min: 500, name: 'Rățușcă vedetă',desc: 'Rățușca e mândră și gata de joacă!' }
  ];

  function stageFor(points) {
    let idx = 0;
    for (let i = 0; i < STAGES.length; i++) { if (points >= STAGES[i].min) idx = i; }
    return idx;
  }

  function nextStage(points) {
    const idx = stageFor(points);
    if (idx >= STAGES.length - 1) return null;
    return { name: STAGES[idx + 1].name, need: STAGES[idx + 1].min - points };
  }

  // Accessorii pentru conturi
  const mid = '#f6c453', midDark = '#f59e0b', bill = '#fb923c', foot = '#f97316';
  const boyEdge = '#3b82f6', girlEdge = '#ec4899';

  // ————— SVG: oul (etapa 0–1) —————
  function eggSVG(boy, cracked) {
    const edge = boy ? boyEdge : girlEdge;
    const body = boy ? '#a5d6ff' : '#ffc2d9';
    let crack = '';
    if (cracked) {
      crack =
        '<path d="M96 58 L88 84 L104 96 L92 118" stroke="#7c6f4a" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
        '<path d="M104 44 L116 58 L108 76" stroke="#7c6f4a" stroke-width="3" fill="none" stroke-linecap="round"/>' +
        '<path d="M80 112 L94 126 L88 144" stroke="#7c6f4a" stroke-width="3" fill="none" stroke-linecap="round"/>';
    }
    return '<svg class="egg-svg" viewBox="0 0 240 280" role="img" aria-label="Oul mascotă">' +
      '<defs><linearGradient id="eG" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="' + body + '"/></linearGradient></defs>' +
      '<ellipse cx="80" cy="150" rx="9" ry="11" fill="' + body + '" opacity="0.5"/>' +
      '<ellipse cx="164" cy="138" rx="8" ry="10" fill="' + body + '" opacity="0.45"/>' +
      '<ellipse cx="120" cy="170" rx="86" ry="108" fill="url(#eG)" stroke="' + edge + '" stroke-width="3"/>' +
      '<circle cx="92" cy="172" r="12" fill="#fda4af" opacity="0.75"/>' +
      '<circle cx="148" cy="172" r="12" fill="#fda4af" opacity="0.75"/>' +
      '<circle cx="98" cy="148" r="8" fill="#1f2937"/>' +
      '<circle cx="142" cy="148" r="8" fill="#1f2937"/>' +
      '<circle cx="100" cy="146" r="3" fill="#fff"/>' +
      '<circle cx="144" cy="146" r="3" fill="#fff"/>' +
      '<path d="M110 178 Q120 192 130 178" stroke="#1f2937" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      crack +
      '</svg>';
  }

  // ————— SVG: pui care iese din ou (etapa 2) —————
  function chickSVG(boy) {
    const edge = boy ? boyEdge : girlEdge;
    return '<svg class="egg-svg" viewBox="0 0 240 280" role="img" aria-label="Pui de rață">' +
      '<path d="M34 190 Q34 268 120 268 Q206 268 206 190 L206 200 L34 200 Z" fill="' + (boy ? '#dbeafe' : '#fce7f3') + '" stroke="' + edge + '" stroke-width="3"/>' +
      '<path d="M60 204 L74 196 L88 204 L102 196 L120 204 L138 196 L152 204 L166 196 L180 204" stroke="' + edge + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M90 150 L86 200 M150 150 L154 200" stroke="' + edge + '" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      '<circle cx="120" cy="116" r="52" fill="' + mid + '"/>' +
      '<circle cx="120" cy="90" r="18" fill="' + mid + '"/>' +
      '<path d="M120 116 L138 116 L129 130 Z" fill="' + bill + '"/>' +
      '<circle cx="104" cy="106" r="7" fill="#1f2937"/>' +
      '<circle cx="136" cy="106" r="7" fill="#1f2937"/>' +
      '<circle cx="106" cy="104" r="2.6" fill="#fff"/>' +
      '<circle cx="138" cy="104" r="2.6" fill="#fff"/>' +
      '<circle cx="100" cy="124" r="8" fill="#fda4af" opacity="0.7"/>' +
      '<circle cx="140" cy="124" r="8" fill="#fda4af" opacity="0.7"/>' +
      '</svg>';
  }

  // ————— SVG: rățușcă (etapa 3–5) —————
  function duckSVG(boy, full) {
    const shade = boy ? '#3b82f6' : '#ec4899';
    let extras = '';
    if (full) {
      if (boy) {
        extras =
          '<path d="M78 72 Q120 34 162 72 L162 58 Q120 26 78 58 Z" fill="#2563eb"/>' +
          '<path d="M78 58 Q120 22 162 58 L162 70 L78 70 Z" fill="#3b82f6"/>' +
          '<circle cx="120" cy="52" r="7" fill="#1d4ed8"/>';
      } else {
        extras =
          '<path d="M120 58 L94 42 L110 62 Z" fill="#ec4899"/>' +
          '<path d="M120 58 L146 42 L130 62 Z" fill="#ec4899"/>' +
          '<circle cx="120" cy="58" r="8" fill="#be185d"/>' +
          '<path d="M70 202 L170 202 L184 242 L56 242 Z" fill="#f9a8d4"/>' +
          '<path d="M70 202 Q120 214 170 202" fill="none" stroke="#db2777" stroke-width="3"/>';
      }
    }
    return '<svg class="egg-svg" viewBox="0 0 240 280" role="img" aria-label="Rățușcă">' +
      '<ellipse cx="92" cy="244" rx="17" ry="9" fill="' + foot + '"/>' +
      '<ellipse cx="148" cy="244" rx="17" ry="9" fill="' + foot + '"/>' +
      '<ellipse cx="120" cy="192" rx="66" ry="52" fill="' + mid + '"/>' +
      '<path d="M180 178 Q204 168 196 194 Q184 200 178 190 Z" fill="' + midDark + '"/>' +
      '<ellipse cx="76" cy="196" rx="24" ry="15" fill="' + midDark + '" transform="rotate(-18 76 196)"/>' +
      '<circle cx="120" cy="112" r="46" fill="' + mid + '"/>' +
      '<path d="M118 122 L148 122 L132 142 Z" fill="' + bill + '" stroke="#ea580c" stroke-width="2" stroke-linejoin="round"/>' +
      '<circle cx="102" cy="106" r="8" fill="#1f2937"/>' +
      '<circle cx="138" cy="106" r="8" fill="#1f2937"/>' +
      '<circle cx="104" cy="103" r="3" fill="#fff"/>' +
      '<circle cx="140" cy="103" r="3" fill="#fff"/>' +
      '<circle cx="96" cy="126" r="8" fill="#fda4af" opacity="0.7"/>' +
      '<circle cx="144" cy="126" r="8" fill="#fda4af" opacity="0.7"/>' +
      '<path d="M86 180 Q120 196 154 180" fill="none" stroke="' + shade + '" stroke-width="4" stroke-linecap="round" opacity="0.7"/>' +
      extras +
      '</svg>';
  }

  function accessoriesHTML(boy, stage) {
    if (stage < 4) return '';
    const accs = boy ? ['⚽', '🥅', '👟'] : ['🌸', '🌼', '🦋'];
    return '<span class="egg-acc a1">' + accs[0] + '</span>' +
      '<span class="egg-acc a2">' + accs[1] + '</span>' +
      '<span class="egg-acc a3">' + accs[2] + '</span>';
  }

  window.Gamification = {
    STAGES: STAGES,
    stageFor: stageFor,
    nextStage: nextStage,

    render: function (container, sex, points) {
      const boy = sex === 'baiat';
      const stage = stageFor(points);
      let svg;
      if (stage === 0) svg = eggSVG(boy, false);
      else if (stage === 1) svg = eggSVG(boy, true);
      else if (stage === 2) svg = chickSVG(boy);
      else svg = duckSVG(boy, stage === 5);
      container.innerHTML = accessoriesHTML(boy, stage) + svg;
    }
  };
})();
