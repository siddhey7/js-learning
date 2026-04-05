
// if

const isUserLoggedIn = true;
const temperature = 100;

if ( temperature === 100) {
    console.log("Temperature is 100");
} else {
    console.log("Temperature is not 100");
}

// < , > , <= , >=, != , ===  , !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`) // error

const balance = 1000;

if (balance < 500){
    // console.log("less than");
} else if (balance > 500) {
    // console.log("greater than");
} else {
    // console.log("equal");
}




const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = false; 
const loggedInFromGoogle = true;


if(userLoggedIn && debitCard){
    // console.log("Allow user to buy course");
} else if (loggedInFromEmail) {
    // console.log("Allow user to buy course with email");
}



if(loggedInFromGoogle || loggedInFromEmail) {
    // console.log("Allow user to buy course with Google");
}



//++++++++++++++++++++++++++++++ SWITCH CASE +++++++++++++++++++++++++++++++

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 15:
        console.log("mAY");
        break;

    default:
        break;
}





const userEmail = "user@example.com";

if(userEmail) {
    // console.log("Email is set");
}else{
    // console.log("Email is not set");
}





// falsy values

// false
// 0
// -0
// "" // empty string
// null
// undefined
// NaN
// BigInt 0n


// truthy values
// "0"
// 'false'
// function () {}
// true
// 1
// "non-empty string"
// []
// {}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
 
// nullish coalescing operator (??)

let val = null;
val = val ?? "default value"

console.log(val);
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 10
 val1 = null ?? 10 ?? 20


console.log(val1)



// ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Ice tea is expensive") : console.log("Ice tea is cheap");