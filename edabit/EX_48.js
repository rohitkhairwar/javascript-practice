/*
Divide Array into Chunks
Write a function that divides an array into chunks of size n, where n is the length of each chunk.

Examples
chunkify([2, 3, 4, 5], 2) ➞ [[2, 3], [4, 5]]

chunkify([2, 3, 4, 5, 6], 2) ➞ [[2, 3], [4, 5], [6]]

chunkify([2, 3, 4, 5, 6, 7], 3) ➞ [[2, 3, 4], [5, 6, 7]]

chunkify([2, 3, 4, 5, 6, 7], 1) ➞ [[2], [3], [4], [5], [6], [7]]

chunkify([2, 3, 4, 5, 6, 7], 7) ➞ [[2, 3, 4, 5, 6, 7]]
Notes
It's O.K. if the last chunk is not completely filled (see example #2).
Integers will always be single-digit.

*/

//T.C - O(n^2)

function chunkify(arr, size) {
	
	let chunck = [];
	let mainChunk = [];
	let	count;
	
	for (let i = 0; i < arr.length; i += size) {
		count = 0;
		chunck = [];
		while (count < size && i + count < arr.length) {
			chunck.push(arr[i+count]);
			count++;
		}
		mainChunk.push(chunck);
	}
	
	return mainChunk;
};

chunkify([2, 3, 4, 5], 2);

chunkify([2, 3, 4, 5, 6], 2);

chunkify([2, 3, 4, 5, 6, 7], 3);

chunkify([2, 3, 4, 5, 6, 7], 1);

chunkify([2, 3, 4, 5, 6, 7], 7);