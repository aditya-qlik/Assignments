/* eslint-disable no-console */
const butts = document.querySelector('.butts');

function handleClick() {
        console.log('you clicked butts');
}

butts.addEventListener('click', handleClick);
const coolButts = document.querySelector('.coolButts');
coolButts.addEventListener('click', function() {
        console.log('you clicked coolButts');
});
function removeClick() {
        butts.removeEventListener('click', handleClick);
        coolButts.removeEventListener('click', function() {
                // anonymous functions cant be removed using removeEventHandler
                console.log('you clicked coolButts'); // anonymous functions cant be removed using removeEventHandler
        });
}
const removeListener = document.querySelector('.removeListener');
removeListener.addEventListener('click', removeClick);

const buyButtons = document.querySelectorAll('button.buy');
function buyItem(event) {
        console.log(`BUYING ITEM`);
        console.log(event.target);
        console.log(event.target.dataset);
        console.log(event.currentTarget);
        console.log(event.currentTarget === event.target);
        console.log(event.target.dataset.price);
        console.log(event.type);
        console.log(event.bubbles);
        // sto this event from bubbling up
        // event.stopPropagation();
}
function clickBinding(buyButton) {
        buyButton.addEventListener('click', buyItem /* , { once: true } */); // we can use other functions at the place of buyItem
}
buyButtons.forEach(clickBinding);
window.addEventListener(
        'click',
        function(event) {
                console.log('You Clicked The Window');
                console.log(event.target);
                console.log(event.type);
                console.log(event.bubbles);
        } /* ,
        { capture: true, once: true } */
);
const pic = document.querySelector('.photo');
pic.addEventListener('mouseenter', function(event) {
        console.log(event.currentTarget);
        console.log(this);
        console.log(this === event.currentTarget);
        console.count(event.currentTarget);
});
/* if we use a arrow function then 'This' keyword is no longer scoped */
