/* eslint-disable no-console */
import * as elements from './elements.js';

export async function fetchJoke() {
        elements.loader.classList.remove('hidden');
        const response = await fetch('https://icanhazdadjoke.com', {
                headers: {
                        Accept: 'application/json',
                        // Accept: 'text/plain',
                        // Accept: 'text/html',
                },
        });
        const data = await response.json();
        console.log(data);
        elements.loader.classList.add('hidden');
        return data;
}
