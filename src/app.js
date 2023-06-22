"use strict";
let runningTotal = 0;
let buffer = "0";
let secBuffer = "";
let previousOperator;
const primScreen = document.getElementById('prim-screen');
const secScreen = document.getElementById('sec-screen');
const buttons = document.querySelectorAll('.calc-button');
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});
function handleClick(event) {
    const currentButton = event.target;
    const value = currentButton.innerText;
    if (isNaN(Number(value))) {
        handleOperator(value);
    }
    else {
        handleNumber(value);
    }
    updatePrimScreen();
}
function handleNumber(number) {
    if (buffer === "0") {
        buffer = number;
    }
    else {
        buffer += number;
    }
}
function handleOperator(operator) {
    switch (operator) {
        case "C":
            resetCalculator();
            break;
        case "←":
            deleteLastDigit();
            break;
        case "=":
            calculate();
            break;
        case "÷":
        case "×":
        case "−":
        case "+":
            updateSecScreen(operator);
            break;
    }
}
function resetCalculator() {
    buffer = "0";
    runningTotal = 0;
    previousOperator = "";
    clearSecondaryScreen();
}
function deleteLastDigit() {
    if (buffer.length === 1) {
        buffer = "0";
    }
    else {
        buffer = buffer.slice(0, -1);
    }
}
function calculate() {
    const num1 = Number(secBuffer);
    const num2 = Number(buffer);
    switch (previousOperator) {
        case "÷":
            buffer = (num1 / num2).toString();
            break;
        case "×":
            buffer = (num1 * num2).toString();
            break;
        case "−":
            buffer = (num1 - num2).toString();
            break;
        case "+":
            buffer = (num1 + num2).toString();
            break;
    }
    clearSecondaryScreen();
}
function updateSecScreen(operator) {
    secScreen.innerText = `${buffer} ${operator}`;
    secBuffer = buffer;
    buffer = "0";
    previousOperator = operator;
}
function clearSecondaryScreen() {
    secScreen.innerText = "";
}
function updatePrimScreen() {
    primScreen.innerText = buffer;
}
