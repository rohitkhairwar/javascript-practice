/*
Smallest Common Multiple
Find the smallest common multiple of the provided parameters
 that can be evenly divided by both, as well as by all sequential numbers 
 in the range between these parameters.

The range will be an array of two numbers that will not necessarily be
 in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both
 1 and 3 that is also evenly divisible by all numbers between 1 and 3. 
 The answer here would be 6.
*/

function smallestCommons(arr) {
    let a = 0;
    let b = arr.sort(function(a, b) {return a - b});
    let c = [];
    let d = 0;
    let e = 0;
    for (let i = b[0]; i <= b[1]; i++) {
        c.push(i);
    }
    for (let i = 1; i > 0; i++) {
        for (let j = 0; j < c.length; j++) {
            if (i % c[j] === 0) {
                d += 1;
            }
        }
        if (d === c.length) {
            e = i;
            break;
        }
        d = 0;
    }
    return e;
  }
  
  
  smallestCommons([23, 18]);