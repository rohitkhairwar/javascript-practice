/*
Square Every Digit
Create a function that squares every digit of a number.

Examples
squareDigits(9119) ➞ 811181

squareDigits(2483) ➞ 416649

squareDigits(3212) ➞ 9414
Notes
The function receives an integer and must return an integer.
*/

const squareDigits = (number) => {
    let numArr = [];
    let numSqrArr = [];
    let tempNum = 0;
    while (number > 1) {
        numArr.unshift(number % 10);
        number = Math.floor(number / 10);
    }
    for(let i = 0; i < numArr.length; i++) {
        tempNum = Math.pow(numArr[i], 2);
        numSqrArr.push(tempNum.toString());
        tempNum = 0;
    }
    for(let i = 0; i < numSqrArr.length; i++) {
        tempNum += numSqrArr[i];
    }
    tempNum = parseInt(tempNum);
    return tempNum;
};
//T.C. = O(n)

squareDigits(9119) 

squareDigits(2483) 

squareDigits(3212) 