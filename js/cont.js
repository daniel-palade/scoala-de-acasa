/* Contul — profil copil + mascota (ou) + puncte. Demo localStorage. */

(function () {
  const APP = window.APP;
  const $ = function (id) { return document.getElementById(id); };

  function getSession() {
    try { return JSON.parse(localStorage.getItem('sdh_session') || 'null'); }
    catch (e) { return null; }
  }
  function getChild() {
    try { return JSON.parse(localStorage.getItem('sdh_child') || 'null'); }
    catch (e) { return null; }
  }
  function getPoints() {
    const v = parseInt(localStorage.getItem('sdh_points') || '0', 10);
    return isNaN(v) ? 0 : v;
  }
  function saveChild(c) { localStorage.setItem('sdh_child', JSON.stringify(c)); }

  // fără sesiune → autentificare
  const session = getSession();
  if (!session) {
    window.location.href = 'autentificare.html';
    return;
  }

  // populăm selectul de clasă
  const sel = $('c-clasa');
  APP.classes.forEach(function (c) {
    const o = document.createElement('option');
    o.value = c.n;
    o.textContent = c.title;
    sel.appendChild(o);
  });

  const child = getChild();
  if (child) {
    showDashboard(child);
  } else {
    $('form-view').style.display = '';
    $('dash-view').style.display = 'none';
  }

  // logout
  $('logout').addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('sdh_session');
    window.location.href = 'index.html';
  });

  // formular copil
  $('child-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = $('c-name').value.trim();
    const sex = (document.querySelector('input[name="sex"]:checked') || {}).value;
    const clasa = parseInt($('c-clasa').value, 10);
    const varsta = $('c-varsta').value.trim();
    const an = $('c-an').value;

    if (!name) return alert('Scrie prenumele copilului.');
    if (!sex) return alert('Alege sexul copilului (oul băiat sau oul fată).');
    if (!varsta) return alert('Scrie vârsta copilului.');

    const c = {
      name: name,
      sex: sex,
      clasa: clasa,
      varsta: varsta,
      an: an,
      created: new Date().toISOString()
    };
    saveChild(c);
    if (localStorage.getItem('sdh_points') === null) {
      localStorage.setItem('sdh_points', '0');
    }
    showDashboard(c);
  });

  function showDashboard(c) {
    const cls = APP.classes.find(function (x) { return x.n === c.clasa; });
    $('form-view').style.display = 'none';
    $('dash-view').style.display = '';

    const parentName = session.name ? session.name.split(' ')[0] : 'părinte';
    $('dash-hello').textContent = 'Bine ai venit, ' + parentName + '!';
    $('m-name').textContent = c.name + ' · ' + (cls ? cls.short : '');

    const sexLabel = c.sex === 'baiat' ? 'Băiat' : 'Fată';
    $('m-meta').innerHTML =
      '<b>' + sexLabel + '</b> · ' + (cls ? cls.title : '') +
      '<br>Vârsta: ' + c.varsta + ' ani · An școlar: ' + c.an;

    $('m-points').textContent = getPoints();
    $('go-class').setAttribute('href', 'clasa.html?n=' + c.clasa);
    $('go-class').textContent = 'Începe învățarea în ' + (cls ? cls.short : 'clasă') + ' →';

    renderEgg(c.sex);
  }

  function renderEgg(sex) {
    const stage = $('egg-stage');
    const boy = sex === 'baiat';
    const accs = boy ? ['⚽', '🥅', '👟'] : ['🌸', '🌼', '🦋'];
    stage.innerHTML =
      '<span class="egg-acc a1">' + accs[0] + '</span>' +
      '<span class="egg-acc a2">' + accs[1] + '</span>' +
      '<span class="egg-acc a3">' + accs[2] + '</span>' +
      eggSVG(sex);
  }

  function eggSVG(sex) {
    const boy = sex === 'baiat';
    const mid = boy ? '#a5d6ff' : '#ffc2d9';
    const edge = boy ? '#3b82f6' : '#ec4899';
    const acc = boy
      ? '<path d="M60 86 A50 50 0 0 1 160 86 L160 70 A50 50 0 0 0 60 70 Z" fill="#3b82f6"/>' +
        '<rect x="58" y="54" width="104" height="12" rx="6" fill="#2563eb"/>'
      : '<path d="M110 54 l-22 -15 l13 19 Z" fill="#ec4899"/>' +
        '<path d="M110 54 l22 -15 l-13 19 Z" fill="#ec4899"/>' +
        '<circle cx="110" cy="54" r="7" fill="#be185d"/>';
    return '<svg class="egg-svg" viewBox="0 0 220 270" role="img" aria-label="Oul mascotă">' +
      '<defs><linearGradient id="eG" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="' + mid + '"/></linearGradient></defs>' +
      '<ellipse cx="72" cy="135" rx="8" ry="10" fill="' + mid + '" opacity="0.5"/>' +
      '<ellipse cx="152" cy="122" rx="7" ry="9" fill="' + mid + '" opacity="0.45"/>' +
      '<ellipse cx="132" cy="232" rx="8" ry="10" fill="' + mid + '" opacity="0.4"/>' +
      '<ellipse cx="62" cy="195" rx="6" ry="8" fill="' + mid + '" opacity="0.4"/>' +
      '<ellipse cx="110" cy="150" rx="80" ry="100" fill="url(#eG)" stroke="' + edge + '" stroke-width="3"/>' +
      '<circle cx="82" cy="155" r="11" fill="#fda4af" opacity="0.75"/>' +
      '<circle cx="138" cy="155" r="11" fill="#fda4af" opacity="0.75"/>' +
      '<circle cx="88" cy="132" r="7.5" fill="#1f2937"/>' +
      '<circle cx="132" cy="132" r="7.5" fill="#1f2937"/>' +
      '<circle cx="90" cy="130" r="2.8" fill="#fff"/>' +
      '<circle cx="134" cy="130" r="2.8" fill="#fff"/>' +
      '<path d="M100 160 Q110 174 120 160" stroke="#1f2937" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      acc +
      '</svg>';
  }
})();
