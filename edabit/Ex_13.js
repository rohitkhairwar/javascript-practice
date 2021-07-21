/*
Expand a Number I
Create a function that expands a number into a string as shown below:

25 ➞ "20 + 5"
70701 ➞ "70000 + 700 + 1"
685 ➞ "600 + 80 + 5"
Examples
expandedForm(70304) ➞ "70000 + 300 + 4"

expandedForm(1037903) ➞ "1000000 + 30000 + 7000 + 900 + 3"

expandedForm(802539) ➞ "800000 + 2000 + 500 + 30 + 9"
Notes
N/A

*/

function expandedForm(num) {
	
	let str = num.toString();
    let output = "";
	let row = [];
	
	for (let i = 0; i < str.length; i++) {
		if (str[i] != '0') {
            row.push(parseInt(str[i]) * Math.pow(10, str.length-1-i))
        }
	}
	
	for (let i = 0; i < row.length - 1; i++) {
		output += row[i].toString() + ' + '
	}
	
	return output + row[row.length-1].toString()
};

expandedForm(70304);

expandedForm(1037903);

expandedForm(802539);