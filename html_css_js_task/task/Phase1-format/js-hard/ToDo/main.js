// 配列
// const array = [1, 2, 3, 4, 5];
// console.log(array[0]); / 1と表示

// 文字の取得
const text = document.getElementById('addArea');
const addBtn = document.getElementsByClassName('add-btn'); //(s)複数ある(ここに[0]を付けてもよい)
const lists = document.getElementsByClassName('lists'); //(s)複数ある(ここに[0]を付けてもよい)

// 追加ボタンでリスト作成
addBtn[0].addEventListener('click', function () { //[0]でaddBtnの１つ目指

    // 空欄の時にアラート+リスト化できないようにする
    if (addArea.value === '') {
        window.alert('空欄です')
        return // このif文が実行されたら↓のコードは実行されない
    };

    // テキスト作成
    const newItem = document.createElement('li'); //'li'はHTMLのタグ
    newItem.textContent = addArea.value;
    lists[0].appendChild(newItem); //[0]でlistsの１つ目指定

    // ボタン作成
    const completeBtn = document.createElement('button'); //'button'はHTMLのタグ
    completeBtn.textContent = '完了';
    newItem.appendChild(completeBtn);

    // 追加できたらテキストを空欄にする
    addArea.value = '';

    // 完了ボタンでリスト削除
    completeBtn.addEventListener('click', function () {
        lists[0].removeChild(newItem);
    });
});


