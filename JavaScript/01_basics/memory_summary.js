
//   Stack -> *primitive* (copy if we change the value it will no affect the original value.)
//   Heap -> *non-promitive* (reference* if we change the value it will also change the original value.)


let MyEmail = "Sameer1234@gmail.com"

let anotherEmail = MyEmail
anotherEmail = "GobindSinghal123@gmail.com"

console.log(MyEmail);  // Sameer1234@gmail.com
console.log(anotherEmail);  // GobindSinghal123@gmail.com

let myobj = {
    password : "1234567890",
    myupi : "sam@sbi"
}

let myobj2 = myobj

myobj2.myupi = "Gobind@sbi"

console.log(myobj.myupi); // Gobind@sbi
console.log(myobj2.myupi); // Gobind@sbi