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
    updateScreen();
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
            if (buffer.length === 1) {
                buffer = "0";
            }
            else {
                buffer = buffer.slice(0, -1);
            }
            break;
    }
}
function updateScreen() {
    primScreen.innerHTML = buffer;
}
// function handleClick(event: MouseEvent): void {
//   const clickedButton: HTMLButtonElement = event.target as HTMLButtonElement
//   const value: string = clickedButton.innerText
//   if (isNaN(Number(value))) {
//     handleOperator(value)
//   } else {
//     handleNumber(value)
//   }
//   updateSreen()
//   console.log(`Value: ${value}`)
// }
// function handleNumber(value: string):void {
//   console.log('handle number')
//   if (buffer === "0") {
//     buffer = value
//   } else {
//     buffer += value
//   }
// }
// function handleOperator(operator: string):void {
//   console.log('handle operator')
//   switch (operator) {
//     case "C":
//       resetCalculator()
//       break
//     case "←":
//       deleteLastDigit()
//       break
//     case "=":
//       performCalculation()
//       break
//     case "÷":
//       previousOperator = "÷"
//       break
//     case "×":
//       previousOperator = "×"
//       break
//     case "−": 
//       previousOperator = "−"
//       break
//     case "+":
//       previousOperator = "+"
//       break
//   }
// }
// function performCalculation():void {
//   console.log('calculating')
//   console.log(`previousOperator: ${previousOperator}`)
//   const currentNumber: number = Number(buffer)
//   switch (previousOperator) {
//     case '+':
//       runningTotal += currentNumber
//       break
//     case '-':
//       runningTotal -= currentNumber
//       break
//     case '×':
//       runningTotal *= currentNumber
//       break
//     case '÷':
//       runningTotal /= currentNumber
//       break
//     default:
//       runningTotal = currentNumber
//       break
//   }
//   buffer = runningTotal.toString()
// }
// function resetCalculator():void {
//   console.log('reset calculator')
//   runningTotal = 0
//   buffer = "0"
// }
// function deleteLastDigit():void {
//   console.log('delete last digit')  
//   if(buffer.length === 1) {
//     buffer = "0"
//   } else {
//     buffer = buffer.slice(0, -1)
//   }
// }
// function updateSreen():void {
//   console.log('update screen')
//   calculatorScreen.innerText = buffer
// }
