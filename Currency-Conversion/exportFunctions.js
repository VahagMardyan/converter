// // data on 19.12.2025
export function convertMoney() {
    const source = document.getElementById('source').value;
    const target = select.value;

    if (!source) {
        result.style.color = 'red';
        return result.value = 'Choose source currency';
    }

    if (!target) {
        result.style.color = 'red';
        return result.value = 'Choose target currency';
    }

    if (!value.value) {
        result.style.color = 'red';
        return result.value = 'Input Number';
    }

    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            if (isNaN(value.value)) {
                result.style.color = 'red';
                return result.value = `Invalid character "${value.value}": Input Number`;
            } else {
                const sourceRate = data.data[source].value;
                const targetRate = data.data[target].value;
                const converted = (value.value * targetRate / sourceRate).toFixed(5);
                document.querySelector('span').innerText = `As of "${data.meta['last_updated_at']}"`;
                result.style.color = "#dFF6FF";
                return result.value = `${value.value} ${source} is ${converted} ${target}`;
            }
        });
}

// // Real API REQUEST
export function convertMoneyByRealTime() {
    const source = document.getElementById('source').value;
    const target = document.getElementById('select').value;

    if (!source) {
        result.style.color = 'red';
        return result.value = 'Choose source currency';
    }
    if (!target) {
        result.style.color = 'red';
        return result.value = 'Choose target currency';
    }
    if (!value.value) {
        result.style.color = 'red';
        return result.value = 'Input Number';
    }

    fetch('https://api.currencyapi.com/v3/latest?apikey=KL7RHTiYo19Y1yaIozLDbXLfdL3VdjvtxbOXL6SV')
        .then(response => response.json())
        .then(data => {
            if (isNaN(value.value)) {
                result.style.color = 'red';
                return result.value = `Invalid character "${value.value}": Input Number`;
            }
            const sourceRate = data.data[source].value;
            const targetRate = data.data[target].value;
            const converted = (value.value * targetRate / sourceRate).toFixed(5);
            document.querySelector('span').innerText = `As of "${data.meta['last_updated_at']}"`;
            result.style.color = "#dFF6FF";
            result.value = `${value.value} ${source} is ${converted} ${target}`;
        });
}
