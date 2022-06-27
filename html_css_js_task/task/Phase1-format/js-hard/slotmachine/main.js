// [フローチャート(追加問題)]
//　スタートボタンを押すとスロットの9つの数字が動き出す
//  上から9、0、1の初期数値からカウントアップしていき、9になると0に戻る
//  1つずつストップボタンを押して止める
//  押されたストップボタンは無効化する(押せないようにする)
//  止めた数字のうち、上段・中段・下段のいずれかで横か斜めが揃えば'大当たり'のアラート
//  それぞれ1つでも数字が異なれば'再挑戦'のアラート


// 要素の取得
let nowNum1 = document.getElementById('nowTime1');
let nowNum2 = document.getElementById('nowTime2');
let nowNum3 = document.getElementById('nowTime3');
let nowNumUp1 = document.getElementById('nowTime4');
let nowNumUp2 = document.getElementById('nowTime5');
let nowNumUp3 = document.getElementById('nowTime6');
let nowNumDw1 = document.getElementById('nowTime7');
let nowNumDw2 = document.getElementById('nowTime8');
let nowNumDw3 = document.getElementById('nowTime9');
const stopNum1 = document.getElementById('setTime1');
const stopNum2 = document.getElementById('setTime2');
const stopNum3 = document.getElementById('setTime3');
const startSlot = document.getElementById('startTimer');


// 初期の数値(グローバル変数等)設定
let timerId1; // 中段
let timerId2;
let timerId3;
let timerIdUp1; // 上段
let timerIdUp2;
let timerIdUp3;
let timerIdDw1; // 下段
let timerIdDw2
let timerIdDw3;
let slotValue1 = 0; // 中段スロットの初期値
let slotValue2 = 0;
let slotValue3 = 0;
let slotValueUp1 = 9; // 上段スロットの初期値
let slotValueUp2 = 9;
let slotValueUp3 = 9;
let slotValueDw1 = 1; // 下段スロットの初期値
let slotValueDw2 = 1;
let slotValueDw3 = 1;
nowNum1.textContent = slotValue1; // 中段のスロット停止時に表示される値
nowNum2.textContent = slotValue2;
nowNum3.textContent = slotValue3;
nowNumUp1.textContent = slotValueUp1; // 上段のスロット停止時に表示される値
nowNumUp2.textContent = slotValueUp2;
nowNumUp3.textContent = slotValueUp3;
nowNumDw1.textContent = slotValueDw1; // 下段のスロット停止時に表示される値
nowNumDw2.textContent = slotValueDw2;
nowNumDw3.textContent = slotValueDw3;


// スタートボタンを押してスロットを回す
startSlot.addEventListener('click', function () {
    timerId1 = setInterval(countUp1, 100); // 中段(0.1秒周期でカウントアップさせる)
    timerId2 = setInterval(countUp2, 100); // 中段
    timerId3 = setInterval(countUp3, 100); // 中段
    timerIdUp1 = setInterval(countUpUp1, 100); // 上段(0.1秒周期でカウントアップさせる)
    timerIdUp2 = setInterval(countUpUp2, 100); // 上段
    timerIdUp3 = setInterval(countUpUp3, 100); // 上段
    timerIdDw1 = setInterval(countUpDw1, 100); // 下段(0.1秒周期でカウントアップさせる)
    timerIdDw2 = setInterval(countUpDw2, 100); // 下段
    timerIdDw3 = setInterval(countUpDw3, 100); // 下段
    stopNum1.disabled = false;　// ストップボタンを有効にする(押せるようにする)
    stopNum2.disabled = false;
    stopNum3.disabled = false;
    stopClickNum = 0;
});

// 9になるまでカウントアップしていき、9になったら0へ戻る
const countUp1 = function () {
    if (slotValue1 < 9) {
        slotValue1 += 1;
    } else {
        slotValue1 = 0;
    }                      　//ここまでが決めた条件下での動作
    nowNum1.textContent = slotValue1;   //ここでブラウザに表示させる
};

const countUp2 = function () {
    if (slotValue2 < 9) {
        slotValue2 += 1;
    } else {
        slotValue2 = 0;
    }                       //ここまでが決めた条件下での動作
    nowNum2.textContent = slotValue2;   //ここでブラウザに表示させる
};

const countUp3 = function () {
    if (slotValue3 < 9) {
        slotValue3 += 1;
    } else {
        slotValue3 = 0;
    }                       //ここまでが決めた条件下での動作
    nowNum3.textContent = slotValue3;   //ここでブラウザに表示させる
};

const countUpUp1 = function () {
    if (slotValueUp1 < 9) {
        slotValueUp1 += 1;
    } else {
        slotValueUp1 = 0;
    }                      　//ここまでが決めた条件下での動作
    nowNumUp1.textContent = slotValueUp1;   //ここでブラウザに表示させる
};

const countUpUp2 = function () {
    if (slotValueUp2 < 9) {
        slotValueUp2 += 1;
    } else {
        slotValueUp2 = 0;
    }                      　//ここまでが決めた条件下での動作
    nowNumUp2.textContent = slotValueUp2;   //ここでブラウザに表示させる
};

