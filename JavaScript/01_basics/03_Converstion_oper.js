let score = "Sam"

console.log(typeof score);  // console.log(typeof(score)); // string
 
let value = Number(score)
console.log(typeof value); // number
console.log(value); // NaN

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string

//
//     Operations 
//
let num = 3
let negnum = -num
console.log(negnum); // -3

let str1 = "hello"
let str2 = " Sameer"

let str3 = str1 + str2
console.log(str3); // hello Sameer

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

let gameCounter = 100
++gameCounter; // incrementer
console.log(gameCounter); //101