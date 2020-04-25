'use strict';

const timer = document.querySelector('.timer');
const timerDownButton = document.querySelector('#timerDown');
const duration = document.querySelector('#duration');
const timerUpButton = document.querySelector('#timerUp');
const clock = document.querySelector('.clock');
const minute = document.querySelector('#min');
const second = document.querySelector('#sec');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');

let sessionLength = Number(duration.textContent) * 60 * 1000;
let countDownMili = new Date(sessionLength);
let timerInterval;
let clickCount = 0;
let isTrue = true;

function zero(number) {
    if (number < 10) {
        minute.textContent = "0" + minute.textContent
    }
}

timerDownButton.addEventListener('click', () => {
    if (clickCount < 1 && isTrue) {
        duration.textContent--;
        minute.textContent--;
        sessionLength = Number(duration.textContent) * 60 * 1000;
        countDownMili = new Date(sessionLength);
        zero(duration.textContent);
    }
});

timerUpButton.addEventListener('click', () => {
    if (clickCount < 1 && isTrue) {
        duration.textContent++;
        minute.textContent++;
        sessionLength = Number(duration.textContent) * 60 * 1000;
        countDownMili = new Date(sessionLength);
        zero(duration.textContent)
    }
});

playButton.addEventListener('click', function () {
    clickCount++;
    if (clickCount === 1) {
        timerInterval = setInterval(() => {
            sessionLength -= 100;
            countDownMili = new Date(sessionLength);
            const minDisplay = countDownMili.getMinutes();
            const secDisplay = countDownMili.getSeconds();
            if (minDisplay < 10) {
                minute.textContent = "0" + minDisplay;
            }
            else {
                minute.textContent = minDisplay;
            }
            if (secDisplay < 10) {
                second.textContent = "0" + secDisplay;
            }
            else {
                second.textContent = secDisplay;
            }
            if (sessionLength === 0) {
                alert('TIME IS UP!');
                clearInterval(timerInterval);
                isTrue = true;
                clickCount = 0;
            }
        }, 100);
    }
});

pauseButton.addEventListener('click', function () {
    clearInterval(timerInterval)
    clickCount = 0;
    isTrue = false;
});

stopButton.addEventListener('click', function () {
    clearInterval(timerInterval);
    minute.textContent = duration.textContent;
    second.textContent = '00';
    sessionLength = Number(duration.textContent) * 60 * 1000;
    countDownMili = new Date(sessionLength);
    clickCount = 0;
    isTrue = true;
    zero(duration.textContent)
});