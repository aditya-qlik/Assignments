/* eslint-disable no-console */
const adi = document.querySelector('.adi');
console.log(adi.children); // these are for elements , these ignore text node
console.log(adi.firstElementChild); // these are for elements , these ignore text node
console.log(adi.lastElementChild); // these are for elements , these ignore text node
console.log(adi.previousElementSibling); // these are for elements , these ignore text node
console.log(adi.nextElementSibling); // these are for elements , these ignore text node
console.log(adi.parentElement); // these are for elements , these ignore text node

console.log(adi.children); // these are for node , these do not ignore text node
console.log(adi.firstChild); // these are for node , these do not ignore text node
console.log(adi.lastChild); // these are for node , these do not ignore text node
console.log(adi.previousSibling); // these are for node , these do not ignore text node
console.log(adi.nextSibling); // these are for node , these do not ignore text node
console.log(adi.parentNode); // these are for node , these do not ignore text node

const p = document.createElement('p');
p.textContent = `i will be removed`;
document.body.appendChild(p);
p.remove();
console.log(p); // it is removed but still can be viewed as it is still in js memory
document.body.appendChild(p); // it can be added again because it exists in js memory
