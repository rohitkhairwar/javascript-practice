/*
Disarium Number
A number is said to be Disarium if the sum of its digits
raised to their respective positions is the number itself.

Create a function that determines whether a number is a Disarium or not.

Examples
isDisarium(75) ➞ false
// 7^1 + 5^2 = 7 + 25 = 32

isDisarium(135) ➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

isDisarium(518) ➞ false

isDisarium(518) ➞ true

isDisarium(544) ➞ false

isDisarium(8) ➞ true

isDisarium(466) ➞ false
Notes
Position of the digit is 1-indexed.
A recursive version of this challenge can be found via this link.

*/

// T.C. - O(n ^ 2)

const sepDigits = (n) => {
    let arr = [];
    while (n > 1) {
        arr.unshift(n % 10);
        n = Math.floor(n / 10);
    }
    return arr;
};

const sumDigits = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], (i + 1));
    }
    return sum;
};

const isDisarium = (n) => {
    let num = sepDigits(n);
    let sum = sumDigits(num);
    if (sum === n) {
        return true;
    } else 
    return false;
};

isDisarium(75);

isDisarium(135);

isDisarium(518);

isDisarium(518);

isDisarium(544);

isDisarium(8); 

isDisarium(466);