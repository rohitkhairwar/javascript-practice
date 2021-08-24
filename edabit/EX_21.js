/*
Astonishing Numbers
In this challenge, you have to establish if a given integer is an Astonishing number.
 An Astonishing number is an integer that, when partitioned into two parts a (left) and b (right),
  is equal to the sum of the consecutive numbers from a up to b (if a is lower than b), or from b up to a (if a is greater than b).

Given a positive integer num, implement a function that returns:

The string "AB-Astonishing" if num is an Astonishing number and the partition a is lower than b.
The string "BA-Astonishing" if num is an Astonishing number and the partition a is greater than b.
false if num is not an Astonishing number.
Examples
isAstonishing(15) ➞ "AB-Astonishing"
// There is only one possible partition: a = 1 and b = 5
// Sum from a up to b: 1 + 2 + 3 + 4 + 5 = 15
// It's Astonishing and partition a is lower than partition b

isAstonishing(4020) ➞ false
// There are three possible partitions
// Partition 1: a = 4 and b = 020 = 20 (leading zeros are not considered)
// Sum from a up to b: 4 + 5 + 6 + ... + 20 = 204
// Partition 2: a = 40 and b = 20
// Sum from b up to a: 20 + 21 + 22 + ... + 40 = 630
//Partition 3: a = 402 and b = 0
// Sum from b to a: 0 + 1 + 2 + ... + 402 = 81003
// It's not Astonishing

isAstonishing(2002077) ➞ "BA-Astonishing"
// There are six possible partitions
// Partition 1: a = 2 and b = 002077 = 2077 (leading zeros are not considered)
// Sum from a up to b: 2 + 3 + 4 + ... + 2077 = 2158002
// Partition 2: a = 20 and b = 02077 = 2077
// Sum from a up to b: 20 + 21 + 22 + ... + 2077 = 2157813
// Partition 3: a = 200 and b = 2077
// Sum from a up to b: 200 + 201 + 202 + ... + 2077 = 2138103
// Partition 4: a = 2002 and b = 077 = 77
// Sum from b up to a: 77 + 78 + 79 + ... + 2002 = 2002077
// It's Astonishing and partition a is greater than partition b
*/


const sepNum = (num) => {
    let numInString = num.toString();
    let arr = [];
    let divNum = 10;
    for(let i = 1; i < numInString.length; i++) {
        let subArr = [];
        subArr.push(num % divNum);
        subArr.unshift(Math.floor(num / divNum));
        arr.unshift(subArr);
        subArr = [];
        divNum *= 10;
    }
    return arr;
}; //T.C. = O(n)

const addNumsOfArr = (arr) => {
    let sum = 0;
    if(arr[0] < arr[1]) {
        for(let i = arr[0]; i <=arr[1]; i++) {
            sum += i;
        }
    } else {
        for(let i = arr[1]; i <=arr[0]; i++) {
            sum += i;
        }
    }
    return sum;
}; // T.C. = O(n)

const isAstonishing = (num) => {
    let arr = sepNum(num);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][0] < arr[i][1] && addNumsOfArr(arr[i]) === num) {
            return "AB-Astonishing";
        } else 
        if(arr[i][0] > arr[i][1] && addNumsOfArr(arr[i]) === num) {
            return "BA-Astonishing";
        }        
    }
    return false;
}; // T.C. = O(n2)

isAstonishing(15);
isAstonishing(4020);
isAstonishing(2002077);