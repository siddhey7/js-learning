
//for of

//["" , "" , "" , "" , "" , ""]
//[{},{} , {} , {} , {} , {}]

const arr = [1,2,3,4,5,6]

for (const num of arr){
     //console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings){
     if (greet == " ") {
          continue
     }
     // console.log(`each char is ${greet}`);

}

//maps 

const map = new Map()
map.set("IN" , "India")
map.set("PAK" , "Pakistan")
map.set("FRA" , "France")
map.set("IN" , "India")

// console.log(map);

for (const [key, value] of map) {
     // console.log(key, ':-' , value );
}
const myobject ={
     'game1': 'GTAVI',
     'game2': 'PVZ',
     
}
// for (const [key, value] of myobject) {
//      console.log(key, ':-' , value );
// } OBJECT IS NOT ITERABLE

