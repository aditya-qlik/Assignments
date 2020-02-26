function wait(ms = 0) {
        return new Promise(resolve => {
                setTimeout(resolve, ms);
        });
}

function makePizza(toppings = []) {
        return new Promise(function(resolve, reject) {
                if (toppings.includes('pineapple')) {
                        reject('Seriously? Get out ');
                }
                const amountOfTimeToBake = 500 + toppings.length * 200;
                setTimeout(function() {
                        resolve(`Here is your pizza  with the toppings ${toppings.join(' ')}`);
                }, amountOfTimeToBake);
        });
}

function handleError(err) {
        console.log('ooohhh Nooooooooo!!!');
        console.log(err);
}

// function handleDisgustingPizza() {}
async function go() {
        const pizza = await makePizza(['pineapple']); // .catch(handleDisgustingPizza);
        return pizza;
}

// catch it at run time
go().catch(handleError);
// make a safe function with a HOF
function makeSafe(fn, errorHandler) {
        return function() {
                fn().catch(errorHandler);
        };
}

const safeGo = makeSafe(go, handleError);

safeGo();
