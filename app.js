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
    // console.log("clicked")
    if (isNaN(Number(value))) {
        handleOperator(value);
    }
    else {
        handleNumber(value);
    }
    updatePrimScreen();
}
function handleNumber(number) {
    console.log("handleNumber");
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
            buffer = "0";
            runningTotal = 0;
            previousOperator = "";
            break;
        case "←":
            deleteLastDigit();
            break;
        case "=":
            calc();
            break;
        case "÷":
            updateSecScreen("÷");
            break;
        case "×":
            updateSecScreen("×");
            break;
        case "−":
            updateSecScreen("−");
            break;
        case "+":
            updateSecScreen("+");
            break;
    }
}
function deleteLastDigit() {
    if (buffer.length === 1) {
        buffer = "0";
    }
    else {
        buffer = buffer.slice(0, -1);
    }
}
function calc() {
    switch (previousOperator) {
        case "÷":
            buffer = (Number(secBuffer) / Number(buffer)).toString();
            break;
        case "×":
            buffer = (Number(secBuffer) * Number(buffer)).toString();
            break;
        case "−":
            buffer = (Number(secBuffer) - Number(buffer)).toString();
            break;
        case "+":
            buffer = (Number(secBuffer) + Number(buffer)).toString();
            break;
    }
    secScreen.innerText = "";
}
function updateSecScreen(operator) {
    secScreen.innerText = `${buffer} ${operator}`;
    secBuffer = buffer;
    buffer = "0";
    previousOperator = operator;
    updatePrimScreen();
}
function updatePrimScreen() {
    primScreen.innerHTML = buffer;
}
