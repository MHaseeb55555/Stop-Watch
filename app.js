var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;
var interval;
var hrHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msHeading = document.getElementById("ms");
function StopWatch() {
    ms++;
    msHeading.innerHTML = ms
    if (ms >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        ms = 0;
    } else if (sec >= 60) {
        min++;
        minHeading.innerHTML = min
        sec = 0;
    } else if (min >= 60) {
        hr++;
        hrHeading.innerHTML = hr;
        min = 0;
    }
}

var startBtn = document.getElementById("start");
var pausedBtn = document.getElementById("paused");
var resetBtn = document.getElementById("reset");

function start() {
    interval = setInterval(StopWatch, 10)
    startBtn.disabled = true;
    pausedBtn.disabled = false;


}
function paused() {
    clearInterval(interval)
    startBtn.disabled = false;
    pausedBtn.disabled = true;

}
function reset() {
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;



    hrHeading.innerHTML = hr;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msHeading.innerHTML = ms;
    clearInterval(interval)
    startBtn.disabled = false;
    pausedBtn.disabled = false;

}
