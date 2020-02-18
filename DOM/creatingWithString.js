/* eslint-disable no-console */
const item = document.querySelector('.item');
console.log(item.innerHTML);
item.innerHTML = `<h1><center>This is created using inner HTML</center></h1>`; // replaces the older div body with the <h1></h1>
console.log(item.innerHTML);
const src = `https://picsum.photos/200`;
const desc = `Random photos`;
// const desc = `Random photos <h3>If we enter html in backtick</h3>`;  this can be done by users and this can also lead to xss
const myHTML = `
    <div class="wrapper">
        <h2>${desc}</h2>
        <img src="${src}" alt="Random Photo"/>
    </div>
`;
const test = document.querySelector('.test');
test.innerHTML = myHTML;
console.log(myHTML);
console.log(typeof myHTML);

const testImage = document.querySelector('.wrapper img');
console.log(testImage);
testImage.classList.add('round');

// turn a string into dom element
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);
console.log(myFragment.querySelector('img'));
const trial = document.querySelector('.try');
trial.appendChild(myFragment);
