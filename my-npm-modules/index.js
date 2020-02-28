import wait from 'waait';
import faker from 'faker';
import { formatDistance, format } from 'date-fns';

// console.log(faker.name.firstName());
async function go() {
        console.log('going');
        await wait(2000);
        console.log('ending');
}
// go();
const diff = formatDistance(new Date(), new Date(1986, 3, 4, 10, 32, 0), {
        addSuffix: true,
});
console.log(diff);

// function digiClock() {
//         const formated = setInterval(format(new Date(), 'PPPPpppp'), 500);
//         return formated;
// }
// console.log(digiClock());
