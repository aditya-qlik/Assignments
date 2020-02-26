const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');

async function fetchRecipes(query) {
        const response = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
        const data = await response.json();
        console.log(data);
}
function handleSubmit(event) {
        event.preventDefault();
}
form.addEventListener('submit', handleSubmit);
fetchRecipes('pizza');
/*
 * CO: Cross Origin ...... originally (github.com 👈No!(data sharing) No!👉 wesbos.com)
 * R:
 * S:
 */
