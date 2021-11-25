/*
Count the Lone Ones
Create a function which counts how many lone 1s appear in a given number.
 Lone means the number doesn't appear twice or more in a row.

Examples
countLoneOnes(101) ➞ 2

countLoneOnes(1191) ➞ 1

countLoneOnes(1111) ➞ 0

countLoneOnes(462) ➞ 0
Notes
Tests will include positive whole numbers only.

*/

//T.C- O(n)

function countLoneOnes(n) {
	let arr = n.toString().split("");
	let answer = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(i === 0) {
			if(arr[0] === "1" && arr[1] !== "1") {
				answer++;
			}
		}else if(i === arr.length - 1) {
			if(arr[arr.length - 1] === "1" && arr[arr.length - 2] !== "1"){
				answer++;
			}
		}else if(arr[i] == "1" && arr[i+1] !=="1" && arr[i-1] !== "1") {
			answer++;
		}
	}
	return answer;
};

countLoneOnes(101);

countLoneOnes(1191);

countLoneOnes(1111);

countLoneOnes(462);