// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123fabc"
tinderUser.name ="Sujeet"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname: {
            firstname: "sujeet",
            lastname: "kumar"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}


// const obj4 = { obj1, obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const users = [
    {
        id:1,
        email:"sksk@gmail.com"
    },
    {
        id:1,
        email:"sksk@gmail.com"
    },
    {
        id:1,
        email:"sksk@gmail.com"
    },{
        id:1,
        email:"sksk@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


