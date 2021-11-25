/*
Meme Sum :)
For this challenge, forget how to add two numbers together. 

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

//T.C. - O(n^2);

function splitNum (x) {
    let arr = [];
    while (x >= 1) {
        arr.unshift( x % 10);
        x = Math.floor( x / 10);
    }
    return arr;
};


const memeSum = (a, b) => {
    let firstNumArr = splitNum(a);
    let secondNumArr = splitNum(b);
    let length;
    let finalNumArr = [];
    let finalNum = 0;
    if (firstNumArr.length > secondNumArr.length) {
        secondNumArr.unshift(0);
        length = firstNumArr.length;
    } else if (secondNumArr.length > firstNumArr.length) {
        firstNumArr.unshift(0);
        length = secondNumArr.length;
    } else {
        length = firstNumArr.length;
    };

    for(let i = 0; i < length; i++) {
        finalNumArr.push((firstNumArr[i] + secondNumArr[i]).toString());
    }
    for(let i = 0; i < finalNumArr.length; i++) {
        finalNum += finalNumArr[i];
    }
    return parseInt(finalNum);   
};

memeSum(26, 39);

memeSum(122, 81);

memeSum(1222, 30277);