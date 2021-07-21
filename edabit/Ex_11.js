/*
Layers in a Rug
Write a function that counts how many concentric layers a rug.

Examples
countLayers([
  "AAAA",
  "ABBA",
  "AAAA"
]) ➞ 2

countLayers([
  "AAAAAAAAA",
  "ABBBBBBBA",
  "ABBAAABBA",
  "ABBBBBBBA",
  "AAAAAAAAA"
]) ➞ 3

countLayers([
  "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA"
]) ➞ 5
Notes
Multiple layers can share the same component so count them separately (example #2).
Layers will be horizontally and vertically symmetric.
There will be at least one layer for each rug.
*/

function countLayers(rug) {
	let layerCount = 0;
	let layerTracker = [];
	for(let i = 0; i < rug.length; i++) {
		if(layerTracker.indexOf(rug[i]) == -1) {
			layerCount++;
			layerTracker.push(rug[i]);
		}
	}
	return layerCount;
};

countLayers([
    "AAAA",
    "ABBA",
    "AAAA"
  ]);
  
  countLayers([
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABBAAABBA",
    "ABBBBBBBA",
    "AAAAAAAAA"
  ]);
  
  countLayers([
    "AAAAAAAAAAA",
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCADACBAA",
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA"
  ]);

