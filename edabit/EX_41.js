/*
For this challenge, forget how to add two numbers together. 
The best explanation on what to do for this function is this meme:

Alternative Text

Examples
memeSum(26, 39) ➞ 515
// 2+3 = 5, 6+9 = 15
// 26 + 39 = 515

memeSum(122, 81) ➞ 1103
// 1+0 = 1, 2+8 = 10, 2+1 = 3
// 122 + 81 = 1103

memeSum(1222, 30277) ➞ 31499
Notes
N/A
*/

//T.C- O(n);


const splitDigits = (n) => {
    let arr = [];
    while (n > 1) {
        arr.unshift(n % 10);
        n = Math.floor( n / 10);
    }
    return arr;
};



const memeSum = (x, y) => {
    let num1 = splitDigits(x);
    let num2 = splitDigits(y);
    let length;
    if (num1.length > num2.length) {
        num2.unshift(0);
        length = num1.length;
    } else 
    if (num2.length > num1.length) {
        num1.unshift(0);
        length = num2.length;
    } else 
    if (num1.length === num2.length) {
      length = num1.length;
    }
    let arr = [];
    let sum1 = 0;
    let sum= 0;

    for (let i = 0; i < length; i++) {
        sum1 = num1[i] + num2[i];
        arr.push(sum1.toString());
        sum1 = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return parseInt(sum);
};

memeSum(26, 39);

memeSum(122, 81);

memeSum(1222, 30277);