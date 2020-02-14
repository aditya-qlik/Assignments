/* eslint-disable no-console */

// common way ..... using function keyword
function doctored(name) {
        return ` Dr. ${name}`;
}
console.log(`Using function keyword ${doctored('Aditya')}`);

// Anonymous function --> These are not valid in JavaScript
/* 
function (name) {
    return ` Dr. ${name}`;
} 
*/

// Function Expression
const doctorize = function(name) {
        return ` Dr. ${name}`;
};
console.log(`Using Function Expression ${doctorize('Aditya')}`);

/* 
***************NOTE***********************
Functions defined with function keyword are hoisted 
(i.e they can be called first then defined)
but the function expressions are not hoisted 
(i.e. they can't be called before being defined)
*/

// Arrow Functions
const milesToKM = miles => miles * 1.60934; // can be used from console or --> console.log(`10 miles to km : ${milesToKM(10)}`);
// function milesToKM (miles){
//     const km = miles * 1.60934;
//     return km;
// }

/*
**************NOTES************
In an arrow function 
--> if there is only one parameter then there is no need for a parenthesis ()
--> If there is only return statement then 1. no need to write return keyword
                                          2. no need to put function block {}
*/

const add = (a, b = 3) => a + b;
// function add(a,b=3){
//     const sum = a+b;
//     return sum;
// }

// function personDetail(fname, lname, old) {
//         const person = {
//                 name: `${fname} ${lname}`,
//                 age: old,
//         };
//         return person;
// }
const personDetail = (fname, lname, old) => ({ name: `${fname} ${lname}`, age: old });
/*
*******NOTE********
if we want to implicitly return an OBJECT then it is put inside a parenthesis ()
if not done so JS gets confused if the {} are for function block or Object creation
*/

// IIFE --> Immediately Invoked Function Expression
(function(iife) {
        console.log(`IIFE function ..... Technically a Anonymous function `);
        return `Inside a ${iife} function`;
})('IIFE'); // <-- The argument is passed in the outer parenthesis
