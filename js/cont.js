/* Contul — profil copil + mascotă (ou→rață) + puncte. Demo localStorage; gamificare în gamificare.js. */

(function () {
  const APP = window.APP;
  const Store = window.Store;
  const Gam = window.Gamification;
  const $ = function (id) { return document.getElementById(id); };

  function getSession() {
    try { return JSON.parse(localStorage.getItem('sdh_session') || 'null'); }
    catch (e) { return null; }
  }
  function getChild() {
    try { return JSON.parse(localStorage.getItem('sdh_child') || 'null'); }
    catch (e) { return null; }
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

    const points = Store.points();
    $('m-points').textContent = points;
    $('go-class').setAttribute('href', 'clasa.html?n=' + c.clasa);
    $('go-class').textContent = 'Începe învățarea în ' + (cls ? cls.short : 'clasă') + ' →';

    renderEgg(c.sex, points);
    renderProgress(points);
  }

  function renderEgg(sex, points) {
    Gam.render($('egg-stage'), sex, points);
  }

  function renderProgress(points) {
    const stage = Gam.stageFor(points);
    const st = Gam.STAGES[stage];
    const next = Gam.nextStage(points);
    const el = $('egg-progress');
    let html = '<span class="stage-name">' + st.name + '</span> · ' + st.desc;
    if (next) {
      html += '<br><span class="stage-next">Pentru următoarea etapă („' + next.name + '") mai ai nevoie de ' + next.need + ' puncte.</span>';
    } else {
      html += '<br><span class="stage-next">🎉 Rățușca a crescut complet — e gata de joacă!</span>';
    }
    const bar = '<div class="egg-bar-wrap"><div class="egg-bar" style="width:' + (stage < Gam.STAGES.length - 1 ? Math.min(100, Math.round(points * 100 / Gam.STAGES[stage + 1].min)) : 100) + '%"></div></div>';
    el.innerHTML = html + bar;
  }
})();
