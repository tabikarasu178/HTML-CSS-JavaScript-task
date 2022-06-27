//[フローチャート]
//CPUがそれぞれ異なる数字3桁を事前に設定
//その数字を予測し、３桁の数字をテキスト欄に記入
//「答えあわせ」ボタン入力で両者の数字を比較
//数字と桁が合っていれば「EAT」、数字は合っており桁が異なっている場合は「BITE」とアラート
// →4桁以上数値が入力された場合「3桁の数値で入力して下さい」とアラート
// →2桁以上同じ数値がある場合「3桁の数字は異なるものを入力して下さい」とアラート


//3桁の数値の配列を用意
let cpuNum = new Array(3);// [empty,empty,empty]

// CPUの3桁の数値設定
// Math.randomは0～1未満の数値→×10を行って1の位にし、Math.floorで小数点以下を切り捨て
// whileの条件の間はdoの処理を行い続ける
function digit3() {
    cpuNum[0] = Math.floor(Math.random() * 10);
    do {
        cpuNum[1] = Math.floor(Math.random() * 10);
    } while (cpuNum[0] === cpuNum[1]);
    do {
        cpuNum[2] = Math.floor(Math.random() * 10);
    } while (cpuNum[0] === cpuNum[2] || cpuNum[1] === cpuNum[2]);
};

// CPUの設定した値(関数)を呼び出す
digit3();

// 自分で入力した値
let inputNum = document.getElementById('answerNum');
console.log(inputNum.value); // .valueで値を扱える

// 下記の関数の中に入れると毎回「10－1」が行われて9にしかならない
let count = 10;
// 答え合わせボタンでEATとBITEの判定
const numCheck = document.getElementById('numCheck');
numCheck.addEventListener('click', function () {
    const remainTurn = document.getElementById('remainTurn');
    function countDown() {
        if (count >= 1) {
            count--;
            remainTurn.textContent = `後残り${count}回です`;
        } else if (count === 0) {
            remainTurn.textContent = '終了です';
            numCheck.disabled = true;
        }
    };
    // countDown関数を呼び出す
    countDown();

    if (inputNum.value.length !== 3) {
        alert('3桁の数値で入力して下さい');
        return; //下記の処理を行わない
    } if (inputNum.value[0] === inputNum.value[1] || inputNum.value[0] === inputNum.value[2] || inputNum.value[1] === inputNum.value[2]) {
        alert('3桁の数字は異なるものを入力して下さい');
        return; //下記の処理を行わない
    }

    // CPUの設定した値とプレイヤーが入力した値の照合
    let eat = 0;
    let bite = 0;
    console.log(inputNum.value, cpuNum);
    for (let i = 0; i < inputNum.value.length; i++) {
        for (let j = 0; j < cpuNum.length; j++) {
            if (parseFloat(inputNum.value[i]) === cpuNum[j]) { // 値が一緒かどうか(parseFloatで文字列を数値にする)
                if (i === j) { // 同じ桁(インデックス番号)の比較
                    eat++;
                } else {
                    bite++;
                }
            }
        }
    }
    alert(`${eat}EAT,${bite}BITE`);
    // 判定後空欄にする
    inputNum.value = '';
});

