//[フローチャート]
//JSでタグを生成していく
//更新またはセットボタンでその度数字をランダムに生成
//B列には1~15、I列には16~30、N列には31~45、G列には46~60、O列には61~75が入る
//数字はそれぞれ重複しない
//真ん中は free に固定


const view = document.getElementById('view');
const setBtn = document.getElementById('hitNum');

// 列ごとに重複しないランダムな数値を取得
// グローバル変数として定義して配列の中身が毎回更新されるようにする(数字が常に追加される状態)
let array = [];
/**
 * @param {number} col 
 * @description td tdのテキストコンテント
 */
let make_column = (col, td) => {
    let number;
    if (col === 0) {
        while (true) { // 無限ループを作る
            number = Math.floor(Math.random() * 15) + 1; // *(最大値+1 - 最小値) + 最小値
            if (array.includes(number) === false) { //含まれていない時
                array.push(number); // 配列に組み込む
                td.textContent = number;
                break; // ループ処理を終わらせる
            }
        }

    } else if (col === 1) {
        while (true) { // 無限ループを作る
            number = Math.floor(Math.random() * 15) + 16; // *(最大値+1 - 最小値) + 最小値
            if (array.includes(number) === false) { //含まれていない時
                array.push(number); // 配列に組み込む
                td.textContent = number;
                break; // ループ処理を終わらせる
            }
        }
    } else if (col === 2) {
        while (true) { // 無限ループを作る
            number = Math.floor(Math.random() * 15) + 31; // *(最大値+1 - 最小値) + 最小値
            if (array.includes(number) === false) { //含まれていない時
                array.push(number); // 配列に組み込む
                td.textContent = number;
                break; // ループ処理を終わらせる
            }
        }
    } else if (col === 3) {
        while (true) { // 無限ループを作る
            number = Math.floor(Math.random() * 15) + 46; // *(最大値+1 - 最小値) + 最小値
            if (array.includes(number) === false) { //含まれていない時
                array.push(number); // 配列に組み込む
                td.textContent = number;
                break; // ループ処理を終わらせる
            }
        }
    } else if (col === 4) {
        while (true) { // 無限ループを作る
            number = Math.floor(Math.random() * 15) + 61; // *(最大値+1 - 最小値) + 最小値
            if (array.includes(number) === false) { //含まれていない時
                array.push(number); // 配列に組み込む
                td.textContent = number;
                break; // ループ処理を終わらせる
            }
        }
    }
};

// BINGO列(1列目)
const row1 = document.createElement('tr');
const b = document.createElement('td');
b.textContent = 'B';
row1.appendChild(b);

const i = document.createElement('td');
i.textContent = 'I';
row1.appendChild(i);

const n = document.createElement('td');
n.textContent = 'N';
row1.appendChild(n);

const g = document.createElement('td');
g.textContent = 'G';
row1.appendChild(g);

const o = document.createElement('td');
o.textContent = 'O';
row1.appendChild(o);
view.appendChild(row1); // HTMLタグ(view)を使わないと表示されない

// rowが行(横)、colは列(縦)
// colが0~5の5つあり、その数分tdタグを生成
// 2行目
const row2 = document.createElement('tr');
function createRow2() {
    for (let col = 0; col < 5; col++) { // 5回分までマスを作成
        let td2 = document.createElement('td');
        make_column(col, td2); // 関数呼び出し(数値とタグ)
        row2.appendChild(td2);
    }
}
createRow2(); // 関数呼び出し
view.appendChild(row2);// HTMLタグ(view)を使わないと表示されない

// 3行目
const row3 = document.createElement('tr');
function createRow3() {
    for (let col = 0; col < 5; col++) {
        let td3 = document.createElement('td');
        row3.appendChild(td3);
        make_column(col, td3); // 関数呼び出し(数値とタグ)
    }
}
createRow3();
view.appendChild(row3);

// 4行目
const row4 = document.createElement('tr');
function createRow4() {
    for (let col = 0; col < 5; col++) {
        let td4 = document.createElement('td');
        row4.appendChild(td4);
        make_column(col, td4); // 関数呼び出し(数値とタグ)
        if (col === 2) { // 3列目の時にfreeにする
            td4.textContent = 'free';
        }
    }
}
createRow4();
view.appendChild(row4);

// 5行目
const row5 = document.createElement('tr');
function createRow5() {
    for (let col = 0; col < 5; col++) {
        let td5 = document.createElement('td');
        row5.appendChild(td5);
        make_column(col, td5); // 関数呼び出し(数値とタグ)
    }
}
createRow5();
view.appendChild(row5);

// 6行目
const row6 = document.createElement('tr');
function createRow6() {
    for (let col = 0; col < 5; col++) {
        let td6 = document.createElement('td');
        row6.appendChild(td6);
        make_column(col, td6); // 関数呼び出し(数値とタグ)
    }
}
createRow6();
view.appendChild(row6);

// 「セットボタン」でランダムな数値を生成(1~75)
// その数がビンゴシートにあればcssを変える
setBtn.addEventListener('click', () => {
    let setNum = Math.floor(Math.random() * 75) + 1;
    // setNumのtdタグを取得する
    // BINGO以外の全てのtdタグを取得する
    const tds = document.querySelectorAll('td'); // [td,td,td・・・]
    // 全tdタグの中身を一つずつ参照していく
    tds.forEach(function (item) {

    })
    console.log(tds);
    // setNumとtdタグのテキストコンテントと比較する
    // 同じものを所得する
    alert(`数字は${setNum}番です`);
})