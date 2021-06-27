/*
Balanced Words
We can assign a value to each character in a word, based on their 
position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced
 word is one where the sum of values on the left-hand side of the word 
 equals the sum of values on the right-hand side. For odd length words,
  the middle character (balance point) is ignored.

Write a function that returns true if the word is balanced, and false 
if it's not.

Examples
balanced("zips") ➞ true
// "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

balanced("brake") ➞ false
// "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
Notes
All words will be lowercase, and have a minimum of 2 characters.
Palindromic words will always be balanced.

*/


const balanced = (string) => {
    let stringArray = [];
    for (let i = 0; i < string.length; i++) {
        if (string.length % 2 === 0) {
            stringArray.push(string[i]);
        } else 
        if (string.length % 2 === 1) {
            if ( i === (Math.floor(string.length / 2) + 1)) {
                continue;
            } else 
            stringArray.push(string[i]);
        }
    }
    let stringPart1 = "";
    let stringPart2 = "";
    for (let i = 0; i < stringArray.length; i++) {
        if (i < (stringArray.length / 2)) {
            stringPart1 += stringArray[i];
        } else
        stringPart2 += stringArray[i];
    }
    let stringPart1ValueSum = 0;
    let stringPart2ValueSum = 0;
    for (let i = 0; i < stringPart1.length; i++) {
          stringPart1ValueSum += stringPart1.charCodeAt(i);
          stringPart2ValueSum += stringPart2.charCodeAt(i);
    }
    if (stringPart1ValueSum === stringPart2ValueSum) {
        return true;
    } else return false;
};

balanced("zips");
balanced("brake");
