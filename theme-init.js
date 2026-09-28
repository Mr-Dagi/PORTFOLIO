'use strict';
// Runs before first paint (external file, so it is allowed by the CSP) to avoid a theme flash.
(function () {
  var theme = 'dark';
  try {
    var saved = window.localStorage.getItem('cv:theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (e) { /* storage unavailable */ }
  document.documentElement.setAttribute('data-theme', theme);
})();
