// const score = 100;
// const scoreValue = 100.3
// console.log(typeof score);

// const heros = ['Superman', 'Batman', 'Wonder Woman'];
// console.log(typeof heros);

// let myYoutubeName = "squash";

// let anotherName = myYoutubeName;
// anotherName = "pewdiepie";


// console.log(myYoutubeName);
// console.log(anotherName);

// let userOne= {
//     email : "manas@gmail.com",
//     upi : "manas@upi"
// }

// let userTwo = userOne;

// userTwo.email = "diddy@google.com";

// console.log(userOne.email);
// console.log(userTwo.email);


// +++++++++++++++++++++++++++++++++++++ NUM & MATH +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const balance = new Number(400.69);
// console.log(balance); // Output: [Number: 400]

// // Convert number to string & check length
// console.log(balance.toString().length); // "100" → length = 3 datatypes_summary

// console.log(balance.toFixed(3));


// console.log(Math);

// Math.random()
// console.log(Math.random());

// console.log(Math.floor (Math.random()*1000)+2);

// const min = 1000;
// const max = 1001;

// console.log(Math.floor (Math.random()*(max-min+1))+min);


// ++++++++++++++++++++++++++++++++++++++ STRING ++++++++++++++++++++++++++++++++++++++++++++++++++++++


// let  Name = "siddhey"
// let roll = 62

// console.log(`my name is ${Name} and roll no. is ${roll}`);

// const game = new String('vicecity');    
// console.log(game[4]);


// console.log(game.__proto__ );

// console.log(game.length);

// ++++++++++++++++++++++++++++++++++++++ DATE AND TIME ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.getFullYear());
// console.log(myDate.getDate());





// let mytime = Date.now();
// console.log(mytime);

// ++++++++++++++++++++++++++++++++++++++ Array part 01 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const myarray = [1,2,3,4,5,9,22,78,93]
// console.log(array[0]);
// array.pop();
// console.log(array);
// array.unshift(-1);
// console.log(array);
// array.shift();
// console.log(array);
// console.log("does my array include 69 ?", array.includes(69));
// console.log("index of element 2 ? ",array.indexOf(2));

// console.log("A", myarray); 
// const myn1 = myarray.slice(1, 3); 

// console.log( myn1);
// console.log("B", myarray); 

// const myn2 = myarray.splice(1,3);
// console.log("C", myarray);

// console.log(myn2);

// ++++++++++++++++++++++++++++++++++++++++++++++++++  ARRAY PART 02  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const_name = ["sam","kuch","sssss","kkkk","oll"];
// const_address = ["Pune","nagpur","delhi","madras","goa"];
// // const_name.push(const_address);
// // console.log(const_name);
// // const all = const_name.concat(const_address);
// // console.log(all);
// const all = [...const_name,...const_address];
// console.log("all (using spread):",all);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// // flat(Infinity) → Flattens array to any depth
// const real_flattened_array = another_array.flat(Infinity);
// console.log("Flattened Array:", real_flattened_array);

// console.log(Array.from("sid"));

// console.log(Array.from({ name: "siddhey" }));  
// Interesting: returns [] (empty array) because object is not iterable 
// unless we specify how to convert it. Great interview trick question!

// ++++++++++++++++++++++++++++++++++++++ OBJECTS PART 01 ++++++++++++++++++++++++++++++++++++++++


// const mySym = Symonl("key1")
// const Jsuser = {
//     name: "siddhey",
//     "full name": "siddhey thute",(there is no way u can access this value by .(dot))
//     [sym] : "key1",
//     age:18,
//     email: "siddheythute7@gmail.com",
//     isLoggedIn: false,
//     hobbies : ["crikcet","football","chess"]

// };

// console.log(Jsuser.email);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[sym]);

// Jsuser.email = "try.siddhey@gamil.com";
// console.log(Jsuser);

// // Jsuser.greeting  = function () {
// //     console.log("hello user");
    
// // };

// Jsuser.greeting = function (){
//     console.log(`hello user , ${this.name}`);
    
// }
// console.log(Jsuser.greeting());



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ OBJECTS PART 02 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const bumble_user = {};
//  bumble_user.id = "itzgarry";
//  bumble_user.name = "garry"; 
//  bumble_user.age = "27";
//  bumble_user.email = "itzgarry@gmail.com" 
//  bumble_user.isLoggedIn = true;
//  bumble_user.lastLoginDays = ["tuesday","Wednesday"];
//  console.log("Bumble user :",bumble_user);
  

// const realuser = {
//     gender : "male",
//     fullname : {
//         firstname : "NINU",
//         middlename : "SAM",
//         lastname : "ALTMAN"
//     }
// };

