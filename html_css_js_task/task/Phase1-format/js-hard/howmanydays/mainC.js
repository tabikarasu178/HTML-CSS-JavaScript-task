// [フローチャート]
// 現在の日時の取得
// カレンダーで特定の日時を設定
// その日にまでにかかる時間を画面上に表示する(YYYY-MM-DDまで○○)
//　→「年・日・時・分・秒」単位で、1秒ずつカウントダウンしていく

let dateSet = document.getElementById('dateSet');
let diffTime = document.getElementById('diffTime');
const dateSearch = document.getElementById('dateSearch');

// 「検索」ボタンクリックで下記を実行する
// 現在の日時から設定日時まで１秒ずつカウントダウンする関数
let timer;
dateSearch.addEventListener('click', function () {
    moment.locale('ja');
    let inputDate = dateSet.value; // 検索ボタンが押された時のdatesetのvalue指定(指定した日時)
    let afterDateString = moment(inputDate).format('YYYY-MM-DD'); // formatは文字列扱い
    let afterDate = moment(inputDate); // moment形式にする
    console.log(afterDateString);
    console.log(afterDate);
    timer = setInterval(function () {
        let today = moment(); // 現日時取得
        let diff = afterDate - today; // 両者の差分(文字列-momentはできないため'afterDate2'を使う)
        const duration = moment.duration(diff); // ミリ秒からdurationオブジェクトを生成(↓のような表記に必要)
        // 年・日・時・分・秒を取得(間隔)
        const years = duration.years();
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();
        diffTime.textContent = (`${afterDateString}まで後${years}年${days}日${hours}時間${minutes}分${seconds}秒`); // 画面上に表示
    }, 1000);
});

