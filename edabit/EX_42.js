/*
*** VERY HARD ***

Crack the Code
This is a reverse-coding challenge. Create a function that outputs the 
correct array from the input. Use the following examples to crack the code.

Examples
decode("hello") ➞ [5, 2, 9, 9, 3]

decode("wonderful") ➞ [11, 3, 2, 1, 2, 6, 3, 9, 9]

decode("something challenging") ➞ 
[7, 3, 10, 2, 8, 5, 6, 2, 4, 5, 18, 5, 16, 9, 9, 2, 2, 4, 6, 2, 4]
Notes
Check Comments if you're stuck.

*/

// T.C. - O(n)

const charCode = (string) => {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        arr.push(string.charCodeAt(i));
    }
    return arr;
};

const sumOfCharCodes = (num) => {
    let sum = 0;
    while (num >= 1) {
        sum += (num % 10);
        num = Math.floor(num / 10);
    }
    return sum;
}

const decode = (string) => {
    let charCodesArr = charCode(string);
    let decodedArr = [];
    for (let i = 0; i < charCodesArr.length; i++) {
        decodedArr.push(sumOfCharCodes(charCodesArr[i]));
    }
    return decodedArr;
};


decode("hello");

decode("wonderful");

decode("something challenging");