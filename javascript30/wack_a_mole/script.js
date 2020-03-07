/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const game = document.querySelector('.game');
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const innerModal = document.querySelector('.modal-inner');
const outerModal = document.querySelector('.modal-outer');
let lastHole;
let timeUp = false;
let score = 0;
let hiscore = 0;

function randomTime(min, max) {
        return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) {
                console.log('Ah nah thats the same one bud');
                return randomHole(holes);
        }
        lastHole = hole;
        return hole;
}

function peep() {
        const time = randomTime(200, 1000);
        const hole = randomHole(holes);
        hole.classList.add('up');
        setTimeout(() => {
                hole.classList.remove('up');
                if (!timeUp) {
                        peep();
                }
        }, time);
}

function gameOver() {
        if (hiscore < score) {
                hiscore = score;
                timeUp = true;
                game.classList.add('over');
                innerModal.innerHTML = `<h1>GAME OVER!!!.....</h1><br><h1 style="text-align: center;">🎉 NEW HIGHSCORE: ${hiscore} 🎉</h1>`;
                outerModal.classList.add('open');
        } else {
                timeUp = true;
                game.classList.add('over');
                innerModal.innerHTML = `<h1>GAME</h1><br><h1>OVER!!!....</h1>`;
                outerModal.classList.add('open');
        }
}

function startGame() {
        scoreBoard.textContent = 0;
        timeUp = false;
        score = 0;
        peep();
        setTimeout(() => gameOver(), 15000);
}

function bonk(e) {
        if (!e.isTrusted) return; // cheater!
        score++;
        this.parentNode.classList.remove('up');
        scoreBoard.textContent = score;
}
function restartGame() {
        game.classList.remove('over');
        outerModal.classList.remove('open');
        startGame();
}
document.querySelector('.restart').addEventListener('click', restartGame);
moles.forEach(mole => mole.addEventListener('click', bonk));
document.querySelector('.start').addEventListener('click', startGame);
