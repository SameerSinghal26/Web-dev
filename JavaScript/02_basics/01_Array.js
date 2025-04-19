//
//  *************Arrays*************
//

const myArr = [0,1,2,3,4,5]
const myheros = ["Batman" , "Ironman","etc.."];

const myArr2 = new Array(1,2,3,4,5);
console.log(myArr[1]); // 1 // 0th-indexing

//
//  *************Arrays-Methods*************
//

myArr.push(6);
console.log(myArr); // [0,1,2,3,4,5,6]

myArr.push(7);
console.log(myArr); // [0,1,2,3,4,5,6,7]

myArr.pop();
console.log(myArr); // [0,1,2,3,4,5,6]

myArr.unshift(9);
console.log(myArr); // [9,0,1,2,3,4,5,6] // it add in 0 th index

myArr.shift();
console.log(myArr); // [0,1,2,3,4,5,6] // it shift the value of the array from right to left 

console.log(myArr.includes(9)); // false // datatype boolean
console.log(myArr.indexOf(9)); // -1 // not present in the given array

const newArr = myArr.join();
console.log(myArr); // [0,1,2,3,4,5,6]
console.log(newArr); // 0,1,2,3,4,5,6 // datatype change to string


//********* Slice , splice *********//

//1.  slice
console.log("Original Array");
console.log("A " ,myArr); // A [0,1,2,3,4,5,6]

const mynew1 = myArr.slice(1,3); // it doesnt do anything to the the original array
console.log("After Slice operation.");
console.log("B " ,myArr); // B [0,1,2,3,4,5,6]
console.log(mynew1); // [1,2]

// 2. Splice

const mynew2 = myArr.splice(1,3); // it remove the value from the original array
console.log("After Splice operation.");
console.log("C " ,myArr); // C [0,4,5,6]
console.log(mynew2); // [1,2,3]
