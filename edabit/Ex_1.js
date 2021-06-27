/*
Making a Box 2.0!
This is based on Helen Yu's Making a Box challenge.
 This challenge is the same execpt that instead of an array of strings,
  your function should output a matrix of characters.

Examples
charBox(1) ➞ [
  ["#"]
]

charBox(4) ➞ [
  ["#", "#", "#", "#"],
  ["#", " ", " ", "#"],
  ["#", " ", " ", "#"],
  ["#", "#", "#", "#"]
]

charBox(2) ➞ [
  ["#", "#"],
  ["#", "#"]
]
Notes
As an added bonus, try making charBox(0) output [[]] and make any strings, 
non-integers, and negative numbers output -1.

*/

const charBox = (n) => {
    let mainArr = [];
    let subArr = [];
    if (n < 0 || typeof(n) !== "number") {
        return -1;
    } else
    if (n === 0) {
        return [[]];
    } else 
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            if(i === 0 || i === n - 1) {
                for (let j = 0; j < n; j++) {
                    subArr.push("#");
                }
                mainArr.push(subArr);
            }
            else for (let k = 0; k < n; k++) {
                if (k === 0 || k === n - 1) {
                    subArr.push("#");
                } else subArr.push(" "); 
            }
            mainArr.push(subArr);
        }
        return mainArr;
    }
    
};

charBox(1);
charBox(2);
charBox(4);