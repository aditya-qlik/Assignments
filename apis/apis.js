/* eslint-disable no-console */
const userEl = document.querySelector('.user');
// const baseEndpoint = `https://api.grubhub.com`;  Use this to check hoe error is displayed
const baseEndpoint = `https://api.github.com`;
const userEndpoint = `${baseEndpoint}/users`;
async function displayUser(username) {
        userEl.textContent = `loading.....`;

        const response = await fetch(`${userEndpoint}/${username}`);
        const data = await response.json();
        console.log(response);
        console.log(data);
        console.log(data.name);
        console.log(data.blog);
        console.log(data.location);
        userEl.textContent = `${data.name}-${data.blog}`;
}
function handleError(err) {
        console.log(`oH No! ERROR!!!!`);
        console.log(err);
        userEl.textContent = `Something went wrong: ${err}`;
}
// const userPromise = fetch(endpoint);
// userEl.textContent = `loading.....`;
// console.log(userPromise);
// userPromise
//         .then(response => response.json())
//         .then(data => {
//                 console.log(data);
//                 userEl.textContent = `${data.name}, ${data.blog}`;
//         })
//         .catch(handleError);
displayUser('wesbos').catch(handleError);
