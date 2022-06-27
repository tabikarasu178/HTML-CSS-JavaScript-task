// スタートボタンを押す
// 1秒ごとに1を足す
// 確認ボタンを押す
// 20秒以上21秒未満だったら成功ですとアラート
// 20秒未満or21秒以上の場合、その秒数をアラートして再スタート出来るようにする
// スタートしてから40秒経ったら強制終了
let timer;
let sec = 0;
const confirmTime = document.getElementById('confirmTime');
const startTimer = document.getElementById('startTimer');

confirmTime.addEventListener('click', function () {
    if (sec === 20) {
        alert('大正解');
    } else if (sec < 20) {
        alert(`${sec}秒だ、まだ早い`);
    } else {
        alert(`もう${sec}秒だ、再挑戦！`);
    }
    clearInterval(timer);
    sec = 0;
});

startTimer.addEventListener('click', function () {
    clearInterval(timer);
    timer = setInterval('countUp()', 1000);
});

const countUp = () => {
    sec += 1;
    if (sec === 40) {
        clearInterval(timer);
        alert('終了！再挑戦！');
        sec = 0;
    }
};
