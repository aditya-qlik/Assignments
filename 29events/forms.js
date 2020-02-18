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
const signUp = document.querySelector('[name="signUp]');
signUp.addEventListener('submit', function(event) {
        console.log(event);
        event.preventDefault();
});
