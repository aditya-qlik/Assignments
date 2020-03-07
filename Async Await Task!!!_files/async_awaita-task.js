const baseEndpoint = `https://api.github.com`;
const userEndpoint = `${baseEndpoint}/users`;
const userArray = [];

function handleError(err) {
    console.log('Theres no user with that username');
    console.log(err);
}

async function userInfoArray(userInfo) {
    const userData = await userInfo;
    userArray.push(userData);
    console.log(userArray);
}
function userInformation(response){
    console.log(response)
    response.then(userData => userInfoArray(userData)).catch(handleError)
}
async function fetchUserData() {
    const username = document.querySelector('#name').value;
    const response = await fetch(`${userEndpoint}/${username}`).then(response =>userInformation(response.json())).catch(handleError);
    console.log(response)
    // if (response.status !== 200) {
    //     handleError(response.statusText);
    // } else {
    //     const data = await response.json();
    //     console.log(data);
    //     userInfoArray(data);
    // }
}

document.querySelector('#submit').addEventListener('click', fetchUserData);
