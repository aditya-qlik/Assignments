/* eslint-disable no-console */
const clickLink = document.querySelector('.wes');
clickLink.addEventListener('click', function(event) {
        event.preventDefault();
        const changePage = confirm(`This website might be malicious!!, do you wish to proceed??`);
        if (changePage) {
                window.location = event.currentTarget.href;
        }
        /*
        if(!changePage){
        event.preventDefault();

        } */
});
const signUp = document.querySelector('[name="signUp"]');
signUp.addEventListener('submit', function(event) {
        console.log(event.currentTarget.name);
        console.log(event.currentTarget.email);
        console.log(event.currentTarget.agree);
        console.log(event.currentTarget.agree.checked);
        const name = event.currentTarget.name.value;
        // console.log(name);
        if (name.includes('Wes')) {
                alert(`Sorry bro`);
                event.preventDefault();
        }
        event.preventDefault();
});
function logEvent(event) {
        console.log(event.type);
        console.log(event.currentTarget.value);
}
signUp.name.addEventListener('keyup', logEvent);
signUp.name.addEventListener('keydown', logEvent);
signUp.name.addEventListener('focus', logEvent);
signUp.name.addEventListener('blur', logEvent);
/*
'keyup'
'keydown'
'focus'
'blur'
*/
const photo = document.querySelector('.pic');
function photoHandler(event) {
        if (event.type === 'click' || event.key === 'Enter') {
                console.log(`You clicked the photo`);
                console.log(event.key);
        }
}
photo.addEventListener('click', photoHandler);
photo.addEventListener('keyup', photoHandler);
