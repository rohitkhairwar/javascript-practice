/*
Untouchable Numbers
A positive number greater than 1 can be defined untouchable when it's not equal to the sum of the proper divisors 
(called also aliquot sum) of any other positive number, in a range starting from 2 and ending with the 
square of the given number (bounds included).

Given an integer number, implement a function that returns:

true if the given number is untouchable.
An array containing the numbers whose proper divisors sum is equal to the number, if the given number is not untouchable.
A string "Invalid Input" if the given number is lower than 2.
Examples
isUntouchable(2) ➞ true
// Range: 2 to 4
// 2 = 1  |  3 = 1  |  4 = 1+2 = 3
// No sum is equal to the given number

isUntouchable(3) ➞ [4]
// Range: 2 to 9
// As in the example above, 4 = 1+2 = 3

isUntouchable(6) ➞ [6, 25]
// Range: 2 to 36
// 6 = 1+2+3 = 6  |  25 = 1+5 = 6

isUntouchable(1) ➞ "Invalid Input"
// The given number is lower than 2
Notes
The proper divisors of a number are, merely, all its divisors less the number itself.
More than a number can have a proper divisors sum equal to the given number, with given number included 
(see example #3).
Trivia: As far as we know, numbers 2 and 5 are the only two primes present in the sequence,
 with 5 being the only odd number present; by the way, these two assertions are still unproofed.

*/

// function isUntouchable(number) {
//     if(number <= 1) return "Invalid Input"
//     let res = []
//     let hasta = number ** 2
//     for (let i = 2; i <= hasta; i++){
//         let count = 0
//         for(let j = 0; j < i; j++){
//             if(i % j === 0){
//                 count += j
//             }
//         }
//         if(count === number){
//             res.push(i)
//         }
//     }
//     return res.length === 0 ? true : res
// };

const divisorsOfNum = (num) => {
    let divisorsArr = [];
    for(let i = 1; i < num; i++) {
        if(num % i === 0) {
            divisorsArr.push(i);
        }
    }
    return divisorsArr;
}; // runs x * n times where x is constant and n depends on num input.

const sumOfArrelements = (arr) => {
    let sum = 0; 
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}; // runs y * n times where y is const & n depends on arr.length 
const isUntouchable = (num) => {
    let numArr = [];
    let touchableArr = [];
    let divisorsOfEachNumInRange;
    if (num <= 1) {
        return "Invalid Input";
    };
    for(let i = num; i <= (num * num); i++) {
        numArr.push(i);
    }; // runs z * n times where z is constant & n depends on num input
    for(let i = 0; i < numArr.length; i++) {
        divisorsOfEachNumInRange = divisorsOfNum(numArr[i]);
        if (sumOfArrelements(divisorsOfEachNumInRange) === num) {
            touchableArr.push(numArr[i]);
        } // runs ((x * n) + (y * n)) * (z * n) times where z is const & n depends on numArr.length
        divisorsOfEachNumInRange = [];
    }

    if(touchableArr.length === 0) {
        return true;
    } else {
        return touchableArr;
    }
}; // runs (x + y) * z * n2 times 
   // therefore time complexity is O(n2) or O(n square).

isUntouchable(1);

isUntouchable(3);

isUntouchable(6);

isUntouchable(1);