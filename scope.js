/* eslint-disable*/
var name = 'Aditya';
let age = 27;
const bloodGroup = 'O+';

function test(){
    const bloodGroup = 'B+'; //this is allowed but should not be used
    const blocked = 'Inside function block';
    console.log(bloodGroup);
    console.log(blocked);
}
test();
console.log(bloodGroup);
//console.log(blocked); // gives error undeclared variable
if(1 == '1'){
    let v1 = 'Im inside a if block let';
    const v2 = 'Im inside a if block const';
    var v3 = 'Im inside a if block var';
    console.log(v1, v2, v3);
}
console.log(v3);
// console.log(v2);
// console.log(v1);
function go(guy){
    let cool = false;
    const cool2 = false;
    var cool3;
    if(guy==='Adi'){
        cool = true;
        // cool2 = true;  this is not allowed
        cool3 = true;        
        console.log('inside if in a function ' + cool);
        console.log('inside if in a function ' + cool2);
        console.log('inside if in a function ' + cool3);
    }
    console.log('inside function ' + cool);
    console.log('inside function ' + cool2);
    console.log('inside function ' + cool3);
}
go('Adi');
// console.log('outside function' + cool);  var works outside if block but not outside function block
// console.log('outside function ' + cool2); let doesn't work outside any block
// console.log('outside function' + cool3);  const doesn't work outside any block

for(var i=0; i<10 ;i++){
    console.log(`inside for loop i = ${i}`);
}
console.log(`outside the for loop i = ${i}`); // this is the problem with var
for(let j=0; j<10 ;j++){
    console.log(`inside for loop j = ${j}`);
}
// console.log(`outside the for loop j = ${j}`); it shows error whish is good as it shows its block scoped
const dog = 'Babbles';
function log(){
    console.log(dog);
}
function logDog(dog){
    console.log(dog);
}
function logDog1(){
    const dog = 'Scooby';
    log();
    logDog(dog);
    logDog('String')
}
logDog1();
// js is lexical scoped (static scope ) --> its doesn't matter where the function is is called but where the function is defined
window.iAmGlobal='Adi';
function sayHi(name){
    function yell(){
        console.log(name.toUpperCase());
    }
}
sayHi('Adi');
yell(); // its gives error because like variables functions are also function scoped