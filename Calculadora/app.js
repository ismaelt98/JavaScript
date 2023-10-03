var display = document.getElementById('display');
var buttons = document.querySelectorAll('.number, .operator');
var clearButton = document.getElementById('clear');
var calculateButton = document.getElementById('calculate');
var currentInput = '';
var currentOperator = '';
var currentValue = 0;
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
    var inputNum = parseFloat(currentInput);
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
            }
            else {
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
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.classList.contains('number')) {
            currentInput += button.value;
        }
        else if (button.classList.contains('operator')) {
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
