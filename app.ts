let runningTotal: number = 0
let buffer:string = "0"
let secBuffer:string = ""
let previousOperator: string

const primScreen: HTMLDivElement = document.getElementById('prim-screen') as HTMLDivElement
const secScreen: HTMLDivElement = document.getElementById('sec-screen') as HTMLDivElement

const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.calc-button')
buttons.forEach(button => {
  button.addEventListener('click', handleClick)
})

function handleClick(event: MouseEvent):void {
  const currentButton:HTMLButtonElement = event.target as HTMLButtonElement
  const value: string = currentButton.innerText
  // console.log("clicked")
  

  if (isNaN(Number(value))) {
    handleOperator(value)
  } else {
    handleNumber(value)
  }
  updatePrimScreen()
}

function handleNumber(number:string) {
  console.log("handleNumber")

  if (buffer === "0") {
    buffer = number 
  } else {
    buffer += number
  }
}

function handleOperator(operator: string):void {
  switch (operator) {
    case "C":
      buffer = "0"
      runningTotal = 0
      previousOperator = ""
      break
    case "←":
      deleteLastDigit()
      break
    case "=":
      calc()
      break
    case "÷":
      updateSecScreen("÷")
      break
    case "×":
      updateSecScreen("×")
      break
    case "−":
      updateSecScreen("−")
      break
    case "+":
      updateSecScreen("+")
      break
    }
}

function deleteLastDigit():void {
  if (buffer.length === 1) {
    buffer = "0"
  } else {
    buffer = buffer.slice(0,-1)
  }
}

function calc():void {
  switch (previousOperator) {
    case "÷":
      buffer = (Number(secBuffer) / Number(buffer)).toString()
      break
    case "×":
      buffer = (Number(secBuffer) * Number(buffer)).toString()
      break
    case "−":
      buffer = (Number(secBuffer) - Number(buffer)).toString()
      break
    case "+":
      buffer = (Number(secBuffer) + Number(buffer)).toString()
      break
  }
  secScreen.innerText = ""
}

function updateSecScreen(operator:string):void {
  secScreen.innerText = `${buffer} ${operator}`
  secBuffer = buffer
  buffer = "0"
  previousOperator = operator
  updatePrimScreen()
}

function updatePrimScreen():void { 
  primScreen.innerHTML = buffer
}