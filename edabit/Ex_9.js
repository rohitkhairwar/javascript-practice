/*
Numbers in Strings
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them.
 If there are no strings containing numbers, return an empty array.

Examples
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]
Notes
The strings can contain white spaces or any type of characters.
Bonus: Try solving this without RegEx.
*/

function numInStr(arr) {
	newArr=[];

	for (i=0; i<arr.length; i++){
			for (j=0; j<arr[i].length; j++){
					if(arr[i][j]>= '0' && arr[i][j] <= '9'){
							newArr.push(arr[i]);
							break;
					}
			}
	}
	return newArr;
};

numInStr(["1a", "a", "2b", "b"]);

numInStr(["abc", "abc10"]);

numInStr(["abc", "ab10c", "a10bc", "bcd"]);

numInStr(["this is a test", "test1"]);