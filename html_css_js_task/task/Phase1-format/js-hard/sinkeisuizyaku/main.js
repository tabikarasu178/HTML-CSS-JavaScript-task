//[フローチャート]
//カードを8枚生成(1~4の数字が各2枚ずつ)
//配列は毎回ランダム
//2枚のカードをクリック
//数字が一致したら画面から削除/一致しなければ裏返す
//削除/裏返しの実行は 2枚目をクリックしてから 0.5 秒後
//全て揃い終わったら「終了です」のアラート


// グローバル変数

// div要素を格納
let cards = [];
// カードの数字(１～４)
let number;
// カードめくり用 タイマー
let backTimer;
// 1枚目かどうかのフラグ   1枚目: true   2枚目: false
let flgFirst = true;
// 1枚目のカードを格納
let cardFirst;
// 揃えた枚数
let countUnit = 0;

// 初期設定
// HTMLを操作するときに利用するイベントハンドラー
window.onload = () => {
    let array = [];
    for (let numPair = 0; numPair < 4; numPair++) { // 数字のペアを4組(8枚)生成
        number = Math.floor(Math.random() * 4) + 1;
        array.push(numPair);
        array.push(numPair);
    }
    // カードの並びをシャッフルする関数の呼び出し
    shuffle(array);

    const panel = document.getElementById('panel');

    // 8枚分のdivタグを生成(カードの裏面)
    for (let cardNum = 0; cardNum < 8; cardNum++) {
        const div = document.createElement('div');
        div.className = 'card back';
        div.index = cardNum;
        div.number = array[cardNum];
        div.innerHTML = '';
        div.onclick = turn;
        panel.appendChild(div);
        cards.push(div);
        console.log(div)
    }
}

// カードシャッフル関数
function shuffle(array) {
    let n = array.length;
    let temp, i;
    while (n) {
        i = Math.floor(Math.random() * n--);
        temp = array[n];
        array[n] = array[i]
        array[i] = temp;
    }
    return array;
}

// クリック時の処理
function turn(e) {
    let div = e.target;
    if (div.innerHTML === '') { // 裏向きのカードをクリックした場合は数字を表示する
        div.className = 'card';
        div.innerHTML = div.number;
    } else {
        return;
    }
    if (flgFirst) { // 1枚目の処理
        cardFirst = div;
        flgFirst = false;
    } else { // 2枚目の処理
        if (cardFirst.number === div.number) { // 数字が1枚目と一致する場合
            countUnit++
            backTimer = setTimeout(function () { // 見えない状態にする
                div.className = 'card finish';
                cardFirst.className = 'card finish';
                backTimer = NaN;
            }, 500)
        } else { // 一致しない場合
            backTimer = setTimeout(function () { // カードを裏側に戻す
                div.className = 'card back';
                div.innerHTML = '';
                cardFirst.className = 'card back';
                cardFirst.innerHTML = '';
                cardFirst = null;
                backTimer = NaN;
            }, 500)
        }
        flgFirst = true;
        if (countUnit === 4) {
            alert('終了です');
        }
    }
}
