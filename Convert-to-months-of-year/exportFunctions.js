export function convertToMonths() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    const index = (Number(value.value) - 1) % 12;
    if (value.value) {
        if (isNaN(Number(value.value))) {
            result.style.color = 'red'
            return result.value = `Invalid character "${value.value}":Input Number`;
        } else if (Number(value.value) === 0) {
            result.style.color = 'red';
            return result.value = `Can't convert "${value.value}" to any month.`;
        } else {
            return result.value = `It's a ${months[index]}`;
        }
    } else {
        result.style.color = 'red';
        return result.value = 'Input Number';
    }
}