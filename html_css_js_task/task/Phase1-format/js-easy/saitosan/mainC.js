const word1 = '斎藤さんだぞぉぉぉぉぉ';
const word2 = 'ぺっぺっぺー';

const setBtn2 = () => {
    const foo = Math.random() * 10;
    if (foo < 5) {
        const result = window.confirm(word1);
        if (result) {
            alert(word1);
        } else {
            alert(word2);
        }
    } else {
        const result = window.confirm(word2);
        if (result) {
            alert(word2);
        } else {
            alert(word1);
        }
    }
};