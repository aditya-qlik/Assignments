const firstDiv = document.createElement('div');
firstDiv.classList.add('wrapper');
document.body.appendChild(firstDiv);
const firstUl = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.textContent = `one`;
li2.textContent = `two`;
li3.textContent = `three`;
firstUl.appendChild(li2);
li2.insertAdjacentElement('beforebegin', li1);
li2.insertAdjacentElement('afterend', li3);
// console.log(firstUl);
firstDiv.appendChild(firstUl);
const pic = document.createElement('img');
const src = `https://picsum.photos/600`;
const alt = `Cute puppy`;
pic.classList = `cute`;
pic.setAttribute('src', src);
pic.setAttribute('alt', alt);
pic.width = 250;
firstDiv.appendChild(pic);
// console.log(pic);
const myHTML = `
    <div class="myDiv">
        <p>1st paragraph</p>
        <p>2nd paragraph</p>
    </div>`;
const ulfinder = firstDiv.querySelector('ul');
// console.log(ulfinder);
ulfinder.insertAdjacentHTML('beforebegin', myHTML);
const myDiv = firstDiv.querySelector('.myDiv');
// console.log(myDiv.children);
myDiv.children[1].classList = `warning`;
// console.log(myDiv.children[1]);
myDiv.firstElementChild.remove();
const generatePlayerCard = (name, age, height) => `
    <div class="playerCard">
        <h2>${name.toUpperCase()} - ${age}</h2>
        <p>Their hight is ${height} and ${age} years old. In dog years this person would be ${age *
        7}. That would be a tall dog!</p>
        <button class="delete" type="button">&times; DELETE</button>
    </div>`;
const cards = document.createElement('div');
cards.classList.add('cards');
const name = ['adi', 'alok', 'noopur', 'sheetal'];
const age = [27, 25, 26, 32];
const height = [150, 160, 100, 110];
let cardsHTML = '';
for (let i = 0; i < 4; i++) {
        cardsHTML += generatePlayerCard(name[i], age[i], height[i]);
}
// console.log(cardsHTML);
cards.innerHTML = cardsHTML;
firstDiv.insertAdjacentElement('beforebegin', cards);
const buttons = document.querySelectorAll('.delete');
const deleteCard = event => {
        const clickedButton = event.currentTarget;
        clickedButton.closest('.playerCard').remove();
};
buttons.forEach(button => button.addEventListener('click', deleteCard));
