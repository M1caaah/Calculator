var runningTotal = 0;
var buffer = "0";
var previousOperator;
var calculatorScreen = document.getElementById('screen');
var buttons = document.querySelectorAll('.calc-button');
buttons.forEach(function (button) {
    button.addEventListener('click', handleClick);
});
function handleClick(event) {
    var clickedButton = event.target;
    var value = clickedButton.innerText;
    if (isNaN(Number(value))) {
        handleOperator(value);
    }
    else {
        handleNumber(value);
    }
    updateSreen();
    console.log(value);
}
function handleNumber(value) {
    console.log('handle number');
    if (buffer === "0") {
        buffer = value;
    }
    else {
        buffer += value;
    }
}
function handleOperator(operator) {
    console.log('handle operator');
    switch (operator) {
        case "C":
            resetCalculator();
            break;
        case "←":
            deleteLastDigit();
            break;
        case "=":
            performCalculation();
            break;
    }
}
function performCalculation() {
}
function resetCalculator() {
    console.log('reset calculator');
    runningTotal = 0;
    buffer = "0";
}
function deleteLastDigit() {
    console.log('delete last digit');
    if (buffer.length === 1) {
        buffer = "0";
    }
    else {
        buffer = buffer.slice(0, -1);
    }
}
function updateSreen() {
    console.log('update screen');
    calculatorScreen.innerText = buffer;
}
