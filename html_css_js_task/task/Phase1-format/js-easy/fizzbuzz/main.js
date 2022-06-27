// 1~20まで
i = 1;
i < 21;
i++;
console.log(i);

// 3の倍数=Fizz
// 5の倍数=Buzz
// 3と5の公倍数=FizzBuzz
//　それ以外=その数字
for (i = 1; i < 21; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}