const number = document.querySelector('#num');
const display = document.querySelector('#display');
const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset');
let num;
// console.log(isNaN(NaN));
function checkOddEven(numToCheck) {
        if (numToCheck % 2 === 0) {
                return 'Even';
        }
        return 'Odd';
}
function displayResult(toPrint) {
        display.innerHTML = `Number ${num} is ${toPrint}`;
}
function validation() {
        num = parseFloat(number.value);
        if (isNaN(num)) {
                console.error(`Enter NUMBER!!!!`);
                alert(`Enter NUMBER!!!!`);
                number.value = '';
                display.innerHTML = '';
        } else {
                displayResult(checkOddEven(num));
        }
}
function resetFields() {
        number.value = '';
        display.innerHTML = '';
        console.clear();
}
submit.addEventListener('click', validation);
reset.addEventListener('click', resetFields);
