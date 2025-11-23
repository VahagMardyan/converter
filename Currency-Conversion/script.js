import { convertMoneyByRealTime, convertMoney } from './exportFunctions.js';

const value = document.getElementById('value');
const result = document.getElementById('result');
const select = document.querySelector('select');
const search = document.getElementById('search');
const convert = document.querySelector('#convert');
const convertByRealTime = document.querySelector('#convertByRealTime');
const reset = document.querySelector('#reset');
const options = Array.from(select.options);

function renderOptions() {
    const searchTerm = search.value.toLowerCase();
    select.innerHTML = '';

    options.forEach((option) => {
        const optionText = option.innerText.toLowerCase();
        if (optionText.includes(searchTerm) || searchTerm === '') {
            select.append(option);
        }
    });
}

convert.addEventListener('click', convertMoney);
convertByRealTime.addEventListener('click', convertMoneyByRealTime);
reset.addEventListener('click', () => location.reload());
document.addEventListener('keypress', (event) => event.key === 'Enter' ? convertMoney() : null);
search.addEventListener('keyup', renderOptions);

