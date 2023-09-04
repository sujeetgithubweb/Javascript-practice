// Date 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 19, 59, 58);
// let myCreatedDate = new Date("01-04-2023")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toLocaleString());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString('default', {
    weekday : "long",
}));

