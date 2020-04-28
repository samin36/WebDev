const hours_span = document.getElementById("hours");
const minutes_span = document.getElementById("minutes");
const seconds_span = document.getElementById("seconds");

function main() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds()
    hours = (hours < 10) ? (`0${hours}`) : hours;
    minutes = (minutes < 10) ? (`0${minutes}`) : minutes;
    seconds = (seconds < 10) ? (`0${seconds}`) : seconds;

    hours_span.innerHTML = hours;
    minutes_span.innerHTML = minutes;
    seconds_span.innerHTML = seconds;
    setTimeout(main, 1000);
}
main();