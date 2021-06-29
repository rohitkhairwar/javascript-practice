/*
Shiny Semiprimes: Brilliant Numbers
In this challenge, you have to establish if a given number is Brilliant.
 A Brilliant number is a semiprime that can be obtained only by multiplicating
  two, and only two, different primes with the same number of digits.

A semiprime can be:

A composite number equal to the product of two different primes.
A composite number equal to the square of a prime.
Given an integer n, implement a function that returns true if n is a 
Brilliant number, or false if it's not.

Examples
isBrilliant(11) ➞ false
// 11 is a prime.

isBrilliant(9) ➞ true
// 9 is equal to the square of a prime: 3²

isBrilliant(21) ➞ true
// 21 is equal to the product of two different primes: 3 x 7
// 3 and 7 have the same digital length.

isBrilliant(22) ➞ false
// 22 is equal to the product of two different primes: 2 x 11
// 2 and 11 have different digital lengths.
Notes
The given n will be a positive integer greater than 0.
Remember that a Brilliant number is a semiprime that can be obtained 
only with a single combination of different primes having the same
 digital length.

*/


const getFactors = num => {
    const factors = [];
    let remainder = num;
  
    for (let i = 2; i <= remainder; i++) {
      while (remainder % i === 0) {
        factors.push(i);
        remainder /= i;
      }
    }
  
    return factors;
  };
  
  const isBrilliant = num => {
    const factors = getFactors(num);
    return (
      factors.length === 2 &&
      String(factors[0]).length === String(factors[1]).length
    );
  };


isBrilliant(11);

isBrilliant(9);

isBrilliant(21);

isBrilliant(22);