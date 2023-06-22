let runningTotal: number = 0;
let buffer: string = "0";
let secBuffer: string = "";
let previousOperator: string;

const primScreen: HTMLDivElement = document.getElementById('prim-screen') as HTMLDivElement;
const secScreen: HTMLDivElement = document.getElementById('sec-screen') as HTMLDivElement;

const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.calc-button');
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

function handleClick(event: MouseEvent): void {
  const currentButton: HTMLButtonElement = event.target as HTMLButtonElement;
  const value: string = currentButton.innerText;

  if (isNaN(Number(value))) {
    handleOperator(value);
  } else {
    handleNumber(value);
  }
  updatePrimScreen();
}

function handleNumber(number: string): void {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer += number;
  }
}

function handleOperator(operator: string): void {
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

function resetCalculator(): void {
  buffer = "0";
  runningTotal = 0;
  previousOperator = "";
  clearSecondaryScreen();
}

function deleteLastDigit(): void {
  if (buffer.length === 1) {
    buffer = "0";
  } else {
    buffer = buffer.slice(0, -1);
  }
}

function calculate(): void {
  const num1:number = Number(secBuffer);
  const num2:number = Number(buffer);

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

function updateSecScreen(operator: string): void {
  secScreen.innerText = `${buffer} ${operator}`;
  secBuffer = buffer;
  buffer = "0";
  previousOperator = operator;
}

function clearSecondaryScreen(): void {
  secScreen.innerText = "";
}

function updatePrimScreen(): void {
  primScreen.innerText = buffer;
}
