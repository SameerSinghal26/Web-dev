//
//  *************Nums*************
//
const score =  6969;

console.log(score); // 6969

const balance = new Number(9696.6969);

console.log(balance);  // [Number: 9696]

console.log(balance.toString()); // 100

console.log(typeof balance.toString()); // string

console.log(balance.toString().length); // 9

console.log(balance.toFixed(3)); // 9696.697 

console.log(balance.toPrecision(3)); // 9.70e+3
console.log(balance.toPrecision(4)); // 9697
console.log(balance.toPrecision(5)); //9696.7
console.log(balance.toPrecision(6)); //9696.70

const hundreds = 10000000;
// by default it convert into us number system.
console.log(hundreds.toLocaleString()); // but in my *VS* it showing int india system. // 1,00,00,000
console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,000

//
//  *************Math*************
//

console.log(Math); //Object [Math] {}

console.log(Math.abs(-6969)); // minus value change to positive value // 6969

console.log(Math.round(69.34)); // 69

console.log(Math.round(68.56)); // 69

console.log(Math.ceil(68.2)); // 69

console.log(Math.floor(69.8)); // 69

console.log(Math.sqrt(49)); // 7

console.log(Math.min(3, 4, 7, 8, 9)); // 3

console.log(Math.max(3, 4, 7, 8, 9)); // 9

console.log(Math.random()); // 0.9950437814562714 // **it will given value between 0 and 1**

console.log((Math.random()*10) + 1); // 9.53690679779534 // it will give minimum value 1 and max 10

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1)) + min)); //  10 