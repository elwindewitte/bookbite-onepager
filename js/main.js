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