// console.log("fullname:",realuser.fullname);
// console.log("firstname:",realuser.fullname.firstname);
// console.log("middlename:",realuser.fullname.middlename);
// console.log("lastname:",realuser.fullname.lastname);

// const obj1 = {1:"a",2:"b"};
// const obj2 = {3:"c",4:"d"};
// const obj3 = {5:"e",6:"f"};

// const obj4 = Object.assign({}, obj1,obj2,obj3);

// const obj5 = {...obj1 , ...obj2 , ...obj3};

// console.log("Merged using assign:" ,obj4); 
// console.log("merged using spread:",obj5);

// const user = [
//     { id:1, email: "user1@gmail.com",name : "userone" },
//     { id:2, email: "user2@gmail.com",name : "usertwo"},
//     { id:3, email: "user3@gmail.com",name : "userthree"}
// ];



// console.log("Email of 2nd user:",user[0].email);

// console.log("bumble user again",bumble_user);

// console.log("keys:",Object.keys(bumble_user));
// console.log("Values:",Object.values(bumble_user));
// console.log("Entries:",Object.entries(bumble_user));
// console.log("Has isLoggedIn?:",Object.hasOwn("isLoggedIn"));

// const course = {
//     coursename : "js in eng",
//     price: "9999",
//     courseInstructor : "siddhey"

// };
// const { courseInstructor: instructor } = course;
// console.log("Course Instructor:", instructor);
 
// const jsonExample = `{
//     "coursename": "js in hindi",
//     "price": "999",
//     "courseInstructor": "manas"
// }`;

// console.log("JSON String:", jsonExample);


// +++++++++++++++++++++++++++++++++++++++++++++++ FUNCTIONS ++++++++++++++++++++++++++++++++++++++

// function addTwoNumbers (num1,num2){
//     let result = num1 + num2;
//     return result;
// }

// const result = addTwoNumbers(7,9);
// console.log("result of addition ",result);

// function userloggedin (username){
//      return `${username} just logged in`;
    
// }
// console.log(userloggedin("siddhey"));

// function loginusermsg(username){
//     if(username === undefined){
//         return "User is not Logged in";
//     }
//     return `${username} just logged in `;   
// }

// console.log(loginusermsg());

// function calccartprice (val1,val2,val3,...num1){ //... rest operator : collect all remaining arguments into an array
//     return num1;
// }

// console.log(calccartprice(200,400,600,300,100));

// const user = {
//     username : "sid",
//     price : "777"
// };

// function handleObject(anyobject){

//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }

// handleObject({
//     username : "siddhey",
//     price : "77"
// })

// const myNewArr = [1,2,3,4,5];

// function returnSecondValue(getArray){
//     return getArray[1];
// }
// console.log(returnSecondValue([10, 20, 30, 40, 50]));



// ++++++++++++++++++++++++++++++++++++++++++++++++ GLOBAL AND LOCAL SCOPE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let a = 999;

if (true){
    a = 1;
    b = 2;
    // console.log("inside block scope :",a,b);
    
}
// console.log(a);

function one(){
    const user = "sid"

    function two(){
        const site = "insta.com"
        // console.log("user:",user);
        
    }
    // console.log("web:",site);
    
    two()
}
one()

if(true){
    const uname = "sid"
    if( uname==="sid"){

        const website = "insta.com"
        // console.log(uname+website);
        
    }

// console.log(uname);
}

//INTRESTING


function addone(num){
    return num +1 ;
}
// console.log(addone(10));


const addtwo = function (num){
    return num + 2;
}

// let p = addtwo(7);
// console.log(p);

 
// ++++++++++++++++++++++++++++++++++++++++++++++++++ THIS & ARROW Fn.+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const user = {
    username : "siddhey",
    price : 1000,

    welcomemsg: function() {
        // console.log(`${this.username} ,  welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomemsg()
// user.username = "samay"
// user.welcomemsg()
// console.log(this);

//  function coffee(){
//     let username = "sid"
//     console.log(this.username);
   
//  }

 const coffee = () => {
    let username = "sid"
    // console.log(this);
   
 }

//  coffee()



// arrow function basic syntax = () => {}
  
const Addtwo = (num1, num2) => {
    return num1+num2
    
}
// console.log(Addtwo(9,0));

// implicit arrow fn


const AddTwo = (num1, num2) =>(  num1+num2)

// console.log(Addtwo(9,0));



//++++++++++++++++++++++ IMMEDIATELY INVOKEED FUNCTION EXPRESSIONS (IIFE)++++++++++++++++++++++++


(function() {
    let username = "siddhey";
    // console.log(`Hello, ${username}!`);
})();
( () => {
    // console.log(`DATA BASE CONNECTED 2`);
})()

