/*
RegExp: Validate Pin
Create a RegExp myRegExp to test if a string is a valid pin or not.

A valid pin has:

Exactly 4 or 6 characters.
Only numerical characters (0-9).
No whitespace.
Examples
myRegExp.test("1234") ➞ true

myRegExp.test("45135") ➞ false

myRegExp.test("89abc1") ➞ false

myRegExp.test("900876") ➞ true

myRegExp.test(" 4983") ➞ false
Notes
Empty strings should return false when tested.
If you need help, look in the Resources tab.
*/

const pinTester = (string) => {
    let myRegExp = /^(\d{4}|\d{6})$/
    if (myRegExp.test(string) === true) {
        return true;
    } else return false;
};


pinTester("1234")

pinTester("45135")

pinTester("89abc1")

pinTester("900876")

pinTester(" 4983")


