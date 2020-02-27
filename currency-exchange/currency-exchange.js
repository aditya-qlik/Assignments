/* eslint-disable no-console */
const fromSelect = document.querySelector('[name = "from_currency');
const fromInput = document.querySelector('[name = "from_amount');
const toSelect = document.querySelector('[name = "to_currency');
const toAmount = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endpoint = 'https://api.exchangeratesapi.io/latest?base=';
const ratesByBase = {};
// console.log(ratesByBase);
const currencies = {
        USD: 'United States Dollar',
        AUD: 'Australian Dollar',
        BGN: 'Bulgarian Lev',
        BRL: 'Brazilian Real',
        CAD: 'Canadian Dollar',
        CHF: 'Swiss Franc',
        CNY: 'Chinese Yuan',
        CZK: 'Czech Republic Koruna',
        DKK: 'Danish Krone',
        GBP: 'British Pound Sterling',
        HKD: 'Hong Kong Dollar',
        HRK: 'Croatian Kuna',
        HUF: 'Hungarian Forint',
        IDR: 'Indonesian Rupiah',
        ILS: 'Israeli New Sheqel',
        INR: 'Indian Rupee',
        JPY: 'Japanese Yen',
        KRW: 'South Korean Won',
        MXN: 'Mexican Peso',
        MYR: 'Malaysian Ringgit',
        NOK: 'Norwegian Krone',
        NZD: 'New Zealand Dollar',
        PHP: 'Philippine Peso',
        PLN: 'Polish Zloty',
        RON: 'Romanian Leu',
        RUB: 'Russian Ruble',
        SEK: 'Swedish Krona',
        SGD: 'Singapore Dollar',
        THB: 'Thai Baht',
        TRY: 'Turkish Lira',
        ZAR: 'South African Rand',
        EUR: 'Euro',
};

function generateOptions(options) {
        return Object.entries(options)
                .map(
                        ([currencyCode, currencyName]) =>
                                `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
                )
                .join('');
}

async function fetchRates(base = 'INR') {
        const res = await fetch(`${endpoint}${base}`);
        const rates = await res.json();
        console.log(rates);
        return rates;
}
async function convertCurrency(amount, from, to) {
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
function formatCurrency(amount, currency) {
        return Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency,
        }).format(amount);
}
async function handelInput(e) {
        const rawAmount = await convertCurrency(fromInput.value, fromSelect.value, toSelect.value);
        toAmount.textContent = formatCurrency(rawAmount, toSelect.value);
}
const optionsHtml = generateOptions(currencies);

fromSelect.innerHTML = optionsHtml;
toSelect.innerHTML = optionsHtml;
// console.log(optionsHtml);
// fetchRates();
form.addEventListener('input', handelInput);
