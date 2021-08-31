/*
Integer Digits Count
Create a function that counts the integer's number of digits.

Examples
count(318) ➞ 3
 
count(-92563) ➞ 5
 
count(4666) ➞ 4

count(-314890) ➞ 6

count(654321) ➞ 6

count(638476) ➞ 6
Notes
For an added challenge, try to solve this without using strings.
Alternatively, you can solve this via a recursive approach.
A reversion of this challenge can be found via this link.
*/

 const count = (number) => {
     let num;
     if(number < 0) {
        num = number * (-1)
     } else 
     num = number;
    let n = 0;
    while (num > 1) {
        n += 1;
        num = Math.floor(num / 10);
     }
    return n;
 };
 //T.C. = O(n)

count(318) 
 
count(-92563) 
 
count(4666) 

count(-314890) 

count(654321)

count(638476) 