const userEmail =[];

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user email");
}

// falsy values

// false ,0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// (false == 0) => true
// (false == '') => true
// ('' == 0) => true

// ******Nullish Coalescing Operator (??) : null undefined******

let val1;

val1 = 5 ?? 10;
console.log(val1); // 5 

val1 = null ?? 10; 
console.log(val1); // 10

val1 = undefined ?? 15;
console.log(val1); // 15

val1 = undefined ?? 15 ?? 20;
console.log(val1); // 10

// ******Terniary Opertor******

// condition ? true : false;


const iceteaprice = 100;

iceteaprice <= 80 ? console.log("less tha  80") : console.log("more than 80");

