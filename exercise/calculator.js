/* eslint-disable default-case */
const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const operation = document.querySelector('#operator');
const submit = document.querySelector('[name="submit"]');

function add(num1 = 0, num2 = 0) {
        return num1 + num2;
}
function subtraction(num1 = 0, num2 = 0) {
        return num1 - num2;
}
function multiplication(num1 = 1, num2 = 1) {
        return num1 * num2;
}
function division(num1 = 1, num2 = 1) {
        return num1 / num2;
}
let num1;
let num2;
function checkNumber1(event) {
        num1 = parseFloat(event.target.value);
        const valueOfNumber1 = number1.value;
        // console.log(num1);
        if (valueOfNumber1 === '') {
                num1 = undefined;
        } else if (isNaN(num1)) {
                alert(`enter number only`);
                number1.value = '';
                num1 = undefined;
        }
}
function checkNumber2(event) {
        num2 = parseFloat(event.target.value);
        const valueOfNumber2 = number2.value;
        // console.log(num2);
        if (valueOfNumber2 === '') {
                num2 = undefined;
        } else if (isNaN(num2)) {
                alert(`enter number only`);
                number2.value = '';
                num2 = undefined;
        }
}
number1.addEventListener('blur', checkNumber1);
number2.addEventListener('blur', checkNumber2);
function printResult() {
        const operator = operation.value;
        // console.log(num1, num2);
        switch (operator) {
                case '+':
                        console.log(`the result is ${add(num1, num2)}`);
                        break;
                case '-':
                        console.log(`the result is ${subtraction(num1, num2)}`);
                        break;
                case '*':
                        console.log(`the result is ${multiplication(num1, num2)}`);
                        break;
                case '/':
                        if (num2 === 0) {
                                alert(`2nd Number can't be 0`);
                        } else {
                                console.log(`the result is ${division(num1, num2)}`);
                        }
        }
}
submit.addEventListener('click', printResult);
function clear() {
        console.clear();
        number1.value = '';
        number2.value = '';
}
document.querySelector('#clean').addEventListener('click', clear);
