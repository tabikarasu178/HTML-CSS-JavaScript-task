let sec = 10;
let timer;
const nowTime = document.getElementById('nowTime');

const setTime = document.getElementById('setTime');
setTime.addEventListener('click', function () {
    sec = document.getElementById('inputTime').value;
    nowTime.textContent = `${sec}:セット完了です`;
});

const countDown = () => {
    sec -= 1;
    nowTime.textContent = sec;
    console.log(sec);
    if (sec === 0) {
        alert('終了');
        clearInterval(timer);
    }
};

const startTimer = document.getElementById('startTimer');

startTimer.addEventListener('click', function () {
    timer = setInterval('countDown()', 1000);
});

const stopTimer = document.getElementById('stopTimer');
stopTimer.addEventListener('click', function () {
    clearInterval(timer);
    nowTime.textContent = `${sec}+:ストップしました`;
});