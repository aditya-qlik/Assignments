/* eslint-disable default-case */
const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const operation = document.querySelector('#operator');
const result = document.querySelector('#result');
const submit = document.querySelector('[name="submit"');
result.disabled = true;
function output() {
        let out;
        const num1 = parseFloat(number1.value);
        const num2 = parseFloat(number2.value);
        const operator = operation.value;
        // console.log(num1, num2);
        if (number1.value === '' || number2.value === '') {
                alert(`enter both number`);
                // if (number1.value === '') {
                //         switch (operator) {
                //                 case '+':
                //                         num1 = 0;
                //                         break;
                //                 case '-':
                //                         num1 = 0;
                //                         break;
                //                 case '*':
                //                         num1 = 1;
                //                         break;
                //                 case '/':
                //                         num1 = 0;
                //         }
                // }
                // if (number2.value === '') {
                //         switch (operator) {
                //                 case '+':
                //                         num2 = 0;
                //                         break;
                //                 case '-':
                //                         num2 = 0;
                //                         break;
                //                 case '*':
                //                         num2 = 1;
                //                         break;
                //                 case '/':
                //                         num2 = 0;
                //         }
                // }
        } else {
                switch (operator) {
                        case '+':
                                out = num1 + num2;
                                break;
                        case '-':
                                out = num1 - num2;
                                break;
                        case '*':
                                out = num1 * num2;
                                break;
                        case '/':
                                if (num2 === 0) {
                                        alert(`2nd Number cant be 0`);
                                } else {
                                        out = num1 / num2;
                                }
                }
                result.innerHTML = out;
        }
}
submit.addEventListener('click', output);
function clear() {
        // console.log('clicked');
        result.innerHTML = '';
}
document.querySelector('#clean').addEventListener('click', clear);
