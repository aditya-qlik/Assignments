import { convertCurrency } from './lib.js';
import { formatCurrency } from './utils.js';
import * as data from './elements.js';

export async function handelInput(e) {
        const rawAmount = await convertCurrency(data.fromInput.value, data.fromSelect.value, data.toSelect.value);
        data.toAmount.textContent = formatCurrency(rawAmount, data.toSelect.value);
}
