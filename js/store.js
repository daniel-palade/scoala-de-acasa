/* Magazin de progres (localStorage) — puncte + lecții/teste finalizate.
   Chei: sdh_points (număr), sdh_done (obiect lecții terminate), sdh_quiz (obiect teste trecute). */

(function () {
  const P = 'sdh_points';
  const DONE = 'sdh_done';
  const QUIZ = 'sdh_quiz';

  function num(v) { const n = parseInt(v, 10); return isNaN(n) ? 0 : n; }
  function readObj(k) { try { return JSON.parse(localStorage.getItem(k) || '{}'); } catch (e) { return {}; } }
  function writeObj(k, v) { localStorage.setItem(k, JSON.stringify(v)); }

  function getPoints() { return num(localStorage.getItem(P)); }

  window.Store = {
    points: getPoints,

    addPoints: function (n) {
      localStorage.setItem(P, String(getPoints() + n));
      return getPoints();
    },

    lessonDone: function (key) { return !!readObj(DONE)[key]; },
    markLessonDone: function (key) { const o = readObj(DONE); o[key] = true; writeObj(DONE, o); },

    quizDone: function (key) { return !!readObj(QUIZ)[key]; },
    markQuizDone: function (key) { const o = readObj(QUIZ); o[key] = true; writeObj(QUIZ, o); }
  };
})();
