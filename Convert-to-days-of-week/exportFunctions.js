export function convertToDays() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const index = (Number(value.value) - 1) % 7;
    if (value.value) {
        if (isNaN(Number(value.value))) {
            result.style.color = 'red';
            return result.value = `Invalid character "${value.value}":Input Number`;
        } else if (Number(value.value) === 0) {
            result.style.color = 'red';
            return result.value = `Can't convert "${value.value}" to any day.`;
        } else {
            return result.value = `It's a ${days[index]}`;
        }
    } else {
        result.style.color = 'red';
        return result.value = `Input Number`;
    }
}