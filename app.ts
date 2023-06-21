let runningTotal: number = 0
let buffer:string = "0"
let previousOperator: string

const calculatorScreen: HTMLDivElement = document.getElementById('screen') as HTMLDivElement

const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.calc-button')
buttons.forEach(button => {
  button.addEventListener('click', handleClick)
})

function handleClick(event: MouseEvent): void {
  const clickedButton: HTMLButtonElement = event.target as HTMLButtonElement
  const value: string = clickedButton.innerText

  if (isNaN(Number(value))) {
    handleOperator(value)
  } else {
    handleNumber(value)
  }
  updateSreen()
  
  console.log(value)
}

function handleNumber(value: string):void {
  console.log('handle number')

  if (buffer === "0") {
    buffer = value
  } else {
    buffer += value
  }
}

function handleOperator(operator: string):void {
  console.log('handle operator')

  switch (operator) {
    case "C":
      resetCalculator()
      break;
    case "←":
      deleteLastDigit()
      break;
    case "=":
      performCalculation()
      break;
  }
}

function performCalculation():void {

}

function resetCalculator():void {
  console.log('reset calculator')

  runningTotal = 0
  buffer = "0"
}

function deleteLastDigit():void {
  console.log('delete last digit')  
  
  if(buffer.length === 1) {
    buffer = "0"
  } else {
    buffer = buffer.slice(0, -1)
  }
}

function updateSreen():void {
  console.log('update screen')
  

  calculatorScreen.innerText = buffer;
}