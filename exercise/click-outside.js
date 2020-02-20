const cardsButtons = document.querySelectorAll('.cards button');
const innerModal = document.querySelector('.modal-inner');
const outerModal = document.querySelector('.modal-outer');
// console.log(cardsButtons);
function handleCardButtonClick(event) {
        const button = event.currentTarget;
        const card = button.closest('.cards');
        // Select img
        const imgSrc = card.querySelector('img').src;
        const desc = card.dataset.description;
        const name = card.querySelector('h2').textcontent;
        // Put info in model
        innerModal.innerHTML = `<img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
        <p>${desc}</p>`;
        outerModal.classList.add('open');
}
cardsButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));
function closeModal() {
        outerModal.classList.remove('open');
}
outerModal.addEventListener('click', function(event) {
        const isOutSide = !event.target.closest('.modal-inner');
        if (isOutSide) {
                closeModal();
        }
});
outerModal.addEventListener('keyDown', event => {
        if (event.key === 'Escape') {
                closeModal();
        }
});
