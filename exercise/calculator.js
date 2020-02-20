const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const operation = document.querySelector('#operator');
const submit = document.querySelector('[name="submit"]');
let num1;
let num2;
let printOut;
function add(valueOfNum1 = 0, valueOfNum2 = 0) {
        return valueOfNum1 + valueOfNum2;
}
function subtraction(valueOfNum1 = 0, valueOfNum2 = 0) {
        return valueOfNum1 - valueOfNum2;
}
function multiplication(valueOfNum1 = 0, valueOfNum2 = 1) {
        return valueOfNum1 * valueOfNum2;
}
function division(valueOfNum1 = 0, valueOfNum2 = 1) {
        if (num2 === 0) {
                console.error(`2nd Number can't be 0`);
        } else {
                return valueOfNum1 / valueOfNum2;
        }
}
function modulus(valueOfNum2, valueOfNum1 = 0) {
        if (num2 === 0 || isNaN(num2)) {
                console.error(`2nd Number can't be 0`);
        } else {
                return valueOfNum1 % valueOfNum2;
        }
}
function displayResult(toBeDisplayed) {
        document.querySelector('#displayResult').innerHTML = toBeDisplayed;
}
function checkNumber1() {
        num1 = parseFloat(number1.value);
        const valueOfNumber1 = number1.value;
        if (valueOfNumber1 === '') {
                num1 = undefined;
        } else if (isNaN(num1)) {
                console.error(`Enter a NUMBER `);
                number1.value = '';
                num1 = undefined;
        }
}
function checkNumber2() {
        num2 = parseFloat(number2.value);
        const valueOfNumber2 = number2.value;
        if (valueOfNumber2 === '') {
                num2 = undefined;
        } else if (isNaN(num2)) {
                console.error(`Enter a NUMBER`);
                number2.value = '';
                num2 = undefined;
        }
}
number1.addEventListener('blur', checkNumber1);
number2.addEventListener('blur', checkNumber2);
function calculate() {
        checkNumber1();
        checkNumber2();
        const operator = operation.value;
        // console.log(num1, num2);
        switch (operator) {
                case '+':
                        printOut = `The sum of ${num1} and ${num2} is ${add(num1, num2)}`;
                        break;
                case '-':
                        printOut = `The difference of ${num1} and ${num2} is ${subtraction(num1, num2)}`;
                        break;
                case '*':
                        printOut = `The product of ${num1} and ${num2} is ${multiplication(num1, num2)}`;
                        break;
                case '/':
                        printOut = `The quotient of ${num1} and ${num2} is ${division(num1, num2)}`;
                        break;
                case '%':
                        printOut = ` The modulus of ${num1} and ${num2} is ${modulus(num2, num1)}`;
                        break;
                default:
                        printOut = `Invalid operator`;
        }
        displayResult(printOut);
}

submit.addEventListener('click', calculate);
function clear() {
        console.clear();
        number1.value = '';
        number2.value = '';
        document.querySelector('#displayResult').innerHTML = '';
}
document.querySelector('#clean').addEventListener('click', clear);
