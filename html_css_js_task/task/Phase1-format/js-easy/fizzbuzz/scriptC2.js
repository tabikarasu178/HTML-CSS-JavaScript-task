let n = 0;
const showNum = document.getElementById('showNum');
showNum.innerHTML = n;

const fizzBtn = () => {
    n += 1;
    if (n % 3 === 0) {
        showNum.innerHTML = 'fizz';
    } else {
        alert('違います');
        location.reload();
    }
};

const buzzBtn = () => {
    n += 1;
    if (n % 5 === 0) {
        showNum.innerHTML = 'buzz';
    } else {
        alert('違います');
        location.reload();
    }
};

const fizzbuzzBtn = () => {
    n += 1;
    if (n % 3 === 0 && n % 5 === 0) {
        showNum.innerHTML = 'fizzbuzz';
    } else {
        alert('違います');
        location.reload();
    }
};

const numBtn = () => {
    n += 1;
    if (n % 3 === 0 || n % 5 === 0) {
        alert('違います');
        location.reload();
    }
    showNum.innerHTML = n;
};