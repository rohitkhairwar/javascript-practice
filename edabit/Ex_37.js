/*
***HARD LEVEL EXERCISE***

Simple Counting
Mubashir needs your help to count a specific digit in an array.

You have to create a function that takes two integers n and d and makes an array of squares of all numbers from
 0...<= n and returns the count of the digits d in the array.

Examples
countDigits(10, 1) ➞ 4
// Squared array from 0 to 10 = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// Digit 1 appeared 4 times in the array

countDigits(25, 2) ➞ 9

countDigits(10, 1) ➞ 4
Notes
d will always be 0<=d<10.


*/

//T.C. - O(n^3)

const squaredArray = (n) => {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(Math.pow(i, 2));
    }
    return arr;
};

const splitDigits = (arr) => {
    let digitsArr = [];
    let randomNum;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0 && arr[i] < 10) {
            digitsArr.push(arr[i]);
        } else 
        if (arr[i] >= 10) {
            randomNum = arr[i].toString();
            for(let j = 0; j < randomNum.length; j++) {
              digitsArr.push(parseInt(randomNum[j]));
            }
            randomNum = "";
        } 
    }
    return digitsArr;
};

const countDigits = (n, d) => {
    let squaredArr = squaredArray(n);
    let sepArr = splitDigits(squaredArr);
    let count = 0;
    for (let i = 0; i < sepArr.length; i++) {
        if (d == sepArr[i]) {
            count++;
        }
    }
    return count;
};

countDigits(10, 1);

countDigits(25, 2); 

countDigits(10, 1);