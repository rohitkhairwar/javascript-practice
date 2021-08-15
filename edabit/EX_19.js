/*
Happy Numbers
Given any number, we can create a new number by adding the sums of squares of digits of that number.
 For example, given 203, our new number is 4 + 0 + 9 = 13. If we repeat this process, we get a sequence of numbers:

203 -> 13 -> 10 -> 1 -> 1
Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.

Not all numbers are happy. If we started with 11, the sequence would be:

11 -> 2 -> 4 -> 16 -> ...
This sequence will never reach 1, and so the number 11 is called unhappy.

Given a positive whole number, you have to determine whether that number is happy or unhappy.

Examples
happy(203) ➞ true

happy(11) ➞ false

happy(107) ➞ false
Notes
You can assume (and it is actually true!) that all positive whole numbers are either happy or unhappy. 
Any happy number will have a 1 in its sequence, and every unhappy number will have a 4 in its sequence.
The only numbers passed to your function will be positive whole numbers.
*/

// function happy(num) {
//     let  sum = 0;
//     let result=false;
//     for (const elem of num.toString().split("")) {
//         sum = sum + elem*elem;        
//     }   
// ​
//     if (sum == 1){
//         result = true;
//     } else if (sum == 4){
//         result = false;
//     } else {
//         result = happy(sum);
//     }
//     return result;
  
// };

function sepNum (num) {
    let sepArr = [];
    while (num > 0) {
        sepArr.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    return sepArr;
}; // runs x *n number of times depending on no.of digits in num

function addSepNumDigits (arr) {
    let addNum = 0;
    for(let i = 0; i < arr.length; i++) {
        addNum += Math.pow(arr[i], 2);
    }
    return addNum;
} // runs k * n number of times depending on arr length;

const happy = (num) => {
    let sum = 0;
        while(addSepNumDigits(sepNum(num)) !== 4) {
            sum = addSepNumDigits(sepNum(num));
            num = sum;
            if(num === 1) {
                return true;
            }
        }
        return false;
} // runs k * n + x * n number of times depending on the times it takes to return either 1 or 4
  // which means the function runs z * n number of times which means
  // time complexity of function happy is O(z * n) === O(n)
  
happy(203);

happy(11);

happy(107);