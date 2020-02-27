/* eslint-disable no-console */
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');
const loader = document.querySelector('.loader');

const buttonText = [
        'Ugh.',
        '😹',
        'omg dad',
        'you are the worst',
        'seriously',
        'Stop it!',
        'please stop 😹',
        'That was the worst one',
];

async function fetchJoke() {
        loader.classList.remove('hidden');
        const response = await fetch('https://icanhazdadjoke.com', {
                headers: {
                        Accept: 'application/json',
                        // Accept: 'text/plain',
                        // Accept: 'text/html',
                },
        });
        const data = await response.json();
        console.log(data);
        loader.classList.add('hidden');
        return data;
}

function randomItemFromArray(arr, not) {
        const item = arr[Math.floor(Math.random() * arr.length)];
        if (item === not) {
                // console.log('Ahh we used that one last time, look again');
                return randomItemFromArray(arr, not);
        }
        return item;
}

async function handleClick() {
        const { joke } = await fetchJoke();
        jokeHolder.textContent = joke;
        jokeButtonSpan.textContent = randomItemFromArray(buttonText, jokeButtonSpan.textContent);
}

jokeButton.addEventListener('click', handleClick);
