import { generateOptions } from './utils.js';
import currencies from './currencies.js';
import * as data from './elements.js';
import { handelInput } from './handlers.js';

const form = document.querySelector('.app form');
const optionsHtml = generateOptions(currencies);

data.fromSelect.innerHTML = optionsHtml;
data.toSelect.innerHTML = optionsHtml;
// console.log(optionsHtml);
// fetchRates();
form.addEventListener('input', handelInput);
