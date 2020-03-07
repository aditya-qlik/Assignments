 +const baseEndpoint = `https://api.github.com`;
const userEndpoint = `${baseEndpoint}/users`;
const userArray = [];

function createPromise() {
        return new Promise((resolve, reject) => {
                const fetchInfo = fetch(`${userEndpoint}/wesbos`).then(response => response);
                if (fetchInfo.status !== 200) {
                        reject(new Error('Error occurred'));
                } else {
                        resolve(fetchInfo);
                }
        });
}
function handleError(err) {
        console.log(err);
}
function userInfo() {
        const userPromise = createPromise();
        userPromise.then(resolve => {
                const userData = resolve.json();
                userData.then(response => console.log(response)).catch(handleError);
        });
}
