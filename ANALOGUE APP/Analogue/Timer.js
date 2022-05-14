setInterval(setTimer, 1000)


const secondHandTimer = document.querySelector('[data-second-hand-timer]');
const minuteHandTimer = document.querySelector('[data-minutes-hand-timer]');
const hourHandTimer = document.querySelector('[data-hour-hand-timer]');

function setTimer() {
const currentDate = new Date();
const secondRatio = currentDate.getSeconds() / 60;
const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60;
const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

setRotation(secondHand, secondRatio)
setRotation(minuteHand, minutesRatio)
setRotation(hourHand, hoursRatio)


}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setTimer();






