// [フローチャート]
// 現在の日時の取得
// 未来の特定の日時を設定する
// その日にまでにかかる時間を画面上に表示する
//　→「年・日・時・分・秒」単位で、1秒ずつカウントダウンしていく


// オブジェクト取得
let counter = document.getElementsByClassName('counter')[0]; // 複数なので配列指定

// ドラえもんの誕生日
let doraBirthday = moment('2112-09-03 00:00:00');

// 1秒ごとに減っていく関数を作成[setInterval(関数,秒数)]
// 年・日・時・分・秒で出力
let timer;
timer = setInterval(function () {
    let today = moment();  // 現在の時刻の取得
    let diff = doraBirthday - today; // 両者の差分
    const duration = moment.duration(diff); // ミリ秒からdurationオブジェクトを生成(↓のような表記に必要)
    // 年・日・時・分・秒を取得(間隔)
    const years = duration.years();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    counter.textContent = (`${years}年${days}日${hours}時間${minutes}分${seconds}秒`); // 画面上に表示
}, 1000);

const countDown = () => {
    if (diff === 0) {
        alert('誕生日おめでとう！');
    }
};


