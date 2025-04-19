//
//  *************Objects*************
//
// singleton  [it will done later.]
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {  // objects
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // symbol can be written as this
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){ // function call
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // printing the object item in the given function
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());