/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd
 Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1.
 Every additional number in the sequence is the sum of the two previous numbers. 
 The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd 
Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/


function oddFibs(num) {
    let a = 0; 
    let b = 1;
    let c = 0;
    let fibsArr = [0, 1];
    for (let i = 0; c < num; i++) {
        c = a + b;
        a = b;
        b = c;
        fibsArr.push(c);
    }
    let oddFibsArr = fibsArr.filter(item => item % 2 === 1 && item <= num);
    return oddFibsArr;
}

function sumFibs(num) {
  if (num >= 3) {
      let oddFibsArray = oddFibs(num);
    let sumFibs = oddFibsArray.reduce((acc, curval) => acc + curval);
    return sumFibs;
  }
    return 1;
  }
  
  sumFibs(4);
  sumFibs(75024);
  sumFibs(75025);
  sumFibs(75026);
  sumFibs(1);