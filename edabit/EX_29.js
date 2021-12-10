/*
Multiplying Numbers in a String
Given a string of numbers separated by a comma and space, return the product of the numbers.

Examples
multiplyNums("2, 3") ➞ 6

multiplyNums("1, 2, 3, 4") ➞ 24

multiplyNums("54, 75, 453, 0") ➞ 0

multiplyNums("10, -2") ➞ -20
Notes
Bonus: Try to complete this challenge in one line!

*/

//T.C- O(n)

const multiplyNums = (str) => {
    let arr = [];
    let product = 1;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == parseInt(str[i]) || str[i] == -parseInt(str[i])) {
            arr.push(str[i]);
        }
    }
    for(let i = 0; i < arr.length; i++) {
        product = product * arr[i];
    }

    return product;
};

multiplyNums("2, 3");

multiplyNums("1, 2, 3, 4");

multiplyNums("54, 75, 453, 0");

multiplyNums("10, -2");