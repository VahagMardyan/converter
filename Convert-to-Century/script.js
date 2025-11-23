import { convertToCentury } from './exportFunctions.js';

const value = document.querySelector('#value');
const result = document.querySelector('#result');

const convert = document.querySelector('#convert');
const reset = document.querySelector('#reset');

convert.addEventListener('click', convertToCentury);
reset.addEventListener('click', () => location.reload());
document.addEventListener('keypress', (event) => event.key === 'Enter' ? convertToCentury() : null);

