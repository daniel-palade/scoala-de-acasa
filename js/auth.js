/* Autentificare — flux demo (localStorage). Contul real se leagă de un backend. */

(function () {
  const $ = function (id) { return document.getElementById(id); };

  const tabs = $('tabs');
  const loginForm = $('login-form');
  const registerForm = $('register-form');
  const msg = $('form-msg');

  // taburi
  function showTab(which) {
    const isLogin = which === 'login';
    loginForm.style.display = isLogin ? '' : 'none';
    registerForm.style.display = isLogin ? 'none' : '';
    tabs.querySelectorAll('button').forEach(function (b) {
      b.classList.toggle('active', b.dataset.tab === which);
    });
    hideMsg();
  }
  tabs.addEventListener('click', function (e) {
    const b = e.target.closest('button[data-tab]');
    if (b) showTab(b.dataset.tab);
  });
  $('go-register').addEventListener('click', function (e) { e.preventDefault(); showTab('register'); });
  $('go-login').addEventListener('click', function (e) { e.preventDefault(); showTab('login'); });

  // arată parola
  document.querySelectorAll('.toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const inp = $(btn.dataset.target);
      const hidden = inp.type === 'password';
      inp.type = hidden ? 'text' : 'password';
      btn.textContent = hidden ? 'ascunde' : 'arată';
    });
  });

  // putere parolă
  const strength = $('strength');
  $('reg-pass').addEventListener('input', function (e) {
    const v = e.target.value;
    let lvl = 0;
    if (v.length >= 8) lvl++;
    if (/[A-Z]/.test(v) && /[a-z]/.test(v)) lvl++;
    if (/\d/.test(v)) lvl++;
    if (/[^A-Za-z0-9]/.test(v)) lvl++;
    strength.dataset.level = lvl;
  });

  function showMsg(text, ok) {
    msg.textContent = text;
    msg.className = 'form-msg show ' + (ok ? 'ok' : 'err');
  }
  function hideMsg() { msg.className = 'form-msg'; }

  // stocare demo
  function getUsers() {
    try { return JSON.parse(localStorage.getItem('sdh_users') || '[]'); }
    catch (e) { return []; }
  }
  function saveUsers(users) { localStorage.setItem('sdh_users', JSON.stringify(users)); }
  function setSession(u) { localStorage.setItem('sdh_session', JSON.stringify(u)); }

  // ÎNREGISTRARE
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = $('reg-name').value.trim();
    const email = $('reg-email').value.trim().toLowerCase();
    const pass = $('reg-pass').value;
    const pass2 = $('reg-pass2').value;
    const terms = $('reg-terms').checked;

    if (!name) return showMsg('Te rugăm să introduci numele complet.', false);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return showMsg('Emailul nu pare valid.', false);
    if (pass.length < 8) return showMsg('Parola trebuie să aibă minim 8 caractere.', false);
    if (pass !== pass2) return showMsg('Parolele nu coincid.', false);
    if (!terms) return showMsg('Trebuie să accepți Termenii și Confidențialitatea.', false);

    const users = getUsers();
    if (users.some(function (u) { return u.email === email; })) {
      return showMsg('Există deja un cont cu acest email. Autentifică-te.', false);
    }
    const user = { name: name, email: email, created: new Date().toISOString() };
    users.push(user);
    saveUsers(users);
    setSession(user);
    showMsg('Cont creat cu succes! Vei fi redirecționat…', true);
    setTimeout(function () { window.location.href = 'cont.html'; }, 1100);
  });

  // AUTENTIFICARE
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = $('login-email').value.trim().toLowerCase();
    const pass = $('login-pass').value;

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return showMsg('Introdu un email valid.', false);
    if (!pass) return showMsg('Introdu parola.', false);

    const users = getUsers();
    const user = users.find(function (u) { return u.email === email; });
    if (!user) {
      return showMsg('Nu am găsit un cont cu acest email. Creează unul.', false);
    }
    setSession(user);
    showMsg('Bine ai venit, ' + user.name.split(' ')[0] + '! Redirecționare…', true);
    setTimeout(function () { window.location.href = 'cont.html'; }, 900);
  });

  // Google (demo)
  $('google-login').addEventListener('click', function () {
    showMsg('Autentificarea cu Google este disponibilă după conectarea backend-ului (demo).', false);
  });
  $('google-register').addEventListener('click', function () {
    showMsg('Înregistrarea cu Google este disponibilă după conectarea backend-ului (demo).', false);
  });

  // dacă e deja logat, mergem direct la cont
  const session = localStorage.getItem('sdh_session');
  if (session) {
    window.location.href = 'cont.html';
  }
})();
