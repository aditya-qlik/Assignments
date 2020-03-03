/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const people = [
        'Beck, Glenn',
        'Becker, Carl',
        'Beckett, Samuel',
        'Beddoes, Mick',
        'Beecher, Henry',
        'Beethoven, Ludwig',
        'Begin, Menachem',
        'Belloc, Hilaire',
        'Bellow, Saul',
        'Benchley, Robert',
        'Benenson, Peter',
        'Ben-Gurion, David',
        'Benjamin, Walter',
        'Benn, Tony',
        'Bennington, Chester',
        'Benson, Leana',
        'Bent, Silas',
        'Bentsen, Lloyd',
        'Berger, Ric',
        'Bergman, Ingmar',
        'Berio, Luciano',
        'Berle, Milton',
        'Berlin, Irving',
        'Berne, Eric',
        'Bernhard, Sandra',
        'Berra, Yogi',
        'Berry, Halle',
        'Berry, Wendell',
        'Bethea, Erin',
        'Bevan, Aneurin',
        'Bevel, Ken',
        'Biden, Joseph',
        'Bierce, Ambrose',
        'Biko, Steve',
        'Billings, Josh',
        'Biondo, Frank',
        'Birrell, Augustine',
        'Black, Elk',
        'Blair, Robert',
        'Blair, Tony',
        'Blake, William',
];
const inventors = [
        {
                first: 'Albert',
                last: 'Einstein',
                year: 1879,
                passed: 1955,
        },
        {
                first: 'Isaac',
                last: 'Newton',
                year: 1643,
                passed: 1727,
        },
        {
                first: 'Galileo',
                last: 'Galilei',
                year: 1564,
                passed: 1642,
        },
        {
                first: 'Marie',
                last: 'Curie',
                year: 1867,
                passed: 1934,
        },
        {
                first: 'Johannes',
                last: 'Kepler',
                year: 1571,
                passed: 1630,
        },
        {
                first: 'Nicolaus',
                last: 'Copernicus',
                year: 1473,
                passed: 1543,
        },
        {
                first: 'Max',
                last: 'Planck',
                year: 1858,
                passed: 1947,
        },
        {
                first: 'Katherine',
                last: 'Blodgett',
                year: 1898,
                passed: 1979,
        },
        {
                first: 'Ada',
                last: 'Lovelace',
                year: 1815,
                passed: 1852,
        },
        {
                first: 'Sarah E.',
                last: 'Goode',
                year: 1855,
                passed: 1905,
        },
        {
                first: 'Lise',
                last: 'Meitner',
                year: 1878,
                passed: 1968,
        },
        {
                first: 'Hanna',
                last: 'Hammarström',
                year: 1829,
                passed: 1909,
        },
];
const fifteen = inventors.filter(obj => obj.year >= 1500 && obj.year < 1600);
// const fifteen = inventors.filter(obj => {
//         if (obj.year >= 1500 && obj.year < 1600) {
//                 return obj;
//                 return true;
//         }
// });
console.table(fifteen);

const names = inventors.map(obj => `${obj.first} ${obj.last}`);
console.table(names);

const ordered = inventors.sort((firstPerson, secondPerson) => firstPerson.year - secondPerson.year);
console.table(ordered);

const yearLived = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log(yearLived);

const mostLived = inventors.sort((firstPerson, secondPerson) => {
        const firstPersonAge = firstPerson.passed - firstPerson.year;
        const secondPersonAge = secondPerson.passed - secondPerson.year;
        return secondPersonAge - firstPersonAge;
});
console.table(mostLived);

const alpha = people.sort((firstPerson, secondPerson) => {
        const [flast, ffirst] = firstPerson.split(', ');
        const [slast, sfirst] = secondPerson.split(', ');
        return slast - flast;
});
console.table(alpha);

const data = [
        'car',
        'car',
        'truck',
        'truck',
        'bike',
        'walk',
        'car',
        'van',
        'bike',
        'walk',
        'car',
        'van',
        'car',
        'truck',
        'pogostick',
];

const transportation = data.reduce((obj, item) => {
        if (!obj[item]) {
                obj[item] = 0;
        }
        obj[item]++;
        return obj;
}, {});
console.table(transportation);
