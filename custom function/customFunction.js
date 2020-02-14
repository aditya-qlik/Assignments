/* eslint-disable no-console */
// this is function definition
function calculateBill(bill, rest = 50, gst = 0.12) {
        // default value parameter should always be at last
        console.log(`running calculateBill`);
        // const total = 1000*1.12+50;
        const total = bill + bill * gst + rest;
        // console.log(total);
        return total;
}
const billAmount = 1000;
const tax = 0.1;
const tip = 50;
// this is function calling or its called **Run**
const myBill = Math.round(calculateBill(billAmount, tip, tax));
// we can pass undefined for a default parameter to skip sending value for it
const myBill1 = Math.round(calculateBill(1250, undefined, 0.12));
// if the default parameter is at last no need to pass undefined as argument
const myBill2 = Math.round(calculateBill(1250, 20));
document.getElementById('op').innerHTML = myBill;
document.write(`<h3><center>${myBill1}</center></h3>`);
document.write(`<h3><center>${myBill2}</center></h3>`);
function sayHiTo(name) {
        document.write(`Hello ${name} <br>`);
}
sayHiTo();
sayHiTo('Aditya');
function doctored(name) {
        return ` Dr. ${name}`;
}
function yell(name) {
        return `HEY ${name.toUpperCase()}!!!`;
}
document.write(`${doctored('Aditya')}<br>`);
document.write(`${yell('Aditya')}<br>`);
document.write(`${yell(doctored('Aditya'))}<br>`);
