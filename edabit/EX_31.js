/*
Sum of Missing Numbers
Create a function that returns the sum of missing numbers.

Examples
sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29
// 2 + 4 + 6 + 8 + 9

sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29

sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575
Notes
The minimum and maximum value of the given array are the inclusive bounds
 of the numeric range to consider when searching for missing numbers.
*/


//T.C. = O(n)

const sumMissingNumbers = (arr) => {
    let paraArr = arr.sort((a, b) => a - b)
    let sum = 0;
    for(let i = paraArr[0]; i <= paraArr[paraArr.length - 1]; i++) {
            if (paraArr.indexOf(i) === -1) {
                sum += i;
        }
    }
    return sum;
};


sumMissingNumbers([1, 3, 5, 7, 10]); 

sumMissingNumbers([10, 7, 5, 3, 1]); 

sumMissingNumbers([10, 20, 30, 40, 50, 60]);