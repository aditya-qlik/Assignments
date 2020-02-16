/* eslint-disable */
console.log(age); // js hoist the declaration of the variable but not the initialization
var age = 10;
sayHi(); // when we run js program it moves all the functions to the top of the program

function sayHi() {
        console.log('hey');
        console.log(add(10, 20));
}
function add(a,b){   //hoisting works with only regular function not with function expression or arrow function or any other type of function
    return a+b;
}