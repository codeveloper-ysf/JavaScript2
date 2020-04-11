'use strict';

document.body.style.fontFamily = 'Arial, sans-serif';
document.getElementById("nickname").innerText = 'codeveloper';
document.getElementById("fav-food").innerText = 'javascript';
document.getElementById("hometown").innerText = 'hackyourfuture';

const items = document.querySelectorAll('li');
items.forEach(item => {
    item.classList = 'list-item';
});

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.list-item{color:red}';
document.head.appendChild(style);

var img = new Image(200, 200);
img.src = 'https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg';
document.body.appendChild(img);