/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
const toppings = [
        'Mushrooms ',
        'Tomatoes',
        'Eggs',
        'Chili',
        'Lettuce',
        'Avocado',
        'Chiles',
        'Bacon',
        'Pickles',
        'Onions',
        'Cheese',
];

const students = [
        {
                id: '11ce',
                first_name: 'Dall',
                last_name: 'Puckring',
        },
        {
                id: '2958',
                first_name: 'Margarete',
                last_name: 'Brandi',
        },
        {
                id: '565a',
                first_name: 'Bendicty',
                last_name: 'Woodage',
        },
        {
                id: '3a16',
                first_name: 'Micki',
                last_name: 'Mattes',
        },
        {
                id: 'f396',
                first_name: 'Flory',
                last_name: 'Gladeche',
        },
        {
                id: 'de5f',
                first_name: 'Jamill',
                last_name: 'Emilien',
        },
        {
                id: '54cb',
                first_name: 'Brett',
                last_name: 'Aizikowitz',
        },
        {
                id: '9135',
                first_name: 'Lorry',
                last_name: 'Smallman',
        },
        {
                id: '978f',
                first_name: 'Gilly',
                last_name: 'Flott',
        },
];

const people = [
        {
                birthday: 'April 22, 1993',
                names: {
                        first: 'Keith',
                        last: 'Buckley',
                },
        },
        {
                birthday: 'January 3, 1975',
                names: {
                        first: 'Larry',
                        last: 'Heep',
                },
        },
        {
                birthday: 'February 12, 1944',
                names: {
                        first: 'Linda',
                        last: 'Bermeer',
                },
        },
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
        beyond: 10,
        beef: 5,
        pork: 7,
};

const prices = {
        hotDog: 453,
        burger: 765,
        sausage: 634,
        corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
        {
                comment: 'Love the burgs',
                rating: 4,
        },
        {
                comment: 'Horrible Service',
                rating: 2,
        },
        {
                comment: 'Smoothies are great, liked the burger too',
                rating: 5,
        },
        {
                comment: 'Ambiance needs work',
                rating: 3,
        },
        {
                comment: 'I DONT LIKE BURGERS',
                rating: 1,
        },
];

const faces = ['😃', '🤐', '🤓', '🤑', '😵', '🌞', '🐶', '😺'];

const inventory = [
        {
                type: 'shirt',
                price: 4000,
        },
        {
                type: 'pants',
                price: 4532,
        },
        {
                type: 'socks',
                price: 234,
        },
        {
                type: 'shirt',
                price: 2343,
        },
        {
                type: 'pants',
                price: 2343,
        },
        {
                type: 'socks',
                price: 542,
        },
        {
                type: 'pants',
                price: 123,
        },
];

/* forEach loops */

function logTopping(topping, index, originalArray) {
        const previousTopping = originalArray[index - 1];
        const nextTopping = originalArray[index + 1];
        // debugger;
        previousTopping ? console.log(previousTopping) : null;
        console.log(topping);
        nextTopping ? console.log(nextTopping) : null;
        index === originalArray.length - 1
                ? console.log('-------------Good Bye------------')
                : console.log('-----------LINE END----------');
}
toppings.forEach(logTopping);

/* Map */
// map produces same length of array it starts with

function addArms(face) {
        return `👋 ${face} ✋`;
}
const toys = faces.map(addArms);
console.log(toys);

function fullName(firstName) {
        return `${firstName} Kumar`;
}
function capitalize(firstName) {
        return `${firstName[0].toUpperCase()}${firstName.slice(1)}`;
}
const name = ['adi', 'alok', 'anil'].map(capitalize).map(fullName);
console.log(name);

const orderTotalsWithTax = orderTotals.map(total => Math.round(total * 1.12));
console.log(orderTotalsWithTax);

const cleanPeople = people.map(function(person) {
        const birthday = new Date(person.birthday);
        // console.log(birthday);
        const now = new Date().getYear();
        const age = now - birthday.getYear();
        console.log(birthday, age);
        return {
                age,
                name: `${person.names.first} ${person.names.last}`,
        };
});
console.table(cleanPeople);

/* filter and find */
// find returns only single value we are looking for  ----->>> RETURNS Single Value
// filter returns all the values matching our condition ----->>> RETURNS ARRAY

const peopleOver40 = cleanPeople.filter(person => person.age > 40);
console.table(peopleOver40);

console.log(students.find(student => student.id === 'de5f'));

function findById(id) {
        return function(student) {
                return student.id === id;
        };
}
const student1 = students.find(findById('de5f'));
console.log(student1);

function findByProp(prop, propWeAreLookingFor) {
        return function(student) {
                return student[prop] === propWeAreLookingFor;
        };
}
const student2 = students.find(findByProp('id', 'de5f'));
const student3 = students.find(findByProp('first_name', 'Micki'));
console.log(student2, student3);

/* Reduce */

function tallyNumbers(tally, currentTotal) {
        console.log(`he current tally ${tally}`);
        console.log(`the current total is ${currentTotal}`);
        console.log('-----------LINE END----------');
        return currentTotal + tally;
}
const allOrders = orderTotals.reduce(tallyNumbers, 0);
console.log(allOrders);

function inventoryReducer(totals, item) {
        console.log(`${item.type}`);
        totals[item.type] = totals[item.type] + 1 || 1;
        return totals;
}
const inventoryCounter = inventory.reduce(inventoryReducer, {});
console.log(inventoryCounter);
const totalInventoryPrice = inventory.reduce((accumulator, item) => accumulator + item.price, 0);
console.log(totalInventoryPrice);
