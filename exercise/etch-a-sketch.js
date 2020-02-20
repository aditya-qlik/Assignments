const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');
const MOVE_AMOUNT = 10;
const { width, height } = canvas; // destructuring
// console.log(width, height);
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
let hue = 0;
ctx.strokeStyle = ` hsl(${hue},100%,50%)`;
ctx.beginPath(); // start drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
// function draw(options) {
//         console.log(options.key);
// }
function draw({ key }) {
        // Change line color
        hue += 5;
        ctx.strokeStyle = ` hsl(${hue},100%,50%)`;

        // console.log(key);
        // Start path
        ctx.beginPath();
        ctx.moveTo(x, y);
        // moving x & y according to user action
        switch (key) {
                case 'ArrowUp':
                        y -= MOVE_AMOUNT + 10;
                        break;
                case 'ArrowRight':
                        x += MOVE_AMOUNT + 10;
                        break;
                case 'ArrowDown':
                        y += MOVE_AMOUNT + 10;
                        break;
                case 'ArrowLeft':
                        x -= MOVE_AMOUNT + 10;
                        break;
                default:
                        break;
        }
        ctx.lineTo(x, y);
        ctx.stroke();
}
function handleKey(event) {
        if (event.key.includes('Arrow')) {
                event.preventDefault();
                draw({ key: event.key });
                // console.log('handling key');
                // console.log(event.key);
        }
}
window.addEventListener('keydown', handleKey);
function clearCanvas() {
        canvas.classList.add('shake');
        ctx.clearRect(0, 0, width, height);
        canvas.addEventListener(
                'animationend',
                function() {
                        canvas.classList.remove('shake');
                },
                { once: true }
        );
}
shakeBtn.addEventListener('click', clearCanvas);
