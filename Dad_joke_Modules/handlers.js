import * as elements from './elements.js';
import { fetchJoke } from './lib.js';
import randomItemFromArray from './utils.js';
import buttonText from './buttonText.js';

export async function handleClick() {
        const { joke } = await fetchJoke();
        elements.jokeHolder.textContent = joke;
        elements.jokeButtonSpan.textContent = randomItemFromArray(buttonText, elements.jokeButtonSpan.textContent);
}
