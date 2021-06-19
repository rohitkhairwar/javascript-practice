/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
    let strArray = [];
    for (let i = 0; i < str.length; i++) {
        strArray.push(str[i]);
    }
    let newStr = "";
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] === "&") {
            newStr += "&amp;";
        } else 
        if (strArray[i] === "<") {
            newStr += "&lt;";
        } else if (strArray[i] === ">") {
            newStr += "&gt;";
        } else if (strArray[i] === "\"") {
            newStr += "&quot;";
        } else if (strArray[i] === "'") {
            newStr += "&apos;";
        } else newStr += strArray[i];
    }
    return newStr;
  }
  
  convertHTML("Dolce & Gabbana");