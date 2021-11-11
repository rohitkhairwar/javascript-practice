/*
Reverse the Number
Create a function that takes an integer n and reverses it.

Examples
rev(5121) ➞ "1215"

rev(69) ➞ "96"

rev(-122157) ➞ "751221"
Notes
This challenge is about using two operators that are related to division.
If the number is negative, treat it like it's positive.


*/
//T.C. - O(n)
const rev = (num) => {
    let numb; 
    if(num < 0) {
        numb = -1 * num;
    }else {
        numb = num;
    }
    let arr = [];
    let revNum = 0;

    while (numb > 1) {
        arr.push(numb % 10);
        numb = Math.floor(numb / 10);
    }

    for(let i = 0; i < arr.length; i++) {
        revNum = revNum * 10 + arr[i];
    }
    return revNum;
};


rev(5121); 

rev(69); 

rev(-122157); 