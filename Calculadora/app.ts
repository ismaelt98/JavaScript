const display = document.getElementById('display') as HTMLInputElement;
const buttons = document.querySelectorAll('.number, .operator') as NodeListOf<HTMLButtonElement>;
const clearButton = document.getElementById('clear') as HTMLButtonElement;
const calculateButton = document.getElementById('calculate') as HTMLButtonElement;

let currentInput = '';
let currentOperator = '';
let currentValue = 0;

function updateDisplay() {
    display.value = currentInput;
}

function clearCalculator() {
    currentInput = '';
    currentOperator = '';
    currentValue = 0;
    updateDisplay();
}

function calculate() {
    const inputNum = parseFloat(currentInput);
    switch (currentOperator) {
        case '+':
            currentValue += inputNum;
            break;
        case '-':
            currentValue -= inputNum;
            break;
        case '*':
            currentValue *= inputNum;
            break;
        case '/':
            if (inputNum !== 0) {
                currentValue /= inputNum;
            } else {
                alert('Error: División por cero');
            }
            break;
        default:
            currentValue = inputNum;
    }
    currentInput = currentValue.toString();
    currentOperator = '';
    updateDisplay();
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            currentInput += button.value;
        } else if (button.classList.contains('operator')) {
            if (currentOperator !== '') {
                calculate();
            }
            currentOperator = button.value;
            currentValue = parseFloat(currentInput);
            currentInput = '';
        }
        updateDisplay();
    });
});

clearButton.addEventListener('click', clearCalculator);

calculateButton.addEventListener('click', calculate);
