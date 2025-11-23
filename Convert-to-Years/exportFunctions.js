export function convertToYears() {
    if (value.value) {
        if (isNaN(value.value)) {
            result.style.color = 'red';
            return result.value = `Invalid character "${value.value}": Input Number"`;
        } else if (Number(value.value) === 0) {
            result.style.color = 'red';
            return result.value = `${value.value}th century doesn't exist.`;
        } else if (value.value < 0) {
            const startYear = Math.abs((value.value * 100));
            const endYear = Math.abs((value.value * 100)) - 99;
            return result.value = `This century is between the ${startYear} B.C and the ${endYear} B.C.`;
        } else {
            const startYear = (value.value - 1) * 100 + 1;
            const endYear = value.value * 100;
            return result.value = `This century is between the ${startYear} and the ${endYear}.`;
        }
    } else {
        result.style.color = 'red';
        return result.value = 'Input Number';
    }
}
