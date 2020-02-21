/* eslint-disable no-console */
const age = 50;
if (age > 70) {
        console.log(`in your 70s`);
} else if (age > 60) {
        console.log(`in your 60s`);
} else if (age > 50) {
        console.log(`in your 50s`);
} else {
        console.log(`nothing is true`);
}

function slugify(sentence, lowercase) {
        if (lowercase) {
                return sentence.replace(/\s/g, '-').toLowercase();
        }
        return sentence.replace(/\s/g, '-');
}

const name = 'Aditya';
if (name === 'Aditya' || name === 'Alok') {
        console.log('cool name');
}

// Truthy Falsy
let score = [];
if (score) {
        console.log(`There is score already`);
} else {
        console.log(`No score yet`);
}
score = [1, 2, 3];
if (score) {
        console.log(`There is score already`);
} else {
        console.log(`No score yet`);
}
let arr = [];
if (arr.length) {
        console.log(`Empty array.length is truthy`);
} else {
        console.log(`Empty array.length is FALSY`);
}
arr = [1, 2, 3];
if (arr.length) {
        console.log(`NON-Empty array.length is truthy`);
} else {
        console.log(`NON-Empty array.length is Falsy`);
}
score = {};
if (score) {
        console.log(`EMPTY Object is Truthy`);
} else {
        console.log(`EMPTY Object is Falsy`);
}
score = { name: 'Aditya' };
if (score) {
        console.log(`NON-EMPTY Object is Truthy`);
} else {
        console.log(`NON-EMPTY Object is Falsy`);
}
arr = {};
if (Object.keys(arr).length) {
        console.log(`Object.keys(empty-object).length is truthy`);
} else {
        console.log(`Object.keys(empty-object).length is FALSY`);
}
arr = { name: 'Aditya' };
if (arr.length) {
        console.log(`Object.keys(non-empty-object).length is truthy`);
} else {
        console.log(`Object.keys(non-empty-object).length is falsy`);
}
console.clear();
// ternaries
const count = 2;
// let word;
// if (count === 1) {
//         word = 'item';
// } else {
//         word = 'items';
// }
const sentence = `you have ${count} ${count <= 1 ? 'item' : 'items'}`;
console.log(sentence);
// '&&' can be used to run condition with only if statement
