import { ratesByBase, endpoint } from './elements.js';

export async function fetchRates(base = 'INR') {
        const res = await fetch(`${endpoint}${base}`);
        const rates = await res.json();
        console.log(rates);
        return rates;
}
export async function convertCurrency(amount, from, to) {
        if (!ratesByBase[from]) {
                console.log(`Oh no, we dont have ${from} to convert to ${to}. So gets go get it!`);
                const rates = await fetchRates(from);
                console.log(rates);
                ratesByBase[from] = rates;
        }
        console.log(ratesByBase[from], 'ratesByBase[from]');
        const rate = ratesByBase[from].rates[to];
        const convertedAmount = rate * amount;
        return convertedAmount;
}
