/*
New Numbers
A new number is a number that is not a permutation of any smaller number. 
869 is not a new number because it is just a permutation of smaller numbers, 689 and 698. 
509 is a new number because it can't be formed by a permutation of any smaller number (leading zeros not allowed).

Write a function that takes a non-negative integer and returns true if the integer is a new number and false if it is not.

Examples
isNew(3) ➞ true

isNew(30) ➞ true

isNew(321) ➞ false

isNew(123) ➞ true
Notes
A curious fact: out of the first one million integers, only 8002 are new.
*/

const getPermutations = arr => {
	let length = arr.length, result = [arr.slice()],
			copy = new Array(length).fill(0), i = 1, j, temp;
	while (i < length) {
		if (copy[i] < i) {
			j = i % 2 && copy[i];
			temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
			++copy[i]; i = 1; result.push(arr.slice());
		} else {
			copy[i] = 0; ++i;
		}
	}
	return result;
}

function isNew(n) {
	let perms = getPermutations(n.toString().split(""))
		.filter(v => v[0] !== "0").map(v => +v.join(""));
	return n.toString().length > 1 ? n === Math.min(...perms) : true;
};


isNew(3); 

isNew(30); 

isNew(321); 

isNew(123);