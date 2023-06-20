"use strict";
class Calculator {
    num1 = 0;
    num2 = 0;
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        return this.num1 + this.num2;
    }
    subtract() {
        return this.num1 - this.num2;
    }
    multiply() {
        return this.num1 * this.num2;
    }
    divide() {
        if (this.num2 === 0) {
            console.log('Error: Cannot divide by zero');
            return NaN;
        }
        return this.num1 / this.num2;
    }
}
const calc = new Calculator(1, 2);
console.log(calc.add());
