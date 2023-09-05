// singleton
// Object.create

// object literals
// const JsUser = {}  //empty value

const mySym = Symbol("keys1")

const JsStudent = {
    name:"Sujeet",
    "Full name": "Sujeet kumar",
    [mySym]: "myKey1", 
    age: 20,
    location: "pune",
    email: "sujeetkumar@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["monday", "Sunday"]
}

// console.log(JsStudent.email);
// console.log(JsStudent["email"]);
// console.log(JsStudent["Full name"]);
// console.log(JsStudent[mySym]);

// JsStudent.email = "sujeeeetgmail.com"
// console.log(JsStudent["email"]);
// Object.freeze(JsStudent)
// JsStudent.email = "eeetgmail.com"
// console.log(JsStudent);

JsStudent.greeting = function(){
    console.log(`hello all, ${this.name}`);
}

console.log(JsStudent.greeting());

