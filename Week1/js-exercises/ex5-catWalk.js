"use strict";

const firstImg = document.querySelector('img');
firstImg.style.left = "0px";
const walkingCat = "http://www.anniemation.com/clip_art/images/cat-walk.gif"
const dancingCat = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";

function catWalk() {
    const currentPosition = parseInt(firstImg.style.left, 10);
    const centerOfImg = currentPosition + (firstImg.width / 2);
    if (centerOfImg > (window.innerWidth / 2) - 5 && centerOfImg <= (window.innerWidth / 2) + 5) {
        firstImg.src = dancingCat;
        return setTimeout(() => {
            firstImg.src = walkingCat;
            firstImg.style.left = `${currentPosition + 10}px`;
            catWalk();
        }, 5000);
    }
    if (currentPosition + firstImg.width > window.innerWidth) {
        firstImg.style.left = "0px";
    } else {
        firstImg.style.left = `${currentPosition + 10}px`;
    }
    setTimeout(catWalk, 50);
}

catWalk();