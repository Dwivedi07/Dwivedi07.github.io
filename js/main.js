/**
 * Dark / light theme toggle.
 * Respects system preference by default; user choice is stored in localStorage.
 */
(function () {
  const STORAGE_KEY = 'theme';
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  function getSystemDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(theme) {
    // theme: 'light' | 'dark' | null (null = follow system)
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
    } else {
      applyTheme(null);
    }
  }

  function toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const systemDark = getSystemDark();
    let next;
    if (current === 'dark') {
      next = 'light';
    } else if (current === 'light') {
      next = 'dark';
    } else {
      next = systemDark ? 'light' : 'dark';
    }
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  init();
  btn.addEventListener('click', toggle);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(null);
    }
  });
})();
