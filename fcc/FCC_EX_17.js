/*
Arguments Optional
Create a function that sums two arguments together. 
If only one argument is provided, then return a function that 
expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2)
 should return a function.

Calling this returned function with a single argument will
then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
    function checkNum(num) {
      return (typeof num === "number");
    };
  
    if (arguments.length === 2) {
      let first = arguments[0];
      let second = arguments[1];
      if (checkNum(first) && checkNum(second)) {
        return first + second;
      } else {
        return undefined;
      }
    } else if (arguments.length === 1) {
      let first = arguments[0];
      if (checkNum(first)) {
        function addSecond(second) {
          if (checkNum(second)) {
            return first + second;
          } else {
            return undefined;
          }
        };
        return addSecond;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  };

  addTogether(2);