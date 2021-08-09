/*
Prime Gaps
A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes. 
See this Resource for more information.

The prime numbers are not regularly spaced. For example gap between:

2 and 3 is 1
3 and 5 is 2
7 and 11 is 4
Create a function with following parameters:

g (integer >= 2)
// Gap between the consecutive primes

a (integer > 2)
// Start of the search (a inclusive)

b (integer >= a)
// End of the search (b inclusive)
... and returns the first pair of two prime numbers spaced with a gap of g between the limits a and b.

primeGaps(2, 3, 50) ➞ [3, 5]

// Between 2 and 50 we have the following pairs of 2-gaps primes:
// 3-5, 5-7, 11-13, 17-19, 29-31, 41-43.

[3, 5] is the first pair between 3 and 50 with a 2-gap.
Examples
primeGaps(2, 5, 7) ➞ [5, 7]

primeGaps(2, 5, 5) ➞ null

primeGaps(4, 130, 200) ➞ [163, 167]
Notes
Return null if consecutive prime numbers are not found with the required gap.
*/

const primeGaps = (g, a, b) => {
    const sieve = () => {
      const isPrime = Array(b + 1).fill(true);
      isPrime[0] = isPrime[1] = false;
      for (let p = 2; p * p <= b; ++p) {
        if (isPrime[p]) for (let j = p * p; j <= b; j += p) isPrime[j] = false;
      }
  
      const primes = [];
      for (let i = 0; i < isPrime.length; ++i)
        isPrime[i] && i >= a && i <= b && primes.push(i);
      return primes;
    };
  
    const primes = sieve();
    for (let i = 0; i < primes.length - 1; ++i) {
      if (primes[i + 1] - primes[i] === g) return [primes[i], primes[i + 1]];
    }
  
    return null;
  };

  primeGaps(2, 5, 7); 

  primeGaps(2, 5, 5); 
  
  primeGaps(4, 130, 200);