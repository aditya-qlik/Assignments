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
        { comment: 'Love the burgs', rating: 4 },
        { comment: 'Horrible Service', rating: 2 },
        { comment: 'Smoothies are great, liked the burger too', rating: 5 },
        { comment: 'Ambiance needs work', rating: 3 },
        { comment: 'I DONT LIKE BURGERS', rating: 1 },
];
/* Static methods */
console.log(Array.of('Aditya', 'Alok'));

console.log([...'Aditya']);

console.log(Array.of(...'Alok'));

console.log(Array.from({ length: 10 }));

const range = Array.from({ length: 10 }, function() {
        return 'Adi';
});
console.log(range);

const range1 = Array.from({ length: 10 }, function(_item, index) {
        return index + 1;
});
console.log(range1);

function createRange(start, end) {
        const range2 = Array.from({ length: end - start + 1 }, function(_item, index) {
                return index + start;
        });
        return range2;
}
console.log(createRange(3, 9));

console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.values(meats).forEach(qty => {
        console.log(qty);
});

Object.entries(meats).forEach(entry => {
        entry.forEach(value => {
                console.log(value);
        });
        console.log(entry);
});

Object.entries(meats).forEach(([key, value]) => {
        // const [key, value] = entry;
        console.log(key, value);
});

/* instance methods */

console.log(buns.join('or'));

const foodString = 'hot dogs, hamburgers, sausage, corn';
console.log(foodString.split(','));
console.log(foodString.split(''));

const lastItem = toppings.pop();
console.log(lastItem);
toppings.push(lastItem);
console.log(toppings);

const firstItem = toppings.shift();
console.log(firstItem);
toppings.unshift(firstItem);
console.log(toppings);

let newToppings = toppings.slice(0, toppings.length - 1);
console.log(newToppings);
newToppings = [...newToppings, toppings[toppings.length - 1]];
console.log(newToppings);

const toppingsCopy = toppings.slice(0); // create a copy
toppings[0] = ' Mushy Boy ';
console.log(toppings);
console.log(toppingsCopy);

const toppingsCopy2 = [...toppings];
console.log(toppingsCopy2);

toppingsCopy2.splice(3, 5);
console.log(toppingsCopy2);

const avocadoIndex = toppings.indexOf('Avocado');
console.log(avocadoIndex);

const adi = { name: 'adi' };
const people = [{ name: 'alok' }, adi];
console.log(people.indexOf(adi));
console.log(people.indexOf({ name: 'alok' }));

const isInToppings = toppings.includes('Hot Sauce');
console.log(isInToppings);
if (!isInToppings) {
        toppings.push('Hot Sauce');
}
console.log(toppings);

// toppings.reverse();
// console.log(toppings);
const reversedTopping = [...toppings].reverse();
console.log(reversedTopping);

/* callback */

function findBurgerRating(singleFeedback) {
        return singleFeedback.comment.includes('burg');
        // if (singleFeedback.comment.includes('burg')) {
        //         return true;
        // }
        // return false;
}
const burgerRating = feedback.find(findBurgerRating);
// const burgerRating = feedback.find(rating => rating.comment.includes('burg'));
console.log(burgerRating);

const util = {
        findBurgerRating(singleFeedback) {
                return singleFeedback.comment.includes('burg');
        },
};
function findByWord(word) {
        return function(singleFeedback) {
                return singleFeedback.comment.includes(word);
        };
}
