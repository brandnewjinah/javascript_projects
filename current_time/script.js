const secondHand = document.querySelector('.seconds');
const minsHand = document.querySelector('.minutes');
const hourHand = document.querySelector('.hours');

function setDate() {
    const currentTime = new Date();

    const seconds = currentTime.getSeconds();
    const secDegrees = (seconds / 60) * 360;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const minutes = currentTime.getMinutes();
    const minDegrees = (minutes / 60) * 360;
    minsHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = currentTime.getHours();
    const hrDegrees = ((hours / 12) * 360) + ((minutes/60)*30);
    hourHand.style.transform = `rotate(${hrDegrees}deg)`;

}

setInterval(setDate, 1000);