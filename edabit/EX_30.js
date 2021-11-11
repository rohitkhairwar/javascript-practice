/*
Concatenate to Form Target Array
Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.

Examples
canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Duplicate 7s not found in target array.

canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Missing 6 from target array.
Notes
Arrays do not have to be sorted (see example #2).
Arrays should concatenate to create the final array exactly (see examples #3 and #4).

*/

// T.C. = O(n + (n * (n + 1) / 2)) = O(n + (n^2 + 1) / 2) = O(n + n^2/2 + n/2) = O(n^2)
const canConcatenate = (arr1, arr2) => {
let flatArr = arr1.flat();
let count = 0;
if (flatArr.length !== arr2.length) {
    return false;
} else {
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < flatArr.length; j++) {
            if (flatArr[i] === arr2[j]) {
                count++;
                break;
                }
            }
        }
    if (count === arr2.length) {
        return true;
        }

    }
    return false;
};

canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]);

canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]);

canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]);

canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]);
