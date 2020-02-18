/* eslint-disable */
const d = document.querySelector('p');
console.log(d);
const divs = document.querySelectorAll('div');
console.log(divs);
const imgs = document.querySelectorAll('.item img');
console.log(imgs);
const cSelector = document.querySelectorAll('.item');
console.log(cSelector);
const item1 = document.querySelector('.item1');
console.log(item1);
const imgItem = item1.querySelector('img');
console.log(imgItem);
const heading = document.querySelector('h2');
console.log(heading);
console.dir(heading);
console.log(heading.textContent);
heading.textContent = 'Adi is cool';
console.log(heading.textContent);
console.log(heading.innerText);
console.log(heading.innerHTML);
console.log(heading.outerHTML);
const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);
pizzaList.textContent = `${pizzaList.textContent}  🍕`;
pizzaList.insertAdjacentText('afterBegin', '🍕');

//Classes!!....
const pic = document.querySelector(".nice");
console.log(pic.classList);
pic.classList.add('open');
console.log(pic.classList);
pic.classList.remove('cool');
console.log(pic.classList);
// pic.classList.add('round');
// console.log(pic.classList);
function toggleRound(){
    pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);
pic.width = 300;
console.log(pic.naturalWidth);
pic.addEventListener('load', function(){
    console.log(pic.naturalWidth);
});
