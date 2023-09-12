const userEmail  = ""

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont't have user email");
}


// falsy values

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy valsey

// "0" , 'false' , " " , [] , {} , function(){}

// const array = []

// if (array.length === 0) {
//     console.log("array is empty");
// }

empobject = {}
 if (Object.keys(empobject).length === 0) {
    console.log("Object is empty");
 }


 // Nullish Coalescing Operator (??): null undefined

 let value1;

//  value1 = 5 ?? 10
// value1 = null ?? 10
// value1 = undefined ?? 10
// value1 = null ?? 10 ?? 20

 console.log(value1);

 // Terniary Operator

//  condition ? true : false

const iceteaPrice = 100
iceteaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");