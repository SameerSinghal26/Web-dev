const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value"); // hitesh50 Value

// Now method // Backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // Hello my name is hitesh and my repo count is 50

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]); // h

console.log(gameName.length); // 8

console.log(gameName.toUpperCase()); // HITESHHC

console.log(gameName.charAt(2)); // t

console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0, 4)
console.log(newString); // hite  lat 4 index will not be included.

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // ite

const newStringOne = "     Sameer    ";
console.log(newStringOne);  //      Sameer        
console.log(newStringOne.trim()); // Sameer  // it will remove white spaces.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')); // https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh')); // True

console.log(url.includes('sundar')); // false

console.log(gameName.split('-')); // [ 'hitesh', 'hc', 'com' ]