// // data on 22.11.2025
export function convertMoney() {
    if (select.value) {
        if (value.value) {
            fetch('./data.json')
                .then(response => response.json())
                .then(data => {
                    if (isNaN(value.value)) {
                        result.style.color = 'red';
                        return result.value = `Invalid character "${value.value}": Input Number`;
                    } else {
                        const opt = select.value;
                        document.querySelector('span').innerText = `As of "${data.meta['last_updated_at']}" (fixed date)`;
                        return result.value = `${value.value}USD is ${(value.value * data.data[opt].value).toFixed(2)}${data.data[opt].code}`;
                    }
                });
        } else {
            result.style.color = 'red';
            return result.value = 'Input Number';
        }
    } else {
        result.style.color = 'red';
        return result.value = 'Choose the currency for converting';
    }
}

// // Real API REQUEST
export function convertMoneyByRealTime() {
    if (select.value) {
        if (value.value) {
            fetch('https://api.currencyapi.com/v3/latest?apikey=KL7RHTiYo19Y1yaIozLDbXLfdL3VdjvtxbOXL6SV')
                .then(response => response.json())
                .then(data => {
                    if (isNaN(value.value)) {
                        result.style.color = 'red';
                        return result.value = `Invalid character "${value.value}": Input Number`;
                    } else {
                        const opt = select.value;
                        document.querySelector('span').innerText = `As of "${data.meta['last_updated_at']}"`;
                        return result.value = `${value.value}USD is ${(value.value * data.data[opt].value).toFixed(2)}${data.data[opt].code}`;
                    }
                });
        } else {
            result.style.color = 'red';
            return result.value = 'Input Number';
        }
    } else {
        result.style.color = 'red';
        return result.value = 'Choose the currency for converting';
    }
}

