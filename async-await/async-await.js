function wait(ms = 0) {
        return new Promise(resolve => {
                setTimeout(resolve, ms);
        });
}

function makePizza(toppings = []) {
        return new Promise(function(resolve, reject) {
                if (toppings.includes('pineapple')) {
                        reject('Seriously? Get out 🍍');
                }
                const amountOfTimeToBake = 500 + toppings.length * 200;

                setTimeout(function() {
                        resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(' ')}`);
                }, amountOfTimeToBake);
        });
}

async function go() {
        console.log('Starting');
        await wait(2000);
        console.log('running');
        await wait(200);
        console.log('ending');
}

go();

async function makeDinner() {
        const pizzaPromise1 = makePizza(['pepperoni']);
        const pizzaPromise2 = makePizza(['mushrooms']);
        const [pep, mush] = await Promise.all([pizzaPromise1, pizzaPromise2]);
        console.log(pep, mush);
}

makeDinner();

// Function declaration
// async function fd() { }

// arrow function
// const arrowFn = async () => { }

// call back
// window.addEventListener('click', async function () {

// })

//
// const person = {
// method
//   sayHi: async function () {

//   },
// method shorthand
//   async sayHello() {

//   },
// function property
//   sayHey: async () => {

//   }
// }
