class Calculator
{
  private num1: number = 0
  private num2: number = 0

  constructor(num1: number, num2: number)
  {
    this.num1 = num1
    this.num2 = num2
  }

  add(): number{
    return this.num1 + this.num2
  }

  subtract(): number{
    return this.num1 - this.num2
  }

  multiply(): number{
    return this.num1 * this.num2
  }

  divide(): number{
    if (this.num2 === 0) 
    {
      console.log('Error: Cannot divide by zero');
      return NaN
    }
    return this.num1/this.num2
  }
}

const calc = new Calculator(1,2)
console.log(calc.add());
