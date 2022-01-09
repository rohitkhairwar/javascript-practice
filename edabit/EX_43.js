/*
Maximize the First Number
Write a function that makes the first number as large as 
possible by swapping out its digits for digits in the second number.

To illustrate:

maxPossible(9328, 456) ➞ 9658
// 9658 is the largest possible number built from swaps from 456.
// 3 replaced with 6 and 2 replaced with 5.
Examples
maxPossible(523, 76) ➞ 763

maxPossible(9132, 5564) ➞ 9655

maxPossible(8732, 91255) ➞ 9755
Notes
Each digit in the second number can only be used once.
Zero to all digits in the second number may be used.

*/

//T.C. - 

const splitDigits = (x) => {
    let arr = [];
    while (x >= 1) {
        arr.push(x % 10);
        x = Math.floor( x / 10);
    }
    return arr;
}

const maxPossible = (x, y) => {
    let mainArr = splitDigits(x);
    let length = mainArr.length;
    let secondArr = splitDigits(y);
    for (let i = 0; i < secondArr.length; i++) {
        mainArr.push(secondArr[i]);
    }
    mainArr = mainArr.sort(function(a, b) { return b - a});
    let subArr = [];
    let sum = 0;
    for (let i = 0; i < length; i++) {
        subArr.push(mainArr[i].toString());
    }
    for (let i = 0; i < subArr.length; i++) {
        sum += subArr[i];
    }
    return parseInt(sum);
};


maxPossible(9328, 456);

maxPossible(523, 76);

maxPossible(9132, 5564);

maxPossible(8732, 91255);