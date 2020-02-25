/* eslint-disable no-console */
// console.log('Starting');
// setTimeout(function() {
//         console.log('Running');
// }, 2000);
// console.log('Ending');
// setInterval(function boop() {
//         console.log('BOOP');
// }, 100);
const go = document.querySelector('.go');
go.addEventListener('click', function(e) {
        const event = e.currentTarget;
        event.textContent = 'GO!!!!!';
        setTimeout(function() {
                event.classList.add('circle');
                setTimeout(function() {
                        event.classList.add('red');
                        setTimeout(function() {
                                event.classList.remove('circle');
                                setTimeout(function() {
                                        event.classList.remove('red');
                                        event.classList.add('purple');
                                        setTimeout(function() {
                                                event.classList.add('fadeOut');
                                        }, 500);
                                }, 300);
                        }, 250);
                }, 500);
        }, 2000);
});
