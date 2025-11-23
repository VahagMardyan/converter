export function convertToCentury() {
    if (value.value) {
        if (isNaN(value.value)) {
            result.style.color = 'red';
            return result.value = `Invalid character "${value.value}":Input Number`;
        } else if (Number(value.value) === 0) {
            result.style.color = 'red';
            return result.value = `Can't convert "${value.value}"th year to any century.`;
        } else if (value.value < 0) {
            return result.value = `This the ${Math.abs(Math.floor(Number(value.value) / 100))}th century B.C.`
        }
        else {
            return result.value = `This is the ${Math.ceil(Number(value.value) / 100)}th century`;
        }
    } else {
        result.style.color = 'red';
        return result.value = `Input Number`;
    }
}
