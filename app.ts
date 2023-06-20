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
}

function handleNumber(value: string):void {
  if (buffer === "0") {
    buffer = value
  } else {
    buffer += value
  }
}

function handleOperator(value: string):void {
  
}


function updateSreen():void {
  calculatorScreen.innerText = buffer;
}