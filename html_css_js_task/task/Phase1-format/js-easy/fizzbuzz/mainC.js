let v = 0;
const rewriteNum = document.getElementById('rewriteNum');
rewriteNum.innerHTML = v;

const rewriteCntUp = function () {
    v = v + 1;
    console.log(v);
    if (v % 3 === 0 && v % 5 === 0) {
        rewriteNum.innerHTML = 'fizzbuzz';
    } else if (v % 3 === 0) {
        rewriteNum.innerHTML = 'fizz';
    } else if (v % 5 === 0) {
        rewriteNum.innerHTML = 'buzz';
    } else {
        rewriteNum.innerHTML = v;
    }
};