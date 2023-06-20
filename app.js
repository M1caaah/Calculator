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
}
function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    }
    else {
        buffer += value;
    }
}
function handleOperator(value) {
}
function updateSreen() {
    calculatorScreen.innerText = buffer;
}
