/* eslint-disable no-console */
const myPara = document.createElement('p');
myPara.textContent = 'I am a paragraph';
myPara.classList.add('jsMade');
console.log(myPara);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/600';
myImage.alt = 'Random Pictures';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myPara);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.classList = 'heading';

myDiv.insertAdjacentElement('afterbegin', heading);

const center = document.createElement('center');
center.textContent = `This is created from Js`;

heading.appendChild(center);

const list = document.createElement('ul');
const li3 = document.createElement('li');
li3.textContent = 'three';
const li1 = document.createElement('li');
li1.textContent = 'one';
const li4 = document.createElement('li');
li4.textContent = `four`;
const li2 = li4.cloneNode(true);
li2.textContent = `two`;
list.appendChild(li3);
list.append(li4);
li3.insertAdjacentElement('beforebegin', li1);
li1.insertAdjacentElement('afterend', li2);
myDiv.appendChild(list);
