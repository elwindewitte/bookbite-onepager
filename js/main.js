window.onload = function () {
  var toggleSection = document.getElementById('styleguide');
  var assetLogo = document.getElementById('assetLogo');
  var assetWordmark = document.getElementById('assetWordmark');
  var colorTheme = localStorage.getItem('theme');

  if (!(colorTheme == 'light') && !(colorTheme == 'dark')) {
    toggleSection.classList.add('dark');
    toggleSection.classList.remove('light');
    localStorage.setItem('theme', 'dark');
    // Changing the logos
    assetLogo.innerHTML = '<img src="/assets/logos/bookbite-logo-light.svg"><p class="description">Logo</p>';
    assetWordmark.innerHTML = '<img src="/assets/logos/bookbite-wordmark-light.svg"><p class="description">Wordmark</p>';

  } else if (colorTheme == 'light') {
    toggleSection.classList.add('dark');
    toggleSection.classList.remove('light');
    localStorage.setItem('theme', 'dark');
    // Changing the logos
    assetLogo.innerHTML = '<img src="/assets/logos/bookbite-logo-dark.svg"><p class="description">Logo</p>';
    assetWordmark.innerHTML = '<img src="/assets/logos/bookbite-wordmark-dark.svg"><p class="description">Wordmark</p>';

  } else if (colorTheme == 'dark') {
    toggleSection.classList.add('light');
    toggleSection.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    // Changing the logos
    assetLogo.innerHTML = '<img src="/assets/logos/bookbite-logo-light.svg"><p class="description">Logo</p>';
    assetWordmark.innerHTML = '<img src="/assets/logos/bookbite-wordmark-light.svg"><p class="description">Wordmark</p>';
  }
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var menuOpen = localStorage.getItem('menuOpen');
  if (menuOpen !== 'true') {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navigation").style.top = "0";
    } else {
      document.getElementById("navigation").style.top = "-89px";
    }
  }
  prevScrollpos = currentScrollPos;
}

function toggleMenu() {
  var menuOpen = localStorage.getItem('menuOpen');
  var menuTrigger = document.getElementById('menu-trigger');
  var menu = document.getElementById('menu');

  if (!(menuOpen == 'true') && !(menuOpen == 'false')) {
    menu.classList.add('visible');
    menu.classList.remove('hidden');
    menuTrigger.innerHTML = '<a class="list-item">Menu</a><img src="/assets/icons/close-24.svg">';
    localStorage.setItem('menuOpen', 'true');
  } else if (menuOpen == 'true') {
    menu.classList.add('hidden');
    menu.classList.remove('visible');
    menuTrigger.innerHTML = '<a class="list-item">Menu</a><img src="/assets/icons/menu-24.svg">';
    localStorage.setItem('menuOpen', 'false');
  } else if (menuOpen == 'false') {
    menu.classList.add('visible');
    menu.classList.remove('hidden');
    menuTrigger.innerHTML = '<a class="list-item">Menu</a><img src="/assets/icons/close-24.svg">';
    localStorage.setItem('menuOpen', 'true');
  }
}

// TOGGLE LIGHT/DARK MODE
function toggleLightDark() {
  var toggleSection = document.getElementById('styleguide');
  var toggleContainer = document.getElementById('toggleContainer');
  var textLightMode = document.getElementById('textLightMode');
  var textDarkMode = document.getElementById('textDarkMode');
  var assetLogo = document.getElementById('assetLogo');
  var assetWordmark = document.getElementById('assetWordmark');
  var colorTheme = localStorage.getItem('theme');

  if (!(colorTheme == 'light') && !(colorTheme == 'dark')) {
    toggleSection.classList.add('dark');
    toggleSection.classList.remove('light');
    localStorage.setItem('theme', 'dark');
    // Changing the logos
    assetLogo.innerHTML = '<img src="/assets/logos/bookbite-logo-light.svg"><p class="description">Logo</p>';
    assetWordmark.innerHTML = '<img src="/assets/logos/bookbite-wordmark-light.svg"><p class="description">Wordmark</p>';

  } else if (colorTheme == 'light') {
    toggleSection.classList.add('dark');
    toggleSection.classList.remove('light');
    localStorage.setItem('theme', 'dark');
    // Changing the logos
    assetLogo.innerHTML = '<img src="/assets/logos/bookbite-logo-dark.svg"><p class="description">Logo</p>';
    assetWordmark.innerHTML = '<img src="/assets/logos/bookbite-wordmark-dark.svg"><p class="description">Wordmark</p>';

  } else if (colorTheme == 'dark') {
    toggleSection.classList.add('light');
    toggleSection.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    // Changing the logos
    assetLogo.innerHTML = '<img src="/assets/logos/bookbite-logo-light.svg"><p class="description">Logo</p>';
    assetWordmark.innerHTML = '<img src="/assets/logos/bookbite-wordmark-light.svg"><p class="description">Wordmark</p>';
  }
}