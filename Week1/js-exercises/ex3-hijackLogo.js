'use strict';

function hijackGoogleLogo() {
  const logo = document.querySelector('#hplogo');
  logo.setAttribute('src','https://www.hackyourfuture.dk/static/logo-dark.svg')
    
}

hijackGoogleLogo();