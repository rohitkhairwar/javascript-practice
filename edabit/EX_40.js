/*
Move Capital Letters to the Front
Create a function that moves all capital letters to the front of a word.

Examples
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"
Notes
Keep the original relative order of the upper and lower case letters the same.
*/

const capToFront = (string) => {
    let capitalWord = "";
    let smallWord = "";

    for (let i = 0; i < string.length; i++) {
        if(string[i].toUpperCase() === string[i]) {
            capitalWord += string[i];
        } else {
            smallWord += string[i];
        }
    }

    let word = capitalWord + smallWord;
    return word;
};

//T.C = O(n)

capToFront("hApPy") 

capToFront("moveMENT") 

capToFront("shOrtCAKE")




