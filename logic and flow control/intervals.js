// function buzzer() {
//         console.log(`buzzzzzzzzzzzzzzz`);
// }
// console.log('starting');
// setTimeout(buzzer, 800);
// console.log('stopping');
// setInterval(buzzer, 1000); // Runs after a delay of 2sec
function setImmediateInterval(funcToRun, ms) {
        funcToRun();
        setInterval(funcToRun, ms);
}
// setImmediateInterval(buzzer, 1000);

function updateTime(time) {
        if (time < 10) {
                return `0${time}`;
        }
        return time;
}
function updateAmPm(time) {
        return time >= 12 ? 'PM' : 'AM';
}
function hourInAmPmFormat(time) {
        // return time == 0 ? 12 : time > 12 ? time - 12 : time;
        if (time === 0) {
                return 12;
        }
        if (time > 12) {
                return time - 12;
        }
        return time;
}
function digiClock(hour, min, sec, ampm) {
        document.querySelector('#clock').innerHTML = `${hour} : ${min} : ${sec} ${ampm}`;
}
function currentTime() {
        const time = new Date();
        let hour = hourInAmPmFormat(time.getHours());
        const minute = updateTime(time.getMinutes());
        const second = updateTime(time.getSeconds());
        hour = updateTime(hour);
        const ampm = updateAmPm(hour);
        digiClock(hour, minute, second, ampm);
}
// function currentDate() {
//         const day = new Date().getDay();
//         console.log(day);
// }
// currentDate();
setImmediateInterval(currentTime, 500);
