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