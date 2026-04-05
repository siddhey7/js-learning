//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7) {
        // console.log("7 is best");
        
        
    }
   // console.log(element);
    
    
}

for (let s = 1; s <= 20; s++) {
    //console.log(`outer loop value : ${s}`);
    
   for (let a = 1; a <= 20; a++) {
   // console.log(`inner loop value : ${a} and inner loop value : ${s}`);
    //console.log(`${a} * ${s} = ${a*s}`);
    
   }
    
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(`length of myarray :` ,array.length);


for (let i = 0; i < array.length; i++) {
    const element = array[i];
   // console.log(element);
}
 

for (let x = 0; x <=20; x++) {
    if (x == 7 ) {
        //console.log("7 detected ");
        break;   
    }
    
    //console.log(`value of x is ${x}`);    
}

for (let x = 0; x <=20; x++) {
    if (x == 7 ) {
       // console.log("7 detected ");
        continue;   
    }
    
    //console.log(`value of x is ${x}`);    
}

