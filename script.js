const stopwatchDisplay = document.querySelector('.stopwatch');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const lapButton = document.querySelector('.lap');
const lapTimesList = document.querySelector('.lap-times');

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let interval;
let isRunning = false;

function displayTime() {
    stopwatchDisplay.textContent = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} : ${milliseconds.toString().padStart(2, '0')}`;
}

function startStopwatch() {
    isRunning = true;
    interval = setInterval(function () {
        milliseconds++;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        displayTime();
    }, 10);
}

function lapRecord() {
    if (isRunning == true) {
        const lapTime = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} : ${milliseconds.toString().padStart(2, '0')}`;
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapTimesList.append(lapItem);
    }
}

startButton.addEventListener('click', function () {
    startStopwatch();
});

stopButton.addEventListener('click', function () {
    isRunning = false;
    clearInterval(interval);
});

resetButton.addEventListener('click', function () {
    isRunning = false;
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTime();
    lapTimesList.innerHTML = '';
});

lapButton.addEventListener('click', lapRecord);
displayTime();