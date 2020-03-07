function removeTransition(e) {
        if (e.propertyName !== 'transform') return; // skip if not transform
        this.classList.remove('playing');
}

function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // select audio element with keyValue
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return;

        key.classList.add('playing');
        audio.currentTime = 0; // rewind to the start
        audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
