const value = document.getElementById('value');
const result = document.getElementById('result');

const select = document.getElementById('select');
const converterValue = document.getElementById('converterValue');

const converter = document.getElementById('convert');
const reset = document.getElementById('reset');

const deg = '°';

function convertToTemp() {

    const C_F = (9 / 5) * Number(value.value) + 32;
    const F_C = (5 / 9) * (Number(value.value) - 32);

    const C_K = Number(value.value) + 273.15;
    const k_C = Number(value.value) - 273.15;

    const F_K = F_C + 273.15;
    const K_F = (9 / 5) * (Number(value.value) - 273.15) + 32;

    if (!select.value) {
        result.style.color = `red`;
        result.value = `Choose the temperature`;
        return;
    } else if (!converterValue.value) {
        result.style.color = `red`;
        result.value = `Choose the temperature to convert`;
        return;
    } else if (!value.value) {
        result.style.color = `red`;
        result.value = `Input Number`;
        return;
    } else if (isNaN(value.value)) {
        result.style.color = `red`;
        result.value = `Invalid character "${value.value}": Input number`;
        return;
    } else if (select.value === converterValue.value) {
        result.style.color = `red`;
        result.value = `Choose different temperatures`;
        return;
    }

    if (select.value === 'C' && converterValue.value === 'F') {
        result.value = `${value.value}${deg}${select.value} is ${C_F}${deg}${converterValue.value}`;
    } else if (select.value === 'F' && converterValue.value === 'C') {
        result.value = `${value.value}${deg}${select.value} is ${F_C}${deg}${converterValue.value}`;
    } else if (select.value === 'C' && converterValue.value === 'K') {
        result.value = `${value.value}${deg}${select.value} is ${C_K}${converterValue.value}`;
    } else if (select.value === 'K' && converterValue.value === 'C') {
        result.value = `${value.value}${converterValue.value} is ${k_C}${deg}${converterValue.value}`;
    } else if (select.value === 'F' && converterValue.value === 'K') {
        result.value = `${value.value}${deg}${select.value} is ${F_K}${converterValue.value}`;
    } else if (select.value === 'K' && converterValue.value === 'F') {
        result.value = `${value.value}${deg}${select.value} is ${K_F}${converterValue.value}`;
    }
}

converter.addEventListener('click', convertToTemp);

document.addEventListener('keyup', (event) => {
    event.key === 'Enter' ? convertToTemp() : null;
});

reset.addEventListener('click', () => location.reload());

