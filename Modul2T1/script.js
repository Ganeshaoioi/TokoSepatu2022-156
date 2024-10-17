let currentInput = ""; // Menyimpan angka yang saat ini dimasukkan oleh pengguna.
let operator = ""; //Menyimpan operator yang dipilih oleh pengguna (seperti +, -, *, dll.).
let previousInput = ""; //Menyimpan angka sebelumnya yang dimasukkan sebelum operator

function appendNumber(number) {
    if (currentInput === "0" && number !== ".") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay(currentInput);
}

function appendOperator(op) {
    if (currentInput !== "") {
        if (previousInput !== "") {
            calculate();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = "";
    }
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        case '^':
            result = Math.pow(prev, current);
            break;
        default:
            return;
    }

    currentInput = result;
    operator = "";
    previousInput = "";
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = "";
    operator = "";
    previousInput = "";
    updateDisplay("0");
}

function updateDisplay(value) {
    document.getElementById("display").textContent = value;
}
