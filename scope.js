/* eslint-disable */
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
    let v1 = 'Im inside a block let';
    const v2 = 'Im inside a block const';
    var v3 = 'Im inside a block var';
    console.log(v1, v2, v3);
}
console.log(v3);
console.log(v2);
console.log(v1);
function go(guy){
    let cool;
    const cool2=false;
    var cool3;
    if(guy==='Adi'){
        cool = true;
        cool2 = true;
        cool3 = true;
    }
}