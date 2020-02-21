/* eslint-disable no-console */
/* eslint-disable no-new-object */
// creating object
const animal = new Object({
        type: 'Dog',
});
const age = 100;
const person = {
        age, // instead of 'age: age' we can write this
        name: 'Aditya',
        'cool-dude': true, // '-' can be used in naming property..... the property name should be written in"
        'really cool': false, // ' ' can also be included in property name..... the property name should be written in"
        '777': true, // number can also be used to name the property..... the property name should be written in"
        clothing: {
                shirts: 20,
                pants: 10,
        },
        sayHello(greeting = 'hey') {
                return `${greeting} ${this.name}`;
        },
        sneeze: () => {
                console.log('AAAHHHHHHHH CCCCHHHHHHOOOOO', this);
        },
};
person.job = 'Developer'; // adding property
person.age = 50; // Editing property
console.log(person);
const person1 = {
        first: 'Aditya',
        last: 'Kumar',
        cloths: {
                shirt: 10,
                pant: 2,
        },
};
const person2 = {
        first: 'Aditya',
        last: 'Kumar',
        cloths: {
                shirt: 10,
                pant: 2,
        },
};
console.log(person1 === person2);
const person3 = person1;
const person4 = { ...person1 }; // doesn't work for object inside object...the value changed in inner object changes for both
const person5 = _.cloneDeep(person1);

const veggieInventory = {
        lettuce: 5,
        tomato: 3,
        oyster: 10, // common in both the object
};
const meatInventory = {
        bacon: 5,
        sausage: 3,
        oyster: 10, // common in both the object
};

// merging both objects
const inventory = {
        ...meatInventory,
        ...veggieInventory,
        bacon: 20,
};
let name = 'aditya';
name = 'Aditya';

function doStuff(data) {
        data = 'something new';
        console.log(data);
}
doStuff(name);
console.log(name);
function doStuff2(data) {
        data.tomato = 10000000000;
        console.log(data);
}
doStuff2(inventory);
console.log(inventory);
delete person2.tomato;
function doStuff3(data) {
        data.cloths.pant = 10;
        console.log(data);
}
doStuff3(person2);
console.log(person2);
