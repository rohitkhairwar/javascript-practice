/*

***HARD***
Multiplication Table
Create a function that takes an integer n and returns multiplication table of 1 to n numbers up to nth multiple.

Examples
multTable(2) ➞ [
  [1, 2],
  [2, 4]
]

multTable(3) ➞ [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9]
]

multTable(5) ➞ [
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10],
  [3, 6, 9, 12, 15],
  [4, 8, 12, 16, 20],
  [5, 10, 15, 20, 25]
]
Notes
N/A

*/


//T.C. - O(n^2)

const multTable = (n) => {
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
    }
let multArr = [];
let singleArr = [];
for (let i = 0; i < arr.length; i++ ) {
        for (let j = 1; j <= arr.length; j++) {
            singleArr.push(j * arr[i]);
        }
        multArr.push(singleArr);
        singleArr = [];
    }
    return multArr;
};


multTable(2);
  
multTable(3);
  
multTable(5);