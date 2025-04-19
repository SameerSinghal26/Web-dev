console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
  

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // fasle
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >=0); // false

// ===  // it will also check the **Data Type** of the value

console.log("2" === 2); // false
console.log(2 === 2); // true
console.log("2" === "2"); // true