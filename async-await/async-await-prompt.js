/* eslint-disable no-console */
function wait(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
        popup.classList.remove('open');
        await wait(1000);
        // remove the popup entirely!
        popup.remove();
        // eslint-disable-next-line no-param-reassign
        popup = null;
}

function ask(options) {
        return new Promise(async function(resolve) {
                // First we need to create a popup with all the fields in it
                const popup = document.createElement('form');
                popup.classList.add('popup');
                popup.insertAdjacentHTML(
                        'afterbegin',
                        `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"/>
        <button type="submit">Submit</button>
      </fieldset>
    `
                );

                // check if they want a cancel button
                if (options.cancel) {
                        const skipButton = document.createElement('button');
                        skipButton.type = 'button';
                        skipButton.textContent = 'Cancel';
                        popup.firstElementChild.appendChild(skipButton);
                        skipButton.addEventListener(
                                'click',
                                function() {
                                        resolve(null);
                                        destroyPopup(popup);
                                },
                                {
                                        once: true,
                                }
                        );
                }
                // listen for the submit event on the inputs
                popup.addEventListener(
                        'submit',
                        function(event) {
                                event.preventDefault();
                                console.log('SUBMITTED');
                                resolve(event.target.input.value);
                                // remove it from the DOM entirely
                                destroyPopup(popup);
                        },
                        {
                                once: true,
                        }
                );
                // when someone does submit it, resolve the data that was in the input box!

                // insert that popup into the DOM
                document.body.appendChild(popup);
                // put a very small timeout before we add the open class

                await wait(50);
                popup.classList.add('open');
        });
}

// select all button that have a question
async function askQuestion(event) {
        const button = event.currentTarget;
        const cancel = 'cancel' in button.dataset; // * 'in' is used to check if there is xyz property in the object
        // * const cancel = button.hasAttribute('data-cancel'); this can also be used here
        const answer = await ask({
                title: button.dataset.question,
                cancel,
        });
        console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
        {
                title: 'What is your name?',
        },
        {
                title: 'What is your age?',
                cancel: true,
        },
        {
                title: 'What is your dogs name?',
        },
];

/*
 * Promise.all([ask(questions[0]), ask(questions[1]), ask(questions[2])]).then(answers => {
 *         console.log(answers);
 * });
 * this runs all the popup simultaneously not sequentially
 */
/*
 *  promise.all(questions.map(ask)).then(data => { console.log(data);});
 * it can be used to ask questions
 * this also runs all the popup at once
 */

async function asyncMap(array, callback) {
        const results = [];
        for (const item of array) {
                results.push(await callback(item));
        }
        return results;
}

async function go() {
        const answers = await asyncMap(questions, ask);
        console.log(answers);
}

// go();
/*
 * async function askMany() {
 *   for (const question of questions) {
 *     const answer = await ask(question);
 *     console.log(answer);
 *   }
 * }
 *
 * askMany();
 * --> Forof loop allows to PAUSE the loop using await
 */
