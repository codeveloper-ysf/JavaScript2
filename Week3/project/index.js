'use strict';

const tipForm = document.querySelector('form')
const billAmount = document.querySelector('#bill');
const serviceOption = document.querySelector('select');
const peopleAmount = document.querySelector('#people');
const tipAmount = document.querySelector('#tip-amount');
const tip = document.querySelector('h2');
const each = document.querySelector('h4');

tipForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (billAmount.value !== '' && serviceOption.value !== '0' && peopleAmount.value !== '') {
        let billValue = Number(billAmount.value);
        let serviceValue = Number(serviceOption.value);
        let peopleValue = Number(peopleAmount.value)
        const result = ((billValue * serviceValue / 100) / peopleValue).toFixed(2);
        tip.innerText = `$ ${result}`;
        tipAmount.style.display = 'block';
        each.style.display = 'block';
        if (peopleValue === 1) {
            each.style.display = 'none';
        }
    }
    if (billAmount.value === '' || serviceOption.value === '0' || peopleAmount.value === '') {
        alert('You need to fill in all the fields!');
        tipForm.reset();
    }
})