//
//  *************Functions*************
//

function myname(){
    console.log("S");
    console.log("a");
    console.log("m");
    console.log("e");
    console.log("e");
    console.log("r");
}

// myname --->> it refernces of the function
// myname() --->> it exectue the function

myname(); // S a m e e r

// don't required the datatype in JS...
function add(num1,num2){
    console.log(num1+num2);
}

add(3,5);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));