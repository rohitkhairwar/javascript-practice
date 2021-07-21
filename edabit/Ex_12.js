/*
Pluralize!
Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once in the list.

Examples
pluralize(["cow", "pig", "cow", "cow"]) ➞ ["cows", "pig"]

pluralize(["table", "table", "table"]) ➞ ["tables"]

pluralize(["chair", "pencil", "arm"]) ➞ ["chair", "pencil", "arm"]
Notes
This is an oversimplification of the English language so no edge cases will appear.
Only focus on whether or not to add an s to the ends of words.
All tests will be valid.

*/

function pluralize(arr) {
	let newArr = arr;
	let dup = false;
	for (let i = 0; i < arr.length; i++){
		dup = false;
		for (var j = i + 1; j < arr.length; j++){
			if (newArr[i] === newArr[j]){
				dup = true;
				newArr.splice(j,1);
				j--;
			}
		}
		if (dup){
			newArr[i] = newArr[i] + 's';
		}
	}
	return newArr;
};

pluralize(["cow", "pig", "cow", "cow"]);

pluralize(["table", "table", "table"]);

pluralize(["chair", "pencil", "arm"]);