'use strict';

const clock = document.createElement('div');

function displayCurrentTime() {
  clock.innerHTML = new Date().toLocaleTimeString();
  document.body.appendChild(clock);
}

window.onload = displayCurrentTime;
setInterval(displayCurrentTime, 1000);