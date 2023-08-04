let menuToggler = document.getElementById('menuToggler');
let menuTogglerLabel = document.getElementById('menuTogglerLabel');
let sidebar = document.getElementById('sidebar');
let menuLinks = document.getElementsByClassName('menu-link');

menuToggler.addEventListener('change', function() {
  if (menuToggler.checked) {
    menuTogglerLabel.setAttribute('aria-pressed', 'true');
    sidebar.setAttribute('aria-hidden', 'false');    
  } else {
    menuTogglerLabel.setAttribute('aria-pressed', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
  }
  
  for (let menuLink of menuLinks) {
    if (menuToggler.checked) {
      menuLink.setAttribute('tabindex', '0');
    } else {
      menuLink.setAttribute('tabindex', '-1');
    }
  }  
});

