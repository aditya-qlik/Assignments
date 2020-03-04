/* eslint-disable no-console */
const people = [
        {
                name: 'Wes',
                year: 1988,
        },
        {
                name: 'Kait',
                year: 1986,
        },
        {
                name: 'Irv',
                year: 1970,
        },
        {
                name: 'Lux',
                year: 2015,
        },
];

const comments = [
        {
                text: 'Love this!',
                id: 523423,
        },
        {
                text: 'Super good',
                id: 823423,
        },
        {
                text: 'You are the best',
                id: 2039842,
        },
        {
                text: 'Ramen is my fav food ever',
                id: 123523,
        },
        {
                text: 'Nice Nice Nice!',
                id: 542328,
        },
];

const isAdult = people.some(person => new Date().getFullYear() - person.year >= 18);
console.table({ isAdult });

const isAllAdult = people.every(person => new Date().getFullYear() - person.year >= 18);
console.table({ isAllAdult });

const findComment = comments.find(obj => obj.id === 823423);
console.table(findComment);

const indexToDelete = comments.findIndex(comment => comment.id === 123523);
console.log(indexToDelete);

comments.splice(indexToDelete, 1);
console.table(comments);
