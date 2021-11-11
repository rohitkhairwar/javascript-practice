/*
Basic Calculator
Create a function that takes two numbers and a mathematical operator + - / * 
and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"

*/
 //T.C - O(n)
 
const calculator = (a, b, c) => {
    if (b === "/" && c === 0) {
        return "Can't divide by 0!"
    } else 
        if (b === "+") {
            return a + c;
        
    } else 
        if (b === "-") {
            return a - c;
        
    } else 
        if (b === "*") {
            return a * c;
        
    } 
      else 
        if (b === "/") {
            return a / c;
    } 
};

calculator(2, "+", 2);

calculator(2, "*", 2);

calculator(4, "/", 2);