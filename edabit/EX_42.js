/*

Index Multiplier
Return the sum of all items in an array, where each item is multiplied by its index (zero-based). 
For empty arrays, return 0.

Examples
indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

indexMultiplier([-3, 0, 8, -6]) ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)
Notes
All items in the array will be integers.

*/

const indexMultiplier = (arr) => {
    if(arr.length === 0) {
        return 0;
    } else {
        let indexArr = [];
        for(let i = 0; i < arr.length; i++) {
            indexArr.push(i * arr[i]);
        }
        return indexArr;
    }
    
};
// T.C. O(n)

indexMultiplier([1, 2, 3, 4, 5]);

indexMultiplier([-3, 0, 8, -6]);