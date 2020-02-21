const person1 = {
        name: 'aditya',
        age: 200,
};

const myMap = new Map();
// .set()
myMap.set('name', 'Aditya');
myMap.age = 10;
myMap.set(person1, 'Awesome');
console.log(myMap.get(person1));
console.log(myMap);

const score = 100;
const prize = new Map();
prize.set(100, 'bear');
prize.set(200, 'duck');
prize.set(300, 'car');
console.log(`you win a ${prize.get(score)}`);
// .has()
// .delete()