const countUpUp3 = function () {
    if (slotValueUp3 < 9) {
        slotValueUp3 += 1;
    } else {
        slotValueUp3 = 0;
    }                      　//ここまでが決めた条件下での動作
    nowNumUp3.textContent = slotValueUp3;   //ここでブラウザに表示させる
};

const countUpDw1 = function () {
    if (slotValueDw1 < 9) {
        slotValueDw1 += 1;
    } else {
        slotValueDw1 = 0;
    }                      　//ここまでが決めた条件下での動作
    nowNumDw1.textContent = slotValueDw1;   //ここでブラウザに表示させる
};

const countUpDw2 = function () {
    if (slotValueDw2 < 9) {
        slotValueDw2 += 1;
    } else {
        slotValueDw2 = 0;
    }                      　//ここまでが決めた条件下での動作
    nowNumDw2.textContent = slotValueDw2;   //ここでブラウザに表示させる
};

const countUpDw3 = function () {
    if (slotValueDw3 < 9) {
        slotValueDw3 += 1;
    } else {
        slotValueDw3 = 0;
    }                      　//ここまでが決めた条件下での動作
    nowNumDw3.textContent = slotValueDw3;   //ここでブラウザに表示させる
};

// ストップボタンを押した回数の定義
let stopClickNum = 0;

// ストップボタンで停止させる
// 押されたストップボタンの無効化
// ストップボタンが3回目に押されたら数字が揃ったか否かをアラートで表示する
stopNum1.addEventListener('click', function () {
    clearInterval(timerId1);　// 中段カウントアップを停止させる
    clearInterval(timerIdUp1);　// 上段カウントアップを停止させる
    clearInterval(timerIdDw1);　// 下段カウントアップを停止させる
    stopNum1.disabled = true;　// 押されたストップボタンを無効にする(押せないようにする)
    stopClickNum += 1;
    if (stopClickNum === 3) {　// ストップボタンが3回目に押された時の条件
        if (slotValue1 === slotValue2 && slotValue1 === slotValue3) {
            alert('大当たり!');
        } else if (slotValueUp1 === slotValueUp2 && slotValueUp1 === slotValueUp3) {
            alert('大当たり!');
        } else if (slotValueDw1 === slotValueDw2 && slotValueDw1 === slotValueDw3) {
            alert('大当たり!');
        } else if (slotValueUp1 === slotValue2 && slotValueUp1 === slotValueDw3) {
            alert('大当たり!');
        } else if (slotValueUp3 === slotValue2 && slotValueUp3 === slotValueDw1) {
            alert('大当たり!');
        } else {
            alert('再挑戦');
        }
    };
});

stopNum2.addEventListener('click', function () {
    clearInterval(timerId2);　// カウントアップを停止させる
    clearInterval(timerIdUp2);　// カウントアップを停止させる
    clearInterval(timerIdDw2);　// カウントアップを停止させる
    stopNum2.disabled = true;　// 押されたストップボタンを無効にする(押せないようにする)
    stopClickNum += 1;
    if (stopClickNum === 3) {　// ストップボタンが3回目に押された時の条件
        if (slotValue1 === slotValue2 && slotValue1 === slotValue3) {
            alert('大当たり!');
        } else if (slotValueUp1 === slotValueUp2 && slotValueUp1 === slotValueUp3) {
            alert('大当たり!');
        } else if (slotValueDw1 === slotValueDw2 && slotValueDw1 === slotValueDw3) {
            alert('大当たり!');
        } else if (slotValueUp1 === slotValue2 && slotValueUp1 === slotValueDw3) {
            alert('大当たり!');
        } else if (slotValueUp3 === slotValue2 && slotValueUp3 === slotValueDw1) {
            alert('大当たり!');
        } else {
            alert('再挑戦');
        }
    };
});

stopNum3.addEventListener('click', function () {
    clearInterval(timerId3);　// カウントアップを停止させる
    clearInterval(timerIdUp3);　// カウントアップを停止させる
    clearInterval(timerIdDw3);　// カウントアップを停止させる
    stopNum3.disabled = true;　// 押されたストップボタンを無効にする(押せないようにする)
    stopClickNum += 1;
    if (stopClickNum === 3) {　// ストップボタンが3回目に押された時の条件
        if (slotValue1 === slotValue2 && slotValue1 === slotValue3) {
            alert('大当たり!');
        } else if (slotValueUp1 === slotValueUp2 && slotValueUp1 === slotValueUp3) {
            alert('大当たり!');
        } else if (slotValueDw1 === slotValueDw2 && slotValueDw1 === slotValueDw3) {
            alert('大当たり!');
        } else if (slotValueUp1 === slotValue2 && slotValueUp1 === slotValueDw3) {
            alert('大当たり!');
        } else if (slotValueUp3 === slotValue2 && slotValueUp3 === slotValueDw1) {
            alert('大当たり!');
        } else {
            alert('再挑戦');
        }
    };
});


