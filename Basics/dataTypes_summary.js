// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const Anotherid = Symbol('123')

// console.log(id === Anotherid);

 const bigNumber = 87427528729487638268798729n


// Non primitive (reference)

// Array, Objects, Functions

const heros = ["ironman", "spiderman", "thor"];

let myObj = {
    name : "sujeet",
    age : 26,
}

const myFunction = function(){
    console.log("hello world");
}


console.log(typeof outsideTemp);


//   ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) get only copy from memory,  heap(Non-Primitive) get original value from memory

let myName = "Sujeetkumar"

let anothername = myName
anothername = "SUjeet"

console.log(myName);
console.log(anothername);

let userOne = {
    email: "sujet@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sujeet@gooogle.com"

console.log(userOne.email);
console.log(userTwo.email);
