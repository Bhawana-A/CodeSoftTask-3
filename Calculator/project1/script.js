function appendNumber(value) {
    const display = document.getElementById('display');

    if (value === '^') {
        display.value += '**'; // Using JavaScript's exponentiation operator
    } else if (value === 'X') {
        display.value = display.value.slice(0, -1); // Remove last character
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const display = document.getElementById('display');
        const result = eval(display.value); // Note: Eval should be used with caution
        display.value = result;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}